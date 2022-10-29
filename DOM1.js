// Selectors

// var dvr = document.getElementById('main');
// // dvr.style.backgroundColor = 'orange';
// var sec = document.getElementById('header-set');
// sec.innerText = "Productivity";
// sec.textContent = "Bachpan ka Pyaar";
// sec.innerHTML = "<h1>totel</h1>";
// sec.innerHTML = "totel";
// var lis = document.querySelectorAll('.lists');
// lis[1].style.color = 'pink';
// lis[3].textContent = 'Bolywood';
// for (var i = 0; i < lis.length; i++){
//     if (i %2== 0) {
//         lis[i].style.color = "blue";
//     } else {
//         lis[i].style.color = "green";
//     }
// // }
// var inn = document.querySelector('input');
// inn.placeholder = "Enter your eamil id ";

// inn.value = "Enter your eamil id ";

// var btn = document.querySelector("button[type='submit']");
// // btn.innerHTML = 'Send';
// var sel = document.querySelector('.lists:nth-child(3)');
// sel.style.color = "yellow";
// var sel = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < sel.length; i++){
//     sel[i].innerHTML = 'Double Grade';
// // }`

// #Traversing

// var node = document.querySelector('.sub');
// // console.log(node.parentNode);
// // console.log(node.parentElemen  t);
// console.log(node.childNodes);
// console.log(node.children);
// // console.log(node.children[3]);
// console.log(node.lastElementChild);
// console.log(node.lastChild);
// console.log(node.firstElementChild);
// console.log(node.firstChild);                        //#text is called a whitespace.
// console.log(node.nextSibling);
// // console.log(node.nextElementSibling);
// // console.log(node.previousSibling);
// // console.log(node.previousElementSibling);
// //  #createElement
// var div = document.createElement('div');
// // div.setAttribute('id', 'main');
// // // div.setAttribute('class', 'submain');
// // div.id = 'main';
// // // div.className = 'submain';
//  var text = document.createTextNode('Hey you');
// div.appendChild(text);
// // console.log(div);
// var container = document.querySelector('.sub .lists:nth-child(2)');
// // var sub = document.querySelector('.sub .lists:nth-child(3)');
// // container.insertBefore(div, sub);

// //  Events
// var button = document.getElementById('btn').addEventListener('click', buttonclick);

// function buttonclick() {
//     // console.log('click here');
//     // var k = document.getElementById('main');
//     // k.style.backgroundColor = "#f45f4f";
//     // k.innerHTML = '<h1>total syapa</h1>';

// }

// var button = document.getElementById('btn').addEventListener('click', runevent);

// // var button = document.getElementById('btn').addEventListener('dblclick', runevent);
// var button = document.getElementById('btn').addEventListener('mousedown', runevent);

// // 
// var box = document.getElementById('box').addEventListener('mouseenter', runevent);//only work on box

// var box = document.getElementById('box').addEventListener('mouseleave', runevent);//only work on box

// var box = document.getElementById('box').addEventListener('mouseover', runevent);// work on both child element and box

// // var box = document.getElementById('box').addEventListener('mouseout', runevent);// work on both child element and box
// // var box = document.getElementById('box').addEventListener('mousemove', runevent);
// var input = document.querySelector('input[type="text"]').addEventListener('keydown', runevent);

// var input = document.querySelector('input[type="text"]').addEventListener('keypaste', runevent);
// var input = document.querySelector('input[type="text"]').addEventListener('keyup', runevent);
// var input = document.querySelector('input[type="text"]').addEventListener('keypress', runevent);
// // var input = document.querySelector('input[type="text"]').addEventListener('blur', runevent);
// // var input = document.querySelector('input[type="text"]').addEventListener('cut', runevent);
//  var input = document.querySelector('input[type="text"]').addEventListener('focus', runevent);
// var select = document.querySelector('select').addEventListener('change', runevent);

// var form = document.getElementById('type').addEventListener('submit', runevent);
//var select = document.querySelector('select').addEventListener('submit', runevent);
//function runevent(e) {
  //  e.preventDefault();
    // output.innerHTML = '<h3>Direction X: ' + e.offsetX + '</h3> ' + '<h3> Direction Y: ' + e.offsetY + '</h3>';
    // document.getElementById('output').innerHTML = "<h3>" + e.target.value + "</h3>";
    // console.log('Event type ' + e.type);
    // document.body.style.display = 'none';
    // console.log('Event type ' + e.target.value);
    // document.body.style.backgroundColor ="rgb("+e.offsetX+", "+e.offsetY+", 40)";
    // btn.style.backgroundColor ="rgb("+e.offsetX+", "+e.offsetY+", 40)";
    // main.style.backgroundColor ="rgb("+e.offsetX+", "+e.offsetY+", 40)";
    // sub.style.backgroundColor ="rgb("+e.offsetX+", "+e.offsetY+", 40)";
    // console.log(e.target.value, e.type);
    


//}