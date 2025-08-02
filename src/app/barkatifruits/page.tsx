"use client";
import React, { useEffect, useRef } from "react";

const cards = [
  { title: "Imported Fruits", img: "/t4.jpg" },
  { title: "Fresh Fruits", img: "/t2.jpg" },
  { title: "Variety Fruits", img: "/t5.jpg" },
  { title: "Fast Delivery", img: "/t1.jpg" },
];

export default function FullScreenHeroVideoWithCardsAndStory() {
  // Fade-in effect for the "Our Story" section
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!storyRef.current) return;
      const rect = storyRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        storyRef.current.classList.add("story-fade-in");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
        fontFamily: "'Montserrat', Arial, sans-serif",
        margin: 0,
        padding: 0,
        position: "relative",
      }}
    >
      {/* HERO VIDEO SECTION */}
      <section
        className="hero-video-section"
        style={{
          width: "100vw",
          height: "55vh",
          minHeight: "300px",
          maxHeight: "600px",
          position: "relative",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          src="/bgv1.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "cover",
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            background: "#000",
          }}
        />
        {/* Overlay for better text contrast */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg,rgba(0,0,0,0.34) 0%,rgba(0,0,0,0.09) 60%,rgba(0,0,0,0.01) 100%)",
            zIndex: 2,
          }}
        />
        {/* Centered Title */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            width: "100vw",
            pointerEvents: "none",
            textAlign: "center",
          }}
        >
          <h1
            className="barkati-title"
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "4rem",
              textShadow: "0 2px 16px rgba(0,0,0,0.38)",
              letterSpacing: "-0.04em",
              margin: 0,
              padding: "0 1rem",
              lineHeight: 1.09,
              fontFamily: "'Montserrat', Arial, sans-serif",
            }}
          >
            Barkati Fruits
          </h1>
        </div>
      </section>

      {/* Cards Section */}
      <section
        className="cards-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          marginTop: "-80px", // overlap
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "nowrap",
          position: "relative",
          zIndex: 10,
          padding: "2.5rem 1.5rem 0 1.5rem",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="card"
            style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 2px 12px rgba(34,34,59,0.10)",
              width: "270px",
              minWidth: "270px",
              maxWidth: "270px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "1.2rem",
              overflow: "hidden",
              transition: "box-shadow 0.2s",
            }}
          >
            <img
              src={card.img}
              alt={card.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                background: "#eee",
              }}
            />
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.09rem",
                color: "#222",
                padding: "1rem 0",
                textAlign: "center",
                width: "100%",
              }}
            >
              {card.title}
            </div>
          </div>
        ))}
      </section>

      {/* Our Story + CTA Section - Horizontally aligned */}
      <section
        className="story-cta-row"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "2.5rem",
          maxWidth: 1200,
          margin: "3rem auto 0 auto",
          padding: "0 1rem",
          flexWrap: "wrap",
        }}
      >
        {/* Our Story Section */}
        <div
          ref={storyRef}
          className="story-section"
          style={{
            flex: 1,
            minWidth: 280,
            maxWidth: 700,
            textAlign: "center",
            opacity: 0,
            transform: "translateY(32px)",
            transition:
              "opacity 0.8s cubic-bezier(.77,.2,.23,1), transform 0.8s cubic-bezier(.77,.2,.23,1)",
            background: "#111",
            borderRadius: "16px",
            padding: "2.2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              color: "#fff",
              fontFamily: "'Montserrat', Arial, sans-serif",
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              fontSize: "1.17rem",
              color: "#fff",
              fontWeight: 500,
              lineHeight: 1.7,
              margin: 0,
              fontFamily: "'Montserrat', Arial, sans-serif",
            }}
          >
            Barkati Fruits began with a simple vision: to deliver the freshest produce with a commitment to quality and tradition. Today, we continue our journey by sharing a passion for exceptional fruits, bringing health and happiness to every home.
          </p>
        </div>

        {/* CTA Section */}
        <div
          className="cta-section"
          style={{
            flex: 1,
            minWidth: 240,
            maxWidth: 480,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#25D366",
            borderRadius: "14px",
            padding: "2rem 1.5rem",
            boxShadow: "0 2px 12px rgba(34,34,59,0.10)",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.7rem",
              marginBottom: "0.7rem",
              textAlign: "center",
            }}
          >
            Ready to experience the best fruits?
          </h3>
          <p
            style={{
              color: "#fff",
              fontSize: "1.1rem",
              marginBottom: "1.2rem",
              textAlign: "center",
            }}
          >
            Contact us now to place your order or learn more about our premium selection!
          </p>
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#fff",
              color: "#25D366",
              fontWeight: 700,
              fontSize: "1.1rem",
              borderRadius: "999px",
              padding: "0.85rem 2.2rem",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(34,34,59,0.10)",
              transition: "background 0.2s, color 0.2s",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* Personal Sessions Section */}
      <section
        className="personal-sessions-section"
        style={{
          margin: "3rem auto 0 auto",
          maxWidth: 1200,
          padding: "0 1rem",
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
          background: "#f5eee6",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(34,34,59,0.10)",
          flexWrap: "wrap",
        }}
      >
        {/* Image Area */}
        <div
          style={{
            flex: 1,
            minWidth: 260,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {/* <img
            src="/personal-session.jpg"
            alt="Personal Sessions"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              marginBottom: "1.5rem",
            }}
          /> */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(34,34,59,0.08)",
              padding: "1.3rem 2.5rem",
              marginTop: "-2.5rem",
              position: "relative",
              zIndex: 2,
              width: "fit-content",
              minWidth: "260px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: "1.7rem", color: "#222" }}>98%</div>
              <div style={{ fontSize: "0.97rem", color: "#555" }}>Time to time<br />schedule</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: "1.7rem", color: "#222" }}>750</div>
              <div style={{ fontSize: "0.97rem", color: "#555" }}>24/7 Online<br />Support</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: "1.7rem", color: "#222" }}>20+</div>
              <div style={{ fontSize: "0.97rem", color: "#555" }}>Man to<br />Optimize</div>
            </div>
          </div>
        </div>
        {/* Content Area */}
        <div
          style={{
            flex: 1,
            minWidth: 260,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <br />
          {/* <div style={{ fontWeight: 600, color: "#222", fontSize: "1.08rem", marginBottom: "0.5rem" }}>Personal Sessions</div> */}
          <div style={{
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "1.2rem",
            color: "#222",
            lineHeight: 1.1,
          }}>
            Transform Your Life &<br />Live Your Dream
          </div>
          <div style={{
            fontSize: "1.07rem",
            color: "#444",
            fontWeight: 500,
            lineHeight: 1.7,
            marginBottom: "1.3rem"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </div>
          <button
            style={{
              background: "#FF6A30",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.1rem",
              borderRadius: "8px",
              padding: "0.85rem 2.2rem",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(34,34,59,0.10)",
              transition: "background 0.2s, color 0.2s",
              border: "none",
              outline: "none",
              cursor: "pointer"
            }}
          >
            +91 98765432114
          </button>
          <br />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          textAlign: "center",
          padding: "1.4rem 0 1.2rem 0",
          background: "transparent",
          fontSize: "1.05rem",
          color: "#222",
          fontWeight: 500,
          letterSpacing: "0.01em",
          position: "relative",
          bottom: 0,
        }}
      >
        <span
          style={{
            background: "#fff",
            borderRadius: "999px",
            padding: "0.4em 1.3em",
            boxShadow: "0 2px 8px rgba(34,34,59,0.07)",
            fontWeight: 600,
            fontSize: "0.97rem",
            color: "#222",
          }}
        >
          designed by <span style={{ color: "#25D366" }}>fusionex.labs</span>
        </span>
      </footer>

      {/* Responsive & Animation Styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-video-section {
            height: 40vh !important;
            min-height: 200px !important;
            max-height: 350px !important;
          }
          .cards-container {
            gap: 1rem !important;
            padding: 1.2rem 0.7rem 0 0.7rem !important;
          }
          .card {
            width: 40vw !important;
            min-width: 180px !important;
            max-width: 98vw !important;
          }
          .card img {
            height: 120px !important;
          }
          .story-cta-row {
            flex-direction: column !important;
            gap: 1.5rem !important;
            padding: 0.7rem 0.2rem 0 0.2rem !important;
          }
          .story-section, .cta-section {
            max-width: 98vw !important;
            width: 98vw !important;
            margin: 0 auto !important;
          }
          .personal-sessions-section {
            flex-direction: column !important;
            gap: 1.5rem !important;
            padding: 0.7rem 0.2rem !important;
          }
          .personal-sessions-section img {
            max-width: 96vw !important;
          }
          .personal-sessions-section > div {
            padding: 0 !important;
          }
        }
        @media (max-width: 600px) {
          .hero-video-section {
            height: 27vh !important;
            min-height: 120px !important;
            max-height: 175px !important;
          }
          .barkati-title {
            font-size: 2rem !important;
          }
          .cards-container {
            flex-direction: column !important;
            gap: 1.2rem !important;
            align-items: center !important;
            padding: 0.7rem 0.2rem 0 0.2rem !important;
            margin-top: -38px !important;
          }
          .card {
            width: 94vw !important;
            min-width: 94vw !important;
            max-width: 94vw !important;
          }
          .card img {
            height: 180px !important;
            width: 100% !important;
          }
          .story-cta-row {
            flex-direction: column !important;
            gap: 1.2rem !important;
            padding: 0.4rem 0.1rem 0 0.1rem !important;
            margin-top: 2rem !important;
          }
          .story-section {
            padding: 1.2rem 0.7rem !important;
          }
          .story-section h2 {
            font-size: 1.35rem !important;
          }
          .story-section p {
            font-size: 0.99rem !important;
          }
          .cta-section {
            padding: 1.2rem 0.7rem !important;
          }
          .cta-section h3 {
            font-size: 1.2rem !important;
          }
          .cta-section p, .cta-section a {
            font-size: 0.99rem !important;
          }
          .personal-sessions-section {
            flex-direction: column !important;
            gap: 1.2rem !important;
            padding: 0.4rem 0.1rem !important;
            margin-top: 2rem !important;
          }
          .personal-sessions-section img {
            max-width: 98vw !important;
          }
          footer {
            font-size: 0.89rem !important;
            padding: 1.2rem 0 1.1rem 0 !important;
          }
        }
        .story-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
} 