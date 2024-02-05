import "./App.css";
import { NavBar } from "./components/NavigationBar";
import Banner from "./components/Banner";
import { HomePageCards } from "./components/HomePageCards";
import { AboutMePage } from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home" className="sectionContainer">
        <Banner />
        <HomePageCards />
      </section>
      <section id="about" className="sectionContainer">
        <AboutMePage />
      </section>
    </div>
  );
}

export default App;
