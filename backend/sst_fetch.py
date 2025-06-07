from datetime import datetime, timedelta
import ee
import sys
import json

ee.Authenticate()  # Only needed the first time, or if not yet logged in
ee.Initialize(project='surfmap-gee-api')

# Read lat, lng, date from command-line args
lat = float(sys.argv[1])
lng = float(sys.argv[2])
date = sys.argv[3]
start_date = date
end_date = (datetime.strptime(date, "%Y-%m-%d") + timedelta(days=1)).strftime("%Y-%m-%d")

# Define point and image
point = ee.Geometry.Point([lng, lat])
collection = ee.ImageCollection('NOAA/CDR/OISST/V2_1') \
              .filterDate(date, ee.Date(date).advance(3, 'day')) \
              .select('sst')

image = collection.mean()

# Get SST value at point
result = image.reduceRegion(
    reducer=ee.Reducer.first(),
    geometry=point,
    scale=5000,
    maxPixels=1e9
)

sst_value = result.getInfo().get('sst', None)

# Convert from 0.01°C to °C if needed
temp_celsius = round(sst_value * 0.01, 2) if sst_value else None

# Print JSON to stdout
print(json.dumps({
    "lat": lat,
    "lng": lng,
    "date": date,
    "temperature_celsius": temp_celsius
}))
