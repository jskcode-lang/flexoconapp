import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCogs,
  FaIndustry,
  FaShieldAlt,
  FaChevronRight,
  FaStar,
  FaAward,
  FaUsers,
  FaGlobeAmericas,
  FaCheckCircle,
} from "react-icons/fa";
import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  return base + clean;
};

/* ── InView Hook ── */
const useInView = (threshold = 0.1) => {
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

/* ── FadeIn ── */
const FadeIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const [ref, visible] = useInView();
  const dirMap = {
    up: "prod__fade--up",
    down: "prod__fade--down",
    left: "prod__fade--left",
    right: "prod__fade--right",
    none: "prod__fade--none",
    scale: "prod__fade--scale",
  };
  return (
    <div
      ref={ref}
      className={`prod__fade ${dirMap[direction] || dirMap.up} ${visible ? "prod__fade--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ── Counter ── */
const AnimCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView(0.3);
  const num = parseInt(target.replace(/[^0-9]/g, ""), 10);
  useEffect(() => {
    if (!visible) return;
    let s = 0;
    const step = Math.ceil(num / 120);
    const timer = setInterval(() => {
      s += step;
      if (s >= num) {
        setCount(num);
        clearInterval(timer);
      } else setCount(s);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, num]);
  return (
    <span ref={ref} className="prod__stat-num">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ── Data ── */
const expansionJoints = [
  {
    title: "Non Metallic Expansion Joints",
    description:
      "Designed for low-pressure applications, our non-metallic expansion joints offer excellent flexibility, vibration dampening, and resistance to corrosive environments. Ideal for HVAC, power plants, and industrial ducting systems.",
    image: asset("assets/img_1.png"),
    link: "/products/expansion-joints/non-metallic",
    features: [
      "Low pressure applications",
      "Vibration dampening",
      "Corrosion resistant",
      "Multiple fabric layers",
    ],
  },
  {
    title: "Metallic Expansion Joints",
    description:
      "Engineered for high-temperature and high-pressure environments, our metallic expansion joints provide superior axial, lateral, and angular movement compensation. Built to withstand extreme industrial conditions.",
    image: asset("assets/img_2.png"),
    link: "/products/expansion-joints/metallic",
    features: [
      "High temperature rated",
      "High pressure capacity",
      "Axial & lateral movement",
      "Stainless steel construction",
    ],
  },
  {
    title: "Rubber Expansion Joints",
    description:
      "Our rubber expansion joints excel in absorbing thermal expansion, reducing noise, and isolating vibration in piping systems. Available in multiple elastomers for diverse chemical and temperature requirements.",
    image: asset("assets/img_3.png"),
    link: "/products/expansion-joints/rubber",
    features: [
      "Thermal expansion absorption",
      "Noise reduction",
      "Vibration isolation",
      "Multiple elastomer options",
    ],
  },
];

const mechanicalCouplings = [
  {
    title: "Resilient Coupling",
    description:
      "Flexible coupling designed to transmit torque while accommodating shaft misalignment. Perfect for pumps, compressors, and general industrial machinery.",
    image: asset("assets/img_4.png"),
    link: "/products/mechanical-power-transmission/resilient-coupling",
    features: [
      "Torque transmission",
      "Misalignment compensation",
      "Easy installation",
      "Low maintenance",
    ],
  },
  {
    title: "Geared Coupling",
    description:
      "Heavy-duty coupling for high-torque applications with excellent angular and axial misalignment capacity. Widely used in steel plants, paper mills, and heavy equipment.",
    image: asset("assets/img_5.png"),
    link: "/products/mechanical-power-transmission/geared-coupling",
    features: [
      "High torque capacity",
      "Angular misalignment",
      "Heavy-duty design",
      "Long service life",
    ],
  },
  {
    title: "Pin Bush & Tyre Coupling",
    description:
      "Robust coupling solution featuring pin and bush elements or tyre-type flexible elements for reliable power transmission in various industrial setups.",
    image: asset("assets/img_7.png"),
    link: "/products/mechanical-power-transmission/pin-bush-tyre-coupling",
    features: [
      "Shock absorption",
      "Torsional flexibility",
      "Simple construction",
      "Wide range of sizes",
    ],
  },
];

const stats = [
  { num: "500", suffix: "+", label: "Products Delivered", icon: <FaAward /> },
  { num: "200", suffix: "+", label: "Happy Clients", icon: <FaUsers /> },
  { num: "25", suffix: "+", label: "Years Experience", icon: <FaStar /> },
  {
    num: "100",
    suffix: "%",
    label: "Quality Assured",
    icon: <FaGlobeAmericas />,
  },
];

/* ── Product Card Sub-Component ── */
const ProductCard = ({ product, index, type }) => {
  const [ref, vis] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`prod__card ${vis ? "prod__card--vis" : ""}`}
      style={{ transitionDelay: `${150 + index * 120}ms` }}
    >
      <div className="prod__card-img">
        <img src={product.image} alt={product.title} loading="lazy" />
        <div className="prod__card-img-overlay">
          <Link to={product.link} className="prod__card-view-btn">
            View Details <FaArrowRight />
          </Link>
        </div>
        <div
          className={`prod__card-badge ${type === "coupling" ? "prod__card-badge--gear" : ""}`}
        >
          {type === "coupling" ? <FaCogs /> : <FaShieldAlt />}
        </div>
        <div className="prod__card-num">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="prod__card-body">
        <h3 className="prod__card-title">{product.title}</h3>
        <p className="prod__card-text">{product.description}</p>
        <div className="prod__card-features">
          {product.features.map((f, i) => (
            <span className="prod__card-feat" key={i}>
              <FaCheckCircle /> {f}
            </span>
          ))}
        </div>
        <Link to={product.link} className="prod__card-link">
          Learn More <FaChevronRight />
        </Link>
      </div>

      <div className="prod__card-glow" />
    </div>
  );
};

/* ── Main Component ── */
const Products = () => {
  return (
    <div className="prod">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="prod__hero">
        <div className="prod__hero-grid" />
        <div className="prod__hero-rad prod__hero-rad--1" />
        <div className="prod__hero-rad prod__hero-rad--2" />
        <div className="prod__hero-rad prod__hero-rad--3" />
        <div className="prod__hero-floats">
          {[...Array(7)].map((_, i) => (
            <div className="prod__hero-float" key={i} />
          ))}
        </div>

        <div className="prod__hero-content">
          <div className="prod__hero-badge prod__ha prod__ha--1">
            <FaIndustry />
            <span>Engineering Excellence</span>
          </div>
          <h1 className="prod__hero-h1 prod__ha prod__ha--2">
            Our
            <span className="prod__hero-h1-accent"> Products</span>
          </h1>
          <p className="prod__hero-sub prod__ha prod__ha--3">
            Precision-engineered expansion joints and mechanical power
            transmission couplings for demanding industrial applications
          </p>
          <div className="prod__hero-line prod__ha prod__ha--4" />
          <div className="prod__hero-chips prod__ha prod__ha--5">
            {["Expansion Joints", "Couplings", "Custom Solutions"].map(
              (c, i) => (
                <span className="prod__hero-chip" key={i}>
                  <FaStar /> {c}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="prod__hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,50 C360,100 720,0 1080,60 C1260,80 1380,30 1440,50 L1440,100 L0,100Z"
              fill="#050e1f"
            />
          </svg>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="prod__stats">
        <div className="prod__stats-bg" />
        <div className="prod__container">
          <div className="prod__stats-grid">
            {stats.map((s, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="prod__stat-card">
                  <div className="prod__stat-icon">{s.icon}</div>
                  <AnimCounter target={s.num} suffix={s.suffix} />
                  <span className="prod__stat-label">{s.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPANSION JOINTS ═══ */}
      <section className="prod__section prod__section--light">
        <div className="prod__container">
          <FadeIn direction="up">
            <div className="prod__sec-head">
              <span className="prod__eyebrow">
                <FaShieldAlt /> Expansion Joints
              </span>
              <h2 className="prod__sec-title">
                High-Performance
                <span className="prod__sec-title-accent">
                  {" "}
                  Expansion Joints
                </span>
              </h2>
              <p className="prod__sec-sub">
                Engineered for reliability and durability across diverse
                industrial applications
              </p>
            </div>
          </FadeIn>

          <div className="prod__card-grid">
            {expansionJoints.map((p, i) => (
              <ProductCard key={i} product={p} index={i} type="expansion" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COUPLINGS ═══ */}
      <section className="prod__section prod__section--dark">
        <div className="prod__section-dark-bg" />
        <div className="prod__container">
          <FadeIn direction="up">
            <div className="prod__sec-head prod__sec-head--light">
              <span className="prod__eyebrow prod__eyebrow--light">
                <FaCogs /> Power Transmission
              </span>
              <h2 className="prod__sec-title prod__sec-title--light">
                Mechanical
                <span className="prod__sec-title-accent--light">
                  {" "}
                  Couplings
                </span>
              </h2>
              <p className="prod__sec-sub prod__sec-sub--light">
                Robust coupling solutions for efficient and reliable power
                transmission in industrial machinery
              </p>
            </div>
          </FadeIn>

          <div className="prod__card-grid">
            {mechanicalCouplings.map((p, i) => (
              <ProductCard key={i} product={p} index={i} type="coupling" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="prod__cta">
        <div className="prod__cta-bg" />
        <div className="prod__container">
          <FadeIn direction="up">
            <div className="prod__cta-content">
              <div className="prod__cta-glow" />
              <h2 className="prod__cta-h2">Need a Custom Solution?</h2>
              <p className="prod__cta-p">
                Our engineering team can design and manufacture custom expansion
                joints and couplings tailored to your specific requirements.
              </p>
              <div className="prod__cta-actions">
                <Link
                  to="/contact"
                  className="prod__cta-btn prod__cta-btn--primary"
                >
                  Contact Us <FaArrowRight />
                </Link>
                <a
                  href={asset("assets/brochure/brochure.pdf")}
                  download
                  className="prod__cta-btn prod__cta-btn--ghost"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Products;
