import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react"

const skills: Array<[string, string[]]> = [
  ["01 / FRONTEND", ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]],
  ["02 / BACKEND & DATABASE", ["Node.js", "PHP", "MySQL", "PostgreSQL"]],
  ["03 / TOOLS & WORKFLOW", ["Git", "GitHub", "VS Code", "Vercel", "Figma"]],
]
const projects = [
  { no:"001", title:"E-Commerce Web Application", desc:"A responsive shopping experience with product discovery, cart management, and a streamlined checkout flow.", tags:["REACT", "NODE.JS", "MYSQL"] },
  { no:"002", title:"Campus Management System", desc:"A centralized platform for managing academic records, schedules, and campus administration workflows.", tags:["PHP", "LARAVEL", "BOOTSTRAP"] },
  { no:"003", title:"IoT Dashboard UI", desc:"A real-time monitoring interface translating connected device data into clear, actionable visual insights.", tags:["TAILWIND CSS", "JAVASCRIPT"] },
]

export default function Home() {
  return <main className="portfolio">
    <header className="topbar">
      <a className="brand mono" href="#top">M. FARHAN HUSEN // PORTFOLIO</a>
      <span className="status mono">AVAILABLE FOR WORK</span>
      <nav className="nav mono" aria-label="Main navigation"><a href="#about">ABOUT</a><a href="#skills">SKILLS</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT</a></nav>
    </header>
    <section className="hero" id="top">
      <div><div className="eyebrow mono">FRESH GRADUATE / 2024</div><h1>Muhammad<br />Farhan<br />Husen<span>.</span></h1></div>
      <div className="hero-copy"><p>Passionate IT Graduate specializing in Web Development, Software Engineering, and Technology Solutions.</p><div className="hero-actions"><a className="button button-solid" href="#projects">VIEW PROJECTS <ArrowUpRight size={15} /></a><a className="button" href="#contact"><Download size={15} /> DOWNLOAD CV</a></div></div>
    </section>
    <section className="section" id="about"><div className="section-head"><span className="section-label mono">SECTION 01</span><h2 className="section-title">A builder with<br />a practical mindset.</h2></div><div className="about-grid"><article className="about-card"><div className="card-kicker mono">EDUCATION / 2020—2024</div><h3>Universitas &apos;Aisyiyah Yogyakarta (UNISA)</h3><p>Bachelor of Information Technology</p></article><article className="about-card"><div className="card-kicker mono">PROFILE / INTRO</div><h3>Turning ideas into useful digital experiences.</h3><p>I&apos;m an Information Technology graduate with a strong interest in building clean, reliable web products and solving everyday problems through technology.</p></article></div></section>
    <section className="section" id="skills"><div className="section-head"><span className="section-label mono">SECTION 02</span><h2 className="section-title">The tools I<br />work with.</h2></div><div className="skills-grid">{skills.map(([title, items]) => <div className="skill-group" key={title}><h3 className="mono">{title}</h3><div className="skill-list">{items.map(item => <span className="skill mono" key={item}>{item}</span>)}</div></div>)}</div></section>
    <section className="section" id="projects"><div className="section-head"><span className="section-label mono">SECTION 03</span><h2 className="section-title">Selected<br />work.</h2></div><div className="projects">{projects.map(project => <article className="project" key={project.no}><div className="project-number mono"><span>PROJECT / {project.no}</span><ArrowUpRight size={15} /></div><h3>{project.title}</h3><p>{project.desc}</p><div className="project-tags">{project.tags.map(tag => <span className="project-tag mono" key={tag}>{tag}</span>)}</div><div className="project-links mono"><a href="#contact">LIVE DEMO ↗</a><a href="#contact">GITHUB ↗</a></div></article>)}</div></section>
    <section className="section contact" id="contact"><div><div className="eyebrow mono">SECTION 04 / LET&apos;S TALK</div><h2>Have a project<br />in mind?</h2></div><div className="contact-links mono"><a href="mailto:farhanhusen311@gmail.com"><span><Mail size={15} style={{verticalAlign:"middle",marginRight:8}} />EMAIL</span><span>↗</span></a><a href="https://linkedin.com/in/muhammad-farhan-husen-927242402?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><span><Linkedin size={15} style={{verticalAlign:"middle",marginRight:8}} />LINKEDIN</span><span>↗</span></a><a href="https://github.com/FarhanHusen" target="_blank" rel="noreferrer"><span><Github size={15} style={{verticalAlign:"middle",marginRight:8}} />GITHUB</span><span>↗</span></a></div></section>
    <footer className="footer mono"><span>© 2024 M. FARHAN HUSEN</span><span>DESIGNED WITH TASTE-SKILL AESTHETIC / 09:41:22</span></footer>
  </main>
}
