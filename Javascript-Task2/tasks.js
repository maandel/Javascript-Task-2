function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

function intersectThreeArrays(arr1, arr2, arr3) {
  const commonElements = arr1.filter(item => arr2.includes(item) && arr3.includes(item));
  return [...new Set(commonElements)];
}

function getUniqueElements(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result.sort((a, b) => a - b);
}

function kebabToCamelCase(str) {
  return str.split('-').map((word, index) => {
    if (index === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

console.log("Task 1:", flattenArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));

console.log("Task 2:", intersectThreeArrays([1, 2, 3, 4], [3, 4, 5], [3, 4, 5, 6]));

console.log("Task 3:", getUniqueElements([1, 3, 2, 3, 4, 5, 4, 2, 5, 6]));

console.log("Task 4:", kebabToCamelCase('hello-there')); 
