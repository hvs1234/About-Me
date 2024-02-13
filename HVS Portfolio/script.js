// Auto Type Name
var Type = new Typed(".auto-type",{
    strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Project Section

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const img_ele = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;

    if(!p_btn_clicked.classList.contains('p-btn')) return;

    p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
    p_btn_clicked.classList.add('p-btn-active');
    const btn_num = p_btn_clicked.dataset.btnNum;
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
    img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
});

// Swiper Section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// Responsive Swiper 

const jsMedia = (widthSize) => {
    if(widthSize.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 50,
        });
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        }); 
    } 
};

const widthSize = window.matchMedia('(max-width: 790px)');
jsMedia(widthSize);
widthSize.addEventListener('change', jsMedia);

// Scroll To Top

const scrollTop = document.querySelector('.scroll-top');
scrollTop.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
});

// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 120;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
// // Auto Type Name
// var Type = new Typed(".auto-type",{
//     strings: ["Programmer `<i class='fa-solid fa-code'></i>`","Web Developer `<i class='fa-solid fa-display'></i>`","Electron Developer `<i class='fa-solid fa-atom'></i>`","Python Developer `<i class='fa-brands fa-python'></i>`"],
//     typeSpeed: 30,
//     backSpeed: 30,
//     loop: true,
// });

// // Project Section

// const p_btns = document.querySelector('.p-btns');
// const p_btn = document.querySelectorAll('.p-btn');
// const img_ele = document.querySelectorAll('.img-overlay');

// p_btns.addEventListener('click', (e) => {
//     const p_btn_clicked = e.target;

//     if(!p_btn_clicked.classList.contains('p-btn')) return;

//     p_btn.forEach((ele) => ele.classList.remove('p-btn-active'));
//     p_btn_clicked.classList.add('p-btn-active');
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     img_ele.forEach((curele) => curele.classList.add('p-img-not-active'));
//     img_active.forEach((curele) => curele.classList.remove('p-img-not-active'));
// });

// // Swiper Section

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// // Responsive Swiper 

// const jsMedia = (widthSize) => {
//     if(widthSize.matches) {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         });
//     } else {
//         var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         }); 
//     } 
// };

// const widthSize = window.matchMedia('(max-width: 790px)');
// jsMedia(widthSize);
// widthSize.addEventListener('change', jsMedia);

// // Scroll To Top

// const scrollTop = document.querySelector('.scroll-top');
// scrollTop.addEventListener('click',() => {
//     window.scroll({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// // Animated Counter

// const workdata = document.querySelector('.section-work');

// const workObserver = (entries) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;

//     const countNum = document.querySelectorAll('.counter-numbers');
//     const speed = 120;
//     countNum.forEach((curEle) => {
//         const updateNum = () => {
//             const target = parseInt(curEle.dataset.number);
//             const initial = parseInt(curEle.innerText);
//             const increment = Math.trunc(target / speed);
//             if (initial < target) {
//                 curEle.innerText = `${initial + increment}+`;
//                 setTimeout(updateNum,5);    
//             }
//             else {
//                 curEle.innerText = `${target}+`;
//             }
//         };
//         updateNum();
//     });
// };

// const workObserve = new IntersectionObserver(workObserver, {
//     root: null,
//     threshold: 0,
// });
// workObserve.observe(workdata);

// // Responsive Navbar

// const header = document.querySelector('.header');
// const mobile_nav = document.querySelector('.mobile-navbar-btn');

// mobile_nav.addEventListener('click', () => {
//     header.classList.toggle('active')
// })

// // Sticky Navbar

// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// observer.observe(sectionHero);
