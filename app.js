//Time
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime();
  }, 500);
}

// Time - end

//Date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

const cyan_btn = document.querySelector(".cyan_btn");
const black_btn = document.querySelector(".black_btn");
const blue_btn = document.querySelector(".blue_btn");
//Date - end

cyan_btn.addEventListener("click", function(){
    black_btn.innerHTML = today;
});

blue_btn.addEventListener("click", startTime);


