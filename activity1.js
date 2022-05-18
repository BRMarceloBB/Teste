score = 0;

function updateScore () {
   score = score + 1;
   document.getElementById ("score").innerHTML = "Pontuação:" + score;
}
function saveScore () {
    localStorage.getItem ("score", score);
}