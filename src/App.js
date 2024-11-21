import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ListItems from "./components/ListItems";
import Tabs from "./components/Tabs";
import TabsItems from "./components/TabsItems";
import ListMedia from "./components/ListMedia";
import Categories from "./components/Categories";

// Images
import WatchAgain from "./components/WatchAgain";
import Trends from "./components/Trends";
import Programs from "./components/Programs.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ListItems title={"Revoir"} items={WatchAgain} />
      <ListItems title={"Tendances actuelles"} items={Trends} />
      <Tabs items={TabsItems} />
      <ListMedia items={Programs} />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
