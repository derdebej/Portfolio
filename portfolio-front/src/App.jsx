import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Particles from "./components/Particles";
import Dock from "./components/NavBar";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscMortarBoard,
} from "react-icons/vsc";
import HomeSection from "./components/HomeSection";

function App() {
  return (
    <>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={1000}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />

      <section id="Home" className="h-screen text-white">
        <HomeSection/>
      </section>

      <section id="About" className="h-screen  text-white">
        <h1 className="text-6xl">About Me</h1>
      </section>

      <section id="Projects" className="h-screen  text-white">
        <h1 className="text-6xl">Projects</h1>
      </section>

      <Dock
        items={[
          { icon: <VscHome size={25} color="white" />, label: "Home" },
          { icon: <VscArchive size={25} color="white" />, label: "Projects" },
          { icon: <VscAccount size={25} color="white" />, label: "About" },
          {
            icon: <VscMortarBoard size={25} color="white" />,
            label: "Education",
          },
        ]}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  );
}

export default App;
