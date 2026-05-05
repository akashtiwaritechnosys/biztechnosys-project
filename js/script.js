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
    // const $carousel = $(".our-implementation-owl-carousel");
    // $carousel.owlCarousel({
    //   loop: true,
    //   margin: 20,
    //   nav: false,
    //   autoplay: true,
    //   dots: false,
    //   autoplayTimeout: 1300,
    //   animateIn: "flipInX",
    //   mouseDrag: false,
    //   pullDrag: false,
    //   touchDrag: false,
    //   items: 1,
    // });

    // $(".content").hover(
    //   function () {
    //     const index = $(this).data("index");
    //     $carousel.trigger("stop.owl.autoplay"); // Stop autoplay on hover
    //     $carousel.trigger("to.owl.carousel", [index, 300]);
    //   },
    //   function () {
    //     $carousel.trigger("play.owl.autoplay", [1300]); // Resume autoplay when hover ends
    //   }
    // );
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
    $nav.find(".nav-item").removeClass("active show");
    $nav.find(".nav-link").removeClass("show active").attr("aria-expanded", "false");
    $nav.find(".dropdown-menu, .mega-dropdown-menu").removeClass("show");

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

    // 1. Remove active state from all items
    $nav.find(".nav-item").removeClass("active show");

    // 2. Clear show state and aria-expanded from all links
    $nav.find(".nav-link").removeClass("show active").attr("aria-expanded", "false");

    // 3. Force-close all dropdown menus (fixes issue where Bootstrap show class persists on containers)
    $nav.find(".dropdown-menu, .mega-dropdown-menu").removeClass("show");

    // 4. Set current item as active
    $(this).addClass("active");

    // 5. If it's a dropdown, ensure the current one opens correctly
    if ($(this).hasClass('dropdown')) {
      $(this).addClass("show");
      $(this).find("> .nav-link").addClass("show").attr("aria-expanded", "true");
      $(this).find("> .dropdown-menu").addClass("show");
    }
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

// ======================== Hanging-Wire Spring Physics ===================
const $container = $(".floating-cards-container");
const $wrappers = $(".floating-card-wrapper");

let mouseX = 0, mouseY = 0;
let followX = 0, followY = 0;
const spring = 0.03;

$(".biz-home-banner").on("mousemove", function (e) {
  // Relative to center
  mouseX = (e.clientX - window.innerWidth / 2);
  mouseY = (e.clientY - window.innerHeight / 2);
});

$(".biz-home-banner").on("mouseleave", function () {
  // Gracefully return to center
  mouseX = 0;
  mouseY = 0;
});

function animate() {
  followX += (mouseX - followX) * spring;
  followY += (mouseY - followY) * spring;

  $wrappers.each(function (index) {
    const depth = (index + 1) * 0.04;
    const x = followX * depth;
    const y = followY * depth;

    // Calculate a "Pendulum Tilt" based on mouse velocity
    const tiltX = (followY - mouseY) * 0.01;
    const tiltY = (mouseX - followX) * 0.01;

    $(this).css({
      "transform": `translate3d(${x}px, ${y}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
    });

    // Dynamic Aura Update
    const containerOffset = $container.offset();
    if (containerOffset) {
      const relX = ((mouseX + window.innerWidth / 2 - containerOffset.left) / $container.width()) * 100;
      const relY = ((mouseY + window.innerHeight / 2 - containerOffset.top) / $container.height()) * 100;
      $container.css({ "--mouse-x": `${relX}%`, "--mouse-y": `${relY}%` });
    }
  });

  requestAnimationFrame(animate);
}

if ($container.length) animate();





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


// ======================== Advanced Implementation Cards Interaction ===================
$(document).ready(function () {
  const $cards = $(".impl-card-v2");

  $cards.on("mousemove", function (e) {
    const $card = $(this);
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight Effect: Update CSS variables for radial gradient
    const centerX = (x / rect.width) * 100;
    const centerY = (y / rect.height) * 100;
    $card.css({
      "--mouse-x": `${centerX}%`,
      "--mouse-y": `${centerY}%`
    });
  });
});
// ======================== Advanced Implementation Cards ends ===================
