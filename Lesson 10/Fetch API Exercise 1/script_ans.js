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
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();