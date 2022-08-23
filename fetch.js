const buscarFueraDelJs = () => {
    fetch('datos.json')
    .then((response) => response.json())
    .then(information => {
        let accumulator = ``;
        information.forEach((manga) => {
            console.log(manga)
            accumulator += `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${manga.image}" class="img-fluid rounded-start" alt="${manga.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${manga.name}</h5>
                  <p class="card-text">Último capítulo: ${manga.chapter}</p>
                </div>
              </div>
            </div>
          </div>`
        })
        document.getElementById('cards').innerHTML = accumulator;
    })
}

buscarFueraDelJs();