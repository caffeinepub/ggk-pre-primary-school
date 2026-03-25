import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Puzzle,
  Shield,
  Star,
  Twitter,
  Users,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitForm } from "./hooks/useQueries";

// ─── Confetti Decorations ───────────────────────────────────────────────────
type DotSpec = {
  color: string;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity?: number;
};

const CONFETTI_A: DotSpec[] = [
  { color: "#F7D34A", size: 14, top: "10%", left: "5%" },
  { color: "#FF6B6B", size: 10, top: "30%", right: "4%" },
  { color: "#35B6B1", size: 18, bottom: "15%", left: "8%" },
  { color: "#4AA3FF", size: 12, top: "60%", right: "7%" },
  { color: "#6CC56A", size: 9, bottom: "30%", right: "12%" },
  { color: "#F7D34A", size: 7, top: "75%", left: "3%" },
];
const CONFETTI_B: DotSpec[] = [
  { color: "#4AA3FF", size: 16, top: "8%", right: "6%" },
  { color: "#F7D34A", size: 11, bottom: "20%", left: "5%" },
  { color: "#FF6B6B", size: 13, top: "50%", left: "2%" },
  { color: "#6CC56A", size: 8, bottom: "10%", right: "9%" },
];
const CONFETTI_C: DotSpec[] = [
  { color: "#35B6B1", size: 15, top: "15%", left: "7%" },
  { color: "#F7D34A", size: 12, bottom: "25%", right: "5%" },
  { color: "#FF6B6B", size: 9, top: "65%", left: "4%" },
];

function ConfettiDots({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  const dots =
    variant === "a" ? CONFETTI_A : variant === "b" ? CONFETTI_B : CONFETTI_C;
  return (
    <>
      {dots.map((d) => (
        <span
          key={`${d.color}-${d.size}-${d.top ?? d.bottom}-${d.left ?? d.right}`}
          className="absolute rounded-full pointer-events-none opacity-70"
          style={{
            backgroundColor: d.color,
            width: d.size,
            height: d.size,
            top: d.top,
            bottom: d.bottom,
            left: d.left,
            right: d.right,
          }}
        />
      ))}
    </>
  );
}

// ─── Top Utility Bar ────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div
      className="w-full text-white text-sm py-2 px-4"
      style={{ backgroundColor: "#32B6B6" }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <a
            href="tel:+919049411952"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Phone size={13} /> +91 9049411952
          </a>
          <a
            href="mailto:ggknetworkindia@gmail.com"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Mail size={13} /> ggknetworkindia@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            <Facebook size={15} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:opacity-80 transition-opacity"
          >
            <Twitter size={15} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Instagram size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Header / Nav ────────────────────────────────────────────────────────────
function DecorDots({ side }: { side: "left" | "right" }) {
  const items = [
    {
      key: "dot-orange",
      top: "10%",
      size: 14,
      color: "#F37A22",
      pos: "10%",
      star: null,
    },
    {
      key: "dot-teal",
      top: "35%",
      size: 10,
      color: "#32B6B6",
      pos: "28%",
      star: null,
    },
    {
      key: "dot-gold",
      top: "60%",
      size: 16,
      color: "#FFD700",
      pos: "46%",
      star: null,
    },
    {
      key: "dot-red",
      top: "80%",
      size: 8,
      color: "#FF6B6B",
      pos: "64%",
      star: null,
    },
    {
      key: "star-teal",
      top: "20%",
      size: 18,
      color: "#32B6B6",
      pos: "5%",
      star: "✦",
    },
    {
      key: "star-orange",
      top: "38%",
      size: 20,
      color: "#F37A22",
      pos: "20%",
      star: "★",
    },
    {
      key: "star-gold",
      top: "56%",
      size: 22,
      color: "#FFD700",
      pos: "35%",
      star: "✿",
    },
    {
      key: "star-red",
      top: "74%",
      size: 25,
      color: "#FF6B6B",
      pos: "50%",
      star: "❋",
    },
  ];
  return (
    <div className="relative flex-1 h-full overflow-hidden hidden md:block">
      {items.map((item) =>
        item.star ? (
          <span
            key={item.key}
            className="absolute opacity-60 select-none"
            style={{
              top: item.top,
              [side === "left" ? "left" : "right"]: item.pos,
              color: item.color,
              fontSize: item.size,
            }}
          >
            {item.star}
          </span>
        ) : (
          <span
            key={item.key}
            className="absolute rounded-full opacity-70"
            style={{
              top: item.top,
              [side === "left" ? "right" : "left"]: item.pos,
              width: item.size,
              height: item.size,
              backgroundColor: item.color,
            }}
          />
        ),
      )}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "About", "Programs", "Gallery", "Contact"];

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Desktop */}
      <div className="hidden md:block">
        {/* Logo row with decorations */}
        <div
          className="max-w-7xl mx-auto px-4 pt-4 pb-2 flex items-center"
          style={{ minHeight: 120 }}
        >
          <DecorDots side="left" />
          {/* Center: school name + logo */}
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <span
              className="font-extrabold tracking-widest text-sm uppercase"
              style={{ color: "#32B6B6", letterSpacing: "0.18em" }}
            >
              GGK PRE-PRIMARY SCHOOL
            </span>
            <img
              src="/assets/uploads/227b1a9f-ee70-451e-8fbc-cb649a356c15-019d2586-1e43-73d7-97c6-f4f0f39cb807-1.png"
              alt="GGK PRE-PRIMARY SCHOOL"
              className="h-28 object-contain"
            />
          </div>
          <DecorDots side="right" />
        </div>
        {/* Nav row */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  data-ocid={`nav.${link.toLowerCase()}.link`}
                  onClick={() => scrollTo(link)}
                  className="font-semibold text-gray-700 hover:text-[#32B6B6] transition-colors text-sm uppercase tracking-wide"
                >
                  {link}
                </button>
              ))}
            </nav>
            <Button
              type="button"
              data-ocid="nav.enroll_now.button"
              onClick={() => scrollTo("contact")}
              className="rounded-full font-bold px-6 text-sm"
              style={{ backgroundColor: "#F37A22", color: "white" }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex md:hidden items-center justify-between">
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/uploads/227b1a9f-ee70-451e-8fbc-cb649a356c15-019d2586-1e43-73d7-97c6-f4f0f39cb807-1.png"
            alt="GGK PRE-PRIMARY SCHOOL"
            className="h-16 object-contain"
          />
        </div>
        <button
          type="button"
          className="text-gray-700 flex-shrink-0"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          data-ocid="nav.menu.toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => scrollTo(link)}
              className="text-left font-semibold text-gray-700 hover:text-[#32B6B6] py-1"
            >
              {link}
            </button>
          ))}
          <Button
            type="button"
            onClick={() => scrollTo("contact")}
            className="rounded-full font-bold mt-2"
            style={{ backgroundColor: "#F37A22", color: "white" }}
          >
            Enroll Now
          </Button>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
const HERO_DOTS: DotSpec[] = [
  { color: "#F7D34A", size: 20, top: "12%", right: "20%", opacity: 0.7 },
  { color: "#FF6B6B", size: 14, bottom: "20%", right: "10%", opacity: 0.7 },
  { color: "#6CC56A", size: 18, top: "70%", right: "30%", opacity: 0.7 },
  { color: "#fff", size: 10, top: "30%", right: "35%", opacity: 0.5 },
];

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center"
      style={{
        background:
          "linear-gradient(135deg, #1a8f8f 0%, #32B6B6 40%, #4AA3FF 100%)",
      }}
    >
      <img
        src="/assets/generated/ggk-hero-banner.dim_1400x700.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_DOTS.map((d) => (
          <span
            key={`${d.color}-${d.top ?? d.bottom}-${d.right}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              backgroundColor: d.color,
              width: d.size,
              height: d.size,
              top: d.top,
              bottom: d.bottom,
              right: d.right,
              opacity: d.opacity ?? 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div
            className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#F37A22", color: "white" }}
          >
            🌟 Welcome to Our School Family
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Welcome to <span style={{ color: "#F7D34A" }}>GGK</span> PRE-PRIMARY
            SCHOOL
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            A safe and joyful place where children explore, learn, and grow.
            Nurturing curious minds with love, play, and discovery since 2017.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              type="button"
              data-ocid="hero.schedule_tour.button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full font-bold px-8 py-6 text-lg"
              style={{ backgroundColor: "#F37A22", color: "white" }}
            >
              Schedule a Tour
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full font-bold px-8 py-6 text-lg bg-white/10 border-white text-white hover:bg-white hover:text-[#32B6B6]"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: "#FFF7EA" }}
    >
      <ConfettiDots variant="a" />
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: "#32B6B6" }}
          >
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6 leading-tight">
            Nurturing Young Minds
            <br />
            <span style={{ color: "#F37A22" }}>Since 2017</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At GGK PRE-PRIMARY SCHOOL, we believe every child is a unique
            learner. Our nurturing environment blends play-based learning with
            structured activities designed to spark creativity, build
            confidence, and lay a strong academic foundation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            With over 9 years of experience, our qualified and passionate
            teachers work closely with families to ensure every child thrives —
            socially, emotionally, and academically.
          </p>
          <Button
            type="button"
            data-ocid="about.learn_more.button"
            onClick={() =>
              document
                .getElementById("programs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full font-bold px-8"
            style={{ backgroundColor: "#32B6B6", color: "white" }}
          >
            Explore Programs
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="animate-float">
            <img
              src="/assets/generated/ggk-kids-illustration.dim_600x500.png"
              alt="Happy children learning together"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>
          <div
            className="absolute -top-4 -right-4 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-lg"
            style={{ backgroundColor: "#32B6B6" }}
          >
            👶 100+
            <br />
            <span className="font-normal opacity-90">Happy Kids</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Programs Section ────────────────────────────────────────────────────────
const programs = [
  {
    emoji: "🍼",
    name: "Playgroup",
    age: "Ages 2–3",
    color: "#FF6B6B",
    bg: "#FFF0F0",
    desc: "Gentle introduction to group play, sensory exploration, and social interaction in a safe, loving environment.",
  },
  {
    emoji: "🎨",
    name: "Nursery",
    age: "Ages 3–4",
    color: "#F37A22",
    bg: "#FFF4EC",
    desc: "Building language, creativity, and early numeracy through stories, art, music, and guided play.",
  },
  {
    emoji: "📚",
    name: "Junior KG",
    age: "Ages 4–5",
    color: "#32B6B6",
    bg: "#E8FAFA",
    desc: "Developing reading readiness, number sense, and creative expression through structured activities.",
  },
  {
    emoji: "⭐",
    name: "Senior KG",
    age: "Ages 5–6",
    color: "#4AA3FF",
    bg: "#EDF5FF",
    desc: "Preparing children for primary school with phonics, maths, science exploration, and critical thinking skills.",
  },
];

function ProgramsSection() {
  return (
    <section
      id="programs"
      className="py-20"
      style={{ backgroundColor: "#FFF7EA" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: "#32B6B6" }}
          >
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Our Programs
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Thoughtfully designed programs for every stage of early childhood,
            from toddlers to young learners.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              data-ocid={`programs.item.${i + 1}`}
              className="rounded-3xl p-6 shadow-card hover:shadow-lg transition-shadow cursor-default"
              style={{ backgroundColor: prog.bg }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: `${prog.color}22` }}
              >
                {prog.emoji}
              </div>
              <h3
                className="font-black text-xl mb-1"
                style={{ color: prog.color }}
              >
                {prog.name}
              </h3>
              <p className="text-xs font-bold text-gray-400 mb-3">{prog.age}</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {prog.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery Section ─────────────────────────────────────────────────────────
const galleryItems = [
  { emoji: "🎨", label: "Art Class", color: "#FFD6CC" },
  { emoji: "📚", label: "Story Time", color: "#CCF0F0" },
  { emoji: "🌱", label: "Garden Club", color: "#CCEFCC" },
  { emoji: "🎵", label: "Music & Dance", color: "#FFE8CC" },
  { emoji: "⚽", label: "Sports Day", color: "#CCDDFF" },
  { emoji: "🔬", label: "Science Fun", color: "#FFCCEE" },
  { emoji: "🧩", label: "Puzzle Time", color: "#E8CCFF" },
  { emoji: "🍳", label: "Cooking Class", color: "#FFF4CC" },
  { emoji: "🎭", label: "Drama Play", color: "#CCF8E8" },
];

function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#DDF4F7" }}
    >
      <ConfettiDots variant="b" />
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: "#32B6B6" }}
          >
            Memories
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Our Gallery
          </h2>
          <p className="text-gray-500 mt-4">
            Snapshots of joy, learning, and growth at GGK.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              data-ocid={`gallery.item.${i + 1}`}
              className="rounded-2xl flex flex-col items-center justify-center gap-3 aspect-video cursor-default hover:scale-105 transition-transform"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-4xl">{item.emoji}</span>
              <span className="text-sm font-bold text-gray-700">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why GGK Section ─────────────────────────────────────────────────────────
const features = [
  {
    icon: <Users size={24} />,
    color: "#32B6B6",
    title: "Qualified Teachers",
    desc: "All our educators hold early childhood certifications and undergo continuous professional development.",
  },
  {
    icon: <Shield size={24} />,
    color: "#F37A22",
    title: "Safe Environment",
    desc: "CCTV-monitored premises, trained first-aid staff, and child-safe facilities for your peace of mind.",
  },
  {
    icon: <Puzzle size={24} />,
    color: "#4AA3FF",
    title: "Play-Based Learning",
    desc: "Research-backed curriculum that harnesses the power of play to build lifelong skills.",
  },
];

function WhyGGKSection() {
  return (
    <section id="why" className="py-20 bg-white relative overflow-hidden">
      {/* Large faint background blobs */}
      <div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "#32B6B6", opacity: 0.07 }}
      />
      <div
        className="absolute top-1/2 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "#F37A22", opacity: 0.06 }}
      />
      <div
        className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "#4AA3FF", opacity: 0.07 }}
      />

      {/* Confetti dots */}
      <ConfettiDots variant="a" />

      {/* Sparkle accents */}
      <span
        className="absolute top-8 right-12 text-2xl pointer-events-none"
        style={{ opacity: 0.18 }}
      >
        ✨
      </span>
      <span
        className="absolute top-16 left-1/4 text-xl pointer-events-none"
        style={{ opacity: 0.15 }}
      >
        ⭐
      </span>
      <span
        className="absolute bottom-12 right-1/4 text-2xl pointer-events-none"
        style={{ opacity: 0.18 }}
      >
        ✨
      </span>
      <span
        className="absolute bottom-8 left-16 text-xl pointer-events-none"
        style={{ opacity: 0.15 }}
      >
        ⭐
      </span>
      <span
        className="absolute top-1/2 left-8 text-lg pointer-events-none"
        style={{ opacity: 0.12 }}
      >
        ✨
      </span>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: "#32B6B6" }}
          >
            Our Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Why GGK? 🌟
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            We go above and beyond to ensure every child has the best start in
            life.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              data-ocid={`why.item.${i + 1}`}
              className="flex flex-col items-center text-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md"
                style={{ backgroundColor: feat.color }}
              >
                {feat.icon}
              </div>
              <h3 className="font-black text-lg text-gray-900">{feat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact / Enroll Section ────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const submitForm = useSubmitForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitForm.mutateAsync(form);
      toast.success("Thank you! We'll be in touch soon. 🎉");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#FFF7EA" }}
    >
      <ConfettiDots variant="c" />
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: "#32B6B6" }}
          >
            Enroll Today
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Get In Touch 👋
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Ready to join the GGK family? Fill in the form below and we'll get
            back to you shortly.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-card p-8 flex flex-col gap-5"
            data-ocid="contact.form"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-bold text-gray-700 mb-1 block"
                >
                  Full Name *
                </label>
                <Input
                  id="contact-name"
                  data-ocid="contact.name.input"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-bold text-gray-700 mb-1 block"
                >
                  Email *
                </label>
                <Input
                  id="contact-email"
                  data-ocid="contact.email.input"
                  type="email"
                  required
                  placeholder="jane@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="rounded-xl"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="text-sm font-bold text-gray-700 mb-1 block"
              >
                Phone Number
              </label>
              <Input
                id="contact-phone"
                data-ocid="contact.phone.input"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                className="rounded-xl"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="text-sm font-bold text-gray-700 mb-1 block"
              >
                Message *
              </label>
              <Textarea
                id="contact-message"
                data-ocid="contact.message.textarea"
                required
                placeholder="Tell us about your child and any questions you may have..."
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className="rounded-xl min-h-[120px] resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={submitForm.isPending}
              data-ocid="contact.submit.button"
              className="rounded-full font-bold py-6 text-base w-full"
              style={{ backgroundColor: "#F37A22", color: "white" }}
            >
              {submitForm.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Send Message 🚀"
              )}
            </Button>
          </motion.form>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: <Phone size={18} />,
                label: "Call Us",
                value: "+91 9049411952",
                color: "#32B6B6",
              },
              {
                icon: <Mail size={18} />,
                label: "Email Us",
                value: "ggknetworkindia@gmail.com",
                color: "#F37A22",
              },
              {
                icon: <MapPin size={18} />,
                label: "Visit Us",
                value: "SWAMINARAYAN MANDIR ROAD, DEOPUR, DHULE",
                color: "#4AA3FF",
              },
            ].map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-xs"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: info.color }}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold">
                    {info.label}
                  </div>
                  <div className="text-sm font-bold text-gray-700">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="relative" style={{ backgroundColor: "#CFE8C2" }}>
      <div className="w-full overflow-hidden" style={{ height: 60 }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <title>Decorative hills</title>
          <path
            d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1350,15 1440,30 L1440,60 L0,60 Z"
            fill="#5FA86B"
            opacity="0.4"
          />
          <path
            d="M0,40 C240,10 480,55 720,35 C960,15 1200,50 1440,40 L1440,60 L0,60 Z"
            fill="#5FA86B"
            opacity="0.25"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src="/assets/uploads/227b1a9f-ee70-451e-8fbc-cb649a356c15-019d2586-1e43-73d7-97c6-f4f0f39cb807-1.png"
                alt="GGK PRE-PRIMARY SCHOOL"
                className="h-14 object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nurturing young minds with love, play, and purpose since 2017.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#5FA86B" }}
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#5FA86B" }}
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#5FA86B" }}
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Programs", "Gallery", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById(link.toLowerCase())
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-sm text-gray-600 hover:text-[#32B6B6] transition-colors font-medium"
                      data-ocid={`footer.${link.toLowerCase()}.link`}
                    >
                      → {link}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-gray-800 mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "#32B6B6" }}
                />
                SWAMINARAYAN MANDIR ROAD, DEOPUR, DHULE
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={15} style={{ color: "#32B6B6" }} /> +91 9049411952
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={15} style={{ color: "#32B6B6" }} />{" "}
                ggknetworkindia@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={15} style={{ color: "#32B6B6" }} /> Mon–Fri: 7:30
                AM – 5:30 PM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-gray-800 mb-4">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Stay updated with school news, events, and tips for parents.
            </p>
            <div className="flex gap-2">
              <Input
                data-ocid="footer.newsletter.input"
                type="email"
                placeholder="your@email.com"
                className="rounded-full text-sm bg-white border-none flex-1"
              />
              <Button
                type="button"
                data-ocid="footer.newsletter.submit_button"
                className="rounded-full px-4 text-white flex-shrink-0"
                style={{ backgroundColor: "#5FA86B" }}
              >
                <Star size={14} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {year} GGK PRE-PRIMARY SCHOOL. All rights reserved.</span>
          <span>
            Built with{" "}
            <Heart size={11} className="inline text-red-400" fill="#f87171" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5FA86B] hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-nunito">
      <Toaster richColors position="top-right" />
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <GallerySection />
        <WhyGGKSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
