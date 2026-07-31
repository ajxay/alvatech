"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CONTACT_SERVICE_OPTIONS } from "@/data/contactServiceOptions";
import "./Contact3.css";

/** Splits a single "full name" input into the firstName/lastName pair the
 * shared /api/contact route expects. */
function splitName(fullName) {
  const trimmed = fullName.trim().replace(/\s+/g, " ");
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) return { firstName: trimmed, lastName: "" };
  return {
    firstName: trimmed.slice(0, spaceIndex),
    lastName: trimmed.slice(spaceIndex + 1),
  };
}

function ContactForm() {
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
    const { firstName, lastName } = splitName(formData.get("name")?.toString() || "");
    const subject = formData.get("subject")?.toString() || "";

    const payload = {
      firstName,
      lastName,
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      services: subject ? [subject] : [],
      source: "contact-us",
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
        message: t("pages.contact3.form.toastSuccess"),
      });
      form.reset();
    } catch (_error) {
      setToast({
        show: true,
        type: "error",
        message: t("pages.contact3.form.toastError"),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact3-form" onSubmit={handleSubmit}>
      <div className="contact3-grid">
        <label>
          <span>
            {t("pages.contact3.form.name")}
            <em>*</em>
          </span>
          <span className="contact3-input">
            <i className="unicon-user icon-1" aria-hidden="true" />
            <input
              type="text"
              name="name"
              placeholder={t("pages.contact3.form.namePlaceholder")}
              required
            />
          </span>
        </label>
        <label>
          <span>
            {t("pages.contact3.form.phone")}
            <em>*</em>
          </span>
          <span className="contact3-input">
            <i className="unicon-phone icon-1" aria-hidden="true" />
            <input
              type="tel"
              name="phone"
              placeholder={t("pages.contact3.form.phonePlaceholder")}
              required
            />
          </span>
        </label>
      </div>
      <div className="contact3-grid">
        <label>
          <span>{t("pages.contact3.form.email")}</span>
          <span className="contact3-input">
            <i className="unicon-email icon-1" aria-hidden="true" />
            <input
              type="email"
              name="email"
              placeholder={t("pages.contact3.form.emailPlaceholder")}
              required
            />
          </span>
        </label>
        <label>
          <span>{t("pages.contact3.form.subject")}</span>
          <span className="contact3-input contact3-input--select">
            <select name="subject" defaultValue="">
              <option value="" disabled>
                {t("pages.contact3.form.subjectPlaceholder")}
              </option>
              {CONTACT_SERVICE_OPTIONS.map((item) => (
                <option key={item.value} value={item.value}>
                  {t(item.tKey)}
                </option>
              ))}
            </select>
            <i className="unicon-chevron-down icon-1" aria-hidden="true" />
          </span>
        </label>
      </div>
      <label>
        <span>{t("pages.contact3.form.message")}</span>
        <span className="contact3-input contact3-input--textarea">
          <i className="unicon-edit icon-1" aria-hidden="true" />
          <textarea
            name="message"
            placeholder={t("pages.contact3.form.messagePlaceholder")}
          />
        </span>
      </label>
      <button type="submit" disabled={isSubmitting}>
        <i className="unicon-send icon-1" aria-hidden="true" />
        {isSubmitting ? t("pages.contact3.form.submitting") : t("pages.contact3.form.submit")}
      </button>
      <p className="contact3-privacy">
        <i className="unicon-locked icon-1" aria-hidden="true" />
        {t("pages.contact3.form.privacyNote")}
      </p>
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
          <header className="contact3-hero">
            <h1>{t("pages.contact3.heroTitle")}</h1>
            <p>{t("pages.contact3.heroSubtitle")}</p>
            <div className="contact3-hero__actions">
              <a
                href="https://calendly.com/nikhil-k-alvatech/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="contact3-quick-btn"
              >
                {t("pages.contact3.virtualMeet")}
              </a>
              <a href="tel:+46704964569" className="contact3-quick-btn">
                {t("pages.contact3.callUs")}
              </a>
              <a href="mailto:sales@alvatech.se" className="contact3-quick-btn">
                {t("pages.contact3.emailUs")}
              </a>
            </div>
          </header>

          <div className="contact3-divider">
            <span className="contact3-divider__line" />
            <span className="contact3-divider__badge" aria-hidden="true">
              <i className="unicon-email" />
            </span>
            <span className="contact3-divider__line" />
          </div>

          <div className="contact3-intro">
            <h2>{t("pages.contact3.title")}</h2>
            <p>{t("pages.contact3.subtitle")}</p>
          </div>

          <div className="contact3-layout">
            <div className="contact3-form-card" id="contact3-form">
              <ContactForm />
            </div>
            <aside className="contact3-details">
              <div className="contact3-details__head">
                <span className="contact3-details__icon" aria-hidden="true">
                  <i className="unicon-headset" />
                </span>
                <h3>{t("pages.contact3.detailsTitle")}</h3>
              </div>
              <ul className="contact3-details__list">
                <li>
                  <span className="contact3-details__row-icon" aria-hidden="true">
                    <i className="unicon-phone" />
                  </span>
                  <div>
                    <strong>{t("pages.contact3.callWhatsapp")}</strong>
                    <a href="tel:+46704964569">+46 70 496 45 69</a>
                  </div>
                </li>
                <li>
                  <span className="contact3-details__row-icon" aria-hidden="true">
                    <i className="unicon-email" />
                  </span>
                  <div>
                    <strong>{t("pages.contact3.emailUsLabel")}</strong>
                    <a href="mailto:sales@alvatech.se">sales@alvatech.se</a>
                  </div>
                </li>
                <li>
                  <span className="contact3-details__row-icon" aria-hidden="true">
                    <i className="unicon-location" />
                  </span>
                  <div>
                    <strong>{t("pages.contact3.ourAddress")}</strong>
                    <span>{t("footer.address")}</span>
                  </div>
                </li>
                <li>
                  <span className="contact3-details__row-icon" aria-hidden="true">
                    <i className="unicon-logo-linkedin" />
                  </span>
                  <div>
                    <strong>{t("pages.contact3.connectLinkedin")}</strong>
                    <a
                      href="https://www.linkedin.com/company/alvatechnordics/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("pages.contact3.visitProfile")} →
                    </a>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
