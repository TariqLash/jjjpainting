import { useEffect } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  useEffect(() => {
    document.title = "JJJ Painting"
  }, []);

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
              {/* <div className="divider ml-5 mr-5"></div> */}
              <About/>

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
