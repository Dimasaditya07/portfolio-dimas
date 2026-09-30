import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "KAPARAK OUTDOOR",
    description: "Platform penyewaan peralatan outdoor",
    tech: "Next.js · Laravel · MySQL · Midtrans",
    category: "APLIKASI WEB",
    image: "/images/kaparak.png",
    website: "#",
    github: "https://github.com/Dimasaditya07/kaparak-project",
    style: "project-green",
  },
  {
    number: "02",
    name: "Gunung Emas",
    description:
      "Point of Sale untuk toko perhiasan - MAGANG DI PT RAPIER TECHNOLOGY INTERNATIONAL",
    tech: "React ·Node.js · MySQL",
    category: "PENGEMBANGAN WEB",
    image: "/images/ge.png",
    website: "#",
    github: "#",
    style: "project-gold",
  },
  {
    number: "03",
    name: "MAMI WEDDING",
    description: "Website untuk jasa dokumentasi pernikahan",
    tech: "Laravel · MySQL",
    category: "APLIKASI WEB",
    image: "/images/mami.png",
    website: "#",
    github: "https://github.com/Dimasaditya07/mami-wo",
    style: "project-blue",
  },
];

const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Laravel",
  "PHP",
  "MySQL",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-dot" />
          DIMAS
        </a>

        <nav className="nav-links">
          <a href="#about">TENTANG</a>
          <a href="#skills">KEAHLIAN</a>
          <a href="#work">KARYA</a>
          <a href="#contact">KONTAK ↗</a>
        </nav>

        <a href="#contact" className="menu-button">
          HUBUNGI SAYA <span>↗</span>
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-intro">
          <p className="eyebrow">PORTOFOLIO — 2026</p>

          <div className="hero-heading">
            <span className="hello">Halo, saya Dimas Aditya Ramadhan.</span>

            <h1>
              FRONT-END
              <br />
              <span className="serif">&</span> WEB
              <br />
              DEVELOPER
            </h1>
          </div>

          <p className="hero-description"></p>

          <a href="#work" className="primary-button">
            LIHAT KARYA SAYA <span>↗</span>
          </a>

          <p className="hero-location">BERBASIS DI INDONESIA</p>
        </div>

        {/* FOTO */}
        <div className="hero-image">
          <Image
            src="/images/pp.png"
            alt="Dimas Aditya Ramadhan"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 42vw"
            className="portrait"
          />

          <span className="image-caption">KREATIVITAS DALAM SETIAP KARYA.</span>
        </div>

        {/* STATISTIK */}
        <aside className="hero-stats">
          <span className="menu-label">PROFIL / 001</span>

          <div className="stat">
            <strong>03+</strong>
            <span>PROYEK UNGGULAN</span>
          </div>

          <div className="stat">
            <strong>09+</strong>
            <span>TEKNOLOGI</span>
          </div>

          <div className="stat">
            <strong>2026</strong>
            <span>TERUS BERKEMBANG</span>
          </div>

          <a href="#contact" className="stats-link">
            HUBUNGI SAYA ↗
          </a>
        </aside>
      </section>

      {/* KEAHLIAN */}
      <section className="services-strip" aria-label="Keahlian utama">
        {[
          ["01", "PENGEMBANGAN FRONT-END"],
          ["02", "DESAIN WEB RESPONSIF"],
          ["03", "INTEGRASI API"],
          ["04", "ANTARMUKA BERORIENTASI PENGGUNA"],
        ].map(([number, title]) => (
          <div className="service-item" key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="trusted" id="skills">
        <div className="section-heading">
          <h2>KEAHLIAN SAYA</h2>

          <p>
            Teknologi yang saya gunakan untuk mengubah ide menjadi produk
            digital melalui web.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>✳</span>
              {skill}
              <small>0{index + 1}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-space" id="about">
        <div className="about-title">
          <p className="eyebrow">SEDIKIT TENTANG SAYA</p>

          <div className="about-photo">
            <Image
              src="/images/wisuda.jpeg"
              alt="Dimas Aditya Ramadhan"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
            />

            <span className="about-photo-label">DIMAS ADITYA RAMADHAN</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-lead">
            Halo, saya Dimas Aditya Ramadhan, seorang Fresh Graduate Politeknik
            Negeri Padang dengan Jurusan Teknologi Informasi program studi
            Manajemen Infromatika yang memiliki ketertarikan dalam membangun
            produk digital yang fungsional dan menarik secara visual.
          </p>

          <p>
            Saya menggunakan teknologi seperti React, Next.js, dan Laravel untuk
            mengubah ide menjadi aplikasi web yang praktis. Saya senang
            mempelajari teknologi baru, menyelesaikan berbagai masalah, serta
            membuat antarmuka yang mudah dipahami dan nyaman digunakan.
          </p>

          <a href="#contact" className="text-link">
            TENTANG SAYA <span>↗</span>
          </a>
        </div>
      </section>

      {/* PROJECT */}
      {/* PROJECT */}
      <section className="work section-space" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">PROYEK PILIHAN / 2024—2026</p>
            <h2>KARYA PILIHAN</h2>
          </div>

          <p>
            Kumpulan proyek, ide, dan pengalaman digital yang pernah saya
            kerjakan.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              {/* PREVIEW WEBSITE */}
              <div className={`project-image ${project.style}`}>
                <Image
                  src={project.image}
                  alt={`Preview ${project.name}`}
                  fill
                  sizes="(max-width: 700px) 100vw, 1200px"
                  className="project-image-photo"
                />
                {/* Nomor */}
                <span className="project-number">{project.number}</span>

                {/* Hover Label */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-view"
                >
                  <span>LINK GITHUB</span>
                  <span>↗</span>
                </a>
              </div>

              {/* INFORMASI PROJECT */}
              <div className="project-info">
                <div className="project-details">
                  <span className="eyebrow">{project.category}</span>

                  <h3>{project.name}</h3>

                  <p className="project-description">{project.description}</p>

                  <p className="project-tech">{project.tech}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PENGALAMAN */}
      <section className="experience section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PENGALAMAN / 002</p>

            <h2>PENGALAMAN</h2>
          </div>

          <p>
            Belajar, berkolaborasi, dan membangun produk digital untuk kebutuhan
            nyata.
          </p>
        </div>

        <div className="experience-item">
          <span className="experience-date">FEB — MEI 2026</span>

          <div>
            <h3>Front-End Developer Intern</h3>

            <p>PT Rapier Technology International</p>

            <span>
              Mengembangkan antarmuka pengguna, mengintegrasikan API, dan
              berkontribusi dalam pengembangan aplikasi web.
            </span>
          </div>

          <span className="experience-arrow">↗</span>
        </div>

        <div className="experience-item">
          <span className="experience-date">2023 — SEPTEMBER 2026</span>

          <div>
            <h3>D3 - Manajemen Informatika</h3>

            <p>Politeknik Negeri Padang</p>

            <span>
              Mempelajari pengembangan perangkat lunak, basis data, sistem
              informasi, dan teknologi web.
            </span>
          </div>

          <span className="experience-arrow">↗</span>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="footer" id="contact">
        <p className="eyebrow">PUNYA PROYEK ATAU IDE?</p>

        <h2>
          MARI BUAT
          <br />
          SESUATU YANG <span>LUAR BIASA.</span>
        </h2>

        <p className="footer-description">
          Terbuka untuk peluang kerja, kolaborasi, freelance, dan pengembangan
          produk digital.
        </p>

        {/* CONTACT LINKS */}
        <div className="contact-grid">
          <a
            href="https://wa.me/6281365011013"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div>
              <span className="contact-number">01</span>
              <span className="contact-label">WHATSAPP</span>
            </div>

            <div className="contact-value">
              <span>0813 6501 1013</span>
              <span className="contact-arrow">↗</span>
            </div>
          </a>

          <a
            href="https://instagram.com/dimasaditya07_"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div>
              <span className="contact-number">02</span>
              <span className="contact-label">INSTAGRAM</span>
            </div>

            <div className="contact-value">
              <span>@dimasaditya07_</span>
              <span className="contact-arrow">↗</span>
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@sidimzy"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div>
              <span className="contact-number">03</span>
              <span className="contact-label">TIKTOK</span>
            </div>

            <div className="contact-value">
              <span>@dimasaditya07_</span>
              <span className="contact-arrow">↗</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dimas-aditya-ramadhan-25b239377/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div>
              <span className="contact-number">04</span>
              <span className="contact-label">LINKEDIN</span>
            </div>

            <div className="contact-value">
              <span>DIMAS ADITYA RAMADHAN</span>
              <span className="contact-arrow">↗</span>
            </div>
          </a>
        </div>

        <div className="footer-bottom">
          <a href="#home" className="brand">
            <span className="brand-dot" />
            DIMAS
          </a>

          <p>DIRANCANG & DIBANGUN OLEH DIMAS © 2026</p>

          <a href="#home">KEMBALI KE ATAS ↑</a>
        </div>
      </footer>
    </main>
  );
}
