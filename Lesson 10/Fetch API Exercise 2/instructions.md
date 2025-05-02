# Fetch API Exercise 2: Display Country Data and Filter by Region

## Instructions

In this exercise, you will complete the JavaScript code to fetch country data from an API and dynamically display a list of countries with their flags. You will also add a dropdown to filter countries by region.

The HTML file is already provided, and your task is to finish the provided JavaScript code.

- The HTML file has been set up as index.html.
- The JavaScript file has been set up as script.js.
- You will need to fetch data from the provided API and filter the countries based on the region selected from the dropdown.

### Steps

- Step 1: Fetch Country Data
  - Use the Fetch API to get the country data from the endpoint <https://restcountries.com/v3.1/all>.
  - Parse the data into a JavaScript object using .json().
- Step 2: Create Region Dropdown
  - Create a dropdown menu with options for each region (e.g., Asia, Europe, etc.).
  - You will extract these regions from the data object, which is the result of the API call.
  - Add an event listener to the dropdown that will call the function to filter countries based on the selected region.
- Step 3: Filter Countries by Region
  - Implement the function filterCountriesByRegion that filters countries based on the selected region.
  - Display only the countries that belong to the selected region, or show all countries if no region is selected.
- Step 4: Display Country Information
  - For each country, display its name and flag on the web page.
  - Create list items (li) dynamically using document.createElement('li') and append them to an unordered list (ul).

### Code Snippet to Complete

```javascript
async function fetchCountryData() {
    try {
        // Step 1: Fetch country data using Fetch API
        let response = await fetch('https://restcountries.com/v3.1/all');
        let data = await response.json();
        
        // Create an unordered list to display the countries
        let ul = document.createElement('ul');
        document.body.appendChild(ul);

        // Create a dropdown to filter countries by region
        let regionDropdown = document.createElement('select');
        document.body.appendChild(regionDropdown);

        // Step 2: Add options to the dropdown to allow filtering by region
        // (You need to complete this part)

        // Step 3: Add event listener for region change and filter countries by region
        regionDropdown.addEventListener('change', (event) => {
            let selectedRegion = event.target.value;
            filterCountriesByRegion(selectedRegion, data, ul);
        });

        // Initial display of all countries
        filterCountriesByRegion('all', data, ul);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Step 4: Filter countries by region
function filterCountriesByRegion(region, data, ul) {
    ul.innerHTML = ''; // Clear the previous list

    // Step 5: Loop through countries and display only those from the selected region
    data.forEach(country => {
        if (region === 'all' || country.region === region) {
            let li = document.createElement('li');
            let countryName = country.name.common;
            let flagUrl = country.flags.png;

            // Create an image element for the flag
            let img = document.createElement('img');
            img.src = flagUrl;
            img.alt = `${countryName} flag`;
            img.style.width = '50px'; // Optional: set the image size

            // Create text content for the country name
            let text = document.createTextNode(` ${countryName}`);

            // Append the image and text to the list item
            li.appendChild(img);
            li.appendChild(text);

            // Append the list item to the unordered list
            ul.appendChild(li);
        }
    });
}

fetchCountryData();
```

### Expected Behavior

When the code runs, the HTML page should display:

- A dropdown menu to filter countries by region.
- A list of countries showing their name and flag.
- The list will update based on the region selected from the dropdown.
- If no region is selected, all countries should be displayed.

The console should also display the data fetched from the API.

## Running the Test

To test if your code is correct, open the HTML file in Chrome and refresh it. Use the dropdown to filter countries by region and check if the list updates accordingly.
