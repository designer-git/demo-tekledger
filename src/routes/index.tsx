import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Database,
  BarChart3,
  FileText,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TekLedger — Data. Clarity. Strategy." },
      {
        name: "description",
        content:
          "Turn enterprise IT spend into board-ready decisions. Connect SaaS, cloud, telecom and vendor invoices into one clear view.",
      },
      { property: "og:title", content: "TekLedger — Data. Clarity. Strategy." },
      {
        property: "og:description",
        content:
          "Benchmark spend, identify savings, surface risks, and produce board-ready analysis in hours—not weeks.",
      },
    ],
  }),
  component: Index,
});

function Nav({ darkMode, toggleTheme }: { darkMode: boolean; toggleTheme: () => void }) {
  const links = ["Platform", "Solutions", "Use Cases", "Partners", "Trust", "About"];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            alt="TekLedger"
            className="w-9 h-9 shrink-0 rounded-lg transition-transform duration-300 group-hover:scale-105"
            src="https://www.tekledger.ai/logo-lux-white.png"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">TekLedger Test</div>
            <div className="text-[10px] tracking-[0.18em]  text-cyan">
              DATA <span className="text-cyan">|</span> CLARITY <span className="text-cyan">|</span>{" "}
              STRATEGY
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-white transition hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* Theme Switch */}
          <button
            onClick={toggleTheme}
            className="flex items-center h-9 w-9 gap-2 rounded-full border border-white/20 px-2 py-1 text-sm text-white transition hover:bg-white/10"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            {darkMode ? "" : ""}
          </button>

          <a href="#" className="hidden text-sm text-white hover:text-foreground md:inline">
            Sample Report
          </a>
          <a
            href="#contact"
            className="rounded-full bg-cyan px-5 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}

function MockReport() {
  return (
    <div className="rounded-xl border border-border bg-card/80 p-4 shadow-xl backdrop-blur">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          TEKLEDGER — IT SPEND SUMMARY
        </div>

        <div className="text-[10px] text-muted-foreground">Q3 2024 · Confidential</div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          {
            label: "Total IT Spend",
            value: "$14.2M",
            sub: "4.3% revenue",
            color: "text-cyan",
          },
          {
            label: "Savings",
            value: "$2.1M",
            sub: "3 opportunities",
            color: "text-emerald",
          },
          {
            label: "Risk",
            value: "2 vendors",
            sub: "Q4 exposure",
            color: "text-amber",
          },
        ].map((s) => (
          <div key={s.label} className="rounded-md border border-border bg-background/40 p-2.5">
            <div className="text-[9px] uppercase tracking-wide text-muted-foreground">
              {s.label}
            </div>

            <div className="mt-1 text-lg font-semibold">{s.value}</div>

            <div className={`text-[10px] ${s.color}`}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          Spend Allocation
        </div>

        <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-background/40">
          <div className="bg-cyan" style={{ width: "38%" }} />
          <div className="bg-emerald" style={{ width: "27%" }} />
          <div className="bg-amber" style={{ width: "18%" }} />
          <div className="bg-rose" style={{ width: "17%" }} />
        </div>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-muted-foreground">
          {[
            ["SaaS", "38%", "bg-cyan"],
            ["Cloud", "27%", "bg-emerald"],
            ["Telecom", "18%", "bg-amber"],
            ["Vendors", "17%", "bg-rose"],
          ].map(([n, v, c]) => (
            <span key={n} className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${c}`} />
              {n} <span className="text-foreground">{v}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          Vendor Risk & Renewals
        </div>

        <table className="mt-2 w-full text-[10px]">
          <thead className="text-muted-foreground">
            <tr className="border-b border-border">
              <th className="py-1.5 text-left font-normal">Vendor</th>
              <th className="py-1.5 text-left font-normal">Category</th>
              <th className="py-1.5 text-right font-normal">Spend</th>
              <th className="py-1.5 text-center font-normal">Risk</th>
              <th className="py-1.5 text-right font-normal">Renewal</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Microsoft 365", "SaaS", "$1.2M", "Low", "Q1 2025", "emerald"],
              ["AWS", "Cloud", "$2.1M", "Medium", "Q4 2024", "amber"],
              ["Salesforce", "SaaS", "$840K", "High", "Q4 2024", "rose"],
            ].map(([v, c, s, r, dt, color]) => (
              <tr key={v} className="border-b border-border/50 last:border-0">
                <td className="py-2 font-medium">{v}</td>

                <td className="py-2 text-muted-foreground">{c}</td>

                <td className="py-2 text-right">{s}</td>

                <td className="py-2 text-center">
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px]`}
                    style={{
                      backgroundColor: `color-mix(in oklab, var(--${color}) 18%, transparent)`,
                      color: `var(--${color})`,
                    }}
                  >
                    {r}
                  </span>
                </td>

                <td className="py-2 text-right text-muted-foreground">{dt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <div className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          Board Recommendations
        </div>

        <ul className="mt-2 space-y-1.5 text-[10px]">
          {[
            "Consolidate PM tools — $420K savings",
            "Renegotiate Salesforce before renewal",
            "Review cloud RI utilization",
          ].map((r) => (
            <li key={r} className="flex items-start gap-1.5">
              <Check className="mt-0.5 h-3 w-3 shrink-0 text-cyan" />
              <span className="text-muted-foreground">{r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 border-t border-border pt-2 text-[9px] text-muted-foreground">
        Sample output — illustrative only.
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-cyan/5 blur-3xl" />
      </div> */}
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:py-16 ">
        <div className="flex h-full flex-col justify-center">
          <div className="text-xs font-medium tracking-[0.22em] text-cyan">DATA · STRATEGY</div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Turn enterprise IT <br></br>spend into board-<br></br>ready decisions
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Connect fragmented SaaS, cloud, telecom, and vendor invoices into one view. Benchmark
            spend, identify savings, surface risks, and produce board-ready analysis in hours—not
            weeks.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Request Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#use-case"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition hover:bg-card"
            >
              Explore Board Reporting <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="lg:pl-8">
          <MockReport />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "1",
      icon: Database,
      title: "Ingest Messy Data",
      body: "Spreadsheets, invoices, vendor data from finance, SaaS, cloud, and IT systems.",
    },
    {
      n: "2",
      icon: BarChart3,
      title: "Analyze, Categorize, Benchmark",
      body: "Vendors classified, spend compared to peers, savings and risks identified.",
    },
    {
      n: "3",
      icon: FileText,
      title: "Generate Strategy",
      body: "Prioritized actions and board-ready narratives, no slide-building required.",
    },
  ];
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Top Label */}
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-zinc-500">HOW IT WORKS</p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-14 md:grid-cols-3">
          {steps.map(({ n, title, body }) => (
            <div key={n} className="relative">
              {/* Number */}
              <div className="text-3xl font-semibold tracking-tight text-cyan-400">{n}</div>

              {/* Title */}
              <h3 className="mt-5 text-[15px] font-semibold leading-snug text-white">{title}</h3>

              {/* Description */}
              <p className="mt-3 max-w-sm text-[13px] leading-6 text-zinc-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecValue() {
  const roles = [
    {
      title: "CIOs",
      body: "Application portfolio analysis, vendor consolidation, architecture visibility, board narratives.",
    },
    {
      title: "CFOs",
      body: "IT cost allocation, budget variance analysis, ROI context, technology investment justification.",
    },
    {
      title: "Executive teams",
      body: "Technology risk assessment, strategic allocation, competitive benchmarking, board reporting.",
    },
  ];
  return (
    <section className="border-b border-white/5  py-28 text-white">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Label */}
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.35em] text-zinc-500">EXECUTIVE VALUE</p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {roles.map((r) => (
            <div
              key={r.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.04]"
            >
              {/* Title */}
              <h3 className="text-[15px] font-semibold tracking-tight text-white">{r.title}</h3>

              {/* Body */}
              <p className="mt-3 text-[13px] leading-6 text-zinc-500">{r.body}</p>

              {/* Link */}
              <a
                href="#"
                className="mt-5 inline-flex items-center text-[12px] gap-2 text-sm font-medium text-cyan-400 transition group-hover:translate-x-1"
              >
                Details
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipUseCase() {
  return (
    <section id="use-case" className="border-b border-border py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="text-xs font-medium tracking-[0.22em] text-cyan">FLAGSHIP USE CASE</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Board Reporting</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A unified CIO/CFO technology summary your executive committee can read in
            minutes—covering total spend, savings opportunities, vendor risk, and shadow IT
            exposure.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Consolidate project management tools (est. $420K annual savings)",
              "Address Shadow IT usage — 12 unmanaged tools identified across teams",
              "Renegotiate cloud contract ahead of Q4 renewal",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 text-sm text-cyan hover:underline"
          >
            More on board reporting <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            CIO/CFO Technology Summary
          </div>
          <div className="mt-1 text-xl font-semibold">Board Review — Q3 2024</div>
          <div className="mt-1 text-xs text-muted-foreground">Prepared for Executive Committee</div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Total technology spend of <span className="text-foreground">$14.2M</span> represents
            4.3% of revenue, in line with industry median. Three optimization opportunities
            identified totaling <span className="text-foreground">$2.1M</span> in potential savings.
            Two vendor contracts flagged for renewal risk in Q4.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["Total IT Spend", "$14.2M", "4.3% of revenue", "cyan"],
              ["Identified Savings", "$2.1M", "3 initiatives", "emerald"],
              ["Vendor Risk", "Medium", "2 renewals flagged", "amber"],
              ["Shadow IT Exposure", "12 apps", "Unmanaged tools identified", "rose"],
            ].map(([l, v, s, c]) => (
              <div key={l} className="rounded-lg border border-border bg-background/40 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {l}
                </div>
                <div className="mt-1 text-lg font-semibold">{v}</div>
                <div className="mt-1 text-[11px]" style={{ color: `var(--${c})` }}>
                  {s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <div className="text-xs font-medium tracking-[0.22em] text-cyan">SECURITY</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Built for sensitive financial data
          </h2>
          <p className="mt-6 text-muted-foreground">
            Data encrypted in transit and at rest. NDA-ready. Documentation available for security
            review.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-sm text-cyan hover:underline"
          >
            Security details <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <ShieldCheck className="h-8 w-8 text-cyan" />
          <h3 className="mt-6 text-xl font-semibold">Why I built TekLedger</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            For two decades as a CIO and entrepreneur, I spent countless hours reconciling IT
            invoices with Finance. My vision is simple: when CIO and CFO teams share a unified view
            of technology spend, reconciliation becomes strategic alignment.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          See your IT spend the way your board should
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Book a 30-minute walkthrough. We'll show you a sample analysis built from real enterprise
          data patterns.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Book a Demo <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm transition hover:bg-card"
          >
            View Sample Report
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card">
            <span className="font-mono text-xs font-bold text-cyan">TL</span>
          </div>
          <div>
            <div className="text-sm font-semibold">TekLedger</div>
            <div className="text-[10px] tracking-[0.18em] text-muted-foreground">
              DATA <span className="text-cyan">|</span> CLARITY <span className="text-cyan">|</span>{" "}
              STRATEGY
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TekLedger. All figures illustrative.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  const updateTheme = (isDark: boolean) => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    updateTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-background">
      <Nav darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <HowItWorks />
      <ExecValue />
      <FlagshipUseCase />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}
