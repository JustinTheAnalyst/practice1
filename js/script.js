function submitForm(event){

    event.preventDefault()

    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let website = document.getElementById("inputWebsite").value;
    let message = document.getElementById("inputMessage").value;
    let errorNameMessage = "";
    let errorEmailMessage = "";
    let errorWebsiteMessage = "";
    let errorMessage = "";

    if(name === ""){
        errorNameMessage = "Please enter your name.";
    }else{
        errorNameMessage  = "";
    }

    if(email === ""){
        errorEmailMessage = "Please enter your email.";
    }else{
        errorEmailMessage  = "";
    }

    if(website === ""){
        errorWebsiteMessage = "Please enter your website.";
    }else{
        errorWebsiteMessage  = "";
    }

    if(message === ""){
        errorMessage = "Please enter your message here.";
    }else{
        errorMessage  = "";
    }

    document.getElementById("errorNameMessage").innerHTML = errorNameMessage;
    document.getElementById("errorEmailMessage").innerHTML = errorEmailMessage;
    document.getElementById("errorWebsiteMessage").innerHTML = errorWebsiteMessage;
    document.getElementById("errorMessage").innerHTML = errorMessage;

    if(errorNameMessage == "" & errorEmailMessage == "" && errorWebsiteMessage =="" && errorMessage ==""){
        alert("Successful! One of our staff will be contacting you regarding your querries. Thanks.");
    }
}