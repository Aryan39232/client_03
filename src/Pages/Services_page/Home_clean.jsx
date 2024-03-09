import { Navbar } from "../../Components";

import styles from "../about/about.module.css";
import randomImg from "../../Assets/Images/About/random.jpg";
import teamImg from "../../Assets/Images/About/team.jpg";
import aboutCoverImg from "../../Assets/Images/About/cover.jpg";
import Upper_Footer from "../../Components/Upper_Footer/Upper_Footer";

const Home_clean = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div
          className={styles.heading}
          style={{ backgroundImage: `url(${aboutCoverImg})` }}
        >
          {" "}
          Home Cleaning{" "}
        </div>
        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}>
              {" "}
              Rest Easy, Sleep Healthy: Sparkling Clean Mattresses, Naturally!{" "}
            </span>

            <span className={styles.ourStoryDesc}>
              If you have ever tried to change mattress sheets or changed over
              your mattress, you will better understand the effort and cost
              involved in removing and replacing the one you have. To reduce the
              time and spend more time with your loved ones , heavy lifting and
              expense, you can simply renew your mattress with professional
              mattress cleaning.
              <br />
              <br />
              Professional mattress cleaning process will not only cost you less
              then a new one but it will look better than new one mattress.
              Mattress cleaning is a crucial step in prolonging the life of your
              mattress to ensure it goes the long distance.
              <br />
              <br />
              Professional mattress cleaning is very important for your health
              and for the quality of your sleep. Moreover, with dirt and debris,
              your mattress encounters sweat, spills and accidents. Our mattress
              cleaning experts will clean and sanitise it with specialised
              products and deodorizer methods that only a professional mattress
              cleaning service can provide you at very affordable price.
              <br />
              <br />
              Professional mattress cleaning is very important for your health
              and for the quality of your sleep. Moreover, with dirt and debris,
              your mattress encounters sweat, spills and accidents. Our mattress
              cleaning experts will clean and sanitise it with specialised
              products and deodorizer methods that only a professional mattress
              cleaning service can provide you at very affordable price.
              <br />
              <br />
            </span>
          </div>

          {/* <img src={teamImg} className={styles.ourStoryImg} alt="" /> */}
        </div>

        <div className={styles.about_Service}>
          <div className={styles.about_text_content}>
            <span className={styles.aboutHead}>
              {" "}
              What shoud I need to write
            </span>

            <span className={styles.aboutDesc}>
              Optima mattress cleaning services are performed utilising the
              highly effective hot water extraction method. It is suitable for
              both synthetic and mixed fibre materials for superior cleans which
              do not compromise the fabric. Our technicians will assess and
              treat any stubborn stains or soilage. These areas will be treated
              prior to cleaning before proceeding with the most suitable method
              of cleaning. We at BEST 1 Cleaners serves reasonably, efficiently,
              and we are feeling proud about what we do. Our services for
              professional mattress cleaning will provide a premium result with
              affordable prices for tenants sand the homeowners. Let us clean
              your mattress and left it allergen free !
              <br />
              <br />
            </span>
          </div>

          <img src={randomImg} className={styles.aboutImg} alt="" />
        </div>
        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}>
              {" "}
              The BEST 1 Cleaners Mattress Cleaning Process{" "}
            </span>

            <span className={styles.ourStoryDesc}>
              Firstly , the cleaning process begins with a thorough inspection
              of a mattress. Specialists look for stains, odors, signs of wear
              and tear, any specific areas that may require targeted treatment.
              Then, by using a high powered vacuum the entire surface of the
              mattress. This step removes loose particles such as dust, hair,
              and pet dander.
              <br />
              <br />
              In the next step , if there is any visible stains on the mattress
              then it will be treated by our best 1 cleaners appropriate
              cleaning solutions. Our professional mattress cleaning specialists
              have a range of products at their disposal and will choose one
              based on the type of the stain (e.g. blood, urine, sweat ) and
              type of the mattress to ensure effective removal without damaging
              the mattress fabric.
              <br />
              <br />
              The main phase of mattress cleaning involves many different
              methods such as
              <br />
              <br />
              Hot water extraction ( steam cleaning ) : in this method we will
              inject hot water and cleaning solution into the mattress fabric
              and then vacuums it out. It is effective for deep cleaning and
              killing bacteria , viruses and dust mites.
              <br />
              <br />
              Dry cleaning : some mattresses may require a dry cleaning method,
              which uses minimal moisture and specific chemicals to clean
              without wetting the mattress.
              <br />
              <br />
              In the 5th stage , for better and fresh feeling , our mattress
              cleaning specialists will apply deodorizer to the mattress to
              remove any lingering odors , leaving it smelling fresh.
              <br />
              <br />
              Final stage is very crucial as it is called drying stage . we must
              insure that mattress is completely dry to prevent mold and mildew
              growth. Professionals may use air movers or fans to speed up the
              drying process. In the case of dry cleaning methods , drying time
              is minimal.
              <br />
              <br />
              Finally , our specialist will also provide advice on how to
              maintain your mattress cleanliness and extend the time between
              professional cleanings. ‘’ Choosing a professional mattress
              cleaning service can significantly improve your sleeping
              environment’s health and hygiene, contributing to better sleep
              quality and overall well being ‘’. The BEST 1 Cleaners mattress
              cleaning experts are well known for their expertise in mattress
              cleaning service for delivering superior cleaning results and
              attention to detail cleaning.
            </span>
          </div>

          <img src={teamImg} className={styles.ourStoryImg} alt="" />
        </div>
        <Upper_Footer />
      </div>
    </>
  );
};

export default Home_clean;
