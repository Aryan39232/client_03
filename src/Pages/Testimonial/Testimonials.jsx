import styles from "./testimonials.module.css";
import { TestimonialCard, Navbar } from "../../Components";
import coverPic from "../../Assets/Images/Testimonials/cover.jpg";
import Upper_Footer from "../../Components/Upper_Footer/Upper_Footer";

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
