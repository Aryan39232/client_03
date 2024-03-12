import styles from "./testimonials.module.css";
import coverPic from "../../Assets/Images/Testimonials/cover.jpg";
import { Carousel } from "../../Components";

function Testimonials() {
  return (
    <>
      <div className={styles.testiWrapper}>
        <div
          className={styles.testiHeader}
          style={{ backgroundImage: `url(${coverPic})` }}
        >
          <span className={styles.heading}> TESTIMONIALS </span>
          <span className={styles.subHead}> What Our Clients Say </span>
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default Testimonials;
