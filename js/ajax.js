/* Article FructCode.com */
jQuery( document ).ready(function($) {
    $("#send-request").click(
      function(){
        if ($('#tel-request').val()){
          sendAjaxForm('request', 'mail.php');
        } else {
          $('.send-email-wrapper').removeClass('form-success').addClass('form-error');
        }
       return false; 
      }
    );
    $("#callback-submit").click(
      function(){
        if ($('#tel-callback').val()){
          sendAjaxForm('callback-form', 'mail.php');
        } else {
          $('.send-email-wrapper').removeClass('form-success').addClass('form-error');
        }
       return false; 
      }
    );
});

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект

        success: function(response) { //Данные отправлены успешно

          // $("#"+ajax_form).html('Hello');

          $("#"+ajax_form).parents('.send-email-wrapper').removeClass('form-error').addClass('form-success');
          
        },
        error: function(response) { // Данные не отправлены

          $("#"+ajax_form).parents('.send-email-wrapper').removeClass('form-success').addClass('form-error');

     }
  });


}