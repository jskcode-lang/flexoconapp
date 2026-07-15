import { useReducer, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaDownload,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Navbar.css";

// ── State & Reducer ───────────────────────────────────────────
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
      return { ...state, isOpen: !state.isOpen };
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
        mobileExpansionOpen: false,
        mobileMechanicalOpen: false,
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

// ── Component ─────────────────────────────────────────────────
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

  // ── Scroll ────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      dispatch({ type: "SET_SCROLLED", payload: window.scrollY > 20 });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Resize ────────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        dispatch({ type: "CLOSE_ALL" });
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Body scroll lock ──────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ── Close menu on route change ────────────────────────────────
  // dispatch is stable so this is safe — no setState cascade
  useEffect(() => {
    dispatch({ type: "CLOSE_ALL" });
  }, [location.pathname]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`navbar__overlay ${
          isOpen ? "navbar__overlay--visible" : ""
        }`}
        onClick={() => dispatch({ type: "CLOSE_ALL" })}
      />

      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          {/* ── Logo ── */}
          <Link to="/" className="navbar__logo">
            <img src="/assets/logo.png" alt="Company Logo" />
          </Link>

          {/* ── Desktop Menu ── */}
          <ul className="navbar__menu">
            <li className="navbar__item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="navbar__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                About Us
              </NavLink>
            </li>

            {/* ── Products Dropdown ── */}
            <li className="navbar__item navbar__item--dropdown">
              {/*
                FIX: Changed <span> to <NavLink>
                so clicking Products actually navigates
              */}
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `navbar__link navbar__link--dropdown ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Products
                <FaChevronDown className="chevron" />
              </NavLink>

              <ul className="dropdown">
                {/* Expansion Joints */}
                <li className="dropdown__item dropdown__item--has-sub">
                  <span className="dropdown__link">
                    Expansion Joints
                    <FaChevronDown className="chevron chevron--right" />
                  </span>

                  <ul className="dropdown dropdown--sub">
                    <li className="dropdown__item">
                      <NavLink
                        to="/products/expansion-joints/non-metallic"
                        className={({ isActive }) =>
                          `dropdown__link ${isActive ? "dropdown__link--active" : ""}`
                        }
                      >
                        Non Metallic Expansion Joints
                      </NavLink>
                    </li>
                    <li className="dropdown__item">
                      <NavLink
                        to="/products/expansion-joints/metallic"
                        className={({ isActive }) =>
                          `dropdown__link ${isActive ? "dropdown__link--active" : ""}`
                        }
                      >
                        Metallic Expansion Joints
                      </NavLink>
                    </li>
                    <li className="dropdown__item">
                      <NavLink
                        to="/products/expansion-joints/rubber"
                        className={({ isActive }) =>
                          `dropdown__link ${isActive ? "dropdown__link--active" : ""}`
                        }
                      >
                        Rubber Expansion Joints
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Mechanical Power Transmission */}
                <li className="dropdown__item dropdown__item--has-sub">
                  <span className="dropdown__link">
                    Mechanical Power Transmission
                    <FaChevronDown className="chevron chevron--right" />
                  </span>

                  <ul className="dropdown dropdown--sub">
                    <li className="dropdown__item">
                      <NavLink
                        to="/products/mechanical-power-transmission/resilient-coupling"
                        className={({ isActive }) =>
                          `dropdown__link ${isActive ? "dropdown__link--active" : ""}`
                        }
                      >
                        Resilient Coupling
                      </NavLink>
                    </li>
                    <li className="dropdown__item">
                      <NavLink
                        to="/products/mechanical-power-transmission/geared-coupling"
                        className={({ isActive }) =>
                          `dropdown__link ${isActive ? "dropdown__link--active" : ""}`
                        }
                      >
                        Geared Coupling
                      </NavLink>
                    </li>
                    <li className="dropdown__item">
                      <NavLink
                        to="/products/mechanical-power-transmission/pin-bush-tyre-coupling"
                        className={({ isActive }) =>
                          `dropdown__link ${isActive ? "dropdown__link--active" : ""}`
                        }
                      >
                        Pin Bush & Tyre Coupling
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="navbar__item">
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                Clients
              </NavLink>
            </li>

            <li className="navbar__item">
              <NavLink
                to="/quality-policy"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                Quality Policy
              </NavLink>
            </li>

            <li className="navbar__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* ── Actions ── */}
          <div className="navbar__actions">
            <a
              href="/assets/brochure/brochure.pdf"
              download
              className="navbar__brochure"
            >
              <FaDownload className="brochure__icon" />
              <span>Brochure</span>
            </a>

            <div className="navbar__social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social__link social__link--facebook"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social__link social__link--twitter"
                aria-label="X Twitter"
              >
                <FaXTwitter />
              </a>
            </div>

            <button
              className={`navbar__hamburger ${
                isOpen ? "navbar__hamburger--open" : ""
              }`}
              onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`mobile__menu ${isOpen ? "mobile__menu--open" : ""}`}>
          <ul className="mobile__list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `mobile__link ${isActive ? "mobile__link--active" : ""}`
                }
                onClick={() => dispatch({ type: "CLOSE_ALL" })}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `mobile__link ${isActive ? "mobile__link--active" : ""}`
                }
                onClick={() => dispatch({ type: "CLOSE_ALL" })}
              >
                About Us
              </NavLink>
            </li>

            {/* ── Mobile Products ── */}
            <li>
              <button
                className={`mobile__link mobile__link--btn ${
                  mobileProductsOpen ? "mobile__link--active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE_PRODUCTS" })}
              >
                Products
                <FaChevronDown
                  className={`chevron ${
                    mobileProductsOpen ? "chevron--open" : ""
                  }`}
                />
              </button>

              <div
                className={`mobile__sub-wrapper ${
                  mobileProductsOpen ? "mobile__sub-wrapper--open" : ""
                }`}
              >
                <ul className="mobile__sub">
                  {/* View All Products Link */}
                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        `mobile__link mobile__link--sub ${
                          isActive ? "mobile__link--active" : ""
                        }`
                      }
                      onClick={() => dispatch({ type: "CLOSE_ALL" })}
                    >
                      View All Products
                    </NavLink>
                  </li>

                  {/* Expansion Joints */}
                  <li>
                    <button
                      className={`mobile__link mobile__link--sub mobile__link--btn ${
                        mobileExpansionOpen ? "mobile__link--active" : ""
                      }`}
                      onClick={() => dispatch({ type: "TOGGLE_EXPANSION" })}
                    >
                      Expansion Joints
                      <FaChevronDown
                        className={`chevron ${
                          mobileExpansionOpen ? "chevron--open" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`mobile__sub-wrapper ${
                        mobileExpansionOpen ? "mobile__sub-wrapper--open" : ""
                      }`}
                    >
                      <ul className="mobile__sub mobile__sub--deep">
                        <li>
                          <NavLink
                            to="/products/expansion-joints/non-metallic"
                            className={({ isActive }) =>
                              `mobile__link mobile__link--deep ${
                                isActive ? "mobile__link--active" : ""
                              }`
                            }
                            onClick={() => dispatch({ type: "CLOSE_ALL" })}
                          >
                            Non Metallic Expansion Joints
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/expansion-joints/metallic"
                            className={({ isActive }) =>
                              `mobile__link mobile__link--deep ${
                                isActive ? "mobile__link--active" : ""
                              }`
                            }
                            onClick={() => dispatch({ type: "CLOSE_ALL" })}
                          >
                            Metallic Expansion Joints
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/expansion-joints/rubber"
                            className={({ isActive }) =>
                              `mobile__link mobile__link--deep ${
                                isActive ? "mobile__link--active" : ""
                              }`
                            }
                            onClick={() => dispatch({ type: "CLOSE_ALL" })}
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
                      className={`mobile__link mobile__link--sub mobile__link--btn ${
                        mobileMechanicalOpen ? "mobile__link--active" : ""
                      }`}
                      onClick={() => dispatch({ type: "TOGGLE_MECHANICAL" })}
                    >
                      Mechanical Power Transmission
                      <FaChevronDown
                        className={`chevron ${
                          mobileMechanicalOpen ? "chevron--open" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`mobile__sub-wrapper ${
                        mobileMechanicalOpen ? "mobile__sub-wrapper--open" : ""
                      }`}
                    >
                      <ul className="mobile__sub mobile__sub--deep">
                        <li>
                          <NavLink
                            to="/products/mechanical-power-transmission/resilient-coupling"
                            className={({ isActive }) =>
                              `mobile__link mobile__link--deep ${
                                isActive ? "mobile__link--active" : ""
                              }`
                            }
                            onClick={() => dispatch({ type: "CLOSE_ALL" })}
                          >
                            Resilient Coupling
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/mechanical-power-transmission/geared-coupling"
                            className={({ isActive }) =>
                              `mobile__link mobile__link--deep ${
                                isActive ? "mobile__link--active" : ""
                              }`
                            }
                            onClick={() => dispatch({ type: "CLOSE_ALL" })}
                          >
                            Geared Coupling
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/mechanical-power-transmission/pin-bush-tyre-coupling"
                            className={({ isActive }) =>
                              `mobile__link mobile__link--deep ${
                                isActive ? "mobile__link--active" : ""
                              }`
                            }
                            onClick={() => dispatch({ type: "CLOSE_ALL" })}
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

            <li>
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  `mobile__link ${isActive ? "mobile__link--active" : ""}`
                }
                onClick={() => dispatch({ type: "CLOSE_ALL" })}
              >
                Clients
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/quality-policy"
                className={({ isActive }) =>
                  `mobile__link ${isActive ? "mobile__link--active" : ""}`
                }
                onClick={() => dispatch({ type: "CLOSE_ALL" })}
              >
                Quality Policy
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `mobile__link ${isActive ? "mobile__link--active" : ""}`
                }
                onClick={() => dispatch({ type: "CLOSE_ALL" })}
              >
                Contact
              </NavLink>
            </li>

            {/* ── Mobile Bottom ── */}
            <li className="mobile__bottom">
              <a
                href="/assets/brochure/brochure.pdf"
                download
                className="navbar__brochure mobile__brochure"
                onClick={() => dispatch({ type: "CLOSE_ALL" })}
              >
                <FaDownload className="brochure__icon" />
                <span>Download Brochure</span>
              </a>

              <div className="mobile__social">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link social__link--facebook"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link social__link--twitter"
                  aria-label="X Twitter"
                >
                  <FaXTwitter />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
