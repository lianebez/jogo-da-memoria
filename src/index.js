const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $iconCollab = `<img 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da CollabCode' 
    class='icon'
    />`;

const $iconC = `<img 
    src='img/icon-c.png' 
    alt='Ícone de um livro da linguegem C++' 
    class='icon'
    />`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, null);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab); //colocar o hmtl que está no $iconCollab logo após começar o $memocyCard, que é o article
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
