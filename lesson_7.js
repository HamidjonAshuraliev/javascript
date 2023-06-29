// // h/w 3
// var array = [3,7,5,3,2,5,2,7];

// for(var i=0;i<array.length;i++) {
//     for(var j=i+1;j<array.length;j++) {
//         if(array[i]===array[j]) {
//             array.splice(j,1);
//         }
//     }
// }
// console.log(array); // output = [3,7,5,2]

// 1-vazifa
// let array1 = [4,10,888,99,100];
// console.log(Math.max(...array1));
// console.log(Math.min(...array1));
// 2 vazifa
// let mevalar = ['olma','nok','tarvuz','uzum'];
// function uchirish(arr,qiymat){
//   return mevalar.filter(function(meva){
//     return meva != qiymat
//   })
// }
// console.log(uchirish(mevalar,'tarvuz'));

// 3-vazifa
// Nested arraydan sum ni chiqaring:
// let sum = arr.reduce((initial, total) => initial + total,
//  0); => arraydagi umumiy sonlar yigindisini topadi
// let arr = [1, [3, [5]], [10]];

// 4 vazifa
// var countArray = function (array) {
//   var sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       sum += countArray(array[i]);
//     } else {
//       sum += array[i];
//     }
//   }
//   return sum;
// };
// console.log(countArray(arr));
