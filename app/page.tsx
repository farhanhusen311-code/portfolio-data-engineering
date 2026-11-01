"use client"

import { useState } from "react"
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react"

type Language = "EN" | "ID"
type Category = "ALL" | "WEB DEV" | "SOFTWARE & SYSTEMS" | "UI/UX & IOT"

const skills: Array<[string, string[]]> = [
  ["01 / FRONTEND", ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]],
  ["02 / BACKEND & DATABASE", ["Node.js", "PHP", "MySQL", "PostgreSQL"]],
  ["03 / TOOLS & WORKFLOW", ["Git", "GitHub", "VS Code", "Vercel", "Figma"]],
]
const projects = [
  { no: "001", category: "WEB DEV" as Category, title: "E-Commerce Web Application", desc: "A responsive shopping experience with product discovery, cart management, and a streamlined checkout flow.", tags: ["REACT", "NODE.JS", "MYSQL"] },
  { no: "002", category: "SOFTWARE & SYSTEMS" as Category, title: "Campus Management System", desc: "A centralized platform for managing academic records, schedules, and campus administration workflows.", tags: ["PHP", "LARAVEL", "BOOTSTRAP"] },
  { no: "003", category: "UI/UX & IOT" as Category, title: "IoT Dashboard UI", desc: "A real-time monitoring interface translating connected device data into clear, actionable visual insights.", tags: ["TAILWIND CSS", "JAVASCRIPT"] },
]

const copy = {
  EN: { nav: ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"], hero: "Passionate IT Graduate specializing in Web Development, Software Engineering, and Technology Solutions.", about: "A builder with a practical mindset.", skills: "The tools I work with.", projects: "Selected work.", view: "VIEW PROJECTS", cv: "DOWNLOAD CV", demo: "LIVE DEMO", contact: "Have a project in mind?", talk: "SECTION 04 / LET'S TALK", intro: "Turning ideas into useful digital experiences.", profile: "I'm an Information Technology graduate with a strong interest in building clean, reliable web products and solving everyday problems through technology.", degree: "Bachelor of Information Technology" },
  ID: { nav: ["TENTANG", "KEAHLIAN", "PROYEK", "KONTAK"], hero: "Lulusan TI yang berdedikasi, berfokus pada Pengembangan Web, Rekayasa Perangkat Lunak, dan Solusi Teknologi.", about: "Pengembang dengan pola pikir praktis.", skills: "Perangkat yang saya gunakan.", projects: "Karya pilihan.", view: "LIHAT PROYEK", cv: "UNDUH CV", demo: "DEMO LANGSUNG", contact: "Punya proyek dalam pikiran?", talk: "BAGIAN 04 / MARI BICARA", intro: "Mengubah ide menjadi pengalaman digital yang bermanfaat.", profile: "Saya lulusan Teknologi Informasi yang tertarik membangun produk web yang bersih, andal, dan menyelesaikan masalah sehari-hari melalui teknologi.", degree: "Sarjana Teknologi Informasi" },
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("EN")
  const [category, setCategory] = useState<Category>("ALL")
  const t = copy[language]
  const filteredProjects = category === "ALL" ? projects : projects.filter((project) => project.category === category)
  const categories: Category[] = ["ALL", "WEB DEV", "SOFTWARE & SYSTEMS", "UI/UX & IOT"]

  return <main className="portfolio">
    <header className="topbar">
      <a className="brand mono" href="#top">M. FARHAN HUSEN // PORTFOLIO</a>
      <span className="status mono">AVAILABLE FOR WORK</span>
      <nav className="nav mono" aria-label="Main navigation">{t.nav.map((item, index) => <a href={["#about", "#skills", "#projects", "#contact"][index]} key={item}>{item}</a>)}<span className="language-switcher" aria-label="Language selector"><button className={language === "ID" ? "language-active" : ""} onClick={() => setLanguage("ID")} aria-pressed={language === "ID"}>ID</button><span>|</span><button className={language === "EN" ? "language-active" : ""} onClick={() => setLanguage("EN")} aria-pressed={language === "EN"}>EN</button></span></nav>
    </header>
    <section className="hero" id="top"><div><div className="eyebrow mono">FRESH GRADUATE / 2024</div><h1>Muhammad<br />Farhan<br />Husen<span>.</span></h1></div><div className="hero-copy"><p>{t.hero}</p><div className="hero-actions"><a className="button button-solid" href="#projects">{t.view} <ArrowUpRight size={15} /></a><a className="button" href="#contact"><Download size={15} /> {t.cv}</a></div></div></section>
    <section className="section" id="about"><div className="section-head"><span className="section-label mono">SECTION 01</span><h2 className="section-title">{t.about}</h2></div><div className="about-grid"><article className="about-card"><div className="card-kicker mono">EDUCATION / 2020—2024</div><h3>Universitas &apos;Aisyiyah Yogyakarta (UNISA)</h3><p>{t.degree}</p></article><article className="about-card"><div className="card-kicker mono">PROFILE / INTRO</div><h3>{t.intro}</h3><p>{t.profile}</p></article></div></section>
    <section className="section" id="skills"><div className="section-head"><span className="section-label mono">SECTION 02</span><h2 className="section-title">{t.skills}</h2></div><div className="skills-grid">{skills.map(([title, items]) => <div className="skill-group" key={title}><h3 className="mono">{title}</h3><div className="skill-list">{items.map(item => <span className="skill mono" key={item}>{item}</span>)}</div></div>)}</div></section>
    <section className="section" id="projects"><div className="section-head"><span className="section-label mono">SECTION 03</span><h2 className="section-title">{t.projects}</h2></div><div className="project-filters mono" role="tablist" aria-label="Project categories">{categories.map((item) => <button key={item} role="tab" aria-selected={category === item} className={category === item ? "filter-active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="projects">{filteredProjects.map(project => <article className="project" key={project.no}><div className="project-number mono"><span>PROJECT / {project.no}</span><ArrowUpRight size={15} /></div><h3>{project.title}</h3><p>{project.desc}</p><div className="project-tags">{project.tags.map(tag => <span className="project-tag mono" key={tag}>{tag}</span>)}</div><div className="project-links mono"><a href="#contact">{t.demo} ↗</a><a href="#contact">GITHUB ↗</a></div></article>)}</div></section>
    <section className="section contact" id="contact"><div><div className="eyebrow mono">{t.talk}</div><h2>{t.contact}</h2></div><div className="contact-links mono"><a href="mailto:farhanhusen311@gmail.com"><span><Mail size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />EMAIL</span><span>↗</span></a><a href="https://linkedin.com/in/muhammad-farhan-husen-927242402?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><span><Linkedin size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />LINKEDIN</span><span>↗</span></a><a href="https://github.com/FarhanHusen" target="_blank" rel="noreferrer"><span><Github size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />GITHUB</span><span>↗</span></a></div></section>
    <footer className="footer mono"><span>© 2024 M. FARHAN HUSEN</span><span>DESIGNED WITH TASTE-SKILL AESTHETIC / 09:41:22</span></footer>
  </main>
}
