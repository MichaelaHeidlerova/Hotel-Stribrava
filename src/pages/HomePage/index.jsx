import './style.css';

export const HomePage = () => {
  return (
    <body>
  
  
  <section class="dark">
    <div class="container">
      <h2>Naše pokoje</h2>
      <p>
        Vyberte si, který z našich pokojů je pro vás ten pravý!
      </p>
      <div class="cards-row">
        <div class="card">
          <img class="card__image" src="../pictures/pokoj01.jpg"/>
          <div class="card__title">Úkryt</div>
          <div class="card__body">450 kč/os</div>
        </div>

        <div class="card">
          <img class="card__image" src="img/image1.svg" />
          <div class="card__title">Základ</div>
          <div class="card__body">700 kč/os</div>
        </div>

        <div class="card">
          <img class="card__image" src="img/image1.svg" />
          <div class="card__title">Klasik</div>
          <div class="card__body">1 200 kč/os</div>
        </div>

        <div class="card">
          <img class="card__image" src="img/image1.svg" />
          <div class="card__title">Komfort</div>
          <div class="card__body">2 500 kč/os</div>
        </div>

        <div class="card">
          <img class="card__image" src="img/image1.svg" />
          <div class="card__title">Luxus</div>
          <div class="card__body">8 000 kč/os</div>
        </div>
      </div>
    </div>
  </section>

  <section class="light">
    <div class="container">
      <h2>Heading</h2>
      <div class="columns-2">
        <div class="column">
          <img src="img/image1.svg" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusantium, dolor quisquam doloremque quod nobis temporibus ducimus sapiente consectetur distinctio assumenda, nisi suscipit saepe. Vero.
          </p>
        </div>
        <form>
          <div class="form-fields">
            <label htmlFor="field1" class="field-label">Od:</label>
            <input id="field1" class="field-input" type="text" />
            
            <label htmlFor="field2" class="field-label">Do:</label>
            <input id="field2" class="field-input" type="text" />

            <label htmlFor="field3" class="field-label">Počet osob:</label>
            <input id="field3" class="field-input" type="text" />
            
            <label htmlFor="select" class="field-label">Stravování:</label>
            <select id="select" class="field-input">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>

            <label htmlFor="check1" class="field-label">Domácí mazlíček:</label>
            <input id="check1" class="field-input" type="checkbox" />

            <label htmlFor="check1" class="field-label">Přistýlka pro dítě:</label>
            <input id="check1" class="field-input" type="checkbox" />

            <label htmlFor="field3" class="field-label">E-mail:</label>
            <input id="field3" class="field-input" type="text" />

            <label htmlFor="field3" class="field-label">Telefon:</label>
            <input id="field3" class="field-input" type="text" />
          </div>
          <button class="wide">Odeslat poptávku</button>
        </form>
      </div>
    </div>
  </section>

  <section class="dark">
    <div class="container columns-2">
      <div class="columns">
        <h2>Kontakt</h2>
              <p>Hotel Stříbravá</p>
              <p>Náměstí Svobody 12</p>
              <p>317 24 Úlibice nad Stříbravou</p>
              <p><a href="mailto:recepce@hotelstribrava.cz">recepce@hotelstribrava.cz</a></p>
      </div>
      <img src="../pictures/mapa.png" />
    </div>
  </section>
</body>
  );
};



