/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/
var name = ''
function cambiar_login() {
var username = document.getElementById('username').value,

password = document.getElementById('password').value;
console.log(username + password);
var data ={
  'username':username,
  'password': password
}
if(password && username){
send_request(data, 'login')
}
document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);
  }

  function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}

function send_request(data, req){
  var req_url = '';

  if (req == 'login'){
    req_url = 'http://localhost:8000/api/v1/auth/login'
  } else if(req == 'register'){
    req_url = 'http://localhost:8000/api/v1/auth/register'
  }

  $.ajax({
      url: req_url,
      dataType: 'json',
      type: 'POST',
      "Content-type": 'application/json',
      data: {data:JSON.stringify(data)},
      // processData: false,
      timeout: 5000,
      success: function( data, textStatus, jQxhr ){
        // console.log('data', data['auth_token']);
      // document.cookie="username="+data['username']+";max-age="+ 30*24*60*60;
        var cookieName = 'Token',
         cookieValue = data['auth_token'],
         myDate = new Date();
        myDate.setMonth(myDate.getMonth() + 12);
        document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate
                + ";path=/";
          localStorage.setItem("username",data['username']);

          // $('#response pre').html( JSON.stringify( data ) );
          window.location.href = '../../html/dashboard/dashboard.html';
      },
      error:  function(xhr, textStatus, error){
        console.log("readyState: " + xhr.readyState);
        console.log("responseText: "+ xhr.responseText);
        console.log("status: " + xhr.status);
        console.log("text status: " + textStatus);
        console.log("error: " + error);

      }
  });
}
function cambiar_sign_up(at) {

  var email = document.getElementById("email").value,
  username = document.getElementById("username").value,
  first_name = document.getElementById("first_name").value,
  last_name = document.getElementById("last_name").value,
  mobile = document.getElementById("phone").value,
  server = document.getElementById("server_url").value,
  address = document.getElementById("address").value,
  second_address = document.getElementById("second_address").value,
  country = document.getElementById("country").value,
  city = document.getElementById("city").value,
  state = document.getElementById("state").value,
  zipcode = document.getElementById("zipcode").value,
  password = document.getElementById("password").value,
  password2= document.getElementById("password2").value;


  var data ={
    "username" : username,
    "email" : email,
    "first_name" : first_name,
    "last_name": last_name,
    "password" : password,
    "password2" : password2,
    "profile": {
    "mobile" : mobile,
    "server_url" : server,
    "address_1" : address,
    "address2" : second_address,
    "country" : country,
    "city" : city,
    "state" : state,
    "zipcode" : zipcode,

  }
  }

  if (document.getElementById('password2').value){
  if (document.getElementById('password').value ==
      document.getElementById('password2').value) {
      document.getElementsByName('message')[0].placeholder = 'matching';
      document.getElementsByName('message')[0].style.backgroundColor ="green";
      send_request(data, 'register')

 } else {
   document.getElementsByName("message")[0].value="";
   document.getElementsByName('message')[0].placeholder = 'not matching';
   document.getElementsByName('message')[0].style.backgroundColor ="red";
 }
}



  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";

setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";

},100);

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);



}



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";
document.querySelector('.cont_form_sign_up').style.opacity = "0";
document.querySelector('.cont_form_login').style.opacity = "0";

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);

  }
