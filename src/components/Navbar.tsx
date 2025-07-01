"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Style for nav links
const navLinkStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#000",
  textDecoration: "none",
  fontWeight: 500,
  position: "relative",
  padding: "0.25rem 0.5rem",
  transition: "color 0.2s",
};

export default function Navbar() {
  // Internal scroll state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll(); // Initialize
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Nav links: black after scroll, white at top (any width)
  const navLinkColor = scrolled ? "#000" : "#fff";
  const computedNavLinkStyle = { ...navLinkStyle, color: navLinkColor };

  // Navbar bg: white after scroll, transparent at top (all widths)
  const navbarBg = scrolled ? "rgb(255, 255, 255)" : "rgba(255,255,255,0)";

  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "1rem 2rem",
        borderBottom: "none",
        background: navbarBg,
        boxShadow: scrolled ? "0 2px 16px rgba(34,34,59,0.10)" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        minHeight: 70,
        transition:
          "background 0.4s cubic-bezier(0.45,0,0.55,1), box-shadow 0.4s cubic-bezier(0.45,0,0.55,1)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          flexWrap: "wrap",
          marginLeft: "auto",
        }}
      >
        <a href="#services" style={computedNavLinkStyle}>Services</a>
        <Link href="#about" style={computedNavLinkStyle}>About Us</Link>
        <a href="#contact" style={computedNavLinkStyle}>Contact</a>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          nav {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
          }
          div {
            gap: 1rem !important;
            margin-top: 0.5rem;
            margin-left: 0 !important;
          }
        }
      `}</style>
    </nav>
  );
}