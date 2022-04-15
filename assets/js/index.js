let list = document.getElementById('list');
let navbtn = document.getElementById('bars');
let nav = document.getElementsByTagName('nav')[0];

navbtn.addEventListener('click', () => {
    shownav();   
});

function shownav() {
    list.classList.toggle('sidenav');
    
    if (list.classList.contains('sidenav')) {
        navbtn.innerHTML = '&times;';
        navbtn.style.fontSize = '55px';
        navbtn.style.top = '2%';
        navbtn.style.color = '#002fffa4';
        navbtn.style.position = 'fixed';
    } else {
        navbtn.innerHTML = '&#9776;';
        navbtn.style.fontSize = '25px';
        navbtn.style.top = '3%';
        navbtn.style.color = 'white';
        navbtn.style.position = 'relative';
    }
};

const faqs = document.querySelectorAll(".faqs");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("access");
    });
});


let slider = tns({
    container : ".slider-wrapper",
    "slide-by" : "1",
    "speed" : 400,
    nav: true,
    navContainer: '.dots', 
    navAsThumbnails: '.dot',
    "loop": true,
    autoplay : true,
    controls: '#controls',
    prevButton: '#prev',
    nextButton: '#next',
    autoplayButtonOutput : false,
    responsive: {
        1600: {
            items : 4,
            gutter : 20
        },
        1024: {
            items : 3,
            gutter : 20,
        },
        768: {
            items : 2,
            gutter : 20
        },
        480: {
            items: 1
        }
    }
})

