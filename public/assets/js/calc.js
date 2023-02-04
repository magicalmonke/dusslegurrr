// Object, bei welchem die keys die namen und preise der verschiedenen optionen sind.
const prices = {
    country: {
        ca: 6,
        de: 2,
        fr: 3,
        it: 3,
        es: 3,
        uk: 4,
        us: 6
    },
    weight: {
        2: 0.5,
        5: 1.5,
        10: 4,
        31.5: 6
    },
    size: {
        small: 0.5,
        medium: 2,
        large: 4.50
    },
    method: {
        slow: 2,
        fast: 4,
        light: 12.30
    }
}

// Die Constante Elements ist ein Array (Aus einer HTMLCollection), welches alle Elemente der Klasse "faq-question" enthält.
const elements = Array.from(document.getElementsByClassName('calculator--select'));

// Die Funktion getPrice berechnet die Preise und gibt diese aus.
const getPrice = () => {
    // Hierzu werden zuerst alle wichtigen Elemente aus dem Elements Array ausgelesen. Dies geschiet mit der Array.find() Funktion.
    // In dem geguckt wird bei welchem Element der name "x" ist.
    const country = elements.find(element => element.name === 'country').value;
    const weight = elements.find(element => element.name === 'weight').value;
    const size = elements.find(element => element.name === 'size').value;
    const method = elements.find(element => element.name === 'method').value;

    // Hier wird die Preisberechnung ausgeführt. Dazu werden die Preise aus dem Object prices ausgelesen und mit den
    // Werten aus dem prices Objekt multipliziert.
    const price = prices.country[country] + prices.weight[weight] + prices.size[size] + prices.method[method];

    // Hier wird der Preis in das Element mit der id "price" geschrieben.
    document.getElementById('price').innerHTML = price.toFixed(2);
}

// Führt die Funktion getPrice aus, sobald die Seite geladen ist. Dafür ist kein event listener nötig, da das script mit dem
// "defer" Attribut geladen wird.
getPrice();

// Für jedes element in der Constante Elements wird die der "change" EventListener hinzugefügt und die Funktion getPrice,
// welche die Preise berechnet, ausgeführt, sobald das Element geändert wird.
for (const element of elements) {
    element.addEventListener('change', () => {
        getPrice();
    });
}
