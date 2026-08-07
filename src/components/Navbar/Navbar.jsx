import { useReducer, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaLinkedin,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaDownload,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import "./Navbar.css";

const BASE = import.meta.env.BASE_URL || "/flexoconapp";
const asset = (path) => {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = BASE.endsWith("/") ? BASE : BASE + "/";
  return base + clean;
};

// ── State & Reducer ───────────────────────────────────────────
const initialState = {
  isOpen: false,
  scrolled: false,
  activeSubmenu: null, // 'products' | 'expansion' | 'mechanical' | null
};

function navReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isOpen: !state.isOpen, activeSubmenu: null };
    case "CLOSE_ALL":
      return { ...state, isOpen: false, activeSubmenu: null };
    case "SET_SCROLLED":
      return { ...state, scrolled: action.payload };
    case "SET_SUBMENU":
      return {
        ...state,
        activeSubmenu:
          state.activeSubmenu === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
}

const Navbar = () => {
  const [state, dispatch] = useReducer(navReducer, initialState);
  const { isOpen, scrolled, activeSubmenu } = state;
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      dispatch({ type: "SET_SCROLLED", payload: window.scrollY > 20 });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    dispatch({ type: "CLOSE_ALL" });
  }, [location.pathname]);

  const closeMenu = () => dispatch({ type: "CLOSE_ALL" });

  return (
    <>
      {/* ── Top Navbar Bar ── */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img src={asset("assets/logo.png")} alt="Company Logo" />
          </Link>

          {/* Right Actions */}
          <div className="navbar__actions">
            <a
              href="/assets/Brochure.pdf"
              download
              className="navbar__brochure"
            >
              <FaDownload className="brochure__icon" />
              <span>Brochure</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <button
              className={`navbar__menu-btn ${isOpen ? "navbar__menu-btn--open" : ""}`}
              onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <HiMenuAlt4 />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Fullscreen Menu Overlay ── */}
      <div
        className={`fullscreen-menu ${isOpen ? "fullscreen-menu--open" : ""}`}
      >
        {/* Close Button */}
        <button
          className="fullscreen-menu__close"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        <div className="fullscreen-menu__container">
          {/* LEFT SIDE — MAIN LINKS */}
          <div className="fullscreen-menu__left">
            <ul className="fullscreen-menu__list">
              <li className="fullscreen-menu__item" style={{ "--i": 1 }}>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `fullscreen-menu__link ${isActive ? "fullscreen-menu__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  <span>Home</span>
                </NavLink>
              </li>

              <li className="fullscreen-menu__item" style={{ "--i": 2 }}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `fullscreen-menu__link ${isActive ? "fullscreen-menu__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  <span>About Us</span>
                </NavLink>
              </li>

              {/* Products with submenu */}
              <li className="fullscreen-menu__item" style={{ "--i": 3 }}>
                <button
                  className={`fullscreen-menu__link fullscreen-menu__link--btn ${
                    activeSubmenu === "products"
                      ? "fullscreen-menu__link--open"
                      : ""
                  }`}
                  onClick={() =>
                    dispatch({ type: "SET_SUBMENU", payload: "products" })
                  }
                >
                  <span>Products</span>
                  <FaChevronRight className="fullscreen-menu__chevron" />
                </button>

                <div
                  className={`fullscreen-submenu ${
                    activeSubmenu === "products"
                      ? "fullscreen-submenu--open"
                      : ""
                  }`}
                >
                  <ul className="fullscreen-submenu__list">
                    <li>
                      <NavLink
                        to="/products"
                        className="fullscreen-submenu__link"
                        onClick={closeMenu}
                      >
                        View All Products
                      </NavLink>
                    </li>

                    {/* Expansion Joints */}
                    <li>
                      <button
                        className={`fullscreen-submenu__link fullscreen-submenu__link--btn ${
                          activeSubmenu === "expansion"
                            ? "fullscreen-submenu__link--open"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch({
                            type: "SET_SUBMENU",
                            payload: "expansion",
                          });
                        }}
                      >
                        Expansion Joints
                        <FaChevronDown
                          className={`fullscreen-submenu__chevron ${
                            activeSubmenu === "expansion"
                              ? "fullscreen-submenu__chevron--open"
                              : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`fullscreen-deep ${
                          activeSubmenu === "expansion"
                            ? "fullscreen-deep--open"
                            : ""
                        }`}
                      >
                        <ul>
                          <li>
                            <NavLink
                              to="/products/expansion-joints/non-metallic"
                              className="fullscreen-deep__link"
                              onClick={closeMenu}
                            >
                              Non Metallic Expansion Joints
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/products/expansion-joints/metallic"
                              className="fullscreen-deep__link"
                              onClick={closeMenu}
                            >
                              Metallic Expansion Joints
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/products/expansion-joints/rubber"
                              className="fullscreen-deep__link"
                              onClick={closeMenu}
                            >
                              Rubber Expansion Joints
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Mechanical */}
                    <li>
                      <button
                        className={`fullscreen-submenu__link fullscreen-submenu__link--btn ${
                          activeSubmenu === "mechanical"
                            ? "fullscreen-submenu__link--open"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch({
                            type: "SET_SUBMENU",
                            payload: "mechanical",
                          });
                        }}
                      >
                        Mechanical Power Transmission
                        <FaChevronDown
                          className={`fullscreen-submenu__chevron ${
                            activeSubmenu === "mechanical"
                              ? "fullscreen-submenu__chevron--open"
                              : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`fullscreen-deep ${
                          activeSubmenu === "mechanical"
                            ? "fullscreen-deep--open"
                            : ""
                        }`}
                      >
                        <ul>
                          <li>
                            <NavLink
                              to="/products/mechanical-power-transmission/resilient-coupling"
                              className="fullscreen-deep__link"
                              onClick={closeMenu}
                            >
                              Resilient Coupling
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/products/mechanical-power-transmission/geared-coupling"
                              className="fullscreen-deep__link"
                              onClick={closeMenu}
                            >
                              Geared Coupling
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/products/mechanical-power-transmission/pin-bush-tyre-coupling"
                              className="fullscreen-deep__link"
                              onClick={closeMenu}
                            >
                              Pin Bush & Tyre Coupling
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="fullscreen-menu__item" style={{ "--i": 4 }}>
                <NavLink
                  to="/clients"
                  className={({ isActive }) =>
                    `fullscreen-menu__link ${isActive ? "fullscreen-menu__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  <span>Clients</span>
                </NavLink>
              </li>

              <li className="fullscreen-menu__item" style={{ "--i": 5 }}>
                <NavLink
                  to="/quality-policy"
                  className={({ isActive }) =>
                    `fullscreen-menu__link ${isActive ? "fullscreen-menu__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  <span>Quality Policy</span>
                </NavLink>
              </li>

              <li className="fullscreen-menu__item" style={{ "--i": 6 }}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `fullscreen-menu__link ${isActive ? "fullscreen-menu__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE — TOPLINKS / QUICK ACCESS */}
          <div className="fullscreen-menu__right">
            <h3 className="fullscreen-menu__title">Toplinks</h3>
            <ul className="fullscreen-menu__toplinks">
              <li style={{ "--i": 2 }}>
                <NavLink
                  to="/products/expansion-joints/non-metallic"
                  onClick={closeMenu}
                >
                  Non Metallic Expansion Joints
                </NavLink>
              </li>
              <li style={{ "--i": 3 }}>
                <NavLink
                  to="/products/expansion-joints/metallic"
                  onClick={closeMenu}
                >
                  Metallic Expansion Joints
                </NavLink>
              </li>
              <li style={{ "--i": 4 }}>
                <NavLink
                  to="/products/expansion-joints/rubber"
                  onClick={closeMenu}
                >
                  Rubber Expansion Joints
                </NavLink>
              </li>
              <li style={{ "--i": 5 }}>
                <NavLink
                  to="/products/mechanical-power-transmission/resilient-coupling"
                  onClick={closeMenu}
                >
                  Resilient Coupling
                </NavLink>
              </li>
              <li style={{ "--i": 6 }}>
                <NavLink
                  to="/products/mechanical-power-transmission/geared-coupling"
                  onClick={closeMenu}
                >
                  Geared Coupling
                </NavLink>
              </li>
            </ul>

            <div className="fullscreen-menu__divider" />

            <a
              href="/assets/brochure/brochure.pdf"
              download
              className="fullscreen-menu__cta"
              onClick={closeMenu}
            >
              <FaDownload />
              <span>Download Brochure</span>
            </a>

            <div className="fullscreen-menu__social">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="fullscreen-menu__footer">
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/quality-policy" onClick={closeMenu}>
            Quality Policy
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
