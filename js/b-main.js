const largeImage = document.getElementById("large-image");
const imageTitle = document.getElementById("image-title");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Állítsuk be a nagy kép src-jét és alt-ját
    largeImage.src = thumbnail.src;
    largeImage.alt = thumbnail.alt;

    // Állítsuk be a kép fölötti szöveget az alt attribútum alapján
    imageTitle.textContent = thumbnail.alt;
  });
});
