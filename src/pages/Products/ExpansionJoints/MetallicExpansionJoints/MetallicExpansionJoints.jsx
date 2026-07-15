import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer/Footer";
import {
  FaIndustry,
  FaCheckCircle,
  FaCog,
  FaThermometerHalf,
  FaShieldAlt,
  FaWrench,
  FaArrowRight,
  FaChevronRight,
  FaTimes,
  FaSearchPlus,
  FaPhoneAlt,
  FaFileDownload,
  FaQuoteLeft,
  FaBoxOpen,
  FaLayerGroup,
  FaCompressArrowsAlt,
  FaGlobeAmericas,
  FaRulerCombined,
  FaTachometerAlt,
  FaCubes,
  FaClipboardCheck,
  FaBolt,
  FaAtom,
  FaOilCan,
  FaWater,
  FaSlidersH,
} from "react-icons/fa";
import "./MetallicExpansionJoints.css";

const BASE = import.meta.env.BASE_URL || "/flexoconapp";
// ── InView Hook ───────────────────────────────────────────────
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.12, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  });

  return [ref, isVisible];
};

// ── FadeIn ────────────────────────────────────────────────────
const FadeIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const [ref, isVisible] = useInView();

  const dirs = {
    up: "mej__fade--up",
    down: "mej__fade--down",
    left: "mej__fade--left",
    right: "mej__fade--right",
    none: "mej__fade--none",
  };

  return (
    <div
      ref={ref}
      className={`mej__fade ${dirs[direction]} ${
        isVisible ? "mej__fade--visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Image Constants ───────────────────────────────────────────
const HERO_IMAGE = BASE + "/assets/img_2.png";

// ── Data ──────────────────────────────────────────────────────
const highlights = [
  {
    icon: <FaGlobeAmericas />,
    title: "EJMA Standard",
    text: "Manufactured as per Expansion Joint Manufacturers Association (EJMA) standards for global quality compliance.",
  },
  {
    icon: <FaAtom />,
    title: "SS 304 / 316 / 321",
    text: "Made from Cold Rolled Austenitic Stainless Steel 304, 316, and 321 grade materials.",
  },
  {
    icon: <FaThermometerHalf />,
    title: "High Temperature",
    text: "Suitable for extreme high-temperature applications in industrial process systems.",
  },
  {
    icon: <FaRulerCombined />,
    title: "Custom Configuration",
    text: "Any size and configuration can be manufactured as per customer requirements.",
  },
];

const features = [
  {
    icon: <FaThermometerHalf />,
    title: "Extreme Temperature Service",
    text: "Engineered for high-temperature applications using austenitic stainless steel bellows that maintain structural integrity under thermal stress.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "High Pressure Capacity",
    text: "Designed to withstand high-pressure conditions in piping systems — far exceeding non-metallic joint capabilities.",
  },
  {
    icon: <FaCompressArrowsAlt />,
    title: "Multi-Directional Movement",
    text: "Absorbs axial compression, axial extension, lateral offset, and angular rotation in piping and ducting systems.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Corrosion Resistant",
    text: "Austenitic SS 304, 316, and 321 grades provide excellent resistance to corrosion, oxidation, and chemical attack.",
  },
  {
    icon: <FaBolt />,
    title: "Fatigue Resistant",
    text: "Cold-rolled bellows construction provides superior fatigue life and consistent performance over thousands of cycles.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Multi-Ply Construction",
    text: "Available in single-ply and multi-ply bellows configurations for varying pressure and movement requirements.",
  },
];

const types = [
  {
    name: "Single Expansion Joint",
    desc: "Simplest form — absorbs axial, lateral, and angular movement in a single bellows element between two pipe ends.",
    icon: <FaSlidersH />,
  },
  {
    name: "Universal Expansion Joint",
    desc: "Two bellows joined by a center pipe — absorbs large lateral movements and combinations of axial and lateral displacement.",
    icon: <FaCompressArrowsAlt />,
  },
  {
    name: "Tied Expansion Joint",
    desc: "Equipped with tie rods to restrain pressure thrust — absorbs lateral deflection while preventing axial movement.",
    icon: <FaWrench />,
  },
  {
    name: "Hinged Expansion Joint",
    desc: "Permits angular rotation in a single plane — used in sets of two or three to absorb large lateral movements.",
    icon: <FaCog />,
  },
  {
    name: "Gimbal Expansion Joint",
    desc: "Permits angular rotation in any plane — designed to absorb angular movement in multiple directions simultaneously.",
    icon: <FaAtom />,
  },
  {
    name: "Pressure Balanced Expansion Joint",
    desc: "Designed to absorb axial movement and/or lateral deflection while restraining the pressure thrust by means of tie devices.",
    icon: <FaTachometerAlt />,
  },
];

const materials = [
  {
    name: "SS 304 (1.4301)",
    temp: "Up to 870°C",
    desc: "Most common austenitic grade — excellent formability, weldability, and corrosion resistance for general applications.",
  },
  {
    name: "SS 316 (1.4401)",
    temp: "Up to 870°C",
    desc: "Molybdenum-bearing grade — superior corrosion resistance especially against chlorides and industrial solvents.",
  },
  {
    name: "SS 321 (1.4541)",
    temp: "Up to 900°C",
    desc: "Titanium-stabilized grade — excellent resistance to intergranular corrosion after exposure to high temperatures.",
  },
  {
    name: "Inconel 625",
    temp: "Up to 980°C",
    desc: "Nickel-chromium superalloy — exceptional strength and corrosion resistance for extreme environments.",
  },
  {
    name: "Inconel 800 / 825",
    temp: "Up to 1100°C",
    desc: "High-performance nickel alloys for the most demanding high-temperature and high-pressure applications.",
  },
  {
    name: "Hastelloy C-276",
    temp: "Up to 1093°C",
    desc: "Superior resistance to pitting, crevice corrosion, and stress corrosion cracking in aggressive media.",
  },
];

const applications = [
  {
    title: "Oil & Gas Pipelines",
    desc: "Thermal expansion compensation in process piping and refineries.",
    icon: <FaOilCan />,
  },
  {
    title: "Power Generation",
    desc: "Steam lines, exhaust systems, and turbine connections in power plants.",
    icon: <FaBolt />,
  },
  {
    title: "Petrochemical Plants",
    desc: "Chemical process lines, reactor piping, and heat exchanger connections.",
    icon: <FaIndustry />,
  },
  {
    title: "Water Treatment",
    desc: "Municipal and industrial water treatment piping systems.",
    icon: <FaWater />,
  },
  {
    title: "Steel & Metal Processing",
    desc: "Blast furnace piping, coke oven gas lines, and cooling systems.",
    icon: <FaCubes />,
  },
  {
    title: "Pharmaceutical & Food",
    desc: "Hygienic process piping requiring SS 316L grade bellows.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Marine & Shipbuilding",
    desc: "Engine exhaust systems and ballast water piping on vessels.",
    icon: <FaGlobeAmericas />,
  },
  {
    title: "HVAC & Cryogenic",
    desc: "Chilled water, steam, and cryogenic liquid transfer systems.",
    icon: <FaThermometerHalf />,
  },
];

const specifications = [
  {
    label: "Manufacturing Standard",
    value: "EJMA (Expansion Joint Manufacturers Association)",
  },
  {
    label: "Bellows Material",
    value: "SS 304, SS 316, SS 321, Inconel, Hastelloy",
  },
  { label: "Construction", value: "Cold Rolled Austenitic Stainless Steel" },
  { label: "Bellows Type", value: "Single Ply & Multi-Ply" },
  { label: "Size Range", value: '25mm (1") to 3000mm (120")' },
  { label: "Pressure Rating", value: "Full Vacuum to 100 kg/cm²" },
  { label: "Temperature Range", value: "-196°C to +1100°C" },
  { label: "Movement Axial", value: "As per EJMA calculations" },
  { label: "Movement Lateral", value: "As per EJMA calculations" },
  { label: "Movement Angular", value: "As per EJMA calculations" },
  { label: "End Connections", value: "Flanged, Welded, Threaded, Grooved" },
  { label: "Cycle Life", value: "As per EJMA fatigue analysis" },
  { label: "Testing", value: "Hydrostatic, Pneumatic, Helium Leak" },
  { label: "Certification", value: "EJMA, ISO 9001:2008, IBR (as applicable)" },
];

const whyChooseUs = [
  "Manufactured as per EJMA international standards",
  "Cold rolled austenitic SS 304, 316, 321 bellows",
  "Suitable for high temperature & high pressure",
  "Any size and configuration per customer requirement",
  "Single-ply and multi-ply bellows available",
  "ISO 9001:2008 certified quality management",
  "25+ years of manufacturing expertise",
  "In-house design using EJMA calculations",
  "Comprehensive testing — hydrostatic, pneumatic, leak",
  "On-time delivery with global shipping capability",
];

const galleryImages = [
  {
    src: BASE + "/assets/images/mej-1.jpg",
    title: "Single Bellows Expansion Joint",
  },
  {
    src: BASE + "/assets/images/mej-2.jpg",
    title: "Universal Expansion Joint",
  },
  {
    src: BASE + "/assets/images/mej-3.jpg",
    title: "Tied Expansion Joint Assembly",
  },
  { src: BASE + "/assets/images/mej-4.jpg", title: "Hinged Expansion Joint" },
  { src: BASE + "/assets/images/mej-5.jpg", title: "Gimbal Expansion Joint" },
  { src: BASE + "/assets/images/mej-6.jpg", title: "Pressure Balanced Joint" },
];

// ── Component ─────────────────────────────────────────────────
const MetallicExpansionJoints = () => {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox.open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === "Escape") setLightbox({ open: false, index: 0 });
      if (e.key === "ArrowRight")
        setLightbox((p) => ({
          ...p,
          index: (p.index + 1) % galleryImages.length,
        }));
      if (e.key === "ArrowLeft")
        setLightbox((p) => ({
          ...p,
          index: (p.index - 1 + galleryImages.length) % galleryImages.length,
        }));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox.open]);

  return (
    <div className="mej">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__hero">
        <div className="mej__hero-bg" />
        <div className="mej__hero-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="mej__hero-wrapper">
          <div className="mej__hero-text">
            <div className="mej__breadcrumb mej__hanim mej__hanim--1">
              <Link to="/products">Products</Link>
              <FaChevronRight />
              <Link to="/products">Expansion Joints</Link>
              <FaChevronRight />
              <span>Metallic</span>
            </div>

            <h1 className="mej__hero-title mej__hanim mej__hanim--2">
              Metallic
              <br />
              <span className="mej__hero-highlight">Expansion Joints</span>
            </h1>

            <p className="mej__hero-desc mej__hanim mej__hanim--3">
              Manufactured as per{" "}
              <strong>EJMA (Expansion Joint Manufacturers Association)</strong>{" "}
              standard. Made from Cold Rolled Austenitic Stainless Steel{" "}
              <strong>304, 316 &amp; 321</strong> — suitable for higher
              temperature as well as higher pressure applications.
            </p>

            <div className="mej__hero-actions mej__hanim mej__hanim--4">
              <Link to="/contact" className="mej__btn mej__btn--primary">
                <FaPhoneAlt />
                Get a Quote
              </Link>
              <a
                href="/assets/brochure/brochure.pdf"
                download
                className="mej__btn mej__btn--outline"
              >
                <FaFileDownload />
                Brochure
              </a>
            </div>
          </div>

          <div className="mej__hero-image mej__hanim mej__hanim--5">
            <div className="mej__hero-img-wrap">
              <img
                src={HERO_IMAGE}
                alt="Metallic Expansion Joint"
                loading="eager"
              />
              <div className="mej__hero-img-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HIGHLIGHTS
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__highlights">
        <div className="mej__container">
          <div className="mej__highlights-grid">
            {highlights.map((h, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="mej__hl-card">
                  <div className="mej__hl-icon">{h.icon}</div>
                  <div>
                    <h3 className="mej__hl-title">{h.title}</h3>
                    <p className="mej__hl-text">{h.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INTRO
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__intro">
        <div className="mej__container">
          <div className="mej__intro-grid">
            <FadeIn direction="left">
              <div className="mej__intro-content">
                <span className="mej__tag">About the Product</span>
                <h2 className="mej__title">
                  What Are Metallic Expansion Joints?
                </h2>
                <p className="mej__text">
                  Metallic Expansion Joints are manufactured as per{" "}
                  <strong>
                    EJMA (Expansion Joint Manufacturers Association)
                  </strong>{" "}
                  standard. These expansion joints are made from{" "}
                  <strong>
                    Cold Rolled Austenitic Stainless Steel 304, 316 and 321
                  </strong>{" "}
                  material and are suitable for higher temperature as well as
                  higher pressure applications.
                </p>
                <p className="mej__text">
                  Any size and configuration can be manufactured as per customer
                  requirements. The bellows element — the flexible core of the
                  expansion joint — is formed by hydraulic or mechanical
                  cold-rolling process, ensuring precise convolution geometry,
                  consistent wall thickness, and excellent fatigue life.
                </p>
                <p className="mej__text">
                  They are critical components in piping systems where thermal
                  expansion, equipment vibration, or mechanical movement must be
                  safely absorbed while maintaining system integrity and
                  leak-tight performance.
                </p>

                <div className="mej__intro-quote">
                  <FaQuoteLeft className="mej__quote-icon" />
                  <p>
                    Our metallic expansion joints are designed as per EJMA
                    standards using cold rolled SS 304, 316 &amp; 321 —
                    delivering superior pressure and temperature performance for
                    the most demanding piping applications.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="mej__intro-stats">
                {[
                  { num: "1100°C", label: "Max Temperature" },
                  { num: "100", label: "kg/cm² Pressure" },
                  { num: "3000mm", label: "Max Size Available" },
                  { num: "500+", label: "Installations Done" },
                ].map((stat, i) => (
                  <div className="mej__intro-stat" key={i}>
                    <span className="mej__intro-stat-num">{stat.num}</span>
                    <span className="mej__intro-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__features">
        <div className="mej__container">
          <FadeIn direction="up">
            <div className="mej__section-head">
              <span className="mej__tag">Why Choose Us</span>
              <h2 className="mej__title">Key Features &amp; Benefits</h2>
              <p className="mej__subtitle">
                Precision-engineered as per EJMA standards for extreme
                industrial conditions
              </p>
            </div>
          </FadeIn>

          <div className="mej__features-grid">
            {features.map((f, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="mej__feature-card">
                  <div className="mej__feature-icon">{f.icon}</div>
                  <h3 className="mej__feature-title">{f.title}</h3>
                  <p className="mej__feature-text">{f.text}</p>
                  <div className="mej__feature-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TYPES
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__types">
        <div className="mej__container">
          <FadeIn direction="up">
            <div className="mej__section-head">
              <span className="mej__tag">Product Range</span>
              <h2 className="mej__title">Types of Metallic Expansion Joints</h2>
              <p className="mej__subtitle">
                Available in various configurations as per EJMA guidelines and
                customer requirements
              </p>
            </div>
          </FadeIn>

          <div className="mej__types-grid">
            {types.map((t, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="mej__type-card">
                  <div className="mej__type-icon">{t.icon}</div>
                  <h3 className="mej__type-title">{t.name}</h3>
                  <p className="mej__type-text">{t.desc}</p>
                  <div className="mej__type-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MATERIALS
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__materials">
        <div className="mej__container">
          <FadeIn direction="up">
            <div className="mej__section-head">
              <span className="mej__tag">Construction Materials</span>
              <h2 className="mej__title">Bellows Material Grades</h2>
              <p className="mej__subtitle">
                Cold rolled from premium austenitic stainless steel and high
                performance alloys
              </p>
            </div>
          </FadeIn>

          <div className="mej__materials-grid">
            {materials.map((m, i) => (
              <FadeIn key={i} direction="up" delay={i * 90}>
                <div className="mej__material-card">
                  <div className="mej__material-header">
                    <h3 className="mej__material-name">{m.name}</h3>
                    <span className="mej__material-temp">{m.temp}</span>
                  </div>
                  <p className="mej__material-desc">{m.desc}</p>
                  <div className="mej__material-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SPECIFICATIONS
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__specs">
        <div className="mej__container">
          <div className="mej__specs-grid">
            <FadeIn direction="left">
              <div className="mej__specs-info">
                <span className="mej__tag">Technical Data</span>
                <h2 className="mej__title">Technical Specifications</h2>
                <p className="mej__text">
                  Our metallic expansion joints are designed and manufactured as
                  per <strong>EJMA</strong> standards using cold rolled
                  austenitic stainless steel. Every joint undergoes rigorous
                  testing to ensure leak-tight performance.
                </p>

                <div className="mej__specs-highlights">
                  {[
                    {
                      icon: <FaClipboardCheck />,
                      text: "EJMA standard design & manufacturing",
                    },
                    {
                      icon: <FaCog />,
                      text: "Any size & configuration per requirement",
                    },
                    {
                      icon: <FaBoxOpen />,
                      text: "Flanged, welded, threaded end connections",
                    },
                    {
                      icon: <FaWrench />,
                      text: "Hydrostatic, pneumatic & leak testing",
                    },
                  ].map((h, i) => (
                    <div className="mej__specs-hl" key={i}>
                      <div className="mej__specs-hl-icon">{h.icon}</div>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="mej__specs-table-wrap">
                <table className="mej__specs-table">
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          APPLICATIONS
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__applications">
        <div className="mej__container">
          <FadeIn direction="up">
            <div className="mej__section-head">
              <span className="mej__tag">Industries We Serve</span>
              <h2 className="mej__title">Applications</h2>
              <p className="mej__subtitle">
                Critical piping expansion solutions trusted across industries
                worldwide
              </p>
            </div>
          </FadeIn>

          <div className="mej__app-grid">
            {applications.map((app, i) => (
              <FadeIn key={i} direction="up" delay={i * 80}>
                <div className="mej__app-card">
                  <div className="mej__app-icon">{app.icon}</div>
                  <div>
                    <h3 className="mej__app-title">{app.title}</h3>
                    <p className="mej__app-desc">{app.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__why">
        <div className="mej__container">
          <div className="mej__why-grid">
            <FadeIn direction="left">
              <div className="mej__why-content">
                <span className="mej__tag">Our Strengths</span>
                <h2 className="mej__title">Why Choose Flexocon?</h2>
                <p className="mej__text">
                  With over 25 years of manufacturing experience and 500+
                  successful installations, Flexocon Engineers Pvt. Ltd. is your
                  trusted partner for EJMA standard metallic expansion joints
                  made from premium cold rolled austenitic stainless steel.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="mej__why-list">
                {whyChooseUs.map((item, i) => (
                  <FadeIn key={i} direction="right" delay={i * 60 + 200}>
                    <div className="mej__why-item">
                      <FaCheckCircle className="mej__why-check" />
                      <span>{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          GALLERY
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__gallery">
        <div className="mej__container">
          <FadeIn direction="up">
            <div className="mej__section-head">
              <span className="mej__tag">Product Gallery</span>
              <h2 className="mej__title">Our Products in Action</h2>
              <p className="mej__subtitle">
                EJMA standard metallic expansion joints for diverse piping
                applications
              </p>
            </div>
          </FadeIn>

          <div className="mej__gallery-grid">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div
                  className="mej__gallery-item"
                  onClick={() => setLightbox({ open: true, index: i })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      setLightbox({ open: true, index: i });
                  }}
                >
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="mej__gallery-overlay">
                    <FaSearchPlus />
                    <span>{img.title}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="mej__cta">
        <div className="mej__container">
          <FadeIn direction="up">
            <div className="mej__cta-inner">
              <div className="mej__cta-text">
                <h2 className="mej__cta-title">
                  Need a Custom Metallic Expansion Joint?
                </h2>
                <p className="mej__cta-desc">
                  Our engineering team designs and manufactures custom metallic
                  expansion joints as per EJMA standards — any size,
                  configuration, and material grade per your requirements.
                </p>
              </div>
              <div className="mej__cta-actions">
                <Link to="/contact" className="mej__btn mej__btn--white">
                  <FaPhoneAlt />
                  Contact Us
                  <FaArrowRight className="mej__btn-arrow" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LIGHTBOX
          ═══════════════════════════════════════════════════════ */}
      {lightbox.open && (
        <div
          className="mej__lightbox"
          onClick={() => setLightbox({ open: false, index: 0 })}
        >
          <div
            className="mej__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mej__lightbox-close"
              onClick={() => setLightbox({ open: false, index: 0 })}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <button
              className="mej__lightbox-nav mej__lightbox-nav--prev"
              onClick={() =>
                setLightbox((p) => ({
                  ...p,
                  index:
                    (p.index - 1 + galleryImages.length) % galleryImages.length,
                }))
              }
              aria-label="Previous"
            >
              ‹
            </button>

            <img
              src={galleryImages[lightbox.index].src}
              alt={galleryImages[lightbox.index].title}
              className="mej__lightbox-image"
            />

            <button
              className="mej__lightbox-nav mej__lightbox-nav--next"
              onClick={() =>
                setLightbox((p) => ({
                  ...p,
                  index: (p.index + 1) % galleryImages.length,
                }))
              }
              aria-label="Next"
            >
              ›
            </button>

            <div className="mej__lightbox-caption">
              <span>{galleryImages[lightbox.index].title}</span>
              <span className="mej__lightbox-counter">
                {lightbox.index + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MetallicExpansionJoints;
