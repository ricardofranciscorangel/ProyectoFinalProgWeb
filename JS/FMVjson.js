fetch('../data/FMV.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('card-pool');

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

      container.appendChild(card);
    });

    document.querySelectorAll('.cartas').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });
    });
  })
  .catch(error => {
    console.error("Error cargando los vehículos:", error);
  });