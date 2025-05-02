async function fetchData() {
    try {
        let response = await fetch('https://api.sampleapis.com/countries/countries');
        let data = await response.json();

        // Sort countries alphabetically by name
        data.sort((a, b) => a.name.localeCompare(b.name));

        let ul = document.createElement('ul');
        document.body.appendChild(ul);

        data.forEach(country => {
            // Create a list item for the country name
            let li = document.createElement('li');
            li.textContent = country.name;
            ul.appendChild(li);

            // Create an unordered list for country details
            let details = document.createElement('ul');

            // Add capital
            let capital = document.createElement('li');
            capital.textContent = `Capital: ${country.capital || "Data not available"}`; // COMPLETED
            details.appendChild(capital);

            // Add currency
            let currency = document.createElement('li');
            currency.textContent = `Currency: ${country.currency || "Data not available"}`; // COMPLETED
            details.appendChild(currency);

            // Add population (Student task)
            let population = document.createElement('li');
            population.textContent = ``; // MODIFY THIS LINE to display population
            details.appendChild(population);

            // Add flag (Student task)
            let flag = document.createElement('li');
            let img = document.createElement('img');
            img.src = ''; // MODIFY THIS LINE to point to the flag URL
            img.alt = country.name;
            img.style.width = ''; // ADD CODE HERE to set the flag image width
            flag.appendChild(img);
            details.appendChild(flag);

            // Append the details list to the main list
            ul.appendChild(details);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
