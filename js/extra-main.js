const largeImage = document.getElementById("large-image");
const imageTitle = document.getElementById("image-title");
const thumbnails = document.querySelectorAll(".thumbnail");
let currentIndex = 0;
const totalimages = thumbnails.length;

function updateLargeImage(params) {
  //Aktuális kép kiválasztása
  const currentThumbnail = thumbnails[currentIndex];
  //Nagy kép frissitése az aktuális kicsire
  largeImage.src = currentThumbnail.src;
  imageTitle.textContent = currentThumbnail.alt;

  //Index frissités ami végig megy folyton
  currentIndex = (currentIndex + 1) % totalimages;
}
//időzítő
setInterval(updateLargeImage, 4000);
