import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronRight,
  FaIndustry,
  FaCog,
  FaShieldAlt,
  FaAward,
  FaUsers,
  FaGlobeAmericas,
  FaPhoneAlt,
  FaStar,
  FaWrench,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";
import "./Home.css";

/* ── Safe URL helper ── */
const BASE = import.meta.env.BASE_URL;
const asset = (path) => {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  return base + clean;
};

/* ── Single Hero Background Image ── */
const HERO_BG_IMAGE = asset("assets/home_page_background.png");

/* ── Floating Product Images (Changes every 6.5 seconds) ── */
const HERO_PRODUCT_IMAGES = [
  {
    src: asset("assets/geared_coupling.png"),
    alt: "Non Metallic Expansion Joints",
  },
  {
    src: asset("assets/grid-spring_resilient_coupling.png"),
    alt: "Metallic Expansion Joints",
  },
  {
    src: asset("assets/metallic_expansion_joints_bellows.png"),
    alt: "Rubber Expansion Joints",
  },
  { src: asset("assets/pinbush_coupling.png"), alt: "Resilient Coupling" },
  { src: asset("assets/rubber_expansion.png"), alt: "Geared Coupling" },
  {
    src: asset("assets/tyre_flexible_coupling.png"),
    alt: "Pin Bush & Tyre Coupling",
  },
];

/* ── InView Hook ── */
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
  }, []);
  return [ref, visible];
};

/* ── Reveal ── */
const Reveal = ({ children, dir = "up", delay = 0, className = "" }) => {
  const [ref, vis] = useInView();
  const d = {
    up: "hm__rv--up",
    down: "hm__rv--down",
    left: "hm__rv--left",
    right: "hm__rv--right",
    zoom: "hm__rv--zoom",
    none: "hm__rv--none",
  };
  return (
    <div
      ref={ref}
      className={`hm__rv ${d[dir]} ${vis ? "hm__rv--vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ── Counter Hook ── */
const useCounter = (target, duration = 2200) => {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target, duration]);
  return [ref, count];
};

/* ── Counter Component ── */
const Counter = ({ number, suffix = "", label, icon }) => {
  const [ref, count] = useCounter(number);
  return (
    <div className="hm__counter" ref={ref}>
      <div className="hm__counter-icon-wrap">
        {icon && <div className="hm__counter-icon">{icon}</div>}
      </div>
      <span className="hm__counter-num">
        {count}
        {suffix}
      </span>
      <span className="hm__counter-label">{label}</span>
    </div>
  );
};

/* ── Categorized Products Data ── */
const couplingProducts = [
  {
    title: "Pinbush Coupling",
    desc: "Robust coupling for reliable power transmission and heavy-duty industrial setups.",
    image: asset("assets/pinbush_coupling.png"),
    link: "/products/mechanical-power-transmission/pin-bush-tyre-coupling",
    icon: <FaIndustry />,
    tag: "Heavy Duty",
  },
  {
    title: "Geared Coupling",
    desc: "Crown gear teeth coupling with ±1.5° angular misalignment capacity.",
    image: asset("assets/geared_coupling.png"),
    link: "/products/mechanical-power-transmission/geared-coupling",
    icon: <FaWrench />,
    tag: "Precision",
  },
  {
    title: "Grid Spring Resilient Coupling",
    desc: "Grid spring coupling with 80% shock damping — all-metal durable construction.",
    image: asset("assets/resilient_coupling.png"),
    link: "/products/mechanical-power-transmission/resilient-coupling",
    icon: <FaCog />,
    tag: "Shock Absorb",
  },
  {
    title: "Tyre Coupling",
    desc: "Highly flexible rubber tyre coupling for superior shock absorption and shaft misalignment compensation.",
    image: asset("assets/tyre_flexible_coupling.png"),
    link: "/products/mechanical-power-transmission/pin-bush-tyre-coupling",
    icon: <FaCog />,
    tag: "Vibration Damping",
  },
];

const expansionJointProducts = [
  {
    title: "Metallic Expansion Joints & Bellows",
    desc: "EJMA standard SS 304/316/321 bellows engineered for high pressure piping systems.",
    image: asset("assets/metallic_expansion_joints_bellows.png"),
    link: "/products/expansion-joints/metallic",
    icon: <FaBoxOpen />,
    tag: "High Pressure",
  },
  {
    title: "Non Metallic Expansion Joints",
    desc: "Fabric joints for high temp ducts, ESP, and industrial fans — temperature resistant up to 1400°C.",
    image: asset("assets/non_metallic_expansion.png"),
    link: "/products/expansion-joints/non-metallic",
    icon: <FaShieldAlt />,
    tag: "High Temperature",
  },
  {
    title: "Rubber Expansion Joints",
    desc: "Flexible elastomer joints that absorb pipe movement, thermal vibration, and acoustic noise.",
    image: asset("assets/rubber_expansion.png"),
    link: "/products/expansion-joints/rubber",
    icon: <FaShieldAlt />,
    tag: "Vibration Absorption",
  },
];

const clientLogos = [
  asset("assets/oswal.png"),
  asset("assets/part_1.png"),
  asset("assets/part_2.png"),
  asset("assets/part_3.png"),
  asset("assets/part_4.png"),
  asset("assets/part_5.png"),
  asset("assets/part_6.png"),
  asset("assets/part_7.png"),
  asset("assets/part_8.png"),
  asset("assets/part_9.png"),
  asset("assets/part_10.png"),
  asset("assets/part_11.png"),
  asset("assets/part_12.png"),
  asset("assets/part_13.png"),
  asset("assets/part_14.png"),
  asset("assets/part_15.png"),
  asset("assets/part_16.png"),
  asset("assets/part_17.png"),
  asset("assets/part_18.png"),
  asset("assets/part_19.png"),
  asset("assets/part_20.png"),
  asset("assets/part_21.png"),
  asset("assets/part_22.png"),
  asset("assets/part_23.png"),
  asset("assets/part_24.png"),
  asset("assets/part_25.png"),
  asset("assets/part_26.png"),
  asset("assets/part_27.png"),
  asset("assets/part_28.png"),
  asset("assets/part_29.png"),
  asset("assets/part_30.png"),
  asset("assets/part_31.png"),
  asset("assets/part_32.png"),
  asset("assets/part_33.png"),
  asset("assets/part_34.png"),
  asset("assets/part_35.png"),
  asset("assets/part_36.png"),
  asset("assets/part_37.png"),
  asset("assets/part_38.png"),
  asset("assets/part_39.png"),
  asset("assets/part_40.png"),
  asset("assets/part_41.png"),
  asset("assets/part_42.png"),
];

/* ── Scroll Progress Bar ── */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="hm__scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const Home = () => {
  const [heroProductIndex, setHeroProductIndex] = useState(0);

  // Cycle floating product image every 6.5 seconds
  useEffect(() => {
    const iv = setInterval(() => {
      setHeroProductIndex((prev) => (prev + 1) % HERO_PRODUCT_IMAGES.length);
    }, 6500);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="hm">
      <ScrollProgress />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION (Single Zooming BG + Flexbox + Auto-Changing Floating Product)
      ═══════════════════════════════════════════════════════ */}
      <section className="hm__hero">
        <div className="hm__hero-bg">
          <img
            src={HERO_BG_IMAGE}
            alt="Flexocon Industrial Background"
            className="hm__hero-bg-img"
            loading="eager"
          />
        </div>

        <div className="hm__hero-overlay" />
        <div className="hm__hero-overlay-bottom" />
        <div className="hm__hero-grain" />
        <div className="hm__hero-grid-lines" />

        <div className="hm__hero-orbs" aria-hidden="true">
          <span className="hm__orb hm__orb--1" />
          <span className="hm__orb hm__orb--2" />
          <span className="hm__orb hm__orb--3" />
          <span className="hm__orb hm__orb--4" />
        </div>

        <div className="hm__wrap hm__hero-container">
          <div className="hm__hero-row">
            <div className="hm__hero-left">
              <div className="hm__hero-badge hm__ha hm__ha--1">
                <span className="hm__hero-badge-dot" />
                <FaIndustry />
                <span>Since 2001 — Engineering Excellence</span>
              </div>

              <h1 className="hm__hero-h1 hm__ha hm__ha--2">
                Precision Engineered
                <span className="hm__hero-accent">Industrial Solutions</span>
              </h1>

              <p className="hm__hero-p hm__ha hm__ha--3">
                Leading manufacturers of <strong>Expansion Joints</strong> &amp;{" "}
                <strong>Mechanical Power Transmission Couplings</strong> —
                backed by 25+ years of engineering expertise.
              </p>
            </div>

            <div className="hm__hero-right hm__ha hm__ha--3">
              <div className="hm__hero-float-stage">
                {HERO_PRODUCT_IMAGES.map((prod, idx) => (
                  <div
                    key={idx}
                    className={`hm__hero-prod-slide ${
                      idx === heroProductIndex
                        ? "hm__hero-prod-slide--active"
                        : ""
                    }`}
                  >
                    <img
                      src={prod.src}
                      alt={prod.alt}
                      className="hm__hero-float-img"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hm__hero-btns hm__ha hm__ha--4">
            <Link to="/products" className="hm__btn hm__btn--fill">
              <span>Explore Products</span>
              <FaArrowRight />
            </Link>
            <Link to="/contact" className="hm__btn hm__btn--ghost">
              <FaPhoneAlt />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PRODUCTS (Categorized: Couplings & Expansion Joints)
      ═══════════════════════════════════════════════════════ */}
      <section className="hm__products">
        <div className="hm__products-bg-dots" aria-hidden="true" />
        <div className="hm__wrap">
          <Reveal dir="up">
            <div className="hm__sec-head">
              <span className="hm__tag">
                <span className="hm__tag-dot" />
                What We Manufacture
              </span>
              <h2 className="hm__h2">
                Our <span className="hm__h2-accent">Products</span>
              </h2>
              <p className="hm__sub">
                Engineered for maximum reliability, high load capacities, and
                severe industrial working environments.
              </p>
            </div>
          </Reveal>

          {/* ── Category 1: Couplings ── */}
          <div className="hm__prod-category-block">
            <Reveal dir="up">
              <div className="hm__prod-cat-head">
                <div className="hm__prod-cat-badge">
                  <FaCog />
                  <span>Category 01</span>
                </div>
                <h3 className="hm__prod-cat-title">Couplings </h3>
                <p className="hm__prod-cat-sub">
                  Mechanical power transmission couplings engineered for smooth
                  torque transfer, shock dampening, and shaft alignment.
                </p>
              </div>
            </Reveal>

            <div className="hm__products-grid hm__products-grid--4">
              {couplingProducts.map((p, i) => (
                <Reveal key={i} dir="up" delay={i * 80}>
                  <Link to={p.link} className="hm__prod-card">
                    <div className="hm__prod-img">
                      <img src={p.image} alt={p.title} loading="lazy" />
                      <div className="hm__prod-img-ov">
                        <span>
                          View Details <FaArrowRight />
                        </span>
                      </div>
                      <div className="hm__prod-badge">{p.icon}</div>
                      <div className="hm__prod-tag">{p.tag}</div>
                    </div>
                    <div className="hm__prod-body">
                      <h4 className="hm__prod-title">{p.title}</h4>
                      <p className="hm__prod-desc">{p.desc}</p>
                      <span className="hm__prod-link">
                        Learn More <FaChevronRight />
                      </span>
                    </div>
                    <div className="hm__prod-shine" aria-hidden="true" />
                    <div className="hm__prod-glow" aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Subtle Divider Between Product Categories ── */}
          <div className="hm__prod-divider" aria-hidden="true" />

          {/* ── Category 2: Expansion Joints ── */}
          <div className="hm__prod-category-block">
            <Reveal dir="up">
              <div className="hm__prod-cat-head">
                <div className="hm__prod-cat-badge">
                  <FaShieldAlt />
                  <span>Category 02</span>
                </div>
                <h3 className="hm__prod-cat-title">
                  Expansion{" "}
                  <span className="hm__prod-cat-title-accent">Joints</span>
                </h3>
                <p className="hm__prod-cat-sub">
                  Flexible piping joints designed to absorb thermal growth,
                  structural vibrations, and pressure stresses.
                </p>
              </div>
            </Reveal>

            <div className="hm__products-grid hm__products-grid--3">
              {expansionJointProducts.map((p, i) => (
                <Reveal key={i} dir="up" delay={i * 80}>
                  <Link to={p.link} className="hm__prod-card">
                    <div className="hm__prod-img">
                      <img src={p.image} alt={p.title} loading="lazy" />
                      <div className="hm__prod-img-ov">
                        <span>
                          View Details <FaArrowRight />
                        </span>
                      </div>
                      <div className="hm__prod-badge">{p.icon}</div>
                      <div className="hm__prod-tag">{p.tag}</div>
                    </div>
                    <div className="hm__prod-body">
                      <h4 className="hm__prod-title">{p.title}</h4>
                      <p className="hm__prod-desc">{p.desc}</p>
                      <span className="hm__prod-link">
                        Learn More <FaChevronRight />
                      </span>
                    </div>
                    <div className="hm__prod-shine" aria-hidden="true" />
                    <div className="hm__prod-glow" aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal dir="up" delay={150}>
            <div className="hm__products-cta">
              <Link to="/products" className="hm__btn hm__btn--outline">
                <span>View Full Product Catalog</span> <FaArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════════ */}
      <section className="hm__about">
        <div className="hm__about-bg-blob" aria-hidden="true" />
        <div
          className="hm__about-bg-blob hm__about-bg-blob--2"
          aria-hidden="true"
        />
        <div className="hm__wrap">
          <div className="hm__about-grid">
            <Reveal dir="left" className="hm__about-left">
              <div className="hm__about-img-box">
                <div className="hm__about-img-frame">
                  <img
                    src={asset("assets/flexocon_factory.png")}
                    alt="Flexocon Factory"
                    loading="lazy"
                  />
                  <div className="hm__about-img-shine" aria-hidden="true" />
                </div>
                <div className="hm__about-exp-badge">
                  <FaAward className="hm__about-exp-icon" />
                  <div>
                    <span className="hm__about-exp-num">25+</span>
                    <span className="hm__about-exp-label">
                      Years of Excellence
                    </span>
                  </div>
                </div>
                <div className="hm__about-img-ring" aria-hidden="true" />
                <div
                  className="hm__about-img-ring hm__about-img-ring--2"
                  aria-hidden="true"
                />
                <div className="hm__about-img-dots" aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal dir="right" delay={150} className="hm__about-right">
              <span className="hm__tag">
                <span className="hm__tag-dot" /> About Us
              </span>
              <h2 className="hm__h2">
                Flexocon <span className="hm__h2-accent">Engineers</span>
              </h2>
              <p className="hm__p">
                Established in <strong>2001</strong>, Flexocon Engineers is
                backed by qualified Mechanical Engineers having more than{" "}
                <strong>25 years experience</strong> in Mechanical Power
                Transmission Coupling &amp; Expansion Joints at various
                industrial applications.
              </p>
              <p className="hm__p">
                Technical calculations of our designs are based on{" "}
                <strong>recognised international standards</strong> and carried
                out on specially developed computer programs displayed on our{" "}
                <strong>CAD system</strong>.
              </p>

              <div className="hm__about-points">
                {[
                  { icon: <FaAward />, text: "ISO 9001:2008 Certified" },
                  {
                    icon: <FaGlobeAmericas />,
                    text: "FSA USA & EJMA Standards",
                  },
                  { icon: <FaUsers />, text: "Expert Engineering Team" },
                  { icon: <FaCog />, text: "CAD Based Design System" },
                ].map((pt, i) => (
                  <div className="hm__about-point" key={i}>
                    <div className="hm__about-point-icon">{pt.icon}</div>
                    <span>{pt.text}</span>
                    <FaCheckCircle className="hm__about-point-check" />
                  </div>
                ))}
              </div>

              <Link to="/about" className="hm__btn hm__btn--fill">
                <span>Know More</span> <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COUNTERS
      ═══════════════════════════════════════════════════════ */}
      <section className="hm__counters">
        <div className="hm__counters-overlay" aria-hidden="true" />
        <div className="hm__counters-shapes" aria-hidden="true">
          <span className="hm__cshape hm__cshape--1" />
          <span className="hm__cshape hm__cshape--2" />
          <span className="hm__cshape hm__cshape--3" />
        </div>
        <div className="hm__wrap">
          <div className="hm__counters-grid">
            <Counter
              number={25}
              suffix="+"
              label="Years Experience"
              icon={<FaAward />}
            />
            <Counter
              number={20000}
              suffix="+"
              label="Installations"
              icon={<FaIndustry />}
            />
            <Counter
              number={10000}
              suffix="+"
              label="Happy Clients"
              icon={<FaUsers />}
            />
            <Counter
              number={100}
              suffix="%"
              label="Quality Assured"
              icon={<FaCheckCircle />}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLIENTS
      ═══════════════════════════════════════════════════════ */}
      <section className="hm__clients">
        <div className="hm__clients-bg" aria-hidden="true" />
        <div className="hm__wrap">
          <Reveal dir="up">
            <div className="hm__sec-head">
              <span className="hm__tag">
                <span className="hm__tag-dot" /> Trusted By
              </span>
              <h2 className="hm__h2">
                Our Valued <span className="hm__h2-accent">Clients</span>
              </h2>
              <p className="hm__sub">
                Proudly serving 2000+ clients across diverse industries
                nationwide
              </p>
            </div>
          </Reveal>
        </div>

        <div className="hm__marquee">
          <div className="hm__marquee-track hm__marquee-track--ltr">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div className="hm__marquee-item" key={`ltr-${i}`}>
                <img
                  src={logo}
                  alt={`Client ${(i % clientLogos.length) + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hm__marquee hm__marquee--rtl">
          <div className="hm__marquee-track hm__marquee-track--rtl">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div className="hm__marquee-item" key={`rtl-${i}`}>
                <img
                  src={logo}
                  alt={`Client ${(i % clientLogos.length) + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════════ */}
      <section className="hm__why">
        <div className="hm__why-bg-shape" aria-hidden="true" />
        <div
          className="hm__why-bg-shape hm__why-bg-shape--2"
          aria-hidden="true"
        />
        <div className="hm__wrap">
          <Reveal dir="up">
            <div className="hm__sec-head">
              <span className="hm__tag">
                <span className="hm__tag-dot" /> Our Strengths
              </span>
              <h2 className="hm__h2">
                Why Choose <span className="hm__h2-accent">Flexocon?</span>
              </h2>
            </div>
          </Reveal>

          <div className="hm__why-grid">
            {[
              {
                icon: <FaAward />,
                title: "Certified Quality",
                text: "ISO 9001:2008 certified with FSA USA & EJMA standard compliance.",
              },
              {
                icon: <FaCog />,
                title: "Precision Engineering",
                text: "CAD-based design with specially developed computer programs.",
              },
              {
                icon: <FaIndustry />,
                title: "25+ Years Expertise",
                text: "Backed by qualified engineers with decades of industry experience.",
              },
              {
                icon: <FaWrench />,
                title: "Custom Solutions",
                text: "Any size, configuration, and specification as per your requirement.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Tested Materials",
                text: "Manufactured using tested raw materials with continuous inspection.",
              },
              {
                icon: <FaStar />,
                title: "On-Time Delivery",
                text: "Committed to delivering quality products within agreed timelines.",
              },
            ].map((w, i) => (
              <Reveal key={i} dir="up" delay={i * 80}>
                <div className="hm__why-card">
                  <div className="hm__why-icon-wrap">
                    <div className="hm__why-icon">{w.icon}</div>
                    <div className="hm__why-icon-ring" aria-hidden="true" />
                  </div>
                  <h3 className="hm__why-title">{w.title}</h3>
                  <p className="hm__why-text">{w.text}</p>
                  <div className="hm__why-num">0{i + 1}</div>
                  <div className="hm__why-shine" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="hm__cta">
        <div className="hm__cta-canvas" aria-hidden="true">
          <span className="hm__cta-shape hm__cta-shape--1" />
          <span className="hm__cta-shape hm__cta-shape--2" />
          <span className="hm__cta-shape hm__cta-shape--3" />
        </div>
        <div className="hm__wrap">
          <Reveal dir="zoom">
            <div className="hm__cta-box">
              <span className="hm__cta-tag">
                <span className="hm__tag-dot" /> Get In Touch
              </span>
              <h2 className="hm__cta-h2">
                Ready to Discuss Your Requirements?
              </h2>
              <p className="hm__cta-p">
                Our engineering team is ready to design the perfect solution for
                your application — contact us today.
              </p>
              <div className="hm__cta-btns">
                <Link to="/contact" className="hm__btn hm__btn--white">
                  <FaPhoneAlt />
                  <span>Contact Us</span>
                  <FaArrowRight className="hm__btn-arr" />
                </Link>
                <Link to="/products" className="hm__btn hm__btn--ghost-white">
                  <span>View Products</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
