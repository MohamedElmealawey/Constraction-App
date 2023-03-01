lightGallery(document.querySelector(".projects .box-container"))

var swiper=new Swiper(".home-slider",{
    loop:true,
    grabCursor:true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper=new Swiper(".reviews-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        }
    }
});

var swiper=new Swiper(".blogs-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        }
    }
});

var swiper=new Swiper(".logo-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        450:{
            slidesPerView:2,
        },
        640:{
            slidesPerView:3,
        },
        768:{
            slidesPerView:4,
        },
        1000:{
            slidesPerView:5,
        }
    }
});


let bar=document.querySelector("#menu-btn");
let lis=document.querySelector(".navbar");

bar.onclick=()=>{
    lis.classList.toggle("active");
    bar.classList.toggle("fa-times");
}
let user=document.querySelector("#login-btn");
let log=document.querySelector(".login-form");

user.onclick=()=>{
    log.classList.toggle("active");
    user.classList.toggle("fa-times");
}

let infbtn=document.querySelector("#info-btn");
let clos=document.querySelector("#close-btn");
let info=document.querySelector(".contact-info");

infbtn.onclick=()=>{
    info.classList.toggle("active");
}
clos.onclick=()=>{
    info.classList.remove("active");
}

window.onscroll=()=>{
    bar.classList.remove("fa-times");
    lis.classList.remove("active");

    let maxHeight=window.document.body.scrollHeight - window.innerHeight;
    let percentage=((window.scrollY)/maxHeight) * 100;
    document.querySelector(".scroll-indicator").style.width=percentage + '%';
}


let searchForm=document.querySelector("#search-form");
let searchIcon=document.querySelector("#search-btn");
let closeSearch=document.querySelector("#close");

searchIcon.onclick=()=>{
    searchForm.classList.toggle("active");
}
closeSearch.onclick=()=>{
    searchForm.classList.remove("active");
}
