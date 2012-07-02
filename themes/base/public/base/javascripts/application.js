$(document).ready(function () {

  if ($('body').hasClass('address')) {
    $('#confirmation').hide();

    $('form#address_form').submit(function(e) {
        $('#form').hide();
        $('#confirmation').show();
        return true;
    });
  }

  if ($('body').hasClass('index')) {
    $('#confirmation').hide();

    $('form#rsvp_form').submit(function(e) {
        $('#form').hide();
        $('#confirmation').show();
        return true;
    });
  }

});
