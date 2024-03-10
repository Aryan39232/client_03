import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  ContactUs,
  Testimonials,
  Bbq,
  Office,
  Spring,
  Home_clean,
  Carpet,
  Gardening,
  EndOfLease,
} from "./Pages";
import { Footer, Navbar } from "./Components";
import Servicess from "./Pages/Services_page/Servicess";
import Upper_Footer from "./Components/Upper_Footer/Upper_Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Servicess />} />
          <Route path="/bbq-services" element={<Bbq />} />
          <Route path="/office-services" element={<Office />} />
          <Route path="/EndOfLease" element={<EndOfLease />} />
          <Route paht="/Spring-services" element={<Spring />} />
          <Route paht="/Home-clean-services" element={<Home_clean />} />
          <Route paht="/gardening-services" element={<Gardening />} />
          <Route paht="/Carpet-services" element={<Carpet />} />
        </Routes>
        <Upper_Footer />
        <Footer />
      </Router>
    </>
  );
}

export default App;
