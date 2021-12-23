setInterval(function() {
  clock();
}, 1000);

function clock() {
  d = new Date();
  htime = d.getHours();

  mtime = d.getMinutes();

  stime = d.getSeconds();

  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  document.getElementById("Hour").style.transform = "rotate(" + hrotation + "deg)"
  document.getElementById("Minute").style.transform = "rotate(" + mrotation + "deg)"
  document.getElementById("Second").style.transform = "rotate(" + srotation + "deg)";

}
