let err = "Not valid";
let avaiable = "Avaiable";

function checkInput() {
  let email = document.getElementById("email").value;

  console.log(email);
  if (!email.includes("@")) {
    document.getElementById("error_mail").innerHTML = err;
  } else {
    document.getElementById("error_mail").innerHTML = avaiable;
  }
}

function checkEmpty() {
  let fname = document.getElementById("firstName").value;
  let lname = document.getElementById("lastName").value;

  if (isEmptyOrSpaces(fname)) {
    document.getElementById("error_fname").innerHTML = err;
  } else {
    document.getElementById("error_fname").innerHTML = avaiable;
  }

  if (isEmptyOrSpaces(lname)) {
    document.getElementById("error_lname").innerHTML = err;
  } else {
    document.getElementById("error_lname").innerHTML = avaiable;
  }
}
function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}