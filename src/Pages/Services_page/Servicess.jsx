import styles from "../../Components/Services/Services.module.css";
import servicesData from "../../Assets/Data/services";
import coverPic from "../../Assets/Images/Contact/cover.jpg";
import { Navbar } from "../../Components";
import Upper_Footer from "../../Components/Upper_Footer/Upper_Footer";

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
      <Navbar />
      <div
        className={styles.contact_header}
        style={{ backgroundImage: `url(${coverPic})` }}
      >
        {" "}
        Our Services{" "}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {servicesData.map((service) => {
            return (
              <ServiceCard
                serviceName={service.name}
                imgURL={service.imgURL}
                Icon={service.logo}
              />
            );
          })}
        </div>
        <Upper_Footer/>
      </div>
    </>
  );
}

export default Servicess;
