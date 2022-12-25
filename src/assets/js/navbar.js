const logo =document.querySelector(".logo");




 const scrolling=()=>{
    if(window.scrollY>180){
        logo.classList.add("first-image")
     }
 }
 const reverseScrolling=()=>{
    if(window.scrollY<180){
        logo.classList.remove("first-image")
     }
 }
 window.addEventListener("scroll", scrolling);
 window.addEventListener("scroll", reverseScrolling);

