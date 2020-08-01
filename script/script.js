let e = document.getElementById("select");
let a = e.options[e.selectedIndex].text;
let firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input");

let tons = document.getElementById("tons");
let kg = document.getElementById("kg");
let grams = document.getElementById("grams");
let pounds = document.getElementById("pounds");

function lengthPage() {
  document.getElementById("first-page").style.display = "none";
  document.getElementById("length-page").style.display = "block";
}
function weigthPage() {
  document.getElementById("first-page").style.display = "none";
  document.getElementById("weigth-page").style.display = "flex";
}

// var weights = {
//   tons,
//   kg,
//   grams,
//   pounds,
// };

setInterval(checkSeletBox, 200);

function checkSeletBox() {
  a = e.options[e.selectedIndex].text;
}

function buttonClicked() {
  if (a == "Meter to Km") {
    if (firstInput.value != "") {
      secondInput.value = firstInput.value * 0.001 + "Km";
    } else if (secondInput.value != "") {
      firstInput.value = secondInput.value * 1000 + " M";
    } else {
      alert("Empty!");
    }
  }
  if (a == "Meter to Feet") {
    if (firstInput.value != "") {
      secondInput.value = (firstInput.value * 3.28).toFixed(2) + " Feet";
    } else if (secondInput.value != "") {
      firstInput.value = (secondInput.value / 3.28).toFixed(2) + " M";
    } else {
      alert("Empty!");
    }
  }
  if (a == "Decimeter to Km") {
    if (firstInput.value != "") {
      secondInput.value = firstInput.value * 0.0001 + " Km";
    } else if (secondInput.value != "") {
      firstInput.value = secondInput.value * 10000 + " Dm";
    } else {
      alert("Empty!");
    }
  }
  if (a == "Km to Mile") {
    if (firstInput.value != "") {
      secondInput.value = (firstInput.value * 0.62).toFixed(2) + " Mile";
    } else if (secondInput.value != "") {
      firstInput.value = (secondInput.value * 1.6).toFixed(2) + " Km";
    } else {
      alert("Empty!");
    }
  }
}

function calculateWeight() {
  if (kg.value != "") {
    tons.value = kg.value * 0.001;
    grams.value = kg.value * 1000;
    pounds.value = (kg.value * 2.2).toFixed(2);
  } else if (tons.value != "") {
    kg.value = tons.value * 1000;
    grams.value = tons.value * 1000000;
    pounds.value = (tons.value * 2204.6).toFixed(2);
  } else if (grams.value != "") {
    kg.value = grams.value * 0.001;
    tons.value = grams.value * 0.000001;
    pounds.value = (grams.value * 0.002).toFixed(3);
  } else if (pounds.value != "") {
    kg.value = pounds.value * 0.45;
    tons.value = (pounds.value * 0.0004).toFixed(4);
    grams.value = (pounds.value * 453.5).toFixed(2);
  }
}

function reset() {
  tons.value = "";
  grams.value = "";
  kg.value = "";
  pounds.value = "";
}
