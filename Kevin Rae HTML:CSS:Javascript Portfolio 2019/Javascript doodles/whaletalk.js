//phrase to translate
const input = 'Walla walla, Washington was wondering wildly whether to welcome William.';

//whale vowels
const vowels = ['a', 'e', 'o', 'i', 'u'];

let resultArray=[];

//runs code block through the input and vowels
for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
//console.log('i is ' + inputIndex);
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
    //console.log('vowels are' + vowelsIndex);
  // if the two arrays match, the vowel is pushed to the resultArray
    if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex])
      }
    }
    //doubles the 'e' and 'u' in the input
    if (input[inputIndex] === 'e' || input[inputIndex] === 'u'){
      resultArray.push(input[inputIndex]);
    }
  }
//prints to console, as one word all upper case
console.log(resultArray.join('').toUpperCase());
