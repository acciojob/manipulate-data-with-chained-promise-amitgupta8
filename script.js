// get the HTML element with ID "output"
const outputElement = document.getElementById("output");

// create a function that returns a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// chain the promise returned by getNumbers() with two more promises to filter odd numbers and multiply even numbers by 2
getNumbers()
  .then(numbers => {
    // filter out odd numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    // multiply even numbers by 2
    const multipliedNumbers = evenNumbers.map(num => num * 2);
    // return the final result
    return multipliedNumbers;
  })
  .then(result => {
    // print the final result in the outputElement after 2 seconds
    setTimeout(() => {
      outputElement.textContent = result.join(", ");
    }, 2000);
  })
  .then(() => {
    // print the filtered numbers in the outputElement after 1 second
    setTimeout(() => {
      const numbers = outputElement.textContent.split(", ").map(num => parseInt(num));
      const filteredNumbers = numbers.filter(num => num % 2 === 0);
      outputElement.textContent = filteredNumbers.join(", ");
    }, 1000);
  });
