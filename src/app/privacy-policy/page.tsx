import React from "react";

const WEBSITE_NAME = "LoloFruits";
const WEBSITE_URL = "https://lolofruits.com";
const CONTACT_EMAIL = "lolobybarkati@gmail.com";

export default function Privacy() {
  return (
    <main style={{
      maxWidth: 800,
      margin: "auto",
      padding: "2rem",
      fontFamily: "system-ui, sans-serif",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)"
    }}>
      <header style={{marginBottom: "2rem"}}>
        <h1 style={{fontSize: "2.5rem", marginBottom: "0.5rem"}}>Privacy Policy</h1>
        <p style={{color: "#888"}}>Last updated: July 2, 2025</p>
      </header>

      <section>
        <p>
          <strong>{WEBSITE_NAME}</strong> ("we", "us", or "our") operates the <a href={WEBSITE_URL}>{WEBSITE_URL}</a> website (the "Service").
        </p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Information you provide directly to us (such as name, email, or other contact details).</li>
          <li>Usage data, such as pages visited, time spent on the site, and other analytical data.</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our Service.</li>
          <li>To communicate with you.</li>
          <li>To improve our website and services.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>3. Sharing Your Information</h2>
        <ul>
          <li>We do not sell your personal information.</li>
          <li>We may share information with service providers who help us operate our site.</li>
          <li>We may disclose your information if required by law.</li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          We may use cookies to enhance your experience. You can disable cookies in your browser settings.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          We take reasonable steps to protect your information, but no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>6. Children's Privacy</h2>
        <p>
          Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section>
        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update our privacy policy from time to time. Any changes will be posted on this page.
        </p>
      </section>

      <footer style={{marginTop: "2rem", color: "#666"}}>
        <p>
          If you have questions about this Privacy Policy, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </footer>
    </main>
  );
}
