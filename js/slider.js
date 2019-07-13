var i = 0;
var imageFiles = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];

window.setInterval(startSlider, 2000);

function startSlider() {
    document.getElementById('slider').src = "css/images1/home/" + imageFiles[i];
    i++;
    if (i > 4) {
        i = 0;
        
    }
}