import collection from "../collection.js";

const card = (
  ref: number,
  category: string,
  name: string,
  picture: string,
  pieceCount: number,
  minifigCount: number,
  weight: number,
  releaseYear: number,
  links: { lego: string; bricklink: string }
): HTMLElement => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-body">
      <img src="${picture}" alt="${name}" class="card-img" />
      <span class="card-category">${category}</span>
      <span class="card-release-year">${releaseYear}</span>
      <h3 class="card-title">
        ${name}
        <span class="card-title-ref">(#${ref})</span>
      </h3>
      <div class="card-count-container">
        <span class="card-count-item">
        <img class="card-count-item" src="../../assets/lego-piece.svg" alt="Lego piece">
        ${pieceCount}</span> |
        <span class="card-count-item">
        <img class="card-count-item" src="../../assets/lego-minifig.svg" alt="Lego minifig"></img>
        ${minifigCount}</span>
      </div>
      <p class="card-weight">
      <img class="card-weight-item" src="../../assets/weight-icon.svg" alt="Lego weight">
      ${weight / 1000} kg</p>
      <div class="card-link-container">
        <span class="card-link-title">See more on:</span>
        <a class="card-link-item" href="${
          links.lego
        }" target="_blank" rel="noopener noreferrer">LEGO</a>
        <a class="card-link-item" href="${
          links.bricklink
        }" target="_blank" rel="noopener noreferrer">Bricklink</a>
      </div>
    </div>
  `;

  return card;
};

export default card;
