function buscar() {
  document.getElementById("destaque").style ="display:none"
  const cardContainer = document.getElementById("cardContainer");
  let titulo = document.getElementById("titulo").value;
  const url = "https://www.omdbapi.com/?apikey=d599bb07&s=" + titulo;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.Search) {
        cardContainer.innerHTML = ""; // Limpar o conteúdo anterior

        data.Search.forEach((filme) => {
        
          const card = document.createElement("div");
          card.classList.add("card");

          const imgElement = document.createElement("img");
          imgElement.src = filme.Poster;
          imgElement.alt = filme.Title;
          imgElement.classList.add("card-img");

          const infoContainer = document.createElement("div");
          infoContainer.classList.add("card-info");

          const titleElement = document.createElement("h2");
          titleElement.textContent = filme.Title;

          const yearElement = document.createElement("p");
          yearElement.textContent = "Ano: " + filme.Year;

          const typeElement = document.createElement("p");
          typeElement.textContent = "Tipo: " + filme.Type;

          infoContainer.appendChild(titleElement);
          infoContainer.appendChild(yearElement);
          infoContainer.appendChild(typeElement);

          card.appendChild(imgElement);
          card.appendChild(infoContainer);

          cardContainer.appendChild(card);
        });
      }
    })
    .catch((error) => {
      console.error("Erro na busca:", error);
    });
}

function filtrarPorAno() {
  document.getElementById("destaque").style ="display:none"
  const cardContainer = document.getElementById("cardContainer");
  let titulo = document.getElementById("titulo").value;
  const url = "https://www.omdbapi.com/?apikey=d599bb07&s=" + titulo;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.Search) {
        const anoFiltrado = document.getElementById("ano").value; // Obtém o ano desejado
        cardContainer.innerHTML = ""; // Limpar o conteúdo anterior

        data.Search.forEach((filme) => {
          // Verifica se o ano do filme corresponde ao ano desejado
          if (filme.Year === anoFiltrado) {
            const card = document.createElement("div");
            card.classList.add("card");

            const imgElement = document.createElement("img");
            imgElement.src = filme.Poster;
            imgElement.alt = filme.Title;
            imgElement.classList.add("card-img");

            const infoContainer = document.createElement("div");
            infoContainer.classList.add("card-info");

            const titleElement = document.createElement("h2");
            titleElement.textContent = filme.Title;

            const yearElement = document.createElement("p");
            yearElement.textContent = "Ano: " + filme.Year;

            const typeElement = document.createElement("p");
            typeElement.textContent = "Tipo: " + filme.Type;

            infoContainer.appendChild(titleElement);
            infoContainer.appendChild(yearElement);
            infoContainer.appendChild(typeElement);

            card.appendChild(imgElement);
            card.appendChild(infoContainer);

            cardContainer.appendChild(card);
          }
        });
      }
    })
    .catch((error) => {
      console.error("Erro na busca:", error);
    });
}

document.addEventListener("DOMContentLoaded", buscarTodosOsFilmes);

async function buscarTodosOsFilmes() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // Limpar o conteúdo anterior

  const titulo = document.getElementById("titulo").value;
  let pagina = 1; // Comece com a primeira página
  let totalResultados = 0;

  do {
    const url = `https://www.omdbapi.com/?apikey=d599bb07&s=fast&page=${pagina}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      totalResultados = parseInt(data.totalResults);

      data.Search.forEach((filme) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imgElement = document.createElement("img");
        imgElement.src = filme.Poster;
        imgElement.alt = filme.Title;
        imgElement.classList.add("card-img");

        const infoContainer = document.createElement("div");
        infoContainer.classList.add("card-info");

        const titleElement = document.createElement("h2");
        titleElement.textContent = filme.Title;

        const yearElement = document.createElement("p");
        yearElement.textContent = "Ano: " + filme.Year;

        const typeElement = document.createElement("p");
        typeElement.textContent = "Tipo: " + filme.Type;

        infoContainer.appendChild(titleElement);
        infoContainer.appendChild(yearElement);
        infoContainer.appendChild(typeElement);

        card.appendChild(imgElement);
        card.appendChild(infoContainer);

        cardContainer.appendChild(card);
      });
    }

    pagina++;

    // Verifique se há mais páginas para buscar
  } while (pagina <= Math.ceil(totalResultados / 10)); // 10 resultados por página

  console.log("Todos os filmes foram buscados!");
}
