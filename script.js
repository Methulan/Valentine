function showContent() {
    const heart = document.getElementById('heart');
    const content = document.getElementById('content');
    const imagesDiv = document.getElementById('images');
    const poemDiv = document.getElementById('poem');
    const emojiContainer = document.getElementById('emojiContainer');
    const loveLetter = document.getElementById('loveLetter');
    const backgroundMusic = new Audio('hintergrundmusik.mp3'); // Hintergrundmusik

    // 💖 Herz verschwinden lassen
    if (heart) {
        heart.style.display = "none";
    }

    // 🎬 Zeige den Haupt-Content
    content.classList.remove('hidden');

    // 🎵 Versuche die Musik zu starten (falls blockiert, muss Nutzer interagieren)
    backgroundMusic.play().catch(() => {
        console.log("Autoplay wurde blockiert. Nutzer muss zuerst klicken.");
    });
    backgroundMusic.loop = true;

    // 📜 Stelle sicher, dass Gedicht & Emoji anfangs versteckt sind
    poemDiv.style.display = "none";
    emojiContainer.classList.add("hidden");

    // 📸 Liste der Bilder
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let imageIndex = 0;

    // Erstes Bild erstellen
    const img = document.createElement('img');
    img.src = images[imageIndex];
    img.alt = "Love Memory";
    img.style.cursor = "pointer";
    img.style.display = "block";
    img.style.margin = "20px auto";
    img.style.width = "500px";  // Größere Bilder
    img.style.height = "auto";

    // Stelle sicher, dass nur EIN Bild sichtbar ist
    imagesDiv.innerHTML = "";
    imagesDiv.appendChild(img);

    // 🎯 Bild-Klick-Event: Zeigt das nächste Bild oder das Emoji
    img.addEventListener("click", () => {
        imageIndex++;

        if (imageIndex < images.length) {
            img.src = images[imageIndex];  // Nächstes Bild anzeigen
        } else {
            img.style.display = "none";  // Letztes Bild ausblenden
            emojiContainer.classList.remove("hidden");  // 💌 Emoji anzeigen
        }
    });

    // 💌 Klick-Event für das Emoji (öffnet Gedicht & startet Herz-Animation)
    loveLetter.addEventListener("click", () => {
        emojiContainer.style.display = "none";  // Emoji ausblenden
        poemDiv.style.display = "block";  // Gedicht anzeigen
        showHearts();  // Starte die Herz-Animation
    });

    // ❤️ Funktion für Herzanimation
    function showHearts() {
        for (let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 300);
        }
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
