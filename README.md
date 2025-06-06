# IMT-542-final

## Introduction

This project aims to offer a centralized platform for surfers planning to explore new spots. It brings together scattered information, organizes it, verifies its accuracy, and presents it in a user-friendly way. Currently, each surf spot page includes: the spot’s name, description, location (district, city, country, coordinates), real-time sea surface temperature, best surf season, wave type, skill level, nearby amenities, transportation details, nearby housing (via a TripAdvisor deep link), a gallery of images, and a user contribution section.

Most of this information is collected manually for now, except for the sea surface temperature and accommodation search. Real-time water temperature is retrieved via a custom API that queries Google Earth Engine using the spot’s coordinates and date. Housing search is addressed by providing a link directing users to the TripAdvisor search page. Users can also share feedback or corrections through the contribution box. By simply clicking on a surf spot, users can access all relevant info and begin planning their surf trip — all in one place.

## Future improvements
While the platform works well for now, manual data collection is time-consuming and inefficient. We aim to enhance it in the following ways: 
1. Automated Data Collection: We plan to use web scraping to gather spot descriptions, locations, and nearby amenities. This data will be verified to ensure accuracy before publication.
2. Integrated Booking via APIs: Rather than linking to TripAdvisor search pages, we hope to provide housing options directly via travel platform APIs. However, many of these APIs are private or require approval, so this will take further effort.
3. Verified User Contributions: In the future, a moderation system will be implemented to review user submissions and prevent misinformation or malicious activity.
4. Scalable Data Management: Currently, all surf spot data is stored in a JSON file. As the database grows, we plan to migrate to a more scalable database structure and establish regular data maintenance practices.
5. Ongoing Maintenance: As the project expands, maintaining data quality and user experience will require sustained effort from a dedicated team.
6. Improved UX interface: We will improve the UX interface and present it in a more user-friendly and refined way.

## Caveat 
There are countless surf spots around the world, and this platform only features a limited selection. While we strive to ensure that the listed spots are accurate and comprehensive, we cannot guarantee coverage or reliability for unlisted locations.

## Set-up instructions
### Project structure
Frontend: ```surf-map``` - the frontend React app that displays the surf spots map.

Backend: ```surf-api``` - the backend Express server that fetches real-time sea surface temperature (SST) from Google Earth Engine.

### Prerequisites
Make sure you have the following ready:
1. Node.js
2. npm
3. Git
4. A Google Earth Engine account

### Step 1: Clone the folders
```https://github.com/sitt1iu/IMT-542-final/surf-map.git```

```https://github.com/sitt1iu/IMT-542-final/surf-api.git```

### Step 2: Setup the backend
In the terminal:

```cd surf-api```

```npm install```

The ```credentials/``` folder is not pushed to GitHub for security. Therefore, to access the Google Earth Engine, you should have a Google Earth Engine account JSON key. Place the ```privatekey.json``` inside the ```credentials/``` folder, and the ```credentials/``` folder should fall under the ```surf-api``` folder. 

Start the API server:

```node index.js```

### Step 3: Setup the frontend
In the terminal:

```cd ../surf-map```

```npm install```

```nom start```


