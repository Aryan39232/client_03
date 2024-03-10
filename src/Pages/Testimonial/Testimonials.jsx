import styles from "./testimonials.module.css";
import { TestimonialCard } from "../../Components";
import coverPic from "../../Assets/Images/Testimonials/cover.jpg";

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
        <TestimonialCard />
      </div>
    </>
  );
}

export default Testimonials;
