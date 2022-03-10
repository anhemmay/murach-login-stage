let err = "Not valid";
let avaiable = "Avaiable";
let email_status = fname_status = lname_status = false

function checkInput() {
  let email = document.getElementById("email").value;

  if (!email.includes("@")) {
    document.getElementById("error_mail").innerHTML = err;
    email_status =  false
  } else {
    document.getElementById("error_mail").innerHTML = avaiable;
    email_status =  true
  }
  checkAllInput()
}

function checkFirstName() {
  let fname = document.getElementById("firstName").value;

  if (isEmptyOrSpaces(fname)) {
    document.getElementById("error_fname").innerHTML = err;
    fname_status = false
  } else {
    document.getElementById("error_fname").innerHTML = avaiable;
    fname_status = true
  }
  checkAllInput()
}

function checkLastName(){
  let lname = document.getElementById("lastName").value;
  if (isEmptyOrSpaces(lname)) {
    document.getElementById("error_lname").innerHTML = err;
    lname_status = false
  } else {
    document.getElementById("error_lname").innerHTML = avaiable;
    lname_status = true
  }
  checkAllInput()
}

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function checkAllInput(){
  if (email_status && fname_status && lname_status){
    document.getElementById("submit").disabled = false
  } else {
    document.getElementById("submit").disabled = true
  }
}



