import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Buttons from "./Components/Buttons"
import Information from "./Components/Information";

function App() {
  return (
    <div className="App">
      <Buttons/>
      <Home />
      <Work />
      <Information />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
