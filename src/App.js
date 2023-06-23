import HomeHero from "./components/home/Hero";
import HomeIntro from "./components/home/Intro";

function App() {
  return (
    <div className="App bg-dark text-white">
        <header className="App-header">
            <HomeHero />
        </header>
        <HomeIntro />
    </div>
  );
}

export default App;
