console.log("JS loaded");
let form=document.querySelector("#myform");
let error=document.querySelector("#error");
let success=document.querySelector("#success");
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let confirmPassword=document.querySelector("#confirmPassword").value;
    error.textContent="";
    success.textContent="";
    if(name==""){
        error.textContent="Name cannot be empty";
        return;
    }
    if(!email.includes("@")){
        error.textContent="Email must contain @";
        return;
    }
    if(password.length<6){
        error.textContent="Password must be at least 6 characters";
        return;
    }
        if(password!==confirmPassword){
            error.textContent="Password do not match";
            return;
        }
        success.textContent="Form Submitted Successfully";
        form.reset();
    });