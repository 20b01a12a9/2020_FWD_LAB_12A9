let btn = document .getElementById("btn");
btn.addEventListener("click",function(){
    let name = document.getElementById("name");
    if (name.value === ''){
        document.getElementById("nameid").innerHTML = "Please enter your name"
    }
    else{
        document.getElementById("nameid").innerHTML = ""
    }
    let pass = document.getElementById("pass");
    if(pass.value === ''){
        let t=document.getElementById("passid");
        document.getElementById("passid").innerHTML = "Please enter your password"
    }
    else{
        document.getElementById("passid").innerHTML = ""
}
    let sel = document.getElementById("sel");
    if(sel.value === 'Branch'){
        document.getElementById("selid").innerHTML = "Please select your branch"
    }
    else{
        document.getElementById("selid").innerHTML = ""
}
    let mail = document.getElementById("mail");
if (mail.value === ''){
    document.getElementById("mailid").innerHTML = "please enter proper domain"
}
else{
    document.getElementById("mailid").innerHTML = ""
}
let phone = document.getElementById("phone");
if(phone.value === ''){
    let t=document.getElementById("phoneid");
    document.getElementById("phoneid").innerHTML = "Please enter vaild phone number"
}
else{
    document.getElementById("phoneid").innerHTML = ""
}

})
