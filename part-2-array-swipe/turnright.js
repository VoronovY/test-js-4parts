function turnRight(arr, n) {
  console.log(`${arr} - исходный массив , смещение на ${n} элементов вправо`);
  if (n === arr.length || n === 0) {
    return console.log(`${arr} - массив, смещенный на ${n} элементов вправо`);
  } else if (n < 0) {
    return console.log("Введите положительное число");
  }
  const swipeNum = n % arr.length;
  for (let i = 0; i < swipeNum; i++) {
    let buffer = arr[arr.length - 1];
    for (let k = arr.length - 1; k > 0; k--) {
      arr[k] = arr[k - 1];
    }
    arr[0] = buffer;
  }
  console.log(`${arr} - массив, смещенный на ${n} элементов вправо`);
}
