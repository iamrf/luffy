import Footer from "./components/Footer";
import OnionPattern from "./components/assets/OnionPattern";
import FreeAnounce from "./components/home/FreeAnounce";
import HomeHero from "./components/home/Hero";
import HomeIntro from "./components/home/Intro";
import HomePlans from "./components/home/Plans";
import TelegramBanner from "./components/home/TelegramBanner";
import HomeTutorial from "./components/home/Tutorial";

function App() {
  return (
    <div className="App relative bg-dark text-white">
        <OnionPattern className="onion_animation absolute right-0 top-0 object-right-top origin-top-right" />
        <header className="App-header">
            <HomeHero />
        </header>
        <HomeIntro />
        <FreeAnounce />
        <HomePlans />
        <HomeTutorial />
        <TelegramBanner />

        <Footer />
    </div>
  );
}

export default App;
