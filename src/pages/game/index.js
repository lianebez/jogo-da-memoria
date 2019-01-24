const $root = document.querySelector("#root"); //pegando a root

const $cardsWrapper = createCardsWrapper(); //criando elemento
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascote da CollabCode"
); //criando elemento
const $memoryCardFront = createMemoryCard(
  "img/icon-c.png",
  "Ícone de um livro da linguagem C++",
  "-front"
); //criando elemento

const $memoryCardFrontJs = createMemoryCard(
  "img/icon-js.png",
  "Ícone de um livro da linguagem Js",
  "-front"
); //criando elemento

const $memoryCardFrontCabeca = createMemoryCard(
  "img/icon-cabeca.png",
  "Ícone de um livro da Cabeça",
  "-front"
); //criando elemento

const $memoryCardFrontJava = createMemoryCard(
  "img/icon-java.png",
  "Ícone de um livro da linguagem Java",
  "-front"
); //criando elemento

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard); //insere as coisas dentro do cards
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //inserindo o cards na tela
