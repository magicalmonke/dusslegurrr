// Die Constante Elements ist ein Array (Aus einer HTMLCollection), welches alle Elemente der Klasse "faq-question" enthält.
const elements = Array.from(document.getElementsByClassName('faq-question'));

// Für jedes Element in der Constante Elements wird die der "click" EventListener hinzugefügt.
for (const element of elements) {
    element.addEventListener('click', () => {
        // Wenn das Element geclickt wurde, wird das erste Element mit der Icon Klasse aus dem geclickten Element genommen.
        const icon = element.getElementsByClassName('material-symbols-outlined')[0];

        // Mit switch wird geguckt was grade in dem element steht und gegen das gegenteil ausgetauscht
        switch (icon.textContent) {
            case 'add':
                icon.textContent = 'remove';
                break;
            case 'remove':
                icon.textContent = 'add';
                break;
            // Fals etwas schief geht ist immer ein default case da.
            default: 
                icon.textContent = 'add';
                break;
        }
    });
}
