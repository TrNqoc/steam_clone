export function renderGames(games, container) {
    container.innerHTML = "";

    games.forEach(game => {
        const div = document.createElement("div");
        div.className = "game-card";

        div.innerHTML = `
            <img src="${game.background_image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>Rating: ${game.rating}</p>
            <button class="details" data-id="${game.id}">Details</button>
        `;

        container.appendChild(div);
    });
}
