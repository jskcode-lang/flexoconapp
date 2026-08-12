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
  FaMobileAlt,
  FaGlobe,
  FaArrowRight,
  FaFileDownload,
  FaHandshake,
  FaLongArrowAltRight,
} from "react-icons/fa";
import "./Contact.css";

const BASE = import.meta.env.BASE_URL;

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

const Reveal = ({ children, dir = "up", delay = 0, className = "" }) => {
  const [ref, vis] = useInView();
  const dirMap = {
    up: "ct__rv--up",
    down: "ct__rv--down",
    left: "ct__rv--left",
    right: "ct__rv--right",
    fade: "ct__rv--fade",
    scale: "ct__rv--scale",
  };
  return (
    <div
      ref={ref}
      className={`ct__rv ${dirMap[dir] || dirMap.up} ${vis ? "ct__rv--vis" : ""} ${className}`}
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
    email: "sarthak@flexoconindia.com",
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

const associates = [
  {
    id: 1,
    company: "Power Transmissions International Ltd",
    region: "UK & EUROPE",
    flag: "🇬🇧",
    address: "2, Chillingham, Dosthill, Staffordshire, B77 1JH, England",
    person: "Paul Selini",
    designation: "Managing Director",
    phones: ["+44 1827 261202", "+44 7780 613170"],
    emails: ["sales@ptigroup.co.uk", "pselini@ptigroup.co.uk"],
    website: "www.ptigroup.co.uk",
    pinPos: { left: "46.5%", top: "27%" },
  },
  {
    id: 2,
    company: "Le Duong Trading Investment Co. Ltd",
    region: "VIETNAM",
    flag: "🇻🇳",
    address:
      "No 28A, 26 Street, Tang Nhon Phu A Ward, District 9, HCM City, Vietnam",
    person: "Duong Hien Kha (Henry Duong)",
    designation: "Director",
    phones: ["(+84) 0982 599 499"],
    emails: ["hienkhabk@gmail.com"],
    website: "www.leduonggroup.com",
    pinPos: { left: "79.2%", top: "51.5%" },
  },
  {
    id: 3,
    company: "Power Flow Company (PFC)",
    region: "SAUDI ARABIA",
    flag: "🇸🇦",
    address:
      "Building 6917, Street 7A, An Nahdah District, P.O.-34241, Dammam 31518, Saudi Arabia",
    person: "Saifulla Shareef",
    designation: "Representative",
    phones: ["+966 13 814 3773", "+966 54 054 6789"],
    emails: ["saif@powerflow.com.sa"],
    website: "www.powerflow.com.sa",
    pinPos: { left: "57.2%", top: "42.5%" },
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
  const [divRef, divVis] = useInView(0.06);
  const [assocRef, assocVis] = useInView(0.05);

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
        {/* ═══════════ HERO ═══════════ */}
        <section className="ct__hero">
          <div
            className="ct__hero-bg"
            style={{ backgroundImage: `url(${BASE}assets/hero-2.png)` }}
          />
          <div className="ct__hero-overlay" />
          <div className="ct__hero-particles">
            {[...Array(6)].map((_, i) => (
              <div className="ct__hero-particle" key={i} />
            ))}
          </div>
          <div className="ct__hero-content">
            <div className="ct__hero-badge ct__ha ct__ha--1">
              <FaGlobeAmericas /> WORLDWIDE SUPPLIER
            </div>
            <h1 className="ct__hero-h1 ct__ha ct__ha--2">
              GET IN TOUCH
              <span>FOR EXPANSION JOINTS &amp; COUPLINGS</span>
            </h1>
            <div className="ct__hero-line ct__ha ct__ha--3" />
            <p className="ct__hero-p ct__ha ct__ha--4">
              Connecting engineering excellence across India, Europe &amp; Asia
            </p>
          </div>
          <div className="ct__hero-scroll">
            <div className="ct__hero-scroll-mouse">
              <div className="ct__hero-scroll-wheel" />
            </div>
          </div>
        </section>

        {/* ═══════════ INTRO ═══════════ */}
        <section className="ct__intro">
          <div className="ct__wrap">
            <Reveal dir="up">
              <span className="ct__eyebrow">WE ARE READY TO HELP YOU</span>
              <h2 className="ct__intro-h2">CONTACT US</h2>
              <p className="ct__intro-p">
                The <strong>Flexocon Engineers Private Limited</strong> team and
                our official associate partners are always ready to help you.
                Whether you need technical guidance, a custom solution or a
                quick quotation — reach out and we respond within 24&nbsp;hours.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ HEAD OFFICE ═══════════ */}
        <section className="ct__offices">
          <div className="ct__wrap">
            <Reveal dir="up">
              <div className="ct__sec-head">
                <span className="ct__tag">
                  <FaBuilding /> Head Office
                </span>
                <h2 className="ct__h2">Flexocon Engineers Private Limited</h2>
                <p className="ct__sub">India • Kolkata</p>
              </div>
            </Reveal>
            <div className="ct__office-cards">
              <Reveal dir="left" delay={100}>
                <div className="ct__office-card">
                  <div className="ct__office-icon-wrap">
                    <FaBuilding />
                  </div>
                  <h4 className="ct__office-label">
                    Factory &amp; Registered Office
                  </h4>
                  <p className="ct__office-addr">
                    29 Dr. Gopal Chatterjee Road, Sukchar,
                    <br />
                    Kolkata – 700 115, West Bengal, India.
                  </p>
                  <div className="ct__office-links">
                    <a href="tel:+913325230864">
                      <FaPhoneAlt /> +91 33 2523 0864
                    </a>
                    <a href="mailto:info@flexoconindia.com">
                      <FaEnvelope /> info@flexoconindia.com
                    </a>
                  </div>
                  <a
                    href="https://maps.google.com/?q=29+Dr+Gopal+Chatterjee+Road+Sukchar+Kolkata"
                    target="_blank"
                    rel="noreferrer"
                    className="ct__office-map-btn"
                  >
                    <FaMapMarkerAlt /> View on Map
                  </a>
                </div>
              </Reveal>
              <Reveal dir="right" delay={200}>
                <div className="ct__office-card">
                  <div className="ct__office-icon-wrap ct__office-icon-wrap--alt">
                    <FaIndustry />
                  </div>
                  <h4 className="ct__office-label">
                    Sales &amp; Marketing Office
                  </h4>
                  <p className="ct__office-addr">
                    Abakash Apartment, Flat No-1C, 1st Floor,
                    <br />
                    14, MIG Housing Estate, Sodepur,
                    <br />
                    Kolkata - 700 110, West Bengal, India.
                  </p>
                  <div className="ct__office-links">
                    <a href="tel:+913335578207">
                      <FaPhoneAlt /> +91 33 3557 8207
                    </a>
                    <a href="mailto:info@flexoconindia.com">
                      <FaEnvelope /> info@flexoconindia.com
                    </a>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sodepur+Kolkata+700110"
                    target="_blank"
                    rel="noreferrer"
                    className="ct__office-map-btn"
                  >
                    <FaMapMarkerAlt /> View on Map
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ CONTACT INFORMATION — FULL SPLIT ═══════════ */}
        <section
          className={`ct__divsplit ${divVis ? "ct__divsplit--active" : ""}`}
          ref={divRef}
        >
          {/* LEFT — COUPLING */}
          <div className="ct__divsplit-half ct__divsplit-half--left">
            <div className="ct__divsplit-inner">
              <div className="ct__divsplit-label">
                <span className="ct__divsplit-num">01</span>
                <FaCog className="ct__divsplit-label-icon" />
              </div>
              <h2 className="ct__divsplit-title">
                For <br />
                <span>Coupling</span>
              </h2>
              <p className="ct__divsplit-desc">
                Resilient, Geared, Pin Bush &amp; Tyre Couplings
              </p>
              <div className="ct__divsplit-line" />
              <div className="ct__divsplit-people">
                {couplingTeam.map((p, i) => (
                  <div
                    className={`ct__divsplit-person ${divVis ? "ct__divsplit-person--show" : ""}`}
                    style={{ transitionDelay: `${400 + i * 150}ms` }}
                    key={i}
                  >
                    <div className="ct__divsplit-person-row">
                      <h4 className="ct__divsplit-pname">{p.name}</h4>
                      <span className="ct__divsplit-prole">{p.role}</span>
                    </div>
                    <div className="ct__divsplit-plinks">
                      <a href={`tel:${p.phone.replace(/\s/g, "")}`}>
                        <FaMobileAlt /> {p.phone}
                      </a>
                      <a href={`mailto:${p.email}`}>
                        <FaEnvelope /> {p.email}
                      </a>
                      {p.email2 && (
                        <a href={`mailto:${p.email2}`}>
                          <FaEnvelope /> {p.email2}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ct__divsplit-bg-text">COUPLING</div>
          </div>

          {/* RIGHT — EXPANSION JOINTS */}
          <div className="ct__divsplit-half ct__divsplit-half--right">
            <div className="ct__divsplit-inner">
              <div className="ct__divsplit-label ct__divsplit-label--light">
                <span className="ct__divsplit-num ct__divsplit-num--light">
                  02
                </span>
                <FaShieldAlt className="ct__divsplit-label-icon" />
              </div>
              <h2 className="ct__divsplit-title ct__divsplit-title--light">
                For <br />
                <span>Expansion Joints</span>
              </h2>
              <p className="ct__divsplit-desc ct__divsplit-desc--light">
                Metallic, Non Metallic &amp; Rubber Expansion Joints
              </p>
              <div className="ct__divsplit-line ct__divsplit-line--light" />
              <div className="ct__divsplit-people">
                {expansionTeam.map((p, i) => (
                  <div
                    className={`ct__divsplit-person ct__divsplit-person--dark ${divVis ? "ct__divsplit-person--show" : ""}`}
                    style={{ transitionDelay: `${500 + i * 150}ms` }}
                    key={i}
                  >
                    <div className="ct__divsplit-person-row">
                      <h4 className="ct__divsplit-pname ct__divsplit-pname--light">
                        {p.name}
                      </h4>
                      <span className="ct__divsplit-prole ct__divsplit-prole--light">
                        {p.role}
                      </span>
                    </div>
                    <div className="ct__divsplit-plinks ct__divsplit-plinks--light">
                      <a href={`tel:${p.phone.replace(/\s/g, "")}`}>
                        <FaMobileAlt /> {p.phone}
                      </a>
                      <a href={`mailto:${p.email}`}>
                        <FaEnvelope /> {p.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ct__divsplit-bg-text ct__divsplit-bg-text--light">
              EXPANSION
            </div>
          </div>

          {/* CENTER BADGE */}
          <div className="ct__divsplit-center">
            <div className="ct__divsplit-center-badge">
              <span>Contact</span>
              <strong>Information</strong>
            </div>
          </div>
        </section>

        {/* ═══════════ ASSOCIATES — FULL WIDTH PREMIUM ═══════════ */}
        <section
          className={`ct__assoc ${assocVis ? "ct__assoc--active" : ""}`}
          ref={assocRef}
        >
          <div className="ct__assoc-bg-pattern" />
          <div className="ct__assoc-glow ct__assoc-glow--1" />
          <div className="ct__assoc-glow ct__assoc-glow--2" />
          <div className="ct__assoc-glow ct__assoc-glow--3" />

          <div className="ct__assoc-wrap">
            <Reveal dir="up">
              <div className="ct__assoc-header">
                <span className="ct__assoc-eyebrow">
                  <FaHandshake /> OUR GLOBAL NETWORK
                </span>
                <h2 className="ct__assoc-main-title">
                  Official Associate
                  <br />
                  <span className="ct__assoc-main-title-highlight">
                    Partners
                  </span>
                </h2>
                <div className="ct__assoc-title-line" />
                <p className="ct__assoc-main-sub">
                  Trusted engineering partnerships spanning continents
                </p>
              </div>
            </Reveal>

            <div className="ct__assoc-list">
              {associates.map((a, i) => (
                <Reveal dir="up" delay={i * 220} key={a.id}>
                  <div className="ct__assoc-block">
                    <div className="ct__assoc-block-top">
                      <span className="ct__assoc-block-num">0{a.id}</span>
                      <span className="ct__assoc-block-flag">{a.flag}</span>
                    </div>

                    <span className="ct__assoc-block-region">
                      <FaMapMarkerAlt /> {a.region}
                    </span>

                    <h3 className="ct__assoc-block-company">{a.company}</h3>

                    <p className="ct__assoc-block-addr">{a.address}</p>

                    <div className="ct__assoc-block-divider" />

                    <div className="ct__assoc-block-person">
                      <span className="ct__assoc-block-person-name">
                        {a.person}
                      </span>
                      <span className="ct__assoc-block-person-role">
                        {a.designation}
                      </span>
                    </div>

                    <div className="ct__assoc-block-contacts">
                      {a.phones.map((ph, j) => (
                        <a
                          href={`tel:${ph.replace(/[\s()]/g, "")}`}
                          key={`ph-${j}`}
                          className="ct__assoc-block-link"
                        >
                          <FaPhoneAlt /> {ph}
                        </a>
                      ))}
                      {a.emails.map((em, j) => (
                        <a
                          href={`mailto:${em}`}
                          key={`em-${j}`}
                          className="ct__assoc-block-link"
                        >
                          <FaEnvelope /> {em}
                        </a>
                      ))}
                      <a
                        href={`https://${a.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="ct__assoc-block-link ct__assoc-block-link--web"
                      >
                        <FaGlobe /> {a.website}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WORLD MAP ═══════════ */}
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
            <div
              className="ct__map-pin"
              style={{ left: "70.5%", top: "46.5%" }}
            >
              <div className="ct__map-pin-dot ct__map-pin-dot--india">
                <FaMapMarkerAlt />
              </div>
              <div className="ct__map-pin-pulse ct__map-pin-pulse--india" />
              <div className="ct__map-pin-card">
                FLEXOCON INDIA (HQ)
                <br />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>
            {associates.map((a) => (
              <div
                className="ct__map-pin"
                key={a.id}
                style={{ left: a.pinPos.left, top: a.pinPos.top }}
              >
                <div
                  className={`ct__map-pin-dot ct__map-pin-dot--assoc-${a.id}`}
                >
                  <FaMapMarkerAlt />
                </div>
                <div className="ct__map-pin-pulse" />
                <div className="ct__map-pin-card">
                  {a.company}
                  <br />
                  <span>{a.region}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="ct__worldmap-title">
            <span>GLOBAL NETWORK</span>
            <h3>Flexocon &amp; Associate Offices Worldwide</h3>
          </div>
        </section>

        {/* ═══════════ CONTACT FORM ═══════════ */}
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
                    Fill the form and our team will reply within 24&nbsp;hours.
                    For urgent matters call us directly.
                  </p>
                  <div className="ct__form-quick">
                    <a href="tel:+913325230864">
                      <FaPhoneAlt /> +91 33 2523 0864 / 3557 8207
                    </a>
                    <a href="mailto:info@flexoconindia.com">
                      <FaEnvelope /> info@flexoconindia.com
                    </a>
                  </div>
                  <div className="ct__form-hours">
                    <h4>Office Hours</h4>
                    <p>
                      Monday – Saturday: 10:00 AM – 6:00 PM (IST)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal dir="right" delay={150}>
                <form className="ct__form" onSubmit={handleSubmit}>
                  {submitted && (
                    <div className="ct__form-success">
                      <FaPaperPlane /> Opening your email app…
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

        {/* ═══════════ GOOGLE MAP ═══════════ */}
        <section className="ct__gmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6!2d88.38!3d22.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQwJzQ4LjAiTiA4OMKwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            className="ct__gmap-iframe"
            loading="lazy"
            title="Flexocon Engineers Location"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* ═══════════ CTA ═══════════ */}
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
