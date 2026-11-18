/* ==========================================================================
   SITE CONTENT — edit this file to update the website.
   --------------------------------------------------------------------------
   Rules of thumb:
   • Any field left as "" (empty) or [] (empty list) is simply not shown,
     so you never publish a placeholder by accident.
   • Fields marked  // TODO  are waiting for your real details.
   • To add an entry, copy an existing { ... } block, paste it, and edit it.
   • Order on the page = order in this file.
   ========================================================================== */

window.SITE = {
  /* ---------- Links & contact ---------- */
  profile: {
    name: "Daad Aljaber",
    email: "daadtaljaber@gmail.com",
    location: "Riyadh, Saudi Arabia",
    linkedin: "https://www.linkedin.com/in/daadaljaber",
    github: "https://github.com/daadaljaber",
    cv: "assets/cv/Daad-Aljaber-CV.pdf",         // replace the PDF in /assets/cv with your real CV
    // Optional: paste a Formspree endpoint (https://formspree.io) to receive form
    // messages without opening an email app. Leave "" to use the email fallback.
    formEndpoint: ""
  },

  /* ---------- Education ---------- */
  education: [
    {
      school: "Prince Sultan University",
      college: "College of Computer and Information Sciences",
      degree: "Bachelor of Science in Information Systems",
      track: "Cybersecurity Track",
      dates: "Aug 2022 – Aug 2027 (expected)",
      coursework: [
        "CYS402 Secure Software Development",
        "CYS405 Penetration Testing & Ethical Hacking",
        "CYS406 Data and Network Security",
        "IS311 Web Development",
        "IS361 Project Management",
        "IS241 Database Management and Applications",
        "IS231 Systems Analysis and Design",
        "ETHC303 Ethics of Computing"
      ],
      notes: ""                                  // optional, e.g. "GPA: 2.95/4.0"
    }
  ],

  /* ---------- Experience & programs (newest first) ---------- */
  experience: [
    {
      org: "Consultancy Route for Students (CRS)",
      role: "Cases Team Member",
      dates: "Sep 2023 – Present",
      description: "Student consulting club in Riyadh. I joined the Media Team in September 2023 and moved to the Cases Team in April 2026, where I work on student consulting cases.",
      achievements: [
        "Cases Team Member, Apr 2026 – present",
        "Media Team Member, Sep 2023 – Apr 2026"
      ],
      skills: ["Consulting", "Creative problem solving"]
    },
    {
      org: "Tuwaiq Academy",
      role: "Security Operations Center (SOC) Program",
      dates: "Sep 2026",
      description: "A 30-hour Security Operations Center program, completed 6–17 September 2026, with hands-on training across the core work of a SOC analyst.",
      achievements: [
        "Hands-on training in SIEM, log analysis, threat detection, and incident investigation",
        "Covered networking fundamentals and day-to-day SOC operations"
      ],
      skills: ["SIEM", "Log analysis", "Threat detection", "Incident investigation", "Networking"]
    },
    {
      org: "McKinsey.org",
      role: "Forward Program",
      dates: "2026, in progress",
      description: "",                           // optional: what the program covers for you
      achievements: [],
      skills: []
    },
    {
      org: "Riyad Bank",
      role: "Customer Service Intern, Private Banking",
      dates: "Jul 2022 – Aug 2022",
      description: "Handled client inquiries and supported day-to-day banking service requests in a private banking environment.",
      achievements: [],
      skills: ["Client service", "Banking operations"]
    }
  ],

  /* ---------- Projects ----------
     image: path to a screenshot in /assets/img/projects
     github: repository URL; leave "" to hide the link                              */
  projects: [
    {
      title: "YALLA!",
      summary: "Graduation project: a tourism and activities app for exploring Saudi cities.",
      context: "Senior project, team of five",
      image: "assets/img/projects/yalla.svg",
      overview: "A mobile platform where visitors choose a city, discover activities, plan AI-assisted itineraries, collect digital passport stamps, and book seats for football matches. It has separate experiences for visitors and businesses.",
      problem: "Visitors planning a trip around activities and match days have to piece together discovery, itineraries, bookings, and tickets across separate services.",
      role: [
        "Led mobile development and integration of the Flutter app",
        "Built two-factor sign-in and password recovery",
        "Ran the system analysis: visitor and business surveys and a competitor analysis",
        "Built the per-city activity datasets behind the AI itinerary feature"
      ],
      tech: ["Flutter", "FastAPI", "PostgreSQL"],
      outcomes: [
        "Presented at the PSU CCIS Senior Project Expo (Nov 2026)",
        "Concept adapted for the Princess Nourah University tourism hackathon (Oct 2026)"
      ],
      github: ""                                 // TODO repository link
    },
    {
      title: "Cybersecurity Labs",
      summary: "Hands-on practice across security operations, web application security, penetration testing, and network defense.",
      context: "Tuwaiq Academy SOC Program and PSU cybersecurity coursework",
      image: "assets/img/projects/labs.svg",
      overview: "A collection of practical security work from my SOC training and cybersecurity courses, covering both the defensive and offensive sides of security.",
      problem: "",
      role: [
        "Security operations: SIEM, log analysis, threat detection, and incident investigation (Tuwaiq Academy SOC Program)",
        "Web application security: SQL injection labs with Burp Suite and PortSwigger Web Security Academy (CYS402)",
        "Penetration testing: exploitation, detection, and mitigation of CVE-2022-46169 in the TryHackMe Cactus room (CYS405)",
        "Network defense: designing a defensive network in Cisco Packet Tracer (CYS406)"
      ],
      tech: ["SIEM", "Burp Suite", "PortSwigger Web Security Academy", "TryHackMe", "Cisco Packet Tracer"],
      outcomes: [],
      github: ""                                 // optional: link a repo with your lab write-ups
    },
    {
      title: "Cacti RCE assessment",
      summary: "Applied penetration test of CVE-2022-46169: exploitation, detection, and mitigation.",
      context: "CYS405 capstone, team shadowStrike",
      image: "assets/img/projects/cacti.svg",
      overview: "A graded applied penetration test of an unauthenticated remote code execution vulnerability in Cacti (CVE-2022-46169), using the TryHackMe Cactus room, covering exploitation, detection, and mitigation.",
      problem: "",
      role: [],                                  // TODO your part of the assessment
      tech: ["TryHackMe"],
      outcomes: [],
      github: ""
    },
    {
      title: "PSU-ClinicLab",
      summary: "Finding and fixing security flaws in a clinic web application.",
      context: "CYS402 Secure Software Development, team of three",
      image: "assets/img/projects/cliniclab.svg",
      overview: "A secure software development project in which the team found and fixed a series of security flaws in a clinic application.",
      problem: "",
      role: [
        "Owned the SQL injection workstream: demonstrated a login bypass, replaced it with parameterized queries, and added password hashing"
      ],
      tech: ["SQL", "PortSwigger Web Security Academy"],
      outcomes: [],
      github: ""
    },
    {
      title: "COOP CV Builder",
      summary: "A web platform that helps students build professional CVs for COOP and internship applications.",
      context: "IS311 Web Development, team of three",
      image: "assets/img/projects/coop-cv-builder.png",
      overview: "A full-stack website where senior students create and customize a CV, choose from several templates, preview and download it, browse internship opportunities, and read application tips. Records are stored and managed in a database.",
      problem: "Students preparing for COOP and internship applications often start from a blank page and aren't sure what a CV needs to meet program requirements.",
      role: [
        "Built the web-based CV builder with dynamic forms, database connectivity, and data management",
        "Worked across frontend development, backend integration, database management, and CRUD operations"
      ],
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express", "MySQL"],
      outcomes: ["Final project grade: 19/20"],
      github: ""                                 // TODO repository link
    },
    {
      title: "FitSync",
      summary: "Project plan for an integrated gym management system.",
      context: "IS361 Project Management, team of five",
      image: "assets/img/projects/fitsync.png",
      overview: "FitSync is an integrated gym management system that replaces manual operations with one platform for member registration, subscription plans, trainers, class scheduling and booking, payment tracking, and reporting.",
      problem: "A gym run on manual processes deals with duplicated records, errors, and slow administration, with no single place to manage members, classes, and payments.",
      role: [
        "Planned the system through a project charter, stakeholder and scope analysis, and a hybrid development approach",
        "Produced the work breakdown structure, cost estimates, Gantt chart, and network diagram",
        "Prepared the risk reporting, based on PMBOK guidelines",
        "Tracked tasks, workload, and milestones in ClickUp"
      ],
      tech: ["ClickUp", "WBS", "Gantt chart", "PMBOK risk analysis"],
      outcomes: ["Delivered a complete project plan, including a $57,200 bottom-up cost estimate"],
      github: ""
    },
    {
      title: "Airline Management System",
      summary: "A relational database design for running an airline.",
      context: "IS241 Database Management and Applications",
      image: "assets/img/projects/airline.svg",
      overview: "A relational database covering flights, crew, passengers, tickets, and baggage.",
      problem: "",
      role: [
        "Designed the database and delivered the ER diagram, relational model, data dictionary, and query specifications"
      ],
      tech: ["SQL", "ER modelling", "Relational design"],
      outcomes: [],
      github: ""
    },
    {
      title: "PSU Campus Preorder System",
      summary: "Requirements and design for a secure campus food preordering platform.",
      context: "IS231 Systems Analysis and Design",
      image: "assets/img/projects/preorder.svg",
      overview: "An analysis and design project for a platform that lets the PSU community preorder food on campus securely.",
      problem: "",
      role: [
        "Defined the stakeholders, user stories, acceptance criteria, and system requirements",
        "Modelled the system in UML and C4"
      ],
      tech: ["UML", "C4 model", "Requirements analysis"],
      outcomes: [],
      github: ""
    },
    {
      title: "Non-profit security framework",
      summary: "A defensive network security design for a charitable organization.",
      context: "CYS406 Data and Network Security, team project",
      image: "assets/img/projects/framework.svg",
      overview: "A defensive security framework for a non-profit charitable organization, modelled in Cisco Packet Tracer.",
      problem: "",
      role: [],                                  // TODO
      tech: ["Cisco Packet Tracer"],
      outcomes: [],
      github: ""
    }
  ],

  /* ---------- Certifications & professional development ---------- */
  certifications: [
    { name: "Security Operations Center (SOC) Program", issuer: "Tuwaiq Academy, 30 hours, credential ID g0w2XkR", date: "Sep 2026", link: "" },
    { name: "ISO 8000 Master Data Quality Manager (MDQM)", issuer: "ECCMA", date: "2026", link: "" },
    { name: "Governance & Internal Audit: Information Technology and Information Security", issuer: "Elm, Jisoor Program", date: "Aug 2026", link: "" },
    { name: "Forward Program", issuer: "McKinsey.org, in progress", date: "2026", link: "" },
    { name: "Cybersecurity Workshop", issuer: "Network Binary", date: "2026", link: "" },
    { name: "AI Safety & Security Ambassador", issuer: "Elm Virtual Student Club", date: "2026", link: "https://www.credly.com/badges/1dfb61ad-d657-4f1f-ad5b-6cb03ec3f05d" },
    { name: "Virtual Tourism Hackathon Program", issuer: "Tourism Development Fund (TDF Grow)", date: "2026", link: "" },
    { name: "Systems Security Certified Practitioner (SSCP) Specialization", issuer: "ISC2, via Coursera", date: "2025", link: "" },
    { name: "Agile Software Development", issuer: "Coursera", date: "2025", link: "https://www.coursera.org/account/accomplishments/verify/5R7GGA8G59CA" },
    { name: "Enterprise Data Architecture and Operations", issuer: "Coursera", date: "2025", link: "https://www.coursera.org/account/accomplishments/verify/NETJ1Y4OZ2Y0" }
    /* Template:
    ,{ name: "", issuer: "", date: "", link: "" }
    */
  ],

  /* ---------- Skills ----------
     Keep only skills you can back up with something on this page or your CV. */
  skills: [
    {
      group: "Cybersecurity",
      items: ["SIEM", "Log analysis", "Threat detection", "Incident investigation", "Network security fundamentals", "Web application security", "Penetration testing", "Burp Suite, TryHackMe, Cisco Packet Tracer"]
    },
    {
      group: "Business & consulting",
      items: ["Systems analysis and design", "Business analysis", "Problem solving", "Research & analysis", "Project planning (WBS, Gantt, risk)", "Agile and Scrum", "Presentation skills"]
    },
    {
      group: "Technical",
      items: ["Flutter", "Java", "SQL and database design", "MySQL", "HTML, CSS, JavaScript", "Bootstrap", "Node.js & Express", "UML"]
    }
  ],

  /* ---------- Leadership & activities ---------- */
  leadership: [
    { name: "Consultancy Route for Students", role: "Cases Team Member, previously Media Team Member", date: "2023 – Present", description: "More than three years with the club, first on the Media Team and since April 2026 on the Cases Team, working on student consulting cases." },
    { name: "Elm Virtual Club", role: "Operations Committee Member", date: "Mar 2026 – Present", description: "Help run the club's operations and activities; recognized with a membership certificate for my contributions." },
    { name: "PNU Tourism Hackathon", role: "Participant, Princess Nourah bint Abdulrahman University", date: "Oct 2026", description: "" },
    { name: "Career Expo, Prince Sultan University", role: "Contributor, Media Team", date: "2024 – 2026", description: "Contributed to the university's Career Expo three years running." },
    { name: "CDMA 2025 International Conference, Prince Sultan University", role: "Conference Support Team Member", date: "2025", description: "" },
    { name: "AHHIL Consultathon, King Saud University", role: "Semi-finalist", date: "2023", description: "" }
  ]
};
