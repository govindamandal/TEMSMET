document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Submenu toggle for desktop (already existing logic)
    const aboutLink = document.getElementById("about-link");
    const aboutSubmenu = document.getElementById("about-submenu");

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        aboutSubmenu.classList.toggle("submenu-visible");
    });

    // Close the submenu if clicked outside
    document.addEventListener("click", function (e) {
        if (!aboutLink.contains(e.target) && !aboutSubmenu.contains(e.target)) {
            aboutSubmenu.classList.remove("submenu-visible");
            aboutSubmenu.classList.add("submenu-hidden");
        }
    });

    const effects = ["slide", "cube", "fade", "coverflow"];

    function getRandomEffect() {
        return effects[Math.floor(Math.random() * effects.length)];
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',  // or 'fadeInUp', 'fadeInDown', etc.
        animateOut: 'fadeOut', // or 'fadeOutUp', 'fadeOutDown', etc.
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });

    // let swiper = new Swiper(".swiper-container", {
    //     loop: true,
    //     autoplay: {
    //         delay: 2000,
    //         disableOnInteraction: false,
    //     },
    //     grabCursor: true,
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     speed: 1000,
    //     effect: getRandomEffect(),
    //     coverflowEffect: {
    //         rotate: 50,
    //         stretch: 0,
    //         depth: 100,
    //         modifier: 1,
    //         slideShadows: true,
    //     },
    //     fadeEffect: {
    //         crossFade: true,
    //     },
    //     on: {
    //         init: function () {
    //             console.log("Swiper initialized");
    //           },
    //           slideChange: function () {
    //             console.log("Slide changed");
    //           },
    //           autoplayStop: function () {
    //             console.log("Autoplay stopped, restarting...");
    //             this.autoplay.start(); // Restart autoplay if stopped
    //           },
    //         slideChangeTransitionStart: function () {
    //             var newEffect = getRandomEffect();
    //             swiper.params.effect = newEffect;
    //             swiper.update();
    //         },
    //     },
    // });
});