import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components";
import Experience from "./components/Experience";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <div className="relative z-0 ">
          <Experience />
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
