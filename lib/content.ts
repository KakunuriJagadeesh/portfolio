export const profile = {
  name: "Jagadeesh Kakunuri",
  location: "Bengaluru, India",
  email: "jagadeeshkakunuri@gmail.com",
  phone: "+91 9872899566",
  linkedin: "https://linkedin.com/in/jagadeesh-kakunuri",
  github: "",
  resumeUrl: "/assets/Jagadeesh_Kakunuri_Resume.pdf",
  heroHeadline: "Hey, I'm Jagadeesh. I build what happens behind the screen.",
  heroParagraph:
    "I started with backend engineering — APIs, distributed systems, event-driven workflows. Now I'm exploring agentic AI — connecting LLMs, tools, and backend systems into software that can reason and act.",
  heroClosing: "Backend systems. Distributed architecture. Agentic AI.",
};

export const stats = [
  { value: "5+", label: "Years building backends" },
  { value: "4", label: "Production domains" },
  { value: "80%", label: "Config errors eliminated" },
  { value: "0", label: "Downtime on migration" },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  { group: "Backend", items: ["Java", "Scala", "Python", "Spring Boot", "Akka", "FastAPI"] },
  { group: "Distributed Systems", items: ["Kafka", "Messaging Systems", "Event-Driven Architecture", "Microservices"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { group: "AI", items: ["LLMs", "RAG", "LangChain", "Agents", "Tool Calling", "Orchestration"] },
  { group: "Infrastructure", items: ["Docker", "Observability", "CI/CD", "Cloud"] },
];

// Outcomes I actually deliver — not just technologies I know.
export const capabilities: string[] = [
  "Design scalable backend architectures",
  "Build event-driven systems",
  "Develop high-throughput APIs and microservices",
  "Build reliable data and messaging pipelines",
  "Integrate LLMs into production systems",
  "Build RAG pipelines",
  "Build AI agents with tool calling and orchestration",
  "Automate manual validation and operational workflows",
  "Connect AI agents to existing backend systems",
  "Design fault-tolerant and observable production systems",
  "Debug and improve complex distributed workflows",
];

// The conceptual pipeline behind agentic systems I build — integrated into real infrastructure, not a chatbot demo.
export const agenticPipeline: string[] = [
  "LLM",
  "Reasoning",
  "Tools",
  "APIs",
  "Data",
  "Memory",
  "Action",
  "Validation",
  "Recovery",
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  blurb: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Bank of America",
    role: "Senior Software Engineer",
    period: "Feb 2026 – Present",
    location: "Bengaluru, India",
    domain: "Capital Markets",
    blurb:
      "Backend and AI-assisted services for intraday position processing, trade workflows, and LLM-driven validation on mission-critical, multi-region infrastructure.",
    highlights: [
      "Designed and developed backend services for intraday position processing and trade workflows in Scala.",
      "Built high-throughput AMPS messaging integrations for real-time trade and position updates across multi-region infrastructure.",
      "Integrated SWIFT messaging standards into trade confirmation and settlement workflows for enterprise trading applications.",
      "Implemented resilient processing with validation frameworks, retry mechanisms, structured exception handling, and production monitoring.",
      "Built LLM-powered validation agents on MCP — using tool calling and structured outputs to orchestrate multi-step remediation on trade exceptions.",
      "Explored retrieval-augmented generation (RAG) to ground LLM trade-validation outputs in live position and reference data.",
      "Partnered with solution architects, QA, and business teams to ship highly available, production-grade services across regional deployments.",
    ],
    stack: ["Scala", "AMPS", "SWIFT", "LLMs", "MCP", "RAG"],
  },
  {
    company: "Indium Software / Avetta",
    role: "Software Engineer L2",
    period: "Jan 2025 – Feb 2026",
    location: "Bengaluru, India",
    domain: "Supply Chain Compliance",
    blurb:
      "A self-service configuration platform that turned hard-coded supplier onboarding into JSON-driven, LLM-validated workflows with agentic remediation.",
    highlights: [
      "Designed and built a self-service configuration platform in Scala, Akka HTTP, MongoDB, and Spring Boot microservices to automate supplier onboarding.",
      "Architected configurable JSON-driven onboarding APIs with dynamic validation rules, reducing configuration errors by over 80%.",
      "Designed event-driven services on Kafka for asynchronous processing of high-volume onboarding requests.",
      "Integrated LLM-powered validation workflows with prompt engineering, structured outputs, and agentic remediation suggestions — cutting manual review time.",
      "Prototyped retrieval-augmented generation (RAG) and tool-calling patterns to ground LLM remediation suggestions in live onboarding data.",
      "Built secure auth flows with Spring Security, MFA, OTP (Twilio), and role-based access control.",
      "Implemented retry mechanisms, distributed caching, and fault-tolerant service-to-service communication.",
    ],
    stack: ["Scala", "Akka HTTP", "Spring Boot", "Kafka", "MongoDB", "LLMs", "RAG"],
  },
  {
    company: "YuppTV Digital India",
    role: "Junior Software Engineer",
    period: "May 2024 – Dec 2024",
    location: "Hyderabad, India",
    domain: "OTT Streaming",
    blurb: "Content ingestion and search infrastructure for live and video-on-demand streaming at partner scale.",
    highlights: [
      "Designed scalable OTT content ingestion services in Scala and Akka HTTP supporting live and VOD streaming.",
      "Built RESTful integrations for premium partners including SonyLIV and News9Plus, enabling automated content onboarding and metadata sync.",
      "Developed metadata classification and filtering pipelines that improved content discoverability and recommendation accuracy.",
      "Enhanced search performance with Elasticsearch indexing and Redis caching for low-latency queries.",
      "Migrated legacy ingestion workflows to microservices with zero production downtime.",
    ],
    stack: ["Scala", "Akka HTTP", "Elasticsearch", "Redis", "Microservices"],
  },
  {
    company: "LTIMindtree",
    role: "Software Engineer",
    period: "Mar 2022 – May 2024",
    location: "Bengaluru, India",
    domain: "Enterprise Monitoring",
    blurb: "Infrastructure monitoring, automated incident response, and background job orchestration for enterprise systems.",
    highlights: [
      "Extended the enterprise Hyperic monitoring platform with ADR, DCFC, automated incident creation, and infrastructure monitoring.",
      "Designed DHCP monitoring services to proactively detect IPv4/IPv6 exhaustion and auto-generate incident tickets.",
      "Improved reliability of enterprise notification services by resolving background processing failures and optimizing alert delivery.",
      "Built enhancements to customized Artemis ActiveMQ plugins for scheduling, monitoring, and executing enterprise background jobs.",
      "Strengthened application security by identifying vulnerabilities and implementing secure coding improvements.",
    ],
    stack: ["Java", "Hyperic", "ActiveMQ Artemis", "Monitoring", "Security"],
  },
];

export type RoadmapStatus = "in-progress" | "exploring" | "planned";

export type RoadmapItem = {
  title: string;
  status: RoadmapStatus;
  description: string;
};

// Forward-looking — where I'm deliberately pushing depth next. Edit freely.
export const roadmap: RoadmapItem[] = [
  {
    title: "Agentic AI at production scale",
    status: "in-progress",
    description:
      "Extending the LLM validation work from Avetta into multi-agent orchestration — agents that coordinate across services, not just single-shot prompts.",
  },
  {
    title: "Low-latency system design",
    status: "in-progress",
    description:
      "Specializing in high-throughput, low-latency patterns for capital markets workloads — the performance ceiling above typical REST/CRUD systems.",
  },
  {
    title: "Kubernetes & cloud-native orchestration",
    status: "exploring",
    description:
      "Deepening container orchestration beyond Docker Compose — production-grade Kubernetes for the microservices I already run in Spring Boot and Akka.",
  },
  {
    title: "Vector search & RAG infrastructure",
    status: "exploring",
    description:
      "Building out retrieval infrastructure — vector databases, embedding pipelines — to support LLM-driven remediation work with real production-scale retrieval.",
  },
  {
    title: "Stream processing beyond Kafka",
    status: "planned",
    description:
      "Moving from Kafka-as-message-bus into stateful stream processing — Flink or ksqlDB — for real-time aggregation on trade and event data.",
  },
  {
    title: "Go for performance-critical services",
    status: "planned",
    description:
      "Picking up Go as a second systems language for services where JVM startup time and GC pauses aren't acceptable.",
  },
];

export type ServiceItem = {
  verb: string;
  title: string;
  description: string;
  keywords: string[];
  icon: "api" | "events" | "architecture" | "migration" | "ai" | "reliability";
};

// What I actually build for a client or team — outcomes, not a technology menu.
export const services: ServiceItem[] = [
  {
    verb: "Build",
    title: "Production-Grade Backend Systems",
    description:
      "Build high-throughput APIs, microservices, event-driven workflows, and distributed systems designed for scale, concurrency, and failure.",
    keywords: ["Java", "Scala", "Python", "Spring Boot", "Akka", "APIs", "Microservices"],
    icon: "api",
  },
  {
    verb: "Automate",
    title: "AI-Powered Workflows",
    description:
      "Turn repetitive processes into intelligent workflows using LLMs, agents, tool calling, RAG, and multi-step orchestration.",
    keywords: ["LLMs", "RAG", "Agents", "Tool Calling", "Orchestration", "Automation"],
    icon: "events",
  },
  {
    verb: "Scale",
    title: "Performance & Reliability",
    description:
      "Find bottlenecks, reduce latency, improve concurrency, and build systems that remain reliable under real-world traffic.",
    keywords: ["Kafka", "Redis", "Elasticsearch", "Async", "Caching", "Observability"],
    icon: "architecture",
  },
  {
    verb: "Integrate",
    title: "Agentic AI into Existing Systems",
    description:
      "Connect AI agents to APIs, databases, internal tools, and business workflows — making AI capable of reasoning, acting, and validating results.",
    keywords: ["Agents", "APIs", "RAG", "Tools", "Memory", "LLM Workflows"],
    icon: "ai",
  },
  {
    verb: "Modernize",
    title: "Evolve Existing Systems",
    description:
      "Move brittle or hard-coded systems toward configurable, event-driven, observable, and AI-ready architectures without unnecessary rewrites.",
    keywords: ["Legacy Modernization", "Event-Driven", "APIs", "Configuration", "AI Integration"],
    icon: "migration",
  },
  {
    verb: "Solve",
    title: "Complex Production Problems",
    description:
      "Investigate difficult failures, concurrency issues, performance bottlenecks, and distributed-system problems — then design practical fixes.",
    keywords: ["Debugging", "Root Cause Analysis", "Concurrency", "Reliability", "Incident Response"],
    icon: "reliability",
  },
];

// Closing-section principles on the Services page.
export const buildPrinciples = [
  { title: "Think in Systems", description: "Architecture before implementation." },
  { title: "Build for Failure", description: "Retries, recovery, observability, and sane failure modes." },
  {
    title: "Use AI Where It Matters",
    description: "Agents and LLMs where they genuinely reduce complexity or manual effort.",
  },
  { title: "Own the Outcome", description: "From first architecture decision to production behavior." },
];

export const education = {
  school: "Lovely Professional University",
  degree: "Bachelor of Technology",
  period: "2017 – 2021",
};

export const certifications = [
  { name: "LLM Engineering: Master AI, LLM & Agents", year: "2025" },
  { name: "NLP – Natural Language Processing with Python", year: "2025" },
  { name: "Microservices with Spring Boot, Docker & Kubernetes", year: "2023" },
  { name: "Scala & Functional Programming Essentials", year: "2022" },
];

export const interests = ["Blogging", "Sports", "Traveling", "Bike Rides"];

// Minimal top nav — the desktop header only. Absolute paths so these resolve correctly
// from the homepage's anchor sections and from standalone pages like /services alike.
export const navLinks = [
  { href: "/#experience", label: "Work" },
  { href: "/services", label: "Service" },
];

// Every homepage section, in page order — drives the right-edge dot nav and the mobile menu.
// Services lives on its own page (/services), so it isn't part of this anchor list.
export const sectionNav = [
  { href: "/#about", label: "About" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#agentic-ai", label: "Agentic AI" },
  { href: "/#stack", label: "Stack" },
  { href: "/#experience", label: "Experience" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];
