$(document).ready(function () {
  if ($.fn.owlCarousel && $(".owl-carousel").length) {
    // =========== for CRM-Doctor One Stop for All IT Solutions ==========

    $(".trusted-customers").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 1000,
      // animateOut: "slideOutDown",
      // animateIn: "flipInX",
      mouseDrag: false,
      pullDrag: false,
      touchDrag: false,
      slideTransition: 'linear',
      autoplaySpeed: 3000,
    // smartSpeed: 3000,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 2,
        },
        768: {
          items: 4,
        },
        992: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      },
      
    });
    jQuery('.trusted-customers').trigger('play.owl.autoplay',[3000]);

    function setSpeed(){
        jQuery('.trusted-customers').trigger('play.owl.autoplay',[3000]);
    }
    setTimeout(setSpeed, 1000);


    // our teams in about us page
    $(".our-team-owl-carousel").owlCarousel({
      loop: false,
      margin: 20,
      nav: true,
      autoplay: false,
      dots: false,
      smartSpeed: 800,
      navText: [
        '<i class="fa-solid fa-arrow-left nav-arrow"></i>',
        '<i class="fa-solid fa-arrow-right nav-arrow"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
          nav: true,
        },
      },
    });

    // clients-testimonials in about us page
    $(".clients-testimonials-owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      autoplay: false,
      dots: false,
      center: true,
      smartSpeed: 1000,
      navText: [
        '<i class="fa-solid fa-arrow-left nav-arrow"></i>',
        '<i class="fa-solid fa-arrow-right nav-arrow"></i>',
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 2.3 },
      },
    });

    // clients-testimonials in about us page
    $(".related-blog-owl-carousel").owlCarousel({
      loop: false,
      margin: 20,
      nav: true,
      autoplay: false,
      dots: false,
      smartSpeed: 800,
      navText: [
        '<i class="fa-solid fa-arrow-left nav-arrow"></i>',
        '<i class="fa-solid fa-arrow-right nav-arrow"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });

     // ================= for contact-owl-carousel ===============
     $(".biz-contact-owl-carousel").owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      dots: true,
      smartSpeed:800,
      responsive: {
        0: {
          dots: true,
          items: 1,
        },
        600: {
          items: 2,
          dots: true,
        },
        1000: {
          items: 3,
          dots: true,
        },
      },
    });

    //=================== for Our Implementation caro start here=======================
    const $carousel = $(".our-implementation-owl-carousel");
    $carousel.owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 1300,
      animateIn: "flipInX",
      mouseDrag: false,
      pullDrag: false,
      touchDrag: false,
      items: 1,
    });

    $(".content").hover(
      function () {
        const index = $(this).data("index");
        $carousel.trigger("stop.owl.autoplay"); // Stop autoplay on hover
        $carousel.trigger("to.owl.carousel", [index, 300]);
      },  
      function () {
        $carousel.trigger("play.owl.autoplay", [1300]); // Resume autoplay when hover ends
      }
    );
    // ====================== for Our Implementation caro ends here ===============
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // for active button in sitecore content page start here
  $(".insite-btns-group .btn").on("click", function () {
    $(".insite-btns-group .btn").removeClass("active");
    $(this).addClass("active");
  });
  // for active button in sitecore content page end here

  
  //AOS animation starts
  AOS.init({
    duration: 1200,
  });
  document.addEventListener("scroll", () => {
    AOS.refresh();
  });
  //AOS animation ends
});

// ========================== for navbar start here===========================
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeHeight = activeItemNewAnim.innerHeight();
  var activeWidth = activeItemNewAnim.innerWidth();
  var itemPos = activeItemNewAnim.position();

  $(".hori-selector").css({
    top: itemPos.top + "px",
    left: itemPos.left + "px",
    height: activeHeight + "px",
    width: activeWidth + "px",
  });
}

$(document).ready(function () {
  setTimeout(function () {
    test();
  }, 100);

  // Add active class based on current page
  var path = window.location.pathname.split("/").pop();
  if (path === "") path = "index.html";
  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  target.parent().addClass("active");

  // Update selector after assigning active class
  setTimeout(function () {
    test();
  }, 100);

  // Navigation click handler
  $("#navbarSupportedContent").on("click", "li", function () {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    test();
  });
});

// Recalculate on resize
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});

// On toggler click (mobile view)
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  }, 300);
});

// ========================navbar ends here ===================
