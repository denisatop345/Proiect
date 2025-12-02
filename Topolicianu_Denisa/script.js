var slides = ["cpu.jpg", "ram.jpg", "disk.jpg"];
var index = 0;
var slideshowStarted = false;
function changeSlide() {
    index++;
    if (index >= slides.length) index = 0;
    document.getElementById("slideimg").src = slides[index];
}
document.getElementById("monitorizare-title").ondblclick = function() {

    if (!slideshowStarted) {
        document.getElementById("static-images").style.display = "none";

        document.getElementById("slideshow").style.display = "block";
        setInterval(changeSlide, 3000);

        slideshowStarted = true;
    }
}

