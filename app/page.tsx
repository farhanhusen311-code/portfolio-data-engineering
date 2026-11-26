"use client"

import { useState } from "react"
import { ArrowUpRight, Download, FolderOpen, Instagram, Mail, Phone } from "lucide-react"

type Language = "EN" | "ID"
type Category = "ALL" | "WEB & LARAVEL" | "DATA & SYSTEMS"

const DRIVE_PORTFOLIO_URL =
  "https://drive.google.com/drive/folders/1Jf4c2zzz2OdzdSopxAJ4hkqOqmNEQeo_?usp"

const categories: Category[] = ["ALL", "WEB & LARAVEL", "DATA & SYSTEMS"]

const skillsByLang: Record<Language, Array<[string, string[]]>> = {
  EN: [
    [
      "01 / WEB & BACKEND DEVELOPMENT",
      [
        "PHP",
        "Laravel (MVC, Eloquent ORM, Auth)",
        "Python (Flask)",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive UI",
      ],
    ],
    [
      "02 / DATA, ML & DATABASE",
      [
        "MySQL (ERD, SQL Queries, CSV Bulk Import)",
        "SQLite",
        "Pandas & NumPy",
        "Data Analysis",
        "Data Cleaning & Preparation",
        "ETL",
        "Feature Engineering",
        "Machine Learning (XGBoost, Scikit-learn, SHAP / XAI)",
      ],
    ],
    [
      "03 / TESTING & OFFICE TOOLS",
      [
        "Functional Testing",
        "Usability Testing",
        "Git",
        "GitHub",
        "VS Code",
        "Laragon",
        "XAMPP",
        "phpMyAdmin",
        "Postman",
        "Chrome DevTools",
        "Google Colab",
        "Microsoft Word & Excel",
        "Canva",
      ],
    ],
  ],
  ID: [
    [
      "01 / PENGEMBANGAN WEB & BACKEND",
      [
        "PHP",
        "Laravel (MVC, Eloquent ORM, Auth)",
        "Python (Flask)",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive UI",
      ],
    ],
    [
      "02 / DATA, ML & BASIS DATA",
      [
        "MySQL (ERD, SQL Queries, CSV Bulk Import)",
        "SQLite",
        "Pandas & NumPy",
        "Data Analysis",
        "Data Cleaning & Preparation",
        "ETL",
        "Feature Engineering",
        "Machine Learning (XGBoost, Scikit-learn, SHAP / XAI)",
      ],
    ],
    [
      "03 / PENGUJIAN & PERANGKAT KERJA",
      [
        "Functional Testing",
        "Usability Testing",
        "Git",
        "GitHub",
        "VS Code",
        "Laragon",
        "XAMPP",
        "phpMyAdmin",
        "Postman",
        "Chrome DevTools",
        "Google Colab",
        "Microsoft Word & Excel",
        "Canva",
      ],
    ],
  ],
}

interface ProjectItem {
  no: string
  categories: Category[]
  title: string | Record<Language, string>
  desc: Record<Language, string>
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  image: string
  featured?: boolean
}

const projects: ProjectItem[] = [
  {
    no: "001",
    categories: ["WEB & LARAVEL", "DATA & SYSTEMS"],
    title: "Website Maguwoharjo Football Park (MFP)",
    desc: {
      EN: "Web portal developed during internship featuring automated CSV bulk data entry for athlete performance monitoring and integrated player statistics modules.",
      ID: "Portal web yang dikembangkan saat magang dengan fitur otomasi unggah data massal CSV untuk pemantauan performa atlet dan modul statistik pemain terintegrasi.",
    },
    tags: ["PHP", "Laravel", "MySQL", "Custom CSS", "CSV Automation"],
    image: "/images/project-mfp.png",
  },
  {
    no: "002",
    categories: ["WEB & LARAVEL"],
    title: "Website Happy Care (Sistem Informasi Layanan Kesehatan)",
    desc: {
      EN: "Integrated healthcare service information platform featuring online registration, program catalog, user database management, and an admin dashboard for reservation monitoring.",
      ID: "Platform sistem informasi layanan perawatan terpadu dengan fitur pendaftaran online, katalog program, manajemen basis data pengguna, dan dashboard admin untuk pemantauan reservasi.",
    },
    tags: ["PHP", "Laravel", "MySQL", "Admin Dashboard"],
    repoUrl: "https://github.com/bukhari0281/si-happycare",
    image: "/images/project-happycare.png",
  },
  {
    no: "003",
    categories: ["WEB & LARAVEL"],
    title: "Website Future Football Educare",
    desc: {
      EN: "Academy operational and promotional web platform featuring online registration, training schedules, age-group classification (U-10 to U-13), and interactive news/gallery.",
      ID: "Platform web operasional dan promosi akademi sepak bola usia dini dengan sistem pendaftaran online, jadwal latihan, pengelompokan usia (U-10 hingga U-13), serta galeri interaktif.",
    },
    tags: ["PHP", "Laravel", "Responsive UI", "Team Capstone"],
    liveUrl: "https://future-football.web.id/",
    image: "/images/project-ffe.png",
  },
  {
    no: "004",
    categories: ["DATA & SYSTEMS"],
    title: "SISITA – Sistem Prediksi Obesitas",
    desc: {
      EN: "Flask-based web application integrated with a Machine Learning model (Scikit-learn) to predict obesity risk, featuring user authentication, patient medical record history, search, and pagination.",
      ID: "Aplikasi web berbasis Flask terintegrasi model Machine Learning (Scikit-learn) untuk memprediksi risiko obesitas, lengkap dengan autentikasi pengguna, riwayat rekam medis pasien, pencarian, dan paginasi.",
    },
    tags: ["Python", "Flask", "Scikit-learn", "Pandas", "MySQL"],
    repoUrl: "https://github.com/FarhanHusen/sisita-obesity-prediction",
    image: "/images/project-sisita.png",
  },
  {
    no: "005",
    categories: ["DATA & SYSTEMS"],
    title: {
      EN: "PhishGuard-XAI – Phishing Detection System (Thesis)",
      ID: "PhishGuard-XAI – Sistem Deteksi Phishing (Skripsi)",
    },
    desc: {
      EN: "Undergraduate thesis project: a Flask-based real-time phishing URL detection system powered by XGBoost and Explainable AI (SHAP), featuring DNS/HTTP validation, URL feature extraction, whitelist management, and an admin dashboard for dynamic model retraining.",
      ID: "Proyek skripsi berupa sistem deteksi URL phishing real-time berbasis Flask menggunakan model XGBoost dan Explainable AI (SHAP), dilengkapi validasi DNS/HTTP, ekstraksi fitur URL, manajemen whitelist, serta dasbor admin untuk pelatihan ulang model secara dinamis.",
    },
    tags: ["Python", "Flask", "XGBoost", "SHAP (XAI)", "SQLite"],
    repoUrl: "https://github.com/FarhanHusen/PhishGuard-XAI",
    image: "/images/project-phishguard.png",
    featured: true,
  },
]

const copy = {
  EN: {
    nav: ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"],
    status: "AVAILABLE FOR WORK",
    badge: "FRESH GRADUATE / CLASS OF 2026",
    hero: "Information Technology graduate from Universitas 'Aisyiyah Yogyakarta (GPA 3.43/4.00) specializing in Web Development (PHP/Laravel & Python/Flask), Software Testing, and Data Processing / Machine Learning (XAI).",
    view: "VIEW PROJECTS",
    cv: "CV & PORTFOLIO",
    aboutTitle: "Education & Experience.",
    eduKicker: "EDUCATION & CERTIFICATION",
    expKicker: "EXPERIENCE TIMELINE",
    education: [
      {
        period: "2022 — 2026",
        school: "Universitas 'Aisyiyah Yogyakarta (UNISA)",
        detail: "S1 Teknologi Informasi",
        note: "Thesis: PhishGuard-XAI — Phishing Detection System Using XGBoost & Explainable AI (SHAP)",
        highlight: "GPA: 3.43 / 4.00",
      },
      {
        period: "2018 — 2021",
        school: "SMA Negeri 3 Luwuk",
        detail: "Senior High School",
        note: null,
        highlight: null,
      },
      {
        period: "2026",
        school: "Certification",
        detail: "TOEFL Certified (2026)",
        note: null,
        highlight: "CERTIFIED",
      },
    ],
    experience: [
      {
        period: "JUL 2025 — JAN 2026",
        role: "Capstone Web Developer",
        org: "Future Football Educare",
        desc: "Developed a web platform using PHP & Laravel with a capstone team to support early-age football academy operations, online registration, training schedules, and age-group classification (U-10 to U-13).",
      },
      {
        period: "OCT 2024 — FEB 2025",
        role: "Backend Developer Intern",
        org: "Maguwoharjo Football Park",
        desc: "Built backend modules using PHP, Laravel, and custom CSS, focusing on athlete performance monitoring, CSV bulk data import automation, and player statistics.",
      },
    ],
    seeAllEN: "SEE ALL ON GITHUB",
    seeAllID: "LIHAT SEMUA DI GITHUB",
    featuredEN: "FEATURED THESIS",
    featuredID: "SKRIPSI UNGGULAN",
    projectsTitle: "Selected work.",
    skillsTitle: "Skills & Tools.",
    portfolioLink: "PORTFOLIO FOLDER",
    repoLink: "GITHUB REPO",
    liveLink: "LIVE SITE",
    inquireLink: "INQUIRE",
    talk: "SECTION 04 / LET'S TALK",
    contactTitle: "Have a project or role in mind?",
    contactLabels: {
      email: "EMAIL",
      whatsapp: "WHATSAPP / PHONE",
      instagram: "INSTAGRAM",
      drive: "PORTFOLIO & CV DRIVE",
      driveValue: "Google Drive Folder",
    },
  },
  ID: {
    nav: ["TENTANG", "KEAHLIAN", "PROYEK", "KONTAK"],
    status: "TERSEDIA UNTUK BEKERJA",
    badge: "LULUSAN BARU / 2026",
    hero: "Lulusan S1 Teknologi Informasi Universitas 'Aisyiyah Yogyakarta (IPK 3,43/4,00) dengan fokus pada Pengembangan Web (PHP/Laravel & Python/Flask), Pengujian Perangkat Lunak (Software Testing), serta Pengolahan Data & Machine Learning (XAI).",
    view: "LIHAT PROYEK",
    cv: "CV & PORTOFOLIO",
    aboutTitle: "Pendidikan & Pengalaman.",
    eduKicker: "PENDIDIKAN & SERTIFIKASI",
    expKicker: "LINIMASA PENGALAMAN",
    education: [
      {
        period: "2022 — 2026",
        school: "Universitas 'Aisyiyah Yogyakarta (UNISA)",
        detail: "S1 Teknologi Informasi",
        note: "Skripsi: PhishGuard-XAI — Sistem Deteksi Phishing Berbasis XGBoost & Explainable AI (SHAP)",
        highlight: "IPK: 3,43 / 4,00",
      },
      {
        period: "2018 — 2021",
        school: "SMA Negeri 3 Luwuk",
        detail: "Sekolah Menengah Atas",
        note: null,
        highlight: null,
      },
      {
        period: "2026",
        school: "Sertifikasi",
        detail: "TOEFL Certified (2026)",
        note: null,
        highlight: "TERSERTIFIKASI",
      },
    ],
    experience: [
      {
        period: "JUL 2025 — JAN 2026",
        role: "Capstone Web Developer",
        org: "Future Football Educare",
        desc: "Mengembangkan platform web menggunakan PHP & Laravel bersama tim capstone untuk mendukung operasional akademi sepak bola usia dini, pendaftaran online, jadwal latihan, dan pengelompokan usia (U-10 hingga U-13).",
      },
      {
        period: "OKT 2024 — FEB 2025",
        role: "Backend Developer Intern",
        org: "Maguwoharjo Football Park",
        desc: "Membangun modul backend menggunakan PHP, Laravel, dan CSS kustom dengan fokus pada pemantauan performa atlet, otomasi impor data massal CSV, dan statistik pemain.",
      },
    ],
    skillsTitle: "Keahlian & Perangkat.",
    seeAllEN: "SEE ALL ON GITHUB",
    seeAllID: "LIHAT SEMUA DI GITHUB",
    featuredEN: "FEATURED THESIS",
    featuredID: "SKRIPSI UNGGULAN",
    projectsTitle: "Karya pilihan.",
    portfolioLink: "FOLDER PORTOFOLIO",
    repoLink: "REPOSITORI GITHUB",
    liveLink: "KUNJUNGI WEB",
    inquireLink: "HUBUNGI",
    talk: "BAGIAN 04 / MARI BICARA",
    contactTitle: "Punya proyek atau peluang kerja?",
    contactLabels: {
      email: "EMAIL",
      whatsapp: "WHATSAPP / TELEPON",
      instagram: "INSTAGRAM",
      drive: "DRIVE CV & PORTOFOLIO",
      driveValue: "Folder Google Drive",
    },
  },
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ID")
  const [category, setCategory] = useState<Category>("ALL")
  const t = copy[language]
  const skills = skillsByLang[language]
  const filteredProjects =
    category === "ALL"
      ? projects
      : projects.filter((project) => project.categories.includes(category))

  return (
    <main className="portfolio">
      <header className="topbar">
        <a className="brand mono" href="#top">
          M. FARHAN HUSEN // PORTFOLIO
        </a>
        <span className="status mono">{t.status}</span>
        <nav className="nav mono" aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a href={["#about", "#skills", "#projects", "#contact"][index]} key={item}>
              {item}
            </a>
          ))}
          <span className="language-switcher" aria-label="Language selector">
            <button
              type="button"
              className={language === "ID" ? "language-active" : ""}
              onClick={() => setLanguage("ID")}
              aria-pressed={language === "ID"}
            >
              ID
            </button>
            <span>|</span>
            <button
              type="button"
              className={language === "EN" ? "language-active" : ""}
              onClick={() => setLanguage("EN")}
              aria-pressed={language === "EN"}
            >
              EN
            </button>
          </span>
        </nav>
      </header>

      <section className="hero" id="top">
        {/* ── Left: Profile Photo ── */}
        <div className="hero-photo-col">
          <img
            src="/images/profile.jpg"
            alt="Muhammad Farhan Husen, S.Kom."
            className="hero-photo"
          />
        </div>

        {/* ── Right: Badge, Name, Bio, CTAs ── */}
        <div className="hero-text-col">
          <div className="eyebrow mono">{t.badge}</div>
          <h1>
            Muhammad Farhan Husen,{" "}
            <span>S.Kom.</span>
          </h1>
          <p className="hero-bio">{t.hero}</p>
          <div className="hero-actions">
            <a className="button button-solid" href="#projects">
              {t.view} <ArrowUpRight size={15} />
            </a>
            <a
              className="button"
              href={DRIVE_PORTFOLIO_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={15} /> {t.cv}
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-head">
          <span className="section-label mono">SECTION 01</span>
          <h2 className="section-title">{t.aboutTitle}</h2>
        </div>
        <div className="about-grid">
          <article className="about-card">
            <div className="card-kicker mono">{t.eduKicker}</div>
            <div className="entry-list">
              {t.education.map((edu) => (
                <div className="entry-item" key={edu.school}>
                  <div className="entry-meta mono">
                    <span>{edu.period}</span>
                    {edu.highlight && <span className="entry-badge">{edu.highlight}</span>}
                  </div>
                  <h3 className="entry-title">{edu.school}</h3>
                  <p className="entry-sub">{edu.detail}</p>
                  {edu.note && <p>{edu.note}</p>}
                </div>
              ))}
            </div>
          </article>

          <article className="about-card">
            <div className="card-kicker mono">{t.expKicker}</div>
            <div className="entry-list">
              {t.experience.map((exp) => (
                <div className="entry-item" key={`${exp.role}-${exp.org}`}>
                  <div className="entry-meta mono">
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="entry-title">{exp.role}</h3>
                  <p className="entry-sub">{exp.org}</p>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-head">
          <span className="section-label mono">SECTION 02</span>
          <h2 className="section-title">{t.skillsTitle}</h2>
        </div>
        <div className="skills-grid">
          {skills.map(([title, items]) => (
            <div className="skill-group" key={title}>
              <h3 className="mono">{title}</h3>
              <div className="skill-list">
                {items.map((item) => (
                  <span className="skill mono" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <span className="section-label mono">SECTION 03</span>
          <h2 className="section-title">{t.projectsTitle}</h2>
        </div>
        <div className="project-filters mono" role="tablist" aria-label="Project categories">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              role="tab"
              aria-selected={category === item}
              className={category === item ? "filter-active" : ""}
              onClick={() => setCategory(item)}
            >
              [{item}]
            </button>
          ))}
        </div>
        <div className="projects">
          {filteredProjects.map((project) => (
            <article
              className={`project group${project.featured ? " project-featured" : ""}`}
              key={project.no}
            >
              {/* Project thumbnail */}
              <div className="project-thumb">
                <img
                  src={project.image}
                  alt={typeof project.title === "string" ? project.title : project.title[language]}
                  className="project-thumb-img"
                />
              </div>
              <div className="project-body">
                <div className="project-number mono">
                  <span>
                    PROJECT / {project.no} — {project.categories.join(" · ")}
                  </span>
                  {project.featured && (
                    <span className="featured-badge mono">
                      {language === "ID" ? t.featuredID : t.featuredEN}
                    </span>
                  )}                  <ArrowUpRight size={15} />
                </div>
                <h3>{typeof project.title === "string" ? project.title : project.title[language]}</h3>
                <p>{project.desc[language]}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag mono" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links mono">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      {t.liveLink} ↗
                    </a>
                  ) : project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      {t.repoLink} ↗
                    </a>
                  ) : (
                    <a href={DRIVE_PORTFOLIO_URL} target="_blank" rel="noreferrer">
                      {t.portfolioLink} ↗
                    </a>
                  )}
                  <a href="#contact">{t.inquireLink} ↗</a>
                </div>
              </div>
            </article>
          ))}
          {/* 6th placeholder card — fills bottom row on 3-col desktop grid */}
          {(category === "ALL" || filteredProjects.length % 3 !== 0) && category === "ALL" && (
            <article className="project project-placeholder">
              <div className="project-body placeholder-body">
                <div className="placeholder-icon mono">{ "{...}" }</div>
                <h3>{language === "ID" ? "Lihat Semua Repositori" : "See All Repositories"}</h3>
                <p style={{ color: "var(--muted)" }}>
                  {language === "ID"
                    ? "Jelajahi seluruh proyek dan eksperimen kode saya di GitHub."
                    : "Explore all my projects and code experiments on GitHub."}
                </p>
                <div className="project-links mono" style={{ marginTop: "auto", paddingTop: 28 }}>
                  <a href="https://github.com/FarhanHusen" target="_blank" rel="noreferrer">
                    {language === "ID" ? "BUKA GITHUB ↗" : "OPEN GITHUB ↗"}
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <div className="eyebrow mono">{t.talk}</div>
          <h2>{t.contactTitle}</h2>
        </div>
        <div className="contact-links mono">
          <a href="mailto:farhanhusen311@gmail.com">
            <span>
              <Mail size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />
              {t.contactLabels.email}
            </span>
            <span className="contact-value">farhanhusen311@gmail.com ↗</span>
          </a>
          <a href="https://wa.me/6282211592439" target="_blank" rel="noreferrer">
            <span>
              <Phone size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />
              {t.contactLabels.whatsapp}
            </span>
            <span className="contact-value">+62 822-1159-2439 ↗</span>
          </a>
          <a href="https://instagram.com/frhanhsn_" target="_blank" rel="noreferrer">
            <span>
              <Instagram size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />
              {t.contactLabels.instagram}
            </span>
            <span className="contact-value">@frhanhsn_ ↗</span>
          </a>
          <a href={DRIVE_PORTFOLIO_URL} target="_blank" rel="noreferrer">
            <span>
              <FolderOpen size={15} style={{ verticalAlign: "middle", marginRight: 8 }} />
              {t.contactLabels.drive}
            </span>
            <span className="contact-value">{t.contactLabels.driveValue} ↗</span>
          </a>
        </div>
      </section>

      <footer className="footer mono">
        <span>© 2026 MUHAMMAD FARHAN HUSEN, S.KOM. — YOGYAKARTA, INDONESIA</span>
        <span>DESIGNED WITH TASTE-SKILL AESTHETIC</span>
      </footer>
    </main>
  )
}
