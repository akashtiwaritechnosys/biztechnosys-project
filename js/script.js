$(document).ready(function () {
  if ($.fn.owlCarousel && $(".owl-carousel").length) {
    // =========== for CRM-Doctor One Stop for All IT Solutions ==========

    $(".trusted-customers").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      smartSpeed: 3000,
      slideTransition: 'linear',
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1200: {
          items: 6,
        },
      },
    });


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

    // related-blog in blog details page
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
// ========================== NAVBAR ==========================
$(document).ready(function () {
  const $navbarCollapse = $(".navbar-collapse");
  const $navbarToggler = $(".navbar-toggler");
  const $header = $("header");

  // --- Active nav item based on URL ---
  function setActiveNavItem() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    $(".nav-item, .nav-link").removeClass("active");
    $(".nav-item a").each(function () {
      const href = $(this).attr("href");
      if (href === path || href === "./" + path) {
        $(this).addClass("active").closest(".nav-item").addClass("active");
      }
    });
  }
  setActiveNavItem();

  function isMobile() {
    return window.innerWidth < 992;
  }

  // --- Close all top-level dropdowns ---
  function closeAllDropdowns($except) {
    $(".nav-item.dropdown").not($except || $()).each(function () {
      const $menu = $(this).children(".dropdown-menu");
      $(this).removeClass("show");
      if (isMobile()) {
        $menu.stop(true, true).slideUp(250);
      } else {
        $menu.removeClass("show");
      }
      // Also close nested submenus inside
      $(this).find(".dropdown-submenu").removeClass("show")
             .find(".dropdown-menu").stop(true, true).hide();
    });
  }

  // --- Top-level dropdown toggle ---
  $(document).on("click", ".nav-item.dropdown > .nav-link", function (e) {
    e.preventDefault();
    e.stopPropagation(); // prevent document click from firing immediately

    const $parent = $(this).closest(".nav-item.dropdown");
    const $menu = $parent.children(".dropdown-menu");
    const isOpen = $parent.hasClass("show");

    // Close all others first
    closeAllDropdowns($parent);

    if (isOpen) {
      // Close this one
      $parent.removeClass("show");
      if (isMobile()) {
        $menu.stop(true, true).slideUp(250);
      } else {
        $menu.removeClass("show");
      }
    } else {
      // Open this one
      $parent.addClass("show");
      if (isMobile()) {
        $menu.stop(true, true).slideDown(250);
      } else {
        $menu.addClass("show");
      }
    }
  });

  // --- Submenu toggle (mobile + desktop) ---
  $(document).on("click", ".dropdown-submenu > .dropdown-item", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const $parent = $(this).closest(".dropdown-submenu");
    const $menu = $parent.children(".dropdown-menu");
    const isOpen = $parent.hasClass("show");

    // Close sibling submenus at the same level
    $parent.siblings(".dropdown-submenu").each(function () {
      $(this).removeClass("show").children(".dropdown-menu").stop(true, true).slideUp(200);
    });

    if (isOpen) {
      $parent.removeClass("show");
      $menu.stop(true, true).slideUp(200);
    } else {
      $parent.addClass("show");
      $menu.stop(true, true).slideDown(200);
    }
  });

  // --- Mobile toggler (hamburger) ---
  $navbarToggler.on("click", function (e) {
    e.stopPropagation();
    const isOpen = $navbarCollapse.is(":visible");

    if (isOpen) {
      // Close menu and reset all dropdowns
      closeAllDropdowns();
      $navbarCollapse.stop(true, true).slideUp(300, function () {
        $navbarToggler.attr("aria-expanded", "false");
      });
    } else {
      $navbarCollapse.stop(true, true).slideDown(300, function () {
        $navbarToggler.attr("aria-expanded", "true");
      });
    }
  });

  // --- Close mobile menu when a non-toggle nav-link or leaf dropdown-item is clicked ---
  $(document).on(
    "click",
    ".nav-link:not(.dropdown-toggle), .dropdown-item:not([data-submenu])",
    function () {
      if (isMobile() && !$(this).closest(".dropdown-submenu").length) {
        closeAllDropdowns();
        $navbarCollapse.stop(true, true).slideUp(300);
        $navbarToggler.attr("aria-expanded", "false");
      }
    }
  );

  // --- Click outside: close dropdowns (and mobile menu) ---
  $(document).on("click", function (e) {
    const $target = $(e.target);

    // Ignore clicks inside the navbar entirely
    if ($target.closest(".navbar").length) return;

    closeAllDropdowns();

    if (isMobile() && $navbarCollapse.is(":visible")) {
      $navbarCollapse.stop(true, true).slideUp(300);
      $navbarToggler.attr("aria-expanded", "false");
    }
  });

  // --- Sticky header ---
  $(window).on("scroll", function () {
    $header.toggleClass("sticky", $(window).scrollTop() > 50);
  });

  // --- Resize: reset to correct display state ---
  $(window).on("resize", function () {
    if (!isMobile()) {
      // Desktop: ensure collapse is visible, clear inline styles left by slideToggle
      $navbarCollapse.stop(true, true).show().css("display", "");
      // Reset all dropdown inline styles (slideDown/slideUp leaves them)
      $(".dropdown-menu").css("display", "").removeClass("show");
      $(".nav-item.dropdown, .dropdown-submenu").removeClass("show");
    } else {
      // Mobile: hide the collapse if it was forced open by a resize from desktop
      if (!$navbarToggler.is('[aria-expanded="true"]')) {
        $navbarCollapse.hide();
      }
    }
  });
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
