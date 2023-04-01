document.querySelector(".main-header__burger-button").addEventListener("click", function() {
    document.querySelector(".main-menu").classList.add("main-menu--active");
    if ((window.innerWidth >=768) && (window.innerWidth < 1366)) {
        document.querySelector(".blur").classList.add("blur--active");
    }
});

document.querySelector(".main-menu__close-button").addEventListener("click", function() {
    document.querySelector(".main-menu").classList.remove("main-menu--active");
    if ((window.innerWidth >=768) && (window.innerWidth < 1366)) {
        document.querySelector(".blur").classList.remove("blur--active");
    }
});

window.addEventListener("click", function(e) {
        if (e.clientX > 320) {
            document.querySelector(".blur").classList.remove("blur--active");
            document.querySelector(".main-menu").classList.remove("main-menu--active");
        }
});

let main_menu_buttons=document.querySelectorAll(".main-menu__item");

    for (let i=0; i < main_menu_buttons.length; i++)
    main_menu_buttons[i].onclick = function() {
        for (let j=0; (j < main_menu_buttons.length); j++) {
            if (main_menu_buttons[j].classList.contains("main-menu__item--active")) 
            main_menu_buttons[j].classList.remove("main-menu__item--active");
        }    
            if (!main_menu_buttons[i].classList.contains("main-menu__item--active")) 
            main_menu_buttons[i].classList.add("main-menu__item--active");
        
  };

let call_button = document.querySelector(".main-menu__call-button");
let call_form = document.querySelector(".call");
let main_app = document.querySelector(".main-container");
let call_close_button = document.querySelector(".call__close");
let blur = document.querySelector(".blur");
let feedback_button = document.querySelector(".main-menu__feedback-button");
let feedback_form = document.querySelector(".feedback");
let feedback_close_button = document.querySelector(".feedback__close");

call_button.onclick = function() {
    if (window.innerWidth < 768) { 
        main_app.classList.add("main-container--hidden");
    }
    if (window.innerWidth >= 768) { 
        blur.classList.add("blur--active");
    }
    call_form.classList.add("call--active");
}

call_close_button.onclick = function() {
    call_form.classList.remove("call--active");
    if (window.innerWidth < 768) { 
        main_app.classList.remove("main-container--hidden");
    }
    if (window.innerWidth >= 768) { 
        blur.classList.remove("blur--active");
    }
}

feedback_button.onclick = function() {
    if (window.innerWidth < 768) { 
        main_app.classList.add("main-container--hidden");
    }
    if (window.innerWidth >= 768) { 
        blur.classList.add("blur--active");
    }
    feedback_form.classList.add("feedback--active");
}

feedback_close_button.onclick = function() {
    feedback_form.classList.remove("feedback--active");
    if (window.innerWidth < 768) { 
        main_app.classList.remove("main-container--hidden");
    }
    if (window.innerWidth >= 768) { 
        blur.classList.remove("blur--active");
    }
}