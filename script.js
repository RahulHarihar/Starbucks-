function imgSlider(anything, circleColor){
    document.querySelector('.Starbucks').src = anything;
    changeCircleColor(circleColor);
    changeTextColor(circleColor); 
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');    
    circle.style.background = color;
}

function changeTextColor(color) {
    const starText = document.querySelector('.star');
    starText.style.color = color;
}

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const homeSection = document.getElementById('home');
    const h2 = document.querySelector('.text h2');
    const p = document.querySelector('.text p');

    // Smooth scrolling to the home section
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });

    function checkVisibility() {
        const h2Position = h2.getBoundingClientRect().top;
        const pPosition = p.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (h2Position < screenPosition) {
            h2.classList.add('visible');
        }

        if (pPosition < screenPosition) {
            p.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case elements are already in view
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about');
    
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: 'smooth'});
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const rewardLink = document.getElementById('reward-link');
    const rewardSection = document.getElementById('reward');

    rewardLink.addEventListener('click', function(event) {
        event.preventDefault();
        rewardSection.scrollIntoView({ behavior: 'smooth' });
    });

    document.addEventListener("scroll", function() {
        const benefits = document.querySelectorAll('.benefit');
        benefits.forEach(benefit => {
            const rect = benefit.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                benefit.classList.add('fade-in');
            }
        });
    });
});



