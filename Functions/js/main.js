console.log("Hello World!");

//method -> in built functions
//functions -> defined by users

function sum(num1, num2){
  return num1 + num2;
}

//function to get username from email
function getUsername(email){
  return email.slice(0, email.indexOf("@"));
}

const getUsername = function(email){
    return email.slice(0, email.indexOf("@"));
}

const getUsername = (email) => {
    return email.slice(0, email.indexOf("@"));
}; //arrow funciton
