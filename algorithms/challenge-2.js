function transpose(arr) {
   return transpose = m => m[0].map((x,i) => m.map(x => x[i]))
}
console.log(transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ]))
//module.exports = transpose
