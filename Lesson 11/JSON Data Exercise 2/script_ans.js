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
            capital.textContent = `Capital: ${country.capital || "Data not available"}`;
            details.appendChild(capital);

            // Add currency
            let currency = document.createElement('li');
            currency.textContent = `Currency: ${country.currency || "Data not available"}`;
            details.appendChild(currency);

            // Add population
            let population = document.createElement('li');
            population.textContent = `Population: ${country.population || "Data not available"}`;
            details.appendChild(population);

            // Add flag
            let flag = document.createElement('li');
            let img = document.createElement('img');
            img.src = country.media?.flag || '';
            img.alt = country.name;
            img.style.width = '50px';
            flag.appendChild(img);
            details.appendChild(flag);

            ul.appendChild(details);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
