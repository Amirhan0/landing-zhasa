import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Information from "./Components/Information";
import Carts from "./Components/Carts";

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Information />
      <About />
      <Carts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
