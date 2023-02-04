var element = document.getElementById('fast-scroll');
var sticky = element.offsetTop;

window.onscroll = () => {
    // wenn das Sticky-Element oberhalb der Seite ist, dann wird es zur Klasse "sticky" hinzugefügt
    // und somit stickt es an der Seite an.
    if (window.pageYOffset >= sticky) {
        element.classList.add('sticky');
    } else {
        element.classList.remove('sticky');
    }
}