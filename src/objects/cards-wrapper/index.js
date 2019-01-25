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

    const $head = document.querySelector("head"); //pegar o head
    const $style = document.createElement("style");
    $style.textContent = `
        .cards-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 10px;
        }

        .cards-wrapper > .memory-card {
        margin-bottom: 10px;
        }
    `;

    $head.insertBefore($style, null);//inserir o $style dentro do head antes de ninguém (null) no seu final

    return $cardsWrapper;
}
