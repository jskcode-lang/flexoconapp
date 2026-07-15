import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaCog,
  FaCheckCircle,
  FaChevronRight,
  FaTimes,
  FaSearchPlus,
  FaPhoneAlt,
  FaFileDownload,
  FaQuoteLeft,
  FaArrowRight,
  FaShieldAlt,
  FaSyncAlt,
  FaBolt,
  FaTachometerAlt,
  FaClock,
  FaCubes,
  FaCompressArrowsAlt,
  FaIndustry,
  FaFan,
  FaOilCan,
  FaWater,
  FaTools,
  FaAward,
  FaStar,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import "./ResilientCoupling.css";

const BASE = import.meta.env.BASE_URL || "/flexoconapp";
// ── InView ────────────────────────────────────────────────────
const useInView = (opts = {}) => {
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
      { threshold: 0.12, ...opts },
    );
    obs.observe(el);
    return () => obs.disconnect();
  });
  return [ref, visible];
};

// ── Reveal ────────────────────────────────────────────────────
const Reveal = ({ children, dir = "up", delay = 0, className = "" }) => {
  const [ref, vis] = useInView();
  const d = {
    up: "rc__rv--up",
    down: "rc__rv--down",
    left: "rc__rv--left",
    right: "rc__rv--right",
    none: "rc__rv--none",
  };
  return (
    <div
      ref={ref}
      className={`rc__rv ${d[dir]} ${vis ? "rc__rv--vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Constants & Data ──────────────────────────────────────────
const HERO_IMG = BASE + "/assets/img_4.png";

const coreParts = [
  {
    icon: <FaCog />,
    label: "Two Hubs",
    desc: "Precision-machined hubs for secure shaft connection and reliable torque transfer.",
  },
  {
    icon: <FaSyncAlt />,
    label: "Grid Spring",
    desc: "Specially designed spring element providing variable flexibility and 80% shock damping.",
  },
  {
    icon: <FaShieldAlt />,
    label: "Protective Cover",
    desc: "Prevents spring fly-off from centrifugal force and retains grease lubrication.",
  },
];

const features = [
  {
    icon: <FaCubes />,
    title: "All Metal Construction",
    text: "No fast wearing-out components — built entirely from metal for maximum durability.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Torsionally Flexible",
    text: "Transmits full torque with dampened vibration and reduced peak loads.",
  },
  {
    icon: <FaCompressArrowsAlt />,
    title: "Misalignment Accommodation",
    text: "Absorbs angular, parallel, and axial misalignment between rotating shafts.",
  },
  {
    icon: <FaBolt />,
    title: "80% Shock Damping",
    text: "Grid spring dampens high shock loads up to 80% — ideal for severe impact drives.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "High Power Ratings",
    text: "Designed for high torque and power with ratings for demanding applications.",
  },
  {
    icon: <FaTools />,
    title: "Easy Assembly",
    text: "Versatile design allows quick assembly and maintenance with minimal downtime.",
  },
  {
    icon: <FaClock />,
    title: "Very Low Downtime",
    text: "Interchangeable components ensure rapid servicing and minimal production loss.",
  },
  {
    icon: <FaAward />,
    title: "Longer Service Life",
    text: "All-metal construction ensures extended life even in the harshest conditions.",
  },
];

const couplingTypes = [
  {
    name: "Standard Coupling — Vertically Split Cover",
    desc: "Most common — vertically split cover for easy inspection and spring access.",
    tag: "Standard",
  },
  {
    name: "Standard Coupling — Axially Split Cover",
    desc: "Axially split cover allowing maintenance without disturbing shaft alignment.",
    tag: "Standard",
  },
  {
    name: "Flanged Coupling — Vertically Split Cover",
    desc: "Flanged hub design with vertically split cover for bolted flange connections.",
    tag: "Flanged",
  },
  {
    name: "Flanged Coupling — Axially Split Cover",
    desc: "Flanged hubs with axially removable cover for maximum convenience.",
    tag: "Flanged",
  },
  {
    name: "Brake Drum Coupling",
    desc: "Integrated brake drum hub for coupling and braking in a single assembly.",
    tag: "Special",
  },
  {
    name: "Spacer Type Coupling",
    desc: "Extended spacer for applications requiring shaft separation for seal maintenance.",
    tag: "Special",
  },
];

const faqData = [
  {
    q: "What makes the Grid Spring element special?",
    a: "The grid spring is engineered to provide variable flexibility — its resiliency changes with load — combined with exceptional damping that absorbs up to 80% of shock loads, protecting connected equipment.",
  },
  {
    q: "What types of misalignment does it handle?",
    a: "The coupling accommodates angular, parallel (offset), and axial misalignment that inevitably occurs between independently supported rotating shafts, all within allowable limits.",
  },
  {
    q: "Why is all-metal construction advantageous?",
    a: "Unlike elastomeric couplings, the all-metal design has no rubber or plastic components that wear out. This ensures longer service life, higher temperature tolerance, and consistent performance over time.",
  },
  {
    q: "Can you manufacture custom bore and keyway?",
    a: "Yes, we manufacture couplings with custom bore diameters, keyway sizes, and configurations as per your exact shaft and application requirements.",
  },
  {
    q: "What is the typical service life?",
    a: "With proper installation and lubrication, grid spring resilient couplings can last 10-20+ years depending on operating conditions, significantly outlasting elastomeric alternatives.",
  },
];

const applications = [
  { title: "Pumps & Compressors", icon: <FaFan /> },
  { title: "Conveyors & Crushers", icon: <FaCubes /> },
  { title: "Fans & Blowers", icon: <FaSyncAlt /> },
  { title: "Steel Rolling Mills", icon: <FaIndustry /> },
  { title: "Paper & Textile Mills", icon: <FaCog /> },
  { title: "Mining Equipment", icon: <FaTools /> },
  { title: "Marine Drives", icon: <FaWater /> },
  { title: "Oil & Gas", icon: <FaOilCan /> },
  { title: "Cement & Sugar Plants", icon: <FaIndustry /> },
  { title: "Power Generation", icon: <FaBolt /> },
];

const specifications = [
  { label: "Construction", value: "All Metal — No Elastomeric Elements" },
  { label: "Main Components", value: "Two Hubs, Grid Spring, Cover" },
  { label: "Spring Material", value: "Alloy Steel, Heat Treated" },
  { label: "Hub Material", value: "EN8 / EN9 / Alloy Steel / SG Iron" },
  { label: "Cover Material", value: "Cast Iron / Fabricated Steel" },
  { label: "Shock Absorption", value: "Up to 80% Damping" },
  { label: "Misalignment — Angular", value: "Up to ±½°" },
  { label: "Misalignment — Parallel", value: "As per coupling size" },
  { label: "Misalignment — Axial", value: "As per coupling size" },
  { label: "Speed Range", value: "Up to 3600 RPM (size dependent)" },
  { label: "Lubrication", value: "Grease Packed, Sealed Cover" },
  { label: "Balancing", value: "Static / Dynamic as required" },
];

const whyUs = [
  "All metal — no wearing elastomeric parts",
  "80% shock load damping capability",
  "Angular, parallel & axial misalignment absorption",
  "Full torque with vibration dampening",
  "Versatile design with interchangeable parts",
  "Easy assembly — minimal downtime",
  "Longer service life in harsh environments",
  "Custom bore and keyway as per requirement",
  "25+ years manufacturing expertise",
  "ISO 9001:2008 certified quality",
];

const gallery = [
  {
    src: BASE + "/assets/images/rc-1.jpg",
    title: "Grid Spring Resilient Coupling",
  },
  {
    src: BASE + "/assets/images/rc-2.jpg",
    title: "Vertically Split Cover Type",
  },
  {
    src: BASE + "/assets/images/rc-3.jpg",
    title: "Grid Spring Element Detail",
  },
  {
    src: BASE + "/assets/images/rc-4.jpg",
    title: "Flanged Resilient Coupling",
  },
  { src: BASE + "/assets/images/rc-5.jpg", title: "Brake Drum Coupling" },
  { src: BASE + "/assets/images/rc-6.jpg", title: "Spacer Type Configuration" },
];

// ── Component ─────────────────────────────────────────────────
const ResilientCoupling = () => {
  const [lb, setLb] = useState({ open: false, idx: 0 });
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.body.style.overflow = lb.open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lb.open]);

  useEffect(() => {
    const hk = (e) => {
      if (!lb.open) return;
      if (e.key === "Escape") setLb({ open: false, idx: 0 });
      if (e.key === "ArrowRight")
        setLb((p) => ({ ...p, idx: (p.idx + 1) % gallery.length }));
      if (e.key === "ArrowLeft")
        setLb((p) => ({
          ...p,
          idx: (p.idx - 1 + gallery.length) % gallery.length,
        }));
    };
    window.addEventListener("keydown", hk);
    return () => window.removeEventListener("keydown", hk);
  }, [lb.open]);

  return (
    <div className="rc">
      {/* ═══ HERO — Full Width Image Behind ═══ */}
      <section className="rc__hero">
        <div
          className="rc__hero-img-bg"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="rc__hero-overlay" />
        <div className="rc__hero-content">
          <div className="rc__crumb rc__ha rc__ha--1">
            <Link to="/products">Products</Link>
            <FaChevronRight />
            <Link to="/products">Mechanical Power Transmission</Link>
            <FaChevronRight />
            <span>Resilient Coupling</span>
          </div>
          <h1 className="rc__hero-h1 rc__ha rc__ha--2">
            Flexocon Grid Spring
            <span className="rc__hero-accent">Resilient Coupling</span>
          </h1>
          <p className="rc__hero-p rc__ha rc__ha--3">
            All-metal construction with grid spring element providing{" "}
            <strong>up to 80% shock load damping</strong>. Angular, parallel
            &amp; axial misalignment compensation for high-impact industrial
            drives.
          </p>
          <div className="rc__hero-btns rc__ha rc__ha--4">
            <Link to="/contact" className="rc__btn rc__btn--fill">
              <FaPhoneAlt /> Get a Quote
            </Link>
            <a
              href="/assets/brochure/brochure.pdf"
              download
              className="rc__btn rc__btn--line"
            >
              <FaFileDownload /> Brochure
            </a>
          </div>
          <div className="rc__hero-chips rc__ha rc__ha--5">
            <div className="rc__hero-chip">
              <FaBolt /> 80% Shock Damping
            </div>
            <div className="rc__hero-chip">
              <FaCubes /> All Metal
            </div>
            <div className="rc__hero-chip">
              <FaCompressArrowsAlt /> 3-Axis Misalignment
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE — Horizontal Cards ═══ */}
      <section className="rc__core">
        <div className="rc__wrap">
          <div className="rc__core-strip">
            {coreParts.map((c, i) => (
              <Reveal key={i} dir="up" delay={i * 120}>
                <div className="rc__core-card">
                  <div className="rc__core-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="rc__core-icon">{c.icon}</div>
                  <h3 className="rc__core-title">{c.label}</h3>
                  <p className="rc__core-text">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT — Side by Side ═══ */}
      <section className="rc__about">
        <div className="rc__wrap">
          <div className="rc__about-row">
            <Reveal dir="left" className="rc__about-left">
              <div className="rc__about-img-box">
                <img
                  src={HERO_IMG}
                  alt="Resilient Coupling Detail"
                  loading="lazy"
                />
                <div className="rc__about-stat-badge">
                  <span className="rc__about-stat-num">80%</span>
                  <span className="rc__about-stat-label">Shock Damping</span>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={150} className="rc__about-right">
              <span className="rc__tag">How It Works</span>
              <h2 className="rc__h2">
                Grid Spring — The Heart of the Coupling
              </h2>
              <p className="rc__p">
                The Flexocon Grid Spring Resilient Coupling comprises mainly{" "}
                <strong>two hubs</strong>, a{" "}
                <strong>grid spring element</strong>, and a{" "}
                <strong>protective cover</strong> to prevent the spring from
                flying off due to centrifugal force and to retain grease.
              </p>
              <p className="rc__p">
                The grid spring element provides{" "}
                <strong>variable flexibility</strong> — resiliency that changes
                with load — with damping properties making the coupling ideal
                for drives involving <strong>high shock loads up to 80%</strong>
                .
              </p>
              <p className="rc__p">
                Misalignment — angular, parallel, or axial — that inevitably
                occurs between rotating shafts which are independently
                supported, is absorbed by the spring element within allowable
                limits.
              </p>
              <div className="rc__about-quote">
                <FaQuoteLeft className="rc__about-qi" />
                <p>
                  All-metal construction — no fast-wearing components. Transmits
                  full torque with dampened vibration and reduced peak loads.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — Bento Grid ═══ */}
      <section className="rc__feat-sec">
        <div className="rc__wrap">
          <Reveal dir="up">
            <div className="rc__sec-head">
              <span className="rc__tag">Advantages</span>
              <h2 className="rc__h2">Features &amp; Benefits</h2>
              <p className="rc__sub">
                All-metal resilient coupling for maximum performance
              </p>
            </div>
          </Reveal>

          <div className="rc__bento">
            {features.map((f, i) => (
              <Reveal key={i} dir="up" delay={i * 70}>
                <div
                  className={`rc__bento-card ${i === 0 || i === 5 ? "rc__bento-card--wide" : ""}`}
                >
                  <div className="rc__bento-icon">{f.icon}</div>
                  <div>
                    <h3 className="rc__bento-title">{f.title}</h3>
                    <p className="rc__bento-text">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TYPES — Timeline Layout ═══ */}
      <section className="rc__types-sec">
        <div className="rc__wrap">
          <Reveal dir="up">
            <div className="rc__sec-head">
              <span className="rc__tag">Product Range</span>
              <h2 className="rc__h2">Range of Resilient Couplings</h2>
              <p className="rc__sub">
                Multiple configurations for diverse requirements
              </p>
            </div>
          </Reveal>

          <div className="rc__timeline">
            {couplingTypes.map((t, i) => (
              <Reveal
                key={i}
                dir={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
              >
                <div className="rc__tl-item">
                  <div className="rc__tl-dot">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="rc__tl-card">
                    <span className="rc__tl-tag">{t.tag}</span>
                    <h3 className="rc__tl-name">{t.name}</h3>
                    <p className="rc__tl-desc">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPECS — Tabular + Side Info ═══ */}
      <section className="rc__specs-sec">
        <div className="rc__wrap">
          <div className="rc__specs-row">
            <Reveal dir="left">
              <div>
                <span className="rc__tag">Technical Data</span>
                <h2 className="rc__h2">Specifications</h2>
                <p className="rc__p">
                  Precision-engineered with all-metal construction. Every
                  component designed for maximum torque, shock absorption, and
                  longevity.
                </p>
                <div className="rc__specs-pills">
                  {[
                    "Custom bore & keyway",
                    "Sealed grease lubrication",
                    "Static & dynamic balancing",
                    "Interchangeable parts",
                  ].map((p, i) => (
                    <div className="rc__specs-pill" key={i}>
                      <FaCheckCircle className="rc__specs-pill-icon" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={150}>
              <div className="rc__specs-tbl-wrap">
                <table className="rc__specs-tbl">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((s, i) => (
                      <tr key={i}>
                        <td>{s.label}</td>
                        <td>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ APPLICATIONS — Flowing Tags ═══ */}
      <section className="rc__apps-sec">
        <div className="rc__wrap">
          <Reveal dir="up">
            <div className="rc__sec-head">
              <span className="rc__tag">Industries</span>
              <h2 className="rc__h2">Applications</h2>
            </div>
          </Reveal>
          <div className="rc__apps-flow">
            {applications.map((a, i) => (
              <Reveal key={i} dir="up" delay={i * 60}>
                <div className="rc__app-chip">
                  <span className="rc__app-chip-icon">{a.icon}</span>
                  {a.title}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ — Accordion ═══ */}
      <section className="rc__faq-sec">
        <div className="rc__wrap">
          <div className="rc__faq-layout">
            <Reveal dir="left">
              <div className="rc__faq-left">
                <span className="rc__tag">Common Questions</span>
                <h2 className="rc__h2">Frequently Asked Questions</h2>
                <p className="rc__p">
                  Everything you need to know about Flexocon Grid Spring
                  Resilient Couplings.
                </p>
              </div>
            </Reveal>

            <Reveal dir="right" delay={100}>
              <div className="rc__faq-list">
                {faqData.map((f, i) => (
                  <div
                    key={i}
                    className={`rc__faq-item ${openFaq === i ? "rc__faq-item--open" : ""}`}
                  >
                    <button
                      className="rc__faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{f.q}</span>
                      {openFaq === i ? <FaMinus /> : <FaPlus />}
                    </button>
                    <div className="rc__faq-a-wrap">
                      <p className="rc__faq-a">{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHY US — Checklist with Badge ═══ */}
      <section className="rc__why-sec">
        <div className="rc__wrap">
          <div className="rc__why-row">
            <Reveal dir="left">
              <div className="rc__why-left">
                <span className="rc__tag">Our Edge</span>
                <h2 className="rc__h2">Why Flexocon?</h2>
                <p className="rc__p">
                  Over 25 years of precision engineering — delivering superior
                  shock damping, misalignment accommodation, and exceptional
                  service life.
                </p>
                <div className="rc__why-badge">
                  <FaStar className="rc__why-badge-icon" />
                  <div>
                    <span className="rc__why-badge-num">25+</span>
                    <span className="rc__why-badge-label">
                      Years of Excellence
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={150}>
              <div className="rc__why-grid">
                {whyUs.map((w, i) => (
                  <Reveal key={i} dir="right" delay={i * 50 + 200}>
                    <div className="rc__why-item">
                      <FaCheckCircle className="rc__why-tick" />
                      <span>{w}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY — Masonry-ish ═══ */}
      <section className="rc__gal-sec">
        <div className="rc__wrap">
          <Reveal dir="up">
            <div className="rc__sec-head">
              <span className="rc__tag">Gallery</span>
              <h2 className="rc__h2">Product Showcase</h2>
            </div>
          </Reveal>
          <div className="rc__gal-grid">
            {gallery.map((g, i) => (
              <Reveal key={i} dir="up" delay={i * 100}>
                <div
                  className="rc__gal-item"
                  onClick={() => setLb({ open: true, idx: i })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setLb({ open: true, idx: i });
                  }}
                >
                  <img src={g.src} alt={g.title} loading="lazy" />
                  <div className="rc__gal-over">
                    <FaSearchPlus />
                    <span>{g.title}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="rc__cta-sec">
        <div className="rc__wrap">
          <Reveal dir="up">
            <div className="rc__cta-box">
              <div>
                <h2 className="rc__cta-h2">
                  Need a Custom Resilient Coupling?
                </h2>
                <p className="rc__cta-p">
                  Custom bore, keyway, and configuration — engineered to your
                  exact specifications.
                </p>
              </div>
              <Link to="/contact" className="rc__btn rc__btn--white">
                <FaPhoneAlt /> Contact Us{" "}
                <FaArrowRight className="rc__btn-arr" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {lb.open && (
        <div className="rc__lb" onClick={() => setLb({ open: false, idx: 0 })}>
          <div className="rc__lb-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="rc__lb-close"
              onClick={() => setLb({ open: false, idx: 0 })}
            >
              <FaTimes />
            </button>
            <button
              className="rc__lb-nav rc__lb-nav--l"
              onClick={() =>
                setLb((p) => ({
                  ...p,
                  idx: (p.idx - 1 + gallery.length) % gallery.length,
                }))
              }
            >
              ‹
            </button>
            <img
              src={gallery[lb.idx].src}
              alt={gallery[lb.idx].title}
              className="rc__lb-img"
            />
            <button
              className="rc__lb-nav rc__lb-nav--r"
              onClick={() =>
                setLb((p) => ({ ...p, idx: (p.idx + 1) % gallery.length }))
              }
            >
              ›
            </button>
            <div className="rc__lb-cap">
              <span>{gallery[lb.idx].title}</span>
              <span>
                {lb.idx + 1}/{gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResilientCoupling;
