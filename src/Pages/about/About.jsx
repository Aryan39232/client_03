import styles from "./about.module.css";
import randomImg from "../../Assets/Images/Final_img/11.jpg";
import teamImg from "../../Assets/Images/Final_img/10.jpg";
import aboutCoverImg from "../../Assets/Images/Final_img/10.jpg";

const About = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.heading}
          style={{
            backgroundImage: `url(${aboutCoverImg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          {" "}
          ABOUT US{" "}
        </div>

        <div className={styles.about_Service}>
          <div className={styles.about_text_content}>
            <span className={styles.aboutHead}>
              {" "}
              A CLEANING COMPANY THAT YOU CAN TRUST FOR ALL YOUR CLEANING NEEDS
            </span>

            <span className={styles.aboutDesc}>
              At Best 1 Cleaners, we’re known across Australis for our top-notch
              Domestic and Commercial cleaning and maintenance services. Whether
              it’s Hospitality, Education, Fitness, Retail, or the medical
              sector, we’ve got you covered.
              <br />
              <br />
              Our team of cleaning professionals is the cream of the crop. We
              handpick each member after thorough training and background
              checks, ensuring they meet our high standards.
              <br />
              <br />
              Our goal is simple: provide world- class cleaning services while
              minimizing our impact on the environment. That’s why we use safe,
              eco-friendly products and supplies.
              <br />
              <br />
              With Best 1 Cleaners, you can trust that your space will be
              spotless and sustainable. We’re dedicated to delivering results
              that leave our clients satisfied, every time.
            </span>
          </div>

          <img src={randomImg} className={styles.aboutImg} alt="" />
        </div>

        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}>
              {" "}
              Choose us and you will receive
            </span>

            <span className={styles.ourStoryDesc}>
              <ul>
                <li> Guaranteed customer satisfaction every time.</li>
                <li>
                  {" "}
                  Cleaning services that give you great value for your money.
                </li>
                <li>
                  {" "}
                  A team of talented and skilled cleaners ready to tackle any
                  job.
                </li>
                <li>
                  {" "}
                  Eco-friendly practices that reduce our environmental impact.
                </li>
              </ul>
            </span>

            <span>
              {" "}
              In addition to commercial cleaning, we also help our customers
              with recycling programs. We are committed to promoting green, safe
              and non-toxic cleaning methods and supplies. Our team prioritizes
              creating a clean, safe , and healthy workplace for our clients.
            </span>

            <span>
              {" "}
              If you want more details about our cleaning services or are
              interested in learning about our recycling programs, don’t
              hesitate to reach out to us. We’re here to help!
            </span>
          </div>

          <img src={teamImg} className={styles.ourStoryImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
