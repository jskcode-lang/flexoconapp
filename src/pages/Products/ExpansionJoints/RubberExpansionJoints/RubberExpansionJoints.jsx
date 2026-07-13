import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
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
  FaClipboardCheck,
  FaWater,
  FaTint,
  FaVolumeDown,
  FaRecycle,
  FaSlidersH,
  FaOilCan,
  FaBolt,
  FaFlask,
} from "react-icons/fa";
import "./RubberExpansionJoints.css";

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
    up: "rej__fade--up",
    down: "rej__fade--down",
    left: "rej__fade--left",
    right: "rej__fade--right",
    none: "rej__fade--none",
  };

  return (
    <div
      ref={ref}
      className={`rej__fade ${dirs[direction]} ${
        isVisible ? "rej__fade--visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Constants ─────────────────────────────────────────────────
const HERO_IMAGE = "/assets/img_3.png";

// ── Data ──────────────────────────────────────────────────────
const highlights = [
  {
    icon: <FaGlobeAmericas />,
    title: "FSA, USA Standard",
    text: "Manufactured as per Fluid Sealing Association (FSA), USA standards ensuring international quality compliance.",
  },
  {
    icon: <FaRulerCombined />,
    title: "25mm to 2200mm NB",
    text: "Available in sizes from 25 mm NB to 2200 NB in circular and rectangular configurations.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Up to 30 kg/cm²",
    text: "Suitable for pressure range up to 30 kg/sq.cm for demanding piping system applications.",
  },
  {
    icon: <FaThermometerHalf />,
    title: "Up to 120°C",
    text: "Temperature withstanding capability up to 120°C for hot water, steam, and process piping.",
  },
];

const features = [
  {
    icon: <FaCompressArrowsAlt />,
    title: "Vibration Isolation",
    text: "Effectively isolates and absorbs vibration from pumps, compressors, and rotating equipment — protecting connected piping and structures.",
  },
  {
    icon: <FaVolumeDown />,
    title: "Noise Reduction",
    text: "Significantly reduces noise transmission through piping systems, creating quieter operational environments in industrial and commercial facilities.",
  },
  {
    icon: <FaThermometerHalf />,
    title: "Thermal Expansion Absorption",
    text: "Absorbs thermal expansion and contraction in piping systems carrying hot or cold fluids — preventing stress on rigid connections.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Chemical Resistance",
    text: "Available in multiple elastomer compounds offering excellent resistance to acids, alkalis, oils, and various chemical media.",
  },
  {
    icon: <FaTint />,
    title: "Leak-Tight Performance",
    text: "Engineered for zero-leak performance with precision-molded rubber construction and integral flanges or floating flange design.",
  },
  {
    icon: <FaRecycle />,
    title: "Long Service Life",
    text: "High-quality rubber compounds with nylon tire cord reinforcement provide excellent fatigue resistance and extended operational life.",
  },
];

const elastomers = [
  {
    name: "Natural Rubber (NR)",
    temp: "-30°C to +80°C",
    desc: "General purpose — excellent elasticity and abrasion resistance for water and air applications.",
    media: "Water, Air, Mild Chemicals",
  },
  {
    name: "EPDM (Ethylene Propylene)",
    temp: "-40°C to +120°C",
    desc: "Outstanding resistance to hot water, steam, ozone, and weathering. Most versatile elastomer choice.",
    media: "Hot Water, Steam, Acids, Alkalis",
  },
  {
    name: "Neoprene (CR)",
    temp: "-30°C to +100°C",
    desc: "Good resistance to oils, weathering, and moderate chemicals. Excellent flame resistance properties.",
    media: "Oils, Refrigerants, Weathering",
  },
  {
    name: "Nitrile (NBR)",
    temp: "-20°C to +100°C",
    desc: "Superior oil and fuel resistance. Ideal for petroleum-based fluids and hydrocarbon applications.",
    media: "Petroleum, Oils, Fuels, Solvents",
  },
  {
    name: "Hypalon (CSM)",
    temp: "-20°C to +120°C",
    desc: "Excellent resistance to chemicals, acids, and oxidizing agents. Good color stability under UV exposure.",
    media: "Acids, Chemicals, Oxidizing Agents",
  },
  {
    name: "Viton (FKM)",
    temp: "-20°C to +200°C",
    desc: "Premium fluoroelastomer with exceptional heat and chemical resistance for the most demanding applications.",
    media: "Fuels, Solvents, Acids, High Temp",
  },
];

const types = [
  {
    name: "Single Arch Expansion Joint",
    desc: "Standard design for moderate movement — absorbs axial, lateral, and angular movement in a compact single arch profile.",
    icon: <FaSlidersH />,
  },
  {
    name: "Double Arch Expansion Joint",
    desc: "Increased movement capacity — two arches provide greater axial compression, extension, and lateral displacement.",
    icon: <FaCompressArrowsAlt />,
  },
  {
    name: "Triple Arch Expansion Joint",
    desc: "Maximum movement absorption — three arches for applications requiring large axial and lateral movement capacity.",
    icon: <FaLayerGroup />,
  },
  {
    name: "Reducer Expansion Joint",
    desc: "Connects pipes of different diameters while absorbing movement — eliminates the need for separate reducers.",
    icon: <FaCog />,
  },
  {
    name: "Flanged End Expansion Joint",
    desc: "Integral molded rubber flanges or floating steel flanges — bolt-on installation for easy replacement and maintenance.",
    icon: <FaWrench />,
  },
  {
    name: "Rectangular Expansion Joint",
    desc: "Custom rectangular configurations as per customer specifications for ducting and non-circular piping systems.",
    icon: <FaBoxOpen />,
  },
];

const applications = [
  {
    title: "Water Supply Systems",
    desc: "Municipal and industrial water supply, distribution, and treatment piping networks.",
    icon: <FaWater />,
  },
  {
    title: "HVAC Systems",
    desc: "Chilled water, hot water, and condenser water piping in heating and cooling systems.",
    icon: <FaThermometerHalf />,
  },
  {
    title: "Pump & Compressor Stations",
    desc: "Vibration isolation at pump suction and discharge connections in pumping stations.",
    icon: <FaCog />,
  },
  {
    title: "Chemical Processing",
    desc: "Chemical transfer lines, acid/alkali piping, and process fluid handling systems.",
    icon: <FaFlask />,
  },
  {
    title: "Power Generation",
    desc: "Cooling water systems, condensate lines, and auxiliary piping in power plants.",
    icon: <FaBolt />,
  },
  {
    title: "Oil & Petrochemical",
    desc: "Fuel lines, crude oil piping, and refinery process systems requiring oil-resistant joints.",
    icon: <FaOilCan />,
  },
  {
    title: "Marine & Shipbuilding",
    desc: "Seawater cooling, ballast water, and engine exhaust piping on marine vessels.",
    icon: <FaGlobeAmericas />,
  },
  {
    title: "Sewage & Effluent Treatment",
    desc: "Sewage treatment plants, effluent handling, and waste water piping systems.",
    icon: <FaTint />,
  },
];

const specifications = [
  {
    label: "Manufacturing Standard",
    value: "FSA, USA (Fluid Sealing Association)",
  },
  { label: "Size Range", value: "25 mm NB to 2200 mm NB" },
  {
    label: "Configuration",
    value: "Circular & Rectangular (as per customer spec)",
  },
  { label: "Pressure Rating", value: "Up to 30 kg/sq.cm" },
  { label: "Temperature Range", value: "-40°C to +120°C (EPDM)" },
  { label: "Arch Type", value: "Single, Double, Triple Arch" },
  {
    label: "Body Material",
    value: "NR, EPDM, Neoprene, Nitrile, Hypalon, Viton",
  },
  { label: "Reinforcement", value: "Nylon Tire Cord, Steel Wire" },
  {
    label: "Flange Type",
    value: "Integral Rubber / Floating Steel / Fixed Steel",
  },
  { label: "Flange Drilling", value: "ANSI 150, PN10, PN16, BS Table D/E, IS" },
  { label: "Movement Axial", value: "As per arch type and size" },
  { label: "Movement Lateral", value: "As per arch type and size" },
  { label: "Movement Angular", value: "As per arch type and size" },
  { label: "Testing", value: "Hydrostatic pressure test, visual inspection" },
];

const whyChooseUs = [
  "Manufactured as per FSA, USA standards",
  "Sizes from 25 mm NB to 2200 mm NB",
  "Pressure capability up to 30 kg/sq.cm",
  "Temperature range up to 120°C",
  "Circular and rectangular configurations",
  "Multiple elastomer options available",
  "ISO 9001:2008 certified quality",
  "25+ years of manufacturing expertise",
  "Custom sizes as per customer specification",
  "Comprehensive hydrostatic pressure testing",
];

const galleryImages = [
  { src: "/assets/images/rej-1.jpg", title: "Single Arch Rubber Joint" },
  { src: "/assets/images/rej-2.jpg", title: "Double Arch Expansion Joint" },
  { src: "/assets/images/rej-3.jpg", title: "EPDM Rubber Joint" },
  { src: "/assets/images/rej-4.jpg", title: "Large Diameter Joint" },
  { src: "/assets/images/rej-5.jpg", title: "Flanged Rubber Joint" },
  { src: "/assets/images/rej-6.jpg", title: "Rectangular Rubber Joint" },
];

// ── Component ─────────────────────────────────────────────────
const RubberExpansionJoints = () => {
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
    <div className="rej">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="rej__hero">
        <div className="rej__hero-bg" />
        <div className="rej__hero-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="rej__hero-wrapper">
          <div className="rej__hero-text">
            <div className="rej__breadcrumb rej__hanim rej__hanim--1">
              <Link to="/products">Products</Link>
              <FaChevronRight />
              <Link to="/products">Expansion Joints</Link>
              <FaChevronRight />
              <span>Rubber</span>
            </div>

            <h1 className="rej__hero-title rej__hanim rej__hanim--2">
              Rubber
              <br />
              <span className="rej__hero-highlight">Expansion Joints</span>
            </h1>

            <p className="rej__hero-desc rej__hanim rej__hanim--3">
              Manufactured as per{" "}
              <strong>FSA, USA (Fluid Sealing Association)</strong> standard.
              Available from <strong>25 mm NB to 2200 NB</strong> in circular
              and rectangular configurations — suitable up to{" "}
              <strong>30 kg/sq.cm</strong> pressure and <strong>120°C</strong>{" "}
              temperature.
            </p>

            <div className="rej__hero-actions rej__hanim rej__hanim--4">
              <Link to="/contact" className="rej__btn rej__btn--primary">
                <FaPhoneAlt />
                Get a Quote
              </Link>
              <a
                href="/assets/brochure/brochure.pdf"
                download
                className="rej__btn rej__btn--outline"
              >
                <FaFileDownload />
                Brochure
              </a>
            </div>
          </div>

          <div className="rej__hero-image rej__hanim rej__hanim--5">
            <div className="rej__hero-img-wrap">
              <img
                src={HERO_IMAGE}
                alt="Rubber Expansion Joint"
                loading="eager"
              />
              <div className="rej__hero-img-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HIGHLIGHTS
          ═══════════════════════════════════════════════════════ */}
      <section className="rej__highlights">
        <div className="rej__container">
          <div className="rej__highlights-grid">
            {highlights.map((h, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="rej__hl-card">
                  <div className="rej__hl-icon">{h.icon}</div>
                  <div>
                    <h3 className="rej__hl-title">{h.title}</h3>
                    <p className="rej__hl-text">{h.text}</p>
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
      <section className="rej__intro">
        <div className="rej__container">
          <div className="rej__intro-grid">
            <FadeIn direction="left">
              <div className="rej__intro-content">
                <span className="rej__tag">About the Product</span>
                <h2 className="rej__title">
                  What Are Rubber Expansion Joints?
                </h2>
                <p className="rej__text">
                  Rubber Expansion Joints are manufactured as per{" "}
                  <strong>FSA, USA (Fluid Sealing Association)</strong>{" "}
                  standard. They are flexible connectors made from synthetic or
                  natural rubber compounds, reinforced with nylon tire cord and
                  steel wire, designed to absorb movement, reduce noise, and
                  isolate vibration in piping systems.
                </p>
                <p className="rej__text">
                  At present, we manufacture Rubber Expansion Joints of size
                  from <strong>25 mm NB to 2200 NB</strong> in circular
                  configuration and rectangular configuration as per customer's
                  specification. These Rubber Expansion Joints are suitable up
                  to a pressure range of <strong>30 kg/sq.cm</strong> and
                  temperature range up to <strong>120°C</strong>.
                </p>
                <p className="rej__text">
                  Available in multiple elastomer compounds including Natural
                  Rubber, EPDM, Neoprene, Nitrile, Hypalon, and Viton — each
                  selected based on the specific media, temperature, and
                  chemical compatibility requirements of the application.
                </p>

                <div className="rej__intro-quote">
                  <FaQuoteLeft className="rej__quote-icon" />
                  <p>
                    Our rubber expansion joints are manufactured as per FSA, USA
                    standards — delivering superior vibration isolation, noise
                    reduction, and leak-tight performance from 25 mm NB to 2200
                    NB.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="rej__intro-stats">
                {[
                  { num: "2200", label: "mm NB Max Size" },
                  { num: "30", label: "kg/cm² Pressure" },
                  { num: "120°C", label: "Max Temperature" },
                  { num: "500+", label: "Installations Done" },
                ].map((stat, i) => (
                  <div className="rej__intro-stat" key={i}>
                    <span className="rej__intro-stat-num">{stat.num}</span>
                    <span className="rej__intro-stat-label">{stat.label}</span>
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
      <section className="rej__features">
        <div className="rej__container">
          <FadeIn direction="up">
            <div className="rej__section-head">
              <span className="rej__tag">Why Choose Us</span>
              <h2 className="rej__title">Key Features &amp; Benefits</h2>
              <p className="rej__subtitle">
                Precision-molded rubber expansion joints as per FSA, USA
                standards
              </p>
            </div>
          </FadeIn>

          <div className="rej__features-grid">
            {features.map((f, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="rej__feature-card">
                  <div className="rej__feature-icon">{f.icon}</div>
                  <h3 className="rej__feature-title">{f.title}</h3>
                  <p className="rej__feature-text">{f.text}</p>
                  <div className="rej__feature-num">
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
      <section className="rej__types">
        <div className="rej__container">
          <FadeIn direction="up">
            <div className="rej__section-head">
              <span className="rej__tag">Product Range</span>
              <h2 className="rej__title">Types of Rubber Expansion Joints</h2>
              <p className="rej__subtitle">
                Available in various arch configurations to meet specific
                movement and pressure requirements
              </p>
            </div>
          </FadeIn>

          <div className="rej__types-grid">
            {types.map((t, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="rej__type-card">
                  <div className="rej__type-icon">{t.icon}</div>
                  <h3 className="rej__type-title">{t.name}</h3>
                  <p className="rej__type-text">{t.desc}</p>
                  <div className="rej__type-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ELASTOMERS
          ═══════════════════════════════════════════════════════ */}
      <section className="rej__elastomers">
        <div className="rej__container">
          <FadeIn direction="up">
            <div className="rej__section-head">
              <span className="rej__tag">Material Options</span>
              <h2 className="rej__title">Elastomer Compounds</h2>
              <p className="rej__subtitle">
                Multiple rubber compounds available for diverse chemical and
                temperature requirements
              </p>
            </div>
          </FadeIn>

          <div className="rej__elastomers-grid">
            {elastomers.map((e, i) => (
              <FadeIn key={i} direction="up" delay={i * 90}>
                <div className="rej__elastomer-card">
                  <div className="rej__elastomer-header">
                    <h3 className="rej__elastomer-name">{e.name}</h3>
                    <span className="rej__elastomer-temp">{e.temp}</span>
                  </div>
                  <p className="rej__elastomer-desc">{e.desc}</p>
                  <div className="rej__elastomer-media">
                    <span className="rej__elastomer-media-label">
                      Suitable For:
                    </span>
                    <span className="rej__elastomer-media-value">
                      {e.media}
                    </span>
                  </div>
                  <div className="rej__elastomer-num">
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
      <section className="rej__specs">
        <div className="rej__container">
          <div className="rej__specs-grid">
            <FadeIn direction="left">
              <div className="rej__specs-info">
                <span className="rej__tag">Technical Data</span>
                <h2 className="rej__title">Technical Specifications</h2>
                <p className="rej__text">
                  Our rubber expansion joints are manufactured as per{" "}
                  <strong>FSA, USA</strong> standards with sizes from{" "}
                  <strong>25 mm NB to 2200 NB</strong>, pressure up to{" "}
                  <strong>30 kg/sq.cm</strong>, and temperature up to{" "}
                  <strong>120°C</strong>.
                </p>

                <div className="rej__specs-highlights">
                  {[
                    {
                      icon: <FaClipboardCheck />,
                      text: "FSA, USA standard compliance",
                    },
                    {
                      icon: <FaCog />,
                      text: "Circular & rectangular configurations",
                    },
                    {
                      icon: <FaBoxOpen />,
                      text: "Single, double, triple arch options",
                    },
                    {
                      icon: <FaWrench />,
                      text: "ANSI, PN, BS, IS flange drilling",
                    },
                  ].map((h, i) => (
                    <div className="rej__specs-hl" key={i}>
                      <div className="rej__specs-hl-icon">{h.icon}</div>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="rej__specs-table-wrap">
                <table className="rej__specs-table">
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
      <section className="rej__applications">
        <div className="rej__container">
          <FadeIn direction="up">
            <div className="rej__section-head">
              <span className="rej__tag">Industries We Serve</span>
              <h2 className="rej__title">Applications</h2>
              <p className="rej__subtitle">
                Trusted in piping systems across diverse industries for
                vibration isolation and movement absorption
              </p>
            </div>
          </FadeIn>

          <div className="rej__app-grid">
            {applications.map((app, i) => (
              <FadeIn key={i} direction="up" delay={i * 80}>
                <div className="rej__app-card">
                  <div className="rej__app-icon">{app.icon}</div>
                  <div>
                    <h3 className="rej__app-title">{app.title}</h3>
                    <p className="rej__app-desc">{app.desc}</p>
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
      <section className="rej__why">
        <div className="rej__container">
          <div className="rej__why-grid">
            <FadeIn direction="left">
              <div className="rej__why-content">
                <span className="rej__tag">Our Strengths</span>
                <h2 className="rej__title">Why Choose Flexocon?</h2>
                <p className="rej__text">
                  With over 25 years of manufacturing experience and 500+
                  successful installations, Flexocon Engineers Pvt. Ltd.
                  delivers premium rubber expansion joints manufactured as per
                  FSA, USA standards — from 25 mm NB to 2200 NB.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <div className="rej__why-list">
                {whyChooseUs.map((item, i) => (
                  <FadeIn key={i} direction="right" delay={i * 60 + 200}>
                    <div className="rej__why-item">
                      <FaCheckCircle className="rej__why-check" />
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
      <section className="rej__gallery">
        <div className="rej__container">
          <FadeIn direction="up">
            <div className="rej__section-head">
              <span className="rej__tag">Product Gallery</span>
              <h2 className="rej__title">Our Products in Action</h2>
              <p className="rej__subtitle">
                FSA standard rubber expansion joints for diverse piping
                applications
              </p>
            </div>
          </FadeIn>

          <div className="rej__gallery-grid">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div
                  className="rej__gallery-item"
                  onClick={() => setLightbox({ open: true, index: i })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      setLightbox({ open: true, index: i });
                  }}
                >
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="rej__gallery-overlay">
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
      <section className="rej__cta">
        <div className="rej__container">
          <FadeIn direction="up">
            <div className="rej__cta-inner">
              <div className="rej__cta-text">
                <h2 className="rej__cta-title">
                  Need a Custom Rubber Expansion Joint?
                </h2>
                <p className="rej__cta-desc">
                  Our team manufactures rubber expansion joints as per FSA, USA
                  standards — any size from 25 mm NB to 2200 NB, in circular or
                  rectangular configuration per your requirement.
                </p>
              </div>
              <div className="rej__cta-actions">
                <Link to="/contact" className="rej__btn rej__btn--white">
                  <FaPhoneAlt />
                  Contact Us
                  <FaArrowRight className="rej__btn-arrow" />
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
          className="rej__lightbox"
          onClick={() => setLightbox({ open: false, index: 0 })}
        >
          <div
            className="rej__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="rej__lightbox-close"
              onClick={() => setLightbox({ open: false, index: 0 })}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <button
              className="rej__lightbox-nav rej__lightbox-nav--prev"
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
              className="rej__lightbox-image"
            />

            <button
              className="rej__lightbox-nav rej__lightbox-nav--next"
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

            <div className="rej__lightbox-caption">
              <span>{galleryImages[lightbox.index].title}</span>
              <span className="rej__lightbox-counter">
                {lightbox.index + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RubberExpansionJoints;
