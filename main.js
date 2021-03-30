var firstname;
var lastname;
var email;
var password;

function submit(){
    firstname=document.getElementById('firstname').nodeValue;
    lastname=document.getElementById('lastname').nodeValue;
    email=document.getElementById('email').nodeValue;
    password=document.getElementById('password').nodeValue;
    if((firstname=='Stephani') && (lastname=='Widi Astuti') && (email=='stephaniwidiastuti@gmail.com') && (password=='stephani')){
        alert('Login Sukses');
        window.location.href = 'home.html';
    }else{
        alert('Login Error');
        window.location.href = 'index.html';
    }

}