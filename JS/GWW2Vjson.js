document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("card-pool");
  const filterContainer = document.getElementById("filter-buttons");
  let allCardsData = [];

  function crearTarjetas(data) {
    container.innerHTML = "";

    data.forEach(vehiculo => {
      const card = document.createElement('div');
      card.classList.add('cartas', vehiculo.tipo);
      card.id = vehiculo.id;

      const img = document.createElement('img');
      img.src = vehiculo.imagen;

      const titulo = document.createElement('p');
      titulo.className = 'orbitron-TituloTarjeta';
      titulo.textContent = vehiculo.nombre;

      const desc = document.createElement('p');
      desc.className = 'MarginBotText';
      desc.textContent = vehiculo.descripcion;

      const extraInfo = document.createElement('div');
      extraInfo.className = 'extra-info';

      for (const key in vehiculo.detalles) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${vehiculo.detalles[key]}`;
        extraInfo.appendChild(p);
      }

      card.appendChild(img);
      card.appendChild(titulo);
      card.appendChild(desc);
      card.appendChild(extraInfo);

      card.addEventListener("click", () => {
        card.classList.toggle("expanded");
      });

      container.appendChild(card);
    });
  }

  fetch('../data/GWW2V.json')
    .then(response => response.json())
    .then(data => {
      allCardsData = data;
      crearTarjetas(allCardsData);
    })
    .catch(error => {
      console.error("Error cargando los vehículos:", error);
    });

  filterContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const filtro = e.target.getAttribute("data-filter");
      if (filtro === "all") {
        crearTarjetas(allCardsData);
      } else {
        const filtrados = allCardsData.filter(v => v.tipo === filtro);
        crearTarjetas(filtrados);
      }
    }
  });
});
