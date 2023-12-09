const emailvalid = document.getElementById("emailvalid");


const changeInfo = () => {
  //load default of account
  let username = "";
  let phone = "";
  let email = "";

  // if switch is on then yea

  let nUser = document.getElementById("new-user-input");
  let nPhone = document.getElementById("new-phone-input");
  let nEmail = document.getElementById("new-email-input");

  if (nEmail.contains("@")) email = nEmail;
  else {
    nEmail = null;
    emailvalid.style.visibility = "visible"
  }

  


};

const changePass = () => {};




window.onload = ()=>{
    emailvalid.style.visibility = "hidden";


}
