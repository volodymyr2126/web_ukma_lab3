
function deleting(event){
    let name = event.target.closest("form");
    name.remove();
    const section = document.getElementsByClassName('product_box');
    let lines = document.getElementsByTagName('form');
    for(let i=0;i<lines.length;i++){
        lines[i].classList.remove('last')
    }
    const lastLineIndex = lines.length - 1;
    if(lines.length!=0){
        lines[lastLineIndex].classList.add('last');
    }
    const currentHeight = section[0].offsetHeight;
    const newHeight = currentHeight - 58;
    section[0].style.height = newHeight + 'px';
}
function makeBought(event){
    let button = event.target.closest(".bought");
    let name = event.target.closest("form");
    if (button.textContent==="Bought") {
        name.classList.add('item_bought');
        button.textContent = "Available";
    }
    else if (button.textContent==="Available") {
        name.classList.remove('item_bought');
        button.textContent = "Bought";
    }
}
function decreaseNumber(event) {
    let numberButton = event.target.closest('.quantity').querySelector('.number');
    let currentNumber = parseInt(numberButton.textContent);
    let minusButton = event.target.closest('.quantity').querySelector('.minus');
    if (currentNumber > 1) {
        numberButton.textContent = currentNumber - 1;
        if(currentNumber==2){
            minusButton.classList.add('inactive');
        }
    }

}
function increaseNumber(event) {
    let numberButton = event.target.closest('.quantity').querySelector('.number');
    let currentNumber = parseInt(numberButton.textContent);
    let minusButton = event.target.closest('.quantity').querySelector('.minus');
    numberButton.textContent = currentNumber + 1;
    minusButton.classList.remove('inactive');
}

