import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const board = (
    <Board
      squares={Array(9).fill(null)}
      onClick={() => {}}
    />
  );

  ReactDOM.render(board, div);
  ReactDOM.unmountComponentAtNode(div);
});