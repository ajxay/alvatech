"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CONTACT_SERVICE_OPTIONS } from "@/data/contactServiceOptions";
import "./Contact3.css";

function ContactForm({ compact = false }) {
  const { t } = useTranslation("common");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  useEffect(() => {
    if (!toast.show) return undefined;
    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.show]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      services: formData.getAll("services[]").map(String),
      source: compact ? "contact3-mobile" : "contact3-web",
    };

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setToast({
        show: true,
        type: "success",
        message: t("modal.contact.toastSuccess"),
      });
      form.reset();
    } catch (_error) {
      setToast({
        show: true,
        type: "error",
        message: t("modal.contact.toastError"),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={`contact3-form${compact ? " is-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="contact3-grid">
        <label>
          <span>{t("modal.contact.firstName")}</span>
          <input
            type="text"
            name="firstName"
            placeholder={t("modal.contact.placeholderFirst")}
            required
          />
        </label>
        <label>
          <span>{t("modal.contact.lastName")}</span>
          <input
            type="text"
            name="lastName"
            placeholder={t("modal.contact.placeholderLast")}
            required
          />
        </label>
      </div>
      <label>
        <span>{t("modal.contact.email")}</span>
        <input
          type="email"
          name="email"
          placeholder={t("modal.contact.placeholderEmail")}
          required
        />
      </label>
      <label>
        <span>{t("modal.contact.phone")}</span>
        <input
          type="text"
          name="phone"
          placeholder={t("modal.contact.placeholderPhone")}
          required
        />
      </label>
      <label>
        <span>{t("modal.contact.message")}</span>
        <textarea name="message" placeholder={t("modal.contact.placeholderMessage")} />
      </label>
      <div className="contact3-services">
        <span>{t("modal.contact.services")}</span>
        <div className="contact3-services__grid">
          {CONTACT_SERVICE_OPTIONS.map((item) => (
            <label key={item.value}>
              <input type="checkbox" name="services[]" value={item.value} />
              <span>{t(item.tKey)}</span>
            </label>
          ))}
        </div>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("modal.contact.submitting") : t("modal.contact.submit")}
      </button>
      {toast.show ? (
        <div
          className={`contact3-toast ${toast.type === "error" ? "is-error" : "is-success"}`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      ) : null}
    </form>
  );
}

export default function Contact3() {
  const { t } = useTranslation("common");

  return (
    <section className="contact3 section panel overflow-hidden">
      <div className="section-outer panel py-7 lg:py-9">
        <div className="contact3-full">
          <div className="contact3-shell">
            <div className="contact3-browser">
              <div className="contact3-content">
                <div className="contact3-intro">
                  <h1>{t("pages.contact3.introTitle")}</h1>
                  <p>{t("pages.contact3.introBody")}</p>
                </div>

                <div className="contact3-layout">
                  <ContactForm />
                  <aside className="contact3-info">
                    <h3>{t("pages.contact3.chatTitle")}</h3>
                    <p>{t("pages.contact3.chatBody")}</p>
                    <ul className="contact3-info__links">
                      <li>
                        <span className="contact3-info__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M4 12a8 8 0 0 1 8-8h.3A7.7 7.7 0 0 1 20 11.7a7.3 7.3 0 0 1-7.3 7.3H9l-4 3v-6A7.9 7.9 0 0 1 4 12Z" />
                          </svg>
                        </span>
                        <a href="#">{t("pages.contact3.liveChat")}</a>
                      </li>
                      <li>
                        <span className="contact3-info__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M22 2 11 13" />
                            <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                          </svg>
                        </span>
                        <a href="mailto:sales@alvatech.se">{t("pages.contact3.emailLink")}</a>
                      </li>
                      <li>
                        <span className="contact3-info__icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M4 3h4.7L14 9.7 18.9 3H22l-6.2 8 6.4 10h-4.8l-4.3-6.2L8.7 21H4l6.6-8.5L4 3Z" />
                          </svg>
                        </span>
                        <a href="#">{t("pages.contact3.messageX")}</a>
                      </li>
                    </ul>
                    <h3>{t("pages.contact3.callTitle")}</h3>
                    <p>{t("pages.contact3.callBody")}</p>
                    <div className="contact3-info__contact-row">
                      <span className="contact3-info__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9Z" />
                        </svg>
                      </span>
                      <strong>+46 70 496 45 69 </strong>
                    </div>
                    <h3>{t("pages.contact3.visitTitle")}</h3>
                    <p>{t("pages.contact3.visitBody")}</p>
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
              <h2>{t("pages.contact3.mobileIntroTitle")}</h2>
              <p>{t("pages.contact3.mobileIntroBody")}</p>
              <ContactForm compact />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
