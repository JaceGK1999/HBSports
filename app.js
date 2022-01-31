import { renderStat, renderGame } from './utils.js';

const form = document.getElementById('add-stat');
const statsList = document.getElementById('stats-list');
const gameList = document.getElementById('game-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-game');

let stats = [];
let games = [];

function renderGames() {
    gameList.textContent = '';
    for (let game of games) {
        const li = renderGame(game);
        gameList.append(li);
    }
}

function renderStats() {
    statsList.textContent = '';
    for (let item of stats) {
        const li = renderStat(item);
        statsList.appendChild(li);
    }
}

function resetStats() {
    stats = [];
    statsList.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const item = {
        player: data.get('player'),
        points: Number(data.get('points')),
    };
    stats.push(item);
    renderStats();
    form.reset();
});

remove.addEventListener('click', () => {
    stats.pop();
    renderStats();
});

save.addEventListener('click', () => {
    let totalPoints = 0;
    for (const stat of stats) {
        totalPoints += stat.points;
    }
    games.push({ number: games.length + 1, totalPoints });
    renderGames();
    resetStats();
});
