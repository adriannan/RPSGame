// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: '',
    aiHand: '',
    playerHandHTML: ''
}

const hands = document.querySelectorAll('.select img')

function handSelection() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 5px 3px pink'
}


hands.forEach(hand => hand.addEventListener('click', handSelection))