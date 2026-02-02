import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
import Cocktails from "./components/cocktail.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./components/About.jsx";
import Hero from "./components/hero.jsx";
import Menu from "./components/Menu.jsx";
import Art from "./components/Art.jsx";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
};
export default App;
