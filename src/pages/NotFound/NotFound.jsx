import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound__wrapper">
      <motion.div
        className="notfound__card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="notfound__code"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          404
        </motion.h1>
        <h2 className="notfound__title">Page Not Found</h2>
        <p className="notfound__subtitle">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="notfound__btn">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
