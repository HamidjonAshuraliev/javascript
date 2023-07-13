// let str = 'ABBAABAA';
// let arr = [];
// for(let i = 0; i < str.length; i++){
//     // console.log(arr, str[1]);
//     // console.log(arr.includes(str[1]));
// if(arr.includes(str[i])){
//     console.log(str[i]); break
// }
//     arr.push(str[i]);
// }

// 2home work
// const users = [
//     {id: 1, name: 'Hamidjon'},
//     {id: 2, name: 'Sardorbek'},
//     {id: 3, name: 'Valisher'},
//     {id: 4, name: 'Zuhriddin'},
// ]
// const onSearch = (input) => {
//     let newArr = [];
//     for(let i= 0; i < users.length; i++){
//         if(users[i].name.includes(input.toLowerCase())  || users[i].name.includes(input.toUpperCase())){
//             newArr.push(users[i])
//         }
//     }
//     console.log(newArr);
// }
// onSearch('n')

//  Array advanced

// let arr = [2, 4, 5, 7, 8, 1, 100, 44, 49];
// console.log(arr.sort( (a, b) => a - b ));
// console.log(arr.sort( (a, b) => b - a ));

//  filter
let arr = [1, 5, 11, 6, 11, 64,11,];
let filtered = arr.filter((value) => value >= 11);
console.log(filtered);
