import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  ChefHat,
  ChevronDown,
  Download,
  Flame,
  Globe2,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

const profileImage = "/manus-storage/carlo-chef-professional-kitchen_a3bcf774.png";

const experiences = [
  {
    years: "NOV 2024 — AUG 2026",
    role: "Sous Chef / Sushi",
    company: "Radical / Dar Al Abbar Company",
    accent: "sushi",
    points: [
      <>Led end-to-end development and execution of specialized sushi bar and restaurant menus, focusing on high-quality sashimi, maki rolls, and traditional Japanese dishes while optimizing procurement to reduce food costs by <strong>15%</strong>.</>,
      <>Directed daily kitchen preparation and enforced rigorous international food safety and hygiene standards, maintaining a <strong>100% health-inspection pass rate</strong> throughout the tenure.</>,
    ],
  },
  {
    years: "OCT 2022 — NOV 2024",
    role: "Italian Sous Chef",
    company: "United Foods Company",
    accent: "pastry",
    points: [
      <>Managed pastry-section operations, creating signature desserts and confections while training assistant chefs to increase overall production efficiency by <strong>25%</strong>.</>,
      <>Consulted with high-profile clients to design custom pastry orders for large-scale events and maintained a <strong>98% customer satisfaction rating</strong>.</>,
      <>Integrated gluten-free and dietary-restricted options and reduced kitchen waste by <strong>12%</strong> through precise inventory management.</>,
    ],
  },
  {
    years: "SEP 2019 — SEP 2022",
    role: "Chef de Partie",
    company: "Business Facilities Company",
    accent: "japanese",
    points: [
      <>Selected premium fresh ingredients for traditional Japanese appetizers and soups, and introduced contemporary recipes such as sushi burgers that contributed to a <strong>10% increase in sushi bar revenue</strong>.</>,
      <>Coordinated with wait staff on customer requests and food allergies, ensuring dietary safety while sustaining high-speed kitchen output during peak hours.</>,
    ],
  },
];

const skills = [
  "Japanese Cuisine",
  "Sashimi, Sushi & Maki",
  "Italian Cuisine & Pastry Arts",
  "Menu Development & Cost Control",
  "Kitchen Management & Team Training",
  "Food Safety (HACCP)",
  "Inventory & Supply Chain",
  "Gluten-Free Preparation",
  "High-Volume Operations",
];

const credentials = [
  "National Certificate II in Fundamental Cookery",
  "National Certificate II in Pastry and Bakery",
  "National Certificate I in Ship Catering",
  "STCW Maritime Course",
  "Proficiency in Fire Rescue Boats",
  "Safety Officer Awareness Certification",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Carlo Corro home">
          <span className="brand-mark"><ChefHat size={18} strokeWidth={1.8} /></span>
          <span><b>CC</b><em>culinary portfolio</em></span>
        </a>
        <nav className={menuOpen ? "main-nav main-nav-open" : "main-nav"} aria-label="Primary navigation">
          <button onClick={() => handleNav("about")}>Profile</button>
          <button onClick={() => handleNav("experience")}>Experience</button>
          <button onClick={() => handleNav("skills")}>Expertise</button>
          <button onClick={() => handleNav("contact")}>Contact</button>
        </nav>
        <a className="nav-cta" href="mailto:carlocorro0620@gmail.com">Let's connect <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Italian / Japanese cuisine chef</p>
            <h1>Precision.<br /><i>Passion.</i><br />Plated.</h1>
            <p className="hero-lede">A versatile culinary professional shaping memorable menus, disciplined kitchens, and elevated guest experiences across Japanese, Italian, sushi, and pastry disciplines.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => handleNav("experience")}>Explore my work <ArrowUpRight size={17} /></button>
              <a className="button button-outline" href="/manus-storage/Carlo_Corro_CV_Photo_Free_Portfolio_QR_cd1d7bdb.pdf" target="_blank" rel="noreferrer"><Download size={16} /> Download CV</a>
              <a className="text-link" href="mailto:carlocorro0620@gmail.com">Available for opportunities <span>↗</span></a>
            </div>
          </div>
          <div className="hero-portrait-wrap reveal reveal-delay">
            <div className="portrait-frame">
              <img src={profileImage} alt="Carlo Crisanto Corro in professional attire" />
            </div>
            <div className="portrait-caption"><span>CARLO CRISANTO CORRO</span><b>Chef / Kitchen Leader</b></div>
            <div className="portrait-stamp"><Flame size={19} /><span>crafted<br />with intent</span></div>
          </div>
          <div className="hero-footer-note"><span>01</span><div /><span>SCROLL TO DISCOVER</span><ChevronDown size={15} /></div>
        </section>

        <section className="impact-band" id="about">
          <div className="section-kicker light-kicker">A career built on craft</div>
          <div className="impact-intro"><h2>Good kitchens are<br /><i>designed,</i> not improvised.</h2><p>Approximately seven years across international hospitality environments, bringing together culinary technique, operational calm, and a sharp eye for quality.</p></div>
          <div className="impact-grid">
            <div className="impact-card"><span>01</span><strong>7+</strong><small>YEARS IN PROFESSIONAL KITCHENS</small></div>
            <div className="impact-card featured-impact"><span>02</span><strong>15%</strong><small>FOOD-COST REDUCTION</small></div>
            <div className="impact-card"><span>03</span><strong>100%</strong><small>HEALTH-INSPECTION PASS RATE</small></div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading"><div><div className="section-kicker">Career history</div><h2>Kitchen leadership<br /><i>in action.</i></h2></div><p>From sushi bars to pastry sections, every role has strengthened the same point of view: great food depends on great systems.</p></div>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className="experience-item" key={item.role}>
                <div className={`experience-number ${item.accent}`}>0{index + 1}</div>
                <div className="experience-main"><p className="experience-date">{item.years}</p><h3>{item.role}</h3><p className="experience-company">{item.company}</p></div>
                <div className="experience-points">{item.points.map((point, pointIndex) => <p key={pointIndex}><span>↳</span>{point}</p>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="food-gallery-section" id="food-gallery">
          <div className="section-wrap">
            <div className="section-heading gallery-heading"><div><div className="section-kicker">Signature direction</div><h2>Italian warmth.<br /><i>Japanese precision.</i></h2></div><p>A visual taste of the cuisines and pastry disciplines that shape Carlo's kitchen point of view — presented with clarity, restraint, and respect for the ingredient.</p></div>
            <div className="food-gallery-grid">
              <article className="food-card food-card-large"><img src="/manus-storage/italian-signature-pasta_ecae8959.jpg" alt="Handmade Italian pasta with tomato, basil, and parmesan" /><div className="food-card-overlay"><span>01 / ITALIAN</span><h3>Handmade pasta<br /><i>with intent.</i></h3></div></article>
              <article className="food-card"><img src="/manus-storage/japanese-sushi-omakase_d72bcd29.jpg" alt="Japanese sushi omakase with sashimi and maki rolls" /><div className="food-card-overlay"><span>02 / JAPANESE</span><h3>Sushi, sashimi<br /><i>and balance.</i></h3></div></article>
              <article className="food-card"><img src="/manus-storage/pastry-detail_3491204b.jpg" alt="Elegant pastry and fruit tart composition" /><div className="food-card-overlay"><span>03 / PASTRY</span><h3>Details that<br /><i>stay with you.</i></h3></div></article>
            </div>
          </div>
        </section>

        <section className="expertise-section" id="skills">
          <div className="section-wrap expertise-grid">
            <div><div className="section-kicker">The disciplines</div><h2>Built for the<br /><i>whole kitchen.</i></h2><p className="expertise-copy">A working range that moves from the precision of sashimi to the warmth of pastry — supported by food safety, cost control, and team development.</p><div className="tag-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
            <div className="language-panel"><div className="language-label">LANGUAGES</div><div className="language-row"><span>English</span><b>Fluent</b></div><div className="language-row"><span>Tagalog</span><b>Native</b></div><div className="language-row"><span>Japanese</span><b>Basic culinary terminology</b></div><div className="tool-list"><p>Tools & technologies</p><span>Kitchen management systems</span><span>Inventory tracking software</span><span>Microsoft Office Suite</span><span>Point of Sale (POS) systems integration</span></div></div>
          </div>
        </section>

        <section className="credentials-section section-wrap">
          <div className="section-heading credential-heading"><div><div className="section-kicker">Credentials & foundation</div><h2>Prepared for<br /><i>high standards.</i></h2></div><Award className="award-icon" size={42} strokeWidth={1.2} /></div>
          <div className="credentials-grid"><div className="education-card"><span className="card-label">EDUCATION</span><h3>Bachelor of Arts in Theology</h3><p>Words of Life Theological Seminary College</p><span className="card-year">2008 — 2012</span><small>Successfully completed a four-year graduate program focusing on theological studies and leadership.</small></div><div className="credential-list">{credentials.map((credential, index) => <div className="credential-row" key={credential}><span>0{index + 1}</span><p>{credential}</p><ArrowUpRight size={16} /></div>)}</div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner"><div className="section-kicker light-kicker">The next service</div><h2>Let's create something<br /><i>worth remembering.</i></h2><p>For culinary leadership, sushi, Italian cuisine, pastry, and high-volume hospitality opportunities.</p><div className="contact-actions"><a className="button button-light" href="mailto:carlocorro0620@gmail.com">Email Carlo <Mail size={17} /></a><a className="contact-detail" href="tel:+966569819245"><Phone size={16} />+966 56 981 9245</a></div></div><div className="contact-side"><Globe2 size={33} strokeWidth={1.2} /><span>Based in<br /><b>Binangonan, Rizal</b></span><small>Open to international hospitality opportunities</small></div>
        </section>
      </main>
      <footer className="footer"><span>© 2026 Carlo Crisanto Corro</span><span>Italian / Japanese Cuisine Chef</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
