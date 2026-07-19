import React, { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesContainer: React.FC = () => {
  // Stable init function across component rerenders
  const customInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={customInit}>
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <Particles
          id="tsparticles"
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 180,
                  links: {
                    opacity: 0.35,
                    color: "#FF9100",
                  },
                },
              },
            },
            particles: {
              color: {
                value: ["#E53935", "#FF9100", "#9C27B0"],
              },
              links: {
                color: "#9C27B0",
                distance: 130,
                enable: true,
                opacity: 0.12,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.6,
                straight: false,
              },
              number: {
                value: 60,
              },
              opacity: {
                value: { min: 0.15, max: 0.4 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </ParticlesProvider>
  );
};

export default ParticlesContainer;
