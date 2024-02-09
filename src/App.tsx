import "./App.css";
import { NavBar } from "./components/NavigationBar";
import Banner from "./components/Banner";
import { HomePageCards } from "./components/HomePageCards";
import { AboutMePage } from "./components/AboutMe";
import { WorkExp } from "./components/WorkExp";
import { Projects } from "./components/Projects";

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
      <section id='work' className="sectionContainer">
        <WorkExp />
      </section>
      <section id='projects' className="sectionContainer">
        <Projects />
      </section>
    </div>
  );
}

export default App;
