function showContent() {
    const heart = document.getElementById('heart');
    const content = document.getElementById('content');
    const imagesDiv = document.getElementById('images');
    const poemDiv = document.getElementById('poem');

    // Verstecke das Herz
    heart.classList.add('hidden');

    // Zeige das Content-Div
    content.classList.remove('hidden');

    // Liste der Bilder
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let imageIndex = 0;

    // Erstes Bild erstellen
    const img = document.createElement('img');
    img.src = images[imageIndex];
    img.alt = "Love Memory";
    img.style.cursor = "pointer";  // Damit es klickbar aussieht
    img.style.display = "block";  // Damit das Bild zentriert bleibt
    img.style.margin = "20px auto";  // Abstand und zentrierte Darstellung
    img.style.width = "250px";  // Größe der Bilder anpassen

    // Stelle sicher, dass nur EIN Bild sichtbar ist
    imagesDiv.innerHTML = "";  // Vorheriges Bild löschen
    imagesDiv.appendChild(img);

    // Bild-Klick-Event: Zeigt das nächste Bild oder das Gedicht
    img.addEventListener("click", () => {
        imageIndex++;
        if (imageIndex < images.length) {
            img.src = images[imageIndex];  // Nächstes Bild anzeigen
        } else {
            img.classList.add('hidden');  // Letztes Bild ausblenden
            poemDiv.classList.remove('hidden');  // Gedicht anzeigen
        }
    });
}
