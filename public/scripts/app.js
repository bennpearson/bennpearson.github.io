(function () {

  var $ = jQuery;

  $(document).ready(function () {

    $("footer nav li").click(function() {
      var currenttab = $(this).attr('class');
      if ($(this).hasClass('active')){
        $(this).removeClass("active");
        $("footer section").removeClass("active");
      }
      else{
        $("footer nav li").removeClass("active");
        $(this).addClass("active");
        $("footer section").removeClass("active");
        $("footer section." + currenttab).addClass("active");
      }
    });

    var $currentsection = $('article section').attr('class');
    $("footer section ul figure." + $currentsection ).addClass("active");


  }); // document ready
}).call(this);
