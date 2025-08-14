"use client";
import { useRef, useState, useEffect, } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

const services = [
  { video: "/services1.mp4", title: "Fresh Fruits" },
  { video: "/services2.mp4", title: "Tansportation" },
  { video: "/services3.mp4", title: "Expert Agents" },
  { video: "/services4.mp4", title: "Cold Storages" }
];




// Desktop Navbar (shows on width > 600px)
function DesktopNavbar({ scrolled }: { scrolled: boolean }) {
  const navLinkColor = scrolled ? "#000" : "#fff";

  return (
    <nav
      className="desktop-navbar"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "1rem 2rem",
        borderBottom: "none",
        background: scrolled
          ? "rgb(255, 255, 255)"
          : "rgba(255,255,255,0)",
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
        <a href="#services" style={{
          fontSize: "1rem",
          color: navLinkColor,
          textDecoration: "none",
          fontWeight: 500,
          position: "relative",
          padding: "0.25rem 0.5rem",
          transition: "color 0.2s"
        }}>Services</a>
        <a href="#about" style={{
          fontSize: "1rem",
          color: navLinkColor,
          textDecoration: "none",
          fontWeight: 500,
          position: "relative",
          padding: "0.25rem 0.5rem",
          transition: "color 0.2s"
        }}>About Us</a>
        <a href="#contact" style={{
          fontSize: "1rem",
          color: navLinkColor,
          textDecoration: "none",
          fontWeight: 500,
          position: "relative",
          padding: "0.25rem 0.5rem",
          transition: "color 0.2s"
        }}>Contact Us</a>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          nav.desktop-navbar {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

// Mobile Navbar (shows on width <= 600px)
function MobileNavbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  const navLinkColor = scrolled ? "#000" : "#fff";

  return (
    <>
      <nav
        className="main-navbar"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0.7rem 1.1rem",
          borderBottom: "none",
          background: scrolled
            ? "rgb(255,255,255)"
            : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 2px 16px rgba(34,34,59,0.10)" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 20,
          minHeight: 56,
          transition:
            "background 0.4s cubic-bezier(0.45,0,0.55,1), box-shadow 0.4s cubic-bezier(0.45,0,0.55,1)",
        }}
      >
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            margin: 0,
            zIndex: 25
          }}
        >
          {/* Hamburger icon */}
          <span
            style={{
              width: 28,
              height: 28,
              display: "inline-block",
              position: "relative"
            }}
          >
            <span
              style={{
                display: "block",
                height: 3,
                width: 28,
                background: navLinkColor,
                borderRadius: 2,
                position: "absolute",
                top: 6,
                left: 0,
                transition: "all 0.3s",
                transform: open ? "rotate(45deg) translate(6px,6px)" : "none"
              }}
            />
            <span
              style={{
                display: "block",
                height: 3,
                width: 28,
                background: navLinkColor,
                borderRadius: 2,
                position: "absolute",
                top: 14,
                left: 0,
                transition: "all 0.3s",
                opacity: open ? 0 : 1
              }}
            />
            <span
              style={{
                display: "block",
                height: 3,
                width: 28,
                background: navLinkColor,
                borderRadius: 2,
                position: "absolute",
                top: 22,
                left: 0,
                transition: "all 0.3s",
                transform: open ? "rotate(-45deg) translate(6px,-6px)" : "none"
              }}
            />
          </span>
        </button>
        {open && (
          <div
            className="mobile-menu"
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              background: scrolled ? "rgb(255,255,255)" : "rgba(34,34,59,0.96)",
              boxShadow: "0 8px 24px rgba(34,34,59,0.10)",
              borderRadius: "0 0 8px 8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              minWidth: 160,
              padding: "0.4rem 0.8rem 0.6rem 1.7rem",
              zIndex: 22
            }}
          >
            <a
              href="#services"
              style={{
                fontSize: "1.05rem",
                color: navLinkColor,
                textDecoration: "none",
                fontWeight: 500,
                padding: "0.32rem 0",
                margin: 0,
                display: "block",
                transition: "color 0.2s"
              }}
              onClick={() => setOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              style={{
                fontSize: "1.05rem",
                color: navLinkColor,
                textDecoration: "none",
                fontWeight: 500,
                padding: "0.32rem 0",
                margin: 0,
                display: "block",
                transition: "color 0.2s"
              }}
              onClick={() => setOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              style={{
                fontSize: "1.05rem",
                color: navLinkColor,
                textDecoration: "none",
                fontWeight: 500,
                padding: "0.32rem 0",
                margin: 0,
                display: "block",
                transition: "color 0.2s"
              }}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
        <style jsx>{`
          @media (min-width: 601px) {
            nav.main-navbar {
              display: none !important;
            }
          }
        `}</style>
      </nav>
    </>
  );
}

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && document?.documentElement) {
      document.documentElement.style.scrollBehavior = "smooth";
      const onScroll = () => setScrolled(window.scrollY > 30);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => {
        document.documentElement.style.scrollBehavior = "";
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <>
      {/* Animated LOLO Title */}
      <h1
        className="lolo-title"
        style={{
          position: "fixed",
          left: "50%",
          transform: scrolled
            ? "translate(-50%, 0) scale(0.74)"
            : "translate(-50%, 60px) scale(1.13)",
          top: scrolled ? 14 : "15vh",
          zIndex: 30,
          fontFamily: `"Times New Roman", Times, serif`,
          fontWeight: 700,
          fontSize: scrolled
            ? "clamp(1.5rem, 4vw, 2.6rem)"
            : "clamp(2.4rem, 8vw, 5rem)",
          letterSpacing: "0.07em",
          color: scrolled ? "#000" : "#fff",
          lineHeight: 1.1,
          textShadow: scrolled
            ? "0 2px 16px rgba(34,34,59,0.05), 0 4px 48px rgba(34,34,59,0.05)"
            : "0 2px 16px rgba(34,34,59,0.10), 0 4px 48px rgba(34,34,59,0.12)",
          margin: 0,
          padding: 0,
          pointerEvents: "none",
          transition:
            "color 0.5s cubic-bezier(0.45,0,0.55,1), top 0.5s cubic-bezier(0.45,0,0.55,1), transform 0.5s cubic-bezier(0.45,0,0.55,1), font-size 0.5s cubic-bezier(0.45,0,0.55,1), text-shadow 0.5s cubic-bezier(0.45,0,0.55,1)",
        }}
      >
        LOLO
      </h1>
      {isMobile ? (
        <MobileNavbar scrolled={scrolled} />
      ) : (
        <DesktopNavbar scrolled={scrolled} />
      )}
      <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              left: 0,
              top: 0,
              zIndex: -1,
            }}
          >
            <source src="/applebg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{
            position: "relative",
            zIndex: 1,
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "0 1rem"
          }}>
            <p style={{marginTop:'3rem',marginBottom:'1.5rem', fontSize: "1.25rem", maxWidth: 600 }}>
              <br /> 
              Cutting-edge curriculum designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
            </p>
            <button style={{
              padding: "0.75rem 2rem",
              background: "white",
              color: "#22223b",
              borderRadius: "9999px",
              fontWeight: "bold",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer"
            }}>
              App Coming Soon
            </button>

            {/* Barkati Fruits page button  */}
            
            <button
              style={{
                marginTop: "1rem",
                padding: "0.75rem 2rem",
                background: "transparent",
                color: "#ffffff",
                borderRadius: "9999px",
                fontWeight: "bold",
                border: "2px solid #ffffff",
                fontSize: "1rem",
                cursor: "pointer"
              }}
              onClick={()=> router.push('/barkatifruits')}
              >
              Barkati Fruits
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          style={{
            scrollMarginTop: "96px",
            padding: "3rem 0 3rem 0",
            background: "#f9fafc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#22223b",
            margin: "0 0 1.3rem 0",
            textAlign: "center"
          }}>
            Our Services
          </h2>
          <p style={{
            color: "#22223b",
            fontSize: "1.13rem",
            textAlign: "center",
            maxWidth: 600,  
            marginBottom: "2rem"
          }}>
            Discover our range of premium fruit services tailored for every need—delivered fresh, beautifully presented, and perfect for any occasion.
          </p>
          <div
            ref={scrollRef}
            className="services-scroll"
          >
            {services.map((service, idx) => (
              <div
                className="service-card"
                tabIndex={0}
                key={service.title}
                style={{
                  flex: "0 0 340px",
                  height: "360px",
                  borderRadius: "0px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.13)",
                  cursor: "pointer",
                  transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                  scrollSnapAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#fff",
                  marginLeft: idx === 0 ? "2vw" : undefined,
                  marginRight: idx === services.length - 1 ? "2vw" : undefined,
                }}
              >
                {/* Background video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    zIndex: 1
                  }}
                  src={service.video}
                />
                {/* Service title below card, scrolls with card */}
                <div className="service-title"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "rgba(255,255,255,0.96)",
                    fontSize: "1.1rem",
                    color: "#111",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    textAlign: "center",
                    textShadow: "none",
                    padding: "0.7rem 0.2rem 0.5rem 0.2rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                    zIndex: 2,
                    margin: 0,
                  }}
                >
                  {service.title}
                </div>
              </div>
            ))}
          </div>
          <style jsx>{`
            .services-scroll {
              display: flex;
              gap: 1.5rem;
              overflow-x: auto;
              padding: 1rem 0;
              scroll-snap-type: x mandatory;
              justify-content: center;
              width: 100%;
              box-sizing: border-box;
              scrollbar-width: none;
              -ms-overflow-style: none;
              scroll-behavior: smooth;
            }
            .services-scroll::-webkit-scrollbar {
              display: none;
            }
            .service-card:focus-visible {
              outline: 2px solid #184d32;
            }
            @media (max-width: 700px) {
              .services-scroll {
                flex-direction: column;
                gap: 1.5rem;
                overflow-x: unset;
                overflow-y: visible;
                align-items: center;
                padding: 0;
              }
              .service-card {
                flex: 1 1 100%;
                width: 94vw !important;
                max-width: 98vw !important;
                min-width: 0 !important;
                height: 180px !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
              .service-title {
                border-radius: 0 !important;
                font-size: 1rem !important;
              }
            }
            @media (max-width: 480px) {
              .service-card {
                height: 120px !important;
              }
              .service-title {
                font-size: 0.92rem !important;
              }
            }
            @media (max-width: 1100px) {
              .service-card {
                flex: 0 0 44vw !important;
                height: 210px !important;
                min-width: 160px !important;
                max-width: 95vw !important;
              }
              .service-title {
                font-size: 0.95rem !important;
                max-width: 95vw !important;
                border-radius: 0 0 6px 6px;
              }
            }
          `}</style>
        </section>

        {/* About Us Section */}
<section
  id="about"
  style={{
    position: "relative",
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    overflow: "hidden",
  }}
>
  {/* Background (updated image) */}
  <Image
    src="/about.jpg" // <-- put your new image at /public/about.jpg
    alt="LOLO wholesale fruit marketplace"
    width={1920}
    height={1080}
    priority
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
      filter: "brightness(0.85) saturate(1.1) blur(0.5px)",
    }}
  />

  {/* Dark gradient overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.55) 10%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 100%)",
      zIndex: 1,
    }}
  />

  {/* Decorative glows */}
  <div
    style={{
      position: "absolute",
      top: "-120px",
      right: "-120px",
      width: "300px",
      height: "300px",
      background: "radial-gradient(closest-side, rgba(255,165,0,0.35), transparent 70%)",
      filter: "blur(8px)",
      zIndex: 1,
      pointerEvents: "none",
    }}
  />
  <div
    style={{
      position: "absolute",
      bottom: "-140px",
      left: "-140px",
      width: "340px",
      height: "340px",
      background: "radial-gradient(closest-side, rgba(144,238,144,0.35), transparent 70%)",
      filter: "blur(10px)",
      zIndex: 1,
      pointerEvents: "none",
    }}
  />

  {/* Content card */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: 980,
      width: "100%",
      margin: "0 auto",
      padding: "2rem 1.25rem",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.06))",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: 20,
        padding: "2rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
      }}
    >
      {/* Label chip */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 10px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.18)",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 0.2,
        }}
      >
        🌍 Imported • 🧊 Cold-Chain • 🚚 Logistics
      </div>

      <h2
        style={{
          fontSize: "2.25rem",
          lineHeight: 1.15,
          fontWeight: 800,
          marginTop: "1rem",
          marginBottom: "0.75rem",
          textShadow: "0 2px 16px rgba(0,0,0,0.35)",
        }}
      >
        LOLO — Wholesale Fruit Marketplace App
      </h2>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.8,
          opacity: 0.95,
          marginBottom: "1.25rem",
          maxWidth: 820,
        }}
      >
        LOLO lists <strong>imported fruits from across the world</strong> for wholesale buyers. 
        Browse live listings in the app, compare varieties and grades, and connect directly with suppliers. 
        Beyond sourcing, LOLO helps you complete the supply chain with <strong>transportation</strong>, 
        <strong> cold storages</strong>, and on-ground <strong>market agents</strong> who bring real trading experience.
        Everything you need to move fresh produce—organized in one place.
      </p>

      {/* Feature grid (updated for wholesale focus) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "10px",
          marginTop: "1rem",
        }}
      >
        {[
          ["🌐 Global imports", "Sourced across seasons & origins"],
          ["📱 App-first listings", "Grades, pack types, live availability"],
          ["🚛 Transportation", "End-to-end freight & last-mile"],
          ["🧊 Cold storages", "Chilled handling & holding"],
          ["🤝 Market agents", "Experienced execution & negotiation"],
          ["📦 Wholesale focus", "Bulk orders, RFQs, better pricing"],
        ].map(([title, sub]) => (
          <div
            key={title}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              padding: "12px 14px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 14,
            }}
          >
            <div style={{ fontSize: 20, lineHeight: 1 }}>{title.split(" ")[0]}</div>
            <div>
              <div style={{ fontWeight: 700 }}>{title.replace(/^[^\s]+ /, "")}</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats + CTAs (unchanged) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 16,
          marginTop: 24,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
            gap: 12,
          }}
        >
          {[
            ["4+", "Years of trust"],
            ["50+", " Clients across India"],
            ["100+", "Products listed"],
            ["10+", "Cold storages"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{
                textAlign: "center",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 14,
                padding: "14px 10px",
              }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{num}</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
          
          <a
            href="https://wa.me/+918591456683"
            style={{
              background: "#00cc1bff",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Fine print */}
      <div style={{ marginTop: 10, fontSize: 11, opacity: 0.7 }}>
        *Services vary by Route, Company and inventory. Contact us for current availability.
      </div>
    </div>
  </div>
</section>



        {/* Contact Section */}
<section
  id="contact"
  style={{
    position: "relative",
    minHeight: "70vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#184d32",
    background: "linear-gradient(135deg, #f6fff9 0%, #ffffff 100%)",
    overflow: "hidden",
  }}
>
  {/* Decorative shapes */}
  <div
    style={{
      position: "absolute",
      top: "-50px",
      left: "-50px",
      width: "300px",
      height: "300px",
      background: "radial-gradient(circle at center, rgba(80,200,120,0.2), transparent 70%)",
      filter: "blur(30px)",
      zIndex: 1,
      pointerEvents: "none",
    }}
  />
  <div
    style={{
      position: "absolute",
      bottom: "-60px",
      right: "-60px",
      width: "320px",
      height: "320px",
      background: "radial-gradient(circle at center, rgba(255,200,80,0.2), transparent 70%)",
      filter: "blur(35px)",
      zIndex: 1,
      pointerEvents: "none",
    }}
  />

  {/* Contact container */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: 900,
      width: "100%",
      margin: "auto",
      padding: "3.5rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
    }}
  >
    {/* Section heading */}
    <div style={{ textAlign: "center", maxWidth: 700 }}>
      <h2 style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: "0.5rem", color: "#184d32" }}>
        Get in Touch
      </h2>
      <p style={{ fontSize: "1rem", color: "#2d6a4f", lineHeight: 1.6 }}>
        Have a question about wholesale fruit sourcing, transportation, cold storage, or our app?<br />
        Our team is here to help you every step of the way.
      </p>
    </div>

    {/* Contact form card */}
    <div
  style={{
    position: "relative",
    width: "100%",
    borderRadius: 22,
    // gradient border via padding + inner card
    background:
      "linear-gradient(135deg, #b7f7cc 0%, #facc15 60%, #f59e0b 100%)",
    padding: 1,
    boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
  }}
>
  <div
    style={{
      background: "#fff",
      borderRadius: 21,
      padding: "1.25rem",
      // subtle dotted pattern so it’s not just flat white
      backgroundImage:
        "radial-gradient(rgba(24,77,50,0.06) 1px, transparent 1.25px)",
      backgroundSize: "20px 20px",
      border: "1px solid rgba(0,0,0,0.06)",
    }}
  >
    {/* Small header row (optional, keeps things lively) */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        marginBottom: "0.75rem",
      }}
    >
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 10px",
            borderRadius: 999,
            background: "rgba(24,77,50,0.06)",
            border: "1px solid rgba(24,77,50,0.18)",
            color: "#184d32",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.02em",
          }}
        >
          🌍 Wholesale inquiries welcome
        </div>
       
      </div>

      {/* Quick contact chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {[
          ["📞", "Call", "tel:+918591456683"],
          ["💬", "WhatsApp", "https://wa.me/+918591456683"],
          ["✉️", "Email", "mailto:lolobybarkati@gmail.com"],
        ].map(([icon, label, href]) => (
          <a
            key={label}
            href={href as string}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 12px",
              borderRadius: 999,
              background: "#fff",
              border: "1px solid rgba(24,77,50,0.18)",
              color: "#184d32",
              fontWeight: 700,
              fontSize: 12,
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: 14 }}>{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>

    {/* Your existing form stays exactly as-is */}
    <ContactForm />

    {/* Tiny reassurance line */}
    <div
      style={{
        marginTop: 10,
        fontSize: 12,
        color: "#2d6a4f",
      }}
    >
      We typically respond within 24 hours. Share product, grade, quantity & route for faster quotes.
    </div>
  </div>
</div>

  </div>
</section>


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
    
    >Designed By Fusionex.Labs</p>
  </div>
</footer>


        {/* WhatsApp Chat Icon */}
        <a
          href="https://wa.me/+918591456683" // Replace with your WhatsApp number in international format
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 100,
            background: "#25D366",
            borderRadius: "50%",
            width: 60,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
            transition: "box-shadow 0.2s",
          }}
        >
          {/* WhatsApp SVG */}
         <Image src="/icons/apple.png" alt="WhatsApp Icon" width={32} height={32} style={{ width: 32, height: 32 }} />
         
        </a>

      </main>
    </>
  );
}

// Contact form as a separate component for clarity and proper state isolation
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { error } = await supabase.from("contacts").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
    ]);
    setLoading(false);
    if (error) setError("Submission failed. Try again.");
    else {
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <form
  className="contactCard"
  onSubmit={handleSubmit}
  style={{
    width: "100%",
    maxWidth: 520,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderRadius: 16,
    padding: "1.75rem 1.25rem",
    position: "relative",
  }}
>
  {/* heading */}
  <h3
    style={{
      textAlign: "left",
      fontWeight: 800,
      margin: 0,
      fontSize: "1.35rem",
      letterSpacing: "0.02em",
      color: "#184d32",
    }}
  >
    Get in Touch
  </h3>
  <div
    style={{
      height: 4,
      width: 56,
      borderRadius: 999,
      background:
        "linear-gradient(90deg, #b7f7cc 0%, #facc15 60%, #f59e0b 100%)",
      marginBottom: "0.75rem",
    }}
  />

  {/* Name */}
  <label className="field">
    <span className="label">Name</span>
    <input
      type="text"
      required
      placeholder="e.g., Rahul Sharma"
      name="name"
      value={form.name}
      onChange={handleChange}
      className="input"
    />
  </label>

  {/* Email */}
  <label className="field">
    <span className="label">Email Address</span>
    <input
      type="email"
      required
      placeholder="you@company.com"
      name="email"
      value={form.email}
      onChange={handleChange}
      className="input"
    />
  </label>

  {/* Phone */}
  <label className="field">
    <span className="label">Contact Number</span>
    <input
      type="tel"
      required
      placeholder="+91 98xxxxxxx"
      name="phone"
      pattern="[0-9+ -]*"
      value={form.phone}
      onChange={handleChange}
      className="input"
    />
  </label>

  {/* Message */}
  <label className="field">
    <span className="label">Message</span>
    <textarea
      required
      placeholder="Ask us anything…"
      name="message"
      value={form.message}
      onChange={handleChange}
      rows={4}
      className="textarea"
    />
  </label>

  <button
    type="submit"
    disabled={loading}
    className={`submit ${loading ? "isLoading" : ""}`}
  >
    {loading ? (
      <>
        <span className="spinner" />
        Submitting…
      </>
    ) : (
      "Submit"
    )}
  </button>

  {success && (
    <div className="alert success">Thank you! We&apos;ll contact you soon.</div>
  )}
  {error && <div className="alert error">{error}</div>}

  {/* scoped styles */}
  <style jsx>{`
    .contactCard {
      /* LOLO brand palette */
      --brand-deep: #184d32;
      --brand-mid: #2d6a4f;
      --brand-foam: #f6fff9;
      --brand-mint: #eaf7ef;
      --accent-lime: #b7f7cc;
      --accent-mango: #facc15;
      --accent-orange: #f59e0b;

      /* gradient border using dual backgrounds */
      background:
        linear-gradient(180deg, #ffffff, #ffffff) padding-box,
        linear-gradient(135deg, var(--accent-lime), var(--accent-mango))
          border-box;
      border: 1px solid transparent;
      box-shadow: 0 18px 60px rgba(0, 0, 0, 0.08);
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--brand-mid);
      letter-spacing: 0.02em;
    }

    .input,
    .textarea {
      width: 100%;
      padding: 0.9rem 0.95rem;
      border-radius: 12px;
      border: 1px solid rgba(24, 77, 50, 0.18);
      background: linear-gradient(180deg, var(--brand-foam), #ffffff);
      font-size: 1rem;
      outline: none;
      transition: box-shadow 160ms ease, border-color 160ms ease,
        background 160ms ease, transform 120ms ease;
      color: #0f2018;
    }
    .textarea {
      resize: vertical;
      min-height: 120px;
    }
    .input::placeholder,
    .textarea::placeholder {
      color: #6b8f7c;
    }
    .input:hover,
    .textarea:hover {
      transform: translateY(-1px);
    }
    .input:focus,
    .textarea:focus {
      border-color: var(--brand-mid);
      background: #ffffff;
      box-shadow: 0 0 0 4px rgba(45, 106, 79, 0.12);
    }

    .submit {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0.95rem 1rem;
      background: linear-gradient(
        90deg,
        #ffe08a 0%,
        var(--accent-mango) 55%,
        var(--accent-orange) 100%
      );
      color: #0f172a;
      font-weight: 900;
      font-size: 1rem;
      border: none;
      border-radius: 14px;
      cursor: pointer;
      margin-top: 0.25rem;
      transition: transform 120ms ease, box-shadow 120ms ease, filter 120ms ease;
      box-shadow: 0 12px 26px rgba(250, 204, 21, 0.28);
    }
    .submit:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 30px rgba(250, 204, 21, 0.35);
      filter: brightness(1.02);
    }
    .submit:active {
      transform: translateY(0);
    }
    .submit:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      box-shadow: none;
      filter: none;
    }

    .spinner {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid rgba(15, 23, 42, 0.25);
      border-top-color: #0f172a;
      animation: spin 0.8s linear infinite;
      display: inline-block;
    }
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .alert {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 600;
    }
    .alert.success {
      color: #0f5132;
      background: #d1f2e0;
      border: 1px solid #9be0c0;
    }
    .alert.error {
      color: #842029;
      background: #f8d7da;
      border: 1px solid #f1aeb5;
    }
  `}</style>
</form>

  );
}