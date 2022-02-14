

const aboutSection = document.querySelector(".about-section");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const appearOnScroll = new IntersectionObserver(function(enteries, appearOnScroll) {
    enteries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, options);

appearOnScroll.observe(aboutSection);

