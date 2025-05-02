function fetchData() {
    fetch('https://api.sampleapis.com/countries/countries')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
}
fetchData();
