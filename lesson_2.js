//  1- home work
// let num = 5

// for ( let i=1; i<=num; i++){
//    if (i % 2 === 0)  {
//       console.log(i, 'an even number');
//    } else {
//       console.log(i, 'an odd number');
//    }
// }

//  2- home work
// let str = 'Fozil' ;
// for (let i=str.length-1 ; i>=0 ; i--  ) {
//    console.log(str[i]);
// }

//  3- home work
// 1-Method
// let str = "WebBrainnAcadAmya";
// let newStr = '';
// for(let i = 0; i < str.length; i++) {
//   if(str[i] === "a" || str[i] === 'A' ){
//     newStr += str[i]
//     //  yoki newStr = newStr + str[i]
//   }
// }
// console.log('A','a-', newStr.length);

// 2-Method
// let str = "WebBrainnAcadAmya";
// let count = 0;
// for(let i = 0; i < str.length; i++) {
//   if(str[i] === "a" || str[i] === 'A' ){
//    count++
//   }
// }
// console.log('A','a-', count);

// 3-Method
// let str = "WebBrainnAcadAmya";
// let count = 0;
// for(let i = 0; i < str.length; i++) {
//   if(str[i].toLowerCase() === "a" || str[i] === 'A' ){
//    count++
//   }
// }
// console.log('A','a-', count);

// 4-Method
// function aHarflarSoni(str) {
//   let harflar = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[A,a]/)) {
//       harflar += str[i];
//     }
//   }
//   let A = harflar.length;

//   return `A,a harflar soni: ${A}`;
// }

// console.log(aHarflarSoni("WebBrainAcadamya"));

//  4- home work
// function kattaHarflar(str) {
//   let newStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[A-Z]/)) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(kattaHarflar("WeBbraIN"));
