import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import styles from "./testimonialCard.module.css"


function TestimonialCard() {

  return (
    <Swiper 
      navigation={true} 
      pagination={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]} 
      className="mySwiper"
    >
      <SwiperSlide>
        <div className={styles.slideWrapper}>
          <span className={styles.slideHeading}> "6 out of 5 Stars for Best1 Bond Cleaners" </span>
          <span className={styles.slideSubHead}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam! Voluptate, eius? </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideWrapper}>
          <span className={styles.slideHeading}> "6 out of 5 Stars for Best1 Bond Cleaners" </span>
          <span className={styles.slideSubHead}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam! Voluptate, eius? </span>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className={styles.slideWrapper}>
          <span className={styles.slideHeading}> "6 out of 5 Stars for Best1 Bond Cleaners" </span>
          <span className={styles.slideSubHead}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam! Voluptate, eius? </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slideWrapper}>
          <span className={styles.slideHeading}> "6 out of 5 Stars for Best1 Bond Cleaners" </span>
          <span className={styles.slideSubHead}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam! Voluptate, eius? </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TestimonialCard