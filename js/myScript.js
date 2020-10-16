// rođendansko odbrojavanje na rodjendanski_poklon.html
var countDownDate = new Date("Feb 24, 2021 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Srećan rođendan!";
  }
}, 1000);

//script pjescani_sat icon  na rodjendanski_poklon.html
function hourglass() {
  var a;
  a = document.getElementById("pjescani_sat");
  a.innerHTML = "&#xf251;";
  setTimeout(function () {
    a.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "&#xf253;";
  }, 2000);
}
hourglass();
setInterval(hourglass, 3000);

//date on footer.html
var d = new Date();
document.getElementById("footer_date").innerHTML = d.toDateString();
