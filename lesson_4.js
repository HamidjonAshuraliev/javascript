// Methods
let son = '10.5';
console.log(parseInt(son));

______________________________________
// methods abs

function abs(son){
    son >= 0 && console.log(son);
    son < 0 && console.log(son * (-1));
}

abs(-10);
abs(10);

// math round
function round(son) {
son >= parseInt(son) +0.5 && console.log(parseInt(son) +1);
son < parseInt(son) +0.5 && console.log(parseInt(son));

}
round(10.3);
