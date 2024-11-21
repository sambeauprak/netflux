function duplicateAndShuffle(array) {
  let newArray = array.slice();
  newArray = newArray.concat(newArray);
  newArray.sort(() => Math.random() - 0.5);
  return newArray;
}

export { duplicateAndShuffle };
