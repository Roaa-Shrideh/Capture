//remove home active
const navLinks = document.querySelectorAll("header nav ul li a");


navLinks.forEach(link => {
    link.addEventListener("click", function() {
       
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});

// fixed header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY >= 725) {
    header.classList.add("scrolled");
    header.style.background = "linear-gradient(to right , #4d3816d3, #9e501cd6)";
    header.style.position = "fixed";
    header.style.transition = "0.4s";
  } else {
    header.classList.remove("scrolled");
    header.style.background = "transparent";
    header.style.position = "absolute";
  }
});


//login
const formOpenBtn = document.querySelector("#form-open"),
heroSection = document.querySelector(".heroSection"),
formContainer = document.querySelector(".from_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup-btnn"),
loginBtn = document.querySelector("#login-btnn"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => {heroSection.classList.add("show")});
formCloseBtn.addEventListener("click", () => {heroSection.classList.remove("show")});

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        } else{
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});