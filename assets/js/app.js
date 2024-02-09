let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navLink');
let toggeler = document.getElementById('toggeler');

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset =  sec.offsetTop-200;
        let hieght = sec.offsetHeight;

        if(top >= offset && top < offset + hieght) {
            sec.classList.add('show-animate');
        } 
        else{
            sec.classList.remove('show-animate');
        }
    })
}
navLinks.forEach(navLink =>{
    navLink.addEventListener("click", ()=>{
        toggeler.checked = false;
    });

});