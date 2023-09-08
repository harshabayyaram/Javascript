function z() {
  var b = 100;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    a = 99;
    y();
  }
  var b = 23423423;
  x();
}
z();