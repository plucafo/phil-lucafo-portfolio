// Function to toggle the hamburger menu nav

function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //selects the .menu-links html element
    const icon = document.querySelector(".hamburger-icon"); //selects the .hamburger-icon html element
    menu.classList.toggle("open"); //toggles the .open class to the class list for menu
    icon.classList.toggle("open"); //toggles the .open class to the class list for the hamburger icon
}