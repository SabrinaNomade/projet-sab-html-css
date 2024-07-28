

$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');

            
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';

            icon.textContent = (icon.textContent === '+') ? '-' : '+';

            
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion) {
                    const otherContent = otherAccordion.nextElementSibling;
                    const otherIcon = otherAccordion.querySelector('.accordion-icon');
                    otherContent.style.display = 'none';
                    otherIcon.textContent = '+';
                }
            });
        });
    });
});
