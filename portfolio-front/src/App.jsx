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
  VscSettingsGear,
} from "react-icons/vsc";
import Photo from "./components/Photo";


function App() {
  return (
    <>
      <div>
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
      </div>
      <Photo/>
      
      <Dock
        items={[
          { icon: <VscHome size={25} color="white" />, label: "Home" },
          { icon: <VscArchive size={25} color="white" />, label: "Projects" },
          { icon: <VscAccount size={25} color="white" />, label: "About" },
          {
            icon: <VscSettingsGear size={25} color="white" />,
            label: "Settings",
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
