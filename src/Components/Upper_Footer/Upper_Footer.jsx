import React from "react";
import styles from "./Upper_Footer.module.css";
import contactCoverPic from "../../Assets/Images/Final_img/11.jpg";

function Upper_Footer() {
  return (
    <div
      className={styles.quoteCoverPic}
      style={{ backgroundImage: `url(${contactCoverPic})` }}
    >
      <div className={styles.quoteCoverContent}>
        <span className={styles.quoteCoverText}>
          “Our mission is serving our clients. Everyone who works with us is our
          client. So essentially our mission is our client's mission”
        </span>
        <span className={styles.quoteCoverDesc}>
          {" "}
          Mehul - Director, Best1 Bond Cleaning{" "}
        </span>
        {/* <div className={styles.quoteCoverBtn}> CONTACT US </div> */}
      </div>
    </div>
  );
}

export default Upper_Footer;
