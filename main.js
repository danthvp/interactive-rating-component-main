let submit = document.getElementById("submit");
let numberButtons = document.querySelectorAll('.button')

// function changeColor(elem) {
//     elem.style.background = "var(--orange)";
//     elem.style.color = "var(--white)";
// }

let selected = 0;

numberButtons.forEach(elem => {
    elem.addEventListener('click', (e)=> {
        e.target.style.background = "var(--orange)";
        e.target.style.color = "var(--white)";
        selected = e.target.value;
        console.log(selected)
    })
})


