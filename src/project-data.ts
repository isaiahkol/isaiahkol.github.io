export type Project = {
  slug: string; title: string; category: string; date: string; summary: string;
  images: { src: string; alt: string }[]; facts: [string, string][];
  overview: string[]; sections: { title: string; body: string[] }[];
  tools: string[];
  media: { type: "image" | "video" | "youtube"; src: string; alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "robot-arm", title: "6-DOF Robot Arm", category: "Robotics · Independent Project", date: "March 2026 — Present",
    summary: "A six-axis robotic arm designed and built around custom cycloidal gearboxes, open-loop stepper control, and 3D-printed structural components.",
    images: [{ src: "/media/cycloidal-drive/1cycloidv3.jpg", alt: "Cycloidal joint drive developed for the robot arm" }, { src: "/media/cycloidal-drive/2cycloidv3.jpg", alt: "Another cycloidal gearbox prototype" }],
    facts: [["Degrees of freedom", "6"], ["Joint reduction", "21:1"], ["Control", "Arduino Mega"], ["Motor drivers", "DM542TE"]],
    overview: ["I started this project to apply mechanism design, CAD, fabrication, electronics, and controls to one complete mechanical system. Rather than use purchased robot joints, I designed the drivetrain architecture and joint reducers myself.", "The current arm is operational in open loop and can be jogged from a computer keyboard. The mechanical system is complete enough for demonstrations, while limit switches, absolute position feedback, and higher-level motion control remain planned improvements."],
    sections: [
      { title: "Mechanical design", body: ["Each joint uses a custom 21:1 cycloidal drive. Two of the larger joints also use belt reductions to increase available torque while keeping the motors close to the base.", "The structure and gearbox housings were modeled in SolidWorks and iteratively printed. I designed around realistic print tolerances, bearing placement, fastener access, cable routing, and the different torque requirements at each joint."] },
      { title: "Controls and integration", body: ["Six stepper axes are controlled by an Arduino Mega and individual DM542TE drivers from a 24 V power supply. I developed serial and keyboard-jog control programs, corrected joint mapping and direction issues, and tuned driver current to balance useful torque against motor heating.", "The immediate next step is repeatable homing with limit switches. Longer-term work includes absolute encoders, closed-loop position verification, recorded motion playback, and inverse kinematics."] },
      { title: "What I learned", body: ["The project made system-level tradeoffs much more concrete. Gear reduction, motor sizing, print stiffness, backlash, wiring, heat, and software behavior all affect one another; improving one area can easily expose a limitation somewhere else."] }
    ], tools: ["SolidWorks", "Arduino", "C++", "Python", "FDM 3D Printing", "DM542TE Drivers", "Stepper Motors"],
    media: [
      { type: "image", src: "/media/cycloidal-drive/1cycloidv3.jpg", alt: "Cycloidal gearbox used for the robot-arm joints" },
      { type: "image", src: "/media/cycloidal-drive/2cycloidv3.jpg", alt: "Compact gearbox prototype" },
      { type: "image", src: "/media/cycloidal-drive/3cycloidv3.jpg", alt: "Cycloidal drive component view" },
      { type: "image", src: "/media/cycloidal-drive/4cycloidv3.jpg", alt: "Cycloidal drive assembly view" }
    ]
  },
  {
    slug: "cycloidal-drive", title: "Cycloidal Drive", category: "Gearbox Design · Independent Project", date: "January 2026 — Present",
    summary: "A compact 21:1 cycloidal gearbox designed from scratch as the primary joint reducer for a six-axis robot arm.",
    images: [{ src: "/media/cycloidal-drive/1cycloidv3.jpg", alt: "Assembled cycloidal gearbox prototype" }, { src: "/media/cycloidal-drive/2cycloidv3.jpg", alt: "Compact cycloidal gearbox prototype" }],
    facts: [["Reduction", "21:1"], ["Cycloidal lobes", "21"], ["Housing pins", "22"], ["Output pins", "7"]],
    overview: ["I became interested in cycloidal drives because they provide high reduction in a compact package and can be built with relatively simple parts. I designed this gearbox specifically for the joints of my robot arm rather than as an isolated demonstration.", "The final design uses two cycloidal discs, bearings at the output and eccentric shaft, steel pins, and a NEMA 17 stepper motor. Multiple generations were printed and tested before the design was integrated into the arm."],
    sections: [
      { title: "Geometry and CAD", body: ["The profile was created from an equation-driven cycloidal curve using 22 housing pins, 21 lobes, and a 0.68 mm eccentricity. I used MATLAB to verify the parametric geometry before rebuilding it as a controlled curve in SolidWorks.", "The gearbox was reduced from roughly 30 mm to approximately 20 mm from the motor face while retaining the 21:1 reduction."] },
      { title: "Prototyping", body: ["Early versions exposed binding, vibration, clearance, and bearing-support problems. I iterated pin clearances, disc geometry, output support, material, and assembly access rather than treating the first successful rotation as a finished design.", "The current version uses seven output pins and dual discs to distribute load and reduce vibration. The design is printed in PLA and uses steel pins, sleeve bearings, rolling bearings, and grease at the primary contact surfaces."] },
      { title: "Application", body: ["The gearboxes are now used throughout the six-axis arm. Building several copies exposed repeatability and assembly issues that would not have appeared in a single prototype and pushed the design toward easier fabrication and maintenance."] }
    ], tools: ["SolidWorks", "MATLAB", "Equation-Driven Curves", "FDM 3D Printing", "Design for Assembly", "Stepper Motors"],
    media: [
      { type: "image", src: "/media/cycloidal-drive/1cycloidv3.jpg", alt: "Latest cycloidal gearbox prototype" },
      { type: "image", src: "/media/cycloidal-drive/2cycloidv3.jpg", alt: "Compact cycloidal gearbox prototype" },
      { type: "image", src: "/media/cycloidal-drive/3cycloidv3.jpg", alt: "Cycloidal gearbox prototype detail" },
      { type: "image", src: "/media/cycloidal-drive/4cycloidv3.jpg", alt: "Cycloidal gearbox assembly" },
      { type: "video", src: "/media/cycloidal-drive/AssemblyExplodeV3.mp4", alt: "SolidWorks exploded assembly animation" },
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
    facts: [["Overall height", "600 mm"], ["Printed material", "Nearly 5 kg"], ["Paths", "2"], ["Control", "Arduino"]],
    overview: ["For an Advanced 3D Drafting course, our team designed a Star Wars-themed marble run in SolidWorks and fabricated it through the UVM FabLab. We intentionally went beyond the visual theme and built a continuous machine with two full paths.", "The first path feeds into a powered elevator that returns the marble to the top and initiates the second path. The final assembly incorporated a launcher, elevator, and multiple themed mechanisms."],
    sections: [
      { title: "Design and iteration", body: ["The project required extensive coordination between independently modeled components. Interfaces, mounting geometry, marble speed, print orientation, and service access all had to remain consistent as the design changed.", "We printed nearly 5 kg of parts over the semester. Failed tests were used to adjust track geometry, mechanism timing, clearances, and component stiffness before final assembly."] },
      { title: "My contribution", body: ["I contributed mechanical design, SolidWorks modeling, prototype fabrication, assembly, troubleshooting, and integration of the printed mechanisms with the Arduino-controlled elevator and launcher."] }
    ], tools: ["SolidWorks", "Arduino", "FDM 3D Printing", "Mechanism Design", "Team Design", "Prototyping"],
    media: [
      { type: "image", src: "/media/marble-run/marble1.jpg", alt: "Completed Star Wars marble run" },
      { type: "youtube", src: "https://www.youtube-nocookie.com/embed/Wsroc9uRONk", alt: "Star Wars marble run demonstration video" }
    ]
  },
  {
    slug: "mouse-droid", title: "Wind-Up Mouse Droid", category: "Gear and Mechanism Design · Course Project", date: "Fall 2025",
    summary: "A functional Star Wars mouse droid powered by a custom spring, ratchet, and gear drivetrain designed without toolbox components.",
    images: [{ src: "/media/mouse-droid/wind0.jpg", alt: "Completed wind-up Star Wars mouse droid" }],
    facts: [["Power source", "Torsion spring"], ["Fabrication", "FDM PETG"], ["CAD", "SolidWorks"], ["Gears", "Designed manually"]],
    overview: ["The assignment only required a modeled wheeled object, but I wanted the model to function physically. I designed the complete mouse droid and added a compact wind-up drivetrain inside the body.", "The mechanism includes a large central ratchet, spiral torsion spring, gear train, winding key, wheels, and undercarriage. I printed the assembly in PETG to test fit and actual operation."],
    sections: [
      { title: "Gear design", body: ["Because the assignment prohibited SolidWorks Toolbox components, I created every gear manually. That required learning the relationships among module, pitch diameter, tooth count, pressure angle, center distance, and tooth geometry.", "The drivetrain had to fit inside a small rectangular body while providing enough reduction for usable travel and enough strength for repeated winding."] },
      { title: "Design for printing", body: ["I divided the shell and drivetrain into printable, serviceable components and adjusted clearances after physical testing. Printing the project revealed issues that were not apparent in the CAD assembly, particularly around gear mesh, shaft fit, and spring behavior."] }
    ], tools: ["SolidWorks", "Gear Design", "Torsion Springs", "Ratchet Mechanisms", "PETG", "Design for Additive Manufacturing"],
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
    overview: ["The FabLab’s filament recycler was supplied with an attachment intended for proprietary spools, even though the lab already had many empty generic spools. I designed a replacement attachment that fit the existing machine and securely retained common spool sizes.", "The finished part remains in use on the Filabot and supports the lab’s in-house recycled PLA workflow."],
    sections: [
      { title: "Reverse engineering", body: ["I documented the machine from multiple angles, took the critical dimensions, obtained the stock attachment STL, and printed a physical reference. I preserved the mounting interface while replacing the proprietary retention feature with a threaded shaft and large wing-nut retainer."] },
      { title: "Testing and revision", body: ["The first functional print fit the machine and successfully respoolled loose filament, but the threads were sticky and the retainer felt weaker than necessary. I adjusted the tolerances, increased wall count and infill, and reprinted the design in PETG.", "The revised attachment prevents both spool slippage and the traverse mechanism from pulling the spool off the shaft."] }
    ], tools: ["SolidWorks", "Reverse Engineering", "PETG", "Thread Design", "Dimensional Measurement", "Design for Additive Manufacturing"],
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
    summary: "A complete troubleshooting and repair effort that returned a non-running 1981 Yamaha Virago to operation using two donor motorcycles.",
    images: [{ src: "/media/virago-rebuild/virago1.jpg", alt: "1981 Yamaha Virago during the rebuild" }],
    facts: [["Engine", "920 cc V-twin"], ["Electrical", "Harness reconstruction"], ["Fuel system", "Carburetor rebuild"], ["Outcome", "Running and rideable"]],
    overview: ["A friend and I began with two non-running 1981 Viragos and combined the usable components into one motorcycle. The project required diagnosis across the electrical, fuel, starting, charging, and mechanical systems.", "Because the project predates this portfolio, the process was not documented as thoroughly as my current work, but it remains an important example of practical troubleshooting and persistence."],
    sections: [
      { title: "Electrical and fuel systems", body: ["Both wiring harnesses had been damaged by mice, so we used factory diagrams to reconstruct most of the wiring. We also disassembled, cleaned, and rebuilt the carburetor after tracing a continuous fuel leak to a stuck float."] },
      { title: "Starter and charging system", body: ["We disassembled the starter system and engine-side components, replaced worn gears, and adjusted the arrangement to incorporate Yamaha’s later improvement to the early Virago starter design.", "After the engine ran, we diagnosed a failed charging system, replaced the stator, resealed the engine case, changed the oil, and returned the motorcycle to running condition."] }
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
