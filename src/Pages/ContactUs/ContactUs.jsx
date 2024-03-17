import styles from "./ContactUs.module.css";
import coverPic from "../../Assets/Images/Contact/cover.jpg";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
function ContactUs() {
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
              <p> 39 Middle street , coopers plains QLD 4108</p>
              <p>0411786128</p>
            </div>

            <div className={styles.location}>
              <h3>Gold Coast</h3>
              <p>18a Robe ct, Helensvale, QLD 4212</p>
              <p>0411786128</p>
            </div>

            {/* <div className={styles.location}>
              <h3>Sunshine Coast</h3>
              <p>Building 1/30 Chancellor Village Blvd, Sippy Downs QLD 4556</p>
              <p>07 3040 7377</p>
            </div> */}
          </div>

          <form className={styles.contact_form} onSubmit={handleSubmit}>
            <span className={styles.formHeader}>SEND A MESSAGE</span>

            <div className={styles.formField}>
              <div className={styles.label}>Full Name</div>
              <input
                className={styles.formInput}
                type="text"
                id="fullName"
                required
                name="fullName"
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formField}>
              <div className={styles.label}>Email</div>
              <input
                className={styles.formInput}
                type="email"
                onChange={handleInputChange}
                id="email"
                required
                name="email"
              />
            </div>

            <div className={styles.formField}>
              <div className={styles.label}>Phone</div>
              <input
                className={styles.formInput}
                type="tel"
                required
                id="phone"
                onChange={handleInputChange}
                name="phoneNumber"
              />
            </div>

            <div className={styles.formField}>
              <div className={styles.label}> Job Description </div>
              <textarea
                className={styles.formInput}
                id="jobDescription"
                name="jobDescription"
                onChange={handleInputChange}
                rows="4"
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

export default ContactUs;
