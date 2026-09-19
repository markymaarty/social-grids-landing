const logos = [
  "Studio North",
  "Harbor & Co.",
  "Lumen Labs",
  "Pine & Press",
  "Atlas Retail",
  "Velvet Room",
];

export function SocialProof() {
  return (
    <section className="proof" aria-label="Social proof">
      <div className="container proof__inner">
        <p className="proof__label">Built for Wix sites</p>
        <div className="proof__logos">
          {logos.map((name) => (
            <div key={name} className="proof__logo" aria-hidden="true">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
