function toggle_nav() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("nav_hidden");
    var main = document.getElementsByTagName("main")[0];
    main.classList.toggle("nav_hidden");
}