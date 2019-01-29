//função sendo criada e ela sendo atribuido a uma constante. É uma a Arrow function
//função é uma parda que guarda uma estrutura de comandos para ser executada depois
//Está guardando um template string (retorna texto) que vai ser retornado quando essa função for executada
const memoryCard = () => {
  //daqui até a linha 58 todos esse códigos são executados quando o browser é carregado
  const $head = document.querySelector("head"); //pegar a head
  const $style = document.createElement("style"); //criar a tag style

  //pegar e colocar um conteúdo dentro do style
  $style.textContent = `
        .memory-card {
        width: 155px;
        height: 155px;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        position: relative;
        cursor: pointer;
        }

        .memory-card.-front {
        background-color: #fff;
        }

        .memory-card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
        }

        .memory-card > .icon {
        width: 100px;
        height: 100px;
        }

        .memory-card.-front > .icon {
        position: absolute;
        transform: translateY(-12px);
        }
    `;

    $head.insertBefore($style, null); //inserir na tela dentro do head antes de ninguém e no final

    return ({ src, alt, nameClass }) =>`
        <article class="memory-card ${nameClass}">
            <img 
                src="${src}"
                alt="${alt}" 
                class="icon" 
                onClick="handlelClick()"
            />
        </article>
    `;
};

const handlelClick = () => console.log("ae");

// 0 - criar uma funcao createMemoryCard
// 1 - pegar a header (querySelector)
// 2 - criar o elemento style (createElement)
// 3 - colocar os estilos (textContent)
// 4 - preciso dizer onde os estilos irão ficar (dentro he head antes de niguém no final) (insertBefore)
// 5 - retornar o HMTL ou createMemoryCard?
