import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Information from "./Components/Information";
import Carts from "./Components/Carts";

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Contact />
      <About />
      <Carts />
      <Information />
    </div>
  );
}

export default App;
