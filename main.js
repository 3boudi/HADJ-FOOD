// JavaScript for Popup
const popup = document.getElementById('popup');
const contactButton = document.getElementById('contactButton');
const closeButton = document.getElementById('closeButton');

// Show Popup
contactButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    popup.classList.add('active');
});

// Hide Popup
closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
});

// Hide Popup when clicking outside
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});

// Image Change Functions
function changeImage1() {
    let displayImage = document.getElementById('img1');
    if (displayImage.src.includes('1.png')) {
        displayImage.src = '2.png';
    } else {
        displayImage.src = '1.png';
    }
}

function changeImage2() {
    let displayImage = document.getElementById('img2');
    if (displayImage.src.includes('1.png')) {
        displayImage.src = '3.png';
    } else {
        displayImage.src = '1.png';
    }
}
