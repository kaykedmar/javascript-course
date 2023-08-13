     //Serve para salvar a pontuaçao 
      let score = JSON.parse(localStorage.getItem('score')); 
   
        //Funçao abaixo serve para mostrar a pontuaçao 
        updateElementScore(); 

   
    function playerGamer(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';

      //funçao do resultado
      Picked ()

      
      if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
       
          result = 'You lose';
        } else if (computerMove === 'Paper') {
          result = 'You win';
        } else if (computerMove === 'Scissors') {
          result = 'Tie';
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'Rock') {
          result = 'You win';
        } else if (computerMove === 'Paper') {
          result = 'Tie';
        } else if (computerMove === 'Scissors') {
          result = 'You lose';
        }

      } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'Tie';
        } else if (computerMove === 'Paper') {
          result = 'You lose';
        } else if (computerMove === 'Scissors') {
          result = 'You win';
        }
      }

      // Resultado de vitorias e derrotas
      if (result === 'You win') {
        score.wins += 1;
      } else if (result === 'You lose') {
        score.losses += 1;
      } else if (result === 'Tie') {
        score.ties += 1;
      }
   


      //Serve para salvar a pontuaçao 
      localStorage.setItem('score', JSON.stringify(score));
    
   
      document.querySelector('.js-result').innerHTML = result;


      //Funçao servindo para mostrar o resultado com imagens
      function Picked (){document.querySelector('.js-youPicked')
      .innerHTML = (`You
      <img src="../exercises/img/${playerMove}-emoji.png" alt=""class="move-icon">
      <img src="../exercises/img/${computerMove}-emoji.png" alt=""class="move-icon">Computer`)} 


      updateElementScore()


    } 

  
    //Funçao abaixo serve para mostrar a pontuaçao 
    function updateElementScore() {
      document.querySelector('.js-score').innerHTML
      = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;} 
    

   


    //function cria uma funçao com o nome pickComputerMove, onde usei ela para minimizar meu codigo
    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
        computerMove = 'Scissors';
      }
     
  

      return computerMove;
    }