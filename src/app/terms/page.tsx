import React from "react";

const WEBSITE_NAME = "LoloFruits";
const CONTACT_EMAIL = "lolobybarkati@gmail.com";

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
            Terms of Use
          </h1>
          <div style={{ color: "#888" }}>Last updated: July 2, 2025</div>
        </header>

        <section style={{ marginBottom: "1.5rem" }}>
          <p>
            Welcome to Lolo!<br />
            These Terms of Use (“Terms”) govern your access to and use of the LoloFruits website (<a href="https://lolofruits.com" target="_blank" rel="noopener noreferrer">https://lolofruits.com</a>) and mobile application (collectively, the “Service”). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use our Service.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>1. Service Overview</h2>
          <ul style={ulStyle}>
            <li>
              LoloFruits provides a platform for fruit bulk listings, including cold storage and transportation details.
            </li>
            <li>
              Admin Users can upload fruit listings, images, rate sheets, and other business details.
            </li>
            <li>
              Customer Users can view basic images for free; full details (price, location, quantity, contact information) require a one-time paid subscription.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>2. Subscription & Payment</h2>
          <ul style={ulStyle}>
            <li>
              The subscription fee is , payable via Google Play Billing or Apple In-App Purchase.
            </li>
            <li>
              Subscription is a one-time payment linked to your account and is non-transferable.
            </li>
            <li>
              No refunds are provided unless required by law or applicable app store policies.
            </li>
            <li>
              Subscription grants continued access to detailed fruit listings for the duration of your account’s validity, unless suspended or terminated under these Terms.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>3. Business Listings & Disclaimers</h2>
          <ul style={ulStyle}>
            <li>
              All business listings (fruit suppliers, cold storage, transportation providers) are uploaded with explicit consent from the respective businesses.
            </li>
            <li>
              Contact details shown are business-only and must not be misused, spammed, or redistributed outside the platform.
            </li>
            <li>
              Rate sheets and pricing information are provided directly by the businesses and are for informational purposes only — rates may change without notice.
            </li>
            <li>
              LoloFruits does not guarantee the accuracy, completeness, or timeliness of business listing information.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>4. User Responsibilities</h2>
          <ul style={ulStyle}>
            <li>Provide accurate registration and payment information.</li>
            <li>Use the Service only for lawful purposes.</li>
            <li>Not copy, distribute, or reproduce any listings, rate sheets, or images without permission.</li>
            <li>Not attempt to bypass subscription requirements or security features.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>5. Intellectual Property</h2>
          <ul style={ulStyle}>
            <li>
              All content within the Service, including images, rate sheets, and software, is owned by LoloFruits or its licensors.
            </li>
            <li>
              You are granted a limited, non-exclusive, non-transferable license to access the Service for personal, non-commercial use.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>6. Limitation of Liability</h2>
          <ul style={ulStyle}>
            <li>
              LoloFruits is not responsible for business transaction disputes, product quality, delivery issues, or any damages resulting from reliance on listing information.
            </li>
            <li>
              The Service is provided “as is” without warranties of any kind, express or implied.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>7. Termination</h2>
          <ul style={ulStyle}>
            <li>You violate these Terms or applicable laws.</li>
            <li>You misuse business contact information.</li>
            <li>You engage in fraudulent activities or attempt to bypass payment.</li>
            <li>
              Upon termination, your access to subscription benefits will end immediately without refund.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>9. Changes to Terms</h2>
          <ul style={ulStyle}>
            <li>
              We may update these Terms from time to time. Updates will be effective once posted within the Service with the “Last updated” date revised.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={sectionTitle}>10. Contact Us</h2>
          <ul style={ulStyle}>
            <li>
              If you have any questions about these Terms, please contact us:<br />
              📧 <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "#309f4c", wordBreak: "break-all" }}
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </section>
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