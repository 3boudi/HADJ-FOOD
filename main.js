function changeImage() {
    let displayImage = document.getElementById('img1');
    if (displayImage.src.includes('1.jpg')) {
        displayImage.src = '2.jpg';
    } else {
        displayImage.src = '1.jpg';
    }
}

function changeimage() {
    let displayImage = document.getElementById('img2');
    if (displayImage.src.includes('1.jpg')) {
        displayImage.src = '3.jpg';
    } else {
        displayImage.src = '1.jpg';
    }
}
