'use strict'

var userName = prompt("What`s ur name?");
var nameLength = userName.length;
var checkName = 0;

for (var i = 0; i < nameLength; i++){
  if(i >= 2){
    checkName = true;
  }
  else{
    checkName = false;
  }
}
console.log(checkName);

var userEmail = prompt("What`s ur email?");
var emailLength = userEmail.length;
var checkEmail = 0;

var resultDog = userEmail.indexOf('@'); 
if (resultDog >= 0){
  checkEmail = true;
}
else{
  checkEmail = false;
}
console.log(checkEmail)


while (!isCheckPass){
  var userPass = prompt("What`s ur password?");
  var passLength = userPass.length;
  var isCheckPass = false;
  var isCheckPassLen = 0;
  var isCheckPassStr = 0;
  var isCheckPassNum = 0;

  if (passLength > 7){
    isCheckPassLen = true;
  }
  else{
    isCheckPassLen = false;
  }

  for (let i = 0; i <= passLength; i++){
    let passElement = parseInt(userPass[i]);

    if(!isFinite(passElement)){
      isCheckPassNum = true;
    }
    else{
      isCheckPassStr = true;
    }

    if(isCheckPassNum === true && isCheckPassStr === true && isCheckPassLen === true){
      isCheckPass = true;
      break;
    }
  }
  console.log(isCheckPass);
}

while(!isUserAgeValidate){
    var userAge = prompt("Enter ur age");
    var isUserAgeValidate = false;

  let userAgeNumber = parseInt(userAge);
  if (userAgeNumber > 18){
    isUserAgeValidate = true;
  }
  else{
    isUserAgeValidate = false;
  }
}

if (checkName === true && checkEmail === true && isCheckPass === true){
  alert("Welcome body ;)");
}
else{
  alert("Huck u man :)");
}