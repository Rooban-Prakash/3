// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(document).scrollTop() > 1) {
//       $(".top-nav").addClass(".top-nav-change");
//     } else {
//       $(".top-nav").removeClass(".top-nav");
//     }
//   });
// });

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if(scroll >= 50) {
        $(".top-nav").addClass("top-nav-change");
        $(".top-nav").removeClass("top-nav");

    } ifelse (scroll = 0) {
        $(".top-nav").removeClass("top-nav-change");
        $(".top-nav").addClass("top-nav");
    }
});


