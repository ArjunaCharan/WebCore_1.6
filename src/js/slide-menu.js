let buttons=document.querySelectorAll(".slide-menu__item");

    for (let i=0; i < buttons.length; i++)
    buttons[i].onclick = function() {
        for (let j=0; (j < buttons.length); j++) {
            if (buttons[j].classList.contains("slide-menu__item--active")) 
            buttons[j].classList.remove("slide-menu__item--active");
        }    
            if (!buttons[i].classList.contains("slide-menu__item--active")) 
            buttons[i].classList.add("slide-menu__item--active");
        
  };