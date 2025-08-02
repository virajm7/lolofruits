import React from "react";

const WEBSITE_NAME = "LoloFruits";
const COMPANY_NAME = "Lolo Barkati Ltd.";
const CONTACT_EMAIL = "lolobybarkati@gmail.com";
const COUNTRY = "United States";

export default function Terms() {
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
            Terms and Conditions
          </h1>
          <p style={{ color: "#888" }}>Last updated: July 2, 2025</p>
        </header>

        <section style={{ marginBottom: "1.5rem" }}>
          <p>
            Welcome to <strong>{WEBSITE_NAME}</strong>! These terms and conditions outline the rules and regulations for using our website.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you accept these terms and conditions. Do not continue to use <strong>{WEBSITE_NAME}</strong> if you do not agree to all of the terms stated on this page.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>2. Use of the Website</h2>
          <ul style={ulStyle}>
            <li>You must be at least 13 years old to use this site.</li>
            <li>You agree not to misuse the website or its services.</li>
            <li>All content is for your general information and use only. It is subject to change without notice.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>3. Intellectual Property</h2>
          <p>
            All content, logos, and graphics on <strong>{WEBSITE_NAME}</strong> are the property of <strong>{COMPANY_NAME}</strong> unless otherwise noted.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>4. User Content</h2>
          <p>
            By submitting content (such as comments or uploads), you grant us the right to use, modify, display, and distribute your content as needed to operate the site.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>5. Limitation of Liability</h2>
          <p>
            We do our best to ensure the information on this website is correct, but we do not warrant its completeness or accuracy. Use this website at your own risk.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>6. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of {COUNTRY}.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>7. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Changes will be posted on this page.
          </p>
        </section>

        <footer style={{ marginTop: "2rem", color: "#666" }}>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at{" "}
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
        @media (max-width: 900px) {
          section[style] {
            max-width: 94vw !important;
          }
        }
        @media (max-width: 600px) {
          section[style] {
            padding: 1rem !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            max-width: 100vw !important;
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