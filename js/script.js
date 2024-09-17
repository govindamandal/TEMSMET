document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("about-link");
    const aboutSubmenu = document.getElementById("about-submenu");
    console.log('aboutLink ', aboutLink);
    
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
});