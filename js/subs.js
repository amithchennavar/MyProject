
function jfunc1() {
    var nm = form1.name.value;
    var email = form1.email.value;
    var country = form1.country.value;
    
    // Convert country to uppercase
    country = country.toUpperCase();

    if (nm === "" || email === "" || country === "") {
        alert("Please fill in all the required fields");
        form1.name.focus();
        form1.email.focus();
        form1.country.focus();
        return false;
    } else {
        if (country === "INDIA") {
            alert("Thank you!! You are eligible for a 50% discount");
            return true;
        } else {
            alert("Thank you for Subscribing!");
            return false;
        }
    }
}
