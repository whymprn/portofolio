$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Creator Tiktok", "Web Developer", "Creator Capcut", "Designer", "Mobile Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Creator Tiktok", "Web Developer", "Creator Capcut", "Designer", "Mobile Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function toggleVisibility(event) {
    event.preventDefault();
    const hiddenContent = event.target.previousElementSibling;
    if (hiddenContent.classList.contains('hidden')) {
        hiddenContent.classList.remove('hidden');
        event.target.textContent = 'Read less';
    } else {
        hiddenContent.classList.add('hidden');
        event.target.textContent = 'Read more';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '6285226947090';  // Ganti dengan nomor WhatsApp Anda dalam format internasional tanpa tanda tambah
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ASubject:%20${encodeURIComponent(subject)}%0AMessage:%20${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

    // Menampilkan notifikasi setelah membuka WhatsApp
    const notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Menghilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);

    // Mengosongkan formulir
    document.getElementById('contactForm').reset();
});
