import { Accommodation } from '../AccommodationForm/AccommodationForm';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';
import { Rooms } from '../Rooms/Rooms';
import { RoomsDetail } from '../RoomsDetail/RoomsDetail';
import './style.css';

export const HomePage = () => {
  return (
    <body>
      <div class="banner">
            <Banner />
      </div>
      
      <section class="dark">
        <div class="container">
          <Rooms />
        </div>
      </section>

      <section class="light">
          <div class="container">
            <div class="columns-2">
              <div class="column">
               <RoomsDetail />
              </div>
        <Accommodation />
            </div>
          </div>
        </section>



      <section class="dark">
          <div class="container columns-2">
             <Footer /> 
          </div>
        </section>
    </body>
  );
};



