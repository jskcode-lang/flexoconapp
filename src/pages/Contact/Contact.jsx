import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaBuilding,
  FaIndustry,
  FaCog,
  FaShieldAlt,
  FaPaperPlane,
  FaUserTie,
  FaMobileAlt,
  FaGlobe,
  FaArrowRight,
  FaFileDownload,
  FaUser,
} from "react-icons/fa";
import "./Contact.css";

const BASE = import.meta.env.BASE_URL;

const useInView = () => {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          o.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return [ref, v];
};
const Reveal = ({ children, dir = "up", delay = 0, className = "" }) => {
  const [ref, vis] = useInView();
  const m = { up: "ct__rv--up", left: "ct__rv--left", right: "ct__rv--right" };
  return (
    <div
      ref={ref}
      className={`ct__rv ${m[dir]} ${vis ? "ct__rv--vis" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

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
  {
    name: "Mr. Abhinandan Sengupta",
    role: "Sales & Marketing",
    phone: "+91 9830749648",
    email: "abhinandanflexocon@gmail.com",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Website Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:info@flexoconindia.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Navbar />
      <div className="ct">
        <section className="ct__hero">
          <div
            className="ct__hero-bg"
            style={{ backgroundImage: `url(${BASE}assets/hero-2.png)` }}
          />
          <div className="ct__hero-overlay" />
          <div className="ct__hero-content">
            <div className="ct__hero-badge ct__ha ct__ha--1">
              <FaGlobeAmericas /> WORLDWIDE SUPPLIER
            </div>
            <h1 className="ct__hero-h1 ct__ha ct__ha--2">
              GET IN TOUCH <span>FOR EXPANSION JOINTS & COUPLINGS</span>
            </h1>
            <div className="ct__hero-line ct__ha ct__ha--3" />
            <p className="ct__hero-p ct__ha ct__ha--4">
              Connecting engineering excellence across India, Europe & Asia
            </p>
          </div>
        </section>

        <section className="ct__intro">
          <div className="ct__wrap">
            <Reveal dir="up">
              <span className="ct__eyebrow">WE ARE READY TO HELP YOU</span>
              <h2 className="ct__intro-h2">CONTACT US</h2>
              <p className="ct__intro-p">
                The <strong>Flexocon Engineers Pvt. Ltd.</strong> team and our
                official associate partners are always ready to help you.
                Whether you need technical guidance, a custom solution or a
                quick quotation — reach out and we respond within 24 hours.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="ct__split">
          <div className="ct__split-img">
            <img
              src={`${BASE}assets/india-office.png`}
              alt="India Office"
              className="ct__split-real-img"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="ct__split-img-fallback" />
            <span className="ct__split-label">INDIA 🇮🇳</span>
          </div>
          <div className="ct__split-info ct__split-info--india">
            <Reveal dir="right" delay={100}>
              <span className="ct__split-eyebrow">INDIA • HEAD OFFICE</span>
              <h2 className="ct__split-h2">
                FLEXOCON ENGINEERS
                <br />
                PVT. LTD.
              </h2>
              <div className="ct__split-grid">
                <div className="ct__split-col">
                  <h4>
                    <FaBuilding /> Factory & Registered Office
                  </h4>
                  <p>
                    <strong>Flexocon Engineers Pvt. Ltd.</strong>
                    <br />
                    29 Dr. Gopal Chatterjee Road, Sukchar,
                    <br />
                    Kolkata – 700 115, West Bengal, India.
                  </p>
                  <a href="tel:+913325230864">
                    <FaPhoneAlt /> +91 33 2523 0864
                  </a>
                  <a href="mailto:info@flexoconindia.com">
                    <FaEnvelope /> info@flexoconindia.com
                  </a>
                </div>
                <div className="ct__split-col">
                  <h4>
                    <FaIndustry /> Sales & Marketing Office
                  </h4>
                  <p>
                    Abakash Apartment, Flat No-1C, 1st Floor,
                    <br />
                    14, MIG Housing Estate, Sodepur,
                    <br />
                    Kolkata - 700 110, West Bengal, India.
                  </p>
                  <a href="tel:+913335578207">
                    <FaPhoneAlt /> +91 33 3557 8207
                  </a>
                  <a href="mailto:info@flexoconindia.com">
                    <FaEnvelope /> info@flexoconindia.com
                  </a>
                </div>
              </div>
              <div className="ct__split-actions">
                <a
                  href="https://maps.google.com/?q=29+Dr+Gopal+Chatterjee+Road+Sukchar+Kolkata"
                  target="_blank"
                  rel="noreferrer"
                  className="ct__btn-split"
                >
                  VIEW LOCATION
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="ct__split ct__split--reverse">
          <div className="ct__split-info ct__split-info--vietnam">
            <Reveal dir="left" delay={100}>
              <span className="ct__split-eyebrow">
                ASSOCIATE OFFICE • VIETNAM 🇻🇳
              </span>
              <h2 className="ct__split-h2">
                LE DUONG TRADING
                <br />
                INVESTMENT CO. LTD.
              </h2>
              <div className="ct__split-grid ct__split-grid--single">
                <div className="ct__split-col">
                  <h4>Vietnam Office</h4>
                  <p>
                    No 28A, 26 Street, Tang Nhon Phu A Ward,
                    <br />
                    District 9, HCM City, Vietnam
                  </p>
                  <p className="ct__person-line">
                    <FaUser /> Duong Hien Kha (Henry Duong){" "}
                    <span>— Director</span>
                  </p>
                  <a href="tel:+84982599499">
                    <FaPhoneAlt /> (+84) 0982 599 499
                  </a>
                  <a href="mailto:hienkhabk@gmail.com">
                    <FaEnvelope /> hienkhabk@gmail.com
                  </a>
                  <a href="mailto:flexoconvietnam@gmail.com">
                    <FaEnvelope /> flexoconvietnam@gmail.com
                  </a>
                </div>
              </div>
              <div className="ct__split-actions">
                <a
                  href="mailto:flexoconvietnam@gmail.com"
                  className="ct__btn-split ct__btn-split--light"
                >
                  EMAIL VIETNAM
                </a>
                <a
                  href="https://maps.google.com/?q=District+9+HCM+City+Vietnam"
                  target="_blank"
                  rel="noreferrer"
                  className="ct__btn-split-outline"
                >
                  VIEW LOCATION
                </a>
              </div>
            </Reveal>
          </div>
          <div className="ct__split-img">
            <img
              src={`${BASE}assets/vietnam-office.png`}
              alt="Vietnam Office"
              className="ct__split-real-img"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="ct__split-img-fallback ct__split-img-fallback--vn" />
            <span className="ct__split-label">VIETNAM 🇻🇳</span>
          </div>
        </section>

        <section className="ct__team-sec">
          <div className="ct__wrap">
            <Reveal dir="up">
              <div className="ct__sec-head">
                <span className="ct__tag">
                  <FaCog /> For Coupling
                </span>
                <h2 className="ct__h2">Coupling Division Contacts</h2>
                <p className="ct__sub">
                  Resilient, Geared, Pin Bush & Tyre Couplings
                </p>
              </div>
            </Reveal>
            <div className="ct__team-grid">
              {couplingTeam.map((p, i) => (
                <Reveal key={i} dir="up" delay={i * 130}>
                  <div className="ct__person-card">
                    <div className="ct__person-top">
                      <div className="ct__person-avatar">
                        <FaUserTie />
                      </div>
                      <span className="ct__person-num">0{i + 1}</span>
                    </div>
                    <h3 className="ct__person-name">{p.name}</h3>
                    <span className="ct__person-role">{p.role}</span>
                    <div className="ct__person-divider" />
                    <div className="ct__person-contacts">
                      <a
                        href={`tel:${p.phone.replace(/\s/g, "")}`}
                        className="ct__person-link"
                      >
                        <i>
                          <FaMobileAlt />
                        </i>{" "}
                        {p.phone}
                      </a>
                      <a href={`mailto:${p.email}`} className="ct__person-link">
                        <i>
                          <FaEnvelope />
                        </i>{" "}
                        {p.email}
                      </a>
                      {p.email2 && (
                        <a
                          href={`mailto:${p.email2}`}
                          className="ct__person-link"
                        >
                          <i>
                            <FaEnvelope />
                          </i>{" "}
                          {p.email2}
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ct__team-sec ct__team-sec--alt">
          <div className="ct__wrap">
            <Reveal dir="up">
              <div className="ct__sec-head">
                <span className="ct__tag ct__tag--dark">
                  <FaShieldAlt /> For Expansion Joints / Bellows
                </span>
                <h2 className="ct__h2">Expansion Joint Division Contacts</h2>
                <p className="ct__sub">
                  Metallic, Non Metallic & Rubber Expansion Joints
                </p>
              </div>
            </Reveal>
            <div className="ct__team-grid">
              {expansionTeam.map((p, i) => (
                <Reveal key={i} dir="up" delay={i * 130}>
                  <div className="ct__person-card ct__person-card--alt">
                    <div className="ct__person-top">
                      <div className="ct__person-avatar ct__person-avatar--dark">
                        <FaUserTie />
                      </div>
                      <span className="ct__person-num">0{i + 1}</span>
                    </div>
                    <h3 className="ct__person-name">{p.name}</h3>
                    <span className="ct__person-role">{p.role}</span>
                    <div className="ct__person-divider" />
                    <div className="ct__person-contacts">
                      <a
                        href={`tel:${p.phone.replace(/\s/g, "")}`}
                        className="ct__person-link"
                      >
                        <i>
                          <FaMobileAlt />
                        </i>{" "}
                        {p.phone}
                      </a>
                      <a href={`mailto:${p.email}`} className="ct__person-link">
                        <i>
                          <FaEnvelope />
                        </i>{" "}
                        {p.email}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ct__form-sec">
          <div className="ct__wrap">
            <Reveal dir="up">
              <div className="ct__sec-head">
                <span className="ct__tag">
                  <FaPaperPlane /> Write To Us
                </span>
                <h2 className="ct__h2">Send Us a Message</h2>
                <p className="ct__sub">
                  All enquiries are sent directly to{" "}
                  <strong>info@flexoconindia.com</strong>
                </p>
              </div>
            </Reveal>
            <div className="ct__form-layout">
              <Reveal dir="left">
                <div className="ct__form-info">
                  <h3>Have a Question?</h3>
                  <p>
                    Fill the form and our team will reply within 24 hours. For
                    urgent matters call us.
                  </p>
                  <div className="ct__form-quick">
                    <a href="tel:+913325230864">
                      <FaPhoneAlt /> +91 33 2523 0864 / 3557 8207
                    </a>
                    <a href="mailto:info@flexoconindia.com">
                      <FaEnvelope /> info@flexoconindia.com
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal dir="right" delay={150}>
                <form className="ct__form" onSubmit={handleSubmit}>
                  {submitted && (
                    <div className="ct__form-success">
                      <FaPaperPlane /> Opening your email app...
                    </div>
                  )}
                  <div className="ct__form-row">
                    <div className="ct__form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="ct__form-input"
                      />
                    </div>
                    <div className="ct__form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="ct__form-input"
                      />
                    </div>
                  </div>
                  <div className="ct__form-row">
                    <div className="ct__form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone"
                        className="ct__form-input"
                      />
                    </div>
                    <div className="ct__form-group">
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="ct__form-input"
                      />
                    </div>
                  </div>
                  <div className="ct__form-group">
                    <label>Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="ct__form-input ct__form-select"
                    >
                      <option value="">Select inquiry type</option>
                      <option>Coupling Inquiry</option>
                      <option>Expansion Joint Inquiry</option>
                      <option>Custom Solution</option>
                      <option>Request a Quote</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="ct__form-group">
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Describe your requirements..."
                      className="ct__form-input ct__form-textarea"
                    />
                  </div>
                  <button type="submit" className="ct__form-submit">
                    <FaPaperPlane /> Send Message <FaArrowRight />
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WORLD MAP - FIXED: India + Vietnam + Saudi Arabia with Address Logo */}
        <section className="ct__worldmap">
          <img
            src={`${BASE}assets/world-map.png`}
            alt="World Map"
            className="ct__worldmap-img"
            onError={(e) => {
              e.currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.opacity = "0.9";
            }}
          />
          <div className="ct__worldmap-tint" />
          <div className="ct__worldmap-pins">
            {/* INDIA */}
            <div
              className="ct__map-pin"
              style={{ left: "70.5%", top: "46.5%" }}
            >
              <div className="ct__map-pin-dot ct__map-pin-dot--india">
                <FaMapMarkerAlt />
              </div>
              <div className="ct__map-pin-pulse" />
              <div className="ct__map-pin-card">
                FLEXOCON INDIA
                <br />
                <span>29 Dr. Gopal Chatterjee Rd, Kolkata</span>
              </div>
            </div>
            {/* VIETNAM */}
            <div
              className="ct__map-pin"
              style={{ left: "79.2%", top: "51.5%" }}
            >
              <div className="ct__map-pin-dot ct__map-pin-dot--vietnam">
                <FaMapMarkerAlt />
              </div>
              <div className="ct__map-pin-pulse" />
              <div className="ct__map-pin-card">
                VIETNAM ASSOCIATE
                <br />
                <span>No 28A, St 26, Dist 9, HCM City</span>
              </div>
            </div>
            {/* SAUDI ARABIA */}
            <div
              className="ct__map-pin"
              style={{ left: "57.2%", top: "42.5%" }}
            >
              <div className="ct__map-pin-dot ct__map-pin-dot--saudi">
                <FaMapMarkerAlt />
              </div>
              <div className="ct__map-pin-pulse" />
              <div className="ct__map-pin-card">
                SAUDI ARABIA ASSOCIATE
                <br />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
          <div className="ct__magnifier">
            <div className="ct__magnifier-circle">
              <img
                src={`${BASE}assets/world-map.png`}
                alt=""
                className="ct__magnifier-img"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")
                }
              />
              <div className="ct__magnifier-pin">
                <div className="ct__magnifier-dot">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div className="ct__magnifier-label">
                FLEXOCON
                <br />
                <strong>INDIA</strong>
              </div>
            </div>
          </div>
          <div className="ct__worldmap-title">
            <span>GLOBAL NETWORK</span>
            <h3>Our Associate Offices Worldwide</h3>
          </div>
        </section>

        <section className="ct__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6!2d88.38!3d22.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQwJzQ4LjAiTiA4OMKwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            className="ct__map-iframe"
            loading="lazy"
            title="Map"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <section className="ct__cta">
          <div className="ct__wrap">
            <Reveal dir="up">
              <div className="ct__cta-box">
                <h2>Ready to Start Your Project?</h2>
                <p>
                  Download our brochure or explore our complete product range
                </p>
                <div className="ct__cta-btns">
                  <Link to="/products" className="ct__btn ct__btn--white">
                    View Products <FaArrowRight />
                  </Link>
                  <a
                    href={`${BASE}assets/brochure/brochure.pdf`}
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
    </>
  );
}
