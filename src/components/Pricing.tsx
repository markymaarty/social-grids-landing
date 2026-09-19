import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Billing = "monthly" | "annual";

const ANNUAL_DISCOUNT = 0.2;

function price(monthly: number, billing: Billing): string {
  if (monthly === 0) return "$0";
  if (billing === "monthly") return `$${monthly.toFixed(2)}`;
  const annual = monthly * (1 - ANNUAL_DISCOUNT);
  return `$${annual.toFixed(2)}`;
}

const plans = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    blurb: "Get started and explore the grid experience.",
    features: ["Basic grid layout", "Limited posts", "Wix App Market install"],
    cta: "Get Free",
    recommended: false,
  },
  {
    id: "single",
    name: "Single",
    monthly: 6.99,
    blurb: "One network, fully styled. Ideal when you only need Instagram.",
    features: ["1 social network", "Premium layouts", "Hide profile & text", "Colors, fonts, dark mode"],
    cta: "Choose Single",
    recommended: false,
  },
  {
    id: "bundle",
    name: "Social Bundle",
    monthly: 12.99,
    blurb: "Instagram + Facebook + Yelp.",
    features: ["Instagram, Facebook, Yelp", "3-day free trial", "Load more & responsive", "All style controls"],
    cta: "Start 3-day trial",
    recommended: true,
  },
  {
    id: "all",
    name: "All Social",
    monthly: 19.99,
    blurb: "Everything in Bundle, plus X and YouTube.",
    features: ["All 5 networks", "3-day free trial", "Priority styling options", "Future single-app credits*"],
    cta: "Start 3-day trial",
    recommended: false,
  },
];

type Props = { reducedMotion: boolean };

export function Pricing({ reducedMotion }: Props) {
  const [billing, setBilling] = useState<Billing>("monthly");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".pricing-card", {
        y: 64, opacity: 0, scale: 0.96, stagger: 0.12, ease: "none",
        scrollTrigger: { trigger: section, start: "top 75%", end: "top 25%", scrub: true },
      });
    }, section);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section className="pricing" id="pricing" ref={sectionRef}>
      <div className="container">
        <div className="pricing__header">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">Simple plans. Premium grids.</h2>
          <p className="section-sub">Annual billing saves ~20%. Bundle and All Social include a 3-day trial.</p>
          <div className="billing-toggle" role="group" aria-label="Billing period">
            <button type="button" className={billing === "monthly" ? "is-active" : ""} onClick={() => setBilling("monthly")} aria-pressed={billing === "monthly"}>Monthly</button>
            <button type="button" className={billing === "annual" ? "is-active" : ""} onClick={() => setBilling("annual")} aria-pressed={billing === "annual"}>Annual<span className="billing-toggle__save">Save 20%</span></button>
          </div>
        </div>
        <div className="pricing__grid">
          {plans.map((plan) => (
            <article key={plan.id} className={`pricing-card ${plan.recommended ? "pricing-card--featured" : ""}`}>
              {plan.recommended && <span className="pricing-card__badge">Recommended</span>}
              <h3>{plan.name}</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">{price(plan.monthly, billing)}</span>
                {plan.monthly > 0 && <span className="pricing-card__period">/mo{billing === "annual" ? " billed annually" : ""}</span>}
              </div>
              <p className="pricing-card__blurb">{plan.blurb}</p>
              <ul className="pricing-card__features">{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a href="#final-cta" className={`btn ${plan.recommended ? "btn--primary" : "btn--outline"} pricing-card__cta`}>{plan.cta}</a>
            </article>
          ))}
        </div>
        <p className="pricing__footnote">* Single-platform apps coming later. Prices in USD. Install via Wix App Market.</p>
      </div>
    </section>
  );
}
