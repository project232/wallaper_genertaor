const randomImageElement = document.getElementById('random-image');
const generateImageButton = document.getElementById('generate-image');

generateImageButton.addEventListener('click', function() {
    // Determine the screen width
    const screenWidth = window.innerWidth;

    // Determine the image dimensions based on the screen width
    let imageWidth, imageHeight;

    if (screenWidth <= 900) {
        // For small screens (e.g., mobile devices)
        imageWidth = 400;
        imageHeight = 700;
    } else {
        // For larger screens
        imageWidth = 1000;
        imageHeight = 600;
    }

    // Generate a random image with the adjusted dimensions
    fetch(`https://picsum.photos/${imageWidth}/${imageHeight}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.url;
        })
        .then(randomURL => {
            // Update the image source
            randomImageElement.src = randomURL;
        })
        .catch(error => {
            console.log('Error:', error);
        });
});
