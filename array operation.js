var k = ['pop', 'PUSH', 'substr', 'SLICE', 'sort', 'splice', 'JOIN', 'slice', 'SHIFT', 'unshift', 'concate', 'COMPARE', 'forEach', 'map', 'filter', 'reduce', 'index', 'find', 'every', 'indexof'];
var o = [34, 55, 43, 3, 32, 2, 22, 43, 22, 99];
k.forEach(function (p) {
    var n;
    n = p.substr(2, 4);
    console.log(n);
});
k.forEach(function (p) {
    var n;
    n = p.slice(0, 3);
    console.log(n);
});
k.forEach(function (l) {
    var k = l.toUpperCase();
    if (l == k) {
        console.log(l);
    }
});

var n = k.sort();
console.log(k);
n.forEach(function (h) {
    console.log(h);
});
k.pop('substr');
k.push("some");
k.splice(4, 8, "jaan", "totel", "sharp", "Brain");//4 is index . yha se 8 element delete hue orr vhe se jaan totel sharp barain element add hue  

var j = k.concat(o);

console.log(j.join(" $  "));
k.push("top");//back se add karega
k.pop();//back se remove karega 
k.shift();//front se remove karega 
k.unshift("lop");//front se add  karega 

var b = o.every((p) => {
    return p > 4;
});
console.log(b);
// var t =o.filter(function(g) {

//     if (g > 32) {
//         return true;
//     }
// }); 
var t = o.filter((g) => g > 32);
// var j = k.filter((b) => {
//     if (b == b.toUpperCase()) {
//         return true;
//     }
// });
var j = k.filter((b) => b === b.toUpperCase());
console.log(j);
var oper = o.map((n) => Math.sqrt(n)).map((n) => n * 3);
console.log(oper);
// var so = o.sort();
// console.log(so);
var so = o.sort((a, b) => a - b);//this method get diff result compare than simple sort method and b-a get the reverse order.
console.log(so);
var total = o.reduce((totals, num) => totals + num, 0);//0 is indicate the value of totals.
console.log(total);
console.log(t);

