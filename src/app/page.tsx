"use client";
import { useRef, useState, useEffect } from "react";
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
        }}>Contact</a>
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
              Download App
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
            minHeight: "70vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            overflow: "hidden",
          }}
        >
          <img
            src="/aboutbg.jpg"
            alt="About Us background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              // opacity: 0.68,
              filter: "brightness(1) blur(1px)",
            }}
          />
          <div
            style={{
              position: "static",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, rgba(30,30,30,0.4) 0%, rgba(60,60,60,0.2) 100%)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 640,
              padding: "3.5rem 1.2rem",
              textAlign: "center",
              margin: "auto",
              backdropFilter: "blur(0.5px)",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.2rem", color: "#fff" }}>
              About Us
            </h2>
            <p style={{ fontSize: "1.22rem", lineHeight: 1.8, marginBottom: 0, alignContent: "center", color: "#fff" }}>
              At LOLO, we believe in delivering the freshest, <br />highest-quality fruits straight to your doorstep.
              <br />
              Our passionate team handpicks every selection and crafts unique offerings for individuals, families, and companies.
              <br />
              With years of experience, trusted partners, and a love for healthy living, we’re proud to make nature’s best accessible to everyone.
              <br />
              <strong>LOLO – Where every basket is a promise of taste, wellness, and delight.</strong>
            </p>
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
            background: "#fff",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 700,
              width: "100%",
              margin: "auto",
              padding: "3.5rem 1.2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ContactForm />
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
    
    >Designed By Fusionex</p>
  </div>
</footer>


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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      style={{
        width: "100%",
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        gap: "1.15rem",
        background: "rgba(255,255,255,0.93)",
        borderRadius: 10,
        padding: "2rem 1rem",
        boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
        color: "#184d32",
      }}
      onSubmit={handleSubmit}
    >
      <h3
        style={{
          textAlign: "left",
          fontWeight: 700,
          marginBottom: "0.7rem",
          fontSize: "1.3rem",
          letterSpacing: "0.04em",
          color: "#184d32",
        }}
      >
        Get in Touch
      </h3>
      <input
        type="text"
        required
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        style={{
          padding: "0.8rem",
          borderRadius: 6,
          border: "none",
          fontSize: "1rem",
          background: "#eee",
          outline: "none",
        }}
      />
      <input
        type="email"
        required
        placeholder="Email Address"
        name="email"
        value={form.email}
        onChange={handleChange}
        style={{
          padding: "0.8rem",
          borderRadius: 6,
          border: "none",
          fontSize: "1rem",
          background: "#eee",
          outline: "none",
        }}
      />
      <input
        type="tel"
        required
        placeholder="Contact Number"
        name="phone"
        pattern="[0-9+ -]*"
        value={form.phone}
        onChange={handleChange}
        style={{
          padding: "0.8rem",
          borderRadius: 6,
          border: "none",
          fontSize: "1rem",
          background: "#eee",
          outline: "none",
        }}
      />
      <input
        type="text"
        required
        placeholder="Ask us anything..."
        name="message"
        value={form.message}
        onChange={handleChange}
        style={{
          padding: "0.8rem",
          borderRadius: 6,
          border: "none",
          fontSize: "1rem",
          background: "#eee",
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "0.85rem",
          background: "#facc15",
          color: "#1a1a1a",
          fontWeight: 700,
          fontSize: "1rem",
          border: "none",
          borderRadius: 6,
          cursor: loading ? "not-allowed" : "pointer",
          marginTop: "0.4rem",
        }}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {success && (
        <div style={{ color: "green", marginTop: 10 }}>Thank you! We'll contact you soon.</div>
      )}
      {error && (
        <div style={{ color: "red", marginTop: 10 }}>{error}</div>
      )}
    </form>
  );
}