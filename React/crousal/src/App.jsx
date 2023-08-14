import React from "react";
import "./App.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { data } from "./data";

function App() {
  let url="img/"
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={{ delay: 1500 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((ele) => (
          <SwiperSlide>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={url+ele.images}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{ele.Title}</h5>
                <p className="card-text">
                  {ele.descreption}
                </p>
                <a href="#" className="btn btn-primary">
                  Buy Images
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="img/3.avif"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy Images
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="img/3.avif"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy Images
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="img/3.avif"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy Images
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="img/3.avif"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy Images
              </a>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default App;
