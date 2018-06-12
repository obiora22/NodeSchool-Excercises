function countWords (inputWords) {
  return inputWords.reduce(function (countObj,word) {
    // if (acc[b]) {
    //   acc[b] += 1
    // } else {
    //   acc[b] = 1
    // }
    countObj[word] = ++countObj[word] || 1
    return countObj;
  },{})
}

module.exports = countWords
