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
  FaClock,
  FaCubes,
  FaCompressArrowsAlt,
  FaIndustry,
  FaFan,
  FaOilCan,
  FaWater,
  FaTools,
  FaStar,
  FaPlus,
  FaMinus,
  FaWeight,
  FaRulerCombined,
  FaThermometerHalf,
  FaCrosshairs,
} from "react-icons/fa";
import "./GearedCoupling.css";

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
    up: "gc__rv--up",
    down: "gc__rv--down",
    left: "gc__rv--left",
    right: "gc__rv--right",
    none: "gc__rv--none",
  };
  return (
    <div
      ref={ref}
      className={`gc__rv ${d[dir]} ${vis ? "gc__rv--vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Data ──────────────────────────────────────────────────────
const HERO_IMG = BASE + "/assets/img_5.png";

const coreParts = [
  {
    icon: <FaCog />,
    label: "Toothed Hubs",
    desc: "Two identical precision-machined toothed hubs for secure shaft connection and torque transfer.",
  },
  {
    icon: <FaSyncAlt />,
    label: "Flanged Sleeves",
    desc: "Two identical flanged sleeves with internal teeth meshing with hub teeth for flexible power transmission.",
  },
  {
    icon: <FaShieldAlt />,
    label: "Sealing System",
    desc: "Gasket, O-rings over hubs, lube plugs, and bolts with spring washers for leak-tight grease retention.",
  },
];

const features = [
  {
    icon: <FaWeight />,
    title: "High Power-to-Weight Ratio",
    text: "Delivers maximum torque transmission with minimum weight — optimizing equipment performance and reducing structural loads.",
  },
  {
    icon: <FaCubes />,
    title: "Compact Assembly",
    text: "Space-efficient design allowing installation in confined areas without compromising torque capacity or misalignment accommodation.",
  },
  {
    icon: <FaCompressArrowsAlt />,
    title: "3-Axis Misalignment",
    text: "Accommodates angular (±1.5°), parallel, and axial misalignment between independently supported rotating shafts.",
  },
  {
    icon: <FaRulerCombined />,
    title: "Larger Bore Capacities",
    text: "Available with larger bore sizes to accommodate heavy-duty shaft diameters for high-torque industrial applications.",
  },
  {
    icon: <FaCog />,
    title: "Crown Gear Teeth",
    text: "Crown gear tooth profile ensures longer service life, better load distribution, and smoother meshing under misaligned conditions.",
  },
  {
    icon: <FaCrosshairs />,
    title: "Less Backlash Error",
    text: "Precision-manufactured tooth profiles minimize backlash — critical for applications requiring accurate rotational positioning.",
  },
  {
    icon: <FaThermometerHalf />,
    title: "Heat Treated Components",
    text: "Hubs and sleeves are heat treated as per application requirements for enhanced hardness, wear resistance, and fatigue life.",
  },
  {
    icon: <FaBolt />,
    title: "Close Tolerance Bolts",
    text: "Fitted with close tolerance connecting bolts for precise assembly, uniform load distribution, and vibration-free operation.",
  },
  {
    icon: <FaTools />,
    title: "Interchangeable Parts",
    text: "Standardized component design allows easy replacement and interchangeability — reducing inventory and maintenance costs.",
  },
  {
    icon: <FaClock />,
    title: "Up to 120°C Service",
    text: "Generally suitable for operating temperatures up to 120°C — covering most industrial drive applications.",
  },
];

const couplingTypes = [
  {
    name: "Full Geared Coupling",
    desc: "Standard configuration with two toothed hubs and two flanged sleeves — maximum flexibility for all misalignment types.",
    tag: "Standard",
  },
  {
    name: "Half Geared Half Rigid Coupling",
    desc: "One geared half and one rigid half — for applications requiring flexibility on one end and rigidity on the other.",
    tag: "Standard",
  },
  {
    name: "Mill Motor Type Coupling",
    desc: "Heavy-duty coupling designed for mill motor drives in steel plants, paper mills, and heavy rolling applications.",
    tag: "Heavy Duty",
  },
  {
    name: "Brake Drum Type Geared Coupling",
    desc: "Integrated brake drum for applications requiring coupling and braking function in a single compact unit.",
    tag: "Special",
  },
  {
    name: "Spacer Type Geared Coupling",
    desc: "Extended spacer between hubs for easy maintenance access to seals and bearings without moving connected equipment.",
    tag: "Special",
  },
  {
    name: "Brake-Disc Type Geared Coupling",
    desc: "Integrated brake disc design for high-speed braking applications with precise stopping control.",
    tag: "Special",
  },
  {
    name: "Shear Pin Type Geared Coupling",
    desc: "Incorporates shear pins as mechanical fuse to protect equipment from overload and sudden shock conditions.",
    tag: "Safety",
  },
  {
    name: "Slide Type Geared Coupling",
    desc: "Allows axial sliding movement for applications with significant thermal growth or equipment that requires axial freedom.",
    tag: "Special",
  },
  {
    name: "Vertical Type Geared Coupling",
    desc: "Specifically designed for vertical shaft installations in pumps, turbines, and other vertical drive systems.",
    tag: "Special",
  },
  {
    name: "Single Sleeve Type Coupling",
    desc: "Compact single sleeve design connecting two toothed hubs — ideal for space-constrained installations.",
    tag: "Compact",
  },
  {
    name: "Floating Shaft Type Coupling",
    desc: "Extended floating shaft connecting two geared coupling halves — for applications requiring large shaft separation.",
    tag: "Special",
  },
  {
    name: "Limiting End-Float Coupling",
    desc: "Controls and limits axial end-float movement of connected shafts within predetermined allowable limits.",
    tag: "Precision",
  },
  {
    name: "Torsion Shaft Geared Coupling",
    desc: "Incorporates a torsion shaft element for controlled torsional flexibility and vibration dampening.",
    tag: "Special",
  },
];

const faqData = [
  {
    q: "What is the angular misalignment capacity?",
    a: "Standard Flexocon Geared Couplings provide up to ±1.5° angular misalignment capacity. Custom configurations can be designed for specific misalignment requirements beyond this range.",
  },
  {
    q: "What materials are used in manufacturing?",
    a: "Hubs and sleeves are manufactured from tested raw materials including EN8, EN9, alloy steel, and SG Iron. All components undergo heat treatment as per application requirements and continuous inspection.",
  },
  {
    q: "What is the maximum operating temperature?",
    a: "Standard geared couplings are generally used up to 120°C. For higher temperature applications, special materials and lubricants can be specified during the design phase.",
  },
  {
    q: "Can you manufacture custom bore and keyway?",
    a: "Yes, we manufacture couplings with custom bore diameters, keyway sizes, and special configurations as per your exact shaft requirements and application specifications.",
  },
  {
    q: "What type of lubrication is used?",
    a: "Couplings are grease or oil lubricated with O-ring seals over the hubs for leak-tight retention. Lube plugs are provided for easy re-lubrication during maintenance intervals.",
  },
];

const applications = [
  { title: "Steel Rolling Mills", icon: <FaIndustry /> },
  { title: "Pumps & Compressors", icon: <FaFan /> },
  { title: "Cement Plants", icon: <FaCubes /> },
  { title: "Paper & Textile Mills", icon: <FaCog /> },
  { title: "Sugar Industries", icon: <FaIndustry /> },
  { title: "Mining & Crushers", icon: <FaTools /> },
  { title: "Marine Drives", icon: <FaWater /> },
  { title: "Oil & Gas", icon: <FaOilCan /> },
  { title: "Power Generation", icon: <FaBolt /> },
  { title: "Conveyors & Mixers", icon: <FaSyncAlt /> },
];

const specifications = [
  { label: "Construction", value: "Precision Machined Alloy Steel / SG Iron" },
  {
    label: "Components",
    value: "2 Toothed Hubs, 2 Flanged Sleeves, Gasket, O-rings",
  },
  { label: "Tooth Profile", value: "Crown Gear Teeth (Crowned Tooth)" },
  { label: "Hub Material", value: "EN8 / EN9 / Alloy Steel / SG Iron" },
  { label: "Sleeve Material", value: "Cast Steel / Forged Steel" },
  { label: "Heat Treatment", value: "As per application requirement" },
  { label: "Angular Misalignment", value: "Up to ±1.5° (Standard)" },
  { label: "Parallel Misalignment", value: "As per coupling size" },
  { label: "Axial Misalignment", value: "As per coupling size" },
  { label: "Temperature Range", value: "Up to 120°C (Standard)" },
  { label: "Lubrication", value: "Grease / Oil — O-ring Sealed" },
  { label: "Bolt Type", value: "Close Tolerance Connecting Bolts" },
  { label: "Balancing", value: "Static / Dynamic as required" },
  {
    label: "Manufacturing",
    value: "Special Purpose Machines, Jigs & Fixtures",
  },
];

const whyUs = [
  "Precision manufacturing with special purpose machines",
  "Tested raw materials with continuous inspection",
  "Crown gear teeth for longer service life",
  "±1.5° angular misalignment as standard",
  "High power-to-weight ratio",
  "Compact assembly — space efficient",
  "Less backlash error — precision tooth profiles",
  "Heat treated as per application",
  "Close tolerance bolts — vibration free",
  "Custom jigs, fixtures, tooling & gauges",
  "25+ years manufacturing expertise",
  "ISO 9001:2008 certified quality",
];

const gallery = [
  { src: BASE + "/assets/images/gc-1.jpg", title: "Full Geared Coupling" },
  { src: BASE + "/assets/images/gc-2.jpg", title: "Half Geared Half Rigid" },
  { src: BASE + "/assets/images/gc-3.jpg", title: "Mill Motor Type Coupling" },
  { src: BASE + "/assets/images/gc-4.jpg", title: "Crown Gear Teeth Detail" },
  {
    src: BASE + "/assets/images/gc-5.jpg",
    title: "Brake Drum Geared Coupling",
  },
  { src: BASE + "/assets/images/gc-6.jpg", title: "Spacer Type Assembly" },
];

// ── Component ─────────────────────────────────────────────────
const GearedCoupling = () => {
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
    <div className="gc">
      {/* ═══ HERO ═══ */}
      <section className="gc__hero">
        <div
          className="gc__hero-bg"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="gc__hero-ov" />
        <div className="gc__hero-content">
          <div className="gc__crumb gc__ha gc__ha--1">
            <Link to="/products">Products</Link>
            <FaChevronRight />
            <Link to="/products">Mechanical Power Transmission</Link>
            <FaChevronRight />
            <span>Geared Coupling</span>
          </div>
          <h1 className="gc__hero-h1 gc__ha gc__ha--2">
            Flexocon
            <span className="gc__hero-accent">Geared Coupling</span>
          </h1>
          <p className="gc__hero-p gc__ha gc__ha--3">
            Precision-manufactured flexible gear coupling for efficient{" "}
            <strong>mechanical power transmission</strong>. Accommodates angular
            (±1.5°), parallel &amp; axial misalignment with{" "}
            <strong>crown gear teeth</strong> for longer service life.
          </p>
          <div className="gc__hero-btns gc__ha gc__ha--4">
            <Link to="/contact" className="gc__btn gc__btn--fill">
              <FaPhoneAlt /> Get a Quote
            </Link>
            <a
              href={BASE + "/assets/brochure/brochure.pdf"}
              download
              className="gc__btn gc__btn--line"
            >
              <FaFileDownload /> Brochure
            </a>
          </div>
          <div className="gc__hero-chips gc__ha gc__ha--5">
            <div className="gc__hero-chip">
              <FaCog /> Crown Gear Teeth
            </div>
            <div className="gc__hero-chip">
              <FaCompressArrowsAlt /> ±1.5° Angular
            </div>
            <div className="gc__hero-chip">
              <FaThermometerHalf /> Up to 120°C
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE ═══ */}
      <section className="gc__core">
        <div className="gc__wrap">
          <div className="gc__core-strip">
            {coreParts.map((c, i) => (
              <Reveal key={i} dir="up" delay={i * 120}>
                <div className="gc__core-card">
                  <div className="gc__core-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="gc__core-icon">{c.icon}</div>
                  <h3 className="gc__core-title">{c.label}</h3>
                  <p className="gc__core-text">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="gc__about">
        <div className="gc__wrap">
          <div className="gc__about-row">
            <Reveal dir="left" className="gc__about-left">
              <div className="gc__about-img-box">
                <img
                  src={HERO_IMG}
                  alt="Geared Coupling Detail"
                  loading="lazy"
                />
                <div className="gc__about-badge">
                  <span className="gc__about-badge-num">±1.5°</span>
                  <span className="gc__about-badge-label">
                    Angular Misalignment
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right" delay={150} className="gc__about-right">
              <span className="gc__tag">How It Works</span>
              <h2 className="gc__h2">Precision Gear Coupling Technology</h2>
              <p className="gc__p">
                Flexocon Geared Coupling is used to join two rotating shafts for
                efficient transmission of <strong>mechanical power</strong>. The
                full gear flexible coupling consists of{" "}
                <strong>two identical toothed hubs</strong>,{" "}
                <strong>two identical flanged sleeves</strong> with internal
                teeth, a gasket, bolts with spring washers, lube plugs, and{" "}
                <strong>O-ring seals</strong> for grease retention.
              </p>
              <p className="gc__p">
                Flexocon Geared Couplings are manufactured employing{" "}
                <strong>tested raw materials</strong> through precision
                manufacturing processes using{" "}
                <strong>
                  special purpose machines, jigs, fixtures, tooling and gauges
                </strong>{" "}
                — subject to continuous inspection at every stage.
              </p>
              <p className="gc__p">
                They are designed to accommodate{" "}
                <strong>angular, parallel, and axial misalignments</strong>. Up
                to <strong>±1.5° angular misalignment</strong> capacity is
                provided in standard couplings.
              </p>
              <div className="gc__about-quote">
                <FaQuoteLeft className="gc__about-qi" />
                <p>
                  Crown gear teeth, close tolerance bolts, and heat-treated
                  components ensure longer life, less backlash, and
                  vibration-free power transmission.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — Bento ═══ */}
      <section className="gc__feat">
        <div className="gc__wrap">
          <Reveal dir="up">
            <div className="gc__sec-head">
              <span className="gc__tag">Advantages</span>
              <h2 className="gc__h2">Features &amp; Benefits</h2>
              <p className="gc__sub">
                Precision-engineered for maximum power transmission efficiency
              </p>
            </div>
          </Reveal>
          <div className="gc__bento">
            {features.map((f, i) => (
              <Reveal key={i} dir="up" delay={i * 70}>
                <div
                  className={`gc__bento-card ${i === 0 || i === 5 ? "gc__bento-card--wide" : ""}`}
                >
                  <div className="gc__bento-icon">{f.icon}</div>
                  <div>
                    <h3 className="gc__bento-title">{f.title}</h3>
                    <p className="gc__bento-text">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TYPES — Timeline ═══ */}
      <section className="gc__types">
        <div className="gc__wrap">
          <Reveal dir="up">
            <div className="gc__sec-head">
              <span className="gc__tag">Product Range</span>
              <h2 className="gc__h2">Range of Geared Couplings</h2>
              <p className="gc__sub">
                13 configurations for every industrial requirement
              </p>
            </div>
          </Reveal>
          <div className="gc__timeline">
            {couplingTypes.map((t, i) => (
              <Reveal
                key={i}
                dir={i % 2 === 0 ? "left" : "right"}
                delay={i * 80}
              >
                <div className="gc__tl-item">
                  <div className="gc__tl-dot">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="gc__tl-card">
                    <span className="gc__tl-tag">{t.tag}</span>
                    <h3 className="gc__tl-name">{t.name}</h3>
                    <p className="gc__tl-desc">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPECS ═══ */}
      <section className="gc__specs">
        <div className="gc__wrap">
          <div className="gc__specs-row">
            <Reveal dir="left">
              <div>
                <span className="gc__tag">Technical Data</span>
                <h2 className="gc__h2">Specifications</h2>
                <p className="gc__p">
                  Manufactured using special purpose machines with continuous
                  quality inspection. Crown gear teeth and close tolerance bolts
                  ensure precision performance.
                </p>
                <div className="gc__specs-pills">
                  {[
                    "Crown gear tooth profile",
                    "Heat treated components",
                    "O-ring sealed lubrication",
                    "Custom bore & keyway",
                    "Static & dynamic balancing",
                  ].map((p, i) => (
                    <div className="gc__specs-pill" key={i}>
                      <FaCheckCircle className="gc__specs-pill-i" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal dir="right" delay={150}>
              <div className="gc__specs-tbl-wrap">
                <table className="gc__specs-tbl">
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

      {/* ═══ APPS ═══ */}
      <section className="gc__apps">
        <div className="gc__wrap">
          <Reveal dir="up">
            <div className="gc__sec-head">
              <span className="gc__tag">Industries</span>
              <h2 className="gc__h2">Applications</h2>
            </div>
          </Reveal>
          <div className="gc__apps-flow">
            {applications.map((a, i) => (
              <Reveal key={i} dir="up" delay={i * 60}>
                <div className="gc__app-chip">
                  <span className="gc__app-chip-icon">{a.icon}</span>
                  {a.title}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="gc__faq">
        <div className="gc__wrap">
          <div className="gc__faq-layout">
            <Reveal dir="left">
              <div className="gc__faq-left">
                <span className="gc__tag">Common Questions</span>
                <h2 className="gc__h2">FAQ</h2>
                <p className="gc__p">
                  Everything about Flexocon Geared Couplings.
                </p>
              </div>
            </Reveal>
            <Reveal dir="right" delay={100}>
              <div className="gc__faq-list">
                {faqData.map((f, i) => (
                  <div
                    key={i}
                    className={`gc__faq-item ${openFaq === i ? "gc__faq-item--open" : ""}`}
                  >
                    <button
                      className="gc__faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{f.q}</span>
                      {openFaq === i ? <FaMinus /> : <FaPlus />}
                    </button>
                    <div className="gc__faq-a-wrap">
                      <p className="gc__faq-a">{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHY ═══ */}
      <section className="gc__why">
        <div className="gc__wrap">
          <div className="gc__why-row">
            <Reveal dir="left">
              <div className="gc__why-left">
                <span className="gc__tag">Our Edge</span>
                <h2 className="gc__h2">Why Flexocon?</h2>
                <p className="gc__p">
                  Precision manufacturing with tested materials, special purpose
                  machines, and continuous quality inspection.
                </p>
                <div className="gc__why-badge">
                  <FaStar className="gc__why-badge-icon" />
                  <div>
                    <span className="gc__why-badge-num">25+</span>
                    <span className="gc__why-badge-label">
                      Years of Excellence
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right" delay={150}>
              <div className="gc__why-grid">
                {whyUs.map((w, i) => (
                  <Reveal key={i} dir="right" delay={i * 50 + 200}>
                    <div className="gc__why-item">
                      <FaCheckCircle className="gc__why-tick" />
                      <span>{w}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="gc__gal">
        <div className="gc__wrap">
          <Reveal dir="up">
            <div className="gc__sec-head">
              <span className="gc__tag">Gallery</span>
              <h2 className="gc__h2">Product Showcase</h2>
            </div>
          </Reveal>
          <div className="gc__gal-grid">
            {gallery.map((g, i) => (
              <Reveal key={i} dir="up" delay={i * 100}>
                <div
                  className="gc__gal-item"
                  onClick={() => setLb({ open: true, idx: i })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setLb({ open: true, idx: i });
                  }}
                >
                  <img src={g.src} alt={g.title} loading="lazy" />
                  <div className="gc__gal-over">
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
      <section className="gc__cta">
        <div className="gc__wrap">
          <Reveal dir="up">
            <div className="gc__cta-box">
              <div>
                <h2 className="gc__cta-h2">Need a Custom Geared Coupling?</h2>
                <p className="gc__cta-p">
                  Any size, configuration, bore &amp; keyway —
                  precision-engineered to your specifications.
                </p>
              </div>
              <Link to="/contact" className="gc__btn gc__btn--white">
                <FaPhoneAlt /> Contact Us{" "}
                <FaArrowRight className="gc__btn-arr" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {lb.open && (
        <div className="gc__lb" onClick={() => setLb({ open: false, idx: 0 })}>
          <div className="gc__lb-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="gc__lb-close"
              onClick={() => setLb({ open: false, idx: 0 })}
            >
              <FaTimes />
            </button>
            <button
              className="gc__lb-nav gc__lb-nav--l"
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
              className="gc__lb-img"
            />
            <button
              className="gc__lb-nav gc__lb-nav--r"
              onClick={() =>
                setLb((p) => ({ ...p, idx: (p.idx + 1) % gallery.length }))
              }
            >
              ›
            </button>
            <div className="gc__lb-cap">
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

export default GearedCoupling;
