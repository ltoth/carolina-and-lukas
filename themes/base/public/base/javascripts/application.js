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

  if ($('body').hasClass('slovensko')) {
    $('#confirmation').hide();

    $('form#rsvp_form').submit(function(e) {
        $('#form').hide();
        $('#confirmation').show();
        return true;
    });
  }

  $('a[href*="#"]').click(function(event){

    //get the full url - like mysitecom/index.htm#home
    var full_url = this.href;

    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
    var parts = full_url.split("#");
    var trgt_url = parts[0];

    if (location.href.split('#')[0] == trgt_url) {
      //prevent the default action for the click event
      event.preventDefault();

      var trgt_a = parts[1];

      //get the top offset of the target anchor
      var target_offset = $("#"+trgt_a).offset();
      var target_top = target_offset.top;

      //goto that anchor by setting the body scroll top to anchor top
      $('html, body').animate({scrollTop:target_top}, 500);
    }
  });

});
