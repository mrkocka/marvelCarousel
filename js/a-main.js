const largeImage = document.getElementById("large-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Csak a nagy kép src-jét állítjuk be
    largeImage.src = thumbnail.src;
  });
});