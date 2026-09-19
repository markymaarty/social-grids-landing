import type { CSSProperties } from "react";
const networks = [
  { name: "Instagram", short: "IG", plan: "Bundle", color: "#E1306C" },
  { name: "Facebook", short: "FB", plan: "Bundle", color: "#1877F2" },
  { name: "Yelp", short: "Yelp", plan: "Bundle", color: "#FF1A1A" },
  { name: "X", short: "X", plan: "All Social", color: "#E7E9EA" },
  { name: "YouTube", short: "YT", plan: "All Social", color: "#FF0000" },
];

export function Networks() {
  return (
    <section className="networks" id="networks">
      <div className="container">
        <div className="networks__header">
          <p className="eyebrow">Networks</p>
          <h2 className="section-title">One app. Five platforms.</h2>
          <p className="section-sub">
            Social Bundle covers Instagram, Facebook, and Yelp.
            All Social unlocks X and YouTube too.
          </p>
        </div>
        <ul className="networks__grid">
          {networks.map((n) => (
            <li key={n.name} className="network-card">
              <div
                className="network-card__icon"
                style={{ "--nc": n.color } as CSSProperties}
              >
                {n.short}
              </div>
              <div>
                <strong>{n.name}</strong>
                <span>{n.plan}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
