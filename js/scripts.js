
// my selector for the burger button
var burgerButton = document.querySelector("#burger-button");
var mainNav = document.querySelector("#main-nav");

var NavEstaVisible = false;

burgerButton.addEventListener("click", () => {
    // console.log("botton working");

    if (NavEstaVisible === false) {
        mainNav.classList.remove("hide-menu");
        NavEstaVisible = true;
    }else{
        mainNav.classList.add("hide-menu");
        NavEstaVisible = false;
    }
})

mainNav.addEventListener("click", () => {
    mainNav.classList.add("hide-menu");
    NavEstaVisible = false;
})



