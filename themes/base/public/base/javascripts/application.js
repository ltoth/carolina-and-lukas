$(document).ready(function () {

  if ($('body').hasClass('address')) {
    $('#confirmation').hide();

    $('form#address_form').submit(function(e) {
        $('#form').hide();
        $('#confirmation').show();
        return true;
    });
  }

});
