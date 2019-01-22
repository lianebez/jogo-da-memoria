const $root = document.querySelector("#root");

const $memoryCard = document.createElement("article");
const $memoryCardActive = document.createElement("article");

const $icon = `<img 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da CollabCode' 
    class='icon'
    />`;
const $iconActive = `<img
    src="img/icon-c.png"
    alt="Ícone C++" 
    class="icon"
    />`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon); //colocar o hmtl que está no $icon logo após começar o $memocyCard, que é o article

$memoryCardActive.classList.add("active");

$root.insertBefore($memoryCardActive, null);

$memoryCardActive.insertAdjacentHTML("afterbegin", $iconActive);
