import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  FaWind,
  FaFire,
  FaCompressArrowsAlt,
  FaGlobeAmericas,
  FaRulerCombined,
  FaTachometerAlt,
  FaCubes,
  FaClipboardCheck,
} from "react-icons/fa";
import "./NonMetallicExpansionJoints.css";

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
    up: "nmej__fade--up",
    down: "nmej__fade--down",
    left: "nmej__fade--left",
    right: "nmej__fade--right",
    none: "nmej__fade--none",
  };

  return (
    <div
      ref={ref}
      className={`nmej__fade ${dirs[direction]} ${
        isVisible ? "nmej__fade--visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Constants ─────────────────────────────────────────────────
const HERO_IMAGE = "/assets/img_1.png";

// ── Data ──────────────────────────────────────────────────────
const highlights = [
  {
    icon: <FaGlobeAmericas />,
    title: "FSA, USA Standard",
    text: "Manufactured as per Fluid Sealing Association (FSA), USA standards for global quality compliance.",
  },
  {
    icon: <FaThermometerHalf />,
    title: "Up to 1400°C",
    text: "Engineered to withstand extreme temperatures up to 1400°C using advanced multi-layered insulation.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Up to 2000 mm WG",
    text: "Pressure withstanding capability of up to 2000 mm WG for demanding high-pressure environments.",
  },
  {
    icon: <FaRulerCombined />,
    title: "Custom Sizes & Shapes",
    text: "Available in round, rectangular, and custom shapes — manufactured as per customer specifications.",
  },
];

const features = [
  {
    icon: <FaThermometerHalf />,
    title: "Extreme Temperature Resistance",
    text: "Engineered to withstand temperatures up to 1400°C using advanced multi-layered fabric insulation systems with ceramic fiber and PTFE layers.",
  },
  {
    icon: <FaCompressArrowsAlt />,
    title: "Multi-Directional Movement",
    text: "Absorbs axial, lateral, and angular movements simultaneously with exceptional flexibility — protecting connected equipment from stress.",
  },
  {
    icon: <FaWind />,
    title: "Vibration Dampening",
    text: "Effectively isolates vibration and noise transmission between connected ductwork, fans, and industrial equipment.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Chemical & Corrosion Resistant",
    text: "Resistant to a wide range of corrosive chemicals, acids, alkali environments, and flue gas compositions.",
  },
  {
    icon: <FaFire />,
    title: "Fire Retardant Materials",
    text: "Constructed from inherently fire-retardant materials meeting stringent industrial safety and environmental standards.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Multi-Layer Construction",
    text: "Precision-built with multiple layers including PTFE, silicone, fiberglass, ceramic fiber, and stainless steel wire mesh reinforcement.",
  },
];

const applications = [
  {
    title: "Industrial Fans",
    desc: "Vibration isolation and thermal expansion absorption for ID, FD, and PA fans.",
    icon: <FaWind />,
  },
  {
    title: "Mechanical Dust Collectors",
    desc: "Flexible connections for baghouse and cyclone dust collection systems.",
    icon: <FaCubes />,
  },
  {
    title: "Electrostatic Precipitators (ESP)",
    desc: "High-temperature fabric joints for ESP inlet and outlet ductwork.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Hot Air Ducts",
    desc: "Thermal expansion compensation in high-temperature air handling systems.",
    icon: <FaFire />,
  },
  {
    title: "Flue Gas Ducts",
    desc: "Chemical and heat resistant joints for flue gas desulphurization systems.",
    icon: <FaIndustry />,
  },
  {
    title: "Chimney Stack & Load Shells",
    desc: "Reliable flexible connections for chimney stacks and kiln shell applications.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Power Generation Plants",
    desc: "Critical expansion joints for thermal power stations and boiler systems.",
    icon: <FaCog />,
  },
  {
    title: "Cement & Steel Industries",
    desc: "High-performance joints for kilns, coolers, and preheater ductwork systems.",
    icon: <FaBoxOpen />,
  },
];

const specifications = [
  {
    label: "Manufacturing Standard",
    value: "FSA, USA (Fluid Sealing Association)",
  },
  { label: "Temperature Range", value: "-40°C to +1400°C" },
  { label: "Pressure Rating", value: "Up to 2000 mm WG" },
  { label: "Size Range", value: "100mm to 10,000mm+" },
  { label: "Movement Axial", value: "±50mm to ±200mm" },
  { label: "Movement Lateral", value: "±25mm to ±100mm" },
  { label: "Movement Angular", value: "Up to ±15°" },
  { label: "Materials", value: "PTFE, Silicone, Fiberglass, Ceramic Fiber" },
  { label: "Reinforcement", value: "SS Wire Mesh, Metallic Frames" },
  { label: "Shape Options", value: "Round, Rectangular, Custom" },
  { label: "Flange Material", value: "MS / SS as per requirement" },
  { label: "Design Life", value: "5-10 Years (application dependent)" },
];

const materials = [
  {
    name: "PTFE Coated Fiberglass",
    temp: "Up to 260°C",
    desc: "Excellent chemical resistance and non-stick properties",
  },
  {
    name: "Silicone Coated Fiberglass",
    temp: "Up to 350°C",
    desc: "Flexible, weather resistant, and durable",
  },
  {
    name: "Vermiculite Coated Fiberglass",
    temp: "Up to 800°C",
    desc: "Superior heat resistance for high-temp ducts",
  },
  {
    name: "Ceramic Fiber Cloth",
    temp: "Up to 1400°C",
    desc: "Extreme temperature insulation with low thermal conductivity",
  },
  {
    name: "Stainless Steel Wire Mesh",
    temp: "Reinforcement",
    desc: "Structural support and pressure containment layer",
  },
  {
    name: "Insulation Pillow",
    temp: "Thermal Barrier",
    desc: "Multiple insulation layers for temperature gradient management",
  },
];

const galleryImages = [
  { src: "/assets/images/nmej-1.jpg", title: "Round Fabric Expansion Joint" },
  { src: "/assets/images/nmej-2.jpg", title: "Rectangular Fabric Joint" },
  {
    src: "/assets/images/nmej-3.jpg",
    title: "High-Temperature Joint Installation",
  },
  { src: "/assets/images/nmej-4.jpg", title: "Custom Ducting Expansion Joint" },
  {
    src: "/assets/images/nmej-5.jpg",
    title: "Multi-Layer Construction Detail",
  },
  { src: "/assets/images/nmej-6.jpg", title: "ESP Duct Joint Application" },
];

const whyChooseUs = [
  "Manufactured as per FSA, USA standards",
  "Temperature capability up to 1400°C",
  "Pressure withstanding up to 2000 mm WG",
  "Custom sizes and shapes as per requirement",
  "ISO 9001:2008 certified quality systems",
  "25+ years of manufacturing experience",
  "500+ successful installations worldwide",
  "In-house design and engineering team",
  "Comprehensive material testing and QA",
  "On-time delivery commitment",
];

// ── Component ─────────────────────────────────────────────────
const NonMetallicExpansionJoints = () => {
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
    <div className="nmej">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="nmej__hero">
        <div className="nmej__hero-bg" />
        <div className="nmej__hero-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="nmej__hero-wrapper">
          <div className="nmej__hero-text">
            <div className="nmej__breadcrumb nmej__hanim nmej__hanim--1">
              <Link to="/products">Products</Link>
              <FaChevronRight />
              <Link to="/products">Expansion Joints</Link>
              <FaChevronRight />
              <span>Non Metallic</span>
            </div>

            <h1 className="nmej__hero-title nmej__hanim nmej__hanim--2">
              Non Metallic
              <br />
              <span className="nmej__hero-highlight">
                Fabric Expansion Joints
              </span>
            </h1>

            <p className="nmej__hero-desc nmej__hanim nmej__hanim--3">
              Manufactured as per{" "}
              <strong>FSA, USA (Fluid Sealing Association)</strong> standard.
              Premium fabric expansion joints engineered for superior
              flexibility, thermal resistance up to <strong>1400°C</strong> and
              pressure up to <strong>2000 mm WG</strong>.
            </p>

            <div className="nmej__hero-actions nmej__hanim nmej__hanim--4">
              <Link to="/contact" className="nmej__btn nmej__btn--primary">
                <FaPhoneAlt />
                Get a Quote
              </Link>
              <a
                href="/assets/brochure/brochure.pdf"
                download
                className="nmej__btn nmej__btn--outline"
              >
                <FaFileDownload />
                Brochure
              </a>
            </div>
          </div>

          <div className="nmej__hero-image nmej__hanim nmej__hanim--5">
            <div className="nmej__hero-img-wrap">
              <img
                src={HERO_IMAGE}
                alt="Non Metallic Fabric Expansion Joint"
                loading="eager"
              />
              <div className="nmej__hero-img-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HIGHLIGHTS STRIP
          ═══════════════════════════════════════════════════════ */}
      <section className="nmej__highlights">
        <div className="nmej__container">
          <div className="nmej__highlights-grid">
            {highlights.map((h, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="nmej__hl-card">
                  <div className="nmej__hl-icon">{h.icon}</div>
                  <div>
                    <h3 className="nmej__hl-title">{h.title}</h3>
                    <p className="nmej__hl-text">{h.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INTRO / ABOUT
          ═══════════════════════════════════════════════════════ */}
      <section className="nmej__intro">
        <div className="nmej__container">
          <div className="nmej__intro-grid">
            <FadeIn direction="left">
              <div className="nmej__intro-content">
                <span className="nmej__tag">About the Product</span>
                <h2 className="nmej__title">
                  What Are Fabric Expansion Joints?
                </h2>
                <p className="nmej__text">
                  Fabric Expansion Joints (also known as Non-Metallic Expansion
                  Joints or Flexible Connectors) are manufactured as per{" "}
                  <strong>FSA, USA (Fluid Sealing Association)</strong>{" "}
                  standards. They are multi-layered flexible elements installed
                  in ductwork and piping systems to absorb thermal expansion,
                  vibration, and misalignment.
                </p>
                <p className="nmej__text">
                  They are mainly used with{" "}
                  <strong>
                    Industrial Fans, Mechanical Dust Collectors, Electrostatic
                    Precipitators (ESP), Hot Air Ducts, Flue Gas Ducts, Chimney
                    Stacks &amp; Load Shells
                  </strong>
                  . We are capable of manufacturing Fabric Expansion Joints
                  having withstanding capability of temperature up to{" "}
                  <strong>1400°C</strong> and pressure up to{" "}
                  <strong>2000 mm WG</strong>.
                </p>
                <p className="nmej__text">
                  The sizes and shapes shall be as per customer requirement —
                  including round, rectangular, and any custom configurations.
                  Each joint is engineered using a combination of advanced
                  materials including PTFE-coated fiberglass, silicone-coated
                  fabrics, ceramic fiber insulation, and stainless steel wire
                  mesh reinforcement.
                </p>

                <div className="nmej__intro-quote">
                  <FaQuoteLeft className="nmej__quote-icon" />
                  <p>
                    Our Fabric Expansion Joints are designed as per FSA, USA
                    standards to deliver unmatched flexibility, extreme
                    temperature resistance, and long service life — where
                    conventional metallic joints fall short.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="nmej__intro-stats">
                {[
                  { num: "1400°C", label: "Max Temperature" },
                  { num: "2000", label: "mm WG Pressure" },
                  { num: "10,000mm+", label: "Max Size Available" },
                  { num: "500+", label: "Installations Done" },
                ].map((stat, i) => (
                  <div className="nmej__intro-stat" key={i}>
                    <span className="nmej__intro-stat-num">{stat.num}</span>
                    <span className="nmej__intro-stat-label">{stat.label}</span>
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
      <section className="nmej__features">
        <div className="nmej__container">
          <FadeIn direction="up">
            <div className="nmej__section-head">
              <span className="nmej__tag">Why Choose Us</span>
              <h2 className="nmej__title">Key Features &amp; Benefits</h2>
              <p className="nmej__subtitle">
                Engineered as per FSA, USA standards for extreme industrial
                conditions
              </p>
            </div>
          </FadeIn>

          <div className="nmej__features-grid">
            {features.map((f, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="nmej__feature-card">
                  <div className="nmej__feature-icon">{f.icon}</div>
                  <h3 className="nmej__feature-title">{f.title}</h3>
                  <p className="nmej__feature-text">{f.text}</p>
                  <div className="nmej__feature-num">
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
      <section className="nmej__materials">
        <div className="nmej__container">
          <FadeIn direction="up">
            <div className="nmej__section-head">
              <span className="nmej__tag">Construction Details</span>
              <h2 className="nmej__title">Multi-Layer Material Construction</h2>
              <p className="nmej__subtitle">
                Each layer is carefully selected and assembled for optimal
                performance
              </p>
            </div>
          </FadeIn>

          <div className="nmej__materials-grid">
            {materials.map((m, i) => (
              <FadeIn key={i} direction="up" delay={i * 90}>
                <div className="nmej__material-card">
                  <div className="nmej__material-header">
                    <h3 className="nmej__material-name">{m.name}</h3>
                    <span className="nmej__material-temp">{m.temp}</span>
                  </div>
                  <p className="nmej__material-desc">{m.desc}</p>
                  <div className="nmej__material-num">
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
      <section className="nmej__specs">
        <div className="nmej__container">
          <div className="nmej__specs-grid">
            <FadeIn direction="left">
              <div className="nmej__specs-info">
                <span className="nmej__tag">Technical Data</span>
                <h2 className="nmej__title">Technical Specifications</h2>
                <p className="nmej__text">
                  Our fabric expansion joints are manufactured as per{" "}
                  <strong>FSA, USA</strong> standards, meeting international
                  quality benchmarks. We are capable of handling temperature up
                  to <strong>1400°C</strong> and pressure up to{" "}
                  <strong>2000 mm WG</strong>.
                </p>

                <div className="nmej__specs-highlights">
                  {[
                    {
                      icon: <FaCog />,
                      text: "Custom engineered as per customer requirement",
                    },
                    {
                      icon: <FaBoxOpen />,
                      text: "Round, rectangular & any custom shapes",
                    },
                    {
                      icon: <FaWrench />,
                      text: "Easy installation & field replacement",
                    },
                    {
                      icon: <FaClipboardCheck />,
                      text: "FSA, USA standard compliance",
                    },
                  ].map((h, i) => (
                    <div className="nmej__specs-hl" key={i}>
                      <div className="nmej__specs-hl-icon">{h.icon}</div>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="nmej__specs-table-wrap">
                <table className="nmej__specs-table">
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
      <section className="nmej__applications">
        <div className="nmej__container">
          <FadeIn direction="up">
            <div className="nmej__section-head">
              <span className="nmej__tag">Industries We Serve</span>
              <h2 className="nmej__title">Applications</h2>
              <p className="nmej__subtitle">
                Trusted across industries for critical ducting, fan connections,
                ESP systems, and high-temperature piping
              </p>
            </div>
          </FadeIn>

          <div className="nmej__app-grid">
            {applications.map((app, i) => (
              <FadeIn key={i} direction="up" delay={i * 80}>
                <div className="nmej__app-card">
                  <div className="nmej__app-icon">{app.icon}</div>
                  <div>
                    <h3 className="nmej__app-title">{app.title}</h3>
                    <p className="nmej__app-desc">{app.desc}</p>
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
      <section className="nmej__why">
        <div className="nmej__container">
          <div className="nmej__why-grid">
            <FadeIn direction="left">
              <div className="nmej__why-content">
                <span className="nmej__tag">Our Strengths</span>
                <h2 className="nmej__title">Why Choose Flexocon?</h2>
                <p className="nmej__text">
                  With over 25 years of manufacturing experience and 500+
                  successful installations, Flexocon Engineers Pvt. Ltd. is your
                  trusted partner for high-quality fabric expansion joints
                  manufactured as per international FSA, USA standards.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="nmej__why-list">
                {whyChooseUs.map((item, i) => (
                  <FadeIn key={i} direction="right" delay={i * 60 + 200}>
                    <div className="nmej__why-item">
                      <FaCheckCircle className="nmej__why-check" />
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
      <section className="nmej__gallery">
        <div className="nmej__container">
          <FadeIn direction="up">
            <div className="nmej__section-head">
              <span className="nmej__tag">Product Gallery</span>
              <h2 className="nmej__title">Our Products in Action</h2>
              <p className="nmej__subtitle">
                Fabric expansion joints manufactured for diverse industrial
                applications
              </p>
            </div>
          </FadeIn>

          <div className="nmej__gallery-grid">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div
                  className="nmej__gallery-item"
                  onClick={() => setLightbox({ open: true, index: i })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      setLightbox({ open: true, index: i });
                  }}
                >
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="nmej__gallery-overlay">
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
      <section className="nmej__cta">
        <div className="nmej__container">
          <FadeIn direction="up">
            <div className="nmej__cta-inner">
              <div className="nmej__cta-text">
                <h2 className="nmej__cta-title">
                  Need a Custom Fabric Expansion Joint?
                </h2>
                <p className="nmej__cta-desc">
                  Our engineering team can design and manufacture custom fabric
                  expansion joints as per FSA, USA standards — tailored to your
                  exact temperature, pressure, and size requirements.
                </p>
              </div>
              <div className="nmej__cta-actions">
                <Link to="/contact" className="nmej__btn nmej__btn--white">
                  <FaPhoneAlt />
                  Contact Us
                  <FaArrowRight className="nmej__btn-arrow" />
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
          className="nmej__lightbox"
          onClick={() => setLightbox({ open: false, index: 0 })}
        >
          <div
            className="nmej__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="nmej__lightbox-close"
              onClick={() => setLightbox({ open: false, index: 0 })}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <button
              className="nmej__lightbox-nav nmej__lightbox-nav--prev"
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
              className="nmej__lightbox-image"
            />

            <button
              className="nmej__lightbox-nav nmej__lightbox-nav--next"
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

            <div className="nmej__lightbox-caption">
              <span>{galleryImages[lightbox.index].title}</span>
              <span className="nmej__lightbox-counter">
                {lightbox.index + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NonMetallicExpansionJoints;
