const $root = document.querySelector("#root"); //pegando a root

const $cardsWrapper = createCardsWrapper(); //criando elemento
const $memoryCard = createMemoryCard(); //criando elemento
const $memoryCardFront = createMemoryCard("-front"); //criando elemento

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard); //insere as coisas dentro do cards
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //inserindo o cards na tela
