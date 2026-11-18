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
    email: "",                                   // TODO e.g. "daad.aljaber@yourmail.com"
    location: "Riyadh, Saudi Arabia",
    linkedin: "",                                // TODO e.g. "https://www.linkedin.com/in/your-handle"
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
        "ETHC303 Ethics of Computing"
      ],
      notes: ""                                  // TODO optional: GPA, honours, awards
    }
  ],

  /* ---------- Experience & programs (newest first) ---------- */
  experience: [
    {
      org: "Riyad Bank",
      role: "Intern",
      dates: "",                                 // TODO e.g. "Jun 2026 – Aug 2026"
      description: "",                           // TODO one or two sentences on the team and your work
      achievements: [],                          // TODO e.g. ["Mapped access controls for …"]
      skills: []                                 // TODO e.g. ["Risk assessment", "Policy review"]
    },
    {
      org: "McKinsey.org",
      role: "Forward Program",
      dates: "2026",
      description: "",                           // TODO what the program covered for you
      achievements: [],
      skills: []                                 // TODO e.g. ["Structured problem solving", "Communication"]
    },
    {
      org: "Tuwaiq Academy",
      role: "Security Operations Center (SOC) Program",
      dates: "",                                 // TODO
      description: "",                           // TODO
      achievements: [],
      skills: ["Security operations"]            // add the tools you used, e.g. "Splunk"
    },
    {
      org: "Consultancy Route for Students (CRS)",
      role: "Case Team and Media Team",
      dates: "",                                 // TODO
      description: "",                           // TODO the kinds of cases and media work you did
      achievements: [],
      skills: []
    }
    /* Template — copy for other volunteering or development experience:
    ,{
      org: "",
      role: "",
      dates: "",
      description: "",
      achievements: [],
      skills: []
    }
    */
  ],

  /* ---------- Projects ----------
     image: path to a screenshot (replace the placeholder SVGs in /assets/img/projects)
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
      summary: "Hands-on SIEM, log analysis, threat intelligence, and incident response exercises.",
      context: "Security operations practice",
      image: "assets/img/projects/labs.svg",
      overview: "A collection of security operations exercises covering SIEM investigation in Splunk, log analysis, threat intelligence, and incident response.",
      problem: "",                               // TODO the scenarios you investigated
      role: [],                                  // TODO what you did in each lab
      tech: ["Splunk", "SIEM"],
      outcomes: [],                              // TODO
      github: ""                                 // TODO
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
    },
    {
      title: "COOP CV Builder",
      summary: "A web-based CV creation platform.",
      context: "",                               // TODO e.g. "Course project, team of four"
      image: "assets/img/projects/cv-builder.svg",
      overview: "A web-based platform for creating CVs.",
      problem: "",                               // TODO
      role: [],                                  // TODO
      tech: [],                                  // TODO e.g. ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"]
      outcomes: [],                              // TODO
      github: ""                                 // TODO
    },
    {
      title: "FitSync",
      summary: "A fitness management application.",
      context: "",                               // TODO
      image: "assets/img/projects/fitsync.svg",
      overview: "An application for managing fitness activity.",
      problem: "",                               // TODO
      role: [],                                  // TODO
      tech: [],                                  // TODO
      outcomes: [],                              // TODO
      github: ""                                 // TODO
    }
  ],

  /* ---------- Certifications & professional development ---------- */
  certifications: [
    { name: "Security Operations Center (SOC) Program", issuer: "Tuwaiq Academy", date: "", link: "" },
    { name: "Forward Program", issuer: "McKinsey.org", date: "2026", link: "" }
    /* Template:
    ,{ name: "", issuer: "", date: "", link: "" }
    */
  ],

  /* ---------- Skills ----------
     Keep only skills you can back up with something on this page or your CV. */
  skills: [
    {
      group: "Cybersecurity",
      items: ["SIEM & Splunk", "Log analysis", "Threat intelligence", "Incident response", "Security operations"]
    },
    {
      group: "Business & consulting",
      items: ["Business analysis", "Problem solving", "Research & analysis", "Presentation skills", "Strategic thinking"]
    },
    {
      group: "Technical",
      items: ["HTML, CSS, JavaScript", "Python", "SQL", "MySQL", "PostgreSQL", "Node.js", "Flutter", "FastAPI"]
    }
  ],

  /* ---------- Leadership & activities ---------- */
  leadership: [
    { name: "Consultancy Route for Students", role: "Case Team and Media Team", date: "", description: "" },  // TODO description
    { name: "Career Expo", role: "Volunteer", date: "", description: "" },                                     // TODO
    { name: "International Conference on Data Science and ML Applications (CDMA 2025)", role: "", date: "2025", description: "" }, // TODO role
    { name: "Elm Virtual Club", role: "", date: "", description: "" }                                           // TODO
  ]
};
