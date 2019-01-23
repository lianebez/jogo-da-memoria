//const $root = document.querySelector("#root"); //pegar o elemento com #root
//const $cardsWrapper = document.createElement("section"); //criar elemento

//$cardsWrapper.classList.add("cards-wrapper"); //add classe na section

//$root.insertBefore($wrapCards, null); //inserir o whaps-cards

function createCardsWrapper() {
//   const $cardsWrapper = `
//     <section class="cards-wrapper"></section>
// `;

const $cardsWrapper = document.createElement("section");
$cardsWrapper.classList.add("cards-wrapper");

return $cardsWrapper;
}
