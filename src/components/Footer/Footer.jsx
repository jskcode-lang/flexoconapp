import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaArrowUp,
  FaDownload,
  FaIndustry,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="ft">
      {/* ── Back to Top ── */}
      <button
        className="ft__top-btn"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      {/* ══════════════════════════════════════════════════════
          Upper Footer
          ══════════════════════════════════════════════════════ */}
      <div className="ft__upper">
        <div className="ft__wrap">
          <div className="ft__grid">
            {/* ── Col 1: Company ── */}
            <div className="ft__col ft__col--brand">
              <Link to="/" className="ft__logo">
                <img
                  src="/assets/images/logo.png"
                  alt="Flexocon Engineers Pvt. Ltd."
                />
              </Link>
              <p className="ft__brand-text">
                Leading manufacturers of Expansion Joints and Mechanical Power
                Transmission Couplings — delivering precision-engineered
                solutions since 25+ years.
              </p>
              <div className="ft__social">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="ft__social-link ft__social-link--fb"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="ft__social-link ft__social-link--tw"
                  aria-label="X Twitter"
                >
                  <FaXTwitter />
                </a>
              </div>
              <a
                href="/assets/brochure/brochure.pdf"
                download
                className="ft__brochure-btn"
              >
                <FaDownload />
                Download Brochure
              </a>
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div className="ft__col">
              <h3 className="ft__col-title">Quick Links</h3>
              <ul className="ft__links">
                <li>
                  <Link to="/">
                    <FaChevronRight /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <FaChevronRight /> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <FaChevronRight /> Products
                  </Link>
                </li>
                <li>
                  <Link to="/clients">
                    <FaChevronRight /> Clients
                  </Link>
                </li>
                <li>
                  <Link to="/quality-policy">
                    <FaChevronRight /> Quality Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <FaChevronRight /> Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── Col 3: Products ── */}
            <div className="ft__col">
              <h3 className="ft__col-title">Our Products</h3>
              <ul className="ft__links">
                <li className="ft__links-head">
                  <FaShieldAlt className="ft__links-head-icon" />
                  Expansion Joints
                </li>
                <li>
                  <Link to="/products/expansion-joints/non-metallic">
                    <FaChevronRight /> Non Metallic
                  </Link>
                </li>
                <li>
                  <Link to="/products/expansion-joints/metallic">
                    <FaChevronRight /> Metallic
                  </Link>
                </li>
                <li>
                  <Link to="/products/expansion-joints/rubber">
                    <FaChevronRight /> Rubber
                  </Link>
                </li>

                <li className="ft__links-head ft__links-head--mt">
                  <FaCog className="ft__links-head-icon" />
                  Power Transmission
                </li>
                <li>
                  <Link to="/products/mechanical-power-transmission/resilient-coupling">
                    <FaChevronRight /> Resilient Coupling
                  </Link>
                </li>
                <li>
                  <Link to="/products/mechanical-power-transmission/geared-coupling">
                    <FaChevronRight /> Geared Coupling
                  </Link>
                </li>
                <li>
                  <Link to="/products/mechanical-power-transmission/pin-bush-tyre-coupling">
                    <FaChevronRight /> Pin Bush &amp; Tyre
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── Col 4: Contact ── */}
            <div className="ft__col ft__col--contact">
              <h3 className="ft__col-title">Registered Office</h3>
              <div className="ft__contact-block">
                <div className="ft__contact-item">
                  <FaMapMarkerAlt className="ft__contact-icon" />
                  <div>
                    <strong>Flexocon Engineers Pvt. Ltd.</strong>
                    <p>
                      29 Dr. Gopal Chatterjee Road, Sukchar,
                      <br />
                      Kolkata – 700 115, West Bengal, India.
                    </p>
                  </div>
                </div>
                <div className="ft__contact-item">
                  <FaPhoneAlt className="ft__contact-icon" />
                  <div>
                    <a href="tel:+913325230864">+91 33 2523 0864</a>
                    <span className="ft__contact-sep">/</span>
                    <a href="tel:+913335578207">+91 33 3557 8207</a>
                  </div>
                </div>
                <div className="ft__contact-item">
                  <FaEnvelope className="ft__contact-icon" />
                  <a href="mailto:info@flexoconindia.com">
                    info@flexoconindia.com
                  </a>
                </div>
              </div>

              <h3 className="ft__col-title ft__col-title--mt">
                Sales &amp; Marketing Office
              </h3>
              <div className="ft__contact-block">
                <div className="ft__contact-item">
                  <FaMapMarkerAlt className="ft__contact-icon" />
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
                <div className="ft__contact-item">
                  <FaPhoneAlt className="ft__contact-icon" />
                  <div>
                    <a href="tel:+913325230864">+91 33 2523 0864</a>
                    <span className="ft__contact-sep">/</span>
                    <a href="tel:+913335578207">+91 33 3557 8207</a>
                  </div>
                </div>
                <div className="ft__contact-item">
                  <FaEnvelope className="ft__contact-icon" />
                  <a href="mailto:info@flexoconindia.com">
                    info@flexoconindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          Middle Strip — Certifications
          ══════════════════════════════════════════════════════ */}
      <div className="ft__mid">
        <div className="ft__wrap">
          <div className="ft__mid-inner">
            <div className="ft__mid-item">
              <FaIndustry />
              <span>25+ Years Experience</span>
            </div>
            <div className="ft__mid-divider" />
            <div className="ft__mid-item">
              <FaShieldAlt />
              <span>ISO 9001:2008 Certified</span>
            </div>
            <div className="ft__mid-divider" />
            <div className="ft__mid-item">
              <FaCog />
              <span>500+ Installations</span>
            </div>
            <div className="ft__mid-divider" />
            <div className="ft__mid-item">
              <FaShieldAlt />
              <span>FSA USA &amp; EJMA Standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          Bottom Bar
          ══════════════════════════════════════════════════════ */}
      <div className="ft__bottom">
        <div className="ft__wrap">
          <div className="ft__bottom-inner">
            <p className="ft__copy">
              &copy; {currentYear} Flexocon Engineers Pvt. Ltd. All Rights
              Reserved.
            </p>
            <div className="ft__bottom-links">
              <Link to="/quality-policy">Quality Policy</Link>
              <span className="ft__bottom-dot">•</span>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
