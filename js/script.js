// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}; 

// aktifkan scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    } );
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // hilangkan icon dan navbar saat link diklik! (Scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/* scroll reveals */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Web Development', 'Database Enthusiast', 'Data Processing'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let currentIndex = 0;
        const slides = document.querySelectorAll('.slider-item');
        const totalSlides = slides.length;

        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        function showSlide(index) {
            if (index < 0) {
                currentIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                currentIndex = 0;
            }
            const offset = -100 * currentIndex;  // Geser slider ke kiri
            slides.forEach(slide => {
                slide.style.transform = `translateX(${offset}%)`;
            });
        }

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            showSlide(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            showSlide(currentIndex);
        });

        // Menampilkan slide pertama pada awal
        showSlide(currentIndex);   
        
// Inisialisasi Swiper untuk sertifikat
var swiper = new Swiper('.certificate-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

function sendToWhatsApp() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let nohp = document.getElementById("nohp").value;
    let subjek = document.getElementById("subjek").value;
    let pesan = document.getElementById("pesan").value;

    let whatsappURL = `https://wa.me/6282193346790?text=Halo,%20saya%20${nama}%0AEmail:%20${email}%0ANo HP:%20${nohp}%0ASubjek:%20${subjek}%0APesan:%20${pesan}`;
    
    window.open(whatsappURL, "_blank");
};
        