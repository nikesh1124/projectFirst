
let a = document.querySelectorAll(".portfolio-menu ul li");
let clsnot;
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {
        document.querySelector(".portfolio-menu ul li.active").classList.remove("active");
       clsnot=this.getAttribute("id")
        this.classList.add("active");
        handleNotShow();
    })
}

function handleNotShow() {
    let a=document.querySelectorAll(".item");
    for(let i=0; i<a.length; i++){
        a[i].classList.add("notshow");
    }
    handleShow();
}

function handleShow(){
    let a=document.getElementsByClassName(clsnot)
    for(let i=0; i<a.length; i++){
      a[i].classList.remove("notshow")
    }
}