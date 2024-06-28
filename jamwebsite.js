document.addEventListener('DOMContentLoaded', function() {
    const places = document.querySelectorAll('.places');
    const body = document.querySelector('.body');

    // Array of background images
    const backgroundImages = [
        'baguio2.jpeg',
        'paris.jpeg',
        'japan1.jpeg',
    ];

    // Function to change background image
    let index = 0; // Start with the first image
    function changeBackgroundImage() {
        body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)), url(${backgroundImages[index]})`;
        index = (index + 1) % backgroundImages.length; // Loop through images
    }

    // Add click event listener to each place
    places.forEach(place => {
        place.addEventListener('click', changeBackgroundImage);
    });
});
