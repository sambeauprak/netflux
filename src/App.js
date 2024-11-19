import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ListItems from "./components/ListItems";

// Images
import WatchAgain from "./components/WatchAgain";
import Trends from "./components/Trends";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ListItems title={"Revoir"} items={WatchAgain} />
      <ListItems title={"Tendances actuelles"} items={Trends} />
      <Footer />
    </div>
  );
}

export default App;
