# Performance and quality control

## FAIRness assessment

- Findability: Data is structured in a JSON file with unified attributes. Each surf spot acts as a unique node.

  -Remediation: add metadata standards to make the structure more standardized and scalable.

- Accessible: Information is accessed via the surf map API.

  - Remediation: now the platform can only run on local host. Should be deported to online host. The current access to endpoint is not as user-friendly as others.

- Interoperable: Uses standard formats (JSON), integrates third-party APIs, and combines structured + scraped data. 

  - Remediation: Comments/blogs in HTML requires heavy human labor for cleaning/structuring.


## Data quality

To ensure data quality, here are some aspects:

* Reliable sources: Core data is obtained from reliable sources such as NOAA (for SST) and verified geographic data for surf spot locations.

* Manual validation required: Some fields (such as best surf season, wave type, and skill level) require manual curation and cross-checking to ensure accuracy and consistency across sources.

* Ongoing maintenance needed: Information like amenities, transportation access, and seasonal patterns needs regular updates, as these can change frequently due to local developments.

* Data caveats: Some data points like the exact coordinates of surf spots may have limited precision or availability due to ocean dynamics, and should be treated with caution.

## Tests

* Functional tests: Each surf spot node will be conducted functional tests to ensure all attributes (e.g., location, water temperature, wave type, best season, housing link) display correctly and are connected to the right source.

* Performance tests: The current system supports up to 50 concurrent users. Load testing is ongoing to evaluate system responsiveness and potential scalability needs.
