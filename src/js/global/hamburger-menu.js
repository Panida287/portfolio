export function hamburgerMenuToggle() {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const navMenuDropdown = document.querySelector(".nav-menu-dropdown");

    const closeMenu = () => {
        navMenuDropdown.classList.remove("opacity-100");
        navMenuDropdown.classList.add("opacity-0");
        navMenuDropdown.classList.remove("-translate-y-0");
        navMenuDropdown.classList.add("-translate-y-5");
        hamburgerBtn.innerHTML = "<i class=\"fa-solid fa-bars\"></i>";
    };

    hamburgerBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document

        if (navMenuDropdown.classList.contains("opacity-0")) {
            navMenuDropdown.classList.remove("opacity-0");
            navMenuDropdown.classList.add("opacity-100");
            navMenuDropdown.classList.remove("-translate-y-5");
            navMenuDropdown.classList.add("-translate-y-0");
            hamburgerBtn.innerHTML = "<i class=\"fa-light fa-xmark\"></i>";
        } else {
            closeMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (!hamburgerBtn.contains(event.target) && !navMenuDropdown.contains(event.target)) {
            if (navMenuDropdown.classList.contains("opacity-100")) {
                closeMenu();
            }
        }
    });
}