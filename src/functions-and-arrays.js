// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1,num2){
  return Math.max(num1,num2);
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArray){
  let returnValue = "";

  for(let w=0;w<wordsArray.length;w++){
    if (wordsArray[w].length>returnValue.length){
      returnValue = wordsArray[w];
    }
  }

  if (returnValue.length===0) return null;

  return returnValue;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray){
  let returnValue = 0;

  returnValue = sum(numbersArray);
  
  return returnValue;
}

function sum(objectsArray){
  let returnValue = 0;

  for(let n=0;n<objectsArray.length;n++){
    if (typeof(objectsArray[n])===typeof("string")){
      returnValue+=objectsArray[n].length;
    } else if (typeof(objectsArray[n])===typeof(6)){
      returnValue+=objectsArray[n];
    } else if (typeof(objectsArray[n])===typeof(true)){
      returnValue+=objectsArray[n]?1:0;
    } else {
      errorThrow("Unsupported data type sir or ma'am");
    }
  }

  return returnValue;
}

function errorThrow(message){
  throw new Error(message);
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray){
  if(numbersArray.length===0) return null;

  return sum(numbersArray)/numbersArray.length;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArray){
  if (wordsArray.length===0) return null;

  return sum(wordsArray)/wordsArray.length;
}

function avg(objectArray){
  if(objectArray.length===0) return null;

  let returnValue = (sum(objectArray)/objectArray.length).toFixed(2);

  return parseFloat(returnValue);
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsArray){
  if (wordsArray.length===0) return null;
  let returnValue = [];

  for(let word=0; word<wordsArray.length;word++){
    if(!doesWordExist(returnValue,wordsArray[word])){
      returnValue.push(wordsArray[word]);
    }
  }

  return returnValue;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArray, word){
  if (wordsArray.length===0) return null;

  let wordCounts = howManyTimes(wordsArray,word);

  return (wordCounts>0);
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsArray, word){
  let wordCounts = 0;

  for(let w=0; w<wordsArray.length;w++){
    if(wordsArray[w]===word) wordCounts++;
  }

  return wordCounts;
}

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix){
  let bestChoice = { value: 1, greatest:[1,1,1,1]};

  for(let x = 0;x < matrix.length;x++){
    for(let y = 0;y < matrix[x].length;y++){
      bestChoice = isGreatestProduct(matrix, x, y, bestChoice);
    }
  }

  return bestChoice.value;
}
function isGreatestProduct(matrix, pointX, pointY, lastChoice){
  lastChoice = multiplyXAxis(matrix, pointX, pointY, lastChoice);
  lastChoice = multiplyYAxis(matrix, pointX, pointY, lastChoice);

  return lastChoice;
}
function multiplyXAxis(matrix, pointX, pointY, lastChoice){
  let selectedMatrix = [];
  let selectedValue = 1;

  for (let xAxis = pointX;xAxis < (pointX+4) && xAxis <  matrix.length;xAxis++){
    selectedMatrix.push(matrix[xAxis][pointY]);
    selectedValue*=matrix[xAxis][pointY];
  }  

  if (selectedValue>lastChoice.value){
    lastChoice.value = selectedValue;
    lastChoice.greatest = selectedMatrix;
  }

  return lastChoice;
}
function multiplyYAxis(matrix, pointX, pointY, lastChoice){
  let selectedMatrix = [];
  let selectedValue = 1;

  for (let yAxis = pointY; yAxis < (pointY+4) && yAxis < matrix[pointX].length;yAxis++){
    selectedMatrix.push(matrix[pointX][yAxis]);
    selectedValue*=matrix[pointX][yAxis];
  }

  if (selectedValue>lastChoice.value){
    lastChoice.value = selectedValue;
    lastChoice.greatest = selectedMatrix;
  }
  return lastChoice;
}

// Iteration #8.1: Bonus
function greatestProductOfDiagonals(matrix){
  let bestChoice = { value: 1, greatest:[1,1,1,1]};

  for(let x = 0;x < matrix.length;x++){
    for(let y = 0;y < matrix[x].length;y++){
      bestChoice = isGreatestProductOfDiagonals(matrix, x, y, bestChoice);
    }
  }

  return bestChoice.value;
}
function isGreatestProductOfDiagonals(matrix, pointX, pointY, lastChoice){
  lastChoice = multiplyLeftTop(matrix, pointX, pointY, lastChoice);
  lastChoice = multiplyLeftBottom(matrix, pointX, pointY, lastChoice);
  lastChoice = multiplyRightTop(matrix, pointX, pointY, lastChoice);
  lastChoice = multiplyRightBottom(matrix, pointX, pointY, lastChoice);

  return lastChoice;
}
function multiplyLeftTop(matrix, pointX, pointY, lastChoice){
  let selectedMatrix = [];
  let selectedValue = 1;

  for (let xAxis = pointX; xAxis > (pointX-4) && xAxis >= 0;xAxis--){
    for (let yAxis = pointY; yAxis > (pointY-4) && yAxis >= 0;yAxis--){
      selectedMatrix.push(matrix[xAxis][yAxis]);
      selectedValue*=matrix[xAxis][yAxis];
    }
  }

  if (selectedValue>lastChoice.value){
    lastChoice.value = selectedValue;
    lastChoice.greatest = selectedMatrix;
  }
  return lastChoice;
}
function multiplyLeftBottom(matrix, pointX, pointY, lastChoice){
  let selectedMatrix = [];
  let selectedValue = 1;

  for (let xAxis = pointX; xAxis > (pointX-4) && xAxis >= 0;xAxis--){
    for (let yAxis = pointY; yAxis < (pointY+4) && yAxis < matrix[xAxis].length;yAxis++){
      selectedMatrix.push(matrix[xAxis][yAxis]);
      selectedValue*=matrix[xAxis][yAxis];
    }
  }

  if (selectedValue>lastChoice.value){
    lastChoice.value = selectedValue;
    lastChoice.greatest = selectedMatrix;
  }
  return lastChoice;
}
function multiplyRightTop(matrix, pointX, pointY, lastChoice){
  let selectedMatrix = [];
  let selectedValue = 1;

  for (let xAxis = pointX; xAxis < (pointX+4) && xAxis < matrix.length;xAxis++){
    for (let yAxis = pointY; yAxis > (pointY-4) && yAxis >= 0;yAxis--){
      selectedMatrix.push(matrix[xAxis][yAxis]);
      selectedValue*=matrix[xAxis][yAxis];
    }
  }

  if (selectedValue>lastChoice.value){
    lastChoice.value = selectedValue;
    lastChoice.greatest = selectedMatrix;
  }
  return lastChoice;
}
function multiplyRightBottom(matrix, pointX, pointY, lastChoice){
  let selectedMatrix = [];
  let selectedValue = 1;

  for (let xAxis = pointX; xAxis < (pointX+4) && xAxis < matrix.length;xAxis++){
    for (let yAxis = pointY; yAxis < (pointY+4) && yAxis < matrix[xAxis].length;yAxis++){
      selectedMatrix.push(matrix[xAxis][yAxis]);
      selectedValue*=matrix[xAxis][yAxis];
    }
  }

  if (selectedValue>lastChoice.value){
    lastChoice.value = selectedValue;
    lastChoice.greatest = selectedMatrix;
  }
  return lastChoice;
}
