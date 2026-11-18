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
      summary: "Graduation project: a personalized travel and match-day companion app for visitors and local businesses in Saudi Arabia.",
      context: "Senior project, team of five",
      image: "assets/img/projects/yalla.png",
      overview: "A bilingual mobile app for two groups: visitors to Saudi Arabia and local businesses. Visitors choose a city, discover activities, get AI-generated day plans built around their interests, budget, and match kick-off times, collect stamps in a digital passport, and earn rewards from local businesses. Businesses list their places so they appear in visitors' plans and get insight into the visitors they attract.",
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
        "886 backend tests and 248 Flutter tests passing at the time of the expo",
        "Concept adapted for the Princess Nourah University tourism hackathon (Oct 2026)"
      ],
      github: ""                                 // TODO repository link
    },
    {
      title: "Cacti RCE assessment",
      summary: "Exploiting and defending CVE-2022-46169: unauthenticated remote code execution in Cacti 1.2.22 (CVSS 9.8).",
      context: "CYS405 Penetration Testing & Ethical Hacking capstone, team shadowStrike (two people)",
      image: "assets/img/projects/cacti.png",
      overview: "A full attack-and-defence cycle against a vulnerable Cacti server in the TryHackMe Cactus lab: from reconnaissance and exploitation through post-exploitation, then detection, prevention, and a controlled re-test.",
      problem: "Cacti 1.2.22 trusts the spoofable X-Forwarded-For header to authorize its remote agent, then passes an unsanitized poller_id into a system call. The result is a critical, unauthenticated path to running commands on the server.",
      role: [
        "Phase 1, reconnaissance: ran a full TCP sweep and service/version detection with Nmap, mapping 7 open ports and identifying Cacti on nginx and PHP as the primary target",
        "Phase 2, vulnerability analysis: confirmed Cacti 1.2.22 from its changelog and traced the root cause: authorization that trusts a spoofable X-Forwarded-For header (CWE-290), and an unsanitized poller_id passed into proc_open() (CWE-78)",
        "Phase 5, detection: wrote the detection rule that flags any poller_id carrying shell metacharacters, in Sigma, Splunk SPL, and Wazuh"
      ],
      tech: ["Nmap", "curl", "Metasploit", "MySQL", "hashcat", "Sigma", "Splunk SPL", "Wazuh", "TryHackMe"],
      outcomes: [
        "As a team, achieved unauthenticated remote code execution inside an authorized, isolated lab, then designed a compensating control",
        "Validated the countermeasure: a legitimate request still returned 200, while the injection attempt was blocked with 403",
        "Findings: F-01 unauthenticated RCE (Critical, 9.8); F-02 exposed database credentials (High)"
      ],
      github: ""
    },
    {
      title: "Defensive security framework for a non-profit",
      summary: "Network segmentation, hardened controls, and staff training to protect a charity's donor and financial data.",
      context: "CYS406 Data and Network Security, team of four",
      image: "assets/img/projects/framework.png",
      overview: "A security framework for a 100-person charity, mapped to the NIST Cybersecurity Framework and governed by ISO/IEC 27001. It splits the network into three zones behind a Cisco ASA firewall, hardens the switches, and adds policies and phishing training for staff.",
      problem: "Charities hold valuable donor and financial data on small IT budgets, with staff and volunteers often connecting from unmanaged devices. One phishing email can lead to a breach of the donor database.",
      role: [
        "Security Analyst: led the literature review and threat assessment",
        "Compared NIST CSF and ISO/IEC 27001 and mapped every control to a NIST CSF function",
        "Designed the three-zone architecture: outside, inside staff LAN, and a secure DMZ for the donor and finance servers"
      ],
      tech: ["Cisco Packet Tracer", "Cisco ASA 5506-X", "NIST CSF", "ISO/IEC 27001"],
      outcomes: [
        "100% packet loss from a simulated compromised staff PC to the donor and finance servers",
        "0% packet loss between staff machines, so everyday work kept flowing",
        "42 unused switch ports shut down across two switches"
      ],
      github: ""
    },
    {
      title: "PSU-ClinicLab",
      summary: "Finding, fixing, and testing security flaws in a clinic web application.",
      context: "CYS402 Secure Software Development, Team 6 (three people)",
      image: "assets/img/projects/cliniclab.png",
      overview: "A clinic app where patients log in, book and search appointments, and staff use an admin page. The team attacked it, fixed three serious flaws, and proved each fix with automated tests.",
      problem: "One flaw in the app could expose every patient's medical visits, along with the login details of patients and staff.",
      role: [
        "Owned Flaw 1, SQL injection: showed that a crafted email logged in as another patient with no password, traced the cause to user input pasted into the SQL query, and fixed it with a parameterized query and hashed password checks",
        "Proved the fix with an automated test (test_login_injection_is_blocked)",
        "Solved the PortSwigger lab on SQL injection allowing login bypass"
      ],
      tech: ["Python", "Flask", "SQLite", "Jinja2", "pytest", "PortSwigger Web Security Academy"],
      outcomes: [
        "Fixed three flaws as a team: SQL injection, stored cross-site scripting, and broken access control",
        "Added bonus hardening: hashed passwords, a lockout after 5 failed logins, and security headers",
        "All 8 tests passed on the combined code"
      ],
      github: ""
    },
    {
      title: "Cybersecurity Labs",
      summary: "Hands-on practice across security operations, web application security, penetration testing, and network defense.",
      context: "Tuwaiq Academy SOC Program and PSU cybersecurity coursework",
      image: "assets/img/projects/labs.png",
      overview: "A collection of practical security work from my SOC training and cybersecurity courses, covering both the defensive and offensive sides of security.",
      problem: "",
      role: [
        "Security operations: SIEM, log analysis, threat detection, and incident investigation (Tuwaiq Academy SOC Program)",
        "Web application security: SQL injection labs with Burp Suite and PortSwigger Web Security Academy (CYS402)",
        "Penetration testing: exploitation, detection, and mitigation of CVE-2022-46169 with Nmap, Metasploit, and hashcat (CYS405)",
        "Network defense: a three-zone segmented network behind a Cisco ASA firewall in Packet Tracer (CYS406)"
      ],
      tech: ["SIEM", "Burp Suite", "PortSwigger Web Security Academy", "TryHackMe", "Cisco Packet Tracer"],
      outcomes: [],
      github: ""                                 // optional: link a repo with your lab write-ups
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
      summary: "A relational database that manages flights, bookings, crew, and baggage for an airline.",
      context: "IS241 Database Management and Applications, team of three",
      image: "assets/img/projects/airline.png",
      overview: "A centralized relational database for core airline operations, built around eight entities: passengers, tickets, seats, planes, flights, baggage, airports, and crew members, with crew specialized into pilots and flight attendants.",
      problem: "Without an automated system, airline operations suffer from data errors, slow booking and scheduling, and difficulty getting accurate information or producing reports.",
      role: [
        "Defined 11 business rules, then designed the ER diagram, relational model, data dictionary, and search, insert, update, and delete specifications",
        "Wrote SQL queries for operational questions, such as bags checked per flight, flights with an average fare above 200 that weren't cancelled or delayed, and passengers with no checked baggage"
      ],
      tech: ["SQL", "ER modelling", "Relational design"],
      outcomes: ["Delivered a working schema with 11 SQL queries that answer real operational questions"],
      github: ""
    },
    {
      title: "PSU Campus Preorder System",
      summary: "Requirements and design for a secure food preordering platform at PSU's Food Hub.",
      context: "IS231 Systems Analysis and Design, team of four",
      image: "assets/img/projects/preorder.png",
      overview: "A web-based platform where students, faculty, and staff browse menus, pay online, and preorder meals for scheduled pickup, while restaurant staff manage orders and administrators monitor operations and reports.",
      problem: "Long queues at the Food Hub during breaks make students late for class, and some skip meals to avoid waiting. We confirmed this by observing the Food Hub and talking with students.",
      role: [
        "Domain discovery: stakeholder analysis, on-site observation, and student interviews",
        "Vision document with measurable success criteria, such as cutting pickup wait time by at least 50%",
        "Functional and non-functional requirements, including security: university single sign-on, role-based access control, encryption of stored data, and audit logs",
        "Compliance requirements aligned with the NCA cybersecurity framework, PCI DSS for payments, and GDPR-style privacy practices",
        "Five user stories with Given/When/Then acceptance criteria",
        "UML models: use-case diagram, system sequence diagrams, activity diagram, CRC cards, and a design class diagram"
      ],
      tech: ["UML", "Requirements analysis", "User stories", "NCA, PCI DSS compliance"],
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
      items: ["SIEM", "Log analysis", "Threat detection", "Incident investigation", "Detection rules (Sigma, Splunk SPL, Wazuh)", "Penetration testing (Nmap, Metasploit)", "Web application security", "Network security and segmentation", "Security frameworks (NIST CSF, ISO/IEC 27001)", "Burp Suite, TryHackMe, Cisco Packet Tracer"]
    },
    {
      group: "Business & consulting",
      items: ["Systems analysis and design", "Business analysis", "Problem solving", "Research & analysis", "Project planning (WBS, Gantt, risk)", "Agile and Scrum", "Presentation skills"]
    },
    {
      group: "Technical",
      items: ["Flutter", "Java", "Python (Flask, pytest)", "SQL and database design", "MySQL", "HTML, CSS, JavaScript", "Bootstrap", "Node.js & Express", "UML"]
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
