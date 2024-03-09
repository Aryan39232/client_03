import { GiChickenOven } from "react-icons/gi";
import { GiBroom } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa6";
import { TbArmchair } from "react-icons/tb";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaTools } from "react-icons/fa";
import { SiWindows } from "react-icons/si";
import { GiWindow } from "react-icons/gi";
import { FaFan } from "react-icons/fa";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { GiFlowers } from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaVirusCovid } from "react-icons/fa6";

// Background Images
import imge from "../../Assets/Images/Services/sample4.jpg";
import sofa from "../../Assets/Images/Services/sofa.jpg";
import office from "../../Assets/Images/Services/office.jpg";
import sanitising from "../../Assets/Images/Services/cleaning1.jpg";

const servicesData = [
  {
    name: "Oven & BBQ Cleaning",
    imgURL: imge,
    logo: GiChickenOven,
    link: "/bbq-services",
  },
  {
    name: "Professional Matress Cleaning",
    imgURL: imge,
    logo: TbArmchair,
    link: "/mettress-services",
  },
  {
    name: "Office Cleaning",
    imgURL: office,
    logo: HiOfficeBuilding,
    link: "/office-services",
  },
  {
    name: "Carpet & Rug Cleaning",
    imgURL: imge,
    logo: GiBroom,
    link: "/Carpet-services",
  },
  {
    name: "Spring Cleaning",
    imgURL: imge,
    logo: GiFlowers,
    link: "/Spring-services",
  },
  {
    name: "Home Cleaning",
    imgURL: imge,
    logo: MdMapsHomeWork,
    link: "/Home-clean-services",
  },
  {
    name: "Gardening-services",
    imgURL: imge,
    logo: FaTools,
    link: "/Gardening-services",
  },

  {
    name: "Upholstery & Couch Cleaning",
    imgURL: sofa,
    logo: GiSofa,
    link: "/office-mettress",
  },
  {
    name: "End of Lease Cleaning",
    imgURL: imge,
    logo: FaDoorOpen,
    link: "/office-mettress",
  },
  {
    name: "Window Cleaning",
    imgURL: imge,
    logo: GiWindow,
    link: "/office-mettress",
  },
  {
    name: "Water Damage Restorage repair",
    imgURL: sanitising,
    logo: FaHouseFloodWaterCircleArrowRight,
    link: "/office-mettress",
  },
  // {name: "Antiviral Sanitising & Disinfection", imgURL: sanitising, logo: FaVirusCovid},
];

export default servicesData;
