function funpassvisi(){
    document.getElementById("password").type="text";
    document.getElementById("eye").src="../../../Asset/images/eye.png";
}
function funpassinvisi(){
    document.getElementById("password").type="password"
    document.getElementById("eye").src="../../../Asset/images/eye_hidden.png";
}
var allforms=document.forms;
allforms[0].action="https://www.facebook.com"
allforms[0].target="_blank"

var anchors=document.anchors;
console.log(anchors);
anchors[0].style.border="2px solid black"
anchors[0].style.textAlign="center"
anchors[0].target="_blank"
anchors[0].innerHTML="Register"
anchors[0].href="../ownassugnment/register/register.html"

function password(){
    var pass=document.getElementById("password").value;
    var passlen=pass.length;
    if(passlen==0){
        document.getElementById("status").innerHTML="";
    }
    else if(passlen>=1&&passlen<=5){
        document.getElementById("status").innerHTML="week password";
        document.getElementById("status").style.color="red";
    }
    else if(passlen>=6&&passlen<=10){
        document.getElementById("status").innerHTML="Avg password";
        document.getElementById("status").style.color="orange";
    }
    else if(passlen>=11&&passlen<=15){
        document.getElementById("status").innerHTML="good password";
        document.getElementById("status").style.color="blue";
    }
    else{
        document.getElementById("status").innerHTML="Strong password";
        document.getElementById("status").style.color="green";
    }
}