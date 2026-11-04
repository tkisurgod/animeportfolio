import Image from "next/image";

type Project = {
  name: string;
  kind: string;
  detail: string;
  file: string;
  image?: string;
  color: string;
};

const projects: Project[] = [
  { name: "TK ENTERTAINMENT", kind: "Entertainment", detail: "Movie Store Development", file: "/images/project-01.png", image: "/images/project-01.png", color: "peach" },
  { name: "Bruteforce", kind: "Web App", detail: "Mock windowsXP being bruteforced", file: "/images/project-02.png", image: "/images/project-02.png", color: "blue" },
  { name: "Ecasl", kind: "Education", detail: "Responsive Website Design", file: "/images/project-03.png", image: "/images/project-03.png", color: "amber" },
  { name: "Sneaker Store", kind: "Ecommerce", detail: "Modern UI Design", file: "/images/project-04.png", image: "/images/project-04.png", color: "sage" },
];

const skills = [
  ["5", "HTML5", "orange"], ["3", "CSS3", "blue"], ["JS", "JavaScript", "yellow"],
  ["⚛", "React", "cyan"], ["≈", "Tailwind CSS", "sky"], ["B", "Bootstrap", "violet"],
  ["◉", "jQuery", "blue"], ["F", "Figma", "pink"], ["◆", "Git", "red"], ["⌘", "VS Code", "azure"],
];

function ImageMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 36" fill="none">
      <rect x="3" y="3" width="36" height="30" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="13" r="3" fill="currentColor" />
      <path d="m6 29 10-9 6 5 6-7 9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function ImagePlaceholder({ file, className = "" }: { file: string; className?: string }) {
  return (
    <div className={`image-placeholder ${className}`}>
      <div className="placeholder-sun" />
      <div className="placeholder-outline"><ImageMark /></div>
      <span className="placeholder-caption">YOUR IMAGE HERE</span>
      <code>{file}</code>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#home" aria-label="KEITH, home">
            <span className="brand-name">KEITH<span className="brand-dot">.</span></span>
            <span className="brand-role">Frontend Developer</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Let’s Talk <Arrow /></a>
        </header>

        <section className="hero" id="home">
          <span className="paint paint-cyan paint-left" aria-hidden="true" />
          <span className="paint paint-violet paint-right" aria-hidden="true" />
          <span className="scribble scribble-left" aria-hidden="true">Creative<br />Developer<br />Problem Solver<br />Always Learning</span>
          <span className="scribble scribble-right" aria-hidden="true">Ideas<br />to reality<br />&lt;/&gt;</span>
          <div className="hero-copy">
            <p className="hand-intro">Hey, <span>↘</span></p>
            <h1><span className="im">I’m</span> <span className="hero-name">KEITH<span className="name-star">✦</span></span></h1>
            <div className="lime-stroke" aria-hidden="true" />
            <h2>Frontend Developer</h2>
            <p className="hero-description">I build modern, responsive and user-friendly<br className="desktop-break" /> web experiences.</p>
            <div className="tech-line"><span>•</span> HTML <i /> CSS <i /> JavaScript <i /> React <i /> Tailwind CSS</div>
            <div className="hero-actions">
              <a className="button button-lime" href="#projects">View My Work <Arrow /></a>
              <a className="button button-outline" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <a className="scroll-cue" href="#projects"><span className="mouse-icon" /> Scroll Down</a>
          </div>

          <div className="hero-art">
            <span className="bubble-note">LET’S<br />BUILD<br />SOMETHING<br />AWESOME!</span>
            <span className="lightning lightning-one" aria-hidden="true">ϟ</span>
            <span className="lightning lightning-two" aria-hidden="true">ϟ</span>
            <div className="portrait-image-wrap">
              <Image
                src="/images/portrait.jpg"
                alt="Illustrated portrait of Keith in a hoodie, holding up a peace sign behind his laptop"
                fill
                sizes="(max-width: 650px) 80vw, (max-width: 900px) 45vw, 500px"
                preload
                className="portrait-image"
              />
            </div>
            <span className="spark spark-one" aria-hidden="true">✦</span>
            <span className="spark spark-two" aria-hidden="true">✳</span>
          </div>
        </section>

        <section className="projects-section panel" id="projects">
          <div className="section-heading projects-heading">
            <div className="heading-title"><span className="heading-star">✳</span><div><h2>Featured Projects</h2><p>Here are some of my recent projects.</p></div></div>
            <a className="text-link" href="#contact">View All Projects <Arrow /></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className={`project-preview ${project.color}`}>
                  {project.image ? (
                    <div className="project-image-frame">
                      <Image
                        src={project.image}
                        alt={`${project.name} project preview`}
                        fill
                        sizes="(max-width: 650px) 45vw, (max-width: 900px) 33vw, 280px"
                        className="project-image"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder file={project.file} />
                  )}
                </div>
                <div className="project-info">
                  <span className="project-tag">{project.kind}</span>
                  <a href="#contact" className="project-open" aria-label={`Ask about ${project.name}`}><Arrow diagonal /></a>
                  <h3>{project.name}</h3>
                  <p>{project.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading skills-heading">
            <div><h2>My Skills</h2><span className="under-scribble" aria-hidden="true" /></div>
            <p>Tools I work with</p>
          </div>
          <div className="skills-grid">
            {skills.map(([mark, name, color]) => (
              <div className="skill" key={name}>
                <span className={`skill-mark ${color}`}>{mark}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section panel" id="about">
          <span className="side-note" aria-hidden="true">Same<br />person.<br />Different<br />ideas.</span>
          <div className="about-photo">
            <Image
              src="/images/about-portrait.png"
              alt="Keith seated on a bench in a leafy garden"
              fill
              sizes="(max-width: 650px) 30vw, 205px"
              className="about-image"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>About Me</h2>
            <p>I’m KEITH, a Frontend Developer who loves turning ideas into beautiful, functional and user-friendly websites. I enjoy working with modern technologies, solving problems and learning new things every day.</p>
            <a className="button button-small button-outline" href="#contact">More About Me <Arrow /></a>
          </div>
          <div className="stats" aria-label="Career highlights">
            <div className="stat"><span className="stat-icon">☕</span><strong>50<span>+</span></strong><small>Projects<br />Completed</small></div>
            <div className="stat"><span className="stat-icon">♧</span><strong>30<span>+</span></strong><small>Happy<br />Clients</small></div>
            <div className="stat"><span className="stat-icon">☆</span><strong>2<span>+</span></strong><small>Years of<br />Experience</small></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-title"><h2>LET’S<br />WORK<br />TOGETHER!</h2><span className="contact-underline" /></div>
          <div className="contact-copy"><p>Have a project in mind or just want to say hi?<br />I’d love to hear from you.</p>
            <div className="contact-actions">
              <a className="button button-lime" href="mailto:hello@KEITH.dev">✉ <span>Get In Touch</span> <Arrow /></a>
              <a className="button button-outline email-button" href="mailto:hello@KEITH.dev">✉ <span>hello@KEITH.dev</span></a>
            </div>
          </div>
          <div className="contact-doodle" aria-hidden="true"><span>Good<br />ideas start<br />with a<br />conversation</span><b>✌</b><i>☺</i></div>
          <span className="paint paint-cyan paint-contact" aria-hidden="true" />
        </section>

        <footer className="footer">
          <a className="brand footer-brand" href="#home"><span className="brand-name">KEITH<span className="brand-dot">.</span></span><span className="brand-role">Frontend Developer.</span><span className="footer-motto">Design. Develop. Create. Grow.</span></a>
          <div className="social-links" aria-label="Social links"><a href="#contact" aria-label="GitHub">⌂</a><a href="#contact" aria-label="LinkedIn">in</a><a href="#contact" aria-label="Instagram">◎</a><a href="#contact" aria-label="YouTube">▶</a></div>
          <nav className="footer-nav" aria-label="Footer navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Blog</a><a href="#contact">Contact</a></nav>
          <div className="footer-stamp">Keep<br />Creating <span>♡</span></div>
          <div className="footer-bottom"><span>© 2025 KEITH. All rights reserved.</span><span>Made with <b>♡</b> for a brighter web.</span></div>
        </footer>
      </div>
    </main>
  );
}
