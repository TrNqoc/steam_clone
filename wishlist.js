function addToWishlist(game) {
  const list = getWishlist();
  const item = convertGameToWishlistItem(game);

  if (list.some(g => g.id === item.id)) {
    alert("Game đã có trong wishlist!");
    return;
  }

  list.push(item);
  saveWishlist(list);
}
function renderWishlist() {
  const list = getWishlist();
  const container = document.querySelector(".wishlist");

  container.innerHTML = "";

  list.forEach(item => {
    container.innerHTML += `
      <div class="wish-item">
        <img src="${item.image}" width="100">
        <p>${item.name}</p>
        <button onclick="removeWishlist(${item.id})">Remove</button>
      </div>
    `;
  });
}
