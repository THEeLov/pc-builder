import "./productCarousel.css"
import CustomButton from "../../CustomButton"
import { Carousel, ConfigProvider } from "antd"
import Slider1 from "../../../images/slider1.png"
import Slider2 from "../../../images/slider2.png"
import Slider3 from "../../../images/slider3.png"
import Slider4 from "../../../images/slider4.png"

const ProductCarousel = () => {
  return (
    <div className="product-carousel">
      <div className="product-carousel__content">
        <div className="text-container">
          <h1>Products</h1>
          <div className="all-products">
            <p>All current products available</p>
            <CustomButton label="View all" btype="secondary" />
          </div>
        </div>
        <div className="carousel-container">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "red",
              },
            }}
          >
            <Carousel autoplay={true} autoplaySpeed={2000} dots={true}>
              <div className="image-container">
                <img src={Slider1} alt="first image" />
              </div>
              <div className="image-container">
                <img src={Slider2} alt="first image" />
              </div>
              <div className="image-container">
                <img src={Slider3} alt="first image" />
              </div>
              <div className="image-container">
                <img src={Slider4} alt="first image" />
              </div>
            </Carousel>
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel
