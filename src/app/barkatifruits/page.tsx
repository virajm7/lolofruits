"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const cards = [
  { title: "Imported Fruits", img: "/t4.jpg" },
  { title: "Experienced Agents", img: "/t2.jpg" },
  { title: "Cold Storages", img: "/t5.jpg" },
  { title: "Transport Service", img: "/t1.jpg" },
];

const fruitList = [
  { name: "Apple", img: "/fruits/apple.jpg" },
  { name: "Apricot", img: "/fruits/apricot.jpg" },
  { name: "Cherry", img: "/fruits/cherry.jpg" },
  { name: "Dragon Fruit", img: "/fruits/dragonfruit.jpg" },
  { name: "Grapes", img: "/fruits/grapes.jpg" },
  { name: "Kiwi", img: "/fruits/kiwi.jpg" },
  { name: "Longan", img: "/fruits/longan.jpg" },
  { name: "Mandarin", img: "/fruits/mandarin.jpg" },
  { name: "Orange", img: "/fruits/orange.jpg" },
  { name: "Pears", img: "/fruits/pears.jpg" },
  { name: "Plum", img: "/fruits/plum.jpg" },
  { name: "Sweet Tamarind", img: "/fruits/sweettamarind.jpg" },
  { name: "exotic fruits", img: "/fruits/exoticfruits.jpg" },
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
            <Image
              src={card.img}
              alt={card.title}
              width={400}
              height={220}
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

      {/* Fruits Carousel */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          // margin: "3rem 0 2.5rem 0",
          background: "transparent",
          position: "relative",
        }}
      >
        {/* Carousel Title */}
        <h2
          style={{
            textAlign: "center",
            color: "#184d32",
            fontWeight: 800,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}>
            Imported Fruits
          </h2>
        
        <div className="fruit-carousel-track">
          {[...fruitList, ...fruitList].map((fruit, idx) => (
            <div className="fruit-carousel-card" key={idx}>
              <div className="fruit-img-circle">
                <Image
                  src={fruit.img}
                  alt={fruit.name}
                  width={110}
                  height={110}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #fff",
                    boxShadow: "0 2px 8px rgba(34,34,59,0.10)",
                    background: "#eee",
                    aspectRatio: "1 / 1", // Ensures perfect circle
                  }}
                  priority={idx < fruitList.length}
                />
              </div>
              <div className="fruit-name">{fruit.name}</div>
            </div>
          ))}
        </div>
        <style>{`
        html, body {
          max-width: 100vw;
          overflow-x: hidden;
        }
          .fruit-carousel-track {
            display: flex;
            align-items: center;
            gap: 2.2rem;
            width: max-content;
            animation: fruit-scroll 32s linear infinite;
            will-change: transform;
          }
            /* Hide horizontal scrollbar for carousel container */
        .fruit-carousel-track::-webkit-scrollbar {
          display: none;
        }
          .fruit-carousel-track {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
          .fruit-carousel-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 130px;
          }
          .fruit-img-circle {
            width: 116px;
            height: 116px;
            border-radius: 50%;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0.6rem;
            box-shadow: 0 2px 8px rgba(34,34,59,0.10);
            padding: 0;
            overflow: hidden; /* Ensures image stays circular */
          }
          .fruit-img-circle img,
          .fruit-img-circle span > img {
            border-radius: 50% !important;
            object-fit: cover !important;
            width: 100% !important;
            height: 100% !important;
            aspect-ratio: 1 / 1 !important;
            background: #eee;
            display: block;
          }
          .fruit-name {
            font-size: 1.15rem;
            color: #184d32;
            font-weight: 600;
            text-align: center;
            letter-spacing: 0.01em;
            margin-top: 0.1rem;
            white-space: nowrap;
          }
          @keyframes fruit-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 600px) {
            .fruit-carousel-track {
              gap: 1.1rem;
              animation-duration: 18s;
            }
            .fruit-img-circle {
              width: 74px;
              height: 74px;
            }
            .fruit-carousel-card {
              min-width: 82px;
            }
            .fruit-name {
              font-size: 0.99rem;
            }
            .fruit-img-circle img,
            .fruit-img-circle span > img {
              width: 70px !important;
              height: 70px !important;
            }
          }
        `}</style>
      </div>

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
        {/* Our Story Card */}
        <div
          className="story-section"
          style={{
            flex: 1,
            minWidth: 240,
            maxWidth: 480,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#a9466a",
            borderRadius: "14px",
            padding: "2rem 1.5rem",
            boxShadow: "0 2px 12px rgba(34,34,59,0.10)",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1.7rem",
              marginBottom: "0.7rem",
              color: "#fff",
            }}
          >
            Our Story
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "0",
              color: "#fff",
            }}
          >
            Barkati Fruits began with a simple vision: to deliver the freshest produce with a commitment to quality and tradition. Today, we continue our journey by sharing a passion for exceptional fruits, bringing health and happiness to every home.
          </p>
        </div>
        {/* CTA Section and whatsapp */}
        <div
          className="cta-section"
          style={{
            flex: 1,
            minWidth: 240,
            maxWidth: 540,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#893f3f",
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
            Still have Questions ?
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

          {/* Whatsapp icon */}
          <a
            href="https://wa.me/+918591456683" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#fff",
              color: "#893f3f",
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
            Enquire More
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
          background: "#c6bd85",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(34,34,59,0.10)",
          flexWrap: "wrap",
        }}
      >
        {/* Stats Area */}
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
              <div style={{ fontWeight: 700, fontSize: "1.7rem", color: "#222" }}>4+</div>
              <div style={{ fontSize: "0.97rem", color: "#555" }}>Years of<br />Experience</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: "1.7rem", color: "#222" }}>15+</div>
              <div style={{ fontSize: "0.97rem", color: "#555" }}>Countries<br />Imported From</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: "1.7rem", color: "#222" }}>India</div>
              <div style={{ fontSize: "0.97rem", color: "#555" }}>Serving<br />Pan India</div>
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
          <div style={{
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "1.2rem",
            color: "#222",
            lineHeight: 1.1,
          }}>
            Years of Experience &<br />Global Fruit Import
          </div>
          <div style={{
            fontSize: "1.07rem",
            color: "#444",
            fontWeight: 500,
            lineHeight: 1.7,
            marginBottom: "1.3rem"
          }}>
            With over 4+ years in the fruit market, we import premium fruits from more than 15 countries, delivering freshness and quality across India.
          </div>
          <button
            style={{
              background: "#504935",
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
            disabled
          >
            +91 98765432114
          </button>
          <br />
        </div>
      </section>

      {/* Fruitful Day Title */}
      <div
        style={{
          textAlign: "center",
          color: "#c6bd85",
          fontSize: "2rem",
          fontWeight: 700,
          margin: "2.5rem 0 0.5rem 0",
          fontFamily: "'Montserrat', Arial, sans-serif",
          letterSpacing: "0.01em",
        }}
      >
        Wishing you a FruitFul Day!
      </div>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          background: "#1a1a1a",
          color: "#fff",
          padding: "2.8rem 1rem 1rem 1rem",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 520,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.7rem"
          }}
        >
          {/* Icons Row */}
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "0.4rem" }}>
            {/* Play Store */}
            <a
              href="https://play.google.com/store" // Replace with your actual Play Store app link!
              target="_blank"
              rel="noopener noreferrer"
              title="Get the App on Google Play"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
                <path d="M71 27c-10.5 0-18.7 7.6-18.7 18.8v419.2c0 11.2 8.2 18.8 18.7 18.8 3.7 0 7.6-1.2 11.2-3.6l237.6-132.8-54.1-54.1-175.9-266.3C75.1 27.7 73.1 27 71 27zm32.6 18.7L371.1 259.5 103.6 466.3c-2.3 1.6-4.4 2.3-6.6 2.3-5.4 0-9.1-4.1-9.1-10.2V43.9c0-6.2 3.7-10.2 9.1-10.2 2.2 0 4.3 0.7 6.6 2.3zm261.2 214.6l-47.8 26.7 53.6 53.7 87.7 48.8c6.3 3.5 10.8 0.8 10.8-6.2V202c0-7-4.5-9.7-10.8-6.2l-93.5 50.5zm-33.2 61.5l-50.1 28-182.6 101.9c-2.2 1.2-4.2 1.8-6.1 1.8-5.3 0-8.6-4.1-8.6-10.2V441c0 6.1 3.3 10.2 8.6 10.2 1.9 0 3.9-0.6 6.1-1.8l232.8-129.8z" fill="#bbb"/>
              </svg>
            </a>
            {/* Mail */}
            <a
              href="mailto:lolobybarkati@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Us"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 8.5l8-6.5V6l-8 6.5L4 6v.5l8 6.5z" fill="#bbb"/>
              </svg>
            </a>
          </div>

          {/* Legal links */}
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.2rem" }}>
            <a
              href="/privacy-policy"
              style={{
                color: "#bbb",
                fontSize: "0.96rem",
                textDecoration: "underline",
                transition: "color 0.18s",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={{
                color: "#bbb",
                fontSize: "0.96rem",
                textDecoration: "underline",
                transition: "color 0.18s",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Copyright */}
          <p
            style={{
              textAlign: "center",
              color: "#bbb",
              marginTop: "0.5rem",
              fontSize: "0.96rem"
            }}
          >
            &copy; {new Date().getFullYear()} LOLO. All rights reserved.
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#bbb",
              marginTop: "0.5rem",
              fontSize: "0.96rem"
            }}
          
          >Designed By Fusionex</p>
        </div>
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
            fontSize: 1.35rem !important;
          }
          .story-section p {
            fontSize: 0.99rem !important;
          }
          .cta-section {
            padding: 1.2rem 0.7rem !important;
          }
          .cta-section h3 {
            fontSize: 1.2rem !important;
          }
          .cta-section p, .cta-section a {
            fontSize: 0.99rem !important;
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
            fontSize: 0.89rem !important;
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