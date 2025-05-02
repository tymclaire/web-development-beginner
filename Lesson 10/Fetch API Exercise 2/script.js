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

        //!Step 2: Add options to the dropdown to allow filtering by region
        //! The list of regions should come from the API response
        //! Complete this part!

        


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

// Step 4: Filter countries by region (Completed)
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
