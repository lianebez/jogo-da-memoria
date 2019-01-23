//function createMemoryCard() {
//   const $memoryCard = document.createElement("article");

//   const $iconCollab = `
//     <img
//       src='img/icon-collabcode.png'
//       alt='Gueio mascote da CollabCode'
//       class='icon'
//     />
//   `;

//   $memoryCard.classList.add("memory-card");

//   const $memoryCard = `
//         <article class="memory-card">
//             <img
//                 src='img/icon-collabcode.png'
//                 alt='Gueio mascote da CollabCode'
//                 class='icon'
//                 onClick='handlelClick()'
//             />
//         </article>
//   `;

//   return $memoryCard;

//   $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
//}

//function createMemoryCardFront() {
//   const $memoryCardFront = document.createElement("article");

//   const $iconC = `
//   <img
//     src='img/icon-c.png'
//     alt='Gueio mascote da CollabCode'
//     class='icon'
//   />
// `;

//   $memoryCardFront.classList.add("memory-card");
//   $memoryCardFront.classList.add("-front");

//   $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);

//   const $memoryCard = `
//         <article class="memory-card -front">
//             <img
//                 src='img/icon-c.png'
//                 alt='Gueio mascote da CollabCode'
//                 class='icon'
//                 onClick="handlelClick()"
//             />
//         </article>
//   `;

//   return $memoryCard;
// }

// function handlelClick() {
//   console.log("ae");
// }

//funcao que cria um elemento, funcao que cria outro elemento e funcao de evento desse elemento

//Arrow function
const createMemoryCard = nameClass => `
    <article class="memory-card ${nameClass}">
        <img 
            src="${
              nameClass == "-front"
                ? "img/icon-c.png"
                : "img/icon-collabcode.png"
            }"
            alt="${
                nameClass == "-front"
                ? "Ícone de um livro de C++" 
                : "Gueio mascote da CollabCode"
            }" 
            class="icon" 
            onClick="handlelClick()"
        />
    </article>
`;

// const createMemoryCardFront = () => `
//     <article class="memory-card -front">
//         <img
//             src='img/icon-c.png'
//             alt='Gueio mascote da CollabCode'
//             class='icon'
//             onClick="handlelClick()"
//         />
//     </article>
// `;

const handlelClick = () => console.log("ae");
