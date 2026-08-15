export const profile = {
  name: "Jagadeesh Kakunuri",
  title: "Senior Software Engineer",
  tagline: "Backend & Distributed Systems",
  location: "Bengaluru, India",
  email: "jagadeeshkakunuri@gmail.com",
  phone: "+91 9872899566",
  linkedin: "https://linkedin.com/in/jagadeesh-kakunuri",
  github: "",
  resumeUrl: "/assets/Jagadeesh_Kakunuri_Resume.pdf",
  summary:
    "Senior backend engineer with 5+ years building scalable distributed systems, event-driven microservices, and enterprise platforms in Java, Scala, and Spring Boot. I work on high-throughput REST APIs, asynchronous messaging, and resilient service architectures using Kafka, Redis, MongoDB, and Elasticsearch — across financial trading, supplier compliance, and OTT streaming domains.",
};

export const stats = [
  { value: "5+", label: "Years building backends" },
  { value: "4", label: "Production domains" },
  { value: "80%", label: "Config errors eliminated" },
  { value: "0", label: "Downtime on migration" },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["Java", "Scala", "TypeScript", "SQL"] },
  { group: "Frameworks", items: ["Spring Boot", "Akka HTTP", "Play Framework", "Spring Security", "React"] },
  { group: "Data & Storage", items: ["MySQL", "MongoDB", "Redis", "Elasticsearch"] },
  { group: "Messaging & Infra", items: ["Kafka", "RabbitMQ", "ActiveMQ Artemis", "Docker", "Git"] },
  { group: "Cloud & AI", items: ["AWS", "LLM Integration", "Prompt Engineering", "LangChain", "Agentic AI"] },
  {
    group: "Practices",
    items: ["Event-Driven Architecture", "Distributed Caching", "Fault Tolerance", "Performance Tuning", "Observability"],
  },
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
      "Backend services for intraday position processing and financial trade workflows on mission-critical, multi-region infrastructure.",
    highlights: [
      "Designed and developed backend services for intraday position processing and trade workflows in Java and Spring Boot.",
      "Built scalable REST APIs and service integrations supporting multi-region client onboarding for enterprise trading applications.",
      "Optimized backend processing pipelines, improving latency and throughput for real-time position updates.",
      "Implemented resilient processing with validation frameworks, retry mechanisms, structured exception handling, and production monitoring.",
      "Partnered with solution architects, QA, and business teams to ship highly available services across regional deployments.",
      "Owned production support, root cause analysis, and performance tuning for mission-critical financial systems.",
    ],
    stack: ["Java", "Spring Boot", "REST", "SQL", "Monitoring"],
  },
  {
    company: "Indium Software / Avetta",
    role: "Software Engineer L2",
    period: "Jan 2025 – Feb 2026",
    location: "Bengaluru, India",
    domain: "Supply Chain Compliance",
    blurb:
      "A self-service configuration platform that turned hard-coded supplier onboarding into JSON-driven, dynamically validated workflows.",
    highlights: [
      "Designed and built a self-service configuration platform in Scala, Akka HTTP, MongoDB, and Spring Boot microservices to automate supplier onboarding.",
      "Architected configurable JSON-driven onboarding APIs with dynamic validation rules, reducing configuration errors by over 80%.",
      "Designed event-driven services on Kafka for asynchronous processing of high-volume onboarding requests.",
      "Integrated AI-powered validation workflows and LLM-driven remediation suggestions via prompt engineering.",
      "Built secure auth flows with Spring Security, MFA, OTP (Twilio), and role-based access control.",
      "Implemented retry mechanisms, distributed caching, and fault-tolerant service-to-service communication.",
      "Improved backend performance through asynchronous execution, caching strategies, and query optimization.",
    ],
    stack: ["Scala", "Akka HTTP", "Spring Boot", "Kafka", "MongoDB", "LLMs"],
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
  title: string;
  description: string;
  icon: "api" | "events" | "architecture" | "migration" | "ai" | "reliability";
};

// What I can take on for a client/team, grounded in what I've actually shipped.
export const services: ServiceItem[] = [
  {
    title: "Backend & API Development",
    description:
      "High-throughput REST APIs and service integrations in Java, Scala, and Spring Boot — designed for correctness under load, not just to pass a demo.",
    icon: "api",
  },
  {
    title: "Distributed Systems & Event-Driven Architecture",
    description:
      "Kafka-based pipelines, async messaging, and service-to-service communication that stays resilient when a downstream dependency has a bad day.",
    icon: "events",
  },
  {
    title: "System Architecture Consulting",
    description:
      "Design reviews for teams scaling past a monolith — where to introduce caching, queues, or read replicas, and just as importantly, where not to.",
    icon: "architecture",
  },
  {
    title: "Legacy System Modernization",
    description:
      "Migrating brittle, hard-coded workflows into configurable, JSON-driven platforms — the kind of migration that ships with zero downtime, not a maintenance window.",
    icon: "migration",
  },
  {
    title: "LLM Integration for Backend Workflows",
    description:
      "Wiring LLMs into production validation and remediation paths — not a chatbot bolted on the side, but a model that measurably reduces manual review work.",
    icon: "ai",
  },
  {
    title: "Production Support & Reliability",
    description:
      "Root cause analysis, incident response, and the unglamorous work of making a system boring to operate.",
    icon: "reliability",
  },
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

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];
