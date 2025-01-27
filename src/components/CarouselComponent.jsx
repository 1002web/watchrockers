import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/band3.jpg';
import img2 from '../assets/band4.jpg';
import img3 from '../assets/band5.jpg';
import img4 from '../assets/band6.jpg';
import img5 from '../assets/band7.jpg';

function CarourselComponent() {
  return (
<>
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
      <img className="d-block w-100" src={img5} alt="Zero slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img4} alt="Forth slide"/>
    </div>
  </div>
</div>
</>
  );
}

export default CarourselComponent;