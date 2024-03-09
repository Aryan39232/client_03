import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "../../Assets/Images/new_logo.png";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* <Logo /> */}
          <img src={Logo} alt="logo" className={styles.logo} onClick={() => navigate("/")}/>
        <div className={styles.menu_icon} onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div
          className={`${styles.nav_elements}  ${showNavbar && styles.active}`}
        >
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/services">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
            <li>
              <NavLink to="/testimonials">TESTIMONIALS</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

export default Navbar;
