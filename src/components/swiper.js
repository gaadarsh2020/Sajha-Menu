import { Swiper, SwiperSlide } from "swiper/react";
import Rectangle from "../assests/Rectangle 48.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

import { Pagination, Navigation } from "swiper/modules";
function swiper() {
  return (
    <>
      <section>
        <div className="client-say">
          <h2>What Our Client Say</h2>
          <p>
            We always take care of our clients by creating experiences that put
            our clients first.
            <br /> The vast majority of our clients continue working with us
            after the project is complete.
          </p>
          <div className="swiper-div">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="user1">
                  <div className="user1-image">
                    <img src={Rectangle} alt="Reactangle" />
                  </div>
                  <div className="user1-para">
                    <p>
                      "Working with this company has been a game-changer for our
                      marketing efforts. Their innovative strategies have helped
                      us reach new heights. Highly recommended!"
                      <br />
                      <br />
                      Krishna Prashad
                      <br />
                      Manger of tulip
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user1">
                  <div className="user1-image">
                    <img src={Rectangle} alt="Reactangle" />
                  </div>
                  <div className="user1-para">
                    <p>
                      "Working with this company has been a game-changer for our
                      marketing efforts. Their innovative strategies have helped
                      us reach new heights. Highly recommended!"
                      <br />
                      <br />
                      Krishna Prashad
                      <br />
                      Manger of tulip
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user1">
                  <div className="user1-image">
                    <img src={Rectangle} alt="Rectangle" />
                  </div>
                  <div className="user1-para">
                    <p>
                      "Working with this company has been a game-changer for our
                      marketing efforts. Their innovative strategies have helped
                      us reach new heights. Highly recommended!"
                      <br />
                      <br />
                      Krishna Prashad
                      <br />
                      Manger of tulip
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user1">
                  <div className="user1-image">
                    <img src={Rectangle} alt="Reactangle" />
                  </div>
                  <div className="user1-para">
                    <p>
                      "Working with this company has been a game-changer for our
                      marketing efforts. Their innovative strategies have helped
                      us reach new heights. Highly recommended!"
                      <br />
                      <br />
                      Krishna Prashad
                      <br />
                      Manger of tulip
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user1">
                  <div className="user1-image">
                    <img src={Rectangle} alt="Reactangle" />
                  </div>
                  <div className="user1-para">
                    <p>
                      "Working with this company has been a game-changer for our
                      marketing efforts. Their innovative strategies have helped
                      us reach new heights. Highly recommended!"
                      <br />
                      <br />
                      Krishna Prashad
                      <br />
                      Manger of tulip
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user1">
                  <div className="user1-image">
                    <img src={Rectangle} alt="Reactangle" />
                  </div>
                  <div className="user1-para">
                    <p>
                      "Working with this company has been a game-changer for our
                      marketing efforts. Their innovative strategies have helped
                      us reach new heights. Highly recommended!"
                      <br />
                      <br />
                      Krishna Prashad
                      <br />
                      Manger of tulip
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user1">
                  <div className="user1-image">
                    <img src={Rectangle} alt="Reactangle" />
                  </div>
                  <div className="user1-para">
                    <p>
                      "Working with this company has been a game-changer for our
                      marketing efforts. Their innovative strategies have helped
                      us reach new heights. Highly recommended!"
                      <br />
                      <br />
                      Krishna Prashad
                      <br />
                      Manger of tulip
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
export default swiper;
