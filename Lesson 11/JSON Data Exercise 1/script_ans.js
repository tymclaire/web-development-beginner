async function fetchData() {
    try {
        let response = await fetch('https://api.sampleapis.com/countries/countries');
        let data = await response.json();
        console.log(data);
        let ul = document.createElement('ul');
        document.body.appendChild(ul);
        
        
        //Add each country name as a list item to the unordered list
        data.forEach(country => {
            //create a list item
            let li = document.createElement('li');
            //Add the country name to the list item as text content
            li.textContent = country.name;
            //Add the list item to the unordered list
            ul.appendChild(li);
            
            //Create an unordered list to hold the country details
            let details = document.createElement('ul');
            let capital = document.createElement('li');
            capital.textContent = `Capital: ${country.capital}`;
            details.appendChild(capital);

            let currency = document.createElement('li');
            currency.textContent = `Currency: ${country.currency}`;
            details.appendChild(currency);
            
            let flag = document.createElement('li');
            //add the flag as an image
            let img = document.createElement('img');
            img.src = country.media.flag;
            img.alt = country.name;
            flag.appendChild(img);
            details.appendChild(flag);
            //Add each country detail as a list item to the unordered list

            ul.appendChild(details);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();