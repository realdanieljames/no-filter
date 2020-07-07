/******************
 * YOUR CODE HERE *
 ******************/

const onlyOdds = function (nums){
  oddNums = []
  for (number of nums){
    if (number % 2 !== 0) {
      oddNums.push(number)
    }
  }
  return oddNums
}
//___________________________________________________________________//
//___________________________________________________________________//


const onlyEvens = function (nums){
  evenNums = []
  for (number of nums){
    if(number % 2 === 0) {
      evenNums.push(number)
    }
  }
  return evenNums
}
//___________________________________________________________________//
//___________________________________________________________________//



const shortNamesOnly = function(names){
  namesWithLessThan7Char = []
  for (name of names){
    if (name.length < 7){
      namesWithLessThan7Char.push(name)
    }
  }
  return namesWithLessThan7Char;
}
//___________________________________________________________________//
//___________________________________________________________________//



const dNames = function(names){
  namesThatStartWithD = []
  for (name of names){
    if (name[0] === 'D'){
      namesThatStartWithD.push(name)
    }
  }
  return namesThatStartWithD
}
//___________________________________________________________________//
//___________________________________________________________________//







/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
