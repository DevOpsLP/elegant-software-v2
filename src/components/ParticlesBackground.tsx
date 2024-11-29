// src/components/ParticlesBackground.tsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Set background to transparent
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Disable interactivity on click
          },
          onHover: {
            enable: false, // Disable interactivity on hover
          },
          resize: {
            enable: true, // Corrected to be an object
            delay: 0.5,   // Optional delay
          },
        },
      },
      particles: {
        color: {
          value: "#6db3f2", // Soft blue color for bubbles
        },
        links: {
          enable: false, // Disable lines between particles
        },
        move: {
          direction: "top", // Particles move upwards
          enable: true,
          outModes: {
            default: "out", // Particles disappear when leaving the canvas
          },
          random: false,
          speed: 0.8, // Slower speed for gentle upward movement
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 700, // Adjust area for density calculation
          },
          value: 80, // Number of particles (adjust as needed)
        },
        opacity: {
          value: { min: 0.2, max: 0.5 }, // Semi-transparent bubbles
        },
        shape: {
          type: "circle", // Shape of particles as circles
        },
        size: {
          value: { min: 10, max: 20 }, // Larger sizes to resemble bubbles
          random: true,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0, 
        }}
      />
    );
  }

  return null;
};

export default ParticlesBackground;
