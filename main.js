let submit = document.getElementById("submit");
let divContainer = document.getElementById('numberLstCont');
let numberBtns = divContainer.getElementsByClassName('button')

for(let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('active');
        if(current.length > 0){
            current[0].className = current[0].className.replace(' active', '')
        }
        this.className += ' active';
    })
}


// let selected = 0;


