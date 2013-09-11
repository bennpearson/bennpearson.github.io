(function () {

  var $ = jQuery;

  $(document).ready(function () {


    //face
     
    $('img[usemap]').rwdImageMaps();

    // $(".test3").click(function() {  
    //   $("figure").addClass("active");  
    // });
    $(".test3").mouseover(function() {  
      $(".f1").addClass("hover");  
    });
    $(".test3").mouseout(function() {  
      $(".f1").removeClass("hover");  
    });

    //Navigation

    //   if ($('footer .info').hasClass('close')){
    //     $("footer section, nav li").removeClass("open");
    //     $("footer section, nav li").addClass("close"); 
    //     $("footer .info").removeClass("close");
    //     $("footer .info").addClass("open"); 
    //   }
    //   else{ 
    //     $("footer .info").removeClass("open");
    //     $("footer .info").addClass("close");  
    //   }

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


    $(".fittext1").fitText(0.47);
    $(".fittext2").fitText(0.47);
    $(".fittext3").fitText(0.47);
    $(".fittext4").fitText(0.47);
    $(".fittext5").fitText(0.47);

    $(".introduction h1 strong, .introduction h2 strong").lettering();


  }); // document ready
}).call(this);


