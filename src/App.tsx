import { useEffect } from "react";
import MediaGallery from "./MediaGallery";
import { projectBySlug } from "./project-data";

const featured = [
  { title: "6-DOF Robot Arm", kicker: "Current project · Robotics", image: "/media/cycloidal-drive/1cycloidv3.jpg", href: "/projects/robot-arm", wide: true, description: "A six-axis arm built around custom cycloidal joint drives, stepper control, and iterative FDM prototypes.", tags: ["SolidWorks", "Arduino", "Mechanism Design"] },
  { title: "Cycloidal Drive", kicker: "21:1 reduction · Gearbox design", image: "/media/cycloidal-drive/2cycloidv3.jpg", href: "/projects/cycloidal-drive", description: "Compact, low-backlash gearboxes designed from scratch for every joint of the robot arm.", tags: ["Equation-driven CAD", "FDM", "Prototyping"] },
  { title: "Star Wars Marble Run", kicker: "Mechanism design", image: "/media/marble-run/marble1.jpg", href: "/projects/marble-run", description: "A 600 mm dual-path machine with a powered elevator, launcher, and nearly 5 kg of printed parts.", tags: ["SolidWorks", "Arduino", "Team Project"] },
  { title: "Wind-Up Mouse Droid", kicker: "Spring-powered drivetrain", image: "/media/mouse-droid/wind0.jpg", href: "/projects/mouse-droid", description: "A functional PETG model powered by a custom ratchet, torsion spring, and manually designed gear train.", tags: ["Gear Design", "DFAM", "PETG"] },
  { title: "Filament Recycler Spool Holder", kicker: "FabLab · Production tooling", image: "/media/filament-spool-holder/filabot3.jpg", href: "/projects/filament-spool-holder", description: "A replacement attachment that made generic spools work reliably with the FabLab’s Filabot system.", tags: ["Reverse Engineering", "PETG", "Iteration"] },
  { title: "1981 Yamaha Virago Rebuild", kicker: "Mechanical troubleshooting", image: "/media/virago-rebuild/virago1.jpg", href: "/projects/virago-rebuild", description: "Rebuilt a non-running motorcycle through electrical diagnosis, carburetor repair, and starter redesign.", tags: ["Diagnostics", "Electrical", "Engines"] },
];

const experience = [
  { company: "University of Vermont FabLab", role: "Operations Manager", date: "Jan 2026 — Present", bullets: ["Lead daily operations and provide technical direction for a university fabrication lab supporting coursework, research, and student projects.", "Coordinate technicians, preventive maintenance, scheduling, SOP development, staff meetings, and hiring while remaining hands-on with equipment and troubleshooting.", "Promoted from FabLab Technician after one semester; completed more than 600 fabrication tickets during the first semester."] },
  { company: "Preci Manufacturing", role: "CNC Machinist Intern", date: "Summer 2026", bullets: ["Worked across CNC turning, 5-axis milling, and quality control in a precision aerospace and defense manufacturing environment.", "Performed machine setup, operation, and continuous part inspection to maintain tolerances as tight as ±0.0001 inch.", "Conducted batch inspections and assisted with first-off inspection using drawings, GD&T, CMMs, optical comparators, Micro-Hites, vision systems, and precision gaging.", "Assisted with machine automation setup by verifying workholding, gripper operation, part handling, and process repeatability."] },
  { company: "VEX Robotics · Team 4886", role: "Team Captain and Coach", date: "2017 — 2024", bullets: ["Designed, fabricated, assembled, and iteratively improved competition robot systems under strict time and rules constraints.", "Qualified for the VEX World Championship four times and contributed to the 2023 NH/VT State Championship-winning robot.", "Returned after graduation to coach students in CAD, fabrication, assembly, design documentation, and competition troubleshooting."] },
];

function Header({ project = false }: { project?: boolean }) {
  return <header><nav aria-label="Primary navigation"><a className="brand" href="/">Isaiah Kol</a><div className="nav-links"><a href="/#projects">{project ? "All projects" : "Projects"}</a>{!project && <><a href="/#experience">Experience</a><a href="/#about">About</a></>}<a href="/resume">Resume</a>{project && <a href="mailto:isaiahkol37@gmail.com">Contact</a>}</div></nav></header>;
}

const homepageExperience = [
  {
    date: "Summer 2026",
    role: "CNC Machinist Intern",
    company: "Preci Manufacturing · Precision aerospace & defense manufacturing",
    summary: "Machine setup and operation across CNC turning and 5-axis milling, plus batch and first-off inspection using CMMs, optical comparators, Micro-Hites, and precision gaging.",
    sections: [
      ["Manufacturing", "Worked across CNC turning and 5-axis milling, performing machine setup, operation, and continuous part inspection while holding tolerances as tight as ±0.0001 inch."],
      ["Quality control", "Performed batch inspections and assisted with first-off inspection using engineering drawings, GD&T, CMMs, optical comparators, Micro-Hites, vision systems, and precision gaging."],
    ],
    photoPaths: ["/media/experience/preci-1.jpg", "/media/experience/preci-2.jpg"],
  },
  {
    date: "2026 — Present",
    role: "FabLab Operations Manager",
    company: "University of Vermont",
    summary: "Lead daily lab operations, technician coordination, maintenance, SOP development, and technical support while staying hands-on with fabrication and research projects.",
    sections: [
      ["Operations", "Coordinate technicians, preventive maintenance, scheduling, SOP development, staff meetings, and hiring for a university fabrication lab supporting coursework, research, and student projects."],
      ["Technical work", "Remain hands-on with equipment operation, fabrication tickets, difficult student projects, and troubleshooting escalated machine problems."],
    ],
    photoPaths: ["/media/experience/fablab-1.jpg", "/media/experience/fablab-2.jpg"],
  },
  {
    date: "2017 — 2024",
    role: "Team Member & Gap Year Coach",
    company: "VEX Robotics · Team 4886",
    summary: "Four-time World Championship qualifier and 2023 NH/VT State Champion; later coached students in CAD, fabrication, assembly, and competition troubleshooting.",
    sections: [
      ["Competition", "Designed, fabricated, assembled, and iteratively improved competition robot systems under strict time and rules constraints."],
      ["Coaching", "Returned after graduation to coach students in CAD, fabrication, assembly, design documentation, and competition troubleshooting."],
    ],
    photoPaths: ["/media/experience/vex-1.jpg", "/media/experience/vex-2.jpg"],
  },
];

function ExperienceSection() {
  return <section className="experience" id="experience"><div className="section-title"><div><span>02</span><h2>Experience</h2></div><p>Click an experience to see more</p></div><div className="experience-list">{homepageExperience.map(item => <details className="experience-item" key={item.role}><summary><span className="date">{item.date}</span><span className="experience-role"><h3>{item.role}</h3><span>{item.company}</span></span><span className="experience-summary">{item.summary}</span><span className="experience-toggle" aria-hidden="true">+</span></summary><div className="experience-expanded"><div className="experience-copy">{item.sections.map(([title, body]) => <section key={title}><h4>{title}</h4><p>{body}</p></section>)}</div><div className="experience-media">{item.photoPaths.map(path => <div className="experience-placeholder" key={path}><img src={path} alt={`${item.role} experience`} onError={event => { event.currentTarget.style.display = "none"; }} /><strong>Photo placeholder</strong><span>public{path}</span></div>)}</div></div></details>)}</div></section>;
}

function Home() {
  return <main id="top"><Header />
    <section className="intro"><div className="intro-copy"><p className="label">Mechanical Engineering · University of Vermont · Class of 2028</p><h1>Isaiah Kol</h1><p className="intro-line">I design, build, and troubleshoot mechanical systems—with a focus on <strong>robotics, manufacturing, and rapid prototyping.</strong></p><div className="intro-actions"><a className="project-jump" href="#projects">View projects <span>↓</span></a><a className="linkedin-button" href="https://www.linkedin.com/in/isaiahkol" target="_blank" rel="noreferrer"><span aria-hidden="true">in</span> LinkedIn</a></div></div><img className="portrait" src="/media/headshot.jpg" alt="Isaiah Kol" /></section>
    <section className="projects" id="projects"><div className="section-title"><div><span>01</span><h2>Projects</h2></div><p>Selected mechanical design and fabrication work</p></div><div className="project-grid">{featured.map((project, index) => <a className={`project-card ${project.wide ? "wide" : ""}`} href={project.href} key={project.title}><div className="image-wrap"><img src={project.image} alt={project.title} /><span className="view">View project ↗</span><span className="number">0{index + 1}</span></div><div className="project-info"><p className="kicker">{project.kicker}</p><h3>{project.title}</h3><p className="description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></a>)}</div></section>
    <ExperienceSection />
    <section className="about" id="about"><div><p className="label">About</p><h2>About me</h2></div><div><p>I’ve been using CAD software and 3D printing on my own equipment since I was about 13, and I was heavily involved in competitive robotics throughout high school. At UVM, I started as a technician and I now run the FabLab, where I manage and operate 3D printers and other fabrication tools, assist students with technical projects, and support university research.</p><p>Through these experiences, I have gained extensive firsthand experience designing mechanical systems, working within real constraints, and rapidly prototyping functional parts and assemblies.</p><p>Outside of engineering, I enjoy biking, camping, skiing, and spending time with my cat, Godzilla.</p></><div className="about-links"><a href="mailto:isaiahkol37@gmail.com">Email me ↗</a><a href="https://www.linkedin.com/in/isaiahkol" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
    <footer><strong>Isaiah Kol</strong><p>Mechanical Engineering · Burlington, Vermont</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}

function ProjectPage({ slug }: { slug: string }) {
  const project = projectBySlug[slug];
  if (!project) return <NotFound />;
  return <main className="detail-page"><Header project /><article><div className="detail-head"><a className="back" href="/#projects">← All projects</a><p className="label">{project.category}</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><p className="detail-date">{project.date}</p></div><MediaGallery items={project.media} /><dl className="facts">{project.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><div className="detail-content"><section><h2>Overview</h2>{project.overview.map(p => <p key={p}>{p}</p>)}</section>{project.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.body.map(p => <p key={p}>{p}</p>)}</section>)}</div><section className="tools"><h2>Tools and methods</h2><div>{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section><nav className="project-bottom" aria-label="Project footer"><a href="/#projects">← Return to all projects</a><a href="mailto:isaiahkol37@gmail.com">Contact me ↗</a></nav></article></main>;
}

function Resume() {
  return <main className="resume-page"><Header /><section className="resume-viewer"><div className="resume-toolbar"><div><p className="label">Resume</p><h1>Isaiah Kol</h1></div><a className="resume-download" href="/IsaiahKolResume.pdf" download>Download PDF ↓</a></div><iframe src="/IsaiahKolResume.pdf" title="Isaiah Kol resume PDF" /></section><footer><strong>Isaiah Kol</strong><a href="/">Return to portfolio</a></footer></main>;
}

function NotFound() { return <main className="not-found"><div><p className="label">404</p><h1>Page not found.</h1><p>The project or page you requested does not exist.</p><a className="project-jump" href="/">Return home →</a></div></main>; }

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  useEffect(() => {
    const project = path.startsWith("/projects/") ? projectBySlug[path.split("/")[2]] : undefined;
    document.title = project ? `${project.title} — Isaiah Kol` : path === "/resume" ? "Resume — Isaiah Kol" : path === "/" ? "Isaiah Kol — Mechanical Engineering Portfolio" : "Page not found — Isaiah Kol";
  }, [path]);
  if (path === "/") return <Home />;
  if (path === "/resume") return <Resume />;
  if (path.startsWith("/projects/")) return <ProjectPage slug={path.split("/")[2]} />;
  return <NotFound />;
}
