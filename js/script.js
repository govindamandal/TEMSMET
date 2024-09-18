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

    const effects = ["slide", "fade", "coverflow"];

    function getRandomEffect() {
        return effects[Math.floor(Math.random() * effects.length)];
    }

    let swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        effect: getRandomEffect(),
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        fadeEffect: {
            crossFade: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                var newEffect = getRandomEffect();
                swiper.params.effect = newEffect;
                swiper.update();
            },
        },
    });
});