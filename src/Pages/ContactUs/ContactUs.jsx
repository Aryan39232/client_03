import styles from "./ContactUs.module.css";
import { Navbar } from "../../Components";
import coverPic from "../../Assets/Images/Contact/cover.jpg";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Upper_Footer from "../../Components/Upper_Footer/Upper_Footer";

function ContactUs() {
  return (
    <>
      <div className={styles.contact_us}>
        {/* HEAD */}
        <div
          className={styles.contact_header}
          style={{ backgroundImage: `url(${coverPic})` }}
        >
          {" "}
          CONTACT US{" "}
        </div>

        {/* CONTACT INFORMATION */}
        <div className={styles.contact_info}>
          <div className={styles.info_section}>
            <span className={styles.contactName}>Email</span>
            <span className={styles.contactDetail}>mehul@gmail.com</span>
          </div>

          <div className={styles.info_section}>
            <span className={styles.contactName}>Phone</span>
            <span className={styles.contactDetail}>+1 123 456 7890</span>
          </div>

          <div className={styles.info_section}>
            <span className={styles.contactName}>Working Hours</span>
            <span className={styles.contactDetail}>
              Mon-Fri 8am to 7pm <br />
              Sat-Sun 8am to 5pm <br />
            </span>
          </div>

          <div className={styles.info_section}>
            <span className={styles.contactName}>Social</span>
            <span className={styles.contactDetail}>
              <p>
                {" "}
                <a href="https://www.x.com/" target="black">
                  <FaTwitter size={20} />
                </a>{" "}
              </p>
              <p>
                {" "}
                <a href="https://www.instagram.com/" target="black">
                  <FaInstagram size={20} />
                </a>{" "}
              </p>
              <p>
                <a href="https://www.fb.com/" target="black">
                  <FaFacebook size={20} />
                </a>{" "}
              </p>
            </span>
          </div>
        </div>

        <div className={styles.contactFormAndAddress}>
          <div className={styles.contact_locations}>
            <span className={styles.locationHeader}>Our Locations</span>

            <div className={styles.location}>
              <h3>Brisbane</h3>
              <p>5/505 Boundary street, Springhill 4000</p>
              <p>07 3040 7377</p>
            </div>

            <div className={styles.location}>
              <h3>Gold Coast</h3>
              <p>Optima Cleaners Southport, Geoffrey Avenue, Southport QLD</p>
              <p>07 3040 7377</p>
            </div>

            <div className={styles.location}>
              <h3>Sunshine Coast</h3>
              <p>Building 1/30 Chancellor Village Blvd, Sippy Downs QLD 4556</p>
              <p>07 3040 7377</p>
            </div>
          </div>

          <div className={styles.contact_form}>
            <span className={styles.formHeader}>SEND A MESSAGE</span>

            <div className={styles.formField}>
              <div className={styles.label}>Full Name</div>
              <input
                className={styles.formInput}
                type="text"
                id="fullName"
                name="fullName"
              />
            </div>

            <div className={styles.formField}>
              <div className={styles.label}>Email</div>
              <input
                className={styles.formInput}
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div className={styles.formField}>
              <div className={styles.label}>Phone</div>
              <input
                className={styles.formInput}
                type="tel"
                id="phone"
                name="phone"
              />
            </div>

            <div className={styles.formField}>
              <div className={styles.label}> Job Description </div>
              <textarea
                className={styles.formInput}
                id="jobDescription"
                name="jobDescription"
                rows="4"
              />
            </div>

            <div className={styles.submitBtn}>Submit</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
