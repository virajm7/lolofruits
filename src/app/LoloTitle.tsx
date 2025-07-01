"use client";
import React from "react";

export default function LoloTitle({ scrolled }: { scrolled: boolean }) {
  return (
    <h1
      style={{
        position: "fixed",
        left: "50%",
        transform: scrolled
          ? "translate(-50%, 0) scale(0.72)"
          : "translate(-50%, 60px) scale(1.13)",
        top: scrolled ? 12 : "15vh",
        zIndex: 30,
        fontFamily: `"Times New Roman", Times, serif`,
        fontWeight: 700,
        fontSize: scrolled
          ? "clamp(1.5rem, 4vw, 2.6rem)"
          : "clamp(2.4rem, 8vw, 5rem)",
        letterSpacing: "0.07em",
        color: "#fff",
        lineHeight: 1.1,
        textShadow:
          "0 2px 16px rgba(34,34,59,0.10), 0 4px 48px rgba(34,34,59,0.12)",
        margin: 0,
        padding: 0,
        pointerEvents: "none",
        transition:
          "top 0.5s cubic-bezier(0.45,0,0.55,1), transform 0.5s cubic-bezier(0.45,0,0.55,1), font-size 0.5s cubic-bezier(0.45,0,0.55,1), color 0.5s cubic-bezier(0.45,0,0.55,1)",
      }}
    >
      LOLO
    </h1>
  );
}