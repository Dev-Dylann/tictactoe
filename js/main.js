// BLUEPRINT CLASS FOR SCORES OBJECT

class blueprint {
  constructor() {
    this.userWins = 0;
    this.aiWins = 0;
  }
}

// GETTING PREVIOUS SCORES

// HELPER FUNCTIONS

const checkLocalStorage = () => {
  let scores = localStorage.getItem(`tictactoe`);
  if (!scores) {
    scores = new blueprint();

    scores = JSON.stringify(scores);
    localStorage.setItem(`tictactoe`, scores);
  }

  scores = JSON.parse(scores);
  return scores;
};

const displayPreviousScores = (scores) => {
  const playerScore = document.querySelector(`.player-score`);
  const aiScore = document.querySelector(`.ai-score`);

  playerScore.innerHTML = scores.userWins;
  aiScore.innerHTML = scores.aiWins;
};

// MAIN FUNCTIONS

const gettingScores = () => {
  let scores = checkLocalStorage();

  displayPreviousScores(scores);
};

gettingScores();

// RESETTING SCORES

const resetScores = () => {
  const resetBtn = document.querySelector(`.reset`);

  resetBtn.onclick = () => {
    localStorage.removeItem(`tictactoe`);

    let scores = checkLocalStorage();
    displayPreviousScores(scores);
  };
};

resetScores();

// GAME FLOW

const userSign = () => {
  const btns = document.querySelectorAll(`.choice`);

  btns.forEach((b) => {
    b.onclick = () => {
      const playAs = document.querySelector(`.play-as`);

      playAs.innerHTML = `Playing as ${b.id}`;

      const modal = document.querySelector(`.modal`);
      const modalBox = document.querySelector(`.modal-box`);
      modal.classList.remove(`open-modal`);
      modalBox.classList.remove(`open-modal-box`);

      localStorage.setItem(`userSign`, b.id);
    };
  });
};

const randomNumber = () => {
  const playable = document.querySelectorAll(`.playable`);
  let amount = playable.length - 1;
  let number = Math.floor(Math.random() * amount);

  return number;
};

const blockFour = () => {
  const gridItem = document.querySelectorAll(`.grid-item`);

  if (
    gridItem[7].innerHTML == gridItem[1].innerHTML ||
    gridItem[0].innerHTML == gridItem[8].innerHTML ||
    gridItem[5].innerHTML == gridItem[3].innerHTML ||
    gridItem[2].innerHTML == gridItem[6].innerHTML
  ) {
    if (
      (gridItem[0].innerHTML != `` && gridItem[8].innerHTML != ``) ||
      (gridItem[7].innerHTML != `` && gridItem[1].innerHTML != ``) ||
      (gridItem[5].innerHTML != `` && gridItem[3].innerHTML != ``) ||
      (gridItem[2].innerHTML != `` && gridItem[6].innerHTML != ``)
    ) {
      let position = gridItem[4];
      if (position.classList.contains(`playable`)) {
        let aiPlays = 4;
        return aiPlays;
      } else {
        let aiPlays = `random`;
        return aiPlays;
      }
    } else {
      let aiPlays = `random`;
      return aiPlays;
    }
  }
};

const aiTurn = (userSign) => {
  const playable = document.querySelectorAll(`.playable`);

  let position = randomNumber();

  let aiPosition = blockFour();
  let typeCheck = typeof aiPosition;

  if (typeCheck == `string`) {
    let aiPlay = playable[position];

    if (userSign == `X`) {
      try {
        aiPlay.innerHTML = `O`;
        aiPlay.classList.remove(`playable`);
      } catch (e) {
        e = `Its a tie bitch`;
        return e;
      }
    } else {
      try {
        aiPlay.innerHTML = `X`;
        aiPlay.classList.remove(`playable`);
      } catch (e) {
        e = `Its a tie bitch`;
        return e;
      }
    }
  } else if (typeCheck == `number`) {
    const gridItem = document.querySelectorAll(`.grid-item`);
    let aiPlay = gridItem[aiPosition];

    if (userSign == `X`) {
      try {
        aiPlay.innerHTML = `O`;
        aiPlay.classList.remove(`playable`);
      } catch (e) {
        e = `Its a tie bitch`;
        return e;
      }
    } else {
      try {
        aiPlay.innerHTML = `X`;
        aiPlay.classList.remove(`playable`);
      } catch (e) {
        e = `Its a tie bitch`;
        return e;
      }
    }
  } else {
  }
};

const checkWin = () => {
  const gridItem = document.querySelectorAll(`.grid-item`);
  const userSign = localStorage.getItem(`userSign`);

  if (
    gridItem[0].innerHTML == gridItem[1].innerHTML &&
    gridItem[0].innerHTML == gridItem[2].innerHTML
  ) {
    if (gridItem[0].innerHTML == ``) {
    } else if (userSign == gridItem[0].innerHTML) {
      gridItem[0].style.color = `green`;
      gridItem[1].style.color = `green`;
      gridItem[2].style.color = `green`;
      let winner = `user`;
      return winner;
    } else {
      gridItem[0].style.color = `red`;
      gridItem[1].style.color = `red`;
      gridItem[2].style.color = `red`;
      let winner = `ai`;
      return winner;
    }
  } else if (
    gridItem[3].innerHTML == gridItem[4].innerHTML &&
    gridItem[3].innerHTML == gridItem[5].innerHTML
  ) {
    if (gridItem[3].innerHTML == ``) {
    } else if (userSign == gridItem[3].innerHTML) {
      gridItem[3].style.color = `green`;
      gridItem[4].style.color = `green`;
      gridItem[5].style.color = `green`;
      let winner = `user`;
      return winner;
    } else {
      gridItem[3].style.color = `red`;
      gridItem[4].style.color = `red`;
      gridItem[5].style.color = `red`;
      let winner = `ai`;
      return winner;
    }
  } else if (
    gridItem[6].innerHTML == gridItem[7].innerHTML &&
    gridItem[6].innerHTML == gridItem[8].innerHTML
  ) {
    if (gridItem[6].innerHTML == ``) {
    } else if (userSign == gridItem[6].innerHTML) {
      gridItem[6].style.color = `green`;
      gridItem[7].style.color = `green`;
      gridItem[8].style.color = `green`;
      let winner = `user`;
      return winner;
    } else {
      gridItem[6].style.color = `red`;
      gridItem[7].style.color = `red`;
      gridItem[8].style.color = `red`;
      let winner = `ai`;
      return winner;
    }
  } else if (
    gridItem[0].innerHTML == gridItem[3].innerHTML &&
    gridItem[0].innerHTML == gridItem[6].innerHTML
  ) {
    if (gridItem[0].innerHTML == ``) {
    } else if (userSign == gridItem[0].innerHTML) {
      gridItem[0].style.color = `green`;
      gridItem[3].style.color = `green`;
      gridItem[6].style.color = `green`;
      let winner = `user`;
      return winner;
    } else {
      gridItem[0].style.color = `red`;
      gridItem[3].style.color = `red`;
      gridItem[6].style.color = `red`;
      let winner = `ai`;
      return winner;
    }
  } else if (
    gridItem[1].innerHTML == gridItem[4].innerHTML &&
    gridItem[1].innerHTML == gridItem[7].innerHTML
  ) {
    if (gridItem[1].innerHTML == ``) {
    } else if (userSign == gridItem[1].innerHTML) {
      gridItem[1].style.color = `green`;
      gridItem[4].style.color = `green`;
      gridItem[7].style.color = `green`;
      let winner = `user`;
      return winner;
    } else {
      gridItem[1].style.color = `red`;
      gridItem[4].style.color = `red`;
      gridItem[7].style.color = `red`;
      let winner = `ai`;
      return winner;
    }
  } else if (
    gridItem[2].innerHTML == gridItem[5].innerHTML &&
    gridItem[2].innerHTML == gridItem[8].innerHTML
  ) {
    if (gridItem[2].innerHTML == ``) {
    } else if (userSign == gridItem[2].innerHTML) {
      gridItem[2].style.color = `green`;
      gridItem[5].style.color = `green`;
      gridItem[8].style.color = `green`;
      let winner = `user`;
      return winner;
    } else {
      gridItem[2].style.color = `red`;
      gridItem[5].style.color = `red`;
      gridItem[8].style.color = `red`;
      let winner = `ai`;
      return winner;
    }
  } else if (
    gridItem[0].innerHTML == gridItem[4].innerHTML &&
    gridItem[0].innerHTML == gridItem[8].innerHTML
  ) {
    if (gridItem[0].innerHTML == ``) {
    } else if (userSign == gridItem[0].innerHTML) {
      gridItem[0].style.color = `green`;
      gridItem[4].style.color = `green`;
      gridItem[8].style.color = `green`;
      let winner = `user`;
      return winner;
    } else {
      gridItem[0].style.color = `red`;
      gridItem[4].style.color = `red`;
      gridItem[8].style.color = `red`;
      let winner = `ai`;
      return winner;
    }
  } else if (
    gridItem[2].innerHTML == gridItem[4].innerHTML &&
    gridItem[2].innerHTML == gridItem[6].innerHTML
  ) {
    if (gridItem[2].innerHTML == ``) {
    } else if (userSign == gridItem[2].innerHTML) {
      gridItem[2].style.color = `green`;
      gridItem[4].style.color = `green`;
      gridItem[6].style.color = `green`;
      let winner = `user`;
      return winner;
    } else {
      gridItem[2].style.color = `red`;
      gridItem[4].style.color = `red`;
      gridItem[6].style.color = `red`;
      let winner = `ai`;
      return winner;
    }
  }
};

const userWins = () => {
  const winModal = document.querySelector(`.win-modal`);
  const winModalBox = document.querySelector(`.win-modal-box`);
  const winText = document.querySelector(`.win-text`);

  winModal.classList.add(`open-win-modal`);
  winModalBox.classList.add(`open-win-modal-box`);

  winText.innerHTML = `You win!`;
  let scores = checkLocalStorage();
  scores.userWins = scores.userWins + 1;

  displayPreviousScores(scores);
  scores = JSON.stringify(scores);
  localStorage.setItem(`tictactoe`, scores);

  setTimeout(() => {
    location.reload();
  }, 1500);
};

const aiWins = () => {
  const winModal = document.querySelector(`.win-modal`);
  const winModalBox = document.querySelector(`.win-modal-box`);
  const winText = document.querySelector(`.win-text`);

  winModal.classList.add(`open-win-modal`);
  winModalBox.classList.add(`open-win-modal-box`);

  winText.innerHTML = `AI wins!`;
  let scores = checkLocalStorage();
  scores.aiWins = scores.aiWins + 1;

  displayPreviousScores(scores);
  scores = JSON.stringify(scores);
  localStorage.setItem(`tictactoe`, scores);

  setTimeout(() => {
    location.reload();
  }, 1500);
};

const gameTie = () => {
  const winModal = document.querySelector(`.win-modal`);
  const winModalBox = document.querySelector(`.win-modal-box`);
  const winText = document.querySelector(`.win-text`);

  winModal.classList.add(`open-win-modal`);
  winModalBox.classList.add(`open-win-modal-box`);
  winText.innerHTML = `It's a tie!`;

  setTimeout(() => {
    location.reload();
  }, 1500);
};

const gameInput = () => {
  const gridItem = document.querySelectorAll(`.grid-item`);

  gridItem.forEach((box) => {
    box.onclick = () => {
      const userSign = localStorage.getItem(`userSign`);

      box.classList.remove(`playable`);
      box.innerHTML = userSign;

      let tie = aiTurn(userSign);
      if (!tie) {
        let winner = checkWin();
        if (winner == `user`) {
          userWins();
        } else if (winner == `ai`) {
          aiWins();
        }
      } else {
        let winner = checkWin();
        if (!winner) {
          gameTie();
        } else if (winner == `ai`) {
          aiWins();
        } else {
          userWins();
        }
      }
    };
  });
};

// MAIN FUNCTION

const gameFlow = () => {
  userSign();

  gameInput();
};

gameFlow();
