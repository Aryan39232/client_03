import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  ContactUs,
  Testimonials,
  Bbq,
  Office,
  Professional_Mettress,
  Spring,
  Home_clean,
  Gardening,
  Carpet,
} from "./Pages";
import { Footer } from "./Components";
import Servicess from "./Pages/Services_page/Servicess";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Servicess />} />
          <Route path="/bbq-services" element={<Bbq />} />
          <Route path="/office-services" element={<Office />} />
          <Route
            path="/mettress-services"
            element={<Professional_Mettress />}
          />
          <Route paht="/Spring-services" element={<Spring />} />
          <Route paht="/Home-clean-services" element={<Home_clean />} />
          <Route paht="/Gardening-services" element={<Gardening />} />
          <Route paht="/Carpet-services" element={<Carpet />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
