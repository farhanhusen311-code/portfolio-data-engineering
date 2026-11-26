"use client"

import { useState } from "react"
import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react"

type Language = "EN" | "ID"
type Category = "ALL" | "WEB & LARAVEL" | "DATA & SYSTEMS"

const driveUrl = "https://drive.google.com/drive/folders/1Jf4c2zzz2OdzdSopxAJ4hkqOqmNEQeo_?usp"
const categories: Category[] = ["ALL", "WEB & LARAVEL", "DATA & SYSTEMS"]

const skills: Array<{ title: string; items: string[] }> = [
  { title: "01 / WEB & BACKEND DEVELOPMENT", items: ["PHP", "Laravel (MVC, Eloquent ORM, Auth)", "HTML5", "CSS3", "JavaScript", "Responsive UI"] },
  { title: "02 / DATA & DATABASE", items: ["MySQL (ERD, SQL Queries)", "CSV Bulk Import", "Data Analysis", "Data Cleaning & Preparation", "ETL", "Feature Engineering", "Machine Learning Basics"] },
  { title: "03 / TESTING & OFFICE TOOLS", items: ["Functional Testing", "Usability Testing", "Git", "GitHub", "VS Code", "Laragon", "XAMPP", "phpMyAdmin", "Postman", "Chrome DevTools", "Google Colab", "Microsoft Word & Excel", "Canva"] },
]

const projects = [
  {
    no: "001", categories: ["WEB & LARAVEL", "DATA & SYSTEMS"] as Category[], title: "Website Maguwoharjo Football Park (MFP)",
    desc: { EN: "Web portal developed during internship featuring automated CSV bulk data entry for athlete performance monitoring and integrated player statistics modules.", ID: "Portal web yang dikembangkan saat magang dengan fitur otomasi unggah data massal CSV untuk pemantauan performa atlet dan modul statistik pemain terintegrasi." },
    tags: ["PHP", "Laravel", "MySQL", "Custom CSS", "CSV Automation"],
  },
  {
    no: "002", categories: ["WEB & LARAVEL"] as Category[], title: "Website Happy Care (Sistem Informasi Layanan Kesehatan)",
    desc: { EN: "Integrated healthcare service information platform featuring online registration, program catalog, user database management, and an admin dashboard for reservation monitoring.", ID: "Platform sistem informasi layanan perawatan terpadu dengan fitur pendaftaran online, katalog program, manajemen basis data pengguna, dan dashboard admin untuk pemantauan reservasi." },
    tags: ["PHP", "Laravel", "MySQL", "Admin Dashboard"],
  },
  {
    no: "003", categories: ["WEB & LARAVEL"] as Category[], title: "Website Future Football Educare",
    desc: { EN: "Academy operational and promotional web platform featuring online registration, training schedules, age-group classification (U-10 to U-13), and interactive news/gallery.", ID: "Platform web operasional dan promosi akademi sepak bola usia dini dengan sistem pendaftaran online, jadwal latihan, pengelompokan usia (U-10 hingga U-13), serta galeri interaktif." },
    tags: ["PHP", "Laravel", "Responsive UI", "Team Capstone"],
  },
]

const copy = {
  EN: {
    nav: ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"], badge: "FRESH GRADUATE / CLASS OF 2026",
    bio: "Information Technology graduate from Universitas 'Aisyiyah Yogyakarta (GPA 3.43/4.00) specializing in Web Development (PHP/Laravel), Software Testing, and Data Processing.",
    about: "Education & experience.", skills: "Skills & tools.", projects: "Selected projects.", view: "VIEW PROJECTS", cv: "CV / PORTFOLIO FOLDER",
    education: "EDUCATION", experience: "EXPERIENCE", degree: "S1 Information Technology", gpa: "GPA: 3.43 / 4.00", highschool: "SMA Negeri 3 Luwuk", certification: "TOEFL Certified",
    role1: "Capstone Web Developer", company1: "Future Football Educare", date1: "JUL 2025 — JAN 2026", detail1: "Developed a web platform using PHP & Laravel with a capstone team to support early-age football academy operations, online registration, training schedules, and age-group classification (U-10 to U-13).",
    role2: "Backend Developer Intern", company2: "Maguwoharjo Football Park", date2: "OCT 2024 — FEB 2025", detail2: "Built backend modules using PHP, Laravel, and custom CSS, focusing on athlete performance monitoring, CSV bulk data import automation, and player statistics.",
    contact: "Let’s build something useful.", email: "EMAIL", phone: "WHATSAPP / PHONE", instagram: "INSTAGRAM", drive: "PORTFOLIO & CV DRIVE", footer: "© 2026 MUHAMMAD FARHAN HUSEN, S.KOM. — YOGYAKARTA, INDONESIA",
  },
  ID: {
    nav: ["TENTANG", "KEAHLIAN", "PROYEK", "KONTAK"], badge: "LULUSAN BARU / 2026",
    bio: "Lulusan S1 Teknologi Informasi Universitas 'Aisyiyah Yogyakarta (IPK 3,43/4,00) dengan fokus pada Pengembangan Web (PHP/Laravel), Pengujian Perangkat Lunak (Software Testing), dan Pengolahan Data.",
    about: "Pendidikan & pengalaman.", skills: "Keahlian & alat.", projects: "Proyek pilihan.", view: "LIHAT PROYEK", cv: "FOLDER CV / PORTOFOLIO",
    education: "PENDIDIKAN", experience: "PENGALAMAN", degree: "S1 Teknologi Informasi", gpa: "IPK: 3,43 / 4,00", highschool: "SMA Negeri 3 Luwuk", certification: "Bersertifikat TOEFL",
    role1: "Pengembang Web Capstone", company1: "Future Football Educare", date1: "JUL 2025 — JAN 2026", detail1: "Mengembangkan platform web menggunakan PHP & Laravel bersama tim capstone untuk mendukung operasional akademi sepak bola usia dini, pendaftaran online, jadwal latihan, dan klasifikasi kelompok usia (U-10 hingga U-13).",
    role2: "Backend Developer Magang", company2: "Maguwoharjo Football Park", date2: "OKT 2024 — FEB 2025", detail2: "Membangun modul backend menggunakan PHP, Laravel, dan CSS kustom, berfokus pada pemantauan performa atlet, otomasi impor data massal CSV, dan statistik pemain.",
    contact: "Mari buat sesuatu yang bermanfaat.", email: "EMAIL", phone: "WHATSAPP / TELEPON", instagram: "INSTAGRAM", drive: "DRIVE PORTOFOLIO & CV", footer: "© 2026 MUHAMMAD FARHAN HUSEN, S.KOM. — YOGYAKARTA, INDONESIA",
  },
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("EN")
  const [category, setCategory] = useState<Category>("ALL")
  const t = copy[language]
  const filteredProjects = category === "ALL" ? projects : projects.filter((project) => project.categories.includes(category))

  return <main className="portfolio">
    <header className="topbar">
      <a className="brand mono" href="#top">M. FARHAN HUSEN // PORTFOLIO</a>
      <span className="status mono">AVAILABLE FOR WORK</span>
      <nav className="nav mono" aria-label="Main navigation">{t.nav.map((item, index) => <a href={["#about", "#skills", "#projects", "#contact"][index]} key={item}>{item}</a>)}<span className="language-switcher" aria-label="Language selector"><button className={language === "ID" ? "language-active" : ""} onClick={() => setLanguage("ID")} aria-pressed={language === "ID"}>ID</button><span>|</span><button className={language === "EN" ? "language-active" : ""} onClick={() => setLanguage("EN")} aria-pressed={language === "EN"}>EN</button></span></nav>
    </header>
    <section className="hero" id="top"><div><div className="eyebrow mono">{t.badge}</div><h1>Muhammad<br />Farhan<br />Husen<span>, S.Kom.</span></h1></div><div className="hero-copy"><p>{t.bio}</p><div className="hero-actions"><a className="button button-solid" href="#projects">{t.view} <ArrowUpRight size={15} /></a><a className="button" href={driveUrl} target="_blank" rel="noreferrer">{t.cv} <ArrowUpRight size={15} /></a></div></div></section>
    <section className="section" id="about"><div className="section-head"><span className="section-label mono">SECTION 01</span><h2 className="section-title">{t.about}</h2></div><div className="about-grid"><article className="about-card"><div className="card-kicker mono">{t.education} / 2022—2026</div><h3>Universitas &apos;Aisyiyah Yogyakarta (UNISA)</h3><p>{t.degree} · 2022—2026<br />{t.gpa}</p><div className="education-extra"><p><strong>{t.highschool}</strong> · 2018—2021</p><p><strong>{t.certification}</strong> · 2026</p></div></article><article className="about-card experience-card"><div className="card-kicker mono">{t.experience} / 2024—2026</div><div className="timeline-entry"><span className="timeline-date mono">{t.date1}</span><h3>{t.role1}</h3><p className="timeline-company">{t.company1}</p><p>{t.detail1}</p></div><div className="timeline-entry"><span className="timeline-date mono">{t.date2}</span><h3>{t.role2}</h3><p className="timeline-company">{t.company2}</p><p>{t.detail2}</p></div></article></div></section>
    <section className="section" id="skills"><div className="section-head"><span className="section-label mono">SECTION 02</span><h2 className="section-title">{t.skills}</h2></div><div className="skills-grid">{skills.map(({ title, items }) => <div className="skill-group" key={title}><h3 className="mono">{title}</h3><div className="skill-list">{items.map(item => <span className="skill mono" key={item}>{item}</span>)}</div></div>)}</div></section>
    <section className="section" id="projects"><div className="section-head"><span className="section-label mono">SECTION 03</span><h2 className="section-title">{t.projects}</h2></div><div className="project-filters mono" role="tablist" aria-label="Project categories">{categories.map((item) => <button key={item} role="tab" aria-selected={category === item} className={category === item ? "filter-active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="projects">{filteredProjects.map(project => <article className="project" key={project.no}><div className="project-number mono"><span>PROJECT / {project.no}</span><ArrowUpRight size={15} /></div><h3>{project.title}</h3><p>{project.desc[language]}</p><div className="project-categories mono">{project.categories.map(item => <span key={item}>{item}</span>)}</div><div className="project-tags">{project.tags.map(tag => <span className="project-tag mono" key={tag}>{tag}</span>)}</div></article>)}</div></section>
    <section className="section contact" id="contact"><div><div className="eyebrow mono">SECTION 04 / LET&apos;S TALK</div><h2>{t.contact}</h2></div><div className="contact-links mono"><a href="mailto:farhanhusen311@gmail.com"><span><Mail size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />{t.email}</span><span>farhanhusen311@gmail.com ↗</span></a><a href="https://wa.me/6282211592439" target="_blank" rel="noreferrer"><span><Phone size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />{t.phone}</span><span>+62 822-1159-2439 ↗</span></a><a href="https://instagram.com/frhanhsn_" target="_blank" rel="noreferrer"><span><Instagram size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />{t.instagram}</span><span>@frhanhsn_ ↗</span></a><a href={driveUrl} target="_blank" rel="noreferrer"><span><ArrowUpRight size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />{t.drive}</span><span>GOOGLE DRIVE ↗</span></a></div></section>
    <footer className="footer mono"><span>{t.footer}</span><a href="https://github.com/FarhanHusen" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12} /></a></footer>
  </main>
}
