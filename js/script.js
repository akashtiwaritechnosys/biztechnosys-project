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
    jQuery('.trusted-customers').trigger('play.owl.autoplay', [3000]);

    function setSpeed() {
      jQuery('.trusted-customers').trigger('play.owl.autoplay', [3000]);
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
      smartSpeed: 800,
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
$(document).ready(function () {
  let $nav = $("#navbarSupportedContent");

  // Function to set active state based on URL
  function setActiveNavItem() {
    let path = window.location.pathname.split("/").pop() || "index.html";
    $nav.find(".nav-item").removeClass("active");
    $nav.find(".nav-link").removeClass("show").attr("aria-expanded", "false");

    $nav.find(".nav-item a").each(function () {
      let href = $(this).attr("href");
      if (href === path || href === "./" + path) {
        $(this).parent().addClass("active");
        $(this).addClass("show").attr("aria-expanded", "true");
      }
    });
  }

  // Set active on load
  setActiveNavItem();

  // On nav item click (immediate visual feedback)
  $nav.on("click", ".nav-item", function (e) {
    // If click is inside the dropdown-menu (e.g. mega tabs), don't reset navbar state
    if ($(e.target).closest('.dropdown-menu').length) return;

    $nav.find(".nav-item").removeClass("active");
    $nav.find(".nav-link").removeClass("show").attr("aria-expanded", "false");
    
    $(this).addClass("active");
    $(this).find("> .nav-link").addClass("show").attr("aria-expanded", "true");
  });




  // Click outside → reset to actual current page
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".navbar").length) {
      setActiveNavItem();
    }
  });

  // Sticky Header on Scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

});

// Recalculate on resize
// $(window).on("resize", function () {
//   setTimeout(function () {
//     test();
//   }, 500);
// });

// On toggler click (mobile view)
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
});

// ========================navbar ends here ===================


// ========================mega-tab-btn starts here ===================
$(document).on('click', '.mega-tab-btn', function (e) {
  e.preventDefault();
  const tabId = $(this).data('tab');
  const $btn = $(this);
  
  if ($btn.closest('.mega-tabs-nav').length) {
    // Main Side Tabs
    const $wrapper = $btn.closest('.mega-tabs-wrapper');
    $wrapper.find('.mega-tabs-nav .mega-tab-btn').removeClass('active');
    $wrapper.find('.mega-tabs-content > .mega-content').removeClass('active');
    
    $btn.addClass('active');
    $('#' + tabId).addClass('active');
  } else {
    // Nested Tabs
    const $parentContent = $btn.closest('.mega-content');
    $parentContent.find('> .mega-tab-btn').removeClass('active');
    $parentContent.find('> .mega-tabs-content > .mega-content').removeClass('active');
    
    $btn.addClass('active');
    $('#' + tabId).addClass('active');
  }
});
// ========================mega-tab-btn ends here ===================
