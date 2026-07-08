import {
  Factory,
  HeartPulse,
  ShoppingBag,
  HardHat,
  Cpu,
  GraduationCap,
  Landmark,
  Hotel,
  Truck,
  Zap,
  Car,
  AlertTriangle,
  Clock,
  Search,
  ShieldCheck,
  Boxes,
  Bot,
  BarChart3,
  Users,
  CheckCheck,
  Wallet,
  Route,
  FileText,
  ScanText,
  Globe,
  RefreshCw,
  Gauge,
  Lock,
  Sparkles,
} from "lucide-react"
import type { MarketingPage } from "./marketing"

/**
 * Industry pages. Per the RiditStack positioning, ProcLeo is the flagship AI
 * procurement product - so each industry's "capabilities" section is framed as
 * how ProcLeo transforms procurement for that sector.
 */
export const industries: MarketingPage[] = [
  {
    kind: "industry",
    slug: "manufacturing",
    name: "Manufacturing",
    menuLabel: "Manufacturing",
    group: "Industry",
    icon: Factory,
    summary: "Keep production lines moving with resilient, on-time procurement.",
    eyebrow: "Manufacturing",
    hero: {
      titleLead: "Procurement that keeps the line",
      titleHighlight: "running.",
      subtitle:
        "In manufacturing, a late part stops a line and a risky supplier stops production. RiditStack connects sourcing, suppliers, and inventory so materials arrive on time, risk is caught early, and every dollar of direct and indirect spend is under control.",
    },
    metrics: [
      { value: "0", label: "unplanned line stoppages" },
      { value: "Real-time", label: "material inventory" },
      { value: "24/7", label: "supplier risk monitoring" },
    ],
    pains: {
      heading: "One weak link stops everything",
      body: "Manufacturers run on tight margins and tighter schedules. A supplier's financial trouble, an unnoticed stockout, or a slow requisition becomes a stopped line - and lost revenue you never recover.",
      items: [
        { icon: AlertTriangle, title: "Supplier disruption", body: "A single supplier failure halts production." },
        { icon: Boxes, title: "Material stockouts", body: "Inventory and buying aren't connected." },
        { icon: Clock, title: "Slow requisitions", body: "Manual buying delays critical parts." },
      ],
    },
    solution: {
      heading: "Resilient procurement, built for the floor",
      body: "RiditStack unifies direct and indirect procurement with real-time inventory, continuous supplier risk monitoring, and automated buying - so the right materials arrive on time and disruptions are caught before they stop the line.",
      highlights: [
        "Real-time inventory tied to purchasing",
        "Continuous supplier risk monitoring",
        "Automated requisitions and approvals",
        "Direct and indirect spend on one platform",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms manufacturing procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, applied to the factory floor.",
      items: [
        { icon: Boxes, title: "Inventory automation", body: "Auto-replenish materials before they run out." },
        { icon: ShieldCheck, title: "Supplier risk", body: "Monitor supplier health and diversify early." },
        { icon: Route, title: "Strategic sourcing", body: "Run events for direct materials and MRO." },
        { icon: ScanText, title: "Invoice automation", body: "Touchless 3-way matching at high volume." },
        { icon: Bot, title: "AI Copilot", body: "Ask about spend, suppliers, and stock instantly." },
        { icon: BarChart3, title: "Spend analytics", body: "See direct and indirect spend in one view." },
      ],
    },
    workflow: [
      { title: "Connect", body: "Unify suppliers, materials, and spend on one record." },
      { title: "Monitor", body: "Watch inventory and supplier risk continuously." },
      { title: "Automate", body: "Auto-replenish and route approvals without delay." },
      { title: "Optimize", body: "Diversify suppliers and cut material costs." },
    ],
    story: {
      quote:
        "We haven't had a material-driven line stoppage since we deployed RiditStack. The inventory-to-purchasing link alone paid for it.",
      author: "Elena Rossi",
      role: "Supply Chain Director",
      company: "Vertex Manufacturing",
      metric: "0",
      metricLabel: "line stoppages last year",
    },
    faqs: [
      { q: "Does RiditStack handle both direct and indirect spend?", a: "Yes. Direct materials, MRO, and indirect spend all run on one platform, giving you a single view and consistent control across every category." },
      { q: "How does it prevent material stockouts?", a: "Inventory tracks stock in real time and raises requisitions automatically at reorder points, so critical materials are replenished before they run dry." },
      { q: "Can it monitor supplier risk?", a: "Yes. RiditStack continuously monitors supplier financial health, compliance, and certifications, alerting you early so you can diversify before a disruption hits the line." },
    ],
    related: {
      features: ["inventory", "suppliers", "source-to-pay", "invoice-automation"],
      solutions: ["supply-chain", "operations"],
      industries: ["automotive", "energy"],
    },
    seo: {
      title: "Procurement Software for Manufacturing | RiditStack",
      description: "Keep production lines running with resilient procurement. RiditStack connects sourcing, suppliers, and real-time inventory so materials arrive on time and risk is caught early.",
      keywords: "manufacturing procurement software, direct spend, MRO procurement, supplier risk manufacturing",
    },
  },

  {
    kind: "industry",
    slug: "healthcare",
    name: "Healthcare",
    menuLabel: "Healthcare",
    group: "Industry",
    icon: HeartPulse,
    summary: "Compliant, reliable procurement so care is never short of supplies.",
    eyebrow: "Healthcare",
    hero: {
      titleLead: "Procurement that puts",
      titleHighlight: "care first.",
      subtitle:
        "Healthcare procurement can't afford a stockout or a compliance gap. RiditStack keeps supplies available, vendors compliant, and spend controlled - so clinical teams get what they need and finance keeps every purchase auditable.",
    },
    metrics: [
      { value: "100%", label: "vendor compliance tracked" },
      { value: "Real-time", label: "supply availability" },
      { value: "Audit-ready", label: "every transaction" },
    ],
    pains: {
      heading: "Where a stockout is a patient-safety issue",
      body: "In healthcare, procurement failures have consequences beyond cost. A missing supply delays care, a non-compliant vendor creates liability, and manual processes eat clinical and administrative time that should go to patients.",
      items: [
        { icon: Boxes, title: "Critical stockouts", body: "Supply shortages disrupt patient care." },
        { icon: ShieldCheck, title: "Compliance exposure", body: "Vendor certifications lapse unnoticed." },
        { icon: Clock, title: "Administrative burden", body: "Manual procurement drains staff time." },
      ],
    },
    solution: {
      heading: "Reliable supply, enforced compliance",
      body: "RiditStack keeps clinical and operational supplies available with real-time inventory and automated replenishment, tracks every vendor's compliance continuously, and gives finance an audit-ready trail - so care is never short and control is never in doubt.",
      highlights: [
        "Real-time supply inventory and replenishment",
        "Continuous vendor compliance tracking",
        "Audit-ready trail on every purchase",
        "Automated approvals that respect clinical urgency",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms healthcare procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, tuned for care environments.",
      items: [
        { icon: Boxes, title: "Supply inventory", body: "Track and auto-replenish clinical supplies." },
        { icon: ShieldCheck, title: "Vendor compliance", body: "Monitor certifications and credentials 24/7." },
        { icon: CheckCheck, title: "Approval workflows", body: "Fast, policy-aware routing for urgent needs." },
        { icon: ScanText, title: "Invoice automation", body: "Touchless AP for high transaction volumes." },
        { icon: Lock, title: "Audit & security", body: "Complete, secure, exportable audit trails." },
        { icon: BarChart3, title: "Spend analytics", body: "Control cost across departments and sites." },
      ],
    },
    workflow: [
      { title: "Stock", body: "Track supplies with automatic replenishment." },
      { title: "Comply", body: "Monitor every vendor's compliance continuously." },
      { title: "Approve", body: "Route urgent requests fast, within policy." },
      { title: "Audit", body: "Keep every transaction audit-ready by default." },
    ],
    story: {
      quote:
        "We eliminated supply stockouts on our critical items and cut hours of compliance paperwork every week. Staff spend that time on patients now.",
      author: "David Osei",
      role: "VP of Supply Chain",
      company: "Cobalt Health",
      metric: "100%",
      metricLabel: "critical-item availability",
    },
    faqs: [
      { q: "How does RiditStack support healthcare compliance?", a: "It continuously tracks vendor certifications, credentials, and document expirations, alerts you before anything lapses, and logs every transaction for audit - keeping compliance enforced, not assumed." },
      { q: "Can it prevent stockouts of critical supplies?", a: "Yes. Inventory management tracks clinical and operational supplies in real time and auto-replenishes at reorder points so critical items stay available." },
      { q: "Is procurement data kept secure?", a: "RiditStack uses enterprise-grade security including encryption, granular role-based access, and complete audit logging to keep sensitive procurement data protected." },
    ],
    related: {
      features: ["inventory", "suppliers", "approvals", "invoice-automation"],
      solutions: ["finance", "supply-chain"],
      industries: ["education", "government"],
    },
    seo: {
      title: "Procurement Software for Healthcare | RiditStack",
      description: "Compliant, reliable healthcare procurement. RiditStack keeps supplies available, vendors compliant, and every purchase auditable so clinical teams get what they need.",
      keywords: "healthcare procurement software, medical supply management, vendor compliance healthcare, hospital procurement",
    },
  },

  {
    kind: "industry",
    slug: "retail",
    name: "Retail",
    menuLabel: "Retail",
    group: "Industry",
    icon: ShoppingBag,
    summary: "Control multi-location buying and protect margin at scale.",
    eyebrow: "Retail",
    hero: {
      titleLead: "Protect margin across",
      titleHighlight: "every location.",
      subtitle:
        "Retail runs on thin margins and countless suppliers across many stores. RiditStack standardizes buying across locations, consolidates suppliers, and surfaces the savings that go straight to the bottom line.",
    },
    metrics: [
      { value: "12%", label: "savings identified" },
      { value: "Every", label: "location on one process" },
      { value: "Real-time", label: "spend visibility" },
    ],
    pains: {
      heading: "Margin leaking across the store network",
      body: "With dozens or hundreds of locations buying independently, retail spend fragments fast. Duplicate suppliers, off-contract purchases, and inconsistent pricing quietly erode margin no one can see in a single report.",
      items: [
        { icon: Search, title: "Fragmented spend", body: "Every store buys its own way, off-report." },
        { icon: Users, title: "Supplier sprawl", body: "Duplicate vendors inflate cost and effort." },
        { icon: AlertTriangle, title: "Off-contract buying", body: "Negotiated pricing never reaches the store." },
      ],
    },
    solution: {
      heading: "One buying standard, protected margin",
      body: "RiditStack gives every location one controlled way to buy, consolidates suppliers, and enforces negotiated pricing at the point of purchase - while AI surfaces the duplicate and off-contract spend that's quietly costing you margin.",
      highlights: [
        "Standardized buying across all locations",
        "Enforced contract pricing at purchase",
        "Supplier consolidation and analytics",
        "AI-surfaced savings and maverick spend",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms retail procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, built for multi-location retail.",
      items: [
        { icon: Globe, title: "Multi-location", body: "One controlled process across every store." },
        { icon: FileText, title: "Contract pricing", body: "Enforce negotiated rates at the point of buying." },
        { icon: BarChart3, title: "Spend analytics", body: "See spend by store, category, and vendor." },
        { icon: Users, title: "Supplier management", body: "Consolidate to your best-value vendors." },
        { icon: Bot, title: "AI savings", body: "Surface off-contract and duplicate spend." },
        { icon: CheckCheck, title: "Approvals", body: "Fast, consistent approvals at store level." },
      ],
    },
    workflow: [
      { title: "Standardize", body: "Give every location one way to buy." },
      { title: "Consolidate", body: "Reduce duplicate suppliers and contracts." },
      { title: "Enforce", body: "Apply negotiated pricing everywhere." },
      { title: "Save", body: "Act on AI-found margin opportunities." },
    ],
    story: {
      quote:
        "We found seven percent of margin hiding in duplicate vendors and off-contract buying across our stores. RiditStack made it visible in a week.",
      author: "Rachel Turner",
      role: "Head of Procurement",
      company: "Apex Retail Group",
      metric: "7%",
      metricLabel: "margin recovered",
    },
    faqs: [
      { q: "Can we standardize buying across many stores?", a: "Yes. RiditStack applies one controlled buying process across every location while keeping store-level budgets and approvers distinct." },
      { q: "How does it protect margin?", a: "It enforces negotiated contract pricing at the point of purchase and uses AI to surface duplicate suppliers and off-contract spend, turning hidden leakage into recoverable margin." },
      { q: "Does it give visibility across locations?", a: "Yes. You get real-time, categorized spend by store, category, and vendor in one consolidated view, so nothing hides in a fragmented report." },
    ],
    related: {
      features: ["analytics", "contracts", "suppliers", "approvals"],
      solutions: ["mid-market", "operations"],
      industries: ["hospitality", "logistics"],
    },
    seo: {
      title: "Procurement Software for Retail | RiditStack",
      description: "Control multi-location buying and protect margin. RiditStack standardizes procurement across stores, enforces contract pricing, and surfaces savings that hit the bottom line.",
      keywords: "retail procurement software, multi-location purchasing, retail spend management, margin protection",
    },
  },

  {
    kind: "industry",
    slug: "construction",
    name: "Construction",
    menuLabel: "Construction",
    group: "Industry",
    icon: HardHat,
    summary: "Project-based procurement that keeps builds on time and on budget.",
    eyebrow: "Construction",
    hero: {
      titleLead: "Keep every project",
      titleHighlight: "on time and on budget.",
      subtitle:
        "Construction procurement is project-based, deadline-driven, and unforgiving of delays. RiditStack ties buying to project budgets, speeds approvals from the field, and keeps materials moving so builds don't stall.",
    },
    metrics: [
      { value: "Per-project", label: "budget control" },
      { value: "Mobile", label: "field requisitions" },
      { value: "Real-time", label: "committed cost" },
    ],
    pains: {
      heading: "Delays and overruns start with buying",
      body: "When procurement is slow or disconnected from project budgets, materials arrive late and costs blow past estimates before anyone notices. Field teams route around the process, and project margin disappears.",
      items: [
        { icon: Wallet, title: "Budget overruns", body: "Project costs aren't tracked in real time." },
        { icon: Clock, title: "Material delays", body: "Slow buying stalls the build." },
        { icon: Search, title: "No cost visibility", body: "Committed cost is unknown until invoices land." },
      ],
    },
    solution: {
      heading: "Procurement built around the project",
      body: "RiditStack ties every purchase to its project budget, checks cost at commitment, and lets field teams raise requests from mobile with fast approvals - so materials arrive on schedule and project margin stays intact.",
      highlights: [
        "Per-project budgets checked at commitment",
        "Mobile field requisitions and approvals",
        "Real-time committed and actual cost",
        "Supplier and subcontractor management",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms construction procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, built for the job site.",
      items: [
        { icon: Wallet, title: "Project budgets", body: "Track committed cost against each project." },
        { icon: CheckCheck, title: "Mobile approvals", body: "Approve field requests from anywhere." },
        { icon: Users, title: "Subcontractors", body: "Manage suppliers and subs on one record." },
        { icon: FileText, title: "Contract control", body: "Enforce agreed pricing across projects." },
        { icon: ScanText, title: "Invoice automation", body: "Match invoices to POs and deliveries." },
        { icon: BarChart3, title: "Cost analytics", body: "See spend by project, phase, and vendor." },
      ],
    },
    workflow: [
      { title: "Budget", body: "Set a budget for each project and phase." },
      { title: "Request", body: "Field teams raise mobile requisitions." },
      { title: "Control", body: "Every commitment checks the project budget." },
      { title: "Track", body: "Watch committed and actual cost in real time." },
    ],
    story: {
      quote:
        "For the first time we see committed cost per project in real time. Overruns get caught while we can still act on them.",
      author: "Marcus Lee",
      role: "Operations Director",
      company: "Keystone Builders",
      metric: "Real-time",
      metricLabel: "project cost visibility",
    },
    faqs: [
      { q: "Can procurement be tracked per project?", a: "Yes. Budgets can be modeled per project and phase, and every requisition and PO checks against them, so committed cost is visible in real time." },
      { q: "Can field teams request from the job site?", a: "Yes. Field teams raise requisitions from mobile and approvals happen from anywhere, so buying keeps pace with the build." },
      { q: "Does it manage subcontractors and suppliers?", a: "Yes. Suppliers and subcontractors live on one record with contracts, compliance documents, and performance tracked in one place." },
    ],
    related: {
      features: ["budgeting", "purchase-orders", "suppliers", "contracts"],
      solutions: ["operations", "finance"],
      industries: ["manufacturing", "energy"],
    },
    seo: {
      title: "Procurement Software for Construction | RiditStack",
      description: "Keep construction projects on time and on budget. RiditStack ties buying to project budgets, enables mobile field requisitions, and shows committed cost in real time.",
      keywords: "construction procurement software, project procurement, job site purchasing, construction cost control",
    },
  },

  {
    kind: "industry",
    slug: "technology",
    name: "Technology",
    menuLabel: "Technology",
    group: "Industry",
    icon: Cpu,
    summary: "Scale SaaS, hardware, and vendor spend without losing control.",
    eyebrow: "Technology",
    hero: {
      titleLead: "Scale spend as fast as",
      titleHighlight: "you scale.",
      subtitle:
        "Technology companies grow fast and buy faster - SaaS, cloud, hardware, contractors. RiditStack keeps that spend controlled and visible, catches redundant subscriptions, and automates the busywork so lean teams stay in command.",
    },
    metrics: [
      { value: "Every", label: "SaaS & vendor tracked" },
      { value: "AI", label: "duplicate spend detection" },
      { value: "Fast", label: "self-serve buying" },
    ],
    pains: {
      heading: "Fast growth, faster spend sprawl",
      body: "Tech spend scatters across teams, cards, and dozens of SaaS tools. Renewals auto-charge unnoticed, subscriptions duplicate, and cloud and contractor costs balloon - all faster than a lean finance team can track by hand.",
      items: [
        { icon: RefreshCw, title: "SaaS sprawl", body: "Duplicate and unused subscriptions pile up." },
        { icon: Clock, title: "Silent renewals", body: "Auto-renewals charge before anyone reviews them." },
        { icon: Search, title: "Scattered spend", body: "Vendor spend hides across teams and cards." },
      ],
    },
    solution: {
      heading: "Control that keeps pace with growth",
      body: "RiditStack brings every SaaS, cloud, and vendor purchase onto one record, flags renewals before they charge, and uses AI to catch duplicate and unused spend - with self-serve buying that lean teams can actually keep up with.",
      highlights: [
        "Every vendor and subscription on one record",
        "Renewal alerts before auto-charges",
        "AI detection of duplicate and unused spend",
        "Self-serve buying with built-in control",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms technology procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, for high-velocity tech teams.",
      items: [
        { icon: FileText, title: "Contract & renewals", body: "Track every SaaS renewal and never miss one." },
        { icon: Bot, title: "AI savings", body: "Surface duplicate and unused subscriptions." },
        { icon: BarChart3, title: "Spend analytics", body: "See SaaS, cloud, and vendor spend clearly." },
        { icon: Wallet, title: "Budget control", body: "Keep burn in check with live budgets." },
        { icon: Sparkles, title: "AI Copilot", body: "Let any employee self-serve procurement." },
        { icon: Gauge, title: "Automation", body: "Automate approvals and AP for a lean team." },
      ],
    },
    workflow: [
      { title: "Consolidate", body: "Bring every vendor and tool onto one record." },
      { title: "Track", body: "Monitor renewals, usage, and budgets." },
      { title: "Detect", body: "Let AI flag duplicate and unused spend." },
      { title: "Control", body: "Enable fast self-serve buying with guardrails." },
    ],
    story: {
      quote:
        "RiditStack found a stack of duplicate SaaS tools and every silent renewal. We cut vendor spend fifteen percent without slowing anyone down.",
      author: "Jordan Kim",
      role: "COO",
      company: "Quanta AI",
      metric: "15%",
      metricLabel: "vendor spend cut",
    },
    faqs: [
      { q: "Can it track all our SaaS subscriptions?", a: "Yes. Every SaaS, cloud, and vendor contract lives on one record with renewal dates tracked, so nothing auto-charges unnoticed and duplicates get flagged." },
      { q: "How does it catch wasted spend?", a: "AI analyzes your vendor and subscription spend to surface duplicate tools, unused licenses, and off-contract purchases as specific, actionable savings." },
      { q: "Is it lightweight enough for a lean team?", a: "Yes. Self-serve buying, AI automation, and fast setup mean a small finance team stays in control without adding procurement headcount." },
    ],
    related: {
      features: ["contracts", "analytics", "ai-copilot", "budgeting"],
      solutions: ["startups", "executive"],
      industries: ["retail", "education"],
    },
    seo: {
      title: "Procurement Software for Technology Companies | RiditStack",
      description: "Scale SaaS, cloud, and vendor spend without losing control. RiditStack tracks every subscription, catches duplicate spend with AI, and keeps lean teams in command.",
      keywords: "technology procurement software, saas spend management, vendor management tech, subscription tracking",
    },
  },

  {
    kind: "industry",
    slug: "education",
    name: "Education",
    menuLabel: "Education",
    group: "Industry",
    icon: GraduationCap,
    summary: "Stretch every budget with transparent, compliant procurement.",
    eyebrow: "Education",
    hero: {
      titleLead: "Make every budget dollar",
      titleHighlight: "go further.",
      subtitle:
        "Schools, districts, and universities steward tight, scrutinized budgets. RiditStack brings transparency and control to institutional buying - enforcing budgets, simplifying approvals across departments, and keeping every purchase compliant and auditable.",
    },
    metrics: [
      { value: "Per-department", label: "budget control" },
      { value: "Transparent", label: "approvals & audit" },
      { value: "Compliant", label: "by default" },
    ],
    pains: {
      heading: "Tight budgets, heavy scrutiny",
      body: "Educational institutions must account for every dollar across many departments, grants, and funding sources - often with manual, paper-heavy processes that make transparency and compliance a constant struggle.",
      items: [
        { icon: Wallet, title: "Budget pressure", body: "Every department must justify tight spend." },
        { icon: Clock, title: "Manual processes", body: "Paper approvals slow everything down." },
        { icon: ShieldCheck, title: "Compliance demands", body: "Grant and funding rules are hard to enforce." },
      ],
    },
    solution: {
      heading: "Transparent, compliant institutional buying",
      body: "RiditStack enforces budgets by department and funding source, streamlines approvals without the paperwork, and keeps every transaction auditable - so institutions stretch their budgets and satisfy every stakeholder.",
      highlights: [
        "Budget control by department and fund",
        "Streamlined, transparent approvals",
        "Audit-ready records for every purchase",
        "AI-surfaced savings across categories",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms education procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, for schools and universities.",
      items: [
        { icon: Wallet, title: "Fund-level budgets", body: "Control spend by department and funding source." },
        { icon: CheckCheck, title: "Approval workflows", body: "Route requests transparently, no paper." },
        { icon: Lock, title: "Audit & compliance", body: "Keep every purchase auditable for oversight." },
        { icon: BarChart3, title: "Spend analytics", body: "See where budgets go across the institution." },
        { icon: Users, title: "Supplier management", body: "Manage approved and contracted vendors." },
        { icon: Bot, title: "AI Copilot", body: "Help any staff member buy within policy." },
      ],
    },
    workflow: [
      { title: "Allocate", body: "Set budgets by department and fund." },
      { title: "Request", body: "Staff raise requests through one clear process." },
      { title: "Approve", body: "Route transparently within budget and policy." },
      { title: "Account", body: "Keep every transaction auditable by default." },
    ],
    story: {
      quote:
        "We replaced paper requisitions across twelve departments. Approvals are faster, and we can show exactly how every grant dollar was spent.",
      author: "Dr. Amara Beck",
      role: "Director of Finance",
      company: "Meridian University",
      metric: "12",
      metricLabel: "departments unified",
    },
    faqs: [
      { q: "Can budgets be controlled by department and fund?", a: "Yes. Budgets can be modeled by department, program, and funding source, and every request validates against them so spend stays within allocation." },
      { q: "Does it help with grant compliance?", a: "Every transaction is logged and auditable, and budgets can be tied to funding sources, making it straightforward to show how each grant dollar was spent." },
      { q: "Is it easy for non-procurement staff?", a: "Yes. Guided intake and the AI Copilot let any staff member request within policy without procurement training." },
    ],
    related: {
      features: ["budgeting", "approvals", "analytics", "suppliers"],
      solutions: ["finance", "operations"],
      industries: ["government", "healthcare"],
    },
    seo: {
      title: "Procurement Software for Education | RiditStack",
      description: "Stretch every budget with transparent, compliant procurement. RiditStack enforces budgets by department and fund, streamlines approvals, and keeps every purchase auditable.",
      keywords: "education procurement software, school district purchasing, university procurement, grant compliance",
    },
  },

  {
    kind: "industry",
    slug: "government",
    name: "Government",
    menuLabel: "Government",
    group: "Industry",
    icon: Landmark,
    summary: "Transparent, compliant public procurement citizens can trust.",
    eyebrow: "Government & public sector",
    hero: {
      titleLead: "Public procurement that earns",
      titleHighlight: "public trust.",
      subtitle:
        "Government buying demands transparency, fairness, and an unimpeachable audit trail. RiditStack enforces procurement rules automatically, runs competitive sourcing on structured data, and documents every decision - so public spend is defensible by design.",
    },
    metrics: [
      { value: "100%", label: "auditable decisions" },
      { value: "Fair", label: "competitive sourcing" },
      { value: "Enforced", label: "procurement rules" },
    ],
    pains: {
      heading: "Rules, scrutiny, and manual process",
      body: "Public sector procurement operates under strict rules and intense scrutiny, yet often runs on manual, paper-based processes that make fairness hard to prove and audits painful - while transparency requirements grow every year.",
      items: [
        { icon: ShieldCheck, title: "Strict compliance", body: "Rigid procurement rules must be enforced." },
        { icon: Search, title: "Transparency demands", body: "Every decision must be documented and defensible." },
        { icon: Clock, title: "Manual, paper-based", body: "Legacy processes slow procurement to a crawl." },
      ],
    },
    solution: {
      heading: "Defensible procurement by design",
      body: "RiditStack encodes procurement rules as enforced workflows, runs fair competitive sourcing on structured data, and documents every step automatically - so public procurement is transparent, compliant, and audit-ready without the paperwork.",
      highlights: [
        "Procurement rules enforced automatically",
        "Fair, structured competitive sourcing",
        "Complete, defensible audit trail",
        "Digital, paperless workflows",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms public procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, for the public sector.",
      items: [
        { icon: Route, title: "Competitive sourcing", body: "Run fair RFPs and tenders on structured bids." },
        { icon: Lock, title: "Audit trail", body: "Document every decision for full transparency." },
        { icon: CheckCheck, title: "Rule enforcement", body: "Encode procurement policy as enforced workflow." },
        { icon: Users, title: "Supplier management", body: "Track vendor eligibility and compliance." },
        { icon: BarChart3, title: "Spend transparency", body: "Report public spend clearly and completely." },
        { icon: FileText, title: "Contract control", body: "Manage awards and enforce agreed terms." },
      ],
    },
    workflow: [
      { title: "Encode", body: "Turn procurement rules into enforced workflows." },
      { title: "Source", body: "Run fair, structured competitive events." },
      { title: "Document", body: "Capture every decision automatically." },
      { title: "Report", body: "Provide transparent, auditable spend records." },
    ],
    story: {
      quote:
        "Every award now has a complete, defensible record. Audits that took weeks take hours, and the process is fair and transparent end to end.",
      author: "Thomas Wright",
      role: "Procurement Officer",
      company: "Regional Authority",
      metric: "Hours",
      metricLabel: "not weeks, to audit",
    },
    faqs: [
      { q: "Does RiditStack enforce procurement rules?", a: "Yes. Procurement policies and thresholds are encoded as enforced, no-code workflows, so every purchase follows the rules automatically and consistently." },
      { q: "How does it support transparency and audit?", a: "Every decision - sourcing, evaluation, award, and payment - is documented automatically in a complete, tamper-evident audit trail that makes reviews fast and defensible." },
      { q: "Can it run competitive tenders?", a: "Yes. RiditStack runs fair RFPs and tenders on structured line items with side-by-side evaluation and a full record of why each award was made." },
    ],
    related: {
      features: ["source-to-pay", "contracts", "suppliers", "analytics"],
      solutions: ["executive", "finance"],
      industries: ["education", "healthcare"],
    },
    seo: {
      title: "Procurement Software for Government & Public Sector | RiditStack",
      description: "Transparent, compliant public procurement. RiditStack enforces procurement rules, runs fair competitive sourcing, and documents every decision for a defensible audit trail.",
      keywords: "government procurement software, public sector procurement, e-procurement, tender management, procurement compliance",
    },
  },

  {
    kind: "industry",
    slug: "hospitality",
    name: "Hospitality",
    menuLabel: "Hospitality",
    group: "Industry",
    icon: Hotel,
    summary: "Consistent, cost-controlled procurement across every property.",
    eyebrow: "Hospitality",
    hero: {
      titleLead: "Control cost without compromising",
      titleHighlight: "the guest experience.",
      subtitle:
        "Hospitality runs on countless suppliers across every property and outlet. RiditStack standardizes buying, controls food and operating costs, and keeps quality consistent - so margins hold and guests never notice the difference.",
    },
    metrics: [
      { value: "Every", label: "property on one process" },
      { value: "Real-time", label: "cost control" },
      { value: "Consistent", label: "quality & pricing" },
    ],
    pains: {
      heading: "Cost creep across every property",
      body: "With each property and outlet ordering independently from local suppliers, hospitality spend fragments and food cost drifts. Inconsistent pricing and off-contract buying erode already-thin margins across the portfolio.",
      items: [
        { icon: Search, title: "Fragmented buying", body: "Each property orders its own way." },
        { icon: Wallet, title: "Food cost drift", body: "Costs creep without central control." },
        { icon: Users, title: "Supplier sprawl", body: "Too many local vendors, inconsistent pricing." },
      ],
    },
    solution: {
      heading: "One standard across the portfolio",
      body: "RiditStack standardizes procurement across every property, enforces negotiated pricing with preferred suppliers, and gives operators real-time cost control - protecting margin while keeping the quality guests expect.",
      highlights: [
        "Standardized buying across properties",
        "Enforced pricing with preferred suppliers",
        "Real-time food and operating cost control",
        "Consistent quality and compliance",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms hospitality procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, for multi-property operators.",
      items: [
        { icon: Globe, title: "Multi-property", body: "One buying standard across every location." },
        { icon: FileText, title: "Preferred pricing", body: "Enforce negotiated rates with key suppliers." },
        { icon: Boxes, title: "Inventory", body: "Track stock and reduce waste across outlets." },
        { icon: BarChart3, title: "Cost analytics", body: "Monitor food and operating cost in real time." },
        { icon: Users, title: "Supplier management", body: "Consolidate to consistent, quality vendors." },
        { icon: CheckCheck, title: "Approvals", body: "Fast property-level approvals within policy." },
      ],
    },
    workflow: [
      { title: "Standardize", body: "One buying process across every property." },
      { title: "Contract", body: "Lock in preferred-supplier pricing." },
      { title: "Control", body: "Track cost and inventory in real time." },
      { title: "Protect", body: "Hold margin while keeping quality consistent." },
    ],
    story: {
      quote:
        "We standardized purchasing across all our properties and brought food cost back under control - without changing a single thing guests can see.",
      author: "Sofia Almeida",
      role: "VP Operations",
      company: "Lumina Hotels",
      metric: "Consistent",
      metricLabel: "cost across the portfolio",
    },
    faqs: [
      { q: "Can we standardize buying across properties?", a: "Yes. RiditStack applies one buying process and preferred-supplier pricing across every property while keeping location-level control." },
      { q: "How does it control food and operating cost?", a: "Real-time cost analytics and inventory tracking, combined with enforced contract pricing, keep food and operating costs visible and under control across outlets." },
      { q: "Will it reduce supplier sprawl?", a: "Yes. Supplier management helps consolidate to preferred, quality vendors with consistent pricing, cutting the cost and effort of managing too many local suppliers." },
    ],
    related: {
      features: ["contracts", "inventory", "analytics", "suppliers"],
      solutions: ["operations", "mid-market"],
      industries: ["retail", "logistics"],
    },
    seo: {
      title: "Procurement Software for Hospitality | RiditStack",
      description: "Consistent, cost-controlled procurement across every property. RiditStack standardizes buying, enforces preferred pricing, and controls food and operating cost in real time.",
      keywords: "hospitality procurement software, hotel purchasing, food cost control, multi-property procurement",
    },
  },

  {
    kind: "industry",
    slug: "logistics",
    name: "Logistics",
    menuLabel: "Logistics",
    group: "Industry",
    icon: Truck,
    summary: "Keep fleets, depots, and networks stocked and cost-controlled.",
    eyebrow: "Logistics & transportation",
    hero: {
      titleLead: "Keep the network moving,",
      titleHighlight: "cost under control.",
      subtitle:
        "Logistics runs on fuel, parts, equipment, and MRO across depots and fleets. RiditStack keeps every location stocked, controls maintenance and operating spend, and gives you one view of cost across the whole network.",
    },
    metrics: [
      { value: "Every", label: "depot and fleet stocked" },
      { value: "Real-time", label: "MRO & fuel spend" },
      { value: "Network", label: "wide cost visibility" },
    ],
    pains: {
      heading: "Downtime and cost hide in the network",
      body: "Across depots and fleets, a missing part grounds a vehicle and untracked MRO spend adds up fast. Without connected procurement, each location manages its own stock and suppliers, and network-wide cost is impossible to see.",
      items: [
        { icon: Boxes, title: "Parts stockouts", body: "Missing parts ground vehicles and equipment." },
        { icon: Search, title: "Fragmented spend", body: "Each depot buys and tracks separately." },
        { icon: Wallet, title: "Uncontrolled MRO", body: "Maintenance spend grows without oversight." },
      ],
    },
    solution: {
      heading: "Connected procurement across the network",
      body: "RiditStack keeps every depot and fleet stocked with real-time inventory and auto-replenishment, controls MRO and operating spend, and consolidates cost into one network-wide view - so vehicles keep moving and spend stays in check.",
      highlights: [
        "Real-time parts and MRO inventory",
        "Auto-replenishment across depots",
        "Network-wide spend visibility",
        "Supplier and fleet-vendor management",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms logistics procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, for fleets and depots.",
      items: [
        { icon: Boxes, title: "Parts inventory", body: "Auto-replenish parts and MRO across depots." },
        { icon: Car, title: "Asset & fleet", body: "Track equipment and vehicle assets to disposal." },
        { icon: BarChart3, title: "Spend analytics", body: "See fuel, parts, and MRO cost network-wide." },
        { icon: Users, title: "Supplier management", body: "Manage parts and service vendors centrally." },
        { icon: CheckCheck, title: "Fast approvals", body: "Approve depot requests without delay." },
        { icon: ScanText, title: "Invoice automation", body: "Match high-volume MRO invoices touchlessly." },
      ],
    },
    workflow: [
      { title: "Stock", body: "Track parts and MRO across every depot." },
      { title: "Replenish", body: "Auto-reorder before a stockout grounds a vehicle." },
      { title: "Control", body: "Monitor MRO and operating spend in real time." },
      { title: "Consolidate", body: "See cost across the whole network." },
    ],
    story: {
      quote:
        "Auto-replenishment ended our parts stockouts, and we finally see MRO spend across every depot in one place. Uptime and cost both improved.",
      author: "Marcus Lee",
      role: "Network Operations Director",
      company: "Stratus Logistics",
      metric: "Higher",
      metricLabel: "fleet uptime, lower MRO cost",
    },
    faqs: [
      { q: "Can it keep every depot stocked?", a: "Yes. Inventory tracks parts and MRO in real time across depots and auto-replenishes at reorder points, so a missing part doesn't ground a vehicle." },
      { q: "Does it track fleet and equipment assets?", a: "Yes. Asset management tracks equipment and vehicles through their full lifecycle - assignment, maintenance, warranty, and disposal." },
      { q: "Can we see spend across the whole network?", a: "Yes. Spend analytics consolidates fuel, parts, and MRO cost across every depot and fleet into one real-time view." },
    ],
    related: {
      features: ["inventory", "asset-management", "analytics", "invoice-automation"],
      solutions: ["supply-chain", "operations"],
      industries: ["manufacturing", "retail"],
    },
    seo: {
      title: "Procurement Software for Logistics & Transportation | RiditStack",
      description: "Keep fleets and depots stocked and cost-controlled. RiditStack auto-replenishes parts and MRO, tracks fleet assets, and shows network-wide spend in real time.",
      keywords: "logistics procurement software, fleet MRO, parts inventory, transportation spend management",
    },
  },

  {
    kind: "industry",
    slug: "energy",
    name: "Energy",
    menuLabel: "Energy",
    group: "Industry",
    icon: Zap,
    summary: "High-value, compliant sourcing for complex energy operations.",
    eyebrow: "Energy & utilities",
    hero: {
      titleLead: "Source high-value, high-stakes spend",
      titleHighlight: "with confidence.",
      subtitle:
        "Energy procurement means large contracts, complex compliance, and critical equipment where failure isn't an option. RiditStack brings rigor to strategic sourcing, monitors supplier risk continuously, and keeps every high-value decision defensible.",
    },
    metrics: [
      { value: "High-value", label: "sourcing rigor" },
      { value: "24/7", label: "supplier risk monitoring" },
      { value: "Auditable", label: "every award" },
    ],
    pains: {
      heading: "Big contracts, big risk, heavy compliance",
      body: "In energy, a single contract can be worth millions and a critical-equipment supplier's failure can halt operations or trigger safety and compliance issues. Manual sourcing and fragmented risk tracking make high-stakes decisions harder than they should be.",
      items: [
        { icon: AlertTriangle, title: "Critical supplier risk", body: "Equipment supplier failure has severe impact." },
        { icon: ShieldCheck, title: "Complex compliance", body: "Safety and regulatory rules are demanding." },
        { icon: Search, title: "Manual sourcing", body: "High-value events run on spreadsheets and email." },
      ],
    },
    solution: {
      heading: "Rigor and resilience for critical spend",
      body: "RiditStack runs strategic sourcing on structured data with full decision trails, monitors critical-supplier risk continuously, and enforces compliance across high-value contracts - so energy operations source with confidence and stay defensible.",
      highlights: [
        "Structured, auditable strategic sourcing",
        "Continuous critical-supplier risk monitoring",
        "Compliance enforced across contracts",
        "Full decision trail on every award",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms energy procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, for energy and utilities.",
      items: [
        { icon: Route, title: "Strategic sourcing", body: "Run rigorous, high-value competitive events." },
        { icon: ShieldCheck, title: "Supplier risk", body: "Monitor critical suppliers 24/7." },
        { icon: FileText, title: "Contract control", body: "Manage complex, long-term agreements." },
        { icon: Lock, title: "Compliance & audit", body: "Keep every decision defensible and logged." },
        { icon: Boxes, title: "Critical inventory", body: "Ensure critical equipment and spares are stocked." },
        { icon: BarChart3, title: "Spend analytics", body: "Analyze high-value spend across operations." },
      ],
    },
    workflow: [
      { title: "Source", body: "Run structured events for high-value contracts." },
      { title: "Assess", body: "Score suppliers on price, risk, and compliance." },
      { title: "Monitor", body: "Watch critical-supplier risk continuously." },
      { title: "Govern", body: "Keep every award auditable and defensible." },
    ],
    story: {
      quote:
        "For contracts this size, the structured sourcing and full audit trail are essential. We source faster and every decision holds up to scrutiny.",
      author: "Elena Rossi",
      role: "Head of Strategic Sourcing",
      company: "Cobalt Energy",
      metric: "Defensible",
      metricLabel: "every high-value award",
    },
    faqs: [
      { q: "Can it handle high-value, complex sourcing?", a: "Yes. RiditStack runs structured RFPs and reverse auctions with side-by-side evaluation and a complete decision trail, bringing rigor to high-value energy contracts." },
      { q: "How does it manage critical-supplier risk?", a: "It continuously monitors the financial health, compliance, and certifications of critical suppliers, alerting you early so you can act before a failure impacts operations." },
      { q: "Is every decision auditable?", a: "Yes. Sourcing, evaluation, award, and contract decisions are logged in a complete, tamper-evident trail, keeping high-stakes procurement defensible." },
    ],
    related: {
      features: ["source-to-pay", "suppliers", "contracts", "analytics"],
      solutions: ["supply-chain", "executive"],
      industries: ["manufacturing", "construction"],
    },
    seo: {
      title: "Procurement Software for Energy & Utilities | RiditStack",
      description: "High-value, compliant sourcing for complex energy operations. RiditStack brings rigor to strategic sourcing, monitors critical-supplier risk, and keeps every award defensible.",
      keywords: "energy procurement software, utilities procurement, strategic sourcing energy, critical supplier risk",
    },
  },

  {
    kind: "industry",
    slug: "automotive",
    name: "Automotive",
    menuLabel: "Automotive",
    group: "Industry",
    icon: Car,
    summary: "Precision procurement for complex automotive supply chains.",
    eyebrow: "Automotive",
    hero: {
      titleLead: "Precision procurement for a",
      titleHighlight: "just-in-time world.",
      subtitle:
        "Automotive supply chains are deep, global, and unforgiving of delay. RiditStack coordinates suppliers, materials, and quality across tiers so production stays on schedule, costs stay controlled, and risk is caught before it reaches the line.",
    },
    metrics: [
      { value: "Just-in-time", label: "material flow" },
      { value: "Multi-tier", label: "supplier visibility" },
      { value: "Real-time", label: "cost and risk" },
    ],
    pains: {
      heading: "Deep supply chains, zero tolerance for delay",
      body: "Automotive runs just-in-time across many supplier tiers, so a single disruption ripples through the whole chain and stops the line. Coordinating quality, cost, and delivery across that depth with manual tools is nearly impossible.",
      items: [
        { icon: AlertTriangle, title: "Tiered supplier risk", body: "Deep supply chains hide upstream risk." },
        { icon: Boxes, title: "JIT stockouts", body: "A single late part halts assembly." },
        { icon: Search, title: "Cost & quality drift", body: "Hard to track across many suppliers." },
      ],
    },
    solution: {
      heading: "Coordinated, resilient automotive sourcing",
      body: "RiditStack connects suppliers, materials, contracts, and inventory across tiers, monitors risk continuously, and ties buying to real-time demand - so automotive production stays on schedule and cost and quality stay in control.",
      highlights: [
        "Real-time inventory tied to JIT demand",
        "Multi-tier supplier risk monitoring",
        "Contract and quality management",
        "Direct and indirect spend in one place",
      ],
    },
    capabilities: {
      heading: "How ProcLeo transforms automotive procurement",
      subheading: "RiditStack's flagship AI procurement product, ProcLeo, for automotive supply chains.",
      items: [
        { icon: Boxes, title: "JIT inventory", body: "Tie replenishment to real-time production demand." },
        { icon: ShieldCheck, title: "Supplier risk", body: "Monitor risk across supplier tiers." },
        { icon: Route, title: "Strategic sourcing", body: "Source direct materials and components." },
        { icon: FileText, title: "Contract & quality", body: "Enforce pricing and quality terms." },
        { icon: ScanText, title: "Invoice automation", body: "Touchless matching at production volume." },
        { icon: BarChart3, title: "Spend analytics", body: "Track cost across the full supply chain." },
      ],
    },
    workflow: [
      { title: "Map", body: "Connect suppliers, materials, and tiers." },
      { title: "Monitor", body: "Watch risk and inventory continuously." },
      { title: "Synchronize", body: "Tie buying to just-in-time demand." },
      { title: "Optimize", body: "Control cost and quality across the chain." },
    ],
    story: {
      quote:
        "Multi-tier supplier visibility changed how we manage risk. We see problems upstream and act before they ever reach our line.",
      author: "Thomas Wright",
      role: "Director of Supply Chain",
      company: "Apex Automotive",
      metric: "Upstream",
      metricLabel: "risk caught before the line",
    },
    faqs: [
      { q: "Does it support just-in-time material flow?", a: "Yes. Inventory ties replenishment to real-time production demand, so materials arrive when needed without excess stock or stockouts that halt assembly." },
      { q: "Can it track risk across supplier tiers?", a: "Yes. RiditStack monitors supplier financial health, compliance, and performance, helping you surface and act on risk deeper in the supply chain." },
      { q: "Does it handle both direct and indirect spend?", a: "Yes. Direct components, materials, and indirect spend all run on one platform with consistent control and a single view of cost." },
    ],
    related: {
      features: ["inventory", "suppliers", "source-to-pay", "contracts"],
      solutions: ["supply-chain", "operations"],
      industries: ["manufacturing", "logistics"],
    },
    seo: {
      title: "Procurement Software for Automotive | RiditStack",
      description: "Precision procurement for complex automotive supply chains. RiditStack coordinates suppliers, materials, and quality across tiers to keep just-in-time production on schedule.",
      keywords: "automotive procurement software, just in time procurement, multi-tier supplier management, automotive supply chain",
    },
  },
]

export const industrySlugs = industries.map((i) => i.slug)

export function getIndustry(slug: string): MarketingPage | undefined {
  return industries.find((i) => i.slug === slug)
}
