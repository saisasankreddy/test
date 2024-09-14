var allinputs=document.querySelectorAll("input");
console.log(allinputs)
allinputs[0].placeholder="First name"
allinputs[1].placeholder="middle name"
allinputs[2].placeholder="last name"
allinputs[3].placeholder="Enter your email I'D"
allinputs[3].required="true"
allinputs[4].placeholder="Enter Valid password"
allinputs[4].type="password"
allinputs[5].type="password"
allinputs[5].placeholder="conform password"
allinputs[5].required="true"



var allforms=document.forms
console.log(allforms)
allforms[0].action="../login.html"



function funpassvisiable(){
    document.getElementById("password").type="text";
    document.getElementById("eye").src="../../../../Asset/images/eye.png";
}
function funpassinvisiable(){
    document.getElementById("password").type="password"
    document.getElementById("eye").src="../../../../Asset/images/eye_hidden.png";
}


function funpassvisiable1(){
    document.querySelector("#conpassword").type="text";
    document.querySelector("#eye1").src="../../../../Asset/images/eye.png";
}
function funpassinvisiable1(){
    document.querySelector("#conpassword").type="password"
    document.querySelector("#eye1").src="../../../../Asset/images/eye_hidden.png";
}