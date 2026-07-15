import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCogs, FaIndustry, FaShieldAlt } from "react-icons/fa";
import "./Product.css";

// ── Intersection Observer Hook ────────────────────────────────
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, ...options },
    );

    observer.observe(element);
    return () => observer.disconnect();
  });

  return [ref, isVisible];
};

// ── FadeIn Wrapper ────────────────────────────────────────────
const FadeIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const [ref, isVisible] = useInView();

  const dirClass = {
    up: "prod__fade--up",
    down: "prod__fade--down",
    left: "prod__fade--left",
    right: "prod__fade--right",
    none: "prod__fade--none",
  };

  return (
    <div
      ref={ref}
      className={`prod__fade ${dirClass[direction]} ${
        isVisible ? "prod__fade--visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
const BASE = import.meta.env.BASE_URL || "/flexoconapp";
// ── Products Data ─────────────────────────────────────────────
const expansionJoints = [
  {
    title: "Non Metallic Expansion Joints",
    description:
      "Designed for low-pressure applications, our non-metallic expansion joints offer excellent flexibility, vibration dampening, and resistance to corrosive environments. Ideal for HVAC, power plants, and industrial ducting systems.",
    image: BASE + "/assets/img_1.png",
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
    image: BASE + "/assets/img_2.png",
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
    image: BASE + "/assets/img_3.png",
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
    image: BASE + "/assets/img_4.png",
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
    image: BASE + "/assets/img_5.png",
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
    image: BASE + "/assets/img_7.png",
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
  { number: "500+", label: "Products Delivered" },
  { number: "200+", label: "Happy Clients" },
  { number: "25+", label: "Years Experience" },
  { number: "100%", label: "Quality Assured" },
];

// ── Main Component ────────────────────────────────────────────
const Products = () => {
  return (
    <div className="prod">
      {/* ══════════════════════════════════════════════════════
          Hero
          ══════════════════════════════════════════════════════ */}
      <section className="prod__hero">
        <div className="prod__hero-overlay" />

        <div className="prod__hero-shapes">
          <div className="prod__shape prod__shape--1" />
          <div className="prod__shape prod__shape--2" />
          <div className="prod__shape prod__shape--3" />
        </div>

        <div className="prod__hero-content">
          <div className="prod__hero-badge prod__hero-anim prod__hero-anim--1">
            <FaIndustry />
            <span>Engineering Excellence</span>
          </div>
          <h1 className="prod__hero-title prod__hero-anim prod__hero-anim--2">
            Our Products
          </h1>
          <p className="prod__hero-subtitle prod__hero-anim prod__hero-anim--3">
            Precision-engineered expansion joints and mechanical power
            transmission couplings for demanding industrial applications
          </p>
          <div className="prod__hero-line prod__hero-anim prod__hero-anim--4" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Stats
          ══════════════════════════════════════════════════════ */}
      <section className="prod__stats">
        <div className="prod__container">
          <div className="prod__stats-grid">
            {stats.map((stat, i) => (
              <FadeIn key={i} direction="up" delay={i * 100}>
                <div className="prod__stat">
                  <span className="prod__stat-number">{stat.number}</span>
                  <span className="prod__stat-label">{stat.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Expansion Joints Section
          ══════════════════════════════════════════════════════ */}
      <section className="prod__section">
        <div className="prod__container">
          <FadeIn direction="up">
            <div className="prod__section-header">
              <div className="prod__section-icon">
                <FaShieldAlt />
              </div>
              <div>
                <h2 className="prod__section-title">Expansion Joints</h2>
                <p className="prod__section-subtitle">
                  High-performance expansion joints engineered for reliability
                  and durability across diverse industrial applications
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="prod__grid">
            {expansionJoints.map((product, index) => (
              <FadeIn
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 150}
              >
                <div className="prod__card">
                  <div className="prod__card-image">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                    />
                    <div className="prod__card-overlay">
                      <Link to={product.link} className="prod__card-view">
                        View Details
                        <FaArrowRight />
                      </Link>
                    </div>
                    <div className="prod__card-badge">
                      <FaShieldAlt />
                    </div>
                  </div>

                  <div className="prod__card-body">
                    <h3 className="prod__card-title">{product.title}</h3>
                    <p className="prod__card-text">{product.description}</p>

                    <div className="prod__card-features">
                      {product.features.map((feature, fi) => (
                        <span key={fi} className="prod__card-feature">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Mechanical Power Transmission Section
          ══════════════════════════════════════════════════════ */}
      <section className="prod__section prod__section--alt">
        <div className="prod__container">
          <FadeIn direction="up">
            <div className="prod__section-header">
              <div className="prod__section-icon">
                <FaCogs />
              </div>
              <div>
                <h2 className="prod__section-title">
                  Mechanical Power Transmission Couplings
                </h2>
                <p className="prod__section-subtitle">
                  Robust coupling solutions designed for efficient and reliable
                  power transmission in industrial machinery
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="prod__grid">
            {mechanicalCouplings.map((product, index) => (
              <FadeIn
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 150}
              >
                <div className="prod__card">
                  <div className="prod__card-image">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                    />
                    <div className="prod__card-overlay">
                      <Link to={product.link} className="prod__card-view">
                        View Details
                        <FaArrowRight />
                      </Link>
                    </div>
                    <div className="prod__card-badge prod__card-badge--gear">
                      <FaCogs />
                    </div>
                  </div>

                  <div className="prod__card-body">
                    <h3 className="prod__card-title">{product.title}</h3>
                    <p className="prod__card-text">{product.description}</p>

                    <div className="prod__card-features">
                      {product.features.map((feature, fi) => (
                        <span key={fi} className="prod__card-feature">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA Section
          ══════════════════════════════════════════════════════ */}
      <section className="prod__cta">
        <div className="prod__container">
          <FadeIn direction="up">
            <div className="prod__cta-content">
              <h2 className="prod__cta-title">Need a Custom Solution?</h2>
              <p className="prod__cta-text">
                Our engineering team can design and manufacture custom expansion
                joints and couplings tailored to your specific requirements.
              </p>
              <div className="prod__cta-actions">
                <Link
                  to="/contact"
                  className="prod__cta-btn prod__cta-btn--primary"
                >
                  Contact Us
                  <FaArrowRight />
                </Link>
                <a
                  href="/assets/brochure/brochure.pdf"
                  download
                  className="prod__cta-btn prod__cta-btn--secondary"
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
