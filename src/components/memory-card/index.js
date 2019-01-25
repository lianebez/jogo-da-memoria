const createMemoryCard = ({src, alt, nameClass}) => `
    <article class="memory-card ${nameClass}">
        <img 
            src="${src}"
            alt="${alt}" 
            class="icon" 
            onClick="handlelClick()"
        />
    </article>
`;

const handlelClick = () => console.log("ae");
