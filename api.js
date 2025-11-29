// RAWG API base
const API_BASE = "https://api.rawg.io/api";
const API_KEY = "ce43588c712c43c6b355b533c58f6c60"; // <-- Thay bằng key thật!

export async function getPopular() {
    const res = await fetch(`${API_BASE}/games?key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}
export async function getTopRated() {
    const res = await fetch(`${API_BASE}/games?key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export async function searchGames(query) {
    const res = await fetch(`${API_BASE}/games?search=${query}&key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export async function getDetail(id) {
    const res = await fetch(`${API_BASE}/games/${id}?key=${API_KEY}`);
    return res.json();
}
 export async function getGameDetail(id) {
  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  const data = await res.json();
  return data;
}