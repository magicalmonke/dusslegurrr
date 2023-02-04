// Mach die width des Overlays auf die Breite des Browserfensters, wenn das Bürgermenu geclickt wird.
document.getElementById('burger-menu').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(true);
    document.getElementById("overlay").style.width = "100%";
});

// Mach die width des Overlays auf 0, wenn der close button geclickt wird.
document.getElementById('closebtn').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("overlay").style.width = "0%";
});