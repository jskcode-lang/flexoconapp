import { useReducer, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaChevronDown, FaDownload } from "react-icons/fa";
import "./PageHeader.css";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  return base + clean;
};

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
  { to: "/products/expansion-joints/rubber", label: "Rubber Expansion Joints" },
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

const initialState = {
  isOpen: false,
  mobileProductsOpen: false,
  mobileExpansionOpen: false,
  mobileMechanicalOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isOpen: !state.isOpen,
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
    case "TOGGLE_PRODUCTS":
      return {
        ...state,
        mobileProductsOpen: !state.mobileProductsOpen,
        mobileExpansionOpen: state.mobileProductsOpen
          ? false
          : state.mobileExpansionOpen,
        mobileMechanicalOpen: state.mobileProductsOpen
          ? false
          : state.mobileMechanicalOpen,
      };
    case "TOGGLE_EXPANSION":
      return { ...state, mobileExpansionOpen: !state.mobileExpansionOpen };
    case "TOGGLE_MECHANICAL":
      return { ...state, mobileMechanicalOpen: !state.mobileMechanicalOpen };
    default:
      return state;
  }
}

const DesktopSubMenu = ({ items }) => (
  <ul className="ph__dropdown ph__dropdown--sub" role="menu">
    {items.map(({ to, label }) => (
      <li key={to} className="ph__dropdown-item" role="none">
        <NavLink
          to={to}
          className={({ isActive }) =>
            `ph__dropdown-link ${isActive ? "ph__dropdown-link--active" : ""}`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

const MobileDeepMenu = ({ items, isOpen, onClose }) => (
  <div className={`ph__mob-sub-wrap ${isOpen ? "ph__mob-sub-wrap--open" : ""}`}>
    <ul className="ph__mob-sub ph__mob-sub--deep">
      {items.map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              `ph__mob-link ph__mob-link--deep ${isActive ? "ph__mob-link--active" : ""}`
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

const SocialLinks = () => (
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
    className="ph__social-link"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn aria-hidden="true" />
  </a>
);

const BrochureLink = ({ className = "", onClick, label = "Brochure" }) => (
  <a
    href={asset("assets/brochure/brochure.pdf")}
    download
    className={`ph__brochure ${className}`}
    onClick={onClick}
  >
    <FaDownload className="ph__brochure-icon" aria-hidden="true" />
    <span>{label}</span>
  </a>
);

const PageHeader = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isOpen,
    mobileProductsOpen,
    mobileExpansionOpen,
    mobileMechanicalOpen,
  } = state;
  const location = useLocation();
  const closeAll = useCallback(() => dispatch({ type: "CLOSE_ALL" }), []);

  useEffect(() => {
    closeAll();
  }, [location.pathname, closeAll]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) closeAll();
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [closeAll]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && closeAll();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, closeAll]);

  return (
    <header className="ph">
      <div className="ph__container">
        <Link to="/" className="ph__logo">
          <img
            src={asset("assets/logo_3.png")}
            alt="Flexocon"
            width="160"
            height="48"
          />
        </Link>

        <ul className="ph__menu">
          {NAV_LINKS.slice(0, 2).map(({ to, label, end }) => (
            <li key={to} className="ph__item">
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `ph__link ${isActive ? "ph__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          <li className="ph__item ph__item--dropdown">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `ph__link ph__link--dropdown ${isActive ? "ph__link--active" : ""}`
              }
            >
              Products
              <FaChevronDown className="ph__chevron" aria-hidden="true" />
            </NavLink>

            <ul className="ph__dropdown">
              <li className="ph__dropdown-item ph__dropdown-item--has-sub">
                <span className="ph__dropdown-link">
                  Expansion Joints
                  <FaChevronDown
                    className="ph__chevron ph__chevron--right"
                    aria-hidden="true"
                  />
                </span>
                <DesktopSubMenu items={EXPANSION_JOINTS} />
              </li>

              <li className="ph__dropdown-item ph__dropdown-item--has-sub">
                <span className="ph__dropdown-link">
                  Mechanical Power Transmission
                  <FaChevronDown
                    className="ph__chevron ph__chevron--right"
                    aria-hidden="true"
                  />
                </span>
                <DesktopSubMenu items={MECHANICAL_ITEMS} />
              </li>
            </ul>
          </li>

          {NAV_LINKS.slice(2).map(({ to, label }) => (
            <li key={to} className="ph__item">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `ph__link ${isActive ? "ph__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ph__actions">
          <BrochureLink />

          <div className="ph__social">
            <SocialLinks />
          </div>

          <button
            className={`ph__hamburger ${isOpen ? "ph__hamburger--open" : ""}`}
            onClick={() => dispatch({ type: "TOGGLE_MENU" })}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="ph__ham-line ph__ham-line--1" />
            <span className="ph__ham-line ph__ham-line--2" />
            <span className="ph__ham-line ph__ham-line--3" />
          </button>
        </div>
      </div>

      <div className={`ph__mob-menu ${isOpen ? "ph__mob-menu--open" : ""}`}>
        <ul className="ph__mob-list">
          {NAV_LINKS.slice(0, 2).map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  `ph__mob-link ${isActive ? "ph__mob-link--active" : ""}`
                }
                onClick={closeAll}
              >
                {label}
              </NavLink>
            </li>
          ))}

          <li>
            <button
              className={`ph__mob-link ph__mob-link--btn ${mobileProductsOpen ? "ph__mob-link--active" : ""}`}
              onClick={() => dispatch({ type: "TOGGLE_PRODUCTS" })}
              tabIndex={isOpen ? 0 : -1}
            >
              Products
              <FaChevronDown
                className={`ph__chevron ${mobileProductsOpen ? "ph__chevron--open" : ""}`}
              />
            </button>

            <div
              className={`ph__mob-sub-wrap ${mobileProductsOpen ? "ph__mob-sub-wrap--open" : ""}`}
            >
              <ul className="ph__mob-sub">
                <li>
                  <NavLink
                    to="/products"
                    tabIndex={mobileProductsOpen ? 0 : -1}
                    className={({ isActive }) =>
                      `ph__mob-link ph__mob-link--sub ${isActive ? "ph__mob-link--active" : ""}`
                    }
                    onClick={closeAll}
                  >
                    View All Products
                  </NavLink>
                </li>

                <li>
                  <button
                    className={`ph__mob-link ph__mob-link--sub ph__mob-link--btn ${mobileExpansionOpen ? "ph__mob-link--active" : ""}`}
                    onClick={() => dispatch({ type: "TOGGLE_EXPANSION" })}
                    tabIndex={mobileProductsOpen ? 0 : -1}
                  >
                    Expansion Joints
                    <FaChevronDown
                      className={`ph__chevron ${mobileExpansionOpen ? "ph__chevron--open" : ""}`}
                    />
                  </button>
                  <MobileDeepMenu
                    items={EXPANSION_JOINTS}
                    isOpen={mobileExpansionOpen}
                    onClose={closeAll}
                  />
                </li>

                <li>
                  <button
                    className={`ph__mob-link ph__mob-link--sub ph__mob-link--btn ${mobileMechanicalOpen ? "ph__mob-link--active" : ""}`}
                    onClick={() => dispatch({ type: "TOGGLE_MECHANICAL" })}
                    tabIndex={mobileProductsOpen ? 0 : -1}
                  >
                    Mechanical Power Transmission
                    <FaChevronDown
                      className={`ph__chevron ${mobileMechanicalOpen ? "ph__chevron--open" : ""}`}
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

          {NAV_LINKS.slice(2).map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  `ph__mob-link ${isActive ? "ph__mob-link--active" : ""}`
                }
                onClick={closeAll}
              >
                {label}
              </NavLink>
            </li>
          ))}

          <li className="ph__mob-bottom">
            <BrochureLink
              className="ph__mob-brochure"
              onClick={closeAll}
              label="Download Brochure"
            />
            <div className="ph__mob-social">
              <SocialLinks />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default PageHeader;
