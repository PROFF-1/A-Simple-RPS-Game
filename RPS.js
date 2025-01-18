let score=JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses : 0,
  tie :0
  };

  updateScoreElement();


  /*

if(score === null){
  score ={
  wins: 0,
  losses : 0,
  tie :0
  };
}
  */

function pickComputerMove(){
  let computerMove = '';
  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 1/2 ){
  computerMove = 'Paper';
  }else {
  computerMove = 'Scissors';
  }

  console.log (computerMove);

  return computerMove;

}

function playGame(playerMove){
    const computerMove = pickComputerMove();


  let results = '';

  if (playerMove === 'Scissors'){
      if(computerMove === 'Rock'){
      results = 'You loose';
    }else if(computerMove === 'Paper'){
      results ='You win';
    }else {
      results = 'Tie';
    } 
  } else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
      results = 'You win';
    }else if(computerMove === 'Paper'){
      results ='Tie';
    }else {
      results = 'You loose';
    }
  } else if (playerMove === 'Rock'){
      if(computerMove === 'Rock'){
      results = `Tie`;
    }else if(computerMove === 'Paper'){
      results ='You loose';
    }else {
      results = 'You win';
    }
  }

  if (results === 'You win'){
    score.wins ++;
  }else if(results === 'You loose'){
    score.losses ++;
  }else if (results === 'Tie'){
    score.tie++;
  }


  localStorage.setItem('score', JSON.stringify(score));


  updateScoreElement();


  /*
      alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${results}
  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`);
  */

  document.querySelector('.js-results')
            .innerHTML = results;

  document.querySelector('.js-moves')
    .innerHTML = ` You
<img src="images/${playerMove}-emoji.png" class="move-image">
<img src="images/${computerMove}-emoji.png" class="move-image">
computer`;

}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}

 