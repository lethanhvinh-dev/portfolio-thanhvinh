import { motion } from "motion/react";
import { Facebook, Github, Linkedin, Send, Twitter } from "lucide-react";
import SectionFrame from "./SectionFrame";

export default function Contact() {
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
            className="grid grid-cols-1 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Thành Vinh"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@thanhvinh.dev"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">
                Message
              </label>
              <textarea
                placeholder="Tell me about your vision..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>
            <button className="group relative w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 font-bold uppercase tracking-widest overflow-hidden transition-transform active:scale-95">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start a conversation <Send size={18} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </form>
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-8 mt-16">
          {[
            { Icon: Facebook, href: "https://www.facebook.com/MathewLeThanhVinh" },
            { Icon: Github, href: "https://github.com/lethanhvinh-dev?tab=repositories" },
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
