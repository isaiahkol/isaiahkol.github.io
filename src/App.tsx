import { useEffect } from "react";
import MediaGallery, { type MediaItem } from "./MediaGallery";
import { projectBySlug } from "./project-data";

const featured = [
  { title: "6-DOF Robot Arm", kicker: "Current project · Robotics", active: true, image: "/media/robot-arm/6dofrobotarm.JPEG", href: "/projects/robot-arm", wide: true, description: "A six-axis arm built around custom cycloidal joint drives, stepper control, and iterative FDM prototypes.", tags: ["SOLIDWORKS", "Arduino", "Mechanism Design"] },
  { title: "Cycloidal Drive", kicker: "21:1 reduction · Gearbox design", active: true, image: "/media/cycloidal-drive/v4.jpg", href: "/projects/cycloidal-drive", description: "Compact, low-backlash gearboxes designed from scratch for every joint of the robot arm.", tags: ["Equation-driven CAD", "FDM", "Prototyping"] },
  { title: "Star Wars Marble Run", kicker: "Mechanism design", image: "/media/marble-run/marble1.jpg", href: "/projects/marble-run", description: "A 600 mm dual-path machine with a powered elevator, launcher, and nearly 5 kg of printed parts.", tags: ["SOLIDWORKS", "Arduino", "Team Project"] },
  { title: "Wind-Up Mouse Droid", kicker: "Spring-powered drivetrain", image: "/media/mouse-droid/wind0.jpg", href: "/projects/mouse-droid", description: "A functional PETG model powered by a custom ratchet, torsion spring, and manually designed gear train.", tags: ["Gear Design", "DFAM", "PETG"] },
  { title: "Filament Recycler Spool Holder", kicker: "FabLab · Production tooling", image: "/media/filament-spool-holder/filabot3.jpg", href: "/projects/filament-spool-holder", description: "A replacement attachment that made generic spools work reliably with the FabLab’s Filabot system.", tags: ["Reverse Engineering", "PETG", "Iteration"] },
  { title: "1981 Yamaha Virago Rebuild", kicker: "Mechanical troubleshooting", image: "/media/virago-rebuild/virago1.jpg", href: "/projects/virago-rebuild", description: "Rebuilt a non-running motorcycle through electrical diagnosis, carburetor repair, and starter redesign.", tags: ["Diagnostics", "Electrical", "Engines"] },
];

const experience = [
  { company: "Preci Manufacturing · Winooski, VT", role: "CNC Machinist Intern", date: "May 2026 – Aug 2026", bullets: ["Rotated through turning, 5-axis milling, and quality control in an aerospace manufacturing environment.", "Executed CNC setups, assembling tooling and workholding, and adjusting geometry for first-off inspection.", "Inspected parts and adjusted tool offsets during production to maintain tolerances as tight as ±0.0001 in.", "Supported implementation of automation, verifying workholding, part handling, and process repeatability.", "Performed QC inspections using GD&T and metrology equipment including CMMs, optical comparators, indicators, and precision gaging; verified material/process certifications and traceability."] },
  { company: "UVM FabLab · Burlington, VT", role: "Operations Manager", date: "Dec 2025 – Present", bullets: ["Lead lab operations, balancing hands-on fabrication with technical direction and final decision-making.", "Manage preventive maintenance and SOP development across all lab equipment.", "Lead biweekly staff meetings to review lab performance, address issues, and implement changes.", "Troubleshoot and repair 3D printers and laser cutters, resolving issues escalated by technicians."] },
  { company: "UVM FabLab · Burlington, VT", role: "Technician", date: "Sep 2025 – Dec 2025", bullets: ["Contributed to 600+ fabrication tickets in one semester, operating FDM/SLA printers and laser cutters.", "Advised students and researchers on CAD, DFM, material selection, and fabrication strategies."] },
  { company: "Thetford, VT", role: "Gap-Year: VEX Robotics Team Coach", date: "Aug 2023 – Jun 2024", bullets: ["Mentored students aged 12-18 in CAD, design process, safe fabrication, and competition strategy."] },
  { company: "VEX Robotics Team 4886-B · Various Locations, USA", role: "Team Member", date: "Sep 2017 – Jun 2023", bullets: ["Shared responsibility for robot design, fabrication, controls, and documentation on a two-person team.", "Four-time VEX World Championship competitor; 2023 NH/VT State Champion; recipient of three Design Awards and three Excellence Awards at the regional (NH/VT) level."] },
  { company: "Hypertherm & Fujifilm Dimatix · Lebanon, NH", role: "STEM Intern", date: "Aug 2021 – Jan 2022", bullets: ["Developed foundational CAD, manual machining, and manufacturing skills through engineering projects."] },
  { company: "Dartmouth College Dining Services", role: "Line Cook & Counterworker", date: "2022 – 2024", bullets: [] },
];

function Header({ project = false }: { project?: boolean }) {
  return <header><nav aria-label="Primary navigation"><a className="brand" href="/">Isaiah Kol</a><div className="nav-links"><a href="/#projects">{project ? "All projects" : "Projects"}</a>{!project && <><a href="/#experience">Experience</a><a href="/#about">About</a></>}<a href="/resume">Resume</a>{project && <a href="mailto:isaiahkol37@gmail.com">Contact</a>}</div></nav></header>;
}

const fablabExperienceMedia: MediaItem[] = [
  { type: "image", src: "/media/experience/fablab/fab1.jpg", alt: "UVM FabLab main printer bay", caption: "The FabLab’s main printer bay." },
  { type: "image", src: "/media/experience/fablab/fab2.jpg", alt: "UVM FabLab soldering and electronics station", caption: "The FabLab’s self-service soldering and electronics station." },
  { type: "image", src: "/media/experience/fablab/fab3.jpg", alt: "UVM FabLab Filabot recycling system", caption: "The FabLab’s in-house Filabot filament-recycling system." },
];

const roboticsExperienceMedia: MediaItem[] = [
  { type: "image", src: "/media/experience/robotics/robot6.jpg", alt: "Tuning the competition robot between matches", caption: "Tuning between matches at the 2023 VEX World Championship." },
  { type: "image", src: "/media/experience/robotics/robot1.jpg", alt: "VEX competition robot from junior year" },
  { type: "image", src: "/media/experience/robotics/robot3.jpg", alt: "VEX robot mechanism and assembly" },
  { type: "image", src: "/media/experience/robotics/robot4.jpg", alt: "VEX competition robot detail" },
  { type: "image", src: "/media/experience/robotics/robot5.jpg", alt: "VEX competition robot at an event" },
  { type: "image", src: "/media/experience/robotics/robot2.jpg", alt: "Earlier VEX competition robot" },
  { type: "image", src: "/media/experience/robotics/robot7.jpg", alt: "VEX robot development and testing" },
  { type: "image", src: "/media/experience/robotics/robot8.jpg", alt: "VEX team and competition work" },
  { type: "video", src: "/media/experience/robotics/discs.mov", alt: "VEX disc-scoring and autonomous development test" },
  { type: "video", src: "/media/experience/robotics/rings.mov", alt: "VEX ring-scoring mechanism test" },
  { type: "video", src: "/media/experience/robotics/intaketest.mov", alt: "VEX intake mechanism test" },
];

const placeholderMedia = (paths: string[]): MediaItem[] => paths.map(src => ({ type: "image", src, alt: "Experience photo", hideCaption: true }));

type ExperienceSubrole = {
  title: string;
  date: string;
  summary: string;
  sections: [string, string][];
};

type ExperienceEntry = {
  date: string;
  role: string;
  company: string;
  summary: string;
  sections?: [string, string][];
  subroles?: ExperienceSubrole[];
  media: MediaItem[];
  context?: string;
  links?: { label: string; url: string }[];
};

const homepageExperience: ExperienceEntry[] = [
  {
    date: "May 2026 – Aug 2026",
    context: "Preci Manufacturing is a precision subcontract manufacturer primarily serving the aerospace industry. Photography inside the facility was restricted due to the nature of the aerospace and defense work. One facility image shown here is sourced from Preci’s public website.",
    role: "CNC Machinist Intern",
    company: "Preci Manufacturing · Winooski, VT",
    summary: "Rotated through turning, 5-axis milling, and quality control in an aerospace manufacturing environment.",
    sections: [
      ["CNC setups", "Executed CNC setups, assembling tooling and workholding, and adjusting geometry for first-off inspection."],
      ["Production", "Inspected parts and adjusted tool offsets during production to maintain tolerances as tight as ±0.0001 in."],
      ["Automation", "Supported implementation of automation, verifying workholding, part handling, and process repeatability."],
      ["Quality control", "Performed QC inspections using GD&T and metrology equipment including CMMs, optical comparators, indicators, and precision gaging; verified material/process certifications and traceability."],
    ],
    media: placeholderMedia(["/media/experience/preci-1.jpg", "/media/experience/preci-2.jpg"]),
    links: [{ label: "Visit Preci Manufacturing", url: "https://www.preci.com/" }],
  },
  {
    date: "Sep 2025 – Present",
    role: "UVM FabLab",
    company: "Burlington, VT",
    summary: "Lead lab operations, balancing hands-on fabrication with technical direction and final decision-making.",
    subroles: [
      {
        title: "FabLab Operations Manager",
        date: "Spring 2026 – Present",
        summary: "",
        sections: [
          ["Leadership", "Lead lab operations, balancing hands-on fabrication with technical direction and final decision-making."],
          ["Process Management", "Manage preventive maintenance and SOP development across all lab equipment, and ensure operational processes are effective and efficient."],
          ["Team Coordination", "Lead biweekly staff meetings to review lab performance, address issues, and implement changes."],
          ["Problem Solving", "Troubleshoot and repair 3D printers and laser cutters, resolving issues escalated by technicians."],
        ],
      },
      {
        title: "FabLab Technician",
        date: "Fall 2025",
        summary: "",
        sections: [
          ["Impact", "Contributed to 600+ fabrication tickets in one semester, operating FDM/SLA printers and laser cutters."],
          ["Machine operation", "Safely and efficiently operated 3D printers and laser cutters to complete fabrication requests from UVM students, faculty, and graduate researchers."],
          ["Technical advising", "Advised students and researchers on CAD, DFM, material selection, and fabrication strategies."],
        ],
      },
    ],
    media: fablabExperienceMedia,
    context: "The UVM FabLab functions as both a student makerspace and a small manufacturing job shop. Students can use the lab’s 3D printers, laser cutters, and other fabrication equipment for their own projects, while UVM students, faculty, and graduate researchers can also submit designs and specifications for the FabLab team to fabricate. Submitted fabrication requests are typically completed within two business days.",
    links: [{ label: "Visit the UVM FabLab Website", url: "https://www.uvm.edu/cems/uvmfablab" }],
  },
  {
    date: "Sep 2017 – Jun 2024",
    role: "VEX Robotics",
    company: "Team 4886-B · Various Locations, USA",
    summary: "Shared responsibility for robot design, fabrication, controls, and documentation on a two-person team. Returned in coaching role during gap year.",
    subroles: [
      {
        title: "Gap Year: VEX Robotics Team Coach",
        date: "Aug 2023 – Jun 2024",
        sections: [["Impact", "Mentored students aged 12-18 in CAD, design process, safe fabrication, and competition strategy."]],
      },
      {
        title: "VEX Robotics Team Member",
        date: "Sep 2017 – Jun 2023",
        sections: [
          ["Role", "Shared responsibility for robot design, fabrication, controls, and documentation on a two-person team."],
          ["Awards & Accomplishments", "Four-time VEX World Championship competitor; 2023 NH/VT State Champion; recipient of three Design Awards and three Excellence Awards at the regional (NH/VT) level."],
        ],
      },
    ],
    media: roboticsExperienceMedia,
  },
  {
    date: "Aug 2021 – Jan 2022",
    role: "STEM Intern",
    company: "Hypertherm & Fujifilm Dimatix · Lebanon, NH",
    context: "Selected for a semester-long co-op/internship program alongside seven other local STEM students, with time split evenly between two companies. The program introduced me to industry work, Lean Manufacturing and Six Sigma, the engineering design process, CAD, and manual machining.",
    summary: "Developed foundational CAD, manual machining, and manufacturing skills through engineering projects.",
    sections: [["Overview", "Developed foundational CAD, manual machining, and manufacturing skills through engineering projects."]],
    media: placeholderMedia(["/media/experience/stem-intern-1.jpg", "/media/experience/stem-intern-2.jpg", "/media/experience/stem-intern-3.jpg"]),
    links: [
      { label: "Visit Hypertherm's Website", url: "https://www.hypertherm.com/" },
      { label: "Visit Fujifilm Dimatix's Website", url: "https://www.fujifilm.com/us/en/business/inkjet-solutions/inkjet-technology-integration" },
    ],
  },
  {
    date: "2022 – 2024",
    role: "Line Cook & Counterworker",
    company: "Dartmouth College Dining Services",
    summary: "Dartmouth College Dining Services line cook and counterworker.",
    sections: [["High School Job", "Worked for one year doing primarily prep work in the main dining facility on campus, and then was promoted to line cook for another year."],
               ["Impact", "500+ eggs fried per shift, ~2% scrap (broken yolk) rate."]],
    media: placeholderMedia(["/media/experience/dartmouth-dining-1.jpg"]),
  },
];

function ExperienceSection() {
  return <section className="experience" id="experience"><div className="section-title"><div><h2>Experience</h2></div><p>Click an experience to see more</p></div><div className="experience-list">{homepageExperience.map(item => <details className="experience-item" key={item.role}><summary><span className="date">{item.date}</span><span className="experience-role"><h3>{item.role}</h3><span>{item.company}</span></span><span className="experience-summary">{item.summary}</span><span className="experience-toggle" aria-hidden="true">+</span></summary><div className="experience-expanded">{(item.context || item.links) && <div className="experience-context">{item.context && <p>{item.context}</p>}{item.links && <div className="experience-links">{item.links.map(link => <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label}</a>)}</div>}</div>}<MediaGallery items={item.media} compact label={item.role} />{item.subroles ? <div className="nested-experience-list">{item.subroles.map(subrole => <details className="nested-experience" key={subrole.title}><summary><span><span className="nested-experience-heading"><h4>{subrole.title}</h4><time>{subrole.date}</time></span><p>{subrole.summary}</p></span><span className="nested-experience-toggle" aria-hidden="true">+</span></summary>{subrole.sections.length > 0 && <div className="experience-copy nested-experience-copy">{subrole.sections.map(([title, body]) => <section key={title}><h4>{title}</h4><p>{body}</p></section>)}</div>}</details>)}</div> : <div className="experience-copy">{item.sections?.map(([title, body]) => <section key={title}><h4>{title}</h4><p>{body}</p></section>)}</div>}</div></details>)}</div></section>;
}

function Home() {
  return <main id="top"><Header />
    <section className="intro"><div className="intro-copy"><p className="label">Mechanical Engineering · University of Vermont · Class of 2028</p><h1>Isaiah Kol</h1><p className="intro-line">Junior mechanical engineering student with a background in competitive robotics, experience in lab leadership, and strong interests in <strong>aerospace, manufacturing, and robotics.</strong></p><div className="intro-actions"><a className="project-jump" href="#projects">View projects</a><a className="linkedin-button" href="https://www.linkedin.com/in/isaiahkol" target="_blank" rel="noreferrer"><span aria-hidden="true">in</span> LinkedIn</a></div></div><img className="portrait" src="/media/headshot.jpg" alt="Isaiah Kol" /></section>
    <section className="projects" id="projects"><div className="section-title"><div><h2>Projects</h2></div><p></p></div><div className="project-grid">{featured.map(project => <a className={`project-card ${project.wide ? "wide" : ""}`} href={project.href} key={project.title}><div className="image-wrap"><img src={project.image} alt={project.title} />{project.active && <span className="active-project-tag">Active project</span>}<span className="view">View project</span></div><div className="project-info"><p className="kicker">{project.kicker}</p><h3>{project.title}</h3><p className="description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></a>)}</div></section>
    <ExperienceSection />
    <section className="about" id="about"><div><p className="label">About</p><h2>About me</h2><div className="about-media">{["/media/family.jpg", "/media/godzilla.jpg"].map(path => <div className="about-placeholder" key={path}><img src={path} alt="Isaiah Kol outside of engineering" onError={event => { event.currentTarget.style.display = "none"; }} /><span>public{path}</span></div>)}</div></div><div><p>I’ve been using CAD software and 3D printing on my own equipment since I was about 13, and I was heavily involved in competitive robotics throughout high school. At UVM, I started as a technician and I now run the FabLab, where I manage and operate 3D printers and other fabrication tools, assist students with technical projects, and support university research.</p><p>Through these experiences, I have gained extensive firsthand experience designing mechanical systems, working within real constraints, and rapidly prototyping functional parts and assemblies.</p><p>Outside of engineering, I enjoy biking, camping, skiing, and spending time with my cat, Godzilla.</p><div className="about-links"><a href="mailto:isaiahkol37@gmail.com">Email me</a><a href="https://www.linkedin.com/in/isaiahkol" target="_blank" rel="noreferrer">LinkedIn</a></div></div></section>
    <footer><strong>Isaiah Kol</strong><p>Mechanical Engineering · Burlington, Vermont</p><a href="#top">Back to top</a></footer>
  </main>;
}

function ProjectPage({ slug }: { slug: string }) {
  const project = projectBySlug[slug];
  if (!project) return <NotFound />;
  return <main className="detail-page"><Header project /><article><div className="detail-head"><a className="back" href="/#projects">All projects</a>{project.active && <div className="active-project-status"><span className="active-project-tag">Active project</span><p>{project.statusText}</p></div>}<p className="label">{project.category}</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><p className="detail-date">{project.date}</p></div>{project.mediaNote && <p className="media-order-note">{project.mediaNote}</p>}<MediaGallery items={project.media} /><dl className="facts">{project.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><div className="detail-content"><section><h2>Overview</h2>{project.overview.map(p => <p key={p}>{p}</p>)}</section>{project.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.body.map(p => <p key={p}>{p}</p>)}</section>)}</div><section className="tools"><h2>Tools and methods</h2><div>{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section><nav className="project-bottom" aria-label="Project footer"><a href="/#projects">Return to all projects</a><a href="mailto:isaiahkol37@gmail.com">Contact me</a></nav></article></main>;
}

function Resume() {
  return <main className="resume-page"><Header /><section className="resume-viewer"><div className="resume-toolbar"><div><p className="label">Resume</p><h1>Isaiah Kol</h1></div><a className="resume-download" href="/IsaiahKolResume.pdf?v=20260826" download="IsaiahKolResume.pdf">Download PDF</a></div><iframe src="/IsaiahKolResume.pdf?v=20260826" title="Isaiah Kol resume PDF" /></section><footer><strong>Isaiah Kol</strong><a href="/">Return to portfolio</a></footer></main>;
}

function NotFound() { return <main className="not-found"><div><p className="label">404</p><h1>Page not found.</h1><p>The project or page you requested does not exist.</p><a className="project-jump" href="/">Return home</a></div></main>; }

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
