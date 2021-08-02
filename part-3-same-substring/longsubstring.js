function longSubStr(str1, str2) {
  const arrCol = new Array(str1.length).fill(0);
  const arrRow = [];
  for (let i = 0; i < str2.length; i++) {
    arrRow.push([...arrCol]);
  }
  const maxNum = {
    num: 0,
    endIndex: null,
  };
  for (let row = 0; row < str2.length; row++) {
    for (let col = 0; col < str1.length; col++) {
      if (str1[col] === str2[row]) {
        if (row === 0 || col === 0) {
          arrRow[row][col] = 1;
        } else {
          arrRow[row][col] = arrRow[row - 1][col - 1] + 1;
        }
        if (arrRow[row][col] > maxNum.num) {
          maxNum.num = arrRow[row][col];
          maxNum.endIndex = row;
        }
      }
    }
  }

  console.log(`Строки "${str1}" и "${str2}" имеют длинную общую последовательность строк:  ${str2.slice(
    [maxNum.endIndex - maxNum.num + 1],
    maxNum.endIndex + 1
  )}
  `);
}
