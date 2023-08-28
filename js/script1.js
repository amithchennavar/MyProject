function jfunc3()
{
    var name = form2.name.value;
    var email = form2.email.value;
    var des = form2.des.value;

    if (name == "" || email == "" || des == "")
    {
        alert("Please fill all the required feilds");
        return false;
        form2.name.focus();
        form2.email.focus();
        form2.des.focus();
    }
    else
    {
        alert("Go next");
        return true;
    }
}

