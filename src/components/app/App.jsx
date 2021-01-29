import React from 'react';
import styles from './styles.css';

function sandbox() {
  let largestSum = 0;

  const input = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];

  function sumArray(array) {
    let sum = 0; 

    for(let i = 0; i < array.length; i++) {
      const currentItem = array[i];

      sum += currentItem;
    }

    return sum;
  }

  function getHourglass(x, y) {
    const hourglass = [
      input[0 + y][0 + x], input[0 + y][1 + x], input[0 + y][2 + x], 
      input[1 + y][1 + x],
      input[2 + y][0 + x], input[2 + y][1 + x], input[2 + y][2 + x],
    ];
    
    return sumArray(hourglass);
  }

  for(let y = 0; y <= 3; y++) {
    for(let x = 0; x <= 3; x++) {
      if(getHourglass(x, y) > largestSum) {
        largestSum = getHourglass(x, y);
      }
    }
  }

  console.log('answer: ', largestSum);
}

export default function App() {
  return <h1 className={styles.title}>{sandbox()}</h1>;
}
