
export default function getStrWords(str, positions) {
  let wordsArr = [];
  let strArr = str.split(' ');

  for (var position of positions) {
    wordsArr.push(strArr[position] || null);
  }

  return wordsArr;
}