import React from 'react';
import styles from './styles.css';


export default function App() {

  const n = 11;
  const s = 'aab';

  let iterationACount = 0;

  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'a') {
      iterationACount += 1;
    }
  }

  const equalTimesSInN = Math.floor(n / s.length);
  const remainderModulo = n % s.length;


  function findAsInString(string) {
    let stringACount = 0;

    for(let i = 0; i < string.length; i++) {
      if(string[i] === 'a') {
        stringACount += 1;
      }
    }
    
    return stringACount;
  }

  function findRemainderString(string, index) {
    let newString = '';

    for(let i = 0; i < index; i++) {
      newString += string[i];  
    }

    return newString;
  }


  const count = (equalTimesSInN * iterationACount) + findAsInString(findRemainderString(s, remainderModulo));
  console.log(count);

  return null;
}
