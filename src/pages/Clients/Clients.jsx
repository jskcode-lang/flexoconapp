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
} from "react-icons/fa";
import "./Clients.css";

const BASE = import.meta.env.BASE_URL;

// ── InView ────────────────────────────────────────────────────
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const optsRef = useRef(options);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, ...optsRef.current },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// ── Reveal ────────────────────────────────────────────────────
const Reveal = ({ children, dir = "up", delay = 0, className = "" }) => {
  const [ref, vis] = useInView();
  const d = {
    up: "cli__rv--up",
    down: "cli__rv--down",
    left: "cli__rv--left",
    right: "cli__rv--right",
    none: "cli__rv--none",
  };
  return (
    <div
      ref={ref}
      className={`cli__rv ${d[dir]} ${vis ? "cli__rv--vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Industry Data ─────────────────────────────────────────────
const industries = [
  {
    id: "cement",
    name: "Cement Plants",
    icon: <FaCubes />,
    color: "#8D6E63",
    logos: [
      {
        src: BASE + "assets/images/clients/cement/cement-1.png",
        name: "Client 1",
      },
      {
        src: BASE + "assets/images/clients/cement/cement-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/images/clients/cement/cement-3.png",
        name: "Client 3",
      },
      {
        src: BASE + "assets/images/clients/cement/cement-4.png",
        name: "Client 4",
      },
      {
        src: BASE + "assets/images/clients/cement/cement-5.png",
        name: "Client 5",
      },
      {
        src: BASE + "assets/images/clients/cement/cement-6.png",
        name: "Client 6",
      },
    ],
  },
  {
    id: "steel",
    name: "Steel Plants",
    icon: <FaIndustry />,
    color: "#546E7A",
    logos: [
      {
        src: BASE + "assets/images/clients/steel/steel-1.png",
        name: "Client 1",
      },
      {
        src: BASE + "assets/images/clients/steel/steel-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/images/clients/steel/steel-3.png",
        name: "Client 3",
      },
      {
        src: BASE + "assets/images/clients/steel/steel-4.png",
        name: "Client 4",
      },
      {
        src: BASE + "assets/images/clients/steel/steel-5.png",
        name: "Client 5",
      },
      {
        src: BASE + "assets/images/clients/steel/steel-6.png",
        name: "Client 6",
      },
    ],
  },
  {
    id: "oil",
    name: "Oil & Refinery",
    icon: <FaOilCan />,
    color: "#F57F17",
    logos: [
      { src: BASE + "assets/images/clients/oil/oil-1.png", name: "Client 1" },
      { src: BASE + "assets/images/clients/oil/oil-2.png", name: "Client 2" },
      { src: BASE + "assets/images/clients/oil/oil-3.png", name: "Client 3" },
      { src: BASE + "assets/images/clients/oil/oil-4.png", name: "Client 4" },
      { src: BASE + "assets/images/clients/oil/oil-5.png", name: "Client 5" },
      { src: BASE + "assets/images/clients/oil/oil-6.png", name: "Client 6" },
    ],
  },
  {
    id: "fertiliser",
    name: "Fertiliser",
    icon: <FaLeaf />,
    color: "#43A047",
    logos: [
      {
        src: BASE + "assets/images/clients/fertiliser/fert-1.png",
        name: "Client 1",
      },
      {
        src: BASE + "assets/images/clients/fertiliser/fert-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/images/clients/fertiliser/fert-3.png",
        name: "Client 3",
      },
      {
        src: BASE + "assets/images/clients/fertiliser/fert-4.png",
        name: "Client 4",
      },
    ],
  },
  {
    id: "sugar",
    name: "Sugar Plant",
    icon: <FaCubes />,
    color: "#E65100",
    logos: [
      {
        src: BASE + "assets/images/clients/sugar/sugar-1.png",
        name: "Client 1",
      },
      {
        src: BASE + "assets/images/clients/sugar/sugar-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/images/clients/sugar/sugar-3.png",
        name: "Client 3",
      },
      {
        src: BASE + "assets/images/clients/sugar/sugar-4.png",
        name: "Client 4",
      },
    ],
  },
  {
    id: "aluminium",
    name: "Aluminium",
    icon: <FaCog />,
    color: "#78909C",
    logos: [
      {
        src: BASE + "assets/images/clients/aluminium/alu-1.png",
        name: "Client 1",
      },
      {
        src: BASE + "assets/images/clients/aluminium/alu-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/images/clients/aluminium/alu-3.png",
        name: "Client 3",
      },
      {
        src: BASE + "assets/images/clients/aluminium/alu-4.png",
        name: "Client 4",
      },
    ],
  },
  {
    id: "port",
    name: "Port",
    icon: <FaShip />,
    color: "#0277BD",
    logos: [
      { src: BASE + "assets/images/clients/port/port-1.png", name: "Client 1" },
      { src: BASE + "assets/images/clients/port/port-2.png", name: "Client 2" },
      { src: BASE + "assets/images/clients/port/port-3.png", name: "Client 3" },
    ],
  },
  {
    id: "paper",
    name: "Paper",
    icon: <FaScroll />,
    color: "#6D4C41",
    logos: [
      {
        src: BASE + "assets/images/clients/paper/paper-1.png",
        name: "Client 1",
      },
      {
        src: BASE + "assets/images/clients/paper/paper-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/images/clients/paper/paper-3.png",
        name: "Client 3",
      },
      {
        src: BASE + "assets/images/clients/paper/paper-4.png",
        name: "Client 4",
      },
    ],
  },
  {
    id: "power",
    name: "Power Plants",
    icon: <FaBolt />,
    color: "#FF6F00",
    logos: [
      {
        src: BASE + "assets/images/clients/power/power-1.png",
        name: "Client 1",
      },
      {
        src: BASE + "assets/images/clients/power/power-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/images/clients/power/power-3.png",
        name: "Client 3",
      },
      {
        src: BASE + "assets/images/clients/power/power-4.png",
        name: "Client 4",
      },
      {
        src: BASE + "assets/images/clients/power/power-5.png",
        name: "Client 5",
      },
      {
        src: BASE + "assets/images/clients/power/power-6.png",
        name: "Client 6",
      },
    ],
  },
  {
    id: "sponge",
    name: "Sponge Iron",
    icon: <FaIndustry />,
    color: "#4E342E",
    logos: [
      {
        src: BASE + "assets/images/clients/sponge/sponge-1.png",
        name: "Client 1",
      },
      {
        src: BASE + "assets/images/clients/sponge/sponge-2.png",
        name: "Client 2",
      },
      {
        src: BASE + "assets/images/clients/sponge/sponge-3.png",
        name: "Client 3",
      },
      {
        src: BASE + "assets/images/clients/sponge/sponge-4.png",
        name: "Client 4",
      },
    ],
  },
  {
    id: "oem",
    name: "OEM",
    icon: <FaCog />,
    color: "#1565C0",
    logos: [
      { src: BASE + "assets/images/clients/oem/oem-1.png", name: "Client 1" },
      { src: BASE + "assets/images/clients/oem/oem-2.png", name: "Client 2" },
      { src: BASE + "assets/images/clients/oem/oem-3.png", name: "Client 3" },
      { src: BASE + "assets/images/clients/oem/oem-4.png", name: "Client 4" },
      { src: BASE + "assets/images/clients/oem/oem-5.png", name: "Client 5" },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────
const Clients = () => {
  const [activeIndustry, setActiveIndustry] = useState("all");

  const filteredIndustries =
    activeIndustry === "all"
      ? industries
      : industries.filter((ind) => ind.id === activeIndustry);

  return (
    <div className="cli">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="cli__hero">
        <div className="cli__hero-pattern" />
        <div className="cli__hero-gradient" />

        <div className="cli__hero-content">
          <div className="cli__hero-badge cli__ha cli__ha--1">
            <FaHandshake />
            <span>Trusted Partnerships</span>
          </div>
          <h1 className="cli__hero-h1 cli__ha cli__ha--2">
            Our Valued
            <span className="cli__hero-accent">Clients</span>
          </h1>
          <p className="cli__hero-p cli__ha cli__ha--3">
            Trusted by leading industries across <strong>11 sectors</strong> —
            from cement and steel plants to power generation and oil refineries
          </p>
          <div className="cli__hero-line cli__ha cli__ha--4" />

          <div className="cli__hero-counters cli__ha cli__ha--5">
            <div className="cli__hero-counter">
              <FaUsers className="cli__hero-counter-icon" />
              <span className="cli__hero-counter-num">200+</span>
              <span className="cli__hero-counter-label">Clients</span>
            </div>
            <div className="cli__hero-counter-divider" />
            <div className="cli__hero-counter">
              <FaIndustry className="cli__hero-counter-icon" />
              <span className="cli__hero-counter-num">11</span>
              <span className="cli__hero-counter-label">Industries</span>
            </div>
            <div className="cli__hero-counter-divider" />
            <div className="cli__hero-counter">
              <FaGlobeAmericas className="cli__hero-counter-icon" />
              <span className="cli__hero-counter-num">500+</span>
              <span className="cli__hero-counter-label">Installations</span>
            </div>
          </div>
        </div>

        <div className="cli__hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
              fill="#f4f7ff"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INDUSTRY FILTER
          ═══════════════════════════════════════════════════════ */}
      <section className="cli__filter">
        <div className="cli__wrap">
          <Reveal dir="up">
            <div className="cli__filter-bar">
              <button
                className={`cli__filter-btn ${
                  activeIndustry === "all" ? "cli__filter-btn--active" : ""
                }`}
                onClick={() => setActiveIndustry("all")}
              >
                <FaStar />
                All Industries
              </button>
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  className={`cli__filter-btn ${
                    activeIndustry === ind.id ? "cli__filter-btn--active" : ""
                  }`}
                  onClick={() =>
                    setActiveIndustry(
                      activeIndustry === ind.id ? "all" : ind.id,
                    )
                  }
                  style={{
                    "--cli-accent": ind.color,
                  }}
                >
                  {ind.icon}
                  {ind.name}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INDUSTRY SECTIONS
          ═══════════════════════════════════════════════════════ */}
      <section className="cli__industries">
        <div className="cli__wrap">
          {filteredIndustries.map((industry, idx) => (
            <Reveal key={industry.id} dir="up" delay={idx * 80}>
              <div className="cli__industry-block">
                <div className="cli__industry-header">
                  <div
                    className="cli__industry-icon"
                    style={{ background: industry.color }}
                  >
                    {industry.icon}
                  </div>
                  <div>
                    <h2 className="cli__industry-name">{industry.name}</h2>
                    <span className="cli__industry-count">
                      {industry.logos.length} Client
                      {industry.logos.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div
                    className="cli__industry-line"
                    style={{ background: industry.color }}
                  />
                </div>

                <div className="cli__logos-grid">
                  {industry.logos.map((logo, i) => (
                    <Reveal key={i} dir="up" delay={i * 60}>
                      <div className="cli__logo-card">
                        <div className="cli__logo-img-wrap">
                          <img src={logo.src} alt={logo.name} loading="lazy" />
                        </div>
                        <div
                          className="cli__logo-bar"
                          style={{ background: industry.color }}
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MARQUEE — ALL LOGOS SCROLLING
          ═══════════════════════════════════════════════════════ */}
      <section className="cli__marquee-sec">
        <div className="cli__wrap">
          <Reveal dir="up">
            <div className="cli__sec-head">
              <span className="cli__tag">Our Network</span>
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
              <div className="cli__marquee-item" key={i}>
                <img src={logo.src} alt={logo.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="cli__marquee cli__marquee--reverse">
          <div className="cli__marquee-track cli__marquee-track--reverse">
            {[
              ...industries.flatMap((i) => i.logos).reverse(),
              ...industries.flatMap((i) => i.logos).reverse(),
            ].map((logo, i) => (
              <div className="cli__marquee-item" key={i}>
                <img src={logo.src} alt={logo.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS
          ═══════════════════════════════════════════════════════ */}
      <section className="cli__stats">
        <div className="cli__wrap">
          <div className="cli__stats-grid">
            {[
              { icon: <FaAward />, num: "25+", label: "Years of Trust" },
              { icon: <FaUsers />, num: "200+", label: "Valued Clients" },
              { icon: <FaIndustry />, num: "11", label: "Industry Sectors" },
              {
                icon: <FaGlobeAmericas />,
                num: "500+",
                label: "Installations",
              },
            ].map((s, i) => (
              <Reveal key={i} dir="up" delay={i * 100}>
                <div className="cli__stat-card">
                  <div className="cli__stat-icon">{s.icon}</div>
                  <span className="cli__stat-num">{s.num}</span>
                  <span className="cli__stat-label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="cli__cta">
        <div className="cli__wrap">
          <Reveal dir="up">
            <div className="cli__cta-box">
              <FaHandshake className="cli__cta-icon" />
              <h2 className="cli__cta-h2">
                Join Our Growing List of Satisfied Clients
              </h2>
              <p className="cli__cta-p">
                Let us deliver precision-engineered solutions for your
                industrial requirements
              </p>
              <a href="/contact" className="cli__cta-btn">
                Get In Touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Clients;
