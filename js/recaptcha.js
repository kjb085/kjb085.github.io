function showRecaptcha(element) {
  Recaptcha.create('6LeObAUTAAAAAMtfwY22umX9YCTNoklUHp1wBj2I', element, {
    theme: 'custom', // maybe pick another at https://developers.google.com/recaptcha/docs/customization
    custom_theme_widget: 'recaptcha_widget'
  });
}

// function setupRecaptcha() {

$(document).ready(function(){ 
  var contactFormHost = 'http://localhost:5000/',
      $form = $('#contact-form'),
      notice = $form.find('#notice'),
      form_info = $form.serialize();

    $form.on('submit', function(event){
      event.preventDefault();

      $target = event.target

      console.log(form_info)
      console.log($target.serialize)

      $.ajax({
        type: 'POST',
        url: contactFormHost + 'send_email',
        data: $form.serialize(),
        dataType: 'json',
        success: function(response) {
          switch (response.message) {
            case 'success':
              $form.fadeOut(function() {
                $form.html('<h4>' + $form.data('success') + '</h4>').fadeIn();
              });
              break;

            case 'failure_captcha':
              showRecaptcha('recaptcha_widget');
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