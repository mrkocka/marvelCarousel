const largeImage = document.getElementById("large-image");
const imageTitle = document.getElementById("image-title");
const thumbnails = document.querySelectorAll(".thumbnail");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupClose = document.getElementById("popup-close");

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

// Nagy kép kattintás: teljes képernyős nézet
largeImage.addEventListener("click", () => {
  popupImage.src = largeImage.src; // Nagy kép forrását másoljuk a popupba
  popup.style.display = "flex"; // Megjelenítjük a popupot
});

// Popup bezárása
popupClose.addEventListener("click", () => {
  popup.style.display = "none"; // Elrejtjük a popupot
});

// Bezárás kattintásra a popup háttéren
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
