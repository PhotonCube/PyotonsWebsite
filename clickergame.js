const button = document.getElementById('game1button');
let clicks = 0

button.onclick = function() {
    clicks += 1
    button.textContext = `Clicks: ${clicks}`
}
