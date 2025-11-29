import { getDetail } from "./api.js";

const titleEl = document.getElementById("title");
const bannerEl = document.getElementById("banner");
const descEl = document.getElementById("description");
const genresEl = document.getElementById("genres");
const ratingEl = document.getElementById("rating");
const screenshotsEl = document.getElementById("screenshots");

// Lấy id từ URL
const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

// Load chi tiết game
async function loadGame() {
    const data = await getDetail(gameId);

    titleEl.textContent = data.name;
    bannerEl.src = data.background_image;
    descEl.innerHTML = data.description || "No description available.";
    genresEl.textContent = data.genres.map(g => g.name).join(", ");
    ratingEl.textContent = data.rating;

    // Lấy screenshot
    if (data.short_screenshots) {
        data.short_screenshots.forEach(img => {
            const image = document.createElement("img");
            image.src = img.image;
            screenshotsEl.appendChild(image);
        });
    }
}

loadGame();
  export async function renderGameDetail(game) {
  const container = document.querySelector(".game-detail");

  container.innerHTML = `
    <h2>${game.name}</h2>
    <img src="${game.background_image}" width="300">
    <button id="wishlist-btn">Add to Wishlist</button>
  `;

  document.querySelector("#wishlist-btn")
    .addEventListener("click", () => addToWishlist(game));
}

