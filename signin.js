var emailP = 'example';
var passwordP = 'password';

function logIn(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    if(email === emailP && password === passwordP) {
        alert('Correct User');
      } else {
        alert('Incorrect User');
      }
    }
    