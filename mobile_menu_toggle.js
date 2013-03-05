(function ($) {
  Drupal.behaviors.ad_calendar = {
    attach: function (context, settings) {
     $("#toggle").click(function() {
        $("#zone-menu").slideToggle('fast');
        return false;
     });

    }
  };

})(jQuery);
