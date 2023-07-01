//  9 dars vaz

// let schedule = {name: 'Hamidjon'};
// const isEmpty = (obj) => {
//     for(let key in obj){
//         return false
//     }return true
// }
// console.log(isEmpty(schedule));

// 1 method

// let salaries = {
//     Sadorbek: 1000,
//     Hamidjon: 2000,
//     Valisher: 3000

// }
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key]
// }
// console.log(sum);
//  2 method

// let salaries = {
//     Sadorbek: 1000,
//     Hamidjon: 2000,
//     Valisher: 3000

// }
// let sum = 0;
// const salary = (obj) =>{
//     for(let key in salaries){
//         sum += salaries[key]
//     }
// }
// salary(salaries);
// console.log(sum);

// 3 method
// let salaries = {
//     Sadorbek: 1000,
//     Hamidjon: 2000,
//     Valisher: 3000
// }

// const salary = (obj) =>{
//     let sum = 0;
//     for(let key in salaries){
//         sum += salaries[key]
//     }
//     return sum
// }
// console.log(salary(salaries));

// / 1method 
// let menu = {
// width: 200,
// height: 100,
// title: 'My menu'
// }
// const multiply = (obj) => {
//     for(let key in obj){
//         if(typeof obj[key] === 'number'){
//             obj[key] *= 3
//         }
//     }
// }
// multiply(menu)
// console.log(menu);

//  2 method
// let menu = {
//     width: 200,
//     height: 100,
//     title: 'My menu'
//     }
//     const multiply = (obj) => {
//         for(let key in obj){
//             typeof obj[key] === 'number' ? obj[key] *= 3 : obj[key]
//             }
//         }
    
//     multiply(menu)
//     console.log(menu);