document.addEventListener('DOMContentLoaded', () => {
    const menuSelections = document.querySelectorAll('.trips__menu-selection');
    const imgBoxes = document.querySelectorAll(".trips__img-wrapper");

    menuSelections.forEach(selection => {
        selection.addEventListener("click", () => {
            // remove active class from all menu selections (if any)
            menuSelections.forEach(item => item.classList.remove("active"))
            // add active class to clicked menu selection
            selection.classList.add("active")

            const category = selection.getAttribute("data-category");

            imgBoxes.forEach(wrapper => {
                if (category === "all" || wrapper.getAttribute("data-category") === category) {
                    wrapper.classList.remove("hidden");
                } else {
                    wrapper.classList.add("hidden");
                }
            })

        })
    })
})


// add header backdrop filter on scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollPoint = 200;

    if (window.scrollY >= scrollPoint) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})