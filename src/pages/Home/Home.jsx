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
  FaQuoteLeft,
  FaStar,
  FaBolt,
  FaWrench,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";
import "./Home.css";

// ── Safe URL helper ──────────────────────────────────────────
// Ensures paths are properly joined regardless of BASE_URL value
const BASE = import.meta.env.BASE_URL;

const asset = (path) => {
  // Remove leading slash from path if present
  const clean = path.startsWith("/") ? path.slice(1) : path;
  // Ensure BASE ends with slash
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  return base + clean;
};

// ── InView Hook ───────────────────────────────────────────────
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
      { threshold: 0.1, ...opts },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

// ── Reveal ────────────────────────────────────────────────────
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

// ── Counter Hook ──────────────────────────────────────────────
const useCounter = (target, duration = 2000) => {
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

// ── Counter Component ─────────────────────────────────────────
const Counter = ({ number, suffix = "", label, icon }) => {
  const [ref, count] = useCounter(number);
  return (
    <div className="hm__counter" ref={ref}>
      {icon && <div className="hm__counter-icon">{icon}</div>}
      <span className="hm__counter-num">
        {count}
        {suffix}
      </span>
      <span className="hm__counter-label">{label}</span>
    </div>
  );
};

// ── Data ──────────────────────────────────────────────────────
const products = [
  {
    title: "Non Metallic Expansion Joints",
    desc: "Fabric joints for high temp ducts, ESP, and industrial fans — up to 1400°C.",
    image: asset("assets/img_1.png"),
    link: "/products/expansion-joints/non-metallic",
    icon: <FaShieldAlt />,
    tag: "High Temp",
  },
  {
    title: "Metallic Expansion Joints",
    desc: "EJMA standard SS 304/316/321 bellows for high pressure piping systems.",
    image: asset("assets/img_2.png"),
    link: "/products/expansion-joints/metallic",
    icon: <FaBolt />,
    tag: "High Pressure",
  },
  {
    title: "Rubber Expansion Joints",
    desc: "FSA standard flexible joints from 25mm to 2200mm NB — up to 30 kg/cm².",
    image: asset("assets/img_3.png"),
    link: "/products/expansion-joints/rubber",
    icon: <FaBoxOpen />,
    tag: "Flexible",
  },
  {
    title: "Resilient Coupling",
    desc: "Grid spring coupling with 80% shock damping — all metal construction.",
    image: asset("assets/img_4.png"),
    link: "/products/mechanical-power-transmission/resilient-coupling",
    icon: <FaCog />,
    tag: "Shock Absorb",
  },
  {
    title: "Geared Coupling",
    desc: "Crown gear teeth coupling with ±1.5° angular misalignment capacity.",
    image: asset("assets/img_5.png"),
    link: "/products/mechanical-power-transmission/geared-coupling",
    icon: <FaWrench />,
    tag: "Precision",
  },
  {
    title: "Pin Bush & Tyre Coupling",
    desc: "Robust coupling for reliable power transmission in industrial setups.",
    image: asset("assets/img_7.png"),
    link: "/products/mechanical-power-transmission/pin-bush-tyre-coupling",
    icon: <FaIndustry />,
    tag: "Heavy Duty",
  },
];

const clientLogos = [
  asset("assets/images/clients/client-1.png"),
  asset("assets/images/clients/client-2.png"),
  asset("assets/images/clients/client-3.png"),
  asset("assets/images/clients/client-4.png"),
  asset("assets/images/clients/client-5.png"),
  asset("assets/images/clients/client-6.png"),
  asset("assets/images/clients/client-7.png"),
  asset("assets/images/clients/client-8.png"),
  asset("assets/images/clients/client-9.png"),
  asset("assets/images/clients/client-10.png"),
];

const testimonials = [
  {
    text: "Flexocon's expansion joints have consistently delivered exceptional quality. Their engineering team understood our exact requirements and delivered on time.",
    author: "Senior Engineer",
    company: "Leading Steel Plant",
    rating: 5,
  },
  {
    text: "We've been using Flexocon couplings for over 10 years. The build quality and after-sales support are outstanding.",
    author: "Maintenance Head",
    company: "Cement Manufacturing Unit",
    rating: 5,
  },
  {
    text: "Their fabric expansion joints withstand extreme temperatures in our kilns without any issues. Truly reliable products.",
    author: "Plant Manager",
    company: "Power Generation Company",
    rating: 5,
  },
];

// ── Component ─────────────────────────────────────────────────
const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hm">
      {/* ═══════════════════════════════════════════════════════
          HERO — Video Background
          ═══════════════════════════════════════════════════════ */}
      <section className="hm__hero">
        <div className="hm__hero-video-wrap">
          <video
            className="hm__hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster={asset("assets/hero-poster.jpg")}
          >
            <source src={asset("assets/hero-video.mp4")} type="video/mp4" />
          </video>
        </div>
        <div className="hm__hero-overlay" />
        <div className="hm__hero-grain" />

        {/* Floating orbs */}
        <div className="hm__hero-orbs">
          <span className="hm__orb hm__orb--1"></span>
          <span className="hm__orb hm__orb--2"></span>
          <span className="hm__orb hm__orb--3"></span>
        </div>

        <div className="hm__hero-content">
          <div className="hm__hero-badge hm__ha hm__ha--1">
            <span className="hm__hero-badge-dot"></span>
            <FaIndustry />
            <span>Since 2001 — Engineering Excellence</span>
          </div>

          <h1 className="hm__hero-h1 hm__ha hm__ha--2">
            Precision Engineered
            <span className="hm__hero-accent">Industrial Solutions</span>
          </h1>

          <p className="hm__hero-p hm__ha hm__ha--3">
            Leading manufacturers of <strong>Expansion Joints</strong> &amp;{" "}
            <strong>Mechanical Power Transmission Couplings</strong> — backed by
            25+ years of engineering expertise.
          </p>

          <div className="hm__hero-btns hm__ha hm__ha--4">
            <Link to="/products" className="hm__btn hm__btn--fill">
              <span>Explore Products</span> <FaArrowRight />
            </Link>
            <Link to="/contact" className="hm__btn hm__btn--ghost">
              <FaPhoneAlt /> <span>Contact Us</span>
            </Link>
          </div>

          <div className="hm__hero-stats hm__ha hm__ha--5">
            <div className="hm__hero-stat">
              <span className="hm__hero-stat-num">25+</span>
              <span className="hm__hero-stat-label">Years</span>
            </div>
            <div className="hm__hero-stat-divider" />
            <div className="hm__hero-stat">
              <span className="hm__hero-stat-num">500+</span>
              <span className="hm__hero-stat-label">Installations</span>
            </div>
            <div className="hm__hero-stat-divider" />
            <div className="hm__hero-stat">
              <span className="hm__hero-stat-num">200+</span>
              <span className="hm__hero-stat-label">Clients</span>
            </div>
          </div>
        </div>

        <div className="hm__hero-scroll">
          <div className="hm__hero-scroll-line" />
        </div>

        {/* Wavy bottom divider */}
        <div className="hm__wave-bottom">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PRODUCTS
          ═══════════════════════════════════════════════════════ */}
      <section className="hm__products">
        <div className="hm__wrap">
          <Reveal dir="up">
            <div className="hm__sec-head">
              <span className="hm__tag">
                <span className="hm__tag-dot"></span> What We Manufacture
              </span>
              <h2 className="hm__h2">
                Our <span className="hm__h2-accent">Products</span>
              </h2>
              <p className="hm__sub">
                Precision-engineered expansion joints and couplings for
                demanding industrial applications
              </p>
            </div>
          </Reveal>

          <div className="hm__products-grid">
            {products.map((p, i) => (
              <Reveal key={i} dir="up" delay={i * 100}>
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
                    <h3 className="hm__prod-title">{p.title}</h3>
                    <p className="hm__prod-desc">{p.desc}</p>
                    <span className="hm__prod-link">
                      Learn More <FaChevronRight />
                    </span>
                  </div>
                  <div className="hm__prod-glow"></div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal dir="up" delay={200}>
            <div className="hm__products-cta">
              <Link to="/products" className="hm__btn hm__btn--outline">
                <span>View All Products</span> <FaArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT
          ═══════════════════════════════════════════════════════ */}
      <section className="hm__about">
        <div className="hm__about-bg-shape"></div>
        <div className="hm__wrap">
          <div className="hm__about-grid">
            <Reveal dir="left" className="hm__about-left">
              <div className="hm__about-img-box">
                <div className="hm__about-img-frame">
                  <img
                    src={asset("assets/images/about-factory.jpg")}
                    alt="Flexocon Factory"
                    loading="lazy"
                  />
                </div>
                <div className="hm__about-exp-badge">
                  <span className="hm__about-exp-num">25+</span>
                  <span className="hm__about-exp-label">
                    Years of
                    <br />
                    Excellence
                  </span>
                </div>
                <div className="hm__about-img-dots"></div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={150} className="hm__about-right">
              <span className="hm__tag">
                <span className="hm__tag-dot"></span> About Us
              </span>
              <h2 className="hm__h2">
                Flexocon Engineers{" "}
                <span className="hm__h2-accent">Pvt. Ltd.</span>
              </h2>
              <p className="hm__p">
                Established in <strong>2001</strong>, Flexocon Engineers Pvt.
                Ltd. is backed by qualified Mechanical Engineers having more
                than <strong>25 years experience</strong> in Mechanical Power
                Transmission Coupling &amp; Expansion Joints field at various
                applications.
              </p>
              <p className="hm__p">
                The technical calculations of our designs are based on{" "}
                <strong>recognized international standards</strong> and carried
                out on our specially developed computer program and displayed on
                our <strong>CAD system</strong>.
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
        <div className="hm__counters-shapes">
          <span className="hm__cshape hm__cshape--1"></span>
          <span className="hm__cshape hm__cshape--2"></span>
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
              number={500}
              suffix="+"
              label="Installations"
              icon={<FaIndustry />}
            />
            <Counter
              number={200}
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
          CLIENT LOGOS — Infinite Scroll
          ═══════════════════════════════════════════════════════ */}
      <section className="hm__clients">
        <div className="hm__wrap">
          <Reveal dir="up">
            <div className="hm__sec-head">
              <span className="hm__tag">
                <span className="hm__tag-dot"></span> Trusted By
              </span>
              <h2 className="hm__h2">
                Our Valued <span className="hm__h2-accent">Clients</span>
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="hm__marquee">
          <div className="hm__marquee-track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div className="hm__marquee-item" key={i}>
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
        <div className="hm__why-bg-shape"></div>
        <div className="hm__wrap">
          <Reveal dir="up">
            <div className="hm__sec-head">
              <span className="hm__tag">
                <span className="hm__tag-dot"></span> Our Strengths
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
                  </div>
                  <h3 className="hm__why-title">{w.title}</h3>
                  <p className="hm__why-text">{w.text}</p>
                  <div className="hm__why-num">0{i + 1}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════════════ */}
      <section className="hm__testi">
        <div className="hm__wrap">
          <Reveal dir="up">
            <div className="hm__sec-head">
              <span className="hm__tag">
                <span className="hm__tag-dot"></span> Testimonials
              </span>
              <h2 className="hm__h2">
                What Our <span className="hm__h2-accent">Clients Say</span>
              </h2>
            </div>
          </Reveal>

          <div className="hm__testi-slider">
            <div className="hm__testi-bg-quote">
              <FaQuoteLeft />
            </div>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`hm__testi-card ${
                  currentTestimonial === i ? "hm__testi-card--active" : ""
                }`}
              >
                <div className="hm__testi-stars">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <FaStar key={s} />
                  ))}
                </div>
                <p className="hm__testi-text">{t.text}</p>
                <div className="hm__testi-author">
                  <strong>{t.author}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            ))}
            <div className="hm__testi-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`hm__testi-dot ${
                    currentTestimonial === i ? "hm__testi-dot--active" : ""
                  }`}
                  onClick={() => setCurrentTestimonial(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="hm__cta">
        <div className="hm__cta-shapes">
          <span className="hm__cta-shape hm__cta-shape--1"></span>
          <span className="hm__cta-shape hm__cta-shape--2"></span>
        </div>
        <div className="hm__wrap">
          <Reveal dir="zoom">
            <div className="hm__cta-box">
              <span className="hm__cta-tag">
                <span className="hm__tag-dot"></span> Get In Touch
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
                  <FaPhoneAlt /> <span>Contact Us</span>
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
