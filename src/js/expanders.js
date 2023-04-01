brands_expander = document.querySelector(".brands-repair__expander");
brands_grid = document.querySelector(".mySwiper-brands__wrapper");
brands_expander.onclick = function() {
    if (brands_expander.classList.contains("brands-repair__expander--min")) {
        brands_expander.textContent = "Скрыть";
    } else {
        brands_expander.textContent = "Показать все";
    }
    brands_expander.classList.toggle("brands-repair__expander--min");
    brands_expander.classList.toggle("brands-repair__expander--max");
    brands_grid.classList.toggle("mySwiper-brands__wrapper--min");
    brands_grid.classList.toggle("mySwiper-brands__wrapper--max");
}

tech_expander = document.querySelector(".tech-repair__expander");
tech_grid = document.querySelector(".mySwiper-tech__wrapper");
tech_expander.onclick = function() {
    if (tech_expander.classList.contains("tech-repair__expander--min")) {
        tech_expander.textContent = "Скрыть";
    } else {
        tech_expander.textContent = "Показать все";
    }
    tech_expander.classList.toggle("tech-repair__expander--min");
    tech_expander.classList.toggle("tech-repair__expander--max");
    tech_grid.classList.toggle("mySwiper-tech__wrapper--min");
    tech_grid.classList.toggle("mySwiper-tech__wrapper--max");
}