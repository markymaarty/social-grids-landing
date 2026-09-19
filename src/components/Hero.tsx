import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tiles = [
  { hue: "ig", label: "IG" },
  { hue: "fb", label: "FB" },
  { hue: "yelp", label: "Yelp" },
  { hue: "x", label: "X" },
  { hue: "yt", label: "YT" },
  { hue: "ig2", label: "IG" },
  { hue: "fb2", label: "FB" },
  { hue: "yelp2", label: "Yelp" },
  { hue: "ig3", label: "IG" },
];

type Props = { reducedMotion: boolean };

export function Hero({ reducedMotion }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reducedMotion) {
      gsap.set([".hero__line", ".hero__sub", ".hero__ctas", ".hero__visual"], {
        opacity: 1,
        y: 0,
        clearProps: "transform",
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.fromTo(
        ".hero__line",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.1,
        }
      );
      gsap.fromTo(
        ".hero__sub",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.45 }
      );
      gsap.fromTo(
        ".hero__ctas",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.6 }
      );
      gsap.fromTo(
        ".hero__visual",
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.35,
        }
      );

      tl.to(".hero__line", { y: -36, opacity: 0.15, stagger: 0.04 }, 0)
        .to(".hero__sub, .hero__ctas", { y: -24, opacity: 0 }, 0)
        .to(
          ".hero__visual",
          { scale: 1.08, y: -40, rotateX: 6, filter: "brightness(1.08)" },
          0
        )
        .to(".hero__tile", { y: (i) => (i % 2 === 0 ? -28 : 28), stagger: 0.03 }, 0)
        .to(".hero__chrome", { opacity: 0, y: -16 }, 0.15);
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__line">Wix App Market · Social Bundle</p>
          <h1 className="hero__title" ref={titleRef}>
            <span className="hero__line">Premium photo grids</span>
            <span className="hero__line hero__line--accent">
              for every network
            </span>
            <span className="hero__line">your brand lives on.</span>
          </h1>
          <p className="hero__sub">
            Instagram, Facebook, Yelp — plus X and YouTube on All Social.
            Hide profile chrome, tune colors & fonts, dark mode, and load more —
            all responsive on mobile and tablet.
          </p>
          <div className="hero__ctas">
            <a href="#pricing" className="btn btn--primary btn--lg">
              Start 3-day trial
            </a>
            <a href="#pricing" className="btn btn--ghost btn--lg">
              See plans
            </a>
          </div>
        </div>

        <div className="hero__visual" ref={visualRef}>
          <div className="hero__frame">
            <div className="hero__chrome">
              <div className="hero__avatar" />
              <div className="hero__meta">
                <span className="hero__handle">@yourbrand</span>
                <span className="hero__stats">1.2k posts · Multi-network</span>
              </div>
              <div className="hero__badges">
                <span>IG</span>
                <span>FB</span>
                <span>Yelp</span>
              </div>
            </div>
            <div className="hero__grid-demo">
              {tiles.map((t, i) => (
                <div
                  key={i}
                  className={`hero__tile hero__tile--${t.hue}`}
                  data-label={t.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
