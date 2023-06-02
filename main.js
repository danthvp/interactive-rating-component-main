let form = document.getElementById("form");
let divContainer = document.getElementById('numberLstCont');
let numberBtns = divContainer.getElementsByClassName('button');
let rateMsg = document.getElementById('rating-msg');
let rateCard = document.getElementById('card-container');
let cardSubmited = document.querySelector('.card-submitted');
let current = document.getElementsByClassName('active');

for(let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function() {
        if(current.length > 0){
            current[0].className = current[0].className.replace(' active', '')
            console.log(current[0])
        }
        this.className += ' active';
    })
}



form.addEventListener('submit', (e)=> {
    rateMsg.innerHTML = `You selected ${current[0].value} out of 5`;
    rateCard.style.display = 'none'
    cardSubmited.style.display = 'flex';

})


// let selected = 0;


