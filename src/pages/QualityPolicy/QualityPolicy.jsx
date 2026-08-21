import { useState, useEffect, useRef } from "react";
import {
  FaAward,
  FaCheckCircle,
  FaCertificate,
  FaHandshake,
  FaUsers,
  FaCogs,
  FaChevronRight,
  FaTimes,
  FaSearchPlus,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import "./QualityPolicy.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  return base + clean;
};
const CERTIFICATE_IMAGE = asset("assets/iso.jpg");

/* ── InView ── */
const useInView = (threshold = 0.12) => {
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
    up: "qp__fade--up",
    down: "qp__fade--down",
    left: "qp__fade--left",
    right: "qp__fade--right",
    none: "qp__fade--none",
    scale: "qp__fade--scale",
  };
  return (
    <div
      ref={ref}
      className={`qp__fade ${dirMap[direction] || dirMap.up} ${visible ? "qp__fade--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ── Data ── */
const commitments = [
  {
    icon: <FaAward />,
    title: "ISO 9001:2008 Compliance",
    description:
      "Full compliance with ISO 9001:2008 Quality Management Systems ensuring world-class standards in every product we deliver.",
  },
  {
    icon: <FaHandshake />,
    title: "Total Customer Satisfaction",
    description:
      "Dedicated to achieving complete customer satisfaction through consistent quality and reliable service delivery.",
  },
  {
    icon: <FaUsers />,
    title: "Team Involvement",
    description:
      "Integrated effort and active involvement of our skilled workforce to maintain the highest quality benchmarks.",
  },
  {
    icon: <FaCogs />,
    title: "Continual Improvement",
    description:
      "Striving for continual improvement in all processes, products, and services we offer to our valued clients.",
  },
];

const principles = [
  "Customer Focus",
  "Leadership",
  "Process Approach",
  "Continual Improvement",
  "Evidence-Based Decision Making",
  "Relationship Management",
];

const certChecklist = [
  "ISO 9001:2008 Certified Quality Systems",
  "Statutory & Regulatory Compliance",
  "Documented Quality Procedures",
  "Regular Internal & External Audits",
];

/* ── Component ── */
const QualityPolicy = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showCertificate ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCertificate]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowCertificate(false);
    };
    if (showCertificate) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showCertificate]);

  return (
    <div className="qp">
      {/* ═══ HERO ═══ */}
      <Navbar />
      <section className="qp__hero">
        <div className="qp__hero-grid" />
        <div className="qp__hero-radial qp__hero-radial--1" />
        <div className="qp__hero-radial qp__hero-radial--2" />
        <div className="qp__hero-radial qp__hero-radial--3" />

        <div className="qp__hero-floats">
          {[...Array(6)].map((_, i) => (
            <div className="qp__hero-float" key={i} />
          ))}
        </div>

        <div className="qp__hero-content">
          <div className="qp__hero-badge qp__ha qp__ha--1">
            <FaCertificate />
            <span>ISO 9001:2008 Certified</span>
          </div>
          <h1 className="qp__hero-h1 qp__ha qp__ha--2">
            Quality
            <span className="qp__hero-h1-accent"> Policy</span>
          </h1>
          <p className="qp__hero-sub qp__ha qp__ha--3">
            Excellence is not a destination — it is a continuous journey
          </p>
          <div className="qp__hero-line qp__ha qp__ha--4" />
          <div className="qp__hero-chips qp__ha qp__ha--5">
            {["ISO Certified", "Customer First", "Continual Improvement"].map(
              (c, i) => (
                <span className="qp__hero-chip" key={i}>
                  <FaStar /> {c}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="qp__hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,50 C360,100 720,0 1080,60 C1260,80 1380,30 1440,50 L1440,100 L0,100Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="qp__content">
        <div className="qp__container">
          {/* ── Policy Statement ── */}
          <div className="qp__statement">
            <FadeIn direction="up">
              <div className="qp__statement-header">
                <div className="qp__statement-icon-wrap">
                  <FaAward />
                </div>
                <div>
                  <h2 className="qp__statement-title">
                    Our Commitment to Quality
                  </h2>
                  <p className="qp__statement-eyebrow">
                    The foundation of everything we build
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="qp__statement-body">
              <FadeIn direction="left" delay={100}>
                <div className="qp__statement-card">
                  <div className="qp__statement-num">01</div>
                  <div className="qp__statement-quote-mark">&ldquo;</div>
                  <p className="qp__statement-text">
                    <strong>Flexocon Engineers Pvt. Ltd.</strong> is committed
                    to provide the highest quality of product and service to its
                    customers by means of compliance with{" "}
                    <span className="qp__highlight">
                      ISO 9001:2008 Quality Systems
                    </span>
                    .
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={200}>
                <div className="qp__statement-card">
                  <div className="qp__statement-num">02</div>
                  <div className="qp__statement-quote-mark">&ldquo;</div>
                  <p className="qp__statement-text">
                    <strong>Flexocon Engineers Pvt. Ltd.</strong> is committed
                    to achieve{" "}
                    <span className="qp__highlight">
                      total customer satisfaction
                    </span>{" "}
                    by integrated effort and involvement of our people and
                    striving at continual improvement with fulfilling of all{" "}
                    <span className="qp__highlight">
                      statutory &amp; regulatory requirements
                    </span>
                    .
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* ── Commitments ── */}
          <div className="qp__section-wrap">
            <FadeIn direction="up">
              <div className="qp__section-head">
                <span className="qp__eyebrow">
                  <FaShieldAlt /> What We Stand For
                </span>
                <h2 className="qp__section-title">Our Quality Commitments</h2>
              </div>
            </FadeIn>

            <div className="qp__commitments-grid">
              {commitments.map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 120}>
                  <div className="qp__commit-card">
                    <div className="qp__commit-top">
                      <div className="qp__commit-icon">{item.icon}</div>
                      <span className="qp__commit-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="qp__commit-title">{item.title}</h3>
                    <p className="qp__commit-text">{item.description}</p>
                    <div className="qp__commit-bar" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ── Certificate ── */}
          <div className="qp__cert-section">
            <FadeIn direction="left" delay={100}>
              <div className="qp__cert-info">
                <div className="qp__cert-badge">
                  <FaCertificate />
                </div>
                <h2 className="qp__cert-title">Quality Certification</h2>
                <p className="qp__cert-text">
                  Our ISO 9001:2008 certification demonstrates our ongoing
                  commitment to quality management excellence and customer
                  satisfaction.
                </p>

                <ul className="qp__cert-list">
                  {certChecklist.map((text, i) => (
                    <FadeIn key={i} direction="left" delay={i * 80 + 200}>
                      <li>
                        <FaCheckCircle className="qp__check" />
                        <span>{text}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>

                <button
                  className="qp__cert-btn"
                  onClick={() => setShowCertificate(true)}
                >
                  <FaSearchPlus />
                  View Certificate
                  <FaChevronRight className="qp__cert-btn-arrow" />
                </button>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="qp__cert-preview">
                <div
                  className="qp__cert-img-wrap"
                  onClick={() => setShowCertificate(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setShowCertificate(true);
                  }}
                >
                  <img
                    src={CERTIFICATE_IMAGE}
                    alt="ISO 9001:2008 Quality Certificate"
                    loading="lazy"
                  />
                  <div className="qp__cert-overlay">
                    <FaSearchPlus />
                    <span>Click to View</span>
                  </div>
                </div>
                <div className="qp__cert-img-glow" />
              </div>
            </FadeIn>
          </div>

          {/* ── Principles ── */}
          <div className="qp__section-wrap">
            <FadeIn direction="up">
              <div className="qp__section-head">
                <span className="qp__eyebrow">
                  <FaStar /> How We Operate
                </span>
                <h2 className="qp__section-title">
                  Quality Principles We Follow
                </h2>
              </div>
            </FadeIn>

            <div className="qp__principles-grid">
              {principles.map((p, i) => (
                <FadeIn key={i} direction="up" delay={i * 100}>
                  <div className="qp__principle">
                    <span className="qp__principle-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="qp__principle-text">{p}</span>
                    <FaChevronRight className="qp__principle-arrow" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MODAL ═══ */}
      {showCertificate && (
        <div
          className="qp__modal"
          onClick={() => setShowCertificate(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Quality Certificate"
        >
          <div className="qp__modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="qp__modal-close"
              onClick={() => setShowCertificate(false)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <img
              src={CERTIFICATE_IMAGE}
              alt="ISO 9001:2008 Quality Certificate"
              className="qp__modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityPolicy;
