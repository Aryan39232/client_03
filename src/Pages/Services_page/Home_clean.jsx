import styles from "../about/about.module.css";
import randomImg from "../../Assets/Images/Final_img/10.jpg";
import teamImg from "../../Assets/Images/Final_img/10.jpg";
import aboutCoverImg from "../../Assets/Images/Final_img/10.jpg";

const Home_clean = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.heading}
          style={{ backgroundImage: `url(${aboutCoverImg})` }}
        >
          {" "}
          HOME CLEANING{" "}
        </div>
        <div className={styles.ourStoryWrapper}>
          <span className={styles.ourStoryHead}>
            {" "}
            Home cleaning is the process of tidying, organizing, and sanitizing
            living spaces to maintain a clean and healthy environment for
            tenants and family members. It involves various tasks aimed at
            removing dirt, dust, grime, and germs from surfaces, floors,
            furniture, and other areas of the home.{" "}
          </span>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}>
              Importance of home cleaning :-
            </span>

            <span className={styles.ourStoryDesc}>
              • Regular home cleaning helps prevent the build up of allergens,
              bacteria, and other harmful pathogens that can contribute to
              respiratory problems, allergies, and illnesses. A clean home
              promotes better health and well-being for everyone living in it.
              <br />
              <br />
              • A tidy and organized home provides a more comfortable and
              relaxing environment for occupants to unwind and recharge after a
              long day. Clutter-free spaces can also help reduce stress and
              promote mental clarity and focus. tidy and organized home provides
              a more comfortable and relaxing environment for occupants to
              unwind and recharge after a long day. Keeping your home clean and
              well-maintained instills a sense of pride and satisfaction home
              ownership.
              <br />
              <br />
              • A clean home reflects attention to detail, care for the living
              environment, and pride in one’s surroundings. We at Best 1
              Cleaners take pride to clean your homes with green products to
              keep you and your family member safe and healthy. You can choose
              the cleaner you want and if you book us for regular cleaning then
              cleaner who come to you sat first time will stay for the end, and
              we will not lock you into the regular contract or weekly .
              <br />
              <br />
              • In this busy era , no one has time to spend it on cleaning but
              cleaning is very essential as without cleanliness we will get sick
              . We have family to spend our valuable time with them. So, it’s
              difficult to find time and energy for something extra work.
              <br />
              <br />
              <b>
                With the best one cleaners , all of your cleaning needs will be
                not only completed but also satisfied with green environment
                around your homes.{" "}
              </b>
            </span>
          </div>

          {/* <img src={teamImg} className={styles.ourStoryImg} alt="" /> */}
        </div>

        <div className={styles.about_Service}>
          <div className={styles.about_text_content}>
            <span className={styles.aboutHead}>
              {" "}
              Our Best 1 Cleaners Expertise in Home Cleaning
            </span>

            <span className={styles.aboutDesc}>
              Here at Best 1 Cleaning we utilise the modern and very innovative
              cleaning methods and cleaning equipments to get far better
              results. Our cleaning products are 100% harmful chemical free, we
              use only green product from the best cleaning chemical supplies
              like AGAR chemicals and other hygiene products.
              <br />
              <br />
              We can also offer daily , weekly or fortnightly cleaning package
              and whenever you want to cancel it just need one call and
              conversation to cancel the package.
              <br />
              <br />
              By being a your local cleaning company in the Brisbane, Gold
              coast, Sunshine coast, Melbourne, Sydney, Perth, Adelaide for so
              many years, Best 1 Cleaners has become the first priority of
              homeowners and businessowners for their cleaning needs.
            </span>
          </div>

          <img src={randomImg} className={styles.aboutImg} alt="" />
        </div>
        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}> With Our Teams </span>

            <span className={styles.ourStoryDesc}>
              • All of our cleaners are fully trained and certified to provide
              cleaning services across Australia. Here at Best 1 Cleaners you
              will never be disappointed with our services.
              <br />
              <br />
              • In the next step , if there is any visible stains on the
              mattress then it will be treated by our best 1 cleaners
              appropriate cleaning solutions. Our professional mattress cleaning
              specialists have a range of products at their disposal and will
              choose one based on the type of the stain (e.g. blood, urine,
              sweat ) and type of the mattress to ensure effective removal
              without damaging the mattress fabric.
              <br />
              <br />
              • At Best 1 Cleaners , customer satisfaction is not just a goal;
              it’s our promise to you . We go above and beyond to ensure that
              every aspect of our service is designed with your satisfaction in
              mind.
              <br />
              <br />
              • From the quality of our work to the professionalism of our team,
              we are committed to earning your trust and building a long-lasting
              relationship based on mutual respect and satisfaction.
              <br />
              <br />
            </span>
          </div>

          <img src={teamImg} className={styles.ourStoryImg} alt="" />

          <b>
            Experience the difference of working with a cleaning company that
            puts your needs first. Contact us today to discover how we can make
            your space shine!
          </b>
        </div>
      </div>
    </>
  );
};

export default Home_clean;
