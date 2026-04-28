"use client";

import "./Contact3.css";

const services = [
  { label: "Shopify Development", checked: false },
  { label: "Custom Development", checked: false },
  { label: "Marketing", checked: false },
  { label: "Salesforce CRM", checked: false },
  { label: "ERP Solutions", checked: false },
  { label: "ZOHO CRM", checked: false },
  { label: "Other", checked: false },
];

function ContactForm({ compact = false }) {
  return (
    <form className={`contact3-form${compact ? " is-compact" : ""}`} onSubmit={(e) => e.preventDefault()}>
      <div className="contact3-grid">
        <label>
          <span>First name</span>
          <input type="text" placeholder="First name" />
        </label>
        <label>
          <span>Last name</span>
          <input type="text" placeholder="Last name" />
        </label>
      </div>
      <label>
        <span>Email</span>
        <input type="email" placeholder="you@company.com" />
      </label>
      <label>
        <span>Phone number</span>
        <input type="text" placeholder="+1 (555) 000-0000" />
      </label>
      <label>
        <span>Message</span>
        <textarea placeholder="Leave us a message..." />
      </label>
      <div className="contact3-services">
        <span>Services</span>
        <div className="contact3-services__grid">
          {services.map((item) => (
            <label key={item.label}>
              <input type="checkbox" defaultChecked={item.checked} />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>
      {!compact ? <button type="submit">Send message</button> : null}
    </form>
  );
}

export default function Contact3() {
  return (
    <section className="contact3 section panel overflow-hidden">
      <div className="section-outer panel py-7 lg:py-9">
        <div className="contact3-full">
          <div className="contact3-shell">
            <div className="contact3-browser">
              <div className="contact3-content">
                <div className="contact3-intro">
                  <h1>Contact our team</h1>
                  <p>
                    Got any questions about the product or scaling on our platform?
                    We&apos;re here to help. Chat to our friendly team 24/7 and get onboard
                    in less than 5 minutes.
                  </p>
                </div>

                <div className="contact3-layout">
                  <ContactForm />
                  <aside className="contact3-info">
                    <h3>Chat with us</h3>
                    <p>Speak to our friendly team via live chat.</p>
                    <ul className="contact3-info__links">
                      <li>
                        <span className="contact3-info__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M4 12a8 8 0 0 1 8-8h.3A7.7 7.7 0 0 1 20 11.7a7.3 7.3 0 0 1-7.3 7.3H9l-4 3v-6A7.9 7.9 0 0 1 4 12Z" />
                          </svg>
                        </span>
                        <a href="#">Start a live chat</a>
                      </li>
                      <li>
                        <span className="contact3-info__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M22 2 11 13" />
                            <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                          </svg>
                        </span>
                        <a href="mailto:support@untitledui.com">Shoot us an email</a>
                      </li>
                      <li>
                        <span className="contact3-info__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M4 3h4.7L14 9.7 18.9 3H22l-6.2 8 6.4 10h-4.8l-4.3-6.2L8.7 21H4l6.6-8.5L4 3Z" />
                          </svg>
                        </span>
                        <a href="#">Message us on X</a>
                      </li>
                    </ul>
                    <h3>Call us</h3>
                    <p>Call our team Mon-Fri from 8am to 5pm.</p>
                    <div className="contact3-info__contact-row">
                      <span className="contact3-info__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9Z" />
                        </svg>
                      </span>
                      <strong>+1 (555) 000-0000</strong>
                    </div>
                    <h3>Visit us</h3>
                    <p>Chat to us in person at our Melbourne HQ.</p>
                    <div className="contact3-info__contact-row">
                      <span className="contact3-info__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <strong>100 Smith Street, Collingwood VIC 3066</strong>
                    </div>
                  </aside>
                </div>
              </div>
            </div>

            <aside className="contact3-mobile-card">
              <h2>Contact our team</h2>
              <p>
                Got any questions about the product or scaling on our platform?
                Chat to our friendly team 24/7 for help.
              </p>
              <ContactForm compact />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
