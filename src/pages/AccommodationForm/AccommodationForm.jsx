 export const Accommodation = () => {
  return (
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

              <label htmlFor="check1" class="field-label">Bezbariérový přístup:</label>
              <input id="check1" class="field-input" type="checkbox" />

              <label htmlFor="field3" class="field-label">E-mail:</label>
              <input id="field3" class="field-input" type="text" />

              <label htmlFor="field3" class="field-label">Telefon:</label>
              <input id="field3" class="field-input" type="text" />
            </div>
  
            <h4>Celková cena za pobyt: Kč</h4>

            <button class="wide">Odeslat poptávku</button>
         </form>
  );
}
 
 