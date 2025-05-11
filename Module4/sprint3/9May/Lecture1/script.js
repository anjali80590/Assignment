const apiUrl = "https://rickandmortyapi.com/api/character";
let currentPage = 1;

const characterGrid = document.getElementById("character-grid");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

async function fetchCharacters(page) {
  const res = await fetch(`${apiUrl}?page=${page}`);
  const data = await res.json();

  characterGrid.innerHTML = "";

  data.results.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Species: ${character.species}</p>
      <p>Status: ${character.status}</p>
      <a href="character-detail.html?id=${character.id}" target="_blank">View Details</a>
    `;
    characterGrid.appendChild(card);
  });

  prevBtn.disabled = page === 1;
  nextBtn.disabled = !data.info.next;
}

nextBtn.addEventListener("click", () => {
  currentPage++;
  fetchCharacters(currentPage);
});

prevBtn.addEventListener("click", () => {
  currentPage--;
  fetchCharacters(currentPage);
});

fetchCharacters(currentPage);

function updateClock() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const timeString = now.toLocaleString("en-US", options);
  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
