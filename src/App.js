import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-base-200">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
              <Hero />
              <Services/>
              <Form/>
              </>
            }
          />
          <Route
            path="/services"
            element={
              <Services />
            }
          />
          <Route
            path="/about"
            element={
              <About/>
            }
          />
           <Route
            path="/contact"
            element={
              <Contact/>
            }
          />
          <Route
            path="/form"
            element={
              <Form/>
            }
          />
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
