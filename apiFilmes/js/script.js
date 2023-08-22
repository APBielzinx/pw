function buscar() {
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
  