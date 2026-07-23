import { useReducer, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaFacebook, FaChevronDown, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Navbar.css";

const BASE = import.meta.env.BASE_URL || "/flexoconapp";

// ─────────────────────────────────────────────────────────────
// Constants - avoid magic strings scattered in JSX
// ─────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/clients", label: "Clients" },
  { to: "/quality-policy", label: "Quality Policy" },
  { to: "/contact", label: "Contact" },
];

const EXPANSION_JOINTS = [
  {
    to: "/products/expansion-joints/non-metallic",
    label: "Non Metallic Expansion Joints",
  },
  {
    to: "/products/expansion-joints/metallic",
    label: "Metallic Expansion Joints",
  },
  {
    to: "/products/expansion-joints/rubber",
    label: "Rubber Expansion Joints",
  },
];

const MECHANICAL_ITEMS = [
  {
    to: "/products/mechanical-power-transmission/resilient-coupling",
    label: "Resilient Coupling",
  },
  {
    to: "/products/mechanical-power-transmission/geared-coupling",
    label: "Geared Coupling",
  },
  {
    to: "/products/mechanical-power-transmission/pin-bush-tyre-coupling",
    label: "Pin Bush & Tyre Coupling",
  },
];

// ─────────────────────────────────────────────────────────────
// State & Reducer
// ─────────────────────────────────────────────────────────────
const initialState = {
  isOpen: false,
  scrolled: false,
  mobileProductsOpen: false,
  mobileExpansionOpen: false,
  mobileMechanicalOpen: false,
};

function navReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isOpen: !state.isOpen,
        // Reset sub-menus when closing
        mobileProductsOpen: state.isOpen ? false : state.mobileProductsOpen,
        mobileExpansionOpen: state.isOpen ? false : state.mobileExpansionOpen,
        mobileMechanicalOpen: state.isOpen ? false : state.mobileMechanicalOpen,
      };

    case "CLOSE_ALL":
      return {
        ...state,
        isOpen: false,
        mobileProductsOpen: false,
        mobileExpansionOpen: false,
        mobileMechanicalOpen: false,
      };

    case "SET_SCROLLED":
      return { ...state, scrolled: action.payload };

    case "TOGGLE_PRODUCTS":
      return {
        ...state,
        mobileProductsOpen: !state.mobileProductsOpen,
        // Close children when parent closes
        mobileExpansionOpen: state.mobileProductsOpen
          ? false
          : state.mobileExpansionOpen,
        mobileMechanicalOpen: state.mobileProductsOpen
          ? false
          : state.mobileMechanicalOpen,
      };

    case "TOGGLE_EXPANSION":
      return {
        ...state,
        mobileExpansionOpen: !state.mobileExpansionOpen,
      };

    case "TOGGLE_MECHANICAL":
      return {
        ...state,
        mobileMechanicalOpen: !state.mobileMechanicalOpen,
      };

    default:
      return state;
  }
}

// ─────────────────────────────────────────────────────────────
// Small reusable sub-components
// ─────────────────────────────────────────────────────────────

/** Desktop dropdown sub-list */
const DesktopSubMenu = ({ items }) => (
  <ul className="dropdown dropdown--sub" role="menu">
    {items.map(({ to, label }) => (
      <li key={to} className="dropdown__item" role="none">
        <NavLink
          to={to}
          role="menuitem"
          className={({ isActive }) =>
            `dropdown__link ${isActive ? "dropdown__link--active" : ""}`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

/** Mobile collapsible sub-list (deep level) */
const MobileDeepMenu = ({ items, isOpen, onClose }) => (
  <div
    className={`mobile__sub-wrapper ${isOpen ? "mobile__sub-wrapper--open" : ""}`}
    aria-hidden={!isOpen}
  >
    <ul className="mobile__sub mobile__sub--deep">
      {items.map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              `mobile__link mobile__link--deep ${
                isActive ? "mobile__link--active" : ""
              }`
            }
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

/** Social icons - shared between desktop and mobile */
const SocialLinks = () => (
  <>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="social__link social__link--facebook"
      aria-label="Visit our Facebook page"
    >
      <FaFacebook aria-hidden="true" />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noreferrer"
      className="social__link social__link--twitter"
      aria-label="Visit our X / Twitter page"
    >
      <FaXTwitter aria-hidden="true" />
    </a>
  </>
);

/** Brochure download button */
const BrochureLink = ({ className = "", onClick, label = "Brochure" }) => (
  <a
    href={BASE + "/assets/brochure/brochure.pdf"}
    download
    className={`navbar__brochure ${className}`}
    onClick={onClick}
    aria-label="Download company brochure PDF"
  >
    <FaDownload className="brochure__icon" aria-hidden="true" />
    <span>{label}</span>
  </a>
);

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
const Navbar = () => {
  const [state, dispatch] = useReducer(navReducer, initialState);
  const {
    isOpen,
    scrolled,
    mobileProductsOpen,
    mobileExpansionOpen,
    mobileMechanicalOpen,
  } = state;

  const location = useLocation();
  const navRef = useRef(null);

  // ── Memoized close handler ─────────────────────────────────
  const closeAll = useCallback(() => dispatch({ type: "CLOSE_ALL" }), []);

  // ── Scroll listener ────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () =>
      dispatch({ type: "SET_SCROLLED", payload: window.scrollY > 20 });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Resize listener ────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) closeAll();
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [closeAll]);

  // ── Lock body scroll when mobile menu is open ──────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ── Close on route change ──────────────────────────────────
  useEffect(() => {
    closeAll();
  }, [location.pathname, closeAll]);

  // ── Close on outside click ─────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen, closeAll]);

  // ── Close on Escape key ────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeAll();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeAll]);

  // ─────────────────────────────────────────────────────────
  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" aria-label="Go to homepage">
          <img
            src={BASE + "assets/logo.png"}
            alt="Company Logo"
            width="160" // ← Prevents layout shift
            height="48"
          />
        </Link>

        {/* ── Desktop Menu ── */}
        <ul className="navbar__menu" role="menubar">
          {/* Static links before Products */}
          {NAV_LINKS.slice(0, 2).map(({ to, label, end }) => (
            <li key={to} className="navbar__item" role="none">
              <NavLink
                to={to}
                end={end}
                role="menuitem"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* ── Products Dropdown ── */}
          <li className="navbar__item navbar__item--dropdown" role="none">
            <NavLink
              to="/products"
              role="menuitem"
              aria-haspopup="true"
              className={({ isActive }) =>
                `navbar__link navbar__link--dropdown ${isActive ? "active" : ""}`
              }
            >
              Products
              <FaChevronDown className="chevron" aria-hidden="true" />
            </NavLink>

            <ul className="dropdown" role="menu" aria-label="Products submenu">
              {/* Expansion Joints */}
              <li
                className="dropdown__item dropdown__item--has-sub"
                role="none"
              >
                <span
                  className="dropdown__link"
                  role="menuitem"
                  aria-haspopup="true"
                >
                  Expansion Joints
                  <FaChevronDown
                    className="chevron chevron--right"
                    aria-hidden="true"
                  />
                </span>
                <DesktopSubMenu items={EXPANSION_JOINTS} />
              </li>

              {/* Mechanical Power Transmission */}
              <li
                className="dropdown__item dropdown__item--has-sub"
                role="none"
              >
                <span
                  className="dropdown__link"
                  role="menuitem"
                  aria-haspopup="true"
                >
                  Mechanical Power Transmission
                  <FaChevronDown
                    className="chevron chevron--right"
                    aria-hidden="true"
                  />
                </span>
                <DesktopSubMenu items={MECHANICAL_ITEMS} />
              </li>
            </ul>
          </li>

          {/* Static links after Products */}
          {NAV_LINKS.slice(2).map(({ to, label }) => (
            <li key={to} className="navbar__item" role="none">
              <NavLink
                to={to}
                role="menuitem"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Actions ── */}
        <div className="navbar__actions">
          <BrochureLink />

          <div className="navbar__social" aria-label="Social media links">
            <SocialLinks />
          </div>

          {/* ── Hamburger ── */}
          <button
            className={`navbar__hamburger ${
              isOpen ? "navbar__hamburger--open" : ""
            }`}
            onClick={() => dispatch({ type: "TOGGLE_MENU" })}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="hamburger__line line-1" aria-hidden="true" />
            <span className="hamburger__line line-2" aria-hidden="true" />
            <span className="hamburger__line line-3" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`mobile__menu ${isOpen ? "mobile__menu--open" : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <ul className="mobile__list" role="menu">
          {/* Static links before Products */}
          {NAV_LINKS.slice(0, 2).map(({ to, label, end }) => (
            <li key={to} role="none">
              <NavLink
                to={to}
                end={end}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  `mobile__link ${isActive ? "mobile__link--active" : ""}`
                }
                onClick={closeAll}
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* ── Mobile Products ── */}
          <li role="none">
            <button
              className={`mobile__link mobile__link--btn ${
                mobileProductsOpen ? "mobile__link--active" : ""
              }`}
              onClick={() => dispatch({ type: "TOGGLE_PRODUCTS" })}
              aria-expanded={mobileProductsOpen}
              aria-controls="mobile-products-menu"
              tabIndex={isOpen ? 0 : -1}
            >
              Products
              <FaChevronDown
                className={`chevron ${mobileProductsOpen ? "chevron--open" : ""}`}
                aria-hidden="true"
              />
            </button>

            <div
              id="mobile-products-menu"
              className={`mobile__sub-wrapper ${
                mobileProductsOpen ? "mobile__sub-wrapper--open" : ""
              }`}
              aria-hidden={!mobileProductsOpen}
            >
              <ul className="mobile__sub" role="menu">
                <li role="none">
                  <NavLink
                    to="/products"
                    role="menuitem"
                    tabIndex={mobileProductsOpen ? 0 : -1}
                    className={({ isActive }) =>
                      `mobile__link mobile__link--sub ${
                        isActive ? "mobile__link--active" : ""
                      }`
                    }
                    onClick={closeAll}
                  >
                    View All Products
                  </NavLink>
                </li>

                {/* Expansion Joints */}
                <li role="none">
                  <button
                    className={`mobile__link mobile__link--sub mobile__link--btn ${
                      mobileExpansionOpen ? "mobile__link--active" : ""
                    }`}
                    onClick={() => dispatch({ type: "TOGGLE_EXPANSION" })}
                    aria-expanded={mobileExpansionOpen}
                    tabIndex={mobileProductsOpen ? 0 : -1}
                  >
                    Expansion Joints
                    <FaChevronDown
                      className={`chevron ${
                        mobileExpansionOpen ? "chevron--open" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <MobileDeepMenu
                    items={EXPANSION_JOINTS}
                    isOpen={mobileExpansionOpen}
                    onClose={closeAll}
                  />
                </li>

                {/* Mechanical Power Transmission */}
                <li role="none">
                  <button
                    className={`mobile__link mobile__link--sub mobile__link--btn ${
                      mobileMechanicalOpen ? "mobile__link--active" : ""
                    }`}
                    onClick={() => dispatch({ type: "TOGGLE_MECHANICAL" })}
                    aria-expanded={mobileMechanicalOpen}
                    tabIndex={mobileProductsOpen ? 0 : -1}
                  >
                    Mechanical Power Transmission
                    <FaChevronDown
                      className={`chevron ${
                        mobileMechanicalOpen ? "chevron--open" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <MobileDeepMenu
                    items={MECHANICAL_ITEMS}
                    isOpen={mobileMechanicalOpen}
                    onClose={closeAll}
                  />
                </li>
              </ul>
            </div>
          </li>

          {/* Static links after Products */}
          {NAV_LINKS.slice(2).map(({ to, label }) => (
            <li key={to} role="none">
              <NavLink
                to={to}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  `mobile__link ${isActive ? "mobile__link--active" : ""}`
                }
                onClick={closeAll}
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* ── Mobile Bottom ── */}
          <li className="mobile__bottom" role="none">
            <BrochureLink
              className="mobile__brochure"
              onClick={closeAll}
              label="Download Brochure"
            />
            <div className="mobile__social" aria-label="Social media links">
              <SocialLinks />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
