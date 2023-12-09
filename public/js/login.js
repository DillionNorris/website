

const signup = (e)=>{
    e.preventDefault();
    signupSend(e);
}

const signupSend = async(e)=>{
    const formData = new FormData(e.target);
    const message = document.createElement("message");
    message.innerHTML ="";

    let response = await fetch("/api/signup",{
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }).catch((error) => {
        message.innerHTML = "Error:"+error;
        return;
    }); 
    if(response.status != 200){
        message.innerHTML = await response.text();
        return;
    }
    message.innerHTML = "Signed in";
}


const login = (e)=>{
    e.preventDefault();
    loginSend(e);
}

const loginSend = async(e)=>{
    const formData = new formData(e.target);
    const message = document.createElement("message");
    message.innerHTML= " ";

    let response = await fetch("/api/login",{
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers:{
            "Content-Type": "application/json; charset=UTF-8",
        },
    }).catch((error) =>{
        message.innerHTML = "Error: " + error;
        return;
    });
    if(response.status != 200){
        message.innerHTML = await response.text();
        return;
    }
    message.innerHTML = "login success";
}
    
    

window.onload = ()=> {
    document.getElementById("signupButton").onsubmit = signup;
    document.getElementById("loginButton").onsubmit = login;
}