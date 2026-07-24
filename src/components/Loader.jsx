import { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import "./Loader.css";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  return base + clean;
};

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate smooth progress (0 → 100)
    let start = 0;
    const interval = setInterval(() => {
      start += Math.random() * 8 + 2; // random increment
      if (start >= 100) {
        start = 100;
        clearInterval(interval);
        // Wait a bit, then fade out
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => onFinish && onFinish(), 800);
        }, 400);
      }
      setProgress(Math.min(start, 100));
    }, 100);

    // Also wait for window load event as fallback
    const handleLoad = () => {
      start = 100;
      setProgress(100);
    };
    window.addEventListener("load", handleLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, [onFinish]);

  return (
    <div className={`loader ${fadeOut ? "loader--fade-out" : ""}`}>
      {/* Background orbs */}
      <div className="loader__orb loader__orb--1"></div>
      <div className="loader__orb loader__orb--2"></div>

      {/* Center content */}
      <div className="loader__content">
        {/* Logo — replace src with your actual logo path */}
        <div className="loader__logo-wrap">
          <img
            src={asset("assets/logo.png")}
            alt="Flexocon"
            className="loader__logo"
          />
        </div>

        {/* Rotating gears */}
        <div className="loader__gears">
          <FaCog className="loader__gear loader__gear--1" />
          <FaCog className="loader__gear loader__gear--2" />
          <FaCog className="loader__gear loader__gear--3" />
        </div>

        {/* Brand text */}
        <div className="loader__brand">
          <span className="loader__brand-text">FLEXOCON</span>
          <span className="loader__brand-sub">Engineering Excellence</span>
        </div>

        {/* Progress bar */}
        <div className="loader__progress-wrap">
          <div className="loader__progress-bar">
            <div
              className="loader__progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loader__progress-text">{Math.floor(progress)}%</div>
        </div>

        {/* Loading dots */}
        <div className="loader__dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
