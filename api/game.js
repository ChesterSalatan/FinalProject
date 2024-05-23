// api/game.js

export default (req, res) => {
    const { playerChoice } = req.query;
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const determineWinner = (player, computer) => {
      if (player === computer) return 'It\'s a draw!';
      if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) return 'You win!';
      return 'You lose!';
    };
  
    const result = determineWinner(playerChoice, computerChoice);
  
    res.status(200).json({ playerChoice, computerChoice, result });
  }
  