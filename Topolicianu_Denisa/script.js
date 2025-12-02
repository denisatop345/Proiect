var slides = ["cpu.jpg", "ram.jpg", "disk.jpg"];
var index = 0;
var slideshowStarted = false;

// Schimbă imaginea la 3 secunde
function changeSlide() {
    index++;
    if (index >= slides.length) index = 0;
    document.getElementById("slideimg").src = slides[index];
}

// Eveniment dublu-click pe titlul secțiunii
document.getElementById("monitorizare-title").ondblclick = function() {

    if (!slideshowStarted) {

        // Ascundem imaginile statice
        document.getElementById("static-images").style.display = "none";

        // Afișăm slideshow-ul
        document.getElementById("slideshow").style.display = "block";

        // Pornim slideshow-ul
        setInterval(changeSlide, 3000);

        slideshowStarted = true;
    }
}
