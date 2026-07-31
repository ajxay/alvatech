"use client";

import { CONTACT_SERVICE_OPTIONS } from "@/data/contactServiceOptions";
import { markLeadSubmitted } from "@/utlis/leadUnlock";
import { closeContactModal } from "@/utlis/toggleContactModal";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ContactModal() {
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeContactModal();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeContactModal();
  }, [pathname]);

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
      source: "contact-modal",
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

      markLeadSubmitted();
      setToast({
        show: true,
        type: "success",
        message: t("modal.contact.toastSuccess"),
      });
      form.reset();
      setTimeout(() => {
        closeContactModal();
      }, 900);
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
    <div
      ref={containerRef}
      id="uc-contact-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog lg:max-w-650px text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(to right, rgba(17, 24, 39, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 24, 39, 0.06) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
          onClick={closeContactModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="panel vstack gap-2 md:gap-4 text-center">
          <div className="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
              <h4 className="h5 lg:h4 m-0">{t("modal.contact.title")}</h4>
              <div className="panel w-100 mx-auto" style={{ maxWidth: 760 }}>
                <form
                  onSubmit={handleSubmit}
                  className="vstack gap-2 text-start"
                >
                  <div className="row g-2">
                    <div className="col-12 md:col-6">
                      <label className="d-block fw-bold mb-1">
                        {t("modal.contact.firstName")}
                      </label>
                      <input
                        className="form-control h-48px w-100 bg-white dark:border-white dark:text-dark"
                        type="text"
                        name="firstName"
                        placeholder={t("modal.contact.placeholderFirst")}
                        required
                      />
                    </div>
                    <div className="col-12 md:col-6">
                      <label className="d-block fw-bold mb-1">
                        {t("modal.contact.lastName")}
                      </label>
                      <input
                        className="form-control h-48px w-100 bg-white dark:border-white dark:text-dark"
                        type="text"
                        name="lastName"
                        placeholder={t("modal.contact.placeholderLast")}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="d-block fw-bold mb-1">
                      {t("modal.contact.email")}
                    </label>
                    <input
                      className="form-control h-48px w-100 bg-white dark:border-white dark:text-dark"
                      type="email"
                      name="email"
                      placeholder={t("modal.contact.placeholderEmail")}
                      required
                    />
                  </div>

                  <div>
                    <label className="d-block fw-bold mb-1">
                      {t("modal.contact.phone")}
                    </label>
                    <input
                      className="form-control h-48px w-100 rtl:text-end bg-white dark:border-white dark:text-dark"
                      type="tel"
                      name="phone"
                      placeholder={t("modal.contact.placeholderPhone")}
                      required
                    />
                  </div>

                  <div>
                    <label className="d-block fw-bold mb-1">
                      {t("modal.contact.message")}
                    </label>
                    <textarea
                      className="form-control w-100 bg-white dark:border-white dark:text-dark"
                      name="message"
                      placeholder={t("modal.contact.placeholderMessage")}
                      rows={2}
                      style={{ minHeight: "70px" }}
                      defaultValue={""}
                    />
                  </div>

                  <div>
                    <label className="d-block fw-bold mb-1">
                      {t("modal.contact.services")}
                    </label>
                    <div className="row g-1">
                      {CONTACT_SERVICE_OPTIONS.map((service) => (
                        <div key={service.value} className="col-12 md:col-6">
                          <label className="hstack items-center gap-1 m-0">
                            <input
                              type="checkbox"
                              name="services[]"
                              value={service.value}
                            />
                            <span className="fw-medium">{t(service.tKey)}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className="btn btn-md text-white mt-2"
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: "#84BA41",
                      borderColor: "#84BA41",
                      borderRadius: 12,
                      opacity: isSubmitting ? 0.75 : 1,
                    }}
                  >
                    {isSubmitting
                      ? t("modal.contact.submitting")
                      : t("modal.contact.submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast.show ? (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 10000,
            padding: "10px 14px",
            borderRadius: 10,
            color: "#fff",
            fontWeight: 600,
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            backgroundColor: toast.type === "error" ? "#dc2626" : "#16a34a",
          }}
        >
          {toast.message}
        </div>
      ) : null}
    </div>
  );
}
