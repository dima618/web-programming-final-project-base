//place holder before moving
function EmailValidation(inputEmail){
    var emailformat = /\S+@\S+/;
    if(emailformat.test(inputEmail)){
        alert("Valid email address!");
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        return false;
    }
}