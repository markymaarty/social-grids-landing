import { useState } from "react";

const faqs = [
  {
    q: "How do I install Social Grids on my Wix site?",
    a: "Open the Wix App Market, search for Social Grids, and add it to your site. Drop the widget onto any page, connect your networks, and customize the grid — no code required.",
  },
  {
    q: "What's included in the 3-day trial?",
    a: "Social Bundle and All Social both include a 3-day trial so you can style layouts, hide chrome, try dark mode, and see Load More on your live site before you commit.",
  },
  {
    q: "What's the difference between Social Bundle and All Social?",
    a: "Social Bundle includes Instagram, Facebook, and Yelp. All Social adds X and YouTube — ideal if your brand publishes across every major network.",
  },
  {
    q: "Will there be cheaper single-platform apps?",
    a: "Yes. We're planning separate single-network apps at a lower price for sites that only need one platform. Single is available now as a starting point.",
  },
  {
    q: "Does it work on mobile and tablet?",
    a: "Absolutely. Grids are built mobile-first and adapt cleanly across phone, tablet, and desktop breakpoints.",
  },
  {
    q: "Can I hide the profile header and captions?",
    a: "Yes. Toggle profile chrome and text off for a pure photo wall that matches your site's design language.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <div className="faq__intro">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Questions, answered.</h2>
        </div>
        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`faq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="faq__a" role="region" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
