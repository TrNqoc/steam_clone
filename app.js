import { getPopular, searchGames,getTopRated } from "./api.js";
import { renderGames } from "./ui.js";

const searchInput = document.getElementById("search");
const popularGrid = document.getElementById("popular-grid");
const topRatedGrid = document.getElementById("toprated-grid")

// ==== Load popular khi mở trang ====
window.addEventListener("DOMContentLoaded", async () => {
  const games = await getPopular();
  renderGames(games, popularGrid);
});
window.addEventListener("DOMContentLoaded", async () => {
  const games = await getTopRated();
  renderGames(games, topRatedGrid);
});

// ==== Search Enter key ====
searchInput.addEventListener("keyup", async (e) => {
  const keyword = e.target.value.trim();

  if (e.key === "Enter" && keyword !== "") {
    const results = await searchGames(keyword);
    renderGames(results, popularGrid);
  }

  if (keyword === "") {
    const games = await getPopular();
    renderGames(games, popularGrid);
  }
});

// ==== Click nút Details ====
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("details")) {
    const id = e.target.dataset.id;
    window.location.href = `detail.html?id=${id}`;
  }
});
export async function getDetail(id) {
  const res = await fetch(`${API_BASE}/games/${id}?key=${API_KEY}`);
  return res.json();
}
