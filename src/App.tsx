import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    number: "01",
    name: "The Embered Plate",
    detail: "Charred seasonal vegetables · smoked herb oil",
    price: "₦18,500",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    tag: "A house favourite",
  },
  {
    number: "02",
    name: "Slow Sunday",
    detail: "Tender short rib · pomme purée · red wine jus",
    price: "₦26,000",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    tag: "Chef's selection",
  },
  {
    number: "03",
    name: "Golden Hour",
    detail: "Vanilla bean · warm caramel · toasted almond",
    price: "₦12,000",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85",
    tag: "Something sweet",
  },
];

function App() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.from(".nav", { y: -24, opacity: 0, duration: 0.8 })
        .from(".hero-kicker, .hero-title, .hero-copy, .hero-actions", {
          y: 32, opacity: 0, duration: 0.9, stagger: 0.12,
        }, "-=0.35")
        .from(".hero-image-wrap", { clipPath: "inset(12% 12% 12% 12%)", scale: 1.08, duration: 1.35 }, "-=0.9");

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 44,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".dish-card").forEach((element, index) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 0.85,
          delay: index * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={root} className="site-shell">
      <div className="announcement">
        <span>AN EXPERIENCE WORTH SITTING DOWN FOR</span>
        <span className="announcement-right">LAGOS · NIGERIA</span>
      </div>

      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Savore home">savore<span>.</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#menu" onClick={closeMenu}>The menu</a>
          <a href="#experience" onClick={closeMenu}>The experience</a>
          <a className="mobile-book" href="#reserve" onClick={closeMenu}>Book a table <ArrowUpRight size={15} /></a>
        </nav>
        <a className="nav-book" href="#reserve">Reserve a table <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow hero-kicker"><span className="eyebrow-line" /> GOOD FOOD. GOOD COMPANY. GREAT STORIES.</p>
            <h1 className="hero-title">A seat at<br />something <em>special.</em></h1>
            <p className="hero-copy">An honest love of good food, thoughtful details, and the kind of evenings you wish would last a little longer.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#reserve">Find your table <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#story">Discover Savore <ArrowRight size={15} /></a>
            </div>
            <div className="hero-note"><span className="note-star">✳</span><span>MADE FOR THE MOMENTS<br />THAT MATTER.</span></div>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=90" alt="Warmly lit fine dining table set for dinner" />
            <div className="image-caption"><span>01 / 03</span><span>THE ART OF GATHERING</span></div>
            <div className="hero-image-stamp">S<br />✳<br />V</div>
          </div>
          <a className="scroll-cue" href="#story"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="intro-section" id="story">
          <div className="section-index reveal">01 <span>—</span> THE SAVORE STORY</div>
          <div className="intro-grid">
            <h2 className="intro-heading reveal">More than a meal.<br /><em>A feeling.</em></h2>
            <div className="intro-copy reveal">
              <p>We believe the best things happen around a table. A second helping. An unexpected conversation. One more glass, because nobody's quite ready to leave.</p>
              <p>At Savore, every plate has a little intention behind it. Every detail has a reason. And there's always room for one more.</p>
              <a href="#experience" className="underlined-link">A little more about us <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="story-image reveal">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85" alt="Intimate restaurant interior with warm lighting" />
            <div className="story-image-label">COME AS YOU ARE. STAY A LITTLE LONGER.</div>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="menu-top">
            <div className="section-index reveal">02 <span>—</span> FROM OUR KITCHEN</div>
            <div className="menu-heading-row">
              <h2 className="section-heading reveal">A few things<br /><em>worth tasting.</em></h2>
              <p className="menu-intro reveal">Seasonal ingredients. Familiar comforts. A little curiosity on every plate.</p>
            </div>
          </div>
          <div className="dish-grid">
            {dishes.map((dish) => (
              <article className="dish-card" key={dish.number}>
                <div className="dish-image-wrap">
                  <img src={dish.image} alt={dish.name} />
                  <span className="dish-number">{dish.number}</span>
                </div>
                <div className="dish-meta"><span>{dish.tag}</span><span>{dish.price}</span></div>
                <h3>{dish.name}</h3>
                <p>{dish.detail}</p>
              </article>
            ))}
          </div>
          <div className="menu-footer reveal"><span>GOOD THINGS TAKE TIME. OUR MENU CHANGES WITH THE SEASONS.</span><a href="#reserve">Explore the menu <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-image">
            <img src="https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1600&q=85" alt="Chef preparing a carefully plated dish" />
          </div>
          <div className="experience-copy">
            <div className="section-index reveal">03 <span>—</span> THE EXPERIENCE</div>
            <h2 className="section-heading reveal">Come for dinner.<br /><em>Remember the evening.</em></h2>
            <p className="reveal">The first pour, the first bite, the easy conversation that turns into hours. We take the food seriously, but never ourselves.</p>
            <a className="button button-light reveal" href="#reserve">Make an evening of it <ArrowUpRight size={16} /></a>
            <span className="experience-aside">THOUGHTFULLY MADE<br />SINCERELY SERVED.</span>
          </div>
        </section>

        <section className="quote-section">
          <span className="quote-mark reveal">“</span>
          <blockquote className="reveal">The table is set.<br />The rest is <em>up to you.</em></blockquote>
          <span className="quote-credit reveal">YOUR EVENING, THE SAVORE WAY</span>
        </section>

        <section className="reserve-section" id="reserve">
          <div className="reserve-left">
            <div className="section-index reveal">04 <span>—</span> YOUR TABLE IS WAITING</div>
            <h2 className="reveal">Some plans<br />are worth <em>keeping.</em></h2>
          </div>
          <div className="reserve-right reveal">
            <p>Make room for a good meal and even better company. We'd love to have you.</p>
            <a className="button button-dark" href="mailto:hello@savore.example?subject=Table%20reservation">Request a reservation <ArrowUpRight size={16} /></a>
            <span>THURSDAY — SUNDAY · 12 PM — 10 PM</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top"><a className="wordmark footer-wordmark" href="#top">savore<span>.</span></a><span>GOOD TASTE. GOOD COMPANY.</span><a href="#top" className="back-top">BACK TO TOP ↑</a></div>
        <div className="footer-bottom"><span>© 2026 SAVORE RESTAURANT. A CREATIVE CONCEPT.</span><span>MADE WITH INTENTION.</span><div><a href="#story">INSTAGRAM</a><a href="#reserve">CONTACT</a></div></div>
      </footer>
    </div>
  );
}

export default App;