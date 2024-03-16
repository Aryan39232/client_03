import React from "react";
import styles from "./footer.module.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import LogoImage from "../../Assets/Images/new_logo.png";

const Footer = () => {
  return (
    <div className={styles.sb_footer}>
      <div className={styles.sb_footer_link}>
        <div className={styles.sub_footer_div_link}>
          <h4>Menu</h4>
          <a href="/home">
            <p>Home</p>
          </a>
          <a href="./about/about">
            <p>About Us</p>
          </a>
          <a href="/Contact Us">
            <p>Contact Us</p>
          </a>
          <a href="/Testimonials">
            <p>Testimonials</p>
          </a>

          <img src={LogoImage} className={styles.footerImg} size={20} alt="" />
        </div>

        <div className={styles.sub_footer_div_link}>
          <h4>SERVICES</h4>
          <a href="/End Of Lease Cleaning">
            <p>End Of Lease Cleaning</p>
          </a>
          <a href="/After Builders Cleaning">
            <p>After Builders Cleaning</p>
          </a>
          <a href="/Home Cleaning">
            <p>Home Cleaning</p>
          </a>
          <a href="/Office Cleaning">
            <p>Office Cleaning</p>
          </a>
          <a href="/Upholstery and Couch Cleaning">
            <p>Upholstery and Couch Cleaning</p>
          </a>
          <a href="/Tile and Grout Cleaning">
            <p>Tile and Grout Cleaning</p>
          </a>
          <a href="/Spring Cleaning">
            <p>Spring Cleaning</p>
          </a>
        </div>

        <div className={styles.sub_footer_div_link}>
          <h4>CONTACT US</h4>
          <div className={styles.footer_sub_add}>
            <p>
              <b>EMAIL</b>
            </p>
            <p>Admin@bestone1cleaners.com.au</p>
            <p>
              <b>PHONE</b>
            </p>
            <p>0411786128</p>
          </div>
          <div className={styles.socialmedia}>
            <p>
              {" "}
              <a
                href="https://www.facebook.com/people/BEST-1-cleaners/61554789891062/?sk=about"
                target="black"
              >
                <FaTwitter size={20} />
              </a>{" "}
            </p>
            <p>
              {" "}
              <a
                href="https://www.facebook.com/people/BEST-1-cleaners/61554789891062/?sk=about"
                target="black"
              >
                <FaInstagram size={20} />
              </a>{" "}
            </p>
            <p>
              <a
                href="https://www.facebook.com/people/BEST-1-cleaners/61554789891062/?sk=about"
                target="black"
              >
                <FaFacebook size={20} />
              </a>{" "}
            </p>
          </div>
        </div>

        <div
          className={`${styles.sub_footer_div_link} ${styles.sub_footer_working}`}
        >
          <h4>WORKING HOURS</h4>
          <div className={styles.footer_sub_add}>
            <p>
              {" "}
              <b>Mon-Fri</b> : 8am to 7pm{" "}
            </p>
            <p>
              {" "}
              <b>Sat</b> : 8am to 5pm{" "}
            </p>
            <p>
              {" "}
              <b>Sun</b> : off{" "}
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.sb__footer_below}>
        <div className={styles.sb__footer_copyright}>
          <p>© {new Date().getFullYear()} Mehul. All rights reserved.</p>
        </div>
        <div className={styles.sb_footer_below_links}>
          <a href="">
            <div>
              <p>Term & Conditions</p>
            </div>
          </a>
          <a href="">
            <div>
              <p>Privacy</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
