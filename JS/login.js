$(document).ready(function(){
    $("#loginForm").submit(function(e){
        e.preventDefault();
        let message = $("#errors")
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        if(email ==""|| password== ""){
            return message.html("Both fields must be filled in")
        }
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(pattern)) {
            return message.html("You must enter a valid email");
        }
        if(password.length < 6){
            return message.html("Passwords must be at least 6 characters");
        }
        message.html("Account could not be found");
    })
})
