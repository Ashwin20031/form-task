function validate(){
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    
    if(phone.length!=10){
        alert("Please enter valid number");
        return false;
    }

    if(first.length<3){
        alert("Name should contain atleast 3 characters");
        return false;
    }

    if(city.length<3){
        alert("City should contain atleast 3 characters");
        return false;
    }
    if(address.length<8){
        alert("address should contain atleast 8 characters");
        return false;
    }

    alert("Submitted submitted successfully")
    return true;
}