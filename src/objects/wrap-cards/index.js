const $root = document.querySelector("#root"); //pegar o elemento com #root
const $wrapCards = document.createElement("section"); //criar elemento

$wrapCards.classList.add("wrap-cards"); //add classe na section

$root.insertBefore($wrapCards, null); //inserir o whaps-cards