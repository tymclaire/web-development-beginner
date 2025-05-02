async function fetchData() {
    try {
        let response = await fetch('https://api.sampleapis.com/countries/countries');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();
