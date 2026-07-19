import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import ParticlesContainer from "./components/ParticlesContainer";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [videoMuted, setVideoMuted] = useState(true);

  // Handle page scrolling section indicators
  useEffect(() => {
    if (loading) return;

    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "research",
      "education",
      "achievements",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger active section when it occupies center of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [loading]);

  // Auto-mute background video when scrolling away from home section
  useEffect(() => {
    if (activeSection !== "home") {
      setVideoMuted(true);
    }
  }, [activeSection]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-[#050816] text-white">
          {/* Custom Mouse Follower Cursor */}
          <CustomCursor />

          {/* Interactive Background Particles Network */}
          <ParticlesContainer />

          {/* Morphing Capsule Navigation */}
          <Navbar activeSection={activeSection} />

          {/* Main Content Layout */}
          <main>
            {/* Hero Section holds the full screen video backdrop */}
            <div className="relative min-h-screen">
              <BackgroundVideo muted={videoMuted} />
              <Hero 
                onScrollToSection={handleScrollToSection} 
                videoMuted={videoMuted} 
                onToggleMute={() => setVideoMuted(!videoMuted)} 
              />
            </div>

            <About />
            
            <Skills />
            
            <Internship />
            
            <Projects />
            
            <Research />
            
            <Education />
            
            <Certifications />
            
            <Achievements />
            
            <Contact />
          </main>

          {/* Footer coordinates */}
          <Footer onScrollToSection={handleScrollToSection} />
        </div>
      )}
    </>
  );
}

export default App;
