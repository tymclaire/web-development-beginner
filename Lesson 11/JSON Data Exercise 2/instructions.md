# JSON Data Exercise 2: Advanced JSON Parsing with Fetch API

## Instructions

Expand your knowledge of JSON parsing by dynamically extracting additional details about each country and handling edge cases (e.g., missing data).

### Steps to Complete

- Extract Details:
  - Update the capital.textContent to display the capital city of each country.
    - Example: Capital: Tokyo
  - Update the currency.textContent to display the currency of the country.
    - Example: Currency: Yen
  - Update the img.src to point to the flag image (media.flag) for each country.

- Add a Population List Item:
  - Add a new li to the details list to display the population of the country.
  - Use the country.population property.
    - Example: Population: 126.3 million

- Handle Missing Data:
  - Some countries may not have data for certain properties (e.g., capital, currency, media.flag, or population).
  - If the value is missing, use "Data not available" as a fallback.

- Style the Flag:
  - Add a style to the flag images so they are displayed at a consistent size (e.g., 50px width).

- Extra Challenge:
  - Alphabetically sort the countries before displaying them.
  - Use data.sort((a, b) => a.name.localeCompare(b.name)).

## Expected Behavior

When the code is completed and the page is refreshed:

- An unordered list (ul) is displayed containing country names.
- Each country name is followed by its:
  - Capital
  - Currency
  - Population
  - Flag (an image scaled to a consistent size).
- If data is missing, the text "Data not available" should appear instead.

## Running the Test

To test if your code is correct, open the HTML file in Chrome and refresh it.
