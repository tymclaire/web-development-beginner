// Define page content for each route
const routes = {
    home: `<div><h1>General Details</h1><p>Bangkok is the capital city of Thailand and has a population of over 10 million people. It is one of the world's top tourist destinations and has been named the world's most-visited city numerous times. Its name in Thai has 168 letters, but locals usually refer to Bangkok as Krung Thep, which roughly translates to 'City of Angels'. With a wide variety of activities and attractions, from traditional markets and exquisite temples to rooftop bars and modern luxury malls, there is something for everybody in Bangkok!</p><img width="300px" src="images/bangkokstreet.jpg" alt="Street in Bangkok"></div>`, //Change the content of the home route
    about: `<div class="about"><h3>Visiting Temples</h3><p>Thailand is known for its beautiful and grand temples, and Bangkok as the capital city, has more than its share of these amazing temples. Temples like <a href="https://en.wikipedia.org/wiki/Wat_Arun">Wat Arun</a> by the Chao Phraya River and <a href="https://en.wikipedia.org/wiki/Wat_Phra_Kaew">Wat Phra Kaew</a>, the Temple of the Emerald Buddha, will be sure to blow you away with their magesty!</p><img width="300px" src="images/watarun.jpg" alt="Wat Arun"><h3>Shopping</h3><p>Bangkok is home to many luxury malls that cater to all ages! Popular ones include <a href="https://www.siamparagon.co.th/">Siam Paragon</a>, <a href="https://www.emquartier.co.th/">Emquartier</a>, and <a href="https://www.iconsiam.com/en">Icon Siam</a>. With fancy decorations and so many shops, there are so many things to experience!</p><img width="300px" src="images/iconsiam.jpg" alt="Icon Siam"></div>`, //Change the content of the about route
    contact: `<div class="contact"><h2 style="margin: 10px;">Connect with Me!</h2><form style="margin: 10px;"><label for="name">Your name:</label><br><input type="text" id="name" name="name" placeholder="Name"><br><label for="phone">Your phone number:</label><br><input type="text" id="phone" name="phone" placeholder="Phone"><br><h4>What do you like to do in Bangkok?</h4><input type="radio" id="temples" name="rate" value="temples"><label for="temples">Visiting Temples</label><br><input type="radio" id="shopping" name="rate" value="shopping"><label for="shopping">Shopping</label><br><input type="radio" id="others" name="rate" value="others"><label for="others">Others</label><br><br><button onclick="alert('Submitted form!')">Submit</button></form></div>`    //Change the content of the contact route
};

// Function to load the correct content based on the URL
function navigateTo(page) {
    // Update the content area
    document.getElementById('content').innerHTML = routes[page] || `<h2>Page Not Found</h2>`;
    
    // Update the URL without reloading
    window.history.pushState({ page }, page, `#${page}`);
}

// Handle back/forward navigation
window.addEventListener('popstate', function (event) {
    let page = location.hash.replace('#', '') || 'home';
    document.getElementById('content').innerHTML = routes[page];
});

// Load the correct content on page load
window.addEventListener('load', function () {
    let page = location.hash.replace('#', '') || 'home';
    document.getElementById('content').innerHTML = routes[page];
});
