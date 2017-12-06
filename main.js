const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let arrAlphabet = alphabet.split("");
let keyboard = [];
let keyboard1 = [];
let keyboard2 = [];
let keyboard3 = [];
let i;
for(i = 0; i <= arrAlphabet.indexOf("]"); i++) {
	keyboard1.push(arrAlphabet[i]);
}
for(i = arrAlphabet.indexOf("a"); i <= arrAlphabet.indexOf("'"); i++) {
	keyboard2.push(arrAlphabet[i]);
}
for(i = arrAlphabet.indexOf("z"); i <= arrAlphabet.indexOf("/"); i++) {
	keyboard3.push(arrAlphabet[i]);
}
keyboard = [keyboard1, keyboard2, keyboard3];
let hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
let javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
let trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];
console.log(hello, javascript, trainer);