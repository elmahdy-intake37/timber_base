var txt = document.getElementById('brand').innerText = "Welcome "+ localStorage.getItem("username")

$(document).ready(function(){
$.ajax({
        url: "http://localhost:8000/api/v1/client/",
        dataType: 'json',
        type: 'GET',
        headers: {
      'Authorization': 'Token '+ getCookie('Token')
   },
        // processData: false,
        timeout: 5000,
        success: function( data, textStatus, jQxhr ){
          console.log('data', data);

            // $('#response pre').html( JSON.stringify( data ) );
        },
        error:  function(xhr, textStatus, error){
          console.log("readyState: " + xhr.readyState);
          console.log("responseText: "+ xhr.responseText);
          console.log("status: " + xhr.status);
          console.log("text status: " + textStatus);
          console.log("error: " + error);

        }
    });
  });

jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }

    });

    $("#toggle-sidebar").click(function () {
        $(".page-wrapper").toggleClass("toggled");
    });


});


document.getElementById("clickMe").onclick = function () {
  var headers = {
    'Authorization': 'Token '+ getCookie('Token')
 }
  console.log(headers)
  $.ajax({
      url:'http://localhost:8000/api/v1/invoice/',
      dataType: 'json',
      type: 'GET',
      headers: {
    'Authorization': 'Token '+ getCookie('Token')
 },
      // processData: false,
      timeout: 5000,
      success: function( data, textStatus, jQxhr ){
        console.log('data', data);
        window.location.href = 'invoice.html';

          // $('#response pre').html( JSON.stringify( data ) );
      },
      error:  function(xhr, textStatus, error){
        console.log("readyState: " + xhr.readyState);
        console.log("responseText: "+ xhr.responseText);
        console.log("status: " + xhr.status);
        console.log("text status: " + textStatus);
        console.log("error: " + error);

      }
  });
 };


 $(function() {

   // contact form animations
   $('#invoice').click(function() {
     $('#invoiceForm').fadeToggle();
   })
   $(document).mouseup(function (e) {
     var container = $("#invoiceForm");

     if (!container.is(e.target) // if the target of the click isn't the container...
         && container.has(e.target).length === 0) // ... nor a descendant of the container
     {
         container.fadeOut();
     }
   });

 });


var room = 1;
function education_fields() {

    room++;
    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
    divtest.innerHTML = '<div class="col-sm-9 nopadding"><div class="form-group"> <input type="text" class="form-control" id="description" name="description[]" value="" placeholder="description"></div></div><div class="col-sm-9 nopadding"><div class="form-group"> <input type="text" class="form-control" id="cost" name="cost[]" value="" placeholder="cost"></div></div><div class="col-sm-9 nopadding"><div class="form-group"> <input type="text" class="form-control" id="qty" name="Degree[]" value="" placeholder="Degree"></div></div><div class="col-sm-9 nopadding"><div class="form-group"> <input type="text" class="form-control" id="rate" name="rate[]" value="" placeholder="rate"></div></div><div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_education_fields('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> remove</button></div></div></div></div><div class="clear"></div>';

    objTo.appendChild(divtest)
}
   function remove_education_fields(rid) {
	   $('.removeclass'+rid).remove();
   }
   // this need to handle
function send_req(){
  var desc_invoice = {
    'desc':'',
    'cost':'',
    'tax':'',
    'qty':''
  }
  var invoice_list = []

  var des = document.querySelectorAll('[id=description]'),
  cost = document.querySelectorAll('[id=cost]'),
  tax = document.querySelectorAll('[id=tax]'),
  qty = document.querySelectorAll('[id=qty]'),
  clientName = document.getElementById('clientName'),
  zipCode = document.getElementById('zipCode'),
  city = document.getElementById('city'),
  state = document.getElementById('state'),
  country = document.getElementById('country'),
  terms =  document.getElementById('terms')

var data = {
  'desc_invoice':desc_invoice,
  'clinet': clientName,
  'zipCode': zipCode,
  'city': city,
  'state': state,
  'country': country,
  'terms': terms
}

for(var i = 0; i < des.length; i++){
desc_invoice['desc'] = des[i].value
invoice_list.push(desc_invoice)
}
for(var i = 0; i < cost.length; i++){
desc_invoice['cost'] = cost[i].value
invoice_list.push(desc_invoice)
}
for(var i = 0; i < tax.length; i++){
desc_invoice['tax'] = tax[i].value
invoice_list.push(desc_invoice)
}
for(var i = 0; i < qty.length; i++){
desc_invoice['qty'] = qty[i].value
invoice_list.push(desc_invoice)
}

$.ajax({
    url: 'http://localhost:8000/api/v1/invoice_item/',
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
