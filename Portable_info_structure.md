# Portable information structure

## New information structure
* Information: We integrated sea surface temperature, surf conditions, housing options into a single node representing each surf spot. All information was cleaned, organized, and verified for consistency.
* 
* Structure: The new structure is a list of nodes (surf spots) with unified attributes combined on one map.
* 
* Format: The platform uses a combination of JSON (for data storage and transfer) and API-based delivery.
* 
* Access Method: Previously, users had to manually search through scattered sources (websites, blogs, etc.). Now, all relevant surf data is accessible through a single endpoint via the surf map API.

## Mapping the improvements to the requirements
The goal of the platform is to provide surfers with a single centralized application where they can easily obtain all relevant information (e.g. location, water temperature, best season) about a surf spot as well as a list of other options for them to select if the one they are looking at does not meet their expectations. 

To meet this requirement, we made the following improvements:

* Created a structured JSON file containing manually collected and verified surf spot data.
  
* Integrated real-time sea surface temperature data via the Google Earth Engine API.

* Added a link to housing search pages (TripAdvisor) to help users explore accommodation near each spot.

These changes ensure that all key information is now accessible in one place, through a consistent data structure, and with improved access methods, fully satisfying the platform’s purpose.


