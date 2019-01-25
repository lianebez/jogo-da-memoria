const $root = document.querySelector("#root"); //pegando a root

const $cardsWrapper = createCardsWrapper(); //criando elemento

// const $memoryCard = createMemoryCard(
//   "img/icon-collabcode.png",
//   "Gueio mascote da CollabCode"
// );

const $memoryCardC = createMemoryCard({
  //objeto JSON
  nameClass: "-front",
  src: "img/icon-c.png",
  alt: "Ícone de um livro da linguagem C++"
});

const $memoryCardJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Ícone de um livro da linguagem Js",
  nameClass: "-front"
});

const $memoryCardCabeca = createMemoryCard({
  src: "img/icon-cabeca.png",
  alt: "Ícone de um livro da Cabeça",
  nameClass: "-front"
});

const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Ícone de um livro da linguagem Java",
  nameClass: "-front"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //inserindo o cards na tela
