function showRecaptcha(element) {
  Recaptcha.create('6LeObAUTAAAAAMtfwY22umX9YCTNoklUHp1wBj2I', element, {
    theme: 'custom', // maybe pick another at https://developers.google.com/recaptcha/docs/customization
    custom_theme_widget: 'recaptcha_widget'
  });
}

$(document).ready(function(){ 
  var contactFormHost = 'http://kjb085-github-backend.herokuapp.com/',
      $form = $('#contact-form'),
      notice = $form.find('#notice'),
      form_info = $form.serialize();

    $form.on('submit', function(event){
      event.preventDefault();
      var name = $('#name').val()
      var email = $('#email').val()
      var tel = $('#phone').val()
      var message = $('#message').val()
      var recaptcha = grecaptcha.getResponse()

      $.ajax({
        type: 'POST',
        url: contactFormHost + 'send_email',
        data: {'g-recaptcha-response': recaptcha, 'name': name, 'email': email, 'tel': tel, 'message': message},
        dataType: 'json',
        success: function(response) {
          switch (response.message) {
            case 'success':
              $form.fadeOut(function() {
                $form.html('<h4>' + $form.data('success') + '</h4>').fadeIn();
              });
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