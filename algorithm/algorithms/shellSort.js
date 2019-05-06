function shellSort() { // 希尔排序
  let len = arr.length, temp, gap = 1;
  while (gap < len/3) {
    gap = gap*3+1;
  }
  // gap 为分组数
  for(gap; gap > 0; gap = Math.floor(gap/3)) {
    for ( let i = gap; i < len; i++) {
      temp = arr[i];
      for (let j = i-gap; j >= 0 && arr[j] > temp; j -= gap ){
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = temp;
    }
  }
  return arr;
}