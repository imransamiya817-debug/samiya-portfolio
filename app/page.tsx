"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = ["SQL Server", "Python", "Tableau", "Data Analytics", "Business Intelligence", "ETL", "Dashboard Design", "Data Visualization", "Excel", "Problem Solving"];
const stats = [
  { value: "$80.9M", label: "Revenue" },
  { value: "293,569", label: "Orders" },
  { value: "12", label: "Business KPIs" },
  { value: "54.8%", label: "Late Delivery" },
];
const skillCards = ["SQL Server", "Python", "Tableau", "Excel", "ETL", "Data Cleaning", "Data Visualization", "Dashboard Design", "Business Intelligence"];
const dashboards = [
  { name: "Executive Dashboard", img: "/dashboard1_executive.png" },
  { name: "Delivery Performance Dashboard", img: "/dashboard2_delivery.png" },
  { name: "Product & Warehouse Dashboard", img: "/dashboard3_products.png" },
  { name: "Customer & Payment Dashboard", img: "/dashboard4_customer.png" },
];
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
const contactLinks = [
  { label: "Email", href: "mailto:imransamiya817@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/samiya-imrann" },
  { label: "GitHub", href: "https://github.com/imransamiya817-debug" },
  { label: "Contra", href: "https://contra.com/samiya_imran" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~013c103a5614352f28" },
  { label: "Resume", href: "/Samiya_Data_Analyst.pdf", download: true },
];

function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [value, setValue] = useState(0);
  return (
    <motion.span
      onViewportEnter={() => {
        let frame = 0;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(end * progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }}
    >
      {prefix}{value.toLocaleString()}{suffix}
    </motion.span>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-xs uppercase tracking-[0.35em] text-indigo-300/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-4 text-sm md:text-base text-slate-300/80 leading-7">{subtitle}</p>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const typedName = useMemo(() => "Samiya Imran", []);
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08090d] text-white selection:bg-indigo-400/30">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(37,99,235,0.16),_transparent_28%),linear-gradient(180deg,_#08090d_0%,_#07080b_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      <style jsx global>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee { animation: marquee 26s linear infinite; }
      `}</style>

      <section id="home" className="relative mx-auto max-w-7xl px-6 pt-8 pb-20 lg:pt-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
          <div className="text-sm tracking-[0.25em] text-slate-300">SAMIYA IMRAN</div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300/80">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">{link.label}</a>
            ))}
          </nav>
        </header>

        <div className="relative mt-12 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="relative"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="text-sm uppercase tracking-[0.35em] text-indigo-200/80"
            >
              Data Analyst
            </motion.p>

            <div className="mt-4 overflow-hidden">
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                className="text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl"
              >
                {typedName}
              </motion.h1>
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="mt-4 text-sm md:text-lg text-slate-300/90"
            >
              SQL Server • Python • Tableau
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300/80"
            >
              Turning Complex Data Into Clear Business Decisions.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] hover:bg-slate-100">View Projects</a>
              <a
                href="/Samiya_Data_Analyst.pdf"
                download
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:scale-[1.02] hover:bg-white/10"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="mt-10 overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl"
            >
              <div className="marquee whitespace-nowrap">
                {skills.concat(skills).map((item, idx) => (<span key={idx} className="mx-5 inline-flex items-center gap-5">{item}<span className="text-indigo-300/50">•</span></span>))}
              </div>
            </motion.div>
          </motion.div>

          <div className="relative min-h-[560px]">
            <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl" />
            {[
              { label: "Revenue", value: "$80.9M", pos: "right-6 top-8 w-56" },
              { label: "Orders", value: "293,569", pos: "left-6 top-36 w-56" },
              { label: "Late Delivery", value: "54.8%", pos: "right-10 bottom-28 w-60" },
              { label: "KPIs", value: "12", pos: "left-16 bottom-10 w-48" },
            ].map((card, idx) => (
              <motion.div
                key={card.label}
                className={`absolute ${card.pos} rounded-3xl border border-white/10 bg-[#0f1220]/80 p-4 shadow-xl`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.7 }}
              >
                <div className="text-xs text-slate-400">{card.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{card.value}</div>
              </motion.div>
            ))}
            <div className="absolute inset-8 rounded-[28px] border border-indigo-400/20 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="w-full rounded-[28px] border border-white/10 bg-[#0b0d14]/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between text-sm text-slate-400"><span>RetailPulse Executive Dashboard</span><span>Live snapshot</span></div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">{item.label}</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS — reframed as a client pitch: what this approach can do for a business,
          backed by the concrete RetailPulse results as proof. */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="What I Can Do For Your Business"
          title="Turn scattered order data into decisions worth acting on"
          subtitle="Late deliveries, thin margins hiding in your best-selling category, customers worth chasing — most businesses sit on this data without ever turning it into a clear next step. I take messy, multi-source data and turn it into a live dashboard your team can act on in days, not months."
        />
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-indigo-300/30 md:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold md:text-3xl">Proof: RetailPulse</h3>
            <span className="text-xs uppercase tracking-[0.3em] text-indigo-200/80">Supply Chain & Retail Analytics</span>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300/80">
            On a real 293,569-order dataset spanning three different data sources, this exact approach surfaced a
            54.8% late delivery rate, an $80.9M revenue picture, and a hidden margin problem — one category was
            driving 35% of hardware revenue at just 0.55% profit margin. That&apos;s the kind of clarity I bring
            to your numbers.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {stats.map((item) => (<div key={item.label} className="rounded-3xl border border-white/10 bg-[#0b0d14]/80 p-5"><div className="text-xs text-slate-400">{item.label}</div><div className="mt-2 text-3xl font-semibold">{item.value}</div></div>))}
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(59,130,246,0.08))] p-5">
            <div className="text-sm text-slate-300">Executive Dashboard preview</div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {dashboards.slice(0, 3).map((d) => (
                <div key={d.name} className="relative h-24 overflow-hidden rounded-2xl bg-black/25">
                  <Image src={d.img} alt={d.name} fill className="object-cover rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
          <a href="https://github.com/imransamiya817-debug/RetailPulse" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200">
            View the full project on GitHub →
          </a>
        </motion.article>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="About" title="Analytics with business context and visual clarity" subtitle="A premium, executive-ready portfolio structure for communicating impact, technical depth, and dashboard craftsmanship." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10">
              <Image src="/profile.jpg" alt="Samiya Imran" fill className="object-cover" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <p className="text-lg leading-8 text-slate-300/90">
              I&apos;m Samiya Imran, a Data Analyst passionate about transforming complex datasets into actionable
              business insights. I specialize in SQL Server, Python, and Tableau to build interactive dashboards,
              automate analysis, and solve real-world business problems. My flagship project, RetailPulse, analyzed
              over 293,000 retail orders and uncovered opportunities worth millions in operational improvements.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["SQL Server", "Python", "Tableau", "Business Intelligence", "Interactive Dashboards", "Data Analytics"].map((item) => (<div key={item} className="rounded-2xl border border-white/10 bg-[#0b0d14]/80 px-4 py-3 text-sm text-slate-200">{item}</div>))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Skills" title="Interactive tools and systems" subtitle="Glowing capability cards with a refined enterprise look." />
        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {skillCards.map((item) => (
            <motion.div
              key={item}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-lg font-medium text-white backdrop-blur-xl hover:border-indigo-300/30 hover:shadow-[0_0_0_1px_rgba(129,140,248,0.2)]"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Case Study" title="Four dashboard views for RetailPulse" subtitle="Responsive grid layout designed for elegant presentation of Tableau dashboard deliverables." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {dashboards.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:border-indigo-300/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-white/10 bg-black/20">
                <Image src={item.img} alt={item.name} fill className="object-cover rounded-2xl" />
              </div>
              <div className="mt-4 text-sm font-medium text-slate-200">{item.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Achievements" title="Numbers that show scale and impact" subtitle="Animated counters give the portfolio a premium, presentation-ready feel." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {[
            { end: 293569, label: "Orders Analyzed" },
            { end: 80, label: "Revenue", prefix: "$", suffix: ".9M" },
            { end: 12, label: "Business KPIs" },
            { end: 99224, label: "Customer Reviews" },
            { end: 76795, label: "Credit Card Transactions" },
          ].map((item) => (
            <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <div className="text-3xl font-semibold text-white"><Counter end={item.end} prefix={item.prefix} suffix={item.suffix} /></div>
              <div className="mt-2 text-sm text-slate-300/80">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Experience & Education" title="Foundations behind the analysis" subtitle="Formal training paired with hands-on, self-directed project work." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-indigo-200/80">2022 – 2025</div>
            <div className="mt-2 text-xl font-semibold">Bachelor of Computer Applications (BCA)</div>
            <div className="mt-1 text-sm text-slate-400">Maharshi Dayanand Saraswati University, Rajasthan</div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-indigo-200/80">Diploma</div>
            <div className="mt-2 text-xl font-semibold">Diploma in Data Analytics</div>
            <div className="mt-1 text-sm text-slate-400">Primezone, Vile Parle, Mumbai</div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 pb-32">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 backdrop-blur-2xl md:p-12">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s Build Better Decisions With Data.</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <footer className="mt-10 border-t border-white/10 pt-8 text-center text-4xl font-semibold tracking-[0.25em] text-white/90 md:text-7xl">LET&apos;S ANALYZE DATA</footer>
      </section>
    </main>
  );
}