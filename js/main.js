(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // attractions carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $(document).ready(function() {
        $('#learn-more-btn').on('click', function(event) {
            event.preventDefault(); // Prevent the default anchor click behavior

            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 800); // Adjust the duration (800ms) as needed
        });
    });

    // Add this JavaScript to track cursor position
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.gradient-spotlight, .navbar-brand h1');
        
        elements.forEach(element => {
            // Add active class on mouse enter
            element.addEventListener('mouseenter', () => {
                element.classList.add('active');
            });
            
            // Track mouse position only when active
            element.addEventListener('mousemove', (e) => {
                if (element.classList.contains('active')) {
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    element.style.setProperty('--x', `${x}px`);
                    element.style.setProperty('--y', `${y}px`);
                }
            });
            
            // Remove active class on mouse leave
            element.addEventListener('mouseleave', () => {
                element.classList.remove('active');
                element.style.setProperty('--x', '50%');
                element.style.setProperty('--y', '50%');
            });
        });
    });

    // Smooth scrolling with offset for navbar height
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Special handling for home link
            if (this.getAttribute('href') === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = section.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav item on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section, #home');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        if (window.pageYOffset < 100) {
            current = 'home';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop - navbarHeight - 100; // Added offset
                const sectionHeight = section.offsetHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
})(jQuery);
