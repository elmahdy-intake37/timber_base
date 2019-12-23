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
