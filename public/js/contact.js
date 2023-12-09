




const submit = ()=> {
    
    let responce = document.getElementById('responce');

    responce.innerHTML = 'Successfully Submitted';
    button.disabled = true;

}


window.onload = ()=> {
    document.getElementById("submit").onclick = submit;
}
