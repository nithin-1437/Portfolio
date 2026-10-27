/**
 * Central Portfolio Data Source for Satya Sai Nithin Reddy Nallamilli
 * Easily update personal details, links, projects, certifications, and skills here.
 */

const baseUrl = import.meta.env.BASE_URL || '/';
const asset = (path) => `${baseUrl}${path.replace(/^\//, '')}`;

export const personalInfo = {
  fullName: "SATYA SAI NITHIN REDDY NALLAMILLI",
  shortName: "Nithin Reddy",
  tagline: "Cybersecurity Analyst & Software Developer",
  subTagline: "B.Tech CSE (Cybersecurity & Blockchain) · KL University · Fresher",
  bio: "Passionate Computer Science undergraduate specializing in Cybersecurity and Blockchain Technology at KL University. Hands-on experience developing AI-driven digital forensics systems, automated PII privacy enforcement platforms, and enterprise full-stack web applications. Strong grounding in network protocols, cloud architecture, and secure software development.",
  education: {
    institution: "KL University (KLEF)",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Cybersecurity & Blockchain Technology",
    year: "2023 – Present (Graduating 2027)",
    cgpa: "8.29",
    location: "Vijayawada, Andhra Pradesh, India"
  },
  contact: {
    email: "nallamillinithinreddy876@gmail.com",
    phone: "(+91) 9381917450",
    location: "Vijayawada, Andhra Pradesh, India",
    github: "https://github.com/nithin-1437",
    linkedin: "https://www.linkedin.com/in/nallamilli-nithin-reddy/",
  },
  roles: [
    "Cybersecurity Analyst",
    "Security Engineer",
    "Software Developer",
    "Cloud & Forensics Enthusiast"
  ],
  resumeUrl: asset('resume.pdf'),
  profileImage: asset('profile.jpg'),
  liveUrl: "https://nithin-1437.github.io/Portfolio/",
};

export const educationHistory = [
  {
    institution: "KL University (KLEF)",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Specialization in Cybersecurity & Blockchain Technology",
    timeline: "2023 – Present",
    score: "CGPA: 8.29",
    highlights: [
      "Core Coursework: Network Security, Cryptography, Operating Systems, DBMS, Cloud Computing, Ethical Hacking",
      "Selected for Capstone Project-I under Dr. Tanumay Mandal on AI-driven PII Privacy Enforcement",
      "Active member of Cybersecurity & Technical Student Clubs"
    ]
  },
  {
    institution: "Higher Secondary Education (Class XII)",
    degree: "Intermediate of Education",
    specialization: "Mathematics, Physics, Chemistry (MPC)",
    timeline: "2022 – 2023",
    score: "CGPA: 5.8",
    highlights: [
      "Rigorous foundations in analytical problem solving and mathematics"
    ]
  },
  {
    institution: "Secondary School Certificate (Class X)",
    degree: "High School Diploma",
    specialization: "General Academics",
    timeline: "2019 – 2020",
    score: "CGPA: 10.0 (Perfect Score)",
    highlights: [
      "Graduated with top academic honors and perfect GPA distinction"
    ]
  }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    icon: "Code",
    description: "Core languages used for problem solving and software engineering",
    skills: [
      { name: "Python", level: "Proficient", rating: 88, icon: "FileCode", tag: "Scripting & AI" },
      { name: "C", level: "Intermediate", rating: 80, icon: "Cpu", tag: "Systems Programming" },
      { name: "Java", level: "Proficient", rating: 85, icon: "Coffee", tag: "Enterprise Backend" },
      { name: "JavaScript", level: "Intermediate", rating: 78, icon: "FileText", tag: "Frontend & Fullstack" }
    ]
  },
  {
    name: "Web Development",
    icon: "Layout",
    description: "Modern frontend web technologies and user interfaces",
    skills: [
      { name: "HTML5", level: "Proficient", rating: 92, icon: "Globe", tag: "Markup & Semantics" },
      { name: "CSS3 & Tailwind", level: "Proficient", rating: 88, icon: "Palette", tag: "Styling & Responsive" },
      { name: "JavaScript (ES6+)", level: "Intermediate", rating: 80, icon: "Code2", tag: "Client Logic" },
      { name: "React.js", level: "Intermediate", rating: 82, icon: "Atom", tag: "UI Components & State" }
    ]
  },
  {
    name: "Backend & Database",
    icon: "Server",
    description: "Server architecture, API design, and relational databases",
    skills: [
      { name: "Spring Boot", level: "Intermediate", rating: 80, icon: "Layers", tag: "Microservices & REST" },
      { name: "Java Backend", level: "Proficient", rating: 84, icon: "Server", tag: "OOP & Business Logic" },
      { name: "MySQL", level: "Proficient", rating: 85, icon: "Database", tag: "Relational Modeling & SQL" },
      { name: "REST APIs", level: "Proficient", rating: 86, icon: "Network", tag: "API Contracts & JSON" }
    ]
  },
  {
    name: "Security & Digital Forensics",
    icon: "ShieldAlert",
    description: "Defensive security principles, auditing, and digital evidence analysis",
    skills: [
      { name: "Cybersecurity Fundamentals", level: "Proficient", rating: 90, icon: "Shield", tag: "Defense-in-Depth" },
      { name: "Ethical Hacking Concepts", level: "Intermediate", rating: 82, icon: "Terminal", tag: "Vulnerability Scanning" },
      { name: "Digital Forensics", level: "Proficient", rating: 88, icon: "Search", tag: "Evidence & Integrity" },
      { name: "OWASP Top 10", level: "Intermediate", rating: 84, icon: "AlertTriangle", tag: "Application Security" },
      { name: "SHA-256 & Cryptography", level: "Proficient", rating: 88, icon: "Key", tag: "Checksums & Hashes" },
      { name: "PII Detection & Masking", level: "Proficient", rating: 92, icon: "EyeOff", tag: "Privacy Enforcement" }
    ]
  },
  {
    name: "Cloud & Multi-Cloud",
    icon: "Cloud",
    description: "Certified multi-cloud foundations and networking architectures",
    skills: [
      { name: "Microsoft Azure (AZ-900)", level: "Certified", rating: 90, icon: "CloudSun", tag: "Azure Fundamentals" },
      { name: "Oracle Cloud Infrastructure (OCI)", level: "Certified", rating: 90, icon: "CloudCog", tag: "OCI Foundations" },
      { name: "Aviatrix Multi-Cloud Network", level: "Certified", rating: 88, icon: "GitFork", tag: "MCNA Associate" }
    ]
  },
  {
    name: "Tools, OS & DevOps",
    icon: "Wrench",
    description: "Daily engineering workflows, forensic utilities, and environments",
    skills: [
      { name: "Git & GitHub", level: "Proficient", rating: 88, icon: "GitBranch", tag: "Version Control" },
      { name: "Docker", level: "Intermediate", rating: 75, icon: "Box", tag: "Containerization" },
      { name: "Postman", level: "Proficient", rating: 85, icon: "Send", tag: "API Testing" },
      { name: "Kali Linux", level: "Proficient", rating: 84, icon: "TerminalSquare", tag: "Security Testing OS" },
      { name: "Wireshark & Nmap", level: "Intermediate", rating: 80, icon: "Activity", tag: "Packet & Port Analysis" }
    ]
  }
];

export const projects = [
  {
    id: "avarana-pii-detection",
    title: "AI-Driven PII Exposure Detection and Privacy Enforcement Platform",
    tagline: "Autonomous multi-layer detection and cryptographic privacy enforcement for sensitive documents",
    category: "Cybersecurity & AI",
    badge: "Capstone Project-I",
    featured: true,
    technologies: ["Python", "spaCy NLP", "RapidOCR", "Verhoeff & Luhn Checksums", "SHA-256", "Flask", "Tailwind CSS"],
    problem: "Organizations inadvertently leak sensitive Personally Identifiable Information (Aadhaar, PAN, passports, bank details) across unstructured documents, scanned forms, and user uploads without compliance verification.",
    solution: "Engineered 'Avarana', a high-throughput privacy platform that ingests PDFs, DOCX, and scanned imagery, evaluates findings across a 4-tier detection architecture, assigns confidence and risk scores, and performs irreversible true redaction.",
    myContribution: "Implemented the mathematical validation layer (Verhoeff checksums for 12-digit Aadhaar, Luhn algorithm for payment cards, regex format validation for PAN/IFSC), engineered the append-only SHA-256 hash-chained tamper-evident audit log, and integrated the server-side true redaction engine.",
    keyFeatures: [
      "4-Layer Hybrid Detection: Exact mathematical checksum rules, spaCy Named Entity Recognition, and RapidOCR for optical text extraction.",
      "Identifies Aadhaar, PAN, Passports, Voter IDs, Driving Licenses, UPI IDs, Phone Numbers, Emails, Bank Accounts, and Names.",
      "True Redaction & Masking: Irreversibly purges underlying text glyphs rather than applying easily bypassable black visual overlays.",
      "Tamper-Evident Audit Chain: Append-only SHA-256 cryptographic chaining recording all scans, redactions, and administrator reveal operations.",
      "Granular Risk Scoring: 0-100% confidence ratings and Critical/High/Medium/Low privacy classifications per document."
    ],
    githubUrl: "https://github.com/nithin-1437/AI-Driven-PII-Exposure",
    liveUrl: null, // Note: Provided placeholder until hosted
    demoAvailable: false,
    collaborators: "Batch 84 · Faculty Guide: Dr. Tanumay Mandal (KL University)"
  },
  {
    id: "employee-management-system",
    title: "Enterprise Employee Management System",
    tagline: "Scalable full-stack workforce administration platform with role-based access control",
    category: "Full-Stack Development",
    badge: "Full-Stack Web App",
    featured: true,
    technologies: ["React.js", "Java", "Spring Boot", "MySQL", "Docker", "RESTful APIs", "JWT"],
    problem: "Small to medium enterprises often struggle with fragmented employee records, manual attendance logging, and unorganized department allocation systems.",
    solution: "Built a centralized enterprise web application featuring synchronized employee records, real-time attendance tracking, department workflows, and granular role-based authentication.",
    myContribution: "Architected relational MySQL database schemas, implemented Spring Boot REST APIs with data persistence, built interactive React dashboard components, and configured Docker containerization for reliable deployment.",
    keyFeatures: [
      "Role-Based Access Control (RBAC): Dedicated portals for HR administrators and staff members.",
      "Workforce Lifecycle Management: Onboarding, employee profiles, department mapping, and salary metrics.",
      "Attendance & Leave Tracking: Real-time status logs with comprehensive history filtering.",
      "Synchronized REST Architecture: Decoupled React frontend consuming secure, validated Spring Boot backend services.",
      "Dockerized Environment: Consistent multi-container setup ensuring zero environment drift."
    ],
    githubUrl: "https://github.com/nithin-1437/Employee-Management-System",
    liveUrl: null,
    demoAvailable: false,
    collaborators: "Academic Full-Stack Project · KL University"
  },
  {
    id: "ai-automated-forensics-system",
    title: "AI-Driven Automated Digital Forensics System",
    tagline: "Automated digital evidence collection, cryptographic integrity verification, and incident reporting",
    category: "Cybersecurity & Forensics",
    badge: "Security & ML",
    featured: true,
    technologies: ["Python", "OpenCV", "Machine Learning", "SHA-256", "Flask", "Digital Forensics"],
    problem: "Manual digital evidence acquisition and file integrity inspection during incident investigations is time-intensive and highly susceptible to chain-of-custody violations.",
    solution: "Designed an automated digital forensics analysis engine that computes cryptographic hashes on evidence ingestion, verifies image integrity using OpenCV, detects forensic anomalies via ML, and automatically generates audit reports.",
    myContribution: "Developed the cryptographic evidence ingestion pipeline (SHA-256 hashing to guarantee forensic admissibility), built OpenCV image analysis scripts to detect manipulation artifacts, and created automated forensic summary report generators.",
    keyFeatures: [
      "Cryptographic Evidence Integrity: Instant SHA-256 calculation upon ingestion with immutable timestamping to prevent evidence tampering.",
      "Computer Vision & ML Inspection: OpenCV-based visual analysis for file format anomalies, metadata inconsistencies, and visual tampering.",
      "Chain-of-Custody Logging: Automated audit logs tracking evidence handling, reviewer actions, and analysis timestamps.",
      "Forensic Report Generation: Produces standardized, structured investigation summary reports suitable for security reviews."
    ],
    githubUrl: "https://github.com/nithin-1437/AI-Automated-Forensics-System",
    liveUrl: null,
    demoAvailable: false,
    collaborators: "Cybersecurity Research Project · KL University"
  }
];

export const certifications = [
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    issueDate: "June 16, 2025",
    expiryDate: "Non-Expiring / Foundational",
    credentialId: "5351E31A24350240",
    certNumber: "C0CC29-AD95K5",
    description: "Validates foundational knowledge of cloud services, core Azure architectural components, governance, security, privacy, and compliance frameworks.",
    badgeColor: "from-blue-600 to-sky-500",
    image: asset("certificates/azure-fundamentals.png"),
    pdfUrl: asset("certificates/azure-fundamentals.pdf"),
    verifyUrl: "https://learn.microsoft.com/en-us/users/nallamillisatyasainithinreddy-0991/credentials/certification/azure-fundamentals?tab=credentials-tab",
    isRealVerification: true,
    skillsLearned: ["Cloud Architecture", "Azure Security Services", "Cloud Governance & Compliance", "SLA & Cost Management"]
  },
  {
    id: "oracle-cloud-infrastructure",
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    issueDate: "October 22, 2025",
    expiryDate: "October 22, 2027",
    credentialId: "102965148OCI25FNDCFA",
    certNumber: "OCI25FNDCFA",
    description: "Demonstrates core technical fluency in Oracle Cloud Infrastructure (OCI), identity and access management (IAM), compute, virtual cloud networks (VCN), and cloud storage security.",
    badgeColor: "from-red-600 to-orange-500",
    image: asset("certificates/oracle-cloud.png"),
    pdfUrl: asset("certificates/oracle-cloud.pdf"),
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=102965148OCI25FNDCFA",
    isRealVerification: true,
    skillsLearned: ["OCI Core Architecture", "IAM & Access Control", "Virtual Cloud Networking (VCN)", "Cloud Storage & Security Zones"]
  },
  {
    id: "aviatrix-mcna",
    name: "Aviatrix Certified Engineer – Multicloud Network Associate (ACE-MCNA)",
    issuer: "Aviatrix, Inc.",
    issueDate: "October 22, 2025",
    expiryDate: "October 22, 2028",
    credentialId: "ACE ID: 2025-28963",
    certNumber: "2025-28963",
    description: "Industry-leading multicloud networking certification covering multicloud network architecture (MCNA), enterprise transit routing, cross-cloud security, and unified governance across AWS, Azure, GCP, and OCI.",
    badgeColor: "from-orange-600 to-amber-500",
    image: asset("certificates/aviatrix-mcna.png"),
    pdfUrl: asset("certificates/aviatrix-mcna.pdf"),
    verifyUrl: "https://aviatrix.com/ace/",
    isRealVerification: true,
    skillsLearned: ["Multicloud Network Architecture", "Transit Networking & Peering", "Cross-Cloud Security Policies", "Aviatrix Cloud Operations"]
  },
  {
    id: "automation-anywhere-rpa",
    name: "Certified Essentials Automation Professional",
    issuer: "Automation Anywhere",
    issueDate: "February 2, 2026",
    expiryDate: "February 2, 2028",
    credentialId: "AAESSE2024A360 - 173360060",
    certNumber: "AAESSE2024A360",
    description: "Certified professional credential in Robotic Process Automation (RPA), autonomous bot lifecycle, workflow task orchestration, and cognitive automation integration.",
    badgeColor: "from-amber-500 to-yellow-400",
    image: asset("certificates/automation-anywhere.png"),
    pdfUrl: asset("certificates/automation-anywhere.pdf"),
    verifyUrl: "https://www.automationanywhere.com/",
    isRealVerification: true,
    skillsLearned: ["Robotic Process Automation", "Bot Architecture & Lifecycle", "Enterprise Workflow Automation", "Exception Handling & Logging"]
  }
];

export const achievements = [
  {
    title: "4 Industry Multi-Cloud & Automation Certifications",
    category: "Professional Credential",
    date: "2025 – 2026",
    description: "Earned 4 industry-recognized credentials spanning Microsoft Azure, Oracle Cloud Infrastructure, Aviatrix Multi-Cloud Networking, and Automation Anywhere RPA during undergraduate engineering studies.",
    icon: "Award"
  },
  {
    title: "Academic Excellence Distinction",
    category: "Academic Milestone",
    date: "2020 & 2023 – Present",
    description: "Maintained a strong 8.29 CGPA in B.Tech Computer Science (Cybersecurity & Blockchain) at KL University, and achieved a 10.0 CGPA perfect score in Class X Secondary School examinations.",
    icon: "GraduationCap"
  },
  {
    title: "Capstone Project-I Selection: Avarana Privacy Engine",
    category: "Technical Project",
    date: "2025",
    description: "Selected to develop 'Avarana' — an AI-driven PII exposure detection and compliance platform under faculty guide Dr. Tanumay Mandal, implementing mathematical Verhoeff checksums and SHA-256 tamper-evident logs.",
    icon: "ShieldCheck"
  },
  {
    title: "Hands-on Practical Security & Lab Auditing",
    category: "Skill Milestone",
    date: "Continuous Learning",
    description: "Demonstrated practical troubleshooting in network security labs, traffic packet analysis with Wireshark, port scanning with Nmap, and application security auditing based on OWASP Top 10 vulnerabilities.",
    icon: "Terminal"
  }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
