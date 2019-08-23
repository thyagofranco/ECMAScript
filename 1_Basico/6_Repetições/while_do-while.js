/**
 * while (condicao){
 *  declaracao
 * 
 * }
 * 
 */

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}


var n = 0;
var x = 0;

while (n < 3) {
    n++;
    x +=n;      /// 1,3,6
}

console.log(x);

/**
 * 
 * do {
 *  declaracao
 * }
 * while (condicao);
 * 
 * 
 * 
 */
var i = 0;
 do {
     i += 1;
     console.log(i);     
 } while (i < 5);
