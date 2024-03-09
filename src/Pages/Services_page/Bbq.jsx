import { Navbar } from "../../Components";

import styles from "../about/about.module.css";
import randomImg from "../../Assets/Images/About/random.jpg";
import teamImg from "../../Assets/Images/About/team.jpg";
import aboutCoverImg from "../../Assets/Images/About/cover.jpg";
import Upper_Footer from "../../Components/Upper_Footer/Upper_Footer";

const Bbq = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div
          className={styles.heading}
          style={{ backgroundImage: `url(${aboutCoverImg})` }}
        >
          {" "}
          oven / BBQ SERVICES{" "}
        </div>

        <div className={styles.about_Service}>
          <div className={styles.about_text_content}>
            <span className={styles.aboutHead}>
              {" "}
              our BEST 1 CLEANERS oven / BBQ cleaning process{" "}
            </span>

            <span className={styles.aboutDesc}>
              Once you’ve selected us to lead a better and happy life for you
              and your family and call us to clean your oven / BBQ , you don’t
              need to worry about doing anything else, you just need to be
              stress free. Our oven cleaners specialists will arrive on time and
              they will be fully equipped with ECO FRIENDLY chemicals and
              everything needed to do an outstanding job.
              {/* <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              deleniti sequi eos dolores. Eveniet saepe aliquid quia veniam
              ullam in exercitationem perspiciatis corrupti aperiam odit
              asperiores, tempore nostrum, magnam vel incidunt inventore.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              deleniti sequi eos dolores. Eveniet saepe aliquid quia veniam. */}
            </span>
          </div>

          <img src={randomImg} className={styles.aboutImg} alt="" />
        </div>

        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}>
              {" "}
              Process of our professionals{" "}
            </span>

            <span className={styles.ourStoryDesc}>
              1. Firstly , they will inspect your oven / BBQ – the size , model,
              and current condition and any potential issues. Then a protective
              mat will be placed under or around the appliance to control the
              cleaning station and potential splashes to a minimum.
              <br />
              <br />
              2. Secondly , they will follow SAFETY PRECAUTIONS : Ensure the
              oven is turned off and cool before starting the cleaning process.
              Wear protective gear, such as gloves and eye protection, to avoid
              contact with cleaning chemicals.( Note : we only use Eco friendly
              chemicals )
              <br />
              <br />
              3. Remove Loose Debris: Remove removable parts like racks, trays,
              and other accessories from the oven . Vacuum or wipe away loose
              debris and crumbs from the interior.
              <br />
              <br /> 4. Soak Removable Parts : Soak removable parts in a
              cleaning solution to loosen grease and grime.
              <br />
              <br /> 5. Apply Oven Cleaner : Apply a suitable oven cleaner to
              the interior surfaces, avoiding heating elements. And the you will
              need our specialists to sit for the recommended time to break down
              grease.
              <br />
              <br />
              6. Scrubbing : Use a non- abrasive scrubbing pad or brush to scrub
              away the loosened dirt. Pay special attention to stubborn stains
              and areas with heavy buildup.
              <br />
              <br />
              7. Rinse and Wipe : Wipe down the interior with a damp cloth or
              sponge to remove the cleaning solution. Rinse removable parts
              thoroughly.
              <br />
              <br />
              8. Dry and Reassemble: Ensure all parts are completely dry before
              reassembling the oven. And our oven cleaning professionals will
              recommend to turning it on and let it work for around 10 - 15
              minutes before using it, as you would do with your brand new oven.
              <br />
              <br />
            </span>
          </div>

          <img src={teamImg} className={styles.ourStoryImg} alt="" />
        </div>
        <Upper_Footer />
      </div>
    </>
  );
};

export default Bbq;
