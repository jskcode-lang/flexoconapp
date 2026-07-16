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
} from "react-icons/fa";
import "./QualityPolicy.css";

const BASE = import.meta.env.BASE_URL || "/flexoconapp/"; // Base path for assets

// ── Certificate image path — change this to your actual file ──
const CERTIFICATE_IMAGE = BASE + "/assets/iso.jpg";

// ── Hook to detect when element enters viewport ───────────────
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
      { threshold: 0.15, ...options },
    );

    observer.observe(element);
    return () => observer.disconnect();
  });

  return [ref, isVisible];
};

// ── Animated wrapper component ────────────────────────────────
const FadeIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const [ref, isVisible] = useInView();

  const directionClass = {
    up: "qp__fade--up",
    down: "qp__fade--down",
    left: "qp__fade--left",
    right: "qp__fade--right",
    none: "qp__fade--none",
  };

  return (
    <div
      ref={ref}
      className={`qp__fade ${directionClass[direction]} ${
        isVisible ? "qp__fade--visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────
const QualityPolicy = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showCertificate ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCertificate]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowCertificate(false);
    };
    if (showCertificate) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showCertificate]);

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

  return (
    <div className="qp">
      {/* ══════════════════════════════════════════════════════
          Hero Section
          ══════════════════════════════════════════════════════ */}
      <section className="qp__hero">
        <div className="qp__hero-overlay" />

        <div className="qp__hero-shapes">
          <div className="qp__shape qp__shape--1" />
          <div className="qp__shape qp__shape--2" />
          <div className="qp__shape qp__shape--3" />
          <div className="qp__shape qp__shape--4" />
        </div>

        <div className="qp__hero-content">
          <div className="qp__hero-badge qp__hero-animate qp__hero-animate--1">
            <FaCertificate />
            <span>ISO 9001:2008 Certified</span>
          </div>
          <h1 className="qp__hero-title qp__hero-animate qp__hero-animate--2">
            Quality Policy
          </h1>
          <p className="qp__hero-subtitle qp__hero-animate qp__hero-animate--3">
            Excellence is not a destination — it is a continuous journey
          </p>
          <div className="qp__hero-line qp__hero-animate qp__hero-animate--4" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Main Content
          ══════════════════════════════════════════════════════ */}
      <section className="qp__content">
        <div className="qp__container">
          {/* ── Policy Statement ── */}
          <div className="qp__statement">
            <FadeIn direction="up">
              <div className="qp__statement-header">
                <div className="qp__statement-icon">
                  <FaAward />
                </div>
                <h2 className="qp__statement-title">
                  Our Commitment to Quality
                </h2>
              </div>
            </FadeIn>

            <div className="qp__statement-body">
              <FadeIn direction="left" delay={100}>
                <div className="qp__statement-card">
                  <div className="qp__statement-quote">&ldquo;</div>
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
                  <div className="qp__statement-quote">&ldquo;</div>
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

          {/* ── Commitment Cards ── */}
          <FadeIn direction="up">
            <h2 className="qp__section-title">Our Quality Commitments</h2>
          </FadeIn>

          <div className="qp__commitments">
            <div className="qp__commitments-grid">
              {commitments.map((item, index) => (
                <FadeIn key={index} direction="up" delay={index * 120}>
                  <div className="qp__card">
                    <div className="qp__card-icon">{item.icon}</div>
                    <h3 className="qp__card-title">{item.title}</h3>
                    <p className="qp__card-text">{item.description}</p>
                    <div className="qp__card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ── Certificate Section ── */}
          <div className="qp__certificate">
            <FadeIn direction="left" delay={100}>
              <div className="qp__certificate-info">
                <div className="qp__certificate-badge">
                  <FaCertificate />
                </div>
                <h2 className="qp__certificate-title">Quality Certification</h2>
                <p className="qp__certificate-text">
                  Our ISO 9001:2008 certification demonstrates our ongoing
                  commitment to quality management excellence and customer
                  satisfaction.
                </p>

                <ul className="qp__certificate-list">
                  {certChecklist.map((text, i) => (
                    <FadeIn key={i} direction="left" delay={i * 80 + 200}>
                      <li>
                        <FaCheckCircle className="qp__check" />
                        {text}
                      </li>
                    </FadeIn>
                  ))}
                </ul>

                <button
                  className="qp__certificate-btn"
                  onClick={() => setShowCertificate(true)}
                >
                  <FaSearchPlus />
                  View Certificate
                  <FaChevronRight className="qp__btn-arrow" />
                </button>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="qp__certificate-preview">
                <div
                  className="qp__certificate-image"
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
                  <div className="qp__certificate-hover">
                    <FaSearchPlus />
                    <span>Click to View</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Principles ── */}
          <FadeIn direction="up">
            <h2 className="qp__section-title">Quality Principles We Follow</h2>
          </FadeIn>

          <div className="qp__principles">
            <div className="qp__principles-grid">
              {principles.map((principle, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="qp__principle">
                    <span className="qp__principle-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="qp__principle-text">{principle}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Certificate Modal
          ══════════════════════════════════════════════════════ */}
      {showCertificate && (
        <div
          className="qp__modal"
          onClick={() => setShowCertificate(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Quality Certificate"
        >
          <div
            className="qp__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="qp__modal-close"
              onClick={() => setShowCertificate(false)}
              aria-label="Close Certificate"
            >
              <FaTimes />
            </button>
            <img
              src={BASE + { CERTIFICATE_IMAGE }}
              alt="ISO 9001:2008 Quality Certificate"
              className="qp__modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityPolicy;
