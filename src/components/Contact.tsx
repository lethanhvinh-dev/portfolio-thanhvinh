import { type ChangeEvent, type FormEvent, useState } from "react";
import { motion } from "motion/react";
import {
  AlertCircle,
  CheckCircle2,
  Facebook,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Paperclip,
  Send,
  Twitter,
} from "lucide-react";
import SectionFrame from "./SectionFrame";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const CONTACT_FORM_NAME = "contact";
const CONTACT_EMAIL = "lethanhvinh.dev@gmail.com";
const MAX_FILE_SIZE = 7 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
]);

const encodeFormData = (formData: FormData) => {
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    if (value instanceof File) {
      if (value.size > 0) {
        params.append(key, value.name);
      }

      return;
    }

    params.append(key, value);
  });

  return params.toString();
};

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [attachmentName, setAttachmentName] = useState("");

  const handleAttachmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    setAttachmentName(file?.name ?? "");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");
    const hasAttachment = attachment instanceof File && attachment.size > 0;

    if (hasAttachment) {
      if (attachment.size > MAX_FILE_SIZE) {
        setStatus("error");
        setStatusMessage("Please upload a file smaller than 7MB.");
        return;
      }

      if (!ALLOWED_FILE_TYPES.has(attachment.type)) {
        setStatus("error");
        setStatusMessage("Please attach a PDF, PNG, JPG, or JPEG file.");
        return;
      }
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/", {
        method: "POST",
        ...(hasAttachment
          ? { body: formData }
          : {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encodeFormData(formData),
            }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      form.reset();
      setAttachmentName("");
      setStatus("success");
      setStatusMessage("Thanks. Your message has been sent.");
    } catch {
      setStatus("error");
      setStatusMessage(
        `Something went wrong. Please email me directly at ${CONTACT_EMAIL}.`,
      );
    }
  };

  return (
    <SectionFrame
      id="contact"
      tone="cyan"
      className="py-20 md:py-24 px-6 lg:px-24"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.28 }}
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-10"
        >
          Let's create something{" "}
          <span className="text-indigo-500 italic">extraordinary</span>{" "}
          together.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.48, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
          className="w-full glass p-7 md:p-10 rounded-[32px] border border-white/10 backdrop-blur-[5%]"
        >
          <form
            name={CONTACT_FORM_NAME}
            action="/"
            method="POST"
            encType="multipart/form-data"
            data-netlify="true"
            netlify-honeypot="bot-field"
            data-netlify-honeypot="bot-field"
            className="grid grid-cols-1 gap-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
            <p className="sr-only">
              <label>
                Do not fill this out if you are human:
                <input name="bot-field" tabIndex={-1} />
              </label>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-[10px] uppercase tracking-widest text-white/40 ml-4"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Lê Thành Vinh"
                  autoComplete="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-[10px] uppercase tracking-widest text-white/40 ml-4"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder={CONTACT_EMAIL}
                  autoComplete="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="contact-message"
                className="text-[10px] uppercase tracking-widest text-white/40 ml-4"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your vision..."
                rows={4}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="contact-link"
                  className="text-[10px] uppercase tracking-widest text-white/40 ml-4"
                >
                  Link
                </label>
                <input
                  id="contact-link"
                  name="link"
                  type="url"
                  placeholder="https://..."
                  inputMode="url"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="contact-attachment"
                  className="text-[10px] uppercase tracking-widest text-white/40 ml-4"
                >
                  Attachment
                </label>
                <label className="w-full flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-left cursor-pointer hover:border-indigo-500 transition-colors">
                  <Paperclip size={18} className="shrink-0 text-indigo-300" />
                  <span className="min-w-0 flex-1 text-sm text-white/60 truncate">
                    {attachmentName || "PDF, PNG, JPG, JPEG up to 7MB"}
                  </span>
                  <input
                    id="contact-attachment"
                    name="attachment"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                    onChange={handleAttachmentChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            {statusMessage && (
              <div
                className={`flex items-center gap-3 rounded-2xl border px-5 py-4 text-left text-sm ${
                  status === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                    : "border-red-400/30 bg-red-400/10 text-red-100"
                }`}
                role="status"
                aria-live="polite"
              >
                {status === "success" ? (
                  <CheckCircle2 size={18} className="shrink-0" />
                ) : (
                  <AlertCircle size={18} className="shrink-0" />
                )}
                <span>{statusMessage}</span>
              </div>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 font-bold uppercase tracking-widest overflow-hidden transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "sending" ? "Sending..." : "Start a conversation"}
                {status === "sending" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </form>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-indigo-300"
          >
            <Mail size={16} />
            {CONTACT_EMAIL}
          </a>
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-8 mt-16">
          {[
            {
              Icon: Facebook,
              href: "https://www.facebook.com/MathewLeThanhVinh",
            },
            {
              Icon: Github,
              href: "https://github.com/lethanhvinh-dev?tab=repositories",
            },
            { Icon: Twitter, href: "#" },
            { Icon: Linkedin, href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.2, y: -5 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="p-4 glass rounded-full hover:text-indigo-400 transition-colors"
            >
              <social.Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
