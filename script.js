function showContent() {
    const heart = document.getElementById('heart');
    const content = document.getElementById('content');
    const imagesDiv = document.getElementById('images');
    const poemDiv = document.getElementById('poem');
    const emojiContainer = document.getElementById('emojiContainer');
    const loveLetter = document.getElementById('loveLetter');
    const loveAudio = new Audio('deineSprachnachricht.mp3');  // Pfad zur Sprachnachricht

    // Verstecke das Herz
    heart.classList.add('hidden');

    // Zeige das Content-Div
    content.classList.remove('hidden');

    // Stelle sicher, dass das Gedicht & Emoji anfangs versteckt sind
    poemDiv.style.display = "none";
    emojiContainer.classList.add("hidden");

    // Liste der Bilder
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let imageIndex = 0;

    // Erstes Bild erstellen
    const img = document.createElement('img');
    img.src = images[imageIndex];
    img.alt = "Love Memory";
    img.style.cursor = "pointer";  
    img.style.display = "block";
    img.style.margin = "20px auto";
    img.style.width = "450px";  // Stelle sicher, dass JavaScript das Bild größer setzt
    img.style.height = "auto";  // Behalte das Seitenverhältnis bei 

    imagesDiv.innerHTML = "";  
    imagesDiv.appendChild(img);

    // Bild-Klick-Event: Zeigt das nächste Bild oder das Emoji
    img.addEventListener("click", () => {
        imageIndex++;

        if (imageIndex < images.length) {
            img.src = images[imageIndex];  
        } else {
            img.style.display = "none";  
            emojiContainer.classList.remove("hidden");  // Zeigt das 💌 Emoji an
        }
    });

    // Klick-Event für das 💌-Emoji
    loveLetter.addEventListener("click", () => {
        emojiContainer.style.display = "none";  // Verstecke das Emoji
        poemDiv.style.display = "block";  // Zeige das Gedicht
        loveAudio.play();  // Spiele die Sprachnachricht ab
        showHearts();  // Starte die Herz-Animation
    });

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
