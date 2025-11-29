function convertGameToWishlistItem(game) {
  return {
    id: game.id,
    name: game.name,
    image: game.background_image,
    store: game.stores?.[0]?.url || null
  };
}
