import styles from "./home.module.css";
import { Carousel, Navbar, Services } from "../../Components";
import { useNavigate } from "react-router-dom";
import homeCoverPic from "../../Assets/Images/Home/home1.jpg";
import livingRoom from "../../Assets/Images/Home/livingRoom.jpg";
import { IoCall } from "react-icons/io5";

// Card Images
import priceCoverPic1 from "../../Assets/Images/Home/cleaning-sample.jpg";
import priceCoverPic2 from "../../Assets/Images/Home/cleaning-sample-2.jpg";
import priceCoverPic3 from "../../Assets/Images/Home/cleaning-sample-3.jpg";
import priceCoverPic4 from "../../Assets/Images/Home/cleaning-sample-4.jpg";

// Feature Icons
import { TbLicense } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import Upper_Footer from "../../Components/Upper_Footer/Upper_Footer";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos != 0;
      setIsScrolledDown(isScrollingDown);
      prevScrollPos = currentScrollPos;
      console.log(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={styles.wrapper} style={{ position: "relative" }}>
        {/* Landing cover */}

        <div
          className={`${styles.FixedRightContent} ${
            !isScrolledDown ? "" : styles.Hidden
          }`}
        >
          <div className={styles.RightAlignedContent}>
            <div className={styles.CallUS}>
              <IoCall /> &nbsp; +91 9876543210
            </div>
            <div className={styles.GETQUOTE}>GET A QUOTE</div>
          </div>
        </div>
        <div
          className={styles.CoverPic}
          style={{ backgroundImage: `url(${homeCoverPic})` }}
        >
          <div className={styles.coverContent}>
            <span className={styles.CoverText}>
              {" "}
              Domestic & Commertial Cleaning{" "}
            </span>
            <span className={styles.CoverDesc}>
              {" "}
              Local cleaners providing residential and commercial cleaning
              services in Brisbane, Gold Coast, Melbourne, Sydney, Perth,
              Adelaide, Hobart and Sunshine Coast{" "}
            </span>
            <button
              className={styles.coverBtn}
              onClick={() => navigate("/services")}
            >
              {" "}
              SERVICES{" "}
            </button>
          </div>
        </div>

        {/* LIST OF SERVICES */}
        <div className={styles.servicesHead}> Our Services </div>
        <Services />

        {/* SERVICES DESCRIPTION */}
        <div className={styles.aboutServices}>
          <div className={styles.servicesLeft}>
            <span className={styles.leftHead}>
              {" "}
              How can our professional cleaning services make a difference?{" "}
            </span>
            <span className={styles.leftDesc}>
              Hire our professional cleaning services and you'll be thrilled to
              see the results that we deliver in a short amount of time. We make
              your home or workplace look just as impressive as it was when you
              moved in. Thanks to our commercial-gr ade equipment and effective
              cleaning products, no amount of dirt, grime or stains stand a
              chance.
            </span>
            <div className={styles.viewAllServicesBtn}> View All Services </div>
          </div>

          <img
            src={livingRoom}
            className={styles.aboutServicesImg}
            alt="services-image"
          />
        </div>

        {/* PRICES & DISCOUNTS DESCRIPTION */}
        {/* <div className={styles.priceSectionWrapper}>
          <div className={styles.priceCardsWrapper}>
            
            <div
              className={styles.cardWrapper}
              style={{ backgroundImage: `url(${priceCoverPic1})` }}
            >
              <span className={styles.priceCardDesc}>
                {" "}
                $50 OFF + Free Backyard Cleaning{" "}
              </span>
              <span className={styles.priceCardTitle}> Bond Cleaning </span>
            </div>

            
            <div
              className={styles.cardWrapper}
              style={{ backgroundImage: `url(${priceCoverPic2})` }}
            >
              <span className={styles.priceCardDesc}> $49/h </span>
              <span className={styles.priceCardTitle}> Spring Cleaning </span>
            </div>

            
            <div
              className={styles.cardWrapper}
              style={{ backgroundImage: `url(${priceCoverPic3})` }}
            >
              <span className={styles.priceCardDesc}>
                {" "}
                $50 OFF & Half Price on Range Hood/Stage Top{" "}
              </span>
              <span className={styles.priceCardTitle}> Oven Cleaning </span>
            </div>

          
            <div
              className={styles.cardWrapper}
              style={{ backgroundImage: `url(${priceCoverPic4})` }}
            >
              <span className={styles.priceCardDesc}>
                {" "}
                $50 OFF + Free Hallway{" "}
              </span>
              <span className={styles.priceCardTitle}> Carpet Cleaning </span>
            </div>
          </div>

          <div className={styles.priceSectionHead}>
            <b> "Best1 Bond Clean" </b> is a one-stop-shop for all your cleaning
            needs.
          </div>
          <div className={styles.priceSectionDesc}>
            We have a simple mission - to serve our client with excellence and
            deliver brilliant work. Essentially our purpose is serving our
            clients with great respect, care and keep your home and workplace
            clean, so you can focus on your important goals.
          </div>
          <div className={styles.checkPriceBtn}>CHECK ALL PRICES</div>
        </div> */}

        {/* BOOK NOW SECTION */}
        <div className={styles.bookSectionWrapper}>
          <div className={styles.bookSectionHead}>Local cleaners near you!</div>
          <div className={styles.bookSectionDesc}>
            We serve both residential and commercial customers, and we can
            proudly say that Optima Cleaners is a one-stop-shop for all your
            cleaning needs. Our main goal is to provide quality cleaning
            services at affordable rates and build a long term relationship with
            our clients.
          </div>

          <div className={styles.featuresWrapper}>
            {/* FEATURE 1 */}
            <div className={styles.featureCard}>
              <IoTimer className={styles.featureLogo} />
              <span className={styles.featureCardHead}>
                {" "}
                Local and Flexible{" "}
              </span>
              <span className={styles.featureCardDesc}>
                {" "}
                Experienced local cleaners able to perform same day services.{" "}
              </span>
            </div>

            {/* FEATURE 2 */}
            <div className={styles.featureCard}>
              <TbLicense className={styles.featureLogo} />
              <span className={styles.featureCardHead}>
                {" "}
                Licensed and Insured{" "}
              </span>
              <span className={styles.featureCardDesc}>
                {" "}
                All cleaners are licensed and fully insured for your peace of
                mind.{" "}
              </span>
            </div>

            {/* FEATURE 3 */}
            <div className={styles.featureCard}>
              <FaRegCalendarCheck className={styles.featureLogo} />
              <span className={styles.featureCardHead}>
                {" "}
                7-day Availability{" "}
              </span>
              <span className={styles.featureCardDesc}>
                {" "}
                We work weekends and public holidays at no extra charges.{" "}
              </span>
            </div>
          </div>

          <div className={styles.bookNowBtn}>GET QUOTE</div>
        </div>

        {/* Founder's Message */}
      </div>
      <Carousel />
    </>
  );
}

export default Home;
