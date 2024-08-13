
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) return [];
  
  let counter = 0;
  return matrix.map(element => {
    let array = [];
    if (counter % 2 == 0) {
      array = array.concat(element);
    } else {
      array = array.concat(element.reverse());
    }
    counter++;
    return array;
  }).flat();
}
