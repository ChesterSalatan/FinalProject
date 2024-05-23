async function playGame(playerChoice) {
    const response = await fetch(`/api/game?playerChoice=${playerChoice}`);
    const data = await response.json();
  
    document.getElementById('result').innerHTML = `
      You chose: ${data.playerChoice}<br>
      Computer chose: ${data.computerChoice}<br>
      Result: ${data.result}
    `;
  }
  