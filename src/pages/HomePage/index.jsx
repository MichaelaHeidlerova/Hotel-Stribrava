import { Accommodation } from '../Accommodation/Accommodation';
import { Banner } from '../Banner/Banner';
import { Footer } from '../Footer/Footer';
import { Rooms } from '../Rooms/Rooms';
import './style.css';

export const HomePage = () => {
  return (
    <body>
      <Banner />
      <Rooms />
      <Accommodation />
      <Footer />  
    </body>
  );
};



