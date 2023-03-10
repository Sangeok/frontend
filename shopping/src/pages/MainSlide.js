import mainImage1 from '.././images/모델1.jpg';
import mainImage2 from '.././images/모델2.jpg';
import mainImage3 from '.././images/모델3.jpg';
import Carousel from 'react-bootstrap/Carousel';

function ImageSlider() {
    const styled = {
      height : "800px",
    }
  
    return (
      <Carousel
        autoPlay={true}
        interval={5000}>
        <Carousel.Item>
          <img
            className="main__image1"
            src={mainImage1}
            alt="First slide"
            style = {styled}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="main__image2"
            src={mainImage2}
            alt="Second slide"
            style = {styled}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="main__image3"
            src={mainImage3}
            alt="Third slide"
            style = {styled}
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ImageSlider;