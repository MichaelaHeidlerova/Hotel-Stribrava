export const Rooms = () => {
  return (
    <div class="container">
      <h2>Naše pokoje</h2>
      <p>
        Vyberte si, který z našich pokojů je pro vás ten pravý!
      </p>
      <div class="cards-row">
        <div class="card">
          <img class="card__image" src="img/pokoj01.jpg"/>
          <div class="card__title">Úkryt</div>
          <div class="card__body">450 Kč na osobu</div>
        </div>

        <div class="card">
          <img class="card__image" src="img/pokoj02.jpg" />
          <div class="card__title">Základ</div>
          <div class="card__body">700 Kč na osobu</div>
        </div>

        <div class="card">
          <img class="card__image" src="img/pokoj03.jpg" />
          <div class="card__title">Klasik</div>
          <div class="card__body">1 200 kč na osobu</div>
        </div>

        <div class="card">
          <img class="card__image" src="img/pokoj04.jpg" />
          <div class="card__title">Komfort</div>
          <div class="card__body">2 500 Kč na osobu</div>
        </div>

        <div class="card">
          <img class="card__image" src="img/pokoj05.jpg" />
          <div class="card__title">Luxus</div>
          <div class="card__body">8 000 Kč na osobu</div>
        </div>
      </div>
    </div>
  )
}


