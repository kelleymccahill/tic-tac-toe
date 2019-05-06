import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Board from './Board';
import './Game.css';

/**
 * Main controls for the game.  Sets the squares to the correct value on the
 * onClick and checks for a game winner
 */
class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      moveCount: 0,
    };
  }

  /**
   * Logic to check if there is a winner.
   * 
   * @returns {String | Null} The winnder of the game.
   */
  calculateWinner() {
    // The possible winning combinations.
    const winningLines = [
      // Row wins
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Column wins
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal Wins
      [0, 4, 8],
      [2, 4, 6]
    ];

    const { moveCount, squares } = this.state;

    // Loop through the combinations of winning lines.
    // Check if there is a win on the board currently.
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      const possibleWinner = squares[a];
      if (possibleWinner && possibleWinner === squares[b] && possibleWinner === squares[c]) {     
        return possibleWinner;
      }
    } 

    // If at this point, no winner has been returned, there's a chance it was a draw
    if (moveCount === 9) {
      return 'draw';
    }

    // Currently no winner
    return null;
  }

  /**
   * Update the squares stored in state
   * @param {Number} i - The place in the array to be updated
   */
  handleClick(i) {
    const { squares, xIsNext } = this.state;
    let { moveCount } = this.state;
    const squaresCopy = squares.slice();
    
    if (this.calculateWinner() || squaresCopy[i]) {
      // Clicked on a square which already had a value or there is already a winner
      return;
    } 

    squaresCopy[i] = xIsNext ? "X" : "O";
    moveCount++;
    
    this.setState({
      squares: squaresCopy,
      xIsNext: !xIsNext,
      moveCount,
    });
  }

  /**
   * Sets the game state back to the orginal state
   */
  restartGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      moveCount: 0,
    });
  }

  /**
   * React's render function
   */
  render() {
    const { squares, xIsNext } = this.state;
    const winner = this.calculateWinner();

    let status;
    if (winner) {
      if (winner === 'draw') {
        status = "It was a draw!"
      } else {
        status = `Winner: ${winner}`;
      }
    } else {
      status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <Typography variant="h2" gutterBottom>
            Tic Tac Toe
        </Typography>
        <Typography variant="h4" gutterBottom>
            {status}
        </Typography>
        <div className="game-board">
          <Board
            squares={squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <Button variant="contained" color="primary" onClick={() => this.restartGame()}>
          { winner ? 'Start a New Game' : 'Restart Game' }
        </Button>
      </div>
    );
  }
}

export default Game;