export function FinalCTA() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="container final-cta__inner">
        <h2>
          Ready for a grid that
          <em> actually looks premium?</em>
        </h2>
        <p>
          Install Social Grids from the Wix App Market. Start with a 3-day trial
          on Bundle or All Social.
        </p>
        <div className="final-cta__actions">
          <a href="#pricing" className="btn btn--primary btn--lg">
            Start 3-day trial
          </a>
          <a href="#features" className="btn btn--ghost btn--lg">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__mark" aria-hidden="true">
            <i /><i /><i /><i />
          </span>
          <strong>Social Grids</strong>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#networks">Networks</a>
        </nav>
        <p className="footer__copy">
          © {new Date().getFullYear()} Social Grids. A Wix App Market product.
        </p>
      </div>
    </footer>
  );
}
