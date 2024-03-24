import styles from "../about/about.module.css";
import randomImg from "../../Assets/Images/Final_img/9.jpg";
import teamImg from "../../Assets/Images/Final_img/9.jpg";
import aboutCoverImg from "../../Assets/Images/Final_img/9.jpg";

const Office = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.heading}
          style={{ backgroundImage: `url(${aboutCoverImg})` }}
        >
          {" "}
          COMMERACIAL AND OFFICE CLEANING{" "}
        </div>
        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            {/* <span className={styles.ourStoryHead}>
              {" "}
              Process of our professionals{" "}
            </span> */}

            <span className={styles.ourStoryDesc}>
              We provide office and commercial cleaning services to all type and
              sizes of office and commercial building and corporate locations,
              from make up artists, car showrooms and real estate , property
              agents to large offices in corporate parks .
              <br />
              <br />
              <b>
                <p>• Professional office cleaners Near you</p>
                <p>• We clean offices and commercial buildings of all sizes</p>
                <p>• 100% customer satisfaction guarantee</p>
              </b>
              <br />
              <br />
              Thinking of good health for employees is the first priority of
              every business owners and requirement for this is to keep our work
              space clean and hygiene. office and commercial cleaning by our
              Best 1 cleaners specialists involves a systematic approach to
              ensure thoroughness, efficiency, and customer satisfaction.
              <br />
              <br />
              <b>
                ’’ Leave the Cleaning to us , Focus on Your Business Success !’’{" "}
              </b>
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
              {/* What shoud I need to write */}
            </span>

            <span className={styles.aboutDesc}>
              We never bind our existing customers or new one in a lengthy
              contract . We provide office cleaning services on a daily , weekly
              , fortnightly or once- off basis hire our office cleaning services
              in on a daily, weekly or one-off basis – no strings attached. And
              very big thanks to our15+ years of experience and high standard
              commercial-grade equipment, our teams clean your office to the
              highest standards. From grimy tiles to dusty windows, you can
              trust us and leave all your commercial cleaning needs to us to
              deliver comprehensive commercial cleaning service.
              <br />
              <br />
            </span>
          </div>

          <img src={randomImg} className={styles.aboutImg} alt="" />
        </div>
        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}> Our Methods </span>

            <span className={styles.ourStoryDesc}>
              First of all, you can easily book ou professional office cleaning
              service anytime and our friendly staff will happy to assist you
              with your last minute all cleaning requirements. We can understand
              that you have a business to run and time is very important to you
              , that’s why we have a team to schedule cleaning anytime that’s
              suits better to your schedule. Our Best 1 Cleaners Our o perform
              their duties without any disruption to your operations. We are
              committed to never leave small portion of any debris at your
              workspace. professional office cleaner will start with initial
              assessment and planning . They may conduct walkthrough with the
              client to identify key areas of focus , high traffic zones and any
              special instructions or considerations. Then , we will customize
              cleaning plan that may include details such as frequency of
              cleaning ,specific task to be cleaned or any special
              considerations or special products.
              <br />
              <br />
              In the 2nd step , our specialists will begin cleaning by dusting
              surfaces such as desks, tables , shelves or other furniture using
              microfibre cloths or dusters. They wipe down surfaces to remove
              dust , fingerprints , and other visible debris , paying attention
              to detail in areas where buildup may occur. Our professional
              office cleaners will do vacuuming or sweeping of floors is
              conducted to remove loose dirt, debris, and particulate matter.
              Depending on the type of flooring, office cleaner experts may use
              mops, floor scrubbers, or steam cleaners( if needed ) to achieve a
              deeper clean and restore shine.
              <br />
              <br />
              Our professional office cleaners will do vacuuming or sweeping of
              floors is conducted to remove loose dirt, debris, and particulate
              matter. Depending on the type of flooring, office cleaner experts
              may use mops, floor scrubbers, or steam cleaners( if needed ) to
              achieve a deeper clean and restore shine.
              <br />
              <br /> In the 3rd stage , our office cleaner experts will focus on
              kitchen and bathroom cleaning . Bathrooms and kitchen areas are
              thoroughly cleaned and sanitized to maintain hygiene standards.
              <br />
              <br /> Fixtures, sinks, countertops, and other surfaces are
              disinfected using appropriate cleaning agents to eliminate germs
              and bacteria.
              <br />
              <br />
              They will ensure that glass doors and windows will be free from
              smudges , fingerprints, water marks for a clear polished.
              appearance.
              <br />
              <br />
              In the last process, all the trash bins will be emptied and waste
              will be properly disposed according to local regulations.
              Specialists will also separate recyclable materials and ensure
              they are placed in designated recycling containers for proper
              disposal.
              <br />
              <br />
              BY following our Best 1 Cleaners Professional office cleaning
              process, our office and commercial cleaning experts can deliver
              consistent, high quality cleaning services that create a clean,
              healthy and inviting environment for employees and visitors alike.
              <br />
              <br />
              We are happy feeling proud by offering high –quality cleaning
              solutions at competitive prices.  If you are thinking about
              whether it makes sense to call in a professional to clean a small
              portion of your office, don’t hesitate to reach out. We are
              available for all kinds of office cleaning jobs, no matter how big
              or small. Our comprehensive range of cleaning services includes
              tile cleaning, grout cleaning, upholstery cleaning, carpet
              cleaning, bond cleaning, window cleaning and more. Whether you
              only need your office windows cleaning or a combination of various
              office cleaning services, we are happy to customise a cleaning
              solution. We pride ourselves for offering high-quality cleaning
              solutions at competitive prices.
              <br />
              <br />
            </span>
          </div>

          <img src={teamImg} className={styles.ourStoryImg} alt="" />
          <b>
            Our comprehensive range of cleaning services includes tile cleaning,
            grout cleaning, upholstery cleaning, carpet cleaning, bond cleaning,
            window cleaning and more. Whether you only need your office windows
            cleaning or a combination of various office cleaning services, we
            are happy to customise a cleaning solution. We pride ourselves for
            offering high-quality cleaning solutions at competitive prices.
          </b>
        </div>
      </div>
    </>
  );
};

export default Office;
