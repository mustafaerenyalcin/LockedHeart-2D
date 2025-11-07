document.addEventListener("DOMContentLoaded", () => {
  const favSelect = document.getElementById("favSelect");
  const saveFav = document.getElementById("saveFav");
  const savedFav = document.getElementById("savedFav");
  if (!favSelect || !saveFav || !savedFav) return;

  const storedFav = localStorage.getItem("favoriteCharacter");
  favSelect.value = "";
  savedFav.textContent = "";

  saveFav.addEventListener("click", () => {
    const selected = favSelect.value;
    if (!selected) {
      savedFav.textContent = "Lütfen bir karakter seç.";
      return;
    }
    localStorage.setItem("favoriteCharacter", selected);
    savedFav.textContent = `Favori karakterin: ${selected}`;

    savedFav.classList.add("glow");
    setTimeout(() => savedFav.classList.remove("glow"), 3000);
  });
});
