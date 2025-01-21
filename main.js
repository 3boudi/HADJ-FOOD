
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
        displayImage.src = '4.png';
    } else {
        displayImage.src = '1.png';
    }
}