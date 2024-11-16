import React from "react";

export default function Explore() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "#fff",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Debunking Aristotle
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "20px", maxWidth: "800px" }}>
        Aristotle believed that heavier objects fall faster and that projectiles
        follow straight paths. Let's explore the science of projectile motion
        and prove him wrong with this interactive simulation!
      </p>
      <div
        style={{
          border: "5px solid #fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <iframe
          src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html"
          width="800"
          height="600"
          allowFullScreen
          title="Projectile Motion Simulation"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
