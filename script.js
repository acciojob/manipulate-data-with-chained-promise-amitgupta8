const numbers = [1, 2, 3, 4];

const manipulateNumbers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numbers);
    }, 3000);
  }).then((numbers) => {
    const filteredNumbers = numbers.filter(num => num % 2 === 0);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filteredNumbers);
      }, 1000);
    });
  }).then((filteredNumbers) => {
    const doubledNumbers = filteredNumbers.map(num => num * 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(doubledNumbers);
      }, 2000);
    });
  });
};

manipulateNumbers().then((result) => {
  const outputElement = document.getElementById("output");
  outputElement.innerText = result.toString();
});
