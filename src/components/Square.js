import React from 'react';
import './Square.css';
import Close from '@material-ui/icons/Close';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';

/**
 * Renders each square on the board.
 * 
 * @param {string} props.value - The value to be displayed in the square
 * @param {function} props.onClick - The callback from when a square is clicked.
 */
function Square(props) {
  const { value, onClick } = props;
  let displayValue = null;
  
  if (value === 'X') {
    displayValue = <Close style={{ 'height': '34px', 'fontSize': '34px' }} />

  } else if (value === 'O') {
    displayValue = <PanoramaFishEye style={{ 'height': '34px', 'fontSize': '34px' }} />;
  }
  return (
    <button className="square" onClick={onClick}>
      {displayValue}
    </button>
  );
}

export default Square;