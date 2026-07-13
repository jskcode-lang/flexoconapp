import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

// ─── Main Pages ───────────────────────────────────────────────
const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Clients = lazy(() => import("./pages/Clients/Clients"));
const QualityPolicy = lazy(() => import("./pages/QualityPolicy/QualityPolicy"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Products = lazy(() => import("./pages/Products/Products"));

// ─── Expansion Joints ─────────────────────────────────────────
const NonMetallicExpansionJoints = lazy(
  () =>
    import("./pages/Products/ExpansionJoints/NonMetallicExpansionJoints/NonMetallicExpansionJoints"),
);
const MetallicExpansionJoints = lazy(
  () =>
    import("./pages/Products/ExpansionJoints/MetallicExpansionJoints/MetallicExpansionJoints"),
);
const RubberExpansionJoints = lazy(
  () =>
    import("./pages/Products/ExpansionJoints/RubberExpansionJoints/RubberExpansionJoints"),
);

// ─── Mechanical Power Transmission ────────────────────────────
const ResilientCoupling = lazy(
  () =>
    import("./pages/Products/MechanicalPowerTransmission/ResilientCoupling/ResilientCoupling"),
);
const GearedCoupling = lazy(
  () =>
    import("./pages/Products/MechanicalPowerTransmission/GearedCoupling/GearedCoupling"),
);
const PinBushTyreCoupling = lazy(
  () =>
    import("./pages/Products/MechanicalPowerTransmission/PinBushTyreCoupling/PinBushTyreCoupling"),
);

// ─── 404 ─────────────────────────────────────────────────────
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// ─── Loader ───────────────────────────────────────────────────
const Loader = () => (
  <div className="loader__wrapper">
    <div className="loader__spinner"></div>
  </div>
);

// ─── App ─────────────────────────────────────────────────────
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Main */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/quality-policy" element={<QualityPolicy />} />
            <Route path="/contact" element={<Contact />} />

            {/* Expansion Joints */}
            <Route
              path="/products/expansion-joints/non-metallic"
              element={<NonMetallicExpansionJoints />}
            />
            <Route
              path="/products/expansion-joints/metallic"
              element={<MetallicExpansionJoints />}
            />
            <Route
              path="/products/expansion-joints/rubber"
              element={<RubberExpansionJoints />}
            />

            {/* Mechanical Power Transmission */}
            <Route
              path="/products/mechanical-power-transmission/resilient-coupling"
              element={<ResilientCoupling />}
            />
            <Route
              path="/products/mechanical-power-transmission/geared-coupling"
              element={<GearedCoupling />}
            />
            <Route
              path="/products/mechanical-power-transmission/pin-bush-tyre-coupling"
              element={<PinBushTyreCoupling />}
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
