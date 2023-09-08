console.log(a);
// console.log(b);

let b = 20;
var a = 10;

function name(){
    console.log("function");
}

name();

var a = 5;

(function () {
  console.log(a);
  var a = 10;
})();

{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(b);//reference error b was not defined
console.log(c);

var c = 100;
(function(){
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(c);
})();

let a = 10;
function x(){
    var a =110;
}

const a = 10;
{
    const a = 20;
    console.log(a);
    {
        const a = 30;
        console.log(a);
    }
}

console.log(a);