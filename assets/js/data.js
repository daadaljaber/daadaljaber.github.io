/* ==========================================================================
   SITE CONTENT — edit this file to update the website.
   --------------------------------------------------------------------------
   The site is bilingual. Every entry has its English text, plus an "ar"
   object holding the Arabic version of the same entry:

       { title: "FitSync", summary: "English…", ar: { summary: "عربي…" } }

   • Change the English, then change the matching field inside "ar".
   • If an Arabic field is missing or empty, the English one is shown instead,
     so links, images, and tool names (Nmap, SQL…) only need to be written once.
   • Any field left as "" (empty) or [] (empty list) is not shown.
   • Order on the page = order in this file.
   • Words on the page itself (menu, buttons, About text) live in i18n.js.
   ========================================================================== */

window.SITE = {
  /* ---------- Links & contact. formEndpoint: optional Formspree URL for the contact form ---------- */
  profile: {
    name: "Daad Aljaber",
    email: "daadtaljaber@gmail.com",
    location: "Riyadh, Saudi Arabia",
    linkedin: "https://www.linkedin.com/in/daadaljaber",
    github: "https://github.com/daadaljaber",
    cv: "assets/cv/Daad-Aljaber-CV.pdf",
    formEndpoint: "",
    ar: {
      location: "الرياض، المملكة العربية السعودية"
    }
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
        "CYS403 Cybersecurity Risk Management, Governance and Control",
        "CYS402 Secure Software Development",
        "CYS405 Penetration Testing & Ethical Hacking",
        "CYS406 Data and Network Security",
        "IS321 Enterprise Architecture",
        "IS205 Business Process Management",
        "IS231 Systems Analysis and Design",
        "IS241 Database Management and Applications",
        "IS311 Web Development",
        "IS361 Project Management",
        "IS371 Quantitative Analysis",
        "FIN210 Principles of Finance",
        "ACC111 Fundamentals of Financial Accounting",
        "ETHC303 Ethics of Computing"
      ],
      notes: "",
      ar: {
        school: "جامعة الأمير سلطان",
        college: "كلية علوم الحاسب والمعلومات",
        degree: "بكالوريوس العلوم في نظم المعلومات",
        track: "مسار الأمن السيبراني",
        dates: "أغسطس 2022 – أغسطس 2027 (متوقع)",
        coursework: [
          "CYS403 إدارة المخاطر والحوكمة والرقابة في الأمن السيبراني",
          "CYS402 تطوير البرمجيات الآمنة",
          "CYS405 اختبار الاختراق والاختراق الأخلاقي",
          "CYS406 أمن البيانات والشبكات",
          "IS321 هندسة المؤسسات",
          "IS205 إدارة عمليات الأعمال",
          "IS231 تحليل وتصميم النظم",
          "IS241 إدارة قواعد البيانات وتطبيقاتها",
          "IS311 تطوير الويب",
          "IS361 إدارة المشاريع",
          "IS371 التحليل الكمي",
          "FIN210 مبادئ المالية",
          "ACC111 أساسيات المحاسبة المالية",
          "ETHC303 أخلاقيات الحوسبة"
        ]
      }
    }
  ],

  /* ---------- Experience & programs (newest first) ---------- */
  experience: [
    {
      org: "Consultancy Route for Students (CRS)",
      role: "Cases Team Member",
      dates: "Sep 2023 – Present",
      description: "Student consulting club in Riyadh. I joined the Media Team in September 2023 and moved to the Cases Team in April 2026, where I work on student consulting cases.",
      achievements: ["Cases Team Member, Apr 2026 – present", "Media Team Member, Sep 2023 – Apr 2026"],
      skills: ["Consulting", "Creative problem solving"],
      ar: {
        org: "نادي ⁨⁨Consultancy Route for Students⁩ (CRS)⁩",
        role: "عضوة فريق الحالات",
        dates: "سبتمبر 2023 – حتى الآن",
        description: "نادٍ طلابي للاستشارات في الرياض. انضممتُ إلى الفريق الإعلامي في سبتمبر 2023، ثم انتقلتُ إلى فريق الحالات في أبريل 2026، حيث أعمل على حالات استشارية طلابية.",
        achievements: ["عضوة فريق الحالات، أبريل 2026 – حتى الآن", "عضوة الفريق الإعلامي، سبتمبر 2023 – أبريل 2026"],
        skills: ["الاستشارات", "حل المشكلات بإبداع"]
      }
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
      skills: ["SIEM", "Log analysis", "Threat detection", "Incident investigation", "Networking"],
      ar: {
        org: "أكاديمية طويق",
        role: "برنامج مركز العمليات الأمنية (SOC)",
        dates: "سبتمبر 2026",
        description: "برنامج في مركز العمليات الأمنية مدته 30 ساعة، أتممتُه بين 6 و17 سبتمبر 2026، وتضمّن تدريبًا عمليًا على المهام الأساسية لمحلل مركز العمليات الأمنية.",
        achievements: [
          "تدريب عملي على أنظمة SIEM وتحليل السجلات واكتشاف التهديدات والتحقيق في الحوادث",
          "تغطية أساسيات الشبكات والعمليات اليومية لمركز العمليات الأمنية"
        ],
        skills: ["SIEM", "تحليل السجلات", "اكتشاف التهديدات", "التحقيق في الحوادث", "الشبكات"]
      }
    },
    {
      org: "McKinsey.org",
      role: "Forward Program",
      dates: "2026, in progress",
      description: "",
      achievements: [],
      skills: [],
      ar: {
        org: "McKinsey.org",
        role: "برنامج Forward",
        dates: "2026، قيد الإنجاز"
      }
    },
    {
      org: "Riyad Bank",
      role: "Customer Service Intern, Private Banking",
      dates: "Jul 2022 – Aug 2022",
      description: "Handled client inquiries and supported day-to-day banking service requests in a private banking environment.",
      achievements: [],
      skills: ["Client service", "Banking operations"],
      ar: {
        org: "بنك الرياض",
        role: "متدربة خدمة عملاء، الخدمات المصرفية الخاصة",
        dates: "يوليو 2022 – أغسطس 2022",
        description: "تعاملتُ مع استفسارات العملاء ودعمتُ طلبات الخدمات المصرفية اليومية في بيئة الخدمات المصرفية الخاصة.",
        skills: ["خدمة العملاء", "العمليات المصرفية"]
      }
    }
  ],

  /* ---------- Projects. image: screenshot in /assets/img/projects; github: repo URL or "" ---------- */
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
      github: "",
      ar: {
        summary: "مشروع التخرج: تطبيق مرافق شخصي للسفر وأيام المباريات، للزوار والأعمال المحلية في المملكة العربية السعودية.",
        context: "مشروع التخرج، فريق من خمسة أعضاء",
        overview: "تطبيق جوال ثنائي اللغة يخدم فئتين: زوار المملكة العربية السعودية والأعمال المحلية. يختار الزائر مدينة، ويكتشف الأنشطة، ويحصل على خطط يومية يولّدها الذكاء الاصطناعي وفق اهتماماته وميزانيته ومواعيد انطلاق المباريات، ويجمع الأختام في جواز سفر رقمي، ويكسب مكافآت من الأعمال المحلية. أما الأعمال فتُدرج أماكنها لتظهر في خطط الزوار، وتحصل على رؤى عن الزوار الذين تستقطبهم.",
        problem: "يضطر الزوار الذين يخططون لرحلة حول الأنشطة وأيام المباريات إلى التنقل بين خدمات منفصلة للاكتشاف والجداول والحجوزات والتذاكر.",
        role: [
          "قدتُ تطوير تطبيق Flutter للجوال وتكامله",
          "بنيتُ تسجيل الدخول بخطوتين (2FA) واستعادة كلمة المرور",
          "أجريتُ تحليل النظام: استبانات للزوار والأعمال، وتحليلًا للمنافسين",
          "بنيتُ مجموعات بيانات الأنشطة لكل مدينة، التي تعتمد عليها ميزة الخطط الذكية"
        ],
        outcomes: [
          "عُرض في معرض مشاريع التخرج بكلية علوم الحاسب والمعلومات في جامعة الأمير سلطان (نوفمبر 2026)",
          "نجاح 886 اختبارًا للخادم و248 اختبارًا لتطبيق Flutter وقت المعرض",
          "تكييف الفكرة للمشاركة في هاكاثون السياحة بجامعة الأميرة نورة (أكتوبر 2026)"
        ]
      }
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
      github: "",
      ar: {
        title: "تقييم ثغرة تنفيذ الأوامر عن بُعد في Cacti",
        summary: "استغلال الثغرة CVE-2022-46169 والدفاع ضدها: تنفيذ أوامر عن بُعد دون مصادقة في Cacti 1.2.22 (CVSS 9.8).",
        context: "المشروع الختامي لمقرر CYS405 اختبار الاختراق والاختراق الأخلاقي، فريق shadowStrike (عضوتان)",
        overview: "دورة كاملة من الهجوم والدفاع ضد خادم Cacti مصاب بالثغرة في معمل Cactus على منصة TryHackMe: من الاستطلاع والاستغلال وما بعد الاستغلال، إلى الاكتشاف والوقاية وإعادة الاختبار بشكل مضبوط.",
        problem: "يعتمد Cacti 1.2.22 على ترويسة X-Forwarded-For القابلة للتزوير لتفويض الوكيل البعيد، ثم يمرّر قيمة poller_id غير المُنقّاة إلى استدعاء نظام، مما يفتح طريقًا حرجًا لتنفيذ الأوامر على الخادم دون مصادقة.",
        role: [
          "المرحلة 1، الاستطلاع: أجريتُ مسحًا كاملًا لمنافذ TCP واكتشافًا للخدمات وإصداراتها باستخدام Nmap، فحدّدتُ 7 منافذ مفتوحة وتعرّفتُ على Cacti العامل على nginx وPHP بوصفه الهدف الرئيسي",
          "المرحلة 2، تحليل الثغرة: أكّدتُ الإصدار 1.2.22 من سجل التغييرات، وتتبّعتُ السبب الجذري: تفويض يثق بترويسة X-Forwarded-For القابلة للتزوير (CWE-290)، وقيمة poller_id غير مُنقّاة تُمرَّر إلى proc_open()‏ (CWE-78)",
          "المرحلة 5، الاكتشاف: كتبتُ قاعدة اكتشاف ترصد أي قيمة poller_id تحتوي على رموز أوامر النظام، بصيغ Sigma وSplunk SPL وWazuh"
        ],
        outcomes: [
          "حقّقنا كفريق تنفيذ أوامر عن بُعد دون مصادقة داخل معمل معزول ومصرّح به، ثم صمّمنا ضابطًا تعويضيًا",
          "تحقّقنا من الإجراء المضاد: الطلب المشروع أعاد الرمز 200، بينما حُجبت محاولة الحقن بالرمز 403",
          "النتائج: F-01 تنفيذ أوامر عن بُعد دون مصادقة (حرجة، 9.8)؛ F-02 بيانات اعتماد قاعدة البيانات مكشوفة (عالية)"
        ]
      }
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
      github: "",
      ar: {
        title: "إطار أمني دفاعي لمنظمة غير ربحية",
        summary: "تقسيم الشبكة وضوابط مُحصّنة وتدريب للموظفين لحماية بيانات المتبرعين والبيانات المالية لجمعية خيرية.",
        context: "مقرر CYS406 أمن البيانات والشبكات، فريق من أربعة أعضاء",
        overview: "إطار أمني لجمعية خيرية تضم 100 موظف، مُواءَم مع إطار NIST للأمن السيبراني ومحكوم بمعيار ISO/IEC 27001. يقسّم الشبكة إلى ثلاث مناطق خلف جدار حماية Cisco ASA، ويحصّن المحوّلات، ويضيف سياسات وتدريبًا للموظفين على مواجهة التصيّد الاحتيالي.",
        problem: "تحتفظ الجمعيات الخيرية ببيانات قيّمة عن المتبرعين وبيانات مالية بميزانيات تقنية محدودة، وكثيرًا ما يتصل موظفوها ومتطوعوها من أجهزة غير مُدارة. ورسالة تصيّد واحدة قد تؤدي إلى اختراق قاعدة بيانات المتبرعين.",
        role: [
          "محللة أمن: قدتُ مراجعة الأدبيات وتقييم التهديدات",
          "قارنتُ بين إطار NIST CSF ومعيار ISO/IEC 27001، وربطتُ كل ضابط بوظيفة من وظائف NIST CSF",
          "صمّمتُ معمارية المناطق الثلاث: المنطقة الخارجية، والشبكة الداخلية للموظفين، ومنطقة DMZ آمنة لخوادم المتبرعين والمالية"
        ],
        outcomes: [
          "فقدان 100% من الحزم من جهاز موظف مُخترق في المحاكاة إلى خوادم المتبرعين والمالية",
          "فقدان 0% من الحزم بين أجهزة الموظفين، فاستمر العمل اليومي دون انقطاع",
          "إغلاق 42 منفذًا غير مستخدم على محوّلين"
        ]
      }
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
      github: "",
      ar: {
        summary: "اكتشاف الثغرات الأمنية في تطبيق ويب لعيادة وإصلاحها واختبارها.",
        context: "مقرر CYS402 تطوير البرمجيات الآمنة، الفريق 6 (ثلاثة أعضاء)",
        overview: "تطبيق لعيادة يسجّل فيه المرضى دخولهم ويحجزون المواعيد ويبحثون عنها، ويستخدم فيه الموظفون صفحة إدارة. هاجم الفريق التطبيق، وأصلح ثلاث ثغرات خطيرة، وأثبت كل إصلاح باختبارات آلية.",
        problem: "ثغرة واحدة في التطبيق قد تكشف الزيارات الطبية لجميع المرضى، إضافة إلى بيانات دخول المرضى والموظفين.",
        role: [
          "تولّيتُ الثغرة الأولى، حقن SQL: أثبتُّ أن بريدًا إلكترونيًا مُعدًّا بعناية يتيح الدخول بحساب مريض آخر دون كلمة مرور، وتتبّعتُ السبب إلى إدخال المستخدم المُدرج مباشرة في استعلام SQL، وأصلحتُه باستعلام مُعلَّم (parameterized) والتحقق من كلمات المرور المُجزّأة",
          "أثبتُّ الإصلاح باختبار آلي (test_login_injection_is_blocked)",
          "حللتُ معمل PortSwigger الخاص بحقن SQL لتجاوز تسجيل الدخول"
        ],
        outcomes: [
          "أصلحنا كفريق ثلاث ثغرات: حقن SQL، والبرمجة النصية المخزّنة عبر المواقع (Stored XSS)، وخلل التحكم في الوصول",
          "أضفنا تحصينات إضافية: تجزئة كلمات المرور، وقفل الحساب بعد 5 محاولات فاشلة، وترويسات أمان",
          "نجاح جميع الاختبارات الثمانية على الشيفرة المدمجة"
        ]
      }
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
      github: "",
      ar: {
        title: "معامل الأمن السيبراني",
        summary: "تطبيق عملي في العمليات الأمنية، وأمن تطبيقات الويب، واختبار الاختراق، والدفاع عن الشبكات.",
        context: "برنامج مركز العمليات الأمنية في أكاديمية طويق ومقررات الأمن السيبراني في جامعة الأمير سلطان",
        overview: "مجموعة من الأعمال الأمنية العملية من تدريبي في مركز العمليات الأمنية ومقررات الأمن السيبراني، تغطي الجانبين الدفاعي والهجومي.",
        role: [
          "العمليات الأمنية: أنظمة SIEM، وتحليل السجلات، واكتشاف التهديدات، والتحقيق في الحوادث (برنامج SOC في أكاديمية طويق)",
          "أمن تطبيقات الويب: معامل حقن SQL باستخدام Burp Suite وPortSwigger Web Security Academy ‏(CYS402)",
          "اختبار الاختراق: استغلال الثغرة CVE-2022-46169 واكتشافها والتخفيف منها باستخدام Nmap وMetasploit وhashcat ‏(CYS405)",
          "الدفاع عن الشبكات: شبكة مقسّمة إلى ثلاث مناطق خلف جدار حماية Cisco ASA في Packet Tracer ‏(CYS406)"
        ]
      }
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
      github: "",
      ar: {
        summary: "منصة ويب تساعد الطلاب على إعداد سير ذاتية احترافية للتقديم على برامج التدريب التعاوني والتدريب الصيفي.",
        context: "مقرر IS311 تطوير الويب، فريق من ثلاثة أعضاء",
        overview: "موقع متكامل (full-stack) يُنشئ فيه طلاب السنة الأخيرة سيرهم الذاتية ويخصّصونها، ويختارون من عدة قوالب، ويعاينونها ويحمّلونها، ويتصفحون فرص التدريب، ويطّلعون على نصائح التقديم، مع حفظ السجلات وإدارتها في قاعدة بيانات.",
        problem: "كثيرًا ما يبدأ الطلاب المتقدمون للتدريب التعاوني من صفحة فارغة، دون معرفة ما تحتاجه السيرة الذاتية لتلبية متطلبات البرنامج.",
        role: [
          "بنيتُ أداة إعداد السيرة الذاتية على الويب بنماذج ديناميكية واتصال بقاعدة البيانات وإدارة للبيانات",
          "عملتُ على تطوير الواجهة الأمامية، وتكامل الخادم، وإدارة قاعدة البيانات، وعمليات CRUD"
        ],
        outcomes: ["الدرجة النهائية للمشروع: 19 من 20"]
      }
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
      github: "",
      ar: {
        summary: "خطة مشروع لنظام متكامل لإدارة الصالات الرياضية.",
        context: "مقرر IS361 إدارة المشاريع، فريق من خمسة أعضاء",
        overview: "FitSync نظام متكامل لإدارة الصالات الرياضية يستبدل العمليات اليدوية بمنصة واحدة لتسجيل الأعضاء، وخطط الاشتراك، والمدربين، وجدولة الحصص وحجزها، وتتبّع المدفوعات، والتقارير.",
        problem: "تعاني الصالة التي تعتمد على العمليات اليدوية من تكرار السجلات والأخطاء وبطء الإدارة، دون مكان واحد لإدارة الأعضاء والحصص والمدفوعات.",
        role: [
          "خطّطتُ للنظام عبر ميثاق المشروع، وتحليل أصحاب المصلحة والنطاق، ونهج تطوير هجين",
          "أعددتُ هيكل تجزئة العمل (WBS)، وتقديرات التكلفة، ومخطط جانت، ومخطط الشبكة",
          "أعددتُ تقارير المخاطر وفق إرشادات PMBOK",
          "تابعتُ المهام وتوزيع العمل والمراحل الرئيسية عبر ClickUp"
        ],
        tech: ["ClickUp", "WBS", "مخطط جانت", "تحليل المخاطر وفق PMBOK"],
        outcomes: ["تسليم خطة مشروع كاملة تشمل تقديرًا تصاعديًا للتكلفة بقيمة 57,200 دولار"]
      }
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
      github: "",
      ar: {
        title: "نظام إدارة شركة طيران",
        summary: "قاعدة بيانات علائقية لإدارة الرحلات والحجوزات والطاقم والأمتعة لشركة طيران.",
        context: "مقرر IS241 إدارة قواعد البيانات وتطبيقاتها، فريق من ثلاثة أعضاء",
        overview: "قاعدة بيانات علائقية مركزية لعمليات الطيران الأساسية، مبنية حول ثمانية كيانات: الركاب، والتذاكر، والمقاعد، والطائرات، والرحلات، والأمتعة، والمطارات، وأفراد الطاقم، مع تخصيص الطاقم إلى طيارين ومضيفين.",
        problem: "من دون نظام آلي، تعاني عمليات الطيران من أخطاء في البيانات، وبطء في الحجز والجدولة، وصعوبة في الحصول على معلومات دقيقة أو إعداد التقارير.",
        role: [
          "حدّدتُ 11 قاعدة عمل، ثم صمّمتُ مخطط الكيانات والعلاقات (ER)، والنموذج العلائقي، وقاموس البيانات، ومواصفات البحث والإدراج والتعديل والحذف",
          "كتبتُ استعلامات SQL لأسئلة تشغيلية، مثل عدد الأمتعة المسجّلة لكل رحلة، والرحلات التي يتجاوز متوسط سعر تذاكرها 200 ولم تُلغَ أو تتأخر، والركاب الذين لم يسجّلوا أمتعة"
        ],
        tech: ["SQL", "نمذجة الكيانات والعلاقات", "التصميم العلائقي"],
        outcomes: ["تسليم مخطط قاعدة بيانات عامل مع 11 استعلام SQL تجيب عن أسئلة تشغيلية حقيقية"]
      }
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
      github: "",
      ar: {
        title: "نظام الطلب المسبق في حرم جامعة الأمير سلطان",
        summary: "متطلبات وتصميم منصة آمنة للطلب المسبق للوجبات في Food Hub بالجامعة.",
        context: "مقرر IS231 تحليل وتصميم النظم، فريق من أربعة أعضاء",
        overview: "منصة ويب يتصفح فيها الطلاب وأعضاء هيئة التدريس والموظفون قوائم الطعام، ويدفعون إلكترونيًا، ويطلبون وجباتهم مسبقًا لاستلامها في موعد محدد، بينما يدير موظفو المطاعم الطلبات ويتابع المشرفون العمليات والتقارير.",
        problem: "تتسبب الطوابير الطويلة في Food Hub وقت الاستراحة في تأخر الطلاب عن محاضراتهم، ويتخطى بعضهم وجباته تجنبًا للانتظار. وقد تأكدنا من ذلك بملاحظة المكان ومحادثة الطلاب.",
        role: [
          "استكشاف المجال: تحليل أصحاب المصلحة، والملاحظة الميدانية، ومقابلات مع الطلاب",
          "وثيقة رؤية بمعايير نجاح قابلة للقياس، مثل خفض وقت انتظار الاستلام بنسبة 50% على الأقل",
          "المتطلبات الوظيفية وغير الوظيفية، بما فيها الأمن: الدخول الموحّد للجامعة (SSO)، والتحكم في الوصول حسب الأدوار، وتشفير البيانات المخزّنة، وسجلات التدقيق",
          "متطلبات امتثال متوافقة مع إطار الهيئة الوطنية للأمن السيبراني، ومعيار PCI DSS للمدفوعات، وممارسات خصوصية على غرار GDPR",
          "خمس قصص مستخدم بمعايير قبول بصيغة Given/When/Then",
          "نماذج UML: مخطط حالات الاستخدام، ومخططات تسلسل النظام، ومخطط النشاط، وبطاقات CRC، ومخطط فئات التصميم"
        ],
        tech: ["UML", "تحليل المتطلبات", "قصص المستخدم", "امتثال NCA وPCI DSS"]
      }
    }
  ],

  /* ---------- Certifications & professional development ---------- */
  certifications: [
    {
      name: "Security Operations Center (SOC) Program",
      issuer: "Tuwaiq Academy, 30 hours, credential ID g0w2XkR",
      date: "Sep 2026",
      link: "",
      ar: {
        name: "برنامج مركز العمليات الأمنية (SOC)",
        issuer: "أكاديمية طويق، 30 ساعة، رقم التحقق g0w2XkR",
        date: "سبتمبر 2026"
      }
    },
    {
      name: "ISO 8000 Master Data Quality Manager (MDQM)",
      issuer: "ECCMA",
      date: "2026",
      link: "",
      ar: {
        issuer: "ECCMA"
      }
    },
    {
      name: "Governance & Internal Audit: Information Technology and Information Security",
      issuer: "Elm, Jisoor Program",
      date: "Aug 2026",
      link: "",
      ar: {
        name: "الحوكمة والمراجعة الداخلية: تقنية وأمن المعلومات",
        issuer: "علم، برنامج جسور",
        date: "أغسطس 2026"
      }
    },
    {
      name: "Forward Program",
      issuer: "McKinsey.org, in progress",
      date: "2026",
      link: "",
      ar: {
        name: "برنامج Forward",
        issuer: "McKinsey.org، قيد الإنجاز"
      }
    },
    {
      name: "Cybersecurity Workshop",
      issuer: "Network Binary",
      date: "2026",
      link: "",
      ar: {
        name: "ورشة عمل في الأمن السيبراني",
        issuer: "Network Binary"
      }
    },
    {
      name: "AI Safety & Security Ambassador",
      issuer: "Elm Virtual Student Club",
      date: "2026",
      link: "https://www.credly.com/badges/1dfb61ad-d657-4f1f-ad5b-6cb03ec3f05d",
      ar: {
        name: "سفيرة سلامة وأمن الذكاء الاصطناعي",
        issuer: "نادي علم الطلابي الافتراضي"
      }
    },
    {
      name: "Virtual Tourism Hackathon Program",
      issuer: "Tourism Development Fund (TDF Grow)",
      date: "2026",
      link: "",
      ar: {
        name: "برنامج هاكاثون السياحة الافتراضي",
        issuer: "صندوق التنمية السياحي (TDF Grow)"
      }
    },
    {
      name: "Systems Security Certified Practitioner (SSCP) Specialization",
      issuer: "ISC2, via Coursera",
      date: "2025",
      link: "",
      ar: {
        issuer: "ISC2، عبر Coursera"
      }
    },
    {
      name: "Agile Software Development",
      issuer: "Coursera",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/5R7GGA8G59CA",
      ar: {
        name: "تطوير البرمجيات بمنهجية Agile",
        issuer: "Coursera"
      }
    },
    {
      name: "Enterprise Data Architecture and Operations",
      issuer: "Coursera",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/NETJ1Y4OZ2Y0",
      ar: {
        name: "معمارية بيانات المؤسسات وعملياتها",
        issuer: "Coursera"
      }
    }
  ],

  /* ---------- Skills — keep only skills you can back up on this page or in your CV ---------- */
  skills: [
    {
      group: "Cybersecurity",
      items: [
        "SIEM",
        "Log analysis",
        "Threat detection",
        "Incident investigation",
        "Detection rules (Sigma, Splunk SPL, Wazuh)",
        "Penetration testing (Nmap, Metasploit)",
        "Web application security",
        "Network security and segmentation",
        "Security frameworks (NIST CSF, ISO/IEC 27001)",
        "Burp Suite, TryHackMe, Cisco Packet Tracer"
      ],
      ar: {
        group: "الأمن السيبراني",
        items: [
          "SIEM",
          "تحليل السجلات",
          "اكتشاف التهديدات",
          "التحقيق في الحوادث",
          "قواعد الاكتشاف (Sigma وSplunk SPL وWazuh)",
          "اختبار الاختراق (Nmap وMetasploit)",
          "أمن تطبيقات الويب",
          "أمن الشبكات وتقسيمها",
          "أطر الأمن (NIST CSF وISO/IEC 27001)",
          "Burp Suite وTryHackMe وCisco Packet Tracer"
        ]
      }
    },
    {
      group: "Business & consulting",
      items: [
        "Systems analysis and design",
        "Business analysis",
        "Problem solving",
        "Research & analysis",
        "Project planning (WBS, Gantt, risk)",
        "Agile and Scrum",
        "Presentation skills"
      ],
      ar: {
        group: "الأعمال والاستشارات",
        items: [
          "تحليل وتصميم النظم",
          "تحليل الأعمال",
          "حل المشكلات",
          "البحث والتحليل",
          "تخطيط المشاريع (WBS وجانت والمخاطر)",
          "منهجيتا Agile وScrum",
          "مهارات العرض والتقديم"
        ]
      }
    },
    {
      group: "Technical",
      items: [
        "Flutter",
        "Java",
        "Python (Flask, pytest)",
        "SQL and database design",
        "MySQL",
        "HTML, CSS, JavaScript",
        "Bootstrap",
        "Node.js & Express",
        "UML"
      ],
      ar: {
        group: "المهارات التقنية",
        items: [
          "Flutter",
          "Java",
          "Python ‏(Flask وpytest)",
          "SQL وتصميم قواعد البيانات",
          "MySQL",
          "HTML وCSS وJavaScript",
          "Bootstrap",
          "Node.js وExpress",
          "UML"
        ]
      }
    }
  ],

  /* ---------- Leadership & activities ---------- */
  leadership: [
    {
      name: "Consultancy Route for Students",
      role: "Cases Team Member, previously Media Team Member",
      date: "2023 – Present",
      description: "More than three years with the club, first on the Media Team and since April 2026 on the Cases Team, working on student consulting cases.",
      ar: {
        name: "نادي ⁨⁨Consultancy Route for Students⁩ (CRS)⁩",
        role: "عضوة فريق الحالات، وسابقًا عضوة الفريق الإعلامي",
        date: "2023 – حتى الآن",
        description: "أكثر من ثلاث سنوات في النادي، بدأتُها في الفريق الإعلامي، وأعمل منذ أبريل 2026 في فريق الحالات على حالات استشارية طلابية."
      }
    },
    {
      name: "Elm Virtual Club",
      role: "Operations Committee Member",
      date: "Mar 2026 – Present",
      description: "Help run the club's operations and activities; recognized with a membership certificate for my contributions.",
      ar: {
        name: "نادي علم الطلابي الافتراضي",
        role: "عضوة لجنة العمليات",
        date: "مارس 2026 – حتى الآن",
        description: "أساهم في إدارة عمليات النادي وأنشطته، وحصلتُ على شهادة عضوية تقديرًا لمساهماتي."
      }
    },
    {
      name: "PNU Tourism Hackathon",
      role: "Participant, Princess Nourah bint Abdulrahman University",
      date: "Oct 2026",
      description: "",
      ar: {
        name: "هاكاثون السياحة بجامعة الأميرة نورة",
        role: "مشاركة، جامعة الأميرة نورة بنت عبدالرحمن",
        date: "أكتوبر 2026"
      }
    },
    {
      name: "Career Expo, Prince Sultan University",
      role: "Contributor, Media Team",
      date: "2024 – 2026",
      description: "Contributed to the university's Career Expo three years running.",
      ar: {
        name: "معرض التوظيف، جامعة الأمير سلطان",
        role: "مساهمة، الفريق الإعلامي",
        date: "2024 – 2026",
        description: "ساهمتُ في معرض التوظيف بالجامعة ثلاث سنوات متتالية."
      }
    },
    {
      name: "CDMA 2025 International Conference, Prince Sultan University",
      role: "Conference Support Team Member",
      date: "2025",
      description: "",
      ar: {
        name: "مؤتمر CDMA 2025 الدولي، جامعة الأمير سلطان",
        role: "عضوة فريق دعم المؤتمر",
        date: "2025"
      }
    },
    {
      name: "AHHIL Consultathon, King Saud University",
      role: "Semi-finalist",
      date: "2023",
      description: "",
      ar: {
        name: "Consultathon ‏AHHIL، جامعة الملك سعود",
        role: "متأهلة إلى نصف النهائي",
        date: "2023"
      }
    }
  ]
};
