const COPY_RIGHT_YEAR = document.querySelector('#year');
let prevScrollPosition = window.pageYOffset;

COPY_RIGHT_YEAR.innerHTML = new Date().getFullYear();

window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition > currentScrollPosition) {
        document.getElementById("").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-98px";
    }
    prevScrollPosition = currentScrollPosition;
}