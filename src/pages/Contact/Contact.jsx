import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaUser,
  FaIndustry,
  FaCog,
  FaShieldAlt,
  FaPaperPlane,
  FaFacebook,
  FaBuilding,
  FaUserTie,
  FaMobileAlt,
  FaGlobe,
  FaArrowRight,
  FaFileDownload,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Contact.css";

const BASE = import.meta.env.BASE_URL;

// ── InView ────────────────────────────────────────────────────
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
    up: "ct__rv--up",
    down: "ct__rv--down",
    left: "ct__rv--left",
    right: "ct__rv--right",
    none: "ct__rv--none",
  };
  return (
    <div
      ref={ref}
      className={`ct__rv ${d[dir]} ${vis ? "ct__rv--vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Data ──────────────────────────────────────────────────────
const couplingTeam = [
  {
    name: "Mr. Krishnendu Sarkar",
    role: "Director",
    phone: "+91 9831611181",
    email: "ksarkar@flexoconindia.com",
    email2: "flexocon@gmail.com",
  },
  {
    name: "Mr. Sarthak Sarkar",
    role: "Sales & Marketing",
    phone: "+91 91473 69951",
    email: "sarthak.flexocon@gmail.com",
  },
  {
    name: "Ms. Babita Oraon",
    role: "Sales & Marketing",
    phone: "+91 9007424416",
    email: "sales2@flexoconindia.com",
  },
];

const expansionTeam = [
  {
    name: "Mr. Amitava Das",
    role: "Director",
    phone: "+91 9831352931",
    email: "amitavadas@flexoconindia.com",
  },
  {
    name: "Mr. Subrata Bhattacharyya",
    role: "Sales & Marketing",
    phone: "+91 9007084751",
    email: "marketing@flexoconindia.com",
  },
  {
    name: "Ms. Dola Mukherjee",
    role: "Sales & Marketing",
    phone: "+91 9748414414",
    email: "sales@flexoconindia.com",
  },
];

const overseasAssociates = [
  {
    region: "Europe & UK",
    company: "Power Transmissions International Ltd",
    address: "2, Chillingham, Dosthill, Staffordshire, B77 1JH, England",
    contact: "Paul Selini",
    designation: "Managing Director",
    phone: "+44 1827 261202",
    mobile: "+44 7780 613170",
    fax: "+44 1827 310855",
    email: "sales@ptigroup.co.uk",
    email2: "pselini@ptigroup.co.uk",
    website: "www.ptigroup.co.uk",
    flag: "🇬🇧",
  },
  {
    region: "Vietnam",
    company: "LE Duong Trading Investment Co. Ltd.",
    address:
      "No 28A, 26 Street, Tang Nhon Phu A Ward, District 9, HCM City, Vietnam",
    contact: "Duong Hien Kha (Henry Duong)",
    designation: "Director",
    phone: "(+84) 0982 599 499",
    email: "hienkhabk@gmail.com",
    email2: "flexoconvietnam@gmail.com",
    flag: "🇻🇳",
  },
];

// ── Component ─────────────────────────────────────────────────
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="ct">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="ct__hero">
        <div className="ct__hero-bg" />
        <div className="ct__hero-shapes">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="ct__hero-content">
          <div className="ct__hero-badge ct__ha ct__ha--1">
            <FaPhoneAlt />
            <span>Get In Touch</span>
          </div>
          <h1 className="ct__hero-h1 ct__ha ct__ha--2">
            Contact
            <span className="ct__hero-accent">Flexocon Engineers</span>
          </h1>
          <p className="ct__hero-p ct__ha ct__ha--3">
            Reach out to our team for inquiries about expansion joints,
            couplings, or custom engineering solutions
          </p>
          <div className="ct__hero-line ct__ha ct__ha--4" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OFFICES
          ═══════════════════════════════════════════════════════ */}
      <section className="ct__offices">
        <div className="ct__wrap">
          <div className="ct__offices-grid">
            <Reveal dir="left" delay={100}>
              <div className="ct__office-card">
                <div className="ct__office-header">
                  <div className="ct__office-icon-box">
                    <FaBuilding />
                  </div>
                  <div>
                    <span className="ct__office-badge">
                      Registered Office & Works
                    </span>
                    <h3 className="ct__office-name">Manufacturing Unit</h3>
                  </div>
                </div>
                <div className="ct__office-body">
                  <div className="ct__office-row">
                    <FaMapMarkerAlt className="ct__office-ri" />
                    <div>
                      <strong>Flexocon Engineers Pvt. Ltd.</strong>
                      <p>
                        29 Dr. Gopal Chatterjee Road, Sukchar,
                        <br />
                        Kolkata – 700 115, West Bengal, India.
                      </p>
                    </div>
                  </div>
                  <div className="ct__office-row">
                    <FaPhoneAlt className="ct__office-ri" />
                    <div>
                      <a href="tel:+913325230864">+91 33 2523 0864</a>
                      <span className="ct__sep">/</span>
                      <a href="tel:+913335578207">+91 33 3557 8207</a>
                    </div>
                  </div>
                  <div className="ct__office-row">
                    <FaEnvelope className="ct__office-ri" />
                    <a href="mailto:info@flexoconindia.com">
                      info@flexoconindia.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={200}>
              <div className="ct__office-card">
                <div className="ct__office-header">
                  <div className="ct__office-icon-box">
                    <FaIndustry />
                  </div>
                  <div>
                    <span className="ct__office-badge">
                      Sales & Marketing Office
                    </span>
                    <h3 className="ct__office-name">Sales Division</h3>
                  </div>
                </div>
                <div className="ct__office-body">
                  <div className="ct__office-row">
                    <FaMapMarkerAlt className="ct__office-ri" />
                    <div>
                      <p>
                        Abakash Apartment, Flat No-1C, 1st Floor,
                        <br />
                        14, MIG Housing Estate, Sodepur,
                        <br />
                        Kolkata - 700 110, West Bengal, India.
                      </p>
                    </div>
                  </div>
                  <div className="ct__office-row">
                    <FaPhoneAlt className="ct__office-ri" />
                    <div>
                      <a href="tel:+913325230864">+91 33 2523 0864</a>
                      <span className="ct__sep">/</span>
                      <a href="tel:+913335578207">+91 33 3557 8207</a>
                    </div>
                  </div>
                  <div className="ct__office-row">
                    <FaEnvelope className="ct__office-ri" />
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
          TEAM — COUPLING
          ═══════════════════════════════════════════════════════ */}
      <section className="ct__team-sec">
        <div className="ct__wrap">
          <Reveal dir="up">
            <div className="ct__sec-head">
              <span className="ct__tag">
                <FaCog className="ct__tag-icon" /> For Coupling
              </span>
              <h2 className="ct__h2">Coupling Division Contacts</h2>
              <p className="ct__sub">
                Resilient, Geared, and Pin Bush & Tyre Couplings
              </p>
            </div>
          </Reveal>

          <div className="ct__team-grid">
            {couplingTeam.map((person, i) => (
              <Reveal key={i} dir="up" delay={i * 120}>
                <div className="ct__person-card">
                  <div className="ct__person-avatar">
                    <FaUserTie />
                  </div>
                  <div className="ct__person-info">
                    <h3 className="ct__person-name">{person.name}</h3>
                    <span className="ct__person-role">{person.role}</span>
                    <div className="ct__person-contacts">
                      <a
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        className="ct__person-link"
                      >
                        <FaMobileAlt />
                        {person.phone}
                      </a>
                      <a
                        href={`mailto:${person.email}`}
                        className="ct__person-link"
                      >
                        <FaEnvelope />
                        {person.email}
                      </a>
                      {person.email2 && (
                        <a
                          href={`mailto:${person.email2}`}
                          className="ct__person-link"
                        >
                          <FaEnvelope />
                          {person.email2}
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="ct__person-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TEAM — EXPANSION JOINTS
          ═══════════════════════════════════════════════════════ */}
      <section className="ct__team-sec ct__team-sec--alt">
        <div className="ct__wrap">
          <Reveal dir="up">
            <div className="ct__sec-head">
              <span className="ct__tag">
                <FaShieldAlt className="ct__tag-icon" /> For Expansion Joints /
                Bellows
              </span>
              <h2 className="ct__h2">Expansion Joint Division Contacts</h2>
              <p className="ct__sub">
                Non Metallic, Metallic, and Rubber Expansion Joints
              </p>
            </div>
          </Reveal>

          <div className="ct__team-grid">
            {expansionTeam.map((person, i) => (
              <Reveal key={i} dir="up" delay={i * 120}>
                <div className="ct__person-card">
                  <div className="ct__person-avatar">
                    <FaUserTie />
                  </div>
                  <div className="ct__person-info">
                    <h3 className="ct__person-name">{person.name}</h3>
                    <span className="ct__person-role">{person.role}</span>
                    <div className="ct__person-contacts">
                      <a
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        className="ct__person-link"
                      >
                        <FaMobileAlt />
                        {person.phone}
                      </a>
                      <a
                        href={`mailto:${person.email}`}
                        className="ct__person-link"
                      >
                        <FaEnvelope />
                        {person.email}
                      </a>
                    </div>
                  </div>
                  <div className="ct__person-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OVERSEAS ASSOCIATES
          ═══════════════════════════════════════════════════════ */}
      <section className="ct__overseas">
        <div className="ct__wrap">
          <Reveal dir="up">
            <div className="ct__sec-head">
              <span className="ct__tag">
                <FaGlobeAmericas className="ct__tag-icon" /> Global Presence
              </span>
              <h2 className="ct__h2">Overseas Associates</h2>
              <p className="ct__sub">
                Our international partners for global reach
              </p>
            </div>
          </Reveal>

          <div className="ct__overseas-grid">
            {overseasAssociates.map((oa, i) => (
              <Reveal key={i} dir={i === 0 ? "left" : "right"} delay={i * 150}>
                <div className="ct__oa-card">
                  <div className="ct__oa-header">
                    <span className="ct__oa-flag">{oa.flag}</span>
                    <div>
                      <span className="ct__oa-region">For {oa.region}</span>
                      <h3 className="ct__oa-company">{oa.company}</h3>
                    </div>
                  </div>

                  <div className="ct__oa-body">
                    <div className="ct__oa-row">
                      <FaMapMarkerAlt className="ct__oa-icon" />
                      <p>{oa.address}</p>
                    </div>
                    <div className="ct__oa-row">
                      <FaUser className="ct__oa-icon" />
                      <div>
                        <strong>{oa.contact}</strong>
                        <span className="ct__oa-desig">{oa.designation}</span>
                      </div>
                    </div>
                    <div className="ct__oa-row">
                      <FaPhoneAlt className="ct__oa-icon" />
                      <a href={`tel:${oa.phone.replace(/\s/g, "")}`}>
                        {oa.phone}
                      </a>
                    </div>
                    {oa.mobile && (
                      <div className="ct__oa-row">
                        <FaMobileAlt className="ct__oa-icon" />
                        <a href={`tel:${oa.mobile.replace(/\s/g, "")}`}>
                          {oa.mobile}
                        </a>
                      </div>
                    )}
                    <div className="ct__oa-row">
                      <FaEnvelope className="ct__oa-icon" />
                      <div className="ct__oa-emails">
                        <a href={`mailto:${oa.email}`}>{oa.email}</a>
                        {oa.email2 && (
                          <a href={`mailto:${oa.email2}`}>{oa.email2}</a>
                        )}
                      </div>
                    </div>
                    {oa.website && (
                      <div className="ct__oa-row">
                        <FaGlobe className="ct__oa-icon" />
                        <a
                          href={`https://${oa.website}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {oa.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONTACT FORM
          ═══════════════════════════════════════════════════════ */}
      <section className="ct__form-sec">
        <div className="ct__wrap">
          <div className="ct__form-layout">
            <Reveal dir="left">
              <div className="ct__form-info">
                <span className="ct__tag">Send Us a Message</span>
                <h2 className="ct__h2">Have a Question?</h2>
                <p className="ct__p">
                  Fill out the form and our team will get back to you within 24
                  hours. Whether it's about product inquiries, custom
                  requirements, or technical support — we're here to help.
                </p>

                <div className="ct__form-quick">
                  <h4 className="ct__form-quick-title">Quick Contact</h4>
                  <div className="ct__form-quick-row">
                    <FaPhoneAlt className="ct__form-quick-icon" />
                    <div>
                      <a href="tel:+913325230864">+91 33 2523 0864</a>
                      <span className="ct__sep">/</span>
                      <a href="tel:+913335578207">+91 33 3557 8207</a>
                    </div>
                  </div>
                  <div className="ct__form-quick-row">
                    <FaEnvelope className="ct__form-quick-icon" />
                    <a href="mailto:info@flexoconindia.com">
                      info@flexoconindia.com
                    </a>
                  </div>
                </div>

                <div className="ct__form-social">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="ct__form-social-link ct__form-social-link--fb"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="ct__form-social-link ct__form-social-link--tw"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={150}>
              <form className="ct__form" onSubmit={handleSubmit}>
                {submitted && (
                  <div className="ct__form-success">
                    <FaPaperPlane />
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                <div className="ct__form-row">
                  <div className="ct__form-group">
                    <label className="ct__form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="ct__form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="ct__form-group">
                    <label className="ct__form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="ct__form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="ct__form-row">
                  <div className="ct__form-group">
                    <label className="ct__form-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="ct__form-input"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="ct__form-group">
                    <label className="ct__form-label">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="ct__form-input"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="ct__form-group">
                  <label className="ct__form-label">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="ct__form-input ct__form-select"
                    required
                  >
                    <option value="">Select inquiry type</option>
                    <option value="coupling">Coupling Inquiry</option>
                    <option value="expansion">Expansion Joint Inquiry</option>
                    <option value="custom">Custom Solution</option>
                    <option value="quote">Request a Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="ct__form-group">
                  <label className="ct__form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="ct__form-input ct__form-textarea"
                    placeholder="Describe your requirements..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="ct__form-submit">
                  <FaPaperPlane />
                  Send Message
                  <FaArrowRight className="ct__form-submit-arr" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAP
          ═══════════════════════════════════════════════════════ */}
      <section className="ct__map">
        <Reveal dir="up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6!2d88.38!3d22.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQwJzQ4LjAiTiA4OMKwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            className="ct__map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Flexocon Location"
          />
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="ct__cta">
        <div className="ct__wrap">
          <Reveal dir="up">
            <div className="ct__cta-box">
              <h2 className="ct__cta-h2">Ready to Start Your Project?</h2>
              <p className="ct__cta-p">
                Download our brochure or explore our complete product range
              </p>
              <div className="ct__cta-btns">
                <Link to="/products" className="ct__btn ct__btn--white">
                  View Products <FaArrowRight className="ct__btn-arr" />
                </Link>
                <a
                  href={BASE + "assets/brochure/brochure.pdf"}
                  download
                  className="ct__btn ct__btn--ghost"
                >
                  <FaFileDownload /> Download Brochure
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
