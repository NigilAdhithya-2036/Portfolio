import React, { useRef, useEffect, useState } from "react";

interface BackgroundVideoProps {
  muted: boolean;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ muted }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Sync muted prop with video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  // Fallback interactive grid/particle animation on canvas if video fails/is missing
  useEffect(() => {
    if (videoLoaded && !videoError) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Initialize stars/nodes
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.fillStyle = "#05040a";
      ctx.fillRect(0, 0, width, height);

      // Draw futuristic grids
      ctx.strokeStyle = "rgba(229, 57, 53, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary collision
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = idx % 2 === 0 ? "#E53935" : "#FF9100";
        ctx.fill();

        // Connect particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p2.x - p.x, p2.y - p.y);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.12;
            ctx.strokeStyle = `rgba(156, 39, 176, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Ambient lighting blobs in center
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width * 0.4
      );
      gradient.addColorStop(0, "rgba(229, 57, 53, 0.08)");
      gradient.addColorStop(1, "rgba(5, 4, 10, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [videoLoaded, videoError]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none">
      {/* Fallback Canvas */}
      {(!videoLoaded || videoError) && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Dark and futuristic radial overlay on background/canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg/60 via-darkBg/70 to-darkBg z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,8,22,0.1)_0%,#050816_80%)] z-[2]" />

      {/* Hero Video (aligned to the right side on desktop) */}
      {!videoError && (
        <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full overflow-hidden z-[3]">
          <video
            ref={videoRef}
            src="/hero-bg.mp4"
            autoPlay
            muted={muted}
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => {
              console.warn("Hero background video not found or failed to load. Falling back to digital mesh canvas.");
              setVideoError(true);
            }}
          />
          {/* Ambient Fade Overlays to blend video into the dark background */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-darkBg via-darkBg/60 to-transparent z-[4]" />
          <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-darkBg via-darkBg/50 to-transparent z-[4]" />
          <div className="absolute top-0 inset-x-0 h-1/6 bg-gradient-to-b from-darkBg to-transparent z-[4]" />
        </div>
      )}
    </div>
  );
};

export default BackgroundVideo;
