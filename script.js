function manipulateData(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then(numbers => {
    const filteredNumbers = numbers.filter(n => n % 2 === 0);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filteredNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    const multipliedNumbers = evenNumbers.map(n => n * 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .then(finalNumbers => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = finalNumbers.toString();
  })
  .catch(error => {
    console.error(error);
  });
}

// Example usage:
manipulateData([1, 2, 3, 4]);
