//klok
window.onload =function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var x = window.matchMedia("(max-width: 700px)");
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = s;
  document.getElementById('txt2').innerHTML = m;
  document.getElementById('txt3').innerHTML = h;
  var t = setTimeout(startTime, 500);

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

if (x.matches) {
       klein(h);
  } else {
       groot(h);
  }
 
}

