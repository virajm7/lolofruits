import React from "react";

const WEBSITE_NAME = "LoloFruits";
const WEBSITE_URL = "https://lolofruits.com";
const CONTACT_EMAIL = "lolobybarkati@gmail.com";

export default function Privacy() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 800,
          margin: "auto",
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          color: "#222",
          boxSizing: "border-box",
        }}
      >
        <header style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2.25rem",
              marginBottom: "0.5rem",
              lineHeight: 1.15,
              wordBreak: "break-word",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "#666", fontSize: "1rem" }}>
            Last updated: July 2, 2025
          </p>
        </header>

        <section style={{ marginBottom: "1.5rem" }}>
          <p>
            <strong>{WEBSITE_NAME}</strong> ("we", "us", or "our") operates the{" "}
            <a href={WEBSITE_URL} style={{ color: "#309f4c" }}>
              {WEBSITE_URL}
            </a>{" "}
            website (the "Service").
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>1. Information We Collect</h2>
          <ul style={ulStyle}>
            <li>
              Information you provide directly to us (such as name, email, or
              other contact details).
            </li>
            <li>
              Usage data, such as pages visited, time spent on the site, and
              other analytical data.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>2. How We Use Your Information</h2>
          <ul style={ulStyle}>
            <li>To provide and maintain our Service.</li>
            <li>To communicate with you.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>3. Sharing Your Information</h2>
          <ul style={ulStyle}>
            <li>We do not sell your personal information.</li>
            <li>
              We may share information with service providers who help us
              operate our site.
            </li>
            <li>We may disclose your information if required by law.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>4. Cookies</h2>
          <p>
            We may use cookies to enhance your experience. You can disable
            cookies in your browser settings.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>5. Data Security</h2>
          <p>
            We take reasonable steps to protect your information, but no method
            of transmission over the internet is 100% secure.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>6. Children's Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do
            not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>7. Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. Any changes will
            be posted on this page.
          </p>
        </section>

        <footer style={{ marginTop: "2rem", color: "#666" }}>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "#309f4c", wordBreak: "break-all" }}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </footer>
      </section>
      <style>{`
        @media (max-width: 600px) {
          section[style] {
            padding: 1rem !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          h1 {
            font-size: 1.6rem !important;
          }
          h2 {
            font-size: 1.1rem !important;
          }
        }
        @media (max-width: 400px) {
          section[style] {
            padding: 0.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}

const sectionTitle: React.CSSProperties = {
  fontSize: "1.2rem",
  margin: "1.2rem 0 0.5rem 0",
  color: "#222",
  fontWeight: 600,
};

const ulStyle: React.CSSProperties = {
  paddingLeft: "1.2rem",
  margin: 0,
  color: "#222",
  fontSize: "1rem",
  lineHeight: 1.6,
};