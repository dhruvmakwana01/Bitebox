// let x = [1, 200, 4, 20, 5];
// console.log(x.sort(function (a, b) {
//     return b - a;
// }));


let y = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
// console.log(y.length);

for (let i = 0; i < y.length; i++) {
    for (let j = 0; j < y[i].length; j++) {
        console.log(y[i][j]);
    }
}

console.table(y);