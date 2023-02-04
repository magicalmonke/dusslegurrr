// Array mit den Elementen der Klasse "gallery-item"
const elements = Array.from(document.getElementsByClassName('gallery--item'));

// Funktion, die das Bild des Elements ändert.
const changeImg = (element) => {
    // string welcher den Pfad zum Bild enthält. Das die nummer des Bildes wird zufällig zwischen 0 und 51 gewählt.
    const newImgUrl = '/assets/images/pigeons/pog-' + Math.floor(Math.random() * 51) + '.jpg';
    element.style.backgroundImage = 'url(' + newImgUrl + ')';
}

// Für jedes element in elements wird die Funktion changeImg aufgerufen. Einmal nach dem Laden der Seite und dann bei
// jedem click auf das Element.
for (const element of elements) {
    changeImg(element);

    element.addEventListener('click', () => {
        changeImg(element);
        console.log("owo");
    });
}