//your JS code here. If required.
function manipulateArray(arr) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(arr);
          }, 3000);
        })
        .then(function(arr) {
          return arr.filter(function(num) {
            return num % 2 === 0;
          });
        })
        .then(function(arr) {
          return arr.map(function(num) {
            return num * 2;
          });
        });
      }

      var inputArr = [1, 2, 3, 4];

      manipulateArray(inputArr).then(function(result) {
        var output = document.getElementById("output");
        output.textContent = result.join(", ");
      });
