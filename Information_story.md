# Information story
## Purpose and Motivation
Surfers traveling to unfamiliar destinations often face scattered, inconsistent information about surf spots. To find the information they need, they have to visit various websites, read multiple blogs. This project was developed to solve that problem by integrating essential surf-related data into one centralized platform. The platform targets surfers of all levels who want to explore new locations and plan their trips efficiently. The primary goal is to reduce research time and provide more informative options when selecting surf spots.
## Scope
Each surf spot entry includes following attributes:
Attributes	Purpose
Name	For geographical clarity and ease of access
Location	
Country	
Coordinates	
Summary/details	To match the user’s skill and seasonal plans
Wave type	
Skill level	
Best surf season	
Real-time water temperature	
Nearby amenities	To support surfing planning
Transportation	
Housing	Allows users to find and book accommodations nearby
Image	For visual context
User contributions	Users can contribute to enrich or correct our data and share feedback on our platform
Our platform will not cover real-time wave forecasts, or nearby tourist attraction, which are considered external to the platform’s current goal. 

## Information structure
The system is structured around a JSON-based dataset, where each spot follows a consistent schema including all listed attributes. While most of the metadata is manually gathered for accuracy, some parts like SST are dynamically queried through a backend API. 
This structured approach ensures scalability, portability, and clarity — meeting the needs of both users and future developers.

