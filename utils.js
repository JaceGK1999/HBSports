export function renderStat(item) {
    const li = document.createElement('li');
    li.textContent = `${item.player} (${item.points} Points)`;
    return li;
}

export function renderGame(game) {
    const li = document.createElement('li');
    li.textContent = `Game #${game.number} - ${game.totalPoints} Points Scored`;
    return li;
}
