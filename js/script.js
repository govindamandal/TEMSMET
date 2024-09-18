document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("about-link");
    const aboutSubmenu = document.getElementById("about-submenu");

    // Toggle submenu visibility on click
    aboutLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        if (aboutSubmenu.classList.contains("submenu-visible")) {
            aboutSubmenu.classList.remove("submenu-visible");
            aboutSubmenu.classList.add("submenu-hidden");
        } else {
            aboutSubmenu.classList.remove("submenu-hidden");
            aboutSubmenu.classList.add("submenu-visible");
        }
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