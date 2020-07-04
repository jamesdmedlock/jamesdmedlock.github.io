// function checkForm(info){
//     var valid = true;

//     if (info.userName.value == "")
//         valid = false;
//         alert = ("invalid");
// }



var clear = document.getElementById("userName");
clear.addEventListener("focus", reset(){
    clear.reset();
});



//None of this works unless I move it to the header on html page
// function checkForm(info){
//     var valid = true;
//     var regex = /^(1 )?(\([0-9]{3}\) )?([1-9]{3})(\-[1-9]{4})$/;
//     var userNumber = document.getElementById("phoneNumber").value;

//     if (info.userName.value == ""){
//         valid = false;
        
//         info.userName.style.backgroundColor = "red";
//         var name = document.getElementById("nameError");
//         name.style.display = "inline";
        
//     }

//     if (info.userName.value.length < 6 && info.userName.value.length > 0){
//         valid = false;
//         info.userName.style.backgroundColor = "red";
//         var name = document.getElementById("nameError");
//         name.style.display = "inline";
//         name.innerHTML = "Name must be at least six characters";

//     }

//     if (info.phone.value == ""){
//         valid = false;

//         info.phone.style.backgroundColor = "red";
//         var number = document.getElementById("phoneError");
//         number.style.display ="inline";
//     }

//     if (regex.test(userNumber)){
//         valid = false;
//         info.phone.style.backgroundColor = "red";
//         var number = document.getElementById("phoneError");
//         number.style.display = "inline";
//         number.innerHTML = "Please use xxx-xxx-xxxx format for number.";
        
//     }

//     if (valid){
//         info.submit();
//     }

// }

        

                



//^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$<