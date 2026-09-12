export type Bullet = { key: string; text: string }

export type Role = {
  id: string
  company: string
  role: string
  dates: string
  note?: string
  current?: boolean
  summary?: string
  tags: string[]
  bullets: Bullet[]
}

export const profile = {
  name: "Jalen Arms",
  title: "Software Engineer",
  focus: "Backend & Distributed Systems",
  email: "jalenarms@outlook.com",
  avatar:
    "https://res.cloudinary.com/dvlhy87zl/image/upload/v1740702434/ol51x81xxhex8v7mvqbu.png",
  links: {
    github: "https://github.com/jalenarms1",
    linkedin: "https://linkedin.com/in/jalen-arms-38304a241",
    upwork: "https://www.upwork.com/freelancers/~01cd6b779e11f90eb8?mp_source=share",
  },
  bio: [
    "Hi, I'm Jalen Arms — a software engineer who works mostly in C# and .NET. I build backend APIs and services, the async messaging that connects them, and the data layer underneath, in both SQL and NoSQL databases.",
    "I also set up CI/CD and handle deployments, write Python for data automation, and build front ends in Blazor WASM or React when a project needs one.",
  ],
}

/** Skills laid out as system layers, top (client) to bottom (platform). */
export const stack: { layer: string; caption: string; items: string[] }[] = [
  {
    layer: "Client",
    caption: "what users touch",
    items: ["Blazor WASM", "React", "TypeScript", "Tailwind CSS", "SwiftUI"],
  },
  {
    layer: "Services",
    caption: "where the logic lives",
    items: ["C#", ".NET / ASP.NET Core", "REST APIs", "GraphQL", "Python"],
  },
  {
    layer: "Messaging",
    caption: "how services talk",
    items: ["Service bus", "Event-driven workflows", "State machines"],
  },
  {
    layer: "Data",
    caption: "where state rests",
    items: ["SQL Server", "Cosmos DB", "Marten", "Elasticsearch", "ETL"],
  },
  {
    layer: "Platform",
    caption: "how it ships and runs",
    items: ["Azure", "Azure DevOps", "CI/CD", "Windows IIS", "Git"],
  },
]

export const roles: Role[] = [
  {
    id: "carvana",
    company: "Carvana",
    role: "Software Engineer",
    dates: "2025 — Current",
    current: true,
    summary:
      "ADESA Clear, Carvana's digital wholesale auction — serving both first-party Carvana wholesale inventory and third-party sellers including BMW, Tesla, Chase, and Credit Union Leasing of America.",
    tags: ["C#", ".NET", "Service bus", "GraphQL", "Elasticsearch", "Azure DevOps"],
    bullets: [
      { key: "Listing automation", text: "develop and maintain the .NET microservices that automate daily listing creation for auction inventory" },
      { key: "Async data flow", text: "work across distributed services that communicate over a service bus, decoupled and independently deployable" },
      { key: "Event-driven workflows", text: "develop state machine workflows that orchestrate inventory lifecycle transitions and listing creation across those services" },
      { key: "Production support", text: "diagnose and resolve customer-impacting incidents across distributed services, feeding fixes back to reduce repeat failures" },
      { key: "Search API", text: "own the Elasticsearch ingestion pipelines behind vehicle discovery, keeping listings searchable for web and mobile clients as inventory turns over" },
      { key: "Index tuning", text: "tune index mappings and query construction so search stays fast and relevant as inventory changes" },
      { key: "GraphQL subgraphs", text: "compose subgraphs with Hot Chocolate through a Fusion gateway, giving client teams one typed endpoint instead of calls to each backing service" },
      { key: "Azure DevOps CI/CD", text: "automate builds, deployments, and releases across multiple production services, shortening the path from merge to production" },
    ],
  },
  {
    id: "community-bridges",
    company: "Community Bridges Inc.",
    role: "Software Engineer / Data Engineer",
    dates: "2023 — 2025",
    summary:
      "Built a shelter management platform from the ground up — a .NET Web API with a Blazor WASM client — that replaced the Excel workbooks shelters used to manage clientele, and became their system of record for HUD-mandated HMIS documentation.",
    tags: ["C#", ".NET", "Blazor WASM", "React", "SQL Server", "Python"],
    bullets: [
      { key: "Bedboard", text: "built a bird's-eye view of the shelter's full client inventory, with drill-in to any client's active bedstay or profile, replacing manual spreadsheet roster reconciliation with a live view staff act on directly" },
      { key: "Low-code template engine", text: "built a configurable templating system that persists entirely new data models from configuration alone, so staff capture new HMIS data points without a code change or redeploy" },
      { key: "E-signature capture", text: "integrated an ePad ink signature pad with a reusable PDF generator that stamps client signatures and initials onto generated documents, giving shelters downloadable, audit-ready signed records" },
      { key: "HIPAA compliance", text: "implemented role-based access control and field-level audit history so protected client data stays access-scoped and every change is attributable" },
      { key: "Clean Architecture", text: "structured the solution to keep it testable and maintainable as shelter requirements changed" },
      { key: "Blue-green deployment", text: "built CI/CD pipelines that run automated tests, deploy to a staging IIS site, then slot-swap between two IIS sites running in tandem, so releases land on the remote server without downtime and roll back with a swap" },
      { key: "Stored procedures & views", text: "write and maintain business logic on a remote SQL Server instance serving both the application and staff reporting needs" },
      { key: "Schema design", text: "model client, bedstay, and documentation data so the flexible template system can persist new record types without schema migrations" },
      { key: "Automated ETL", text: "built pipelines scheduled through Windows Task Scheduler that process batches of billing claims, removing a recurring manual step from the billing cycle" },
      { key: "Data ingestion", text: "normalize and import large Excel and CSV datasets into SQL Server, generalizing the data as needed so downstream reporting stays consistent" },
    ],
  },
  {
    id: "hotspot",
    company: "HotSpot",
    role: "Lead iOS Developer",
    dates: "2024 — 2025",
    tags: ["Swift", "SwiftUI", "Firebase", "OpenAI API", "Google Maps SDK"],
    bullets: [
      { key: "SwiftUI migration", text: "migrated a UIKit and Storyboard app to SwiftUI, preserving all original functionality while improving maintainability." },
      { key: "Firebase Functions", text: "moved backend logic off the device, improving performance and reducing client-side complexity." },
      { key: "Scheduled enrichment", text: "built a job that seeds the database with processed data, using the OpenAI API to analyze records and set key fields from the result." },
      { key: "Email ingestion", text: "built an automated task that parses inbound emails, extracts event details with the OpenAI API, and imports them, removing manual event entry." },
      { key: "Google Maps SDK", text: "used a delegate-based design to capture device tokens and handle map events, updating state dynamically as the user pans the map." },
      { key: "Figma to SwiftUI", text: "translated designs into pixel-perfect views, keeping the experience visually consistent throughout the app." },
      { key: "State management", text: "used SwiftUI's state system to keep the interface smooth, responsive, and interactive." },
      { key: "Global state", text: "designed ObservableObject classes for shared state and used structs for data modeling and type safety." },
      { key: "Push notifications", text: "handled user authorization and secure device token storage so the app could re-engage users." },
      { key: "Extensions", text: "centralized date, font, and view helpers to cut duplication across the codebase." },
    ],
  },
  {
    id: "silly-socks",
    company: "Silly Socks and More",
    role: "Lead Fullstack Developer",
    dates: "2023 — 2024",
    tags: ["Go", "React", "Tailwind CSS", "Stripe", "SQL"],
    bullets: [
      { key: "E-commerce platform", text: "led development on a Go, React, and Tailwind stack, taking the business from no online presence to selling products directly." },
      { key: "Go HTTP server", text: "handled client requests and controlled data flow throughout the application" },
      { key: "Stripe checkout", text: "redirected users to a personalized ordering page and handled webhooks to keep payment status in sync" },
      { key: "Search & filtering", text: "let customers find items by category and keyword instead of scrolling the full catalog." },
      { key: "Admin interface", text: "gave the owner direct control over orders, product catalog, and internal operations without developer involvement." },
    ],
  },
  {
    id: "signalizer",
    company: "Signalizer.io",
    role: "Lead Fullstack Developer",
    dates: "2023",
    tags: ["Next.js", "React", "Postgres", "Stripe", "Chart.js"],
    bullets: [
      { key: "Real-time platform", text: "architected a Next.js application delivering up-to-the-minute stock and cryptocurrency pricing and news." },
      { key: "Chart.js", text: "let users analyze trends across customizable timeframes, making the underlying data far easier to interpret." },
      { key: "Stripe subscriptions", text: "implemented a monthly billing model that gated premium data and created recurring revenue." },
      { key: "Postgres schema", text: "designed the table structures backing every new feature" },
    ],
  },
  {
    id: "starhealth",
    company: "StarHealth",
    role: "Fullstack Software Developer",
    dates: "2022 — 2023",
    tags: ["Next.js", "tRPC", "Prisma", "SQL"],
    bullets: [
      { key: "Next.js T3 migration", text: "led the migration to a T3 stack, using tRPC for end-to-end type safety and Prisma as the ORM, eliminating a class of client/server runtime errors." },
      { key: "Schema restructuring", text: "reworked the existing schema, improving data retrieval performance and unblocking frontend features." },
      { key: "Directory search", text: "built a page with search and filtering that made a large record set navigable for end users." },
      { key: "Views", text: "precomputed common joins to speed up the app's heaviest queries" },
      { key: "Indexing", text: "indexed the tables behind search and filtering so the directory stayed responsive at scale" },
    ],
  },
]

export const reviews = [
  { title: "UI/UX Graphic Designer with Swift/Xcode Experience for App Development", quote: "Jalen is very diligent and is wonderful to work with. He is very prompt and caring and puts in a wholehearted effort. He puts in a lot of effort and is one of the best people we have worked with. Highly recommend", period: "Nov 2, 2024 - Jan 6, 2025" },
  { title: "Front end development", quote: "Talented Professional", period: "Sep 24, 2023 - Oct 5, 2023" },
  { title: "Web Design using HTML, CSS, Javascript", quote: "Cannot say this enough about the professionalism that was displayed. Great work ethic and very knowledgeable about coding websites.", period: "Feb 8, 2023 - Feb 25, 2023" },
  { title: "Deploy Website via last contract", quote: "Amazing work cannot complain one bit. Will recommend to anyone needing services pertaining to website creation. 10 out of 10 will be using his services when needed again.", period: "Feb 12, 2023 - Feb 25, 2023" },
  { title: "Database Restructuring + Front-end Hookup", quote: "He's great", period: "Dec 8, 2022 - Jan 1, 2023" },
]
