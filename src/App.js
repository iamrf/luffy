import FreeAnounce from "./components/home/FreeAnounce";
import HomeHero from "./components/home/Hero";
import HomeIntro from "./components/home/Intro";
import HomePlans from "./components/home/Plans";

function App() {
  return (
    <div className="App bg-dark text-white">
        <header className="App-header">
            <HomeHero />
        </header>
        <HomeIntro />
        <FreeAnounce />
        <HomePlans />
    </div>
  );
}

export default App;
