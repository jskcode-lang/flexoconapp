import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaArrowsAltH,
  FaAward,
  FaBan,
  FaBolt,
  FaCheckCircle,
  FaChevronRight,
  FaCog,
  FaCompressArrowsAlt,
  FaCubes,
  FaFan,
  FaFileDownload,
  FaIndustry,
  FaMinus,
  FaOilCan,
  FaPhoneAlt,
  FaPlus,
  FaQuoteLeft,
  FaSearchPlus,
  FaShieldAlt,
  FaStar,
  FaSyncAlt,
  FaTimes,
  FaTools,
  FaWater,
} from "react-icons/fa";
import "./PinBushTyreCoupling.css";

const BASE = import.meta.env.BASE_URL || "/flexoconapp";
// ─── Image Assets ─────────────────────────────────────────────
const HERO_IMAGE = "/assets/images/pbtc/pbtc-hero.jpg";
const PIN_BUSH_IMAGE = "/assets/images/pbtc/pin-bush-coupling.jpg";
const TYRE_IMAGE = "/assets/images/pbtc/tyre-coupling.jpg";

// ─── Intersection Observer ────────────────────────────────────
const useInView = ({
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
} = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, visible]);

  return [ref, visible];
};

// ─── Reveal Animation Wrapper ─────────────────────────────────
const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={[
        "pbtc__reveal",
        `pbtc__reveal--${direction}`,
        visible ? "pbtc__reveal--visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ─── Page Data ────────────────────────────────────────────────
const constructionParts = [
  {
    number: "01",
    icon: <FaBolt />,
    title: "High-Tensile Bolts",
    description:
      "Torque is transmitted through high-tensile bolts to the machine input shaft for a strong and dependable drive.",
  },
  {
    number: "02",
    icon: <FaCubes />,
    title: "Special Rubber Bushes",
    description:
      "Special rubber compounds absorb slight misalignment, torsional vibration and sudden shock loads.",
  },
  {
    number: "03",
    icon: <FaCog />,
    title: "Industrial Flanges",
    description:
      "Standard flanges are manufactured from high-grade cast iron, with cast steel options for special applications.",
  },
  {
    number: "04",
    icon: <FaSyncAlt />,
    title: "Flexible Tyre Element",
    description:
      "The durable flexing body compensates for shaft movement while reducing vibration and impact loading.",
  },
];

const pinBushFeatures = [
  {
    icon: <FaBan />,
    title: "No Lubrication",
    text: "The coupling operates without regular lubrication, helping reduce routine maintenance.",
  },
  {
    icon: <FaCompressArrowsAlt />,
    title: "Misalignment Accommodation",
    text: "Special rubber bushes accommodate slight shaft misalignment during operation.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Vibration Damping",
    text: "The cushioned drive arrangement helps damp torsional vibration.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Shock Resilience",
    text: "Provides reversing resiliency and protection against sudden shock loading.",
  },
  {
    icon: <FaTools />,
    title: "Easy Installation",
    text: "Designed for straightforward installation, inspection and removal.",
  },
  {
    icon: <FaAward />,
    title: "Economical Solution",
    text: "A practical and inexpensive coupling solution for industrial power transmission.",
  },
];

const tyreFeatures = [
  {
    icon: <FaCompressArrowsAlt />,
    title: "High Misalignment Tolerance",
    text: "Accommodates parallel and angular misalignment while also compensating for end float.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Impact Load Protection",
    text: "The flexible tyre body protects connected machinery from heavy shocks and impact loads.",
  },
  {
    icon: <FaTools />,
    title: "Easy Assembly",
    text: "The tyre coupling is easy to assemble and disassemble, helping minimize maintenance time.",
  },
  {
    icon: <FaBan />,
    title: "No Lubrication Required",
    text: "The flexible element works without lubrication, keeping servicing simple and clean.",
  },
];

const couplingRange = [
  {
    number: "01",
    tag: "Standard",
    title: "Pin Bush Flexible Coupling",
    description:
      "A cushioned-drive coupling using high-tensile bolts and special rubber bushes for dependable torque transmission.",
  },
  {
    number: "02",
    tag: "Brake Type",
    title: "Brake Drum-cum-Flexible Coupling",
    description:
      "Manufactured in different brake drum diameters to suit standard as well as non-standard braking arrangements.",
  },
  {
    number: "03",
    tag: "Flexible",
    title: "Tyre Flexible Coupling",
    description:
      "A highly flexible coupling designed to accommodate angular, parallel and axial shaft movement.",
  },
  {
    number: "04",
    tag: "Special",
    title: "Cast Steel Flange Coupling",
    description:
      "Cast steel flange variants are available for special applications requiring application-specific construction.",
  },
];

const pinBushSpecifications = [
  { label: "Coupling Type", value: "Cushioned Drive" },
  { label: "Torque Transmission", value: "Through High-Tensile Bolts" },
  { label: "Flexible Component", value: "Special Rubber Bushes" },
  { label: "Standard Flange Material", value: "High-Grade Cast Iron" },
  { label: "Special Flange Material", value: "Cast Steel" },
  { label: "Standard Models", value: "20 Models" },
  { label: "Rating Range at 100 RPM", value: "0.81 kW to 249 kW" },
  { label: "Lubrication", value: "Not Required" },
  { label: "Brake Arrangement", value: "Standard and Non-Standard" },
];

const tyreSpecifications = [
  { label: "Coupling Type", value: "Flexible Tyre Coupling" },
  { label: "Flexible Component", value: "Durable Flexing Tyre Body" },
  { label: "Parallel Misalignment", value: "Up to 3 mm" },
  { label: "Angular Misalignment", value: "Up to 4°" },
  { label: "End Float", value: "Up to 8 mm" },
  { label: "Lubrication", value: "Not Required" },
  { label: "Vibration Control", value: "Torsional Vibration Reduction" },
  { label: "Shock Protection", value: "Impact and Heavy Shock Loads" },
  { label: "Maintenance", value: "Easy Assembly and Disassembly" },
];

const applications = [
  { icon: <FaCog />, title: "Motors & Gearboxes" },
  { icon: <FaCubes />, title: "Conveying Systems" },
  { icon: <FaFan />, title: "Fans & Blowers" },
  { icon: <FaWater />, title: "Pumps" },
  { icon: <FaIndustry />, title: "Process Plants" },
  { icon: <FaTools />, title: "Crushers & Mixers" },
  { icon: <FaBolt />, title: "Material Handling" },
  { icon: <FaOilCan />, title: "General Machinery" },
];

const faqData = [
  {
    question: "How does a Pin Bush coupling transmit torque?",
    answer:
      "The Pin Bush coupling transmits torque through high-tensile bolts to the machine input shaft. Special rubber bushes around the pins create a cushioned drive and help absorb vibration, slight misalignment and shock loads.",
  },
  {
    question: "What materials are used for the coupling flanges?",
    answer:
      "Standard Flexocon Pin Bush coupling flanges are manufactured from high-grade cast iron. Cast steel flanges can also be manufactured for special applications.",
  },
  {
    question: "What is the available Pin Bush coupling range?",
    answer:
      "Flexocon offers 20 standard Pin Bush coupling models with a rating range from 0.81 kW to 249 kW at 100 RPM.",
  },
  {
    question: "Can Flexocon manufacture Brake Drum couplings?",
    answer:
      "Yes. Flexocon manufactures Pin Bush type Brake Drum-cum-Flexible Couplings in different diameters to suit standard and non-standard brake arrangements.",
  },
  {
    question: "How much misalignment can the Tyre coupling accommodate?",
    answer:
      "Under normal operating conditions, the Flexocon Tyre coupling can accommodate parallel misalignment up to 3 mm, angular misalignment up to 4°, and end float up to 8 mm.",
  },
  {
    question: "Do Pin Bush and Tyre couplings require lubrication?",
    answer:
      "No. Both coupling designs operate without lubrication, making maintenance simpler and reducing routine servicing requirements.",
  },
];

const whyFlexocon = [
  "20 standard Pin Bush coupling models",
  "Power ratings from 0.81 kW to 249 kW at 100 RPM",
  "High-grade cast iron flange construction",
  "Cast steel flanges for special applications",
  "Standard and non-standard brake drum options",
  "Up to 4° angular misalignment with Tyre couplings",
  "Up to 3 mm parallel misalignment",
  "Up to 8 mm end float compensation",
  "No lubrication required",
  "Application-specific manufacturing support",
];

const gallery = [
  {
    src: BASE + "/assets/images/pbtc/pin-bush-coupling.jpg",
    title: "Pin Bush Flexible Coupling",
  },
  {
    src: BASE + "/assets/images/pbtc/tyre-coupling.jpg",
    title: "Tyre Flexible Coupling",
  },
  {
    src: BASE + "/assets/images/pbtc/brake-drum-coupling.jpg",
    title: "Brake Drum-cum-Flexible Coupling",
  },
  {
    src: BASE + "/assets/images/pbtc/pin-bush-detail.jpg",
    title: "Pin Bush and Bolt Assembly",
  },
  {
    src: BASE + "/assets/images/pbtc/tyre-element-detail.jpg",
    title: "Flexible Tyre Element",
  },
  {
    src: BASE + "/assets/images/pbtc/custom-coupling.jpg",
    title: "Custom Coupling Configuration",
  },
];

// ─── Main Component ───────────────────────────────────────────
const PinBushTyreCoupling = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
  });

  const openLightbox = (index) => {
    setLightbox({ open: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 });
  };

  const previousImage = () => {
    setLightbox((current) => ({
      ...current,
      index: (current.index - 1 + gallery.length) % gallery.length,
    }));
  };

  const nextImage = () => {
    setLightbox((current) => ({
      ...current,
      index: (current.index + 1) % gallery.length,
    }));
  };

  // Lock body scrolling while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox.open]);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!lightbox.open) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox.open]);

  return (
    <div className="pbtc">
      {/* ═══════════════ Hero ═══════════════ */}
      <section className="pbtc__hero">
        <div
          className="pbtc__hero-background"
          style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        />
        <div className="pbtc__hero-overlay" />

        <div className="pbtc__hero-content">
          <nav
            className="pbtc__breadcrumb pbtc__hero-animate pbtc__hero-animate--1"
            aria-label="Breadcrumb"
          >
            <Link to="/products">Products</Link>
            <FaChevronRight />
            <span>Mechanical Power Transmission</span>
            <FaChevronRight />
            <span>Pin Bush &amp; Tyre Coupling</span>
          </nav>

          <span className="pbtc__hero-eyebrow pbtc__hero-animate pbtc__hero-animate--2">
            Flexible Power Transmission Solutions
          </span>

          <h1 className="pbtc__hero-title pbtc__hero-animate pbtc__hero-animate--3">
            Pin Bush &amp; Tyre
            <span>Flexible Couplings</span>
          </h1>

          <p className="pbtc__hero-description pbtc__hero-animate pbtc__hero-animate--4">
            Cushioned and flexible coupling solutions engineered to transmit
            torque, accommodate shaft misalignment, damp vibration and protect
            connected machinery from shock loads.
          </p>

          <div className="pbtc__hero-actions pbtc__hero-animate pbtc__hero-animate--5">
            <Link to="/contact" className="pbtc__button pbtc__button--primary">
              <FaPhoneAlt />
              Request a Quote
            </Link>

            <a
              href="/assets/brochure/brochure.pdf"
              download
              className="pbtc__button pbtc__button--outline"
            >
              <FaFileDownload />
              Download Brochure
            </a>
          </div>

          <div className="pbtc__hero-chips pbtc__hero-animate pbtc__hero-animate--6">
            <div className="pbtc__hero-chip">
              <FaCog />
              20 Standard Models
            </div>

            <div className="pbtc__hero-chip">
              <FaBolt />
              0.81–249 kW at 100 RPM
            </div>

            <div className="pbtc__hero-chip">
              <FaCompressArrowsAlt />
              Multi-Directional Flexibility
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Construction Cards ═══════════════ */}
      <section className="pbtc__construction">
        <div className="pbtc__container">
          <div className="pbtc__construction-grid">
            {constructionParts.map((part, index) => (
              <Reveal key={part.title} direction="up" delay={index * 90}>
                <article className="pbtc__construction-card">
                  <span className="pbtc__construction-number">
                    {part.number}
                  </span>

                  <div className="pbtc__construction-icon">{part.icon}</div>

                  <h2 className="pbtc__construction-title">{part.title}</h2>

                  <p className="pbtc__construction-text">{part.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Pin Bush Overview ═══════════════ */}
      <section className="pbtc__overview">
        <div className="pbtc__container">
          <div className="pbtc__overview-row">
            <Reveal direction="left" className="pbtc__overview-media-wrap">
              <div className="pbtc__overview-media">
                <img
                  src={PIN_BUSH_IMAGE}
                  alt="Flexocon Pin Bush flexible coupling"
                  loading="lazy"
                />

                <div className="pbtc__overview-badge">
                  <strong>20</strong>
                  <span>Standard Models</span>
                </div>

                <div className="pbtc__overview-line" />
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={130}
              className="pbtc__overview-content-wrap"
            >
              <div className="pbtc__overview-content">
                <span className="pbtc__section-tag">Pin Bush Coupling</span>

                <h2 className="pbtc__section-title">
                  Cushioned Drive for Reliable Torque Transmission
                </h2>

                <p className="pbtc__paragraph">
                  Flexocon Pin Bush type flexible couplings are of the
                  cushioned-drive type. Torque is transmitted through{" "}
                  <strong>high-tensile bolts</strong> to the machine input
                  shafts.
                </p>

                <p className="pbtc__paragraph">
                  Special rubber compounds are used in the bushes so that the
                  coupling can absorb slight misalignment, torsional vibration
                  and shock loads. The flanges are manufactured from{" "}
                  <strong>high-grade cast iron</strong>. Cast steel flanges are
                  also available for special applications.
                </p>

                <p className="pbtc__paragraph">
                  Flexocon offers <strong>20 standard models</strong> of Pin
                  Bush couplings with a rating range from{" "}
                  <strong>0.81 kW to 249 kW at 100 RPM</strong>.
                </p>

                <div className="pbtc__quote">
                  <FaQuoteLeft />

                  <p>
                    Flexocon also manufactures Pin Bush type Brake
                    Drum-cum-Flexible Couplings in different diameters to suit
                    standard as well as non-standard brakes.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ Tyre Overview ═══════════════ */}
      <section className="pbtc__overview pbtc__overview--alternate">
        <div className="pbtc__container">
          <div className="pbtc__overview-row pbtc__overview-row--reverse">
            <Reveal direction="right" className="pbtc__overview-media-wrap">
              <div className="pbtc__overview-media">
                <img
                  src={TYRE_IMAGE}
                  alt="Flexocon Tyre flexible coupling"
                  loading="lazy"
                />

                <div className="pbtc__overview-badge pbtc__overview-badge--tyre">
                  <strong>4°</strong>
                  <span>Angular Tolerance</span>
                </div>

                <div className="pbtc__overview-line" />
              </div>
            </Reveal>

            <Reveal
              direction="left"
              delay={130}
              className="pbtc__overview-content-wrap"
            >
              <div className="pbtc__overview-content">
                <span className="pbtc__section-tag">Tyre Coupling</span>

                <h2 className="pbtc__section-title">
                  Flexible Protection for Misalignment and Shock Loads
                </h2>

                <p className="pbtc__paragraph">
                  The Flexocon Tyre coupling is primarily designed to
                  accommodate both <strong>angular</strong> and{" "}
                  <strong>parallel misalignment</strong>, while also
                  compensating for end float.
                </p>

                <p className="pbtc__paragraph">
                  Torsional vibration is reduced and shock loads are minimized
                  by the flexible tyre body. Under normal operating
                  circumstances, the coupling can accommodate angular
                  misalignment up to <strong>4°</strong>, parallel misalignment
                  up to <strong>3 mm</strong>, and end float up to{" "}
                  <strong>8 mm</strong>.
                </p>

                <p className="pbtc__paragraph">
                  The durable flexing member suppresses initial shock loading
                  and considerably reduces the stresses commonly experienced by
                  power-driven machinery.
                </p>

                <div className="pbtc__quote">
                  <FaQuoteLeft />

                  <p>
                    The flexible body protects connected equipment while
                    allowing the coupling to adjust to normal shaft movement.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ Features ═══════════════ */}
      <section className="pbtc__features">
        <div className="pbtc__container">
          <Reveal direction="up">
            <div className="pbtc__section-heading">
              <span className="pbtc__section-tag">Product Advantages</span>

              <h2 className="pbtc__section-title">Features &amp; Benefits</h2>

              <p className="pbtc__section-subtitle">
                Two flexible coupling designs for dependable industrial power
                transmission.
              </p>
            </div>
          </Reveal>

          <div className="pbtc__feature-layout">
            <Reveal direction="left">
              <article className="pbtc__feature-panel">
                <div className="pbtc__feature-panel-header">
                  <div className="pbtc__feature-panel-icon">
                    <FaBolt />
                  </div>

                  <div>
                    <span>Product 01</span>
                    <h3>Pin Bush Coupling Features</h3>
                  </div>
                </div>

                <div className="pbtc__feature-list">
                  {pinBushFeatures.map((feature, index) => (
                    <div className="pbtc__feature-item" key={feature.title}>
                      <div className="pbtc__feature-icon">{feature.icon}</div>

                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                      </div>

                      <span className="pbtc__feature-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <article className="pbtc__feature-panel pbtc__feature-panel--dark">
                <div className="pbtc__feature-panel-header">
                  <div className="pbtc__feature-panel-icon">
                    <FaSyncAlt />
                  </div>

                  <div>
                    <span>Product 02</span>
                    <h3>Tyre Coupling Features</h3>
                  </div>
                </div>

                <div className="pbtc__feature-list">
                  {tyreFeatures.map((feature, index) => (
                    <div className="pbtc__feature-item" key={feature.title}>
                      <div className="pbtc__feature-icon">{feature.icon}</div>

                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                      </div>

                      <span className="pbtc__feature-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pbtc__feature-note">
                  <FaShieldAlt />

                  <p>
                    Designed to reduce torsional vibration and protect connected
                    machinery from initial shocks and impact loads.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ Misalignment Data ═══════════════ */}
      <section className="pbtc__alignment">
        <div className="pbtc__alignment-pattern" />

        <div className="pbtc__container">
          <Reveal direction="up">
            <div className="pbtc__alignment-heading">
              <span>Flexocon Tyre Coupling</span>
              <h2>High Misalignment Tolerance</h2>
              <p>Operating capabilities under normal application conditions.</p>
            </div>
          </Reveal>

          <div className="pbtc__alignment-grid">
            <Reveal direction="up" delay={0}>
              <article className="pbtc__alignment-card">
                <FaArrowsAltH />
                <strong>3 mm</strong>
                <span>Parallel Misalignment</span>
              </article>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <article className="pbtc__alignment-card">
                <FaSyncAlt />
                <strong>4°</strong>
                <span>Maximum Angular Misalignment</span>
              </article>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <article className="pbtc__alignment-card">
                <FaCompressArrowsAlt />
                <strong>8 mm</strong>
                <span>Maximum End Float</span>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ Product Range ═══════════════ */}
      <section className="pbtc__range">
        <div className="pbtc__container">
          <Reveal direction="up">
            <div className="pbtc__section-heading">
              <span className="pbtc__section-tag">Product Range</span>

              <h2 className="pbtc__section-title">
                Flexible Coupling Configurations
              </h2>

              <p className="pbtc__section-subtitle">
                Standard, brake drum and special construction options for
                different industrial requirements.
              </p>
            </div>
          </Reveal>

          <div className="pbtc__range-grid">
            {couplingRange.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 90}>
                <article className="pbtc__range-card">
                  <div className="pbtc__range-top">
                    <span className="pbtc__range-number">{item.number}</span>

                    <span className="pbtc__range-tag">{item.tag}</span>
                  </div>

                  <div className="pbtc__range-icon">
                    {index === 0 && <FaBolt />}
                    {index === 1 && <FaCog />}
                    {index === 2 && <FaSyncAlt />}
                    {index === 3 && <FaTools />}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Specifications ═══════════════ */}
      <section className="pbtc__specifications">
        <div className="pbtc__container">
          <Reveal direction="up">
            <div className="pbtc__section-heading">
              <span className="pbtc__section-tag">Technical Information</span>

              <h2 className="pbtc__section-title">Coupling Specifications</h2>

              <p className="pbtc__section-subtitle">
                A clear comparison of Pin Bush and Tyre coupling
                characteristics.
              </p>
            </div>
          </Reveal>

          <div className="pbtc__specification-grid">
            <Reveal direction="left">
              <article className="pbtc__specification-card">
                <div className="pbtc__specification-header">
                  <div>
                    <span>Technical Data</span>
                    <h3>Pin Bush Coupling</h3>
                  </div>

                  <FaBolt />
                </div>

                <div className="pbtc__table-wrap">
                  <table className="pbtc__table">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Value</th>
                      </tr>
                    </thead>

                    <tbody>
                      {pinBushSpecifications.map((specification) => (
                        <tr key={specification.label}>
                          <td>{specification.label}</td>
                          <td>{specification.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <article className="pbtc__specification-card">
                <div className="pbtc__specification-header pbtc__specification-header--dark">
                  <div>
                    <span>Technical Data</span>
                    <h3>Tyre Coupling</h3>
                  </div>

                  <FaSyncAlt />
                </div>

                <div className="pbtc__table-wrap">
                  <table className="pbtc__table">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Value</th>
                      </tr>
                    </thead>

                    <tbody>
                      {tyreSpecifications.map((specification) => (
                        <tr key={specification.label}>
                          <td>{specification.label}</td>
                          <td>{specification.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal direction="up" delay={150}>
            <p className="pbtc__specification-note">
              <FaCheckCircle />
              Final coupling selection should be based on operating speed,
              transmitted power, shaft dimensions, duty cycle and application
              conditions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ Applications ═══════════════ */}
      <section className="pbtc__applications">
        <div className="pbtc__container">
          <Reveal direction="up">
            <div className="pbtc__section-heading">
              <span className="pbtc__section-tag">Industrial Uses</span>

              <h2 className="pbtc__section-title">Typical Applications</h2>

              <p className="pbtc__section-subtitle">
                Suitable for power transmission systems where vibration,
                misalignment or shock loading must be controlled.
              </p>
            </div>
          </Reveal>

          <div className="pbtc__application-grid">
            {applications.map((application, index) => (
              <Reveal key={application.title} direction="up" delay={index * 55}>
                <article className="pbtc__application-card">
                  <span className="pbtc__application-icon">
                    {application.icon}
                  </span>

                  <h3>{application.title}</h3>
                  <FaArrowRight className="pbtc__application-arrow" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="pbtc__faq">
        <div className="pbtc__container">
          <div className="pbtc__faq-layout">
            <Reveal direction="left">
              <div className="pbtc__faq-introduction">
                <span className="pbtc__section-tag">Common Questions</span>

                <h2 className="pbtc__section-title">
                  Frequently Asked Questions
                </h2>

                <p className="pbtc__paragraph">
                  Learn more about Flexocon Pin Bush and Tyre flexible
                  couplings, their construction, operating range and
                  misalignment capabilities.
                </p>

                <Link to="/contact" className="pbtc__faq-contact">
                  <FaPhoneAlt />

                  <div>
                    <span>Need selection assistance?</span>
                    <strong>Talk to our team</strong>
                  </div>

                  <FaArrowRight />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="pbtc__faq-list">
                {faqData.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <article
                      key={faq.question}
                      className={`pbtc__faq-item ${
                        isOpen ? "pbtc__faq-item--open" : ""
                      }`}
                    >
                      <button
                        type="button"
                        className="pbtc__faq-question"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>

                        <span className="pbtc__faq-control">
                          {isOpen ? <FaMinus /> : <FaPlus />}
                        </span>
                      </button>

                      <div className="pbtc__faq-answer-wrap">
                        <p className="pbtc__faq-answer">{faq.answer}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ Why Flexocon ═══════════════ */}
      <section className="pbtc__why">
        <div className="pbtc__container">
          <div className="pbtc__why-layout">
            <Reveal direction="left">
              <div className="pbtc__why-introduction">
                <span className="pbtc__section-tag">
                  The Flexocon Advantage
                </span>

                <h2 className="pbtc__section-title">
                  Flexible Solutions for Demanding Drives
                </h2>

                <p className="pbtc__paragraph">
                  Flexocon supplies standard and special coupling configurations
                  designed to meet different power transmission, brake drum and
                  misalignment requirements.
                </p>

                <div className="pbtc__why-highlight">
                  <FaStar />

                  <div>
                    <strong>20</strong>
                    <span>Standard Pin Bush Models</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="pbtc__why-list">
                {whyFlexocon.map((item, index) => (
                  <div className="pbtc__why-item" key={item}>
                    <FaCheckCircle />

                    <span>{item}</span>

                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ Gallery ═══════════════ */}
      <section className="pbtc__gallery">
        <div className="pbtc__container">
          <Reveal direction="up">
            <div className="pbtc__section-heading">
              <span className="pbtc__section-tag">Product Gallery</span>

              <h2 className="pbtc__section-title">Coupling Showcase</h2>

              <p className="pbtc__section-subtitle">
                Pin Bush, Tyre and Brake Drum coupling configurations.
              </p>
            </div>
          </Reveal>

          <div className="pbtc__gallery-grid">
            {gallery.map((image, index) => (
              <Reveal key={image.src} direction="up" delay={index * 80}>
                <button
                  type="button"
                  className="pbtc__gallery-item"
                  onClick={() => openLightbox(index)}
                  aria-label={`Open image: ${image.title}`}
                >
                  <img src={image.src} alt={image.title} loading="lazy" />

                  <span className="pbtc__gallery-overlay">
                    <FaSearchPlus />
                    <strong>{image.title}</strong>
                    <small>View image</small>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="pbtc__cta">
        <div className="pbtc__container">
          <Reveal direction="up">
            <div className="pbtc__cta-box">
              <div className="pbtc__cta-icon">
                <FaCog />
              </div>

              <div className="pbtc__cta-content">
                <span>Need help selecting a coupling?</span>

                <h2>Get the Right Pin Bush or Tyre Coupling</h2>

                <p>
                  Share your power, speed, shaft and application details with
                  our team for product selection assistance.
                </p>
              </div>

              <Link to="/contact" className="pbtc__button pbtc__button--white">
                <FaPhoneAlt />
                Contact Us
                <FaArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ Lightbox ═══════════════ */}
      {lightbox.open && (
        <div
          className="pbtc__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Product image gallery"
          onClick={closeLightbox}
        >
          <div
            className="pbtc__lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="pbtc__lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              <FaTimes />
            </button>

            <button
              type="button"
              className="pbtc__lightbox-navigation pbtc__lightbox-navigation--previous"
              onClick={previousImage}
              aria-label="Previous image"
            >
              &#8249;
            </button>

            <img
              src={gallery[lightbox.index].src}
              alt={gallery[lightbox.index].title}
              className="pbtc__lightbox-image"
            />

            <button
              type="button"
              className="pbtc__lightbox-navigation pbtc__lightbox-navigation--next"
              onClick={nextImage}
              aria-label="Next image"
            >
              &#8250;
            </button>

            <div className="pbtc__lightbox-caption">
              <strong>{gallery[lightbox.index].title}</strong>

              <span>
                {lightbox.index + 1} / {gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PinBushTyreCoupling;
