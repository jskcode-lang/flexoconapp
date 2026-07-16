import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaIndustry,
  FaAward,
  FaUsers,
  FaCog,
  FaGlobeAmericas,
  FaPhoneAlt,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaLaptopCode,
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
  FaCubes,
  FaWrench,
  FaBullseye,
  FaHeart,
  FaLightbulb,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";
import "./AboutUs.css";

// ── Base URL ──────────────────────────────────────────────────
const BASE = import.meta.env.BASE_URL;

// ── InView Hook ───────────────────────────────────────────────
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const optsRef = useRef(options);

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
      { threshold: 0.1, ...optsRef.current },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// ── Reveal ────────────────────────────────────────────────────
const Reveal = ({ children, dir = "up", delay = 0, className = "" }) => {
  const [ref, vis] = useInView();
  const d = {
    up: "abu__rv--up",
    down: "abu__rv--down",
    left: "abu__rv--left",
    right: "abu__rv--right",
    none: "abu__rv--none",
  };
  return (
    <div
      ref={ref}
      className={`abu__rv ${d[dir]} ${vis ? "abu__rv--vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Counter ───────────────────────────────────────────────────
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

const Counter = ({ number, suffix = "", label, icon }) => {
  const [ref, count] = useCounter(number);
  return (
    <div className="abu__counter" ref={ref}>
      <div className="abu__counter-icon">{icon}</div>
      <span className="abu__counter-num">
        {count}
        {suffix}
      </span>
      <span className="abu__counter-label">{label}</span>
    </div>
  );
};

// ── Data ──────────────────────────────────────────────────────
const milestones = [
  {
    year: "2001",
    title: "Company Founded",
    desc: "Flexocon Engineers Pvt. Ltd. established by qualified mechanical engineers with a vision for engineering excellence.",
  },
  {
    year: "2005",
    title: "ISO Certification",
    desc: "Achieved ISO 9001:2008 quality management certification — commitment to international standards.",
  },
  {
    year: "2010",
    title: "Expanded Product Line",
    desc: "Added full range of metallic expansion joints and geared couplings to our product portfolio.",
  },
  {
    year: "2015",
    title: "500+ Installations",
    desc: "Crossed 500 successful installations across power plants, steel mills, and cement industries.",
  },
  {
    year: "2020",
    title: "CAD Design Integration",
    desc: "Fully integrated CAD design system with specially developed computer programs for precision calculations.",
  },
  {
    year: "2024",
    title: "25+ Years of Excellence",
    desc: "Continuing to deliver precision-engineered solutions backed by 25+ years of industry expertise.",
  },
];

const values = [
  {
    icon: <FaBullseye />,
    title: "Precision",
    desc: "Every product is manufactured with exacting precision using advanced tooling and quality controls.",
  },
  {
    icon: <FaHeart />,
    title: "Commitment",
    desc: "Unwavering commitment to customer satisfaction and delivering beyond expectations.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "Continuously evolving our designs and processes to meet changing industry demands.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality",
    desc: "ISO 9001:2008 certified — quality is embedded in every aspect of our operations.",
  },
  {
    icon: <FaHandshake />,
    title: "Trust",
    desc: "Building lasting relationships with clients through transparency and reliability.",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Standards",
    desc: "Designs based on FSA USA and EJMA internationally recognized standards.",
  },
];

const capabilities = [
  {
    icon: <FaLaptopCode />,
    title: "CAD Design System",
    desc: "Technical calculations carried out on specially developed computer programs displayed on our CAD system.",
  },
  {
    icon: <FaTools />,
    title: "Special Purpose Machines",
    desc: "Manufacturing using precision special purpose machines, jigs, fixtures, tooling, and gauges.",
  },
  {
    icon: <FaChartLine />,
    title: "Quality Testing",
    desc: "Comprehensive testing including hydrostatic, pneumatic, and leak testing for every product.",
  },
  {
    icon: <FaCubes />,
    title: "Material Testing",
    desc: "All raw materials are tested and verified before entering the manufacturing process.",
  },
];

const team = [
  {
    icon: <FaUsers />,
    title: "Qualified Engineers",
    desc: "Team of experienced mechanical engineers specializing in power transmission and expansion joints.",
  },
  {
    icon: <FaCog />,
    title: "Design Experts",
    desc: "In-house design team using recognized international standards for all calculations.",
  },
  {
    icon: <FaWrench />,
    title: "Manufacturing Team",
    desc: "Skilled technicians operating special purpose machines for precision manufacturing.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Inspectors",
    desc: "Dedicated QA team ensuring continuous inspection at every manufacturing stage.",
  },
];

// ── Component ─────────────────────────────────────────────────
const AboutUs = () => {
  return (
    <div className="abu">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__hero">
        <div className="abu__hero-bg" />
        <div className="abu__hero-shapes">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="abu__hero-content">
          <div className="abu__hero-badge abu__ha abu__ha--1">
            <FaIndustry />
            <span>Established 2001</span>
          </div>
          <h1 className="abu__hero-h1 abu__ha abu__ha--2">
            About
            <span className="abu__hero-accent">Flexocon Engineers</span>
          </h1>
          <p className="abu__hero-p abu__ha abu__ha--3">
            Precision engineering backed by <strong>25+ years</strong> of
            expertise in Mechanical Power Transmission Couplings &amp; Expansion
            Joints
          </p>
          <div className="abu__hero-line abu__ha abu__ha--4" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COUNTERS
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__counters">
        <div className="abu__wrap">
          <div className="abu__counters-grid">
            <Counter
              number={25}
              suffix="+"
              label="Years Experience"
              icon={<FaStar />}
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
              icon={<FaAward />}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STORY
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__story">
        <div className="abu__wrap">
          <div className="abu__story-grid">
            <Reveal dir="left" className="abu__story-left">
              <div className="abu__story-img-box">
                <img
                  src={BASE + "assets/images/about-factory.jpg"}
                  alt="Flexocon Factory"
                  loading="lazy"
                />
                <div className="abu__story-badge">
                  <span className="abu__story-badge-year">2001</span>
                  <span className="abu__story-badge-text">Est.</span>
                </div>
                <div className="abu__story-float">
                  <FaAward className="abu__story-float-icon" />
                  <div>
                    <span className="abu__story-float-title">
                      ISO 9001:2008
                    </span>
                    <span className="abu__story-float-sub">Certified</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={150} className="abu__story-right">
              <span className="abu__tag">Our Story</span>
              <h2 className="abu__h2">Engineering Excellence Since 2001</h2>
              <p className="abu__p">
                <strong>Flexocon Engineers Pvt. Ltd.</strong> was established in{" "}
                <strong>2001</strong>, backed by a team of qualified Mechanical
                Engineers having more than <strong>25 years experience</strong>{" "}
                in Mechanical Power Transmission Coupling &amp; Expansion Joints
                field at various applications.
              </p>
              <p className="abu__p">
                The technical calculations of Flexocon Engineers Pvt. Ltd.
                designs are based on{" "}
                <strong>recognized international standards</strong> and carried
                out on our specially developed computer program and displayed on
                our <strong>CAD system</strong>.
              </p>
              <p className="abu__p">
                From our state-of-the-art manufacturing facility in Kolkata, we
                deliver precision-engineered products that meet the most
                demanding industrial requirements — from power plants and steel
                mills to cement industries and petrochemical facilities.
              </p>

              <div className="abu__story-highlights">
                {[
                  { icon: <FaAward />, text: "ISO 9001:2008 Certified" },
                  {
                    icon: <FaGlobeAmericas />,
                    text: "FSA USA & EJMA Standards",
                  },
                  { icon: <FaLaptopCode />, text: "CAD Based Design System" },
                  { icon: <FaUsers />, text: "25+ Years Expert Team" },
                ].map((h, i) => (
                  <div className="abu__story-hl" key={i}>
                    <div className="abu__story-hl-icon">{h.icon}</div>
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          QUOTE
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__quote-sec">
        <div className="abu__wrap">
          <Reveal dir="up">
            <div className="abu__quote-box">
              <FaQuoteLeft className="abu__quote-icon" />
              <blockquote className="abu__quote-text">
                Our designs are based on recognized international standards,
                carried out on specially developed computer programs and
                displayed on our CAD system — ensuring precision, reliability,
                and excellence in every product we deliver.
              </blockquote>
              <div className="abu__quote-author">
                <strong>Flexocon Engineers Pvt. Ltd.</strong>
                <span>Engineering Division</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VALUES
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__values">
        <div className="abu__wrap">
          <Reveal dir="up">
            <div className="abu__sec-head">
              <span className="abu__tag">What We Stand For</span>
              <h2 className="abu__h2">Our Core Values</h2>
              <p className="abu__sub">
                The principles that drive everything we do
              </p>
            </div>
          </Reveal>

          <div className="abu__values-grid">
            {values.map((v, i) => (
              <Reveal key={i} dir="up" delay={i * 80}>
                <div className="abu__value-card">
                  <div className="abu__value-icon">{v.icon}</div>
                  <h3 className="abu__value-title">{v.title}</h3>
                  <p className="abu__value-text">{v.desc}</p>
                  <div className="abu__value-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TIMELINE
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__timeline-sec">
        <div className="abu__wrap">
          <Reveal dir="up">
            <div className="abu__sec-head">
              <span className="abu__tag">Our Journey</span>
              <h2 className="abu__h2">Company Milestones</h2>
              <p className="abu__sub">
                Key moments in our 25+ year journey of engineering excellence
              </p>
            </div>
          </Reveal>

          <div className="abu__timeline">
            {milestones.map((m, i) => (
              <Reveal
                key={i}
                dir={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
              >
                <div
                  className={`abu__tl-item ${i % 2 === 0 ? "abu__tl-item--left" : "abu__tl-item--right"}`}
                >
                  <div className="abu__tl-dot">
                    <span>{m.year}</span>
                  </div>
                  <div className="abu__tl-card">
                    <h3 className="abu__tl-title">{m.title}</h3>
                    <p className="abu__tl-desc">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CAPABILITIES
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__caps">
        <div className="abu__wrap">
          <Reveal dir="up">
            <div className="abu__sec-head">
              <span className="abu__tag">What We Offer</span>
              <h2 className="abu__h2">Our Capabilities</h2>
              <p className="abu__sub">
                Advanced engineering and manufacturing capabilities
              </p>
            </div>
          </Reveal>

          <div className="abu__caps-grid">
            {capabilities.map((c, i) => (
              <Reveal key={i} dir="up" delay={i * 100}>
                <div className="abu__cap-card">
                  <div className="abu__cap-top">
                    <div className="abu__cap-icon">{c.icon}</div>
                    <span className="abu__cap-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="abu__cap-title">{c.title}</h3>
                  <p className="abu__cap-text">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TEAM
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__team">
        <div className="abu__wrap">
          <Reveal dir="up">
            <div className="abu__sec-head">
              <span className="abu__tag">Our People</span>
              <h2 className="abu__h2">The Team Behind Flexocon</h2>
              <p className="abu__sub">
                Qualified engineers and skilled professionals driving innovation
              </p>
            </div>
          </Reveal>

          <div className="abu__team-grid">
            {team.map((t, i) => (
              <Reveal key={i} dir="up" delay={i * 100}>
                <div className="abu__team-card">
                  <div className="abu__team-icon">{t.icon}</div>
                  <h3 className="abu__team-title">{t.title}</h3>
                  <p className="abu__team-text">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OFFICES
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__offices">
        <div className="abu__wrap">
          <Reveal dir="up">
            <div className="abu__sec-head">
              <span className="abu__tag">Find Us</span>
              <h2 className="abu__h2">Our Offices</h2>
            </div>
          </Reveal>

          <div className="abu__offices-grid">
            <Reveal dir="left" delay={100}>
              <div className="abu__office-card">
                <div className="abu__office-badge">Registered Office</div>
                <h3 className="abu__office-name">Manufacturing Unit</h3>
                <div className="abu__office-info">
                  <div className="abu__office-row">
                    <FaMapMarkerAlt className="abu__office-icon" />
                    <p>
                      29 Dr. Gopal Chatterjee Road, Sukchar,
                      <br />
                      Kolkata – 700 115, West Bengal, India.
                    </p>
                  </div>
                  <div className="abu__office-row">
                    <FaPhoneAlt className="abu__office-icon" />
                    <p>+91 33 2523 0864 / +91 33 3557 8207</p>
                  </div>
                  <div className="abu__office-row">
                    <FaEnvelope className="abu__office-icon" />
                    <a href="mailto:info@flexoconindia.com">
                      info@flexoconindia.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={200}>
              <div className="abu__office-card">
                <div className="abu__office-badge">Sales Office</div>
                <h3 className="abu__office-name">Sales &amp; Marketing</h3>
                <div className="abu__office-info">
                  <div className="abu__office-row">
                    <FaMapMarkerAlt className="abu__office-icon" />
                    <p>
                      Abakash Apartment, Flat No-1C, 1st Floor,
                      <br />
                      14, MIG Housing Estate, Sodepur,
                      <br />
                      Kolkata - 700 110, West Bengal, India.
                    </p>
                  </div>
                  <div className="abu__office-row">
                    <FaPhoneAlt className="abu__office-icon" />
                    <p>+91 33 2523 0864 / +91 33 3557 8207</p>
                  </div>
                  <div className="abu__office-row">
                    <FaEnvelope className="abu__office-icon" />
                    <a href="mailto:info@flexoconindia.com">
                      info@flexoconindia.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="abu__cta">
        <div className="abu__wrap">
          <Reveal dir="up">
            <div className="abu__cta-box">
              <h2 className="abu__cta-h2">
                Let's Build Something Great Together
              </h2>
              <p className="abu__cta-p">
                Get in touch with our engineering team to discuss your
                requirements — we're ready to deliver excellence.
              </p>
              <div className="abu__cta-btns">
                <Link to="/contact" className="abu__btn abu__btn--white">
                  <FaPhoneAlt /> Contact Us
                  <FaArrowRight className="abu__btn-arr" />
                </Link>
                <Link to="/products" className="abu__btn abu__btn--ghost">
                  View Products
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
