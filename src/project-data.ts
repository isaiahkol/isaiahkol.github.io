export type Project = {
  slug: string; title: string; category: string; date: string; summary: string;
  images: { src: string; alt: string }[]; facts: [string, string][];
  overview: string[]; sections: { title: string; body: string[] }[];
  tools: string[];
  active?: boolean; statusText?: string; mediaNote?: string;
  media: { type: "image" | "video" | "youtube"; src: string; alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "robot-arm", title: "6-DOF Robot Arm", category: "Robotics · Independent Project", date: "March 2026 — Present",
    summary: "A six-axis robotic arm designed and built around custom cycloidal gearboxes, Arduino control, and 3D printed structural components.",
    active: true,
    statusText: "Ongoing development—ask me about the latest iteration.",
    images: [{ src: "/media/robot-arm/6dofrobotarm.JPEG", alt: "" }],
    facts: [["Degrees of Freedom", "6"], ["Cycloidal Reduction", "21:1"], ["Control", "Arduino Mega"], ["Motor drivers", "DM542TE"]],
    overview: ["I started this project to apply mechanism design, CAD, fabrication, electronics, and controls to one complete mechanical system. The current arm is operational in open loop and can be jogged from my keyboard. Absolute position feedback, and higher level motion control remain planned improvements for this semester."],
    sections: [
      { title: "Mechanical design", body: ["Each joint uses a custom 21:1 cycloidal drive. Two of the larger joints also use belt reductions to increase available torque while keeping the motors close to the base. The structure and gearbox housings were modeled in SOLIDWORKS and iteratively printed. I designed around realistic print tolerances, bearing placement, fastener access, and the different torque requirements at each joint."] },
      { title: "Iteration", body: ["I have built two complete versions of the arm. The first black-and-gray prototype functioned, but poor weight distribution and backlash in the earlier cycloidal drives prevented precise motion. I used those results to redesign the system rather than continue refining an architecture with fundamental limitations.", "The current version uses six motors instead of eight. I selected each motor for the torque and weight requirements of its joint and added belt reductions where additional torque was needed. I also replaced salvaged 3D printer motors and A4988 drivers with purpose-selected motors, digital DM542TE drivers, an Arduino Mega, and a power supply with approximately twice the current capacity. These changes improved maneuverability, load capacity, packaging, and control reliability."]},
      { title: "Controls", body: ["Six stepper axes are controlled by an Arduino Mega and individual DM542TE drivers from a 24 V power supply. I developed serial and keyboard-jog control programs, corrected joint mapping and direction issues, and tuned driver current to balance useful torque against motor heating."] },
      { title: "What I learned", body: ["This project was a crash course in Arduino and mechatronics. Unlike my high school robotics work, I was solely responsible for the complete system and designed, fabricated, wired, and programmed it myself. Building the arm strengthened my SOLIDWORKS, DFM, and general design skills while making system-level tradeoffs much more concrete. Reduction ratio, motor sizing, weight distribution, material properties, backlash, electronics, heat, and software behavior all affect one another; improving one area can easily expose a limitation elsewhere. Understanding how those systems interact is essential to making sound engineering decisions."] },
      { title: "Next Steps", body: ["Closed-loop control and inverse kinematics are my primary next steps for the academic year. I also plan to machine stronger, more precise cycloidal drive components and evaluate their performance in the arm."]}
    ], tools: ["SOLIDWORKS", "Arduino", "Python", "FDM 3D Printing", "DM542TE Drivers", "Stepper Motors"],
    media: [
      { type: "youtube", src: "https://www.youtube-nocookie.com/embed/gqsfKWtIOGQ", alt: "6 DOF Robot Arm Initial Testing Video" },
      { type: "image", src: "/media/robot-arm/6dofrobotarm.JPEG", alt: "robot arm and curious godzilla" },
      { type: "image", src: "/media/robot-arm/assem1.jpg", alt: "current SOLIDWORKS assembly" },
      { type: "image", src: "/media/robot-arm/robotcurrent1.JPEG", alt: "robot arm caught mouse toy" },
      { type: "image", src: "/media/robot-arm/claw.JPEG", alt: "claw" },
      { type: "image", src: "/media/robot-arm/clawtesting.JPEG", alt: "claw servo testing" },
      { type: "image", src: "/media/robot-arm/psu3.JPEG", alt: "psu3" },
      { type: "image", src: "/media/robot-arm/psu2.JPEG", alt: "psu2" },
      { type: "image", src: "/media/robot-arm/psu1.JPEG", alt: "psu1" },
      { type: "image", src: "/media/robot-arm/newbotoldpsu.JPEG", alt: "new bot old psu" },
      { type: "image", src: "/media/robot-arm/oldbot.JPEG", alt: "first robot arm prototype" },
    ]
  },
  {
    slug: "cycloidal-drive", title: "Cycloidal Drive", category: "Gearbox Design · Independent Project", date: "January 2026 — Present",
    summary: "A compact 21:1 cycloidal gearbox designed from scratch as the primary joint reducer for a robot arm.",
    active: true,
    statusText: "Ongoing development—ask me about the latest testing and material iteration.",
    mediaNote: "Media is arranged in reverse chronological order, beginning with the latest iteration.",
    images: [{ src: "/media/cycloidal-drive/1cycloidv3.jpg", alt: "Assembled cycloidal gearbox prototype" }],
    facts: [["Reduction", "21:1"], ["Cycloidal lobes", "21"], ["Housing pins", "22"], ["Output pins", "7"]],
    overview: ["I became interested in cycloidal drives because they provide high reduction in a compact package and frankly I found the mechanism to be incredibly satisfying to watch and knew had to design one myself. At the start of this project I knew I wanted to make a robot arm, and while I was aware that cycloidal drives are particularly suited for robotic actuators, this did start off as a seperate project. The current design uses two cycloidal discs, bearings at the output and eccentric shaft, steel pins, and a NEMA 17 stepper motor. Multiple generations were printed and tested before the design was ever integrated into the arm. Additionally, a constraint I set for myself on this project was that I wanted to be able to manufacture it in my apartment on my own equipment (or at the UVM FabLab). While I could certainly achieve better tolerances and higher efficiency from ordering custom machined parts, I wanted the manufacturing process to be part of the experience of this project."],
    sections: [
      { title: "Performance", body: ["The first performance characteristic I wanted to evaluate was backlash. As the design developed, I also wanted a practical way to characterize output torque, so I built a simple test rig that measures force at the end of a known lever arm. Using the measured force and lever-arm length, I calculated output torque using τ = Fr. Under the test conditions, the current design produced a calculated output torque of 6.7 N·m and exhibited substantially less backlash than earlier iterations. At higher loads, deformation of the PLA cycloidal discs becomes a significant limitation. Frictional heating during extended operation also reduces the PLA’s stiffness and worsens that deformation. I am now exploring engineering-grade thermoplastics and aluminum for the next iteration."]},
      { title: "Cycloidal Geometry", body: ["I selected a 21:1 reduction because I wanted a compact design no wider than the motor and no longer than its shaft. It was the largest reduction that produced reliable results at the resolution of my printer; higher ratios led to skipped teeth and inconsistent operation. I initially created the profile in SOLIDWORKS using an equation-driven cycloidal curve with 22 housing pins, 21 lobes, and 0.68 mm eccentricity. I later wrote a MATLAB program to generate XYZ profile points, which made it easier to revise variables and update the geometry across several files. From the original to the current design, I reduced the gearbox from roughly 30 mm to approximately 20 mm axially from the motor face while retaining the 21:1 reduction."] },
      { title: "Prototyping", body: ["Early versions exposed binding, vibration, clearance, and bearing-support problems. I iterated pin clearances, disc geometry, output support, material, and assembly access rather than treating the first successful rotation as a finished design. I initially printed all contacting components in PLA, but PLA-on-PLA contact caused significant wear. Replacing the housing pins with stainless steel largely eliminated that wear mode. Deformation under load is now the primary life-limiting issue, although it develops more slowly. To date, I have printed, assembled, and tested approximately 50 reducers. The current version uses seven output pins and dual discs to distribute load and reduce vibration. It is printed in PLA and uses steel pins, sleeve bearings, rolling bearings, and grease at the primary contact surfaces."] },
      { title: "Application", body: ["The gearboxes are now used throughout the six-axis arm. Building so many copies exposed repeatability and assembly issues that would not have appeared in a single prototype and pushed the design toward easier fabrication and maintenance."] },
      { title: "Next Steps", body: ["PLA’s mechanical and thermal properties are the primary limitations of the current design. Ventilation constraints previously prevented me from printing more advanced materials, but I have now installed proper ventilation and plan to evaluate PET, PA, PC, ASA, and fiber-reinforced variants with appropriate handling precautions. Following my summer CNC machining internship at Preci Manufacturing, I also ordered a desktop CNC mill. I plan to prototype the design in aluminum and then evaluate ferrous alloys within the machine’s rigidity and power limitations."]}
    ], tools: ["SOLIDWORKS", "MATLAB", "FDM 3D Printing", "DFM", "Stepper Motors"],
    media: [
      { type: "image", src: "/media/cycloidal-drive/v4.jpg", alt: "V4 Prototype" },
      { type: "image", src: "/media/cycloidal-drive/mountingsys.jpg", alt: "mounting system" },
      { type: "image", src: "/media/cycloidal-drive/v4assembly3.jpg", alt: "V4 assembly pt3" },
      { type: "image", src: "/media/cycloidal-drive/v4assembly2.jpg", alt: "V4 assembly pt2" },
      { type: "image", src: "/media/cycloidal-drive/v4assembly1.jpg", alt: "V4 assembly pt1" },
      { type: "image", src: "/media/cycloidal-drive/testrig.jpg", alt: "Test Rig" },
      { type: "image", src: "/media/cycloidal-drive/steelhousingpins.jpg", alt: "Steel housing pins implemented" },
      { type: "image", src: "/media/cycloidal-drive/wearissues.jpg", alt: "Wear issues" },
      { type: "image", src: "/media/cycloidal-drive/1cycloidv3.jpg", alt: "Latest cycloidal gearbox prototype" },
      { type: "image", src: "/media/cycloidal-drive/2cycloidv3.jpg", alt: "Compact cycloidal gearbox prototype" },
      { type: "image", src: "/media/cycloidal-drive/3cycloidv3.jpg", alt: "Cycloidal gearbox prototype detail" },
      { type: "image", src: "/media/cycloidal-drive/4cycloidv3.jpg", alt: "Cycloidal gearbox assembly" },
      { type: "video", src: "/media/cycloidal-drive/AssemblyExplodeV3.mp4", alt: "SOLIDWORKS exploded assembly animation" },
      { type: "image", src: "/media/cycloidal-drive/cycloid00.jpg", alt: "Early cycloidal drive prototype" },
      { type: "video", src: "/media/cycloidal-drive/cycloid0.mov", alt: "Early cycloidal drive test" },
      { type: "video", src: "/media/cycloidal-drive/cycloid000.mp4", alt: "Cycloidal drive running test" },
      { type: "image", src: "/media/cycloidal-drive/cycloid1.jpg", alt: "Cycloidal drive prototype and electronics" },
      { type: "video", src: "/media/cycloidal-drive/cycloid2.mov", alt: "Cycloidal drive powered test" },
      { type: "video", src: "/media/cycloidal-drive/CycloidalDriveExplode.mp4", alt: "Earlier cycloidal-drive exploded animation" },
      { type: "video", src: "/media/cycloidal-drive/cycloid3.mov", alt: "Cycloidal gearbox motion test" },
      { type: "image", src: "/media/cycloidal-drive/cycloid4.jpg", alt: "Early yellow cycloidal gearbox" },
      { type: "image", src: "/media/cycloidal-drive/cycloid5.jpg", alt: "Cycloidal gearbox internal components" }
    ]
  },
  {
    slug: "marble-run", title: "Star Wars Marble Run", category: "Mechanism Design · Course Project", date: "Fall 2025",
    summary: "A two-path, 600 mm-tall marble run with an Arduino-controlled elevator and launcher, designed and fabricated as a team project.",
    images: [{ src: "/media/marble-run/marble1.jpg", alt: "Completed Star Wars marble run" }],
    facts: [["Overall height", "600 mm"], ["PLA Consumed", "5 kg"], ["Marble Cycle Time", "~2 min"], ["Control", "Arduino UNO"]],
    overview: ["Last semester, I took John Sangster's Advanced 3D Drafting course, where the term project was to design a themed marble run in SOLIDWORKS and iteratively 3D print components through the UVM FabLab. Our group chose a Star Wars theme, and—since we were all excited about the project—decided to go a bit overboard. Our final design incorporated many classic Star Wars elements, including the Death Star, X-wing, TIE fighter, and more. Our design featured two paths—each spanning nearly the full 600 mm height—with the first path feeding into an elevator that returns the marble to the top to initiate the second path in a single continuous run. We prototyped extensively throughout the semester (totaling nearly 5 kg of printed parts!) and elected to include Arduino components to manage the marble elevator and launcher." ],
    sections: [
      { title: "Design and iteration", body: ["The project required extensive coordination between independently modeled components. Interfaces and mounting geometry had to remain consistent across these parts. We had to design not only for the theme, but for marble timing between the features, and for the independantly designed features to cohesively work together. Our design was one of the more expansive ones in the class, and thus it took us approximately 5 kg worth of printing to get everything dialed in."] },
      { title: "My contribution", body: ["I contributed primarily SOLIDWORKS modeling, both to individual components and to the assembly model of the whole marble run. In addition to that, as a FabLab Technician at this time, I handled all of our actual fabrication. Additionally, I helped with physical assembly and troubleshooting."] }
    ], tools: ["SOLIDWORKS", "Arduino", "FDM 3D Printing", "Mechanism Design", "Team Design", "Prototyping"],
    media: [
      { type: "image", src: "/media/marble-run/marble1.jpg", alt: "Completed Star Wars marble run" },
      { type: "youtube", src: "https://www.youtube-nocookie.com/embed/Wsroc9uRONk", alt: "Star Wars marble run demonstration video" }
    ]
  },
  {
    slug: "mouse-droid", title: "Wind-Up Mouse Droid", category: "Gear and Mechanism Design · Course Project", date: "Fall 2025",
    summary: "A functional Star Wars mouse droid powered by a custom spring, ratchet, and gear drivetrain designed without toolbox components.",
    images: [{ src: "/media/mouse-droid/wind0.jpg", alt: "Completed wind-up Star Wars mouse droid" }],
    facts: [["Power source", "Torsion spring"], ["Fabrication", "FDM PETG"], ["CAD", "SOLIDWORKS"], ["Gears", "Designed manually"]],
    overview: ["For this project, I decided to make the mouse droid from Star Wars. Going into the project, I wanted a real design challenge and planned from the start to make it suitable for 3D printing. The assignment requirement was to model and assemble any wheeled object in SOLIDWORKS, and the default option many students selected was an existing Razor scooter. Instead, I created a fully custom assembly with a working internal drivetrain."],
    sections: [
      { title: "Compact Internal Mechanism", body: ["Since the exterior geometry of a mouse droid is admittedly simplistic, I chose to develop the internal systems as well. I designed a wind-up mechanism so the model would not only meet the wheeled-vehicle requirement, but actually move like one. To make that possible—in addition to the outer shell, wheels, and undercarriage—I built a compact wind-up gearbox inside the body. The mechanism includes a large central ratchet, spiral torsion spring, gear train, and cartoonish style winding key, allowing the model to run under stored spring energy."] },
      { title: "Design for printing", body: ["Although only a completed CAD assembly was required, I also iteratively 3D printed the parts in PETG to verify fit and overall mechanism performance. Printing revealed issues that were not apparent in the CAD assembly, particularly around gear mesh, shaft fit, and spring behavior. I redesigned and reprinted the affected components until the mechanism operated reliably."] }
    ], tools: ["SOLIDWORKS", "Gear Design", "Torsion Springs", "Ratchet Mechanisms", "PETG", "Design for Additive Manufacturing"],
    media: [
      { type: "image", src: "/media/mouse-droid/wind0.jpg", alt: "Completed mouse droid" },
      { type: "image", src: "/media/mouse-droid/wind00.jpg", alt: "Mouse droid exterior" },
      { type: "image", src: "/media/mouse-droid/wind1.jpg", alt: "Mouse droid CAD assembly" },
      { type: "image", src: "/media/mouse-droid/wind2.jpg", alt: "Mouse droid internal drivetrain" },
      { type: "image", src: "/media/mouse-droid/wind3.jpg", alt: "Wind-up gear mechanism" },
      { type: "image", src: "/media/mouse-droid/wind4.jpg", alt: "Mouse droid printed components" },
      { type: "image", src: "/media/mouse-droid/wind5.jpg", alt: "Mouse droid mechanism detail" },
      { type: "image", src: "/media/mouse-droid/wind6.jpg", alt: "Ratchet and gear detail" },
      { type: "image", src: "/media/mouse-droid/wind7.jpg", alt: "Mouse droid assembly process" },
      { type: "image", src: "/media/mouse-droid/wind8.jpg", alt: "Mouse droid drivetrain parts" },
      { type: "image", src: "/media/mouse-droid/wind9.jpg", alt: "Mouse droid CAD detail" },
      { type: "image", src: "/media/mouse-droid/wind10.jpg", alt: "Mouse droid prototype detail" },
      { type: "image", src: "/media/mouse-droid/wind11.jpg", alt: "Mouse droid final assembly detail" }
    ]
  },
  {
    slug: "filament-spool-holder", title: "Filament Recycler Spool Holder", category: "FabLab Improvement · Reverse Engineering", date: "2026",
    summary: "A replacement Filabot attachment that allows the FabLab to reuse generic filament spools instead of purchasing proprietary ones.",
    images: [{ src: "/media/filament-spool-holder/filabot3.jpg", alt: "Custom spool holder installed on the Filabot system" }],
    facts: [["Material", "PETG"], ["Process", "Reverse engineering"], ["Application", "Daily FabLab use"], ["Result", "Generic spool support"]],
    overview: ["The FabLab’s filament recycler was supplied with an attachment intended for proprietary spools, even though the lab already had many empty generic spools. I designed a replacement attachment that fit the existing machine and securely retained common spool sizes. The finished part remains in use on the Filabot and supports the lab’s in-house recycled PLA workflow."],
    sections: [
      { title: "Reverse engineering", body: ["I documented the machine from multiple angles, took the critical dimensions, obtained the stock attachment STL, and printed a physical reference. I preserved the mounting interface while replacing the proprietary retention feature with a threaded shaft and large wing-nut retainer."] },
      { title: "Testing and revision", body: ["The first functional print fit the machine and successfully respooled loose filament, but the threads were sticky and the retainer felt weaker than necessary. I adjusted the tolerances, increased wall count and infill, and reprinted the design in PETG. The revised attachment prevents both spool slippage and the traverse mechanism from pulling the spool off the shaft."] }
    ], tools: ["SOLIDWORKS", "Reverse Engineering", "PETG", "Thread Design", "Dimensional Measurement", "Design for Additive Manufacturing"],
    media: [
      { type: "image", src: "/media/filament-spool-holder/filabot3.jpg", alt: "Custom spool holder installed on Filabot" },
      { type: "image", src: "/media/filament-spool-holder/filabot1.jpg", alt: "Filabot spooler before modification" },
      { type: "image", src: "/media/filament-spool-holder/filabot2.jpg", alt: "Custom spool holder components" },
      { type: "image", src: "/media/filament-spool-holder/filabot4.jpg", alt: "Printed threaded spool holder" },
      { type: "image", src: "/media/filament-spool-holder/filabot5.jpg", alt: "Generic spool mounted to custom holder" },
      { type: "video", src: "/media/filament-spool-holder/filabot.mov", alt: "Filabot spool holder operating test" }
    ]
  },
  {
    slug: "virago-rebuild", title: "1981 Yamaha Virago Rebuild", category: "Mechanical Repair · Personal Project", date: "Summer Project",
    summary: "A troubleshooting and repair effort that returned a non-running 1981 Yamaha Virago to operation using serviceable components recovered from a donor motorcycle.",
    images: [{ src: "/media/virago-rebuild/virago1.jpg", alt: "1981 Yamaha Virago during the rebuild" }],
    facts: [["Engine", "920 cc V-twin"], ["Electrical", "Harness reconstruction"], ["Fuel system", "Carburetor rebuild"], ["Outcome", "Running and rideable"]],
    overview: ["A friend and I began with two non-running 1981 Viragos (one substantially better off than the other) and combined the usable components into one motorcycle. The project required diagnosis across the electrical, fuel, starting, charging, and mechanical systems. Because the project predates this portfolio, the process was not documented as thoroughly as my current work, but it remains an important example of practical troubleshooting and problem solving."],
    sections: [
      { title: "Electrical and fuel systems", body: ["Both wiring harnesses had been damaged by mice, so we used factory diagrams to reconstruct most of the wiring. We also disassembled, cleaned, and rebuilt the carburetor after tracing a continuous fuel leak to a stuck float."] },
      { title: "Starter and charging system", body: ["We disassembled the starter system and engine-side components, replaced worn gears, and adjusted the internal arrangement of the starter gearbox to effectively incorporate Yamaha’s later improvement to the early Virago starter design. After the engine ran, we diagnosed a failed charging system, replaced the stator, resealed the engine case, changed the oil, and returned the motorcycle to running condition."] }
    ], tools: ["Service Manuals", "Electrical Diagnosis", "Carburetors", "Engine Repair", "Mechanical Troubleshooting", "Hand Tools"],
    media: [
      { type: "image", src: "/media/virago-rebuild/virago1.jpg", alt: "1981 Yamaha Virago rebuild" },
      { type: "image", src: "/media/virago-rebuild/virago2.jpg", alt: "Virago during disassembly" },
      { type: "image", src: "/media/virago-rebuild/virago3.jpg", alt: "Virago engine-side components" },
      { type: "image", src: "/media/virago-rebuild/virago4.jpg", alt: "Motorcycle repair process" },
      { type: "image", src: "/media/virago-rebuild/virago5.jpg", alt: "Virago mechanical repair detail" },
      { type: "image", src: "/media/virago-rebuild/virago6.jpg", alt: "Virago rebuild progress" },
      { type: "image", src: "/media/virago-rebuild/virago7.jpg", alt: "Reassembled 1981 Yamaha Virago" }
    ]
  }
];

export const projectBySlug = Object.fromEntries(projects.map(project => [project.slug, project]));
