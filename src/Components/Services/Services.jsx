import styles from "./Services.module.css";
import servicesData from "../../Assets/Data/services";
import { Link } from "react-router-dom";

function ServiceCard({ serviceName, imgURL, Icon, link }) {
  return (
    <Link
      to={link}
      className={styles.cardWrapper}
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <Icon className={styles.serviceLogo} />
      <span className={styles.serviceName}> {serviceName} </span>
    </Link>
  );
}

function Services() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.servicesHead}> Our Services </div>
      <div className={styles.container}>
        {servicesData.map((service) => {
          return (
            <ServiceCard
              link={service.link}
              serviceName={service.name}
              imgURL={service.imgURL}
              Icon={service.logo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
