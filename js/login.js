function chenkForm() {
    document.getElementById('errorMessage').innerHTML = "";
    document.getElementById('successMessage').innerHTML="";

    var errors = "";
    if (document.getElementById('username').value.length < 5) {
        errors = "The username must be at least 5 Character. <br>";
    }
    if (document.getElementById('password').value.length < 8) {
        alert("Please Type Conrrect 8 digit Passwor");
    }
    if (errors != "") {
        document.getElementById("errorMessage").innerHTML = errors;
        
    } else {
        window.location.href = "index.html";
        alert("You have successfully logged in.");
        
    }
    return false;
}

document.getElementById("form1").onsubmit = chenkForm;