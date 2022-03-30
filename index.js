let collapse = document.querySelector(".collapse");
let close = document.querySelector(".close");
let dropmenu = document.querySelector(".dropmenu");
let dropdowns = document.querySelectorAll(".drop");

dropdowns.forEach( drop => {
    drop.onclick = () => {
        if (drop.classList.contains("open")){
            drop.classList.remove("open");
        } else {
            dropdowns.forEach(notActive => {notActive.classList.remove("open");});
            drop.classList.add("open");
        }
    }

    window.onclick = (e) => {
        if (e.target.matches(".collapse")) {
            dropmenu.classList.add("active");
            collapse.classList.add("not-active");
            close.classList.add("active");
        } else if (e.target.matches(".close")){
            dropmenu.classList.remove("active");
            close.classList.remove("active");
            collapse.classList.remove("not-active");
        } else if (!e.target.closest(".dropmenu")) {
            dropmenu.classList.remove("active");
            collapse.classList.remove("not-active");
            close.classList.remove("active");
            dropdowns.forEach(notActive => {notActive.classList.remove("open");});
        } 
    }
});  