$(document).ready(function(){ 
  var contactFormHost = 'http://kjb085-github-backend.herokuapp.com/',
      notice = $('#info-form').find('#notice') // Temporarily in use until form validations complete, change to captcha modal eventually

    // $('#info_form').on('submit', function(event){
    //   event.preventDefault();
    //   $('#recaptcha_modal').modal('show');
    // });

    $('#captcha-form').on('submit', function(event){
      event.preventDefault();
      var name = $('#name').val()
      var email = $('#email').val()
      var tel = $('#phone').val()
      var message = $('#message').val()
      var recaptcha = grecaptcha.getResponse()
      
      $('#recaptcha_modal').modal('hide')

      if (name == "" || email == "" || message == ""){
        notice.text(notice.data('validation')).fadeIn();
        throw "Form not validated"
      };

      $.ajax({
        type: 'POST',
        url: contactFormHost + 'send_email',
        data: {'g-recaptcha-response': recaptcha, 'name': name, 'email': email, 'tel': tel, 'message': message},
        dataType: 'json',
        success: function(response) {
          switch (response.message) {
            case 'success':
              notice.text(notice.data('captcha-success')).fadeIn();
              break;

            case 'failure_captcha':
              // showRecaptcha('recaptcha_widget');
              notice.text(notice.data('captcha-failed')).fadeIn();
              break;

            case 'failure_email':
              notice.text(notice.data('error')).fadeIn();
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          notice.text(notice.data('error')).fadeIn();
        }
      });
    });
  })