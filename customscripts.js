$(document).ready(function(){
  $(".bg").interactive_bg({
    strength: 25,              // Movement Strength when the cursor is moved. The higher, the faster it will reacts to your cursor. The default value is 25.
    scale:1,               // The scale in which the background will be zoomed when hovering. Change this to 1 to stop scaling. The default value is 1.05.
    animationSpeed: "100ms",   // The time it takes for the scale to animate. This accepts CSS3 time function such as "100ms", "2.5s", etc. The default value is "100ms".
    contain: true,             // This option will prevent the scaled object/background from spilling out of its container. Keep this true for interactive background. Set it to false if you want to make an interactive object instead of a background. The default value is true.
    wrapContent: false         // This option let you choose whether you want everything inside to reacts to your cursor, or just the background. Toggle it to true to have every elements inside reacts the same way. The default value is false
  });

});

$(window).resize(function() {
  $(".wrapper > .ibg-bg").css({
    width: $(window).outerWidth(),
    height: $(window).outerHeight()
  })
})

$(window).scroll(function(){
  $(".follow-me-text").css("opacity", 1 - $(window).scrollTop() / 250);
});




$(document).ready(function(){

  /**
  * This part does the "fixed navigation after scroll" functionality
  * We use the jQuery function scroll() to recalculate our variables as the
  * page is scrolled/
  */
  $(window).scroll(function(){
    var window_top = $(window).scrollTop() + 100; // the "12" should equal the margin-top value for nav.stick
    var div_top = $('#nav-anchor').offset().top;
    if (window_top > div_top) {
      $('nav').addClass('stick');
    } else {
      $('nav').removeClass('stick');
    }
  });

  /**
  * This part causes smooth scrolling using scrollto.js
  * We target all a tags inside the nav, and apply the scrollto.js to it.
  */
  $("nav a").click(function(evn){
    evn.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash);
  });

  /**
  * This part handles the highlighting functionality.
  * We use the scroll functionality again, some array creation and
  * manipulation, class adding and class removing, and conditional testing
  */
  var aChildren = $("nav li").children(); // find the a children of the list items
  var aArray = []; // create the empty aArray
  for (var i=0; i < aChildren.length; i++) {
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
  } // this for loop fills the aArray with attribute href values

  $(window).scroll(function(){
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();

    for (var i=0; i < aArray.length; i++) {
      var theID = aArray[i];
      var divPos = $(theID).offset().top; // get the offset of the div from the top of page
      var divHeight = $(theID).height(); // get the height of the div in question
      if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
        $("a[href='" + theID + "']").addClass("nav-active");
      } else {
        $("a[href='" + theID + "']").removeClass("nav-active");
      }
    }

    if(windowPos + windowHeight == docHeight) {
      if (!$("nav li:last-child a").hasClass("nav-active")) {
        var navActiveCurrent = $(".nav-active").attr("href");
        $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
        $("nav li:last-child a").addClass("nav-active");
      }
    }
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});
