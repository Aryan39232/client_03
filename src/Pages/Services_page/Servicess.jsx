import styles from "../../Components/Services/Services.module.css";
import coverPic from "../../Assets/Images/Contact/cover.jpg";
import { Services } from "../../Components";

function ServiceCard({ serviceName, imgURL, Icon }) {
  return (
    <div
      className={styles.cardWrapper}
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <Icon className={styles.serviceLogo} />
      <span className={styles.serviceName}> {serviceName} </span>
    </div>
  );
}
function Servicess() {
  return (
    <>
      <div
        className={styles.contact_header}
        style={{ backgroundImage: `url(${coverPic})` }}
      >
        {" "}
        Our Services{" "}
      </div>
      <div className={styles.wrapper}>
        <Services />
      </div>
    </>
  );
}

export default Servicess;
