const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

// Jalankan saat halaman pertama kali dibuka
revealSections();

// Jalankan saat scroll
window.addEventListener("scroll", revealSections);

const wrapper =
document.querySelector(".project-wrapper");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

nextBtn.addEventListener("click", () => {

wrapper.scrollBy({

left:400,

behavior:"smooth"

});

});

prevBtn.addEventListener("click", () => {

wrapper.scrollBy({

left:-400,

behavior:"smooth"

});

});