// const

const nav = document.querySelector(".navbar")
const socialnetwork = document.querySelector(".socialnetwork")

// navbar function
window.addEventListener("scroll", ()=>{
    if (window.scrollY < 100) {
        nav.style.top = "30px"} 
    else {(window.scrollY > 120) 
        nav.style.top = "-60px"
        } ;
    }
)


