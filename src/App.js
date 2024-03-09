import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div data-theme="light">
      <Navbar/>
      <Hero/>
      <h1 className="w-full text-center mt-8 mb-3 text-5xl font-bold">Services</h1>
      <Services/>
    </div>
  );
}

export default App;
