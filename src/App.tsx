import "./App.css";
import { NavBar } from "./components/NavigationBar";
import Banner from "./components/Banner";
import { HomePageCards } from "./components/HomePageCards";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Banner />
        <HomePageCards />
      </div>
  );
}

export default App;
