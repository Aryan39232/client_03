import styles from "./home.module.css";
import { Carousel, Navbar, Services } from "../../Components";
import { useNavigate } from "react-router-dom";
import homeCoverPic from "../../Assets/Images/Final_img/7.jpg";
import livingRoom from "../../Assets/Images/Final_img/1.jpg";
import { IoCall } from "react-icons/io5";
import "./modal.css";
// Card Images
import priceCoverPic1 from "../../Assets/Images/Home/cleaning-sample.jpg";
import priceCoverPic2 from "../../Assets/Images/Home/cleaning-sample-2.jpg";
import priceCoverPic3 from "../../Assets/Images/Home/cleaning-sample-3.jpg";
import priceCoverPic4 from "../../Assets/Images/Home/cleaning-sample-4.jpg";

// client images
import mcDonalds from "../../Assets/Images/Home/mcdonalds.png";
import bright_start from "../../Assets/Images/Home/bright_start.png";
import child_care from "../../Assets/Images/Home/child_care.jpg";

// Feature Icons
import { TbLicense } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import Upper_Footer from "../../Components/Upper_Footer/Upper_Footer";
import { useEffect, useState } from "react";
import Testimonials from "../Testimonial/Testimonials";
import emailjs from "@emailjs/browser";

function Home() {
  const navigate = useNavigate();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [show, setShow] = useState(false);
  const closeBtn = () => {
    setShow(false);
  };
  const options = {
    publicKey: process.env.REACT_PUBLIC_KEY,
    // Do not allow headless browsers
    blockHeadless: true,
    limitRate: {
      // Set the limit rate for the application
      id: "best1_cleaners",
      // Allow 1 request per 10s
      throttle: 1000,
    },
  };
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    phoneNumber: "",
    fullName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace these with your actual email service, template ID, and user ID
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    console.log("serviceId: ", serviceId);
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    console.log("templateId: ", templateId);

    try {
      await emailjs.send(serviceId, templateId, formData, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      });

      // Clear form data after successful submission
      setFormData({
        email: "",
        phoneNumber: "",
        message: "",
        fullName: "",
      });

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  useEffect(() => {
    emailjs.init(options);
  }, []);

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
  const handleModal = () => {
    console.log("Click modal");
    setShow(true);
  };
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
              <IoCall /> &nbsp; +61 411786128
            </div>
            <div className={styles.GETQUOTE} id="myBtn" onClick={handleModal}>
              GET A QUOTE
            </div>
          </div>
        </div>
        <div
          className={styles.CoverPic}
          style={{ backgroundImage: `url(${homeCoverPic})` }}
        >
          <div className={styles.coverContent}>
            <span className={styles.CoverText}>
              Your Local Commercial & Residential Cleaning company
            </span>
            <span className={styles.CoverDesc}>
              {" "}
              Your Local cleaners providing all type of domestic and commercial
              cleaning services in most of the main cities of Australia
              including . Here are the list of areas we serve Brisbane, Gold
              Coast, Melbourne, Sydney, Perth, Adelaide as well as Sunshine
              Coast..
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
              WHY ‘’ BEST 1 CLEANERS ‘’ IS THE BEST COMMERCIAL AND DOMESTIC
              CLEANERS BRISBANE ?
            </span>
            <span className={styles.leftDesc}>
              Best 1 Cleaners is a commercial and domestic cleaning company with
              fully trained and police verified cleaners who are committed to
              provide excellent cleaning service. We are an ISO 9001:2015
              certified cleaning company and we have passed all the requirements
              of quality management system. Now , we are serving the commercial
              and domestic cleaning services to Brisbane, Melbourne, Sydney,
              Adelaide, and Perth. <br />
              <br />
              At Best 1 Cleaners , we understand the importance of maintaining a
              clean and sanitary environment, whether it’s your home or
              workplace. With our unwavering commitment to excellence and
              attention to detail, we deliver top-quality cleaning service
              tailored to meet the unique needs of our residential and
              commercial clients.
            </span>
            {/* <div className={styles.viewAllServicesBtn}> View All Services </div> */}
          </div>

          <img
            src={livingRoom}
            className={styles.aboutServicesImg}
            alt="services-image"
          />
        </div>

        {/* BOOK NOW SECTION */}
        <div className={styles.bookSectionWrapper}>
          <div className={styles.bookSectionHead}>Local cleaners near you!</div>
          <div className={styles.bookSectionDesc}>
            We serve both residential and commercial customers, and we can
            proudly say that Best 1 Cleaners is a one-stop-shop for all your
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
        {/* Our Clients Section */}
        <div className={styles.clientContainer}>
          <h1 className={styles.featureCardHead}>Our Clients</h1>
          <div>
            <div className={styles.featureCard}>
              <img src={mcDonalds} alt="" />
            </div>
            <div className={styles.featureCard}>
              <img src={child_care} alt="" />
            </div>
            <div className={styles.featureCard}>
              <img src={bright_start} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel /> */}
      <Testimonials />
      <div
        id="myModal"
        className="modal"
        style={{ display: show ? "block" : "none" }}
      >
        <div className="modal-content">
          <span className="close" onClick={closeBtn}>
            &times;
          </span>
          <form className={styles.contact_form} onSubmit={handleSubmit}>
            <span className={styles.formHeader}>SEND A MESSAGE</span>

            <div className={styles.input_group}>
              <div className={styles.formField}>
                <div className={styles.label}>Full Name</div>
                <input
                  className={styles.formInput}
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  name="fullName"
                  required
                />
              </div>

              <div className={styles.formField}>
                <div className={styles.label}>Email</div>
                <input
                  required
                  className={styles.formInput}
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                />
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.label}>Phone</div>
              <input
                required
                className={styles.formInput}
                type="tel"
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formField}>
              <div className={styles.label}> Job Description </div>
              <textarea
                className={styles.formInput}
                id="jobDescription"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button className={styles.submitBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
