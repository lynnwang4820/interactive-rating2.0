let btn = document.getElementsByClassName("rate-btn");
let rate = 0;
let rateContent = document.getElementById("rating");
let tyContent = document.getElementById("ty");
let rateText = document.getElementById("rate-text");

function addSelected(){
    removeSelected();
    this.classList.add('selected');
    rate = this.value;
}

function removeSelected(){
    for(let i = 0; i< btn.length; i++){
        btn[i].classList.remove('selected');
    }
}

for(let i = 0; i < btn.length;i++){
    btn[i].addEventListener("click", addSelected);
}

function submitFunc(){
    rateContent.classList.add('hidden');
    rateText.innerHTML = `You selected ${rate} out of 5`;
    tyContent.classList.remove('hidden');

}

