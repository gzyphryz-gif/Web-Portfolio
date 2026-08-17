import { motion } from "framer-motion";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div
      className="landing"
      onClick={onStart}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <motion.h1
        layout
        style={{
          fontSize: "6rem",
          fontWeight: 800,
        }}
      >
        AYZ▶
      </motion.h1>
    </div>
  );
}