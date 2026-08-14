import { useState, useEffect, useRef } from "react";
import {
  FaIndustry,
  FaOilCan,
  FaBolt,
  FaCubes,
  FaLeaf,
  FaShip,
  FaScroll,
  FaCog,
  FaAward,
  FaUsers,
  FaStar,
  FaGlobeAmericas,
  FaHandshake,
  FaChevronRight,
  FaCircle,
} from "react-icons/fa";
import "./Clients.css";
import Navbar from "../../components/Navbar/Navbar";

const BASE = import.meta.env.BASE_URL;

/* ── InView Hook ── */
const useInView = (threshold = 0.08) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

/* ── Reveal ── */
const Reveal = ({ children, dir = "up", delay = 0, className = "" }) => {
  const [ref, vis] = useInView();
  const map = {
    up: "cli__rv--up",
    down: "cli__rv--down",
    left: "cli__rv--left",
    right: "cli__rv--right",
    scale: "cli__rv--scale",
    none: "cli__rv--none",
  };
  return (
    <div
      ref={ref}
      className={`cli__rv ${map[dir] || map.up} ${vis ? "cli__rv--vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ── Counter Animation ── */
const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView(0.3);
  const num = parseInt(target.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, num]);

  return (
    <span ref={ref} className="cli__stat-num">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ── Industry Data ── */
const industries = [
  {
    id: "cement",
    name: "Cement Plants",
    icon: <FaCubes />,
    color: "#8D6E63",
    gradient: "linear-gradient(135deg, #8D6E63, #A1887F)",
    logos: [
      { src: BASE + "assets/cement-1.png", name: "Client 1" },
      { src: BASE + "assets/cement-2.png", name: "Client 2" },
      { src: BASE + "assets/cement-3.png", name: "Client 3" },
      { src: BASE + "assets/cement-4.png", name: "Client 4" },
      { src: BASE + "assets/cement-5.png", name: "Client 5" },
      { src: BASE + "assets/cement-6.jpg", name: "Client 6" },
      { src: BASE + "assets/cement-7.png", name: "Client 7" },
      { src: BASE + "assets/cement-8.png", name: "Client 8" },
      { src: BASE + "assets/cement-9.png", name: "Client 9" },
      { src: BASE + "assets/cement-10.png", name: "Client 10" },
      { src: BASE + "assets/cement-11.png", name: "Client 11" },
      { src: BASE + "assets/cement-12.png", name: "Client 12" },
      { src: BASE + "assets/cement-13.png", name: "Client 13" },
    ],
  },
  {
    id: "steel",
    name: "Steel & Metallurgy",
    icon: <FaIndustry />,
    color: "#546E7A",
    gradient: "linear-gradient(135deg, #546E7A, #78909C)",
    logos: [
      { src: BASE + "assets/steel-1.png", name: "Client 1" },
      { src: BASE + "assets/steel-2.png", name: "Client 2" },
      { src: BASE + "assets/steel-3.png", name: "Client 3" },
      { src: BASE + "assets/steel-4.png", name: "Client 4" },
      { src: BASE + "assets/steel-5.png", name: "Client 5" },
      { src: BASE + "assets/steel-6.png", name: "Client 6" },
      { src: BASE + "assets/steel-7.png", name: "Client 7" },
      { src: BASE + "assets/steel-8.png", name: "Client 8" },
      { src: BASE + "assets/steel-9.png", name: "Client 9" },
      { src: BASE + "assets/steel-10.png", name: "Client 10" },
      { src: BASE + "assets/steel-11.png", name: "Client 11" },
    ],
  },
  {
    id: "oil",
    name: "Oil, Gas & Petrochemical Refineries",
    icon: <FaOilCan />,
    color: "#F57F17",
    gradient: "linear-gradient(135deg, #F57F17, #FFB300)",
    logos: [
      { src: BASE + "assets/oilgas-1.png", name: "Client 1" },
      { src: BASE + "assets/oilgas-2.png", name: "Client 2" },
      { src: BASE + "assets/oilgas-3.png", name: "Client 3" },
      { src: BASE + "assets/oilgas-4.png", name: "Client 4" },
      { src: BASE + "assets/oilgas-5.png", name: "Client 5" },
    ],
  },
  {
    id: "fertiliser",
    name: "Fertilizers & Chemical",
    icon: <FaLeaf />,
    color: "#43A047",
    gradient: "linear-gradient(135deg, #43A047, #66BB6A)",
    logos: [
      { src: BASE + "assets/chem-1.png", name: "Client 1" },
      { src: BASE + "assets/chem-2.jpg", name: "Client 2" },
      { src: BASE + "assets/chem-3.png", name: "Client 3" },
      { src: BASE + "assets/chem-4.png", name: "Client 4" },
      { src: BASE + "assets/chem-5.jpeg", name: "Client 5" },
      { src: BASE + "assets/chem-6.png", name: "Client 6" },
      { src: BASE + "assets/chem-7.png", name: "Client 7" },
    ],
  },

  {
    id: "paper",
    name: "Pulp & Paper Manufacturing",
    icon: <FaScroll />,
    color: "#6D4C41",
    gradient: "linear-gradient(135deg, #6D4C41, #8D6E63)",
    logos: [
      {
        src: BASE + "assets/paper-1.jpg",
        name: "Client 1",
      },
      {
        src: BASE + "assets/paper-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/paper-3.jpg",
        name: "Client 3",
      },
      {
        src: BASE + "assets/paper-4.png",
        name: "Client 4",
      },
    ],
  },
  {
    id: "power",
    name: "Power Generation, Infrastructure & Heavy EPC",
    icon: <FaBolt />,
    color: "#FF6F00",
    gradient: "linear-gradient(135deg, #FF6F00, #FF8F00)",
    logos: [
      { src: BASE + "assets/power-1.png", name: "Client 1" },
      { src: BASE + "assets/power-2.png", name: "Client 2" },
      { src: BASE + "assets/power-3.png", name: "Client 3" },
      { src: BASE + "assets/power-4.png", name: "Client 4" },
      { src: BASE + "assets/power-5.png", name: "Client 5" },
      { src: BASE + "assets/power-6.png", name: "Client 6" },
      { src: BASE + "assets/power-7.png", name: "Client 7" },
      { src: BASE + "assets/power-8.png", name: "Client 8" },
      { src: BASE + "assets/power-9.png", name: "Client 9" },
      { src: BASE + "assets/power-10.png", name: "Client 10" },
      { src: BASE + "assets/power-11.png", name: "Client 11" },
      { src: BASE + "assets/power-12.jpg", name: "Client 12" },
      { src: BASE + "assets/power-13.jpg", name: "Client 13" },
      { src: BASE + "assets/power-14.png", name: "Client 14" },
      { src: BASE + "assets/power-15.png", name: "Client 15" },
    ],
  },

  {
    id: "tyre",
    name: "Tyre & Rubber Processing",
    icon: <FaCog />,
    color: "#37474F",
    gradient: "linear-gradient(135deg, #37474F, #546E7A)",
    logos: [],
  },
  {
    id: "oem",
    name: "OEM",
    icon: <FaCog />,
    color: "#1565C0",
    gradient: "linear-gradient(135deg, #1565C0, #1E88E5)",
    logos: [
      { src: BASE + "assets/fans-1.png", name: "Client 1" },
      { src: BASE + "assets/fans-2.png", name: "Client 2" },
      { src: BASE + "assets/fans-3.png", name: "Client 3" },
      { src: BASE + "assets/fans-4.png", name: "Client 4" },
      { src: BASE + "assets/fans-5.png", name: "Client 5" },
      { src: BASE + "assets/fans-6.png", name: "Client 6" },
      { src: BASE + "assets/fans-7.png", name: "Client 7" },
      { src: BASE + "assets/fans-8.png", name: "Client 8" },
    ],
  },
];

const totalClients = industries.reduce((s, i) => s + i.logos.length, 0);

/* ── Component ── */
const Clients = () => {
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [heroRef, heroVis] = useInView(0.05);

  const filteredIndustries =
    activeIndustry === "all"
      ? industries.filter((i) => i.logos.length > 0)
      : industries.filter((i) => i.id === activeIndustry && i.logos.length > 0);

  return (
    <div className="cli">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="cli__hero" ref={heroRef}>
        <div className="cli__hero-bg">
          <div className="cli__hero-grid-pattern" />
          <div className="cli__hero-radial cli__hero-radial--1" />
          <div className="cli__hero-radial cli__hero-radial--2" />
          <div className="cli__hero-radial cli__hero-radial--3" />
        </div>
        <div className="cli__hero-floats">
          {[...Array(8)].map((_, i) => (
            <div className="cli__hero-float" key={i} />
          ))}
        </div>

        <div className="cli__hero-content">
          <div className="cli__hero-badge cli__ha cli__ha--1">
            <FaHandshake />
            <span>Trusted Partnerships Worldwide</span>
          </div>

          <h1 className="cli__hero-h1 cli__ha cli__ha--2">
            Our Valued
            <span className="cli__hero-accent">Clients</span>
          </h1>

          <p className="cli__hero-p cli__ha cli__ha--3">
            Trusted by leading industries across{" "}
            <strong>{industries.length} sectors</strong> — from cement &amp;
            steel to power generation, oil refineries &amp; heavy EPC
          </p>

          <div className="cli__hero-line cli__ha cli__ha--4" />

          <div className="cli__hero-stats cli__ha cli__ha--5">
            {[
              {
                icon: <FaUsers />,
                num: "5000+",
                label: "Clients",
              },
              {
                icon: <FaIndustry />,
                num: `${industries.length}`,
                label: "Industries",
              },
              {
                icon: <FaGlobeAmericas />,
                num: "10000+",
                label: "Installations",
              },
            ].map((s, i) => (
              <div className="cli__hero-stat" key={i}>
                {i > 0 && <div className="cli__hero-stat-sep" />}
                <div className="cli__hero-stat-inner">
                  <span className="cli__hero-stat-icon">{s.icon}</span>
                  <span className="cli__hero-stat-num">{s.num}</span>
                  <span className="cli__hero-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cli__hero-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120Z"
              fill="#f3f6ff"
            />
          </svg>
        </div>

        <div className="cli__hero-scroll-ind">
          <div className="cli__hero-scroll-dot" />
        </div>
      </section>

      {/* ═══ FILTER ═══ */}
      <section className="cli__filter">
        <div className="cli__wrap">
          <Reveal dir="up">
            <div className="cli__filter-head">
              <h2 className="cli__filter-title">Browse by Industry</h2>
              <p className="cli__filter-sub">
                Select an industry to view our clients in that sector
              </p>
            </div>
          </Reveal>
          <Reveal dir="up" delay={100}>
            <div className="cli__filter-bar">
              <button
                className={`cli__fbtn ${activeIndustry === "all" ? "cli__fbtn--on" : ""}`}
                onClick={() => setActiveIndustry("all")}
              >
                <FaStar /> All Industries
              </button>
              {industries
                .filter((i) => i.logos.length > 0)
                .map((ind) => (
                  <button
                    key={ind.id}
                    className={`cli__fbtn ${activeIndustry === ind.id ? "cli__fbtn--on" : ""}`}
                    onClick={() =>
                      setActiveIndustry(
                        activeIndustry === ind.id ? "all" : ind.id,
                      )
                    }
                    style={{ "--cli-c": ind.color }}
                  >
                    {ind.icon} {ind.name}
                  </button>
                ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ INDUSTRY SECTIONS ═══ */}
      <section className="cli__sectors">
        <div className="cli__wrap">
          {filteredIndustries.map((industry, idx) => (
            <IndustryBlock key={industry.id} industry={industry} index={idx} />
          ))}
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <section className="cli__marquee-sec">
        <div className="cli__wrap">
          <Reveal dir="up">
            <div className="cli__sec-head">
              <span className="cli__tag">
                <FaGlobeAmericas /> Our Network
              </span>
              <h2 className="cli__h2">Trusted Across Industries</h2>
            </div>
          </Reveal>
        </div>
        <div className="cli__marquee">
          <div className="cli__marquee-track">
            {[
              ...industries.flatMap((i) => i.logos),
              ...industries.flatMap((i) => i.logos),
            ].map((logo, i) => (
              <div className="cli__marquee-item" key={`a-${i}`}>
                <img src={logo.src} alt={logo.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="cli__marquee cli__marquee--rev">
          <div className="cli__marquee-track cli__marquee-track--rev">
            {[
              ...industries.flatMap((i) => i.logos).reverse(),
              ...industries.flatMap((i) => i.logos).reverse(),
            ].map((logo, i) => (
              <div className="cli__marquee-item" key={`b-${i}`}>
                <img src={logo.src} alt={logo.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="cli__stats">
        <div className="cli__stats-bg" />
        <div className="cli__wrap">
          <div className="cli__stats-grid">
            {[
              {
                num: "25",
                suffix: "+",
                label: "Years of Trust",
                icon: <FaAward />,
              },
              {
                num: "5000",
                suffix: "+",
                label: "Valued Clients",
                icon: <FaUsers />,
              },
              {
                num: `${industries.length}`,
                suffix: "",
                label: "Industry Sectors",
                icon: <FaIndustry />,
              },
              {
                num: "10000",
                suffix: "+",
                label: "Installations",
                icon: <FaGlobeAmericas />,
              },
            ].map((s, i) => (
              <Reveal key={i} dir="up" delay={i * 120}>
                <div className="cli__stat-card">
                  <div className="cli__stat-icon">{s.icon}</div>
                  <AnimatedCounter target={s.num} suffix={s.suffix} />
                  <span className="cli__stat-label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cli__cta">
        <div className="cli__wrap">
          <Reveal dir="up">
            <div className="cli__cta-box">
              <div className="cli__cta-glow" />
              <FaHandshake className="cli__cta-icon" />
              <h2 className="cli__cta-h2">
                Join Our Growing List of Satisfied Clients
              </h2>
              <p className="cli__cta-p">
                Let us deliver precision-engineered solutions for your
                industrial requirements
              </p>
              <a href="/contact" className="cli__cta-btn">
                Get In Touch <FaChevronRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

/* ── Industry Block Sub-Component ── */
const IndustryBlock = ({ industry, index }) => {
  const [ref, vis] = useInView(0.05);

  return (
    <div
      ref={ref}
      className={`cli__sector ${vis ? "cli__sector--vis" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="cli__sector-head">
        <div className="cli__sector-head-left">
          <div
            className="cli__sector-icon"
            style={{ background: industry.gradient }}
          >
            {industry.icon}
          </div>
          <div>
            <h2 className="cli__sector-name">{industry.name}</h2>
            <span className="cli__sector-count">
              <FaCircle /> {industry.logos.length} Client
              {industry.logos.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>
        <div
          className="cli__sector-line"
          style={{ background: industry.color }}
        />
      </div>

      <div className="cli__logo-grid">
        {industry.logos.map((logo, i) => (
          <div
            className={`cli__logo-card ${vis ? "cli__logo-card--vis" : ""}`}
            style={{ transitionDelay: `${200 + i * 50}ms` }}
            key={i}
          >
            <div className="cli__logo-inner">
              <img src={logo.src} alt={logo.name} loading="lazy" />
            </div>
            <div
              className="cli__logo-accent"
              style={{ background: industry.gradient }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
