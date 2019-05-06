import React, { Component } from 'react';
import Square from './Square';

/**
 * The Board component which controls which square is to be rendered.
 * @param {Number[]} props.squares - the array of values in each square.
 * @param {Function} props.onClick - the click callback for when the square is clicked.
 */
class Board extends Component {

  /**
   * Function which calls the Square compnonet.
   * @param {Number} i - The number of the square which is to be rendered.
   */
  renderSquare(i) {
    const { squares, onClick } = this.props;
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  }

  /**
   * React's render function
   */
  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;