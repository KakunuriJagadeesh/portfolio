/**
 * All portfolio content lives here.
 * Edit this file to update the site — no HTML changes needed.
 */

export const profile = {
  name: "Jagadeesh Kakunuri",
  title: "Senior Software Engineer",
  tagline: "Backend & Distributed Systems",
  location: "Bengaluru, India",
  email: "jagadeeshkakunuri@gmail.com",
  phone: "+91 9872899566",
  linkedin: "https://linkedin.com/in/jagadeesh-kakunuri",
  github: "", // add your GitHub URL, e.g. "https://github.com/username"
  resumeUrl: "assets/Jagadeesh_Kakunuri_Resume.pdf",
  summary:
    "Senior backend engineer with 5+ years building scalable distributed systems, event-driven microservices, and enterprise platforms in Java, Scala, and Spring Boot. I work on high-throughput REST APIs, asynchronous messaging, and resilient service architectures using Kafka, Redis, MongoDB, and Elasticsearch — across financial trading, supplier compliance, and OTT streaming domains.",
};

export const stats = [
  { value: "5+", label: "Years building backends" },
  { value: "4", label: "Production domains" },
  { value: "80%", label: "Config errors eliminated" },
  { value: "0", label: "Downtime on migration" },
];

export const skills = [
  {
    group: "Languages",
    items: ["Java", "Scala", "TypeScript", "SQL"],
  },
  {
    group: "Frameworks",
    items: ["Spring Boot", "Akka HTTP", "Play Framework", "Spring Security", "React"],
  },
  {
    group: "Data & Storage",
    items: ["MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    group: "Messaging & Infra",
    items: ["Kafka", "RabbitMQ", "ActiveMQ Artemis", "Docker", "Git"],
  },
  {
    group: "Cloud & AI",
    items: ["AWS", "LLM Integration", "Prompt Engineering", "LangChain", "Agentic AI"],
  },
  {
    group: "Practices",
    items: [
      "Event-Driven Architecture",
      "Distributed Caching",
      "Fault Tolerance",
      "Performance Tuning",
      "Observability",
    ],
  },
];

export const experience = [
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
    blurb:
      "Content ingestion and search infrastructure for live and video-on-demand streaming at partner scale.",
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
    blurb:
      "Infrastructure monitoring, automated incident response, and background job orchestration for enterprise systems.",
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

export const projects = [
  {
    name: "Self-Service Configuration Platform",
    context: "Avetta",
    problem:
      "Supplier onboarding rules were hard-coded, so every new client configuration required an engineering release cycle and was error-prone.",
    approach:
      "Built a JSON-driven configuration engine over Scala/Akka HTTP and Spring Boot microservices with MongoDB-backed schema storage and dynamic validation rules evaluated at request time. Kafka decoupled ingestion from processing so high-volume onboarding bursts were absorbed asynchronously.",
    outcome:
      "Business teams configure onboarding workflows without engineering involvement. Configuration errors dropped by over 80%.",
    stack: ["Scala", "Akka HTTP", "Spring Boot", "Kafka", "MongoDB", "Redis"],
    tags: ["Event-Driven", "Platform"],
  },
  {
    name: "AI-Assisted Validation & Remediation",
    context: "Avetta",
    problem:
      "Suppliers submitting invalid compliance data generated large volumes of manual review work and slow back-and-forth cycles.",
    approach:
      "Integrated LLM-driven validation into the onboarding pipeline using prompt engineering, generating targeted remediation suggestions inline rather than generic error codes.",
    outcome:
      "Reduced manual review effort and shortened the correction loop for supplier submissions.",
    stack: ["LLMs", "Prompt Engineering", "LangChain", "Java"],
    tags: ["AI/LLM"],
  },
  {
    name: "Intraday Position Processing Services",
    context: "Bank of America",
    problem:
      "Real-time trade position updates must be processed accurately and fast across multiple regional deployments with no tolerance for data loss.",
    approach:
      "Built Java/Spring Boot services with layered validation frameworks, retry and exception-handling strategies, and production monitoring hooks. Tuned processing pipelines for latency and throughput.",
    outcome:
      "Improved latency and throughput on real-time position updates while maintaining high availability across regions.",
    stack: ["Java", "Spring Boot", "REST", "SQL"],
    tags: ["FinTech", "Reliability"],
  },
  {
    name: "OTT Content Ingestion & Search",
    context: "YuppTV",
    problem:
      "Legacy ingestion workflows could not keep pace with partner content volume, and search latency hurt discoverability.",
    approach:
      "Rebuilt ingestion as Scala/Akka HTTP microservices with REST integrations for SonyLIV and News9Plus, added metadata classification pipelines, and layered Elasticsearch indexing with Redis caching in front of search.",
    outcome:
      "Low-latency search, improved recommendation accuracy, and a full migration off the legacy system with zero production downtime.",
    stack: ["Scala", "Akka HTTP", "Elasticsearch", "Redis"],
    tags: ["Streaming", "Search"],
  },
  {
    name: "DHCP Exhaustion Monitoring",
    context: "LTIMindtree",
    problem:
      "IPv4/IPv6 pool exhaustion was detected reactively, after users were already affected.",
    approach:
      "Designed monitoring services that track address pool utilization and automatically open incident tickets ahead of exhaustion thresholds.",
    outcome: "Shifted address-pool incidents from reactive to proactive detection.",
    stack: ["Java", "Hyperic", "Monitoring"],
    tags: ["Infrastructure"],
  },
  {
    name: "Microservices Banking Platform",
    context: "Personal project",
    problem:
      "Wanted a full reference implementation of a production-shaped microservices system end to end.",
    approach:
      "Spring Boot services with OAuth2 security, role-based access control, CSRF protection, RabbitMQ asynchronous messaging, Eureka service discovery, centralized configuration, and Dockerized deployment.",
    outcome:
      "Complete observability stack via Prometheus and Grafana across all services.",
    stack: [
      "Spring Boot",
      "OAuth2",
      "RabbitMQ",
      "Eureka",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    tags: ["Open Source", "Architecture"],
    // repo: "https://github.com/username/repo",
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
