import styles from "../about/about.module.css";
import randomImg from "../../Assets/Images/Final_img/1.jpg";
import teamImg from "../../Assets/Images/Final_img/1.jpg";
import aboutCoverImg from "../../Assets/Images/Final_img/1.jpg";

const Spring = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.heading}
          style={{ backgroundImage: `url(${aboutCoverImg})` }}
        >
          {" "}
          Spring{" "}
        </div>
        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}>
              {" "}
              "Spring Sparkle: Transforming Spaces, One Clean at a Time."{" "}
            </span>

            <span className={styles.ourStoryDesc}>
              Spring cleaning is a thorough and comprehensive cleaning process
              traditionally performed in households and sometimes in commercial
              spaces during the spring season. It involves deep cleaning and
              organizing various areas of a property to refresh and revitalize
              the living or working environment.
              <br />
              <br />
              It doesn’t matter if you are a minimalist or not at all things
              seem to keep gathering around you and dust keeps piling on. Spring
              cleaning typically involves cleaning and bedrooms, bathrooms,
              kitchens, and common areas.
              <br />
              <br />
              It may also include tasks such as decluttering, purging unused or
              unnecessary items, and reorganizing storage spaces to create a
              more functional and orderly environment.
              <br />
              <br />
              Deep cleaning tasks such as washing windows, dusting blinds,
              vacuuming upholstery, and cleaning hard-to-reach areas in the
              property.
              <br />
              <br />
              Spring cleaning doesn’t mean it can only be done in spring season.
              But, we have to do a deep clean of our home after every few
              months.
              <br />
              <br />
              We at best one cleaners provide spring cleaning service on
              once-off , regular basis, weekly or fortnightly. When you perform
              seasonal cleaning by ourselves , you have to face lots of dust and
              dirt everywhere. Your family members can also be affected by the
              dust and dirt. We also need cleaning after some occasions or up
              coming events like a birthday, a family diner, a holiday or some
              special event, in these times our best spring cleaners will come
              to you.
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
              Our Professional Spring Cleaning Methods
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
              Our Professional Spring Cleaning Methods{" "}
            </span>

            <span className={styles.ourStoryDesc}>
              The Best 1 Cleaners offers top notch professional spring cleaning
              services both for commercial and domestic properties! We make sure
              to strictly follow your priorities and guidelines for the clean to
              achieve full customer satisfaction and get back your property
              looks like a new.
              <br />
              <br />
              We provide spring cleaning service on hourly base. It means we
              will inform you our conversation on the size of the property ,
              areas needs to be done on priority, and then we will inform you
              that how much time it will take to our cleaners to complete the
              professional spring cleaning and we will also inform you the cost
              of the professional spring cleaning. One important and different
              thing from other that if our cleaners complete the cleaning before
              the time you booked then we will charge accordingly that.
              <br />
              <br />
              <ul>
                <li>
                   First of all our professional spring cleaners will assess
                  the property to determine the size , cleaning needs and
                  special areas that needs attention.
                </li>
                <li>
                   They may consult with the client to understand their
                  priorities and preference for the cleaning process.
                  <li></li> Then , they will start with the dusting as dusting
                  is performed systematically, starting from top to bottom, to
                  prevent dust from settling o already cleaned surfaces.
                  Specialists will use micro fibre cloths, duster, and vacuum
                  attachments to effectively remove dust from furniture,
                  shelves, baseboards, light fixtures and other surfaces.
                  <li></li> Floor will be thoroughly vacuumed or swept to
                  remove dirt , dust and debris. Our specialists will do deep
                  cleaning of kitchens and bathrooms, including counterparts,
                  sinks, appliances, cabinets and fixtures.
                  <li></li> Appliances such as stoves, ovens, refrigerator,
                  dishwashers and microwaves will be cleaned inside and outside
                  to remove grease and food debris and stains. ( with little
                  extra charge )<li></li> In the last stage , our experts will
                  perform final touches to ensure that all areas are cleaned ,
                  organized and visually appealing.
                </li>
              </ul>
            </span>
          </div>

          <img src={teamImg} className={styles.ourStoryImg} alt="" />

          <b>
            By following our Best 1 Cleaners this method , experts can deliver
            comprehensive spring cleaning services that rejuvenate and enhance
            the living or working environment, creating a clean, healthy, and
            inviting space for your loved ones to enjoy.
          </b>
        </div>
      </div>
    </>
  );
};

export default Spring;
