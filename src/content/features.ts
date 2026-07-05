import {
  Workflow,
  Route,
  Inbox,
  ShoppingCart,
  CheckCheck,
  Users,
  ReceiptText,
  FileSignature,
  BarChart3,
  Wallet,
  Bot,
  Plug,
  Sparkles,
  ShieldCheck,
  Clock,
  Gauge,
  Eye,
  Zap,
  Bell,
  GitBranch,
  Search,
  ScanText,
  TrendingUp,
  FileText,
  Layers,
  RefreshCw,
  AlertTriangle,
  MessageSquare,
  Database,
  Boxes,
  Target,
  LineChart,
  Handshake,
  KeyRound,
  BrainCircuit,
  ClipboardList,
  Warehouse,
  Tag,
  Code2,
  Wrench,
  TrendingDown,
  Webhook,
  BookOpen,
  Terminal,
  type LucideIcon,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Content model                                                      */
/* ------------------------------------------------------------------ */

export type FeatureCategory = "Suites" | "Core modules" | "AI & control"

export type IconItem = { icon: LucideIcon; title: string; body: string }

export type FeatureContent = {
  slug: string
  name: string
  /** Short label used in nav + cards */
  menuLabel: string
  category: FeatureCategory
  icon: LucideIcon
  /** One-line summary for nav dropdowns and overview cards */
  summary: string
  eyebrow: string
  hero: {
    titleLead: string
    titleHighlight: string
    subtitle: string
  }
  metrics: { value: string; label: string }[]
  problem: {
    heading: string
    body: string
    pains: IconItem[]
  }
  solution: {
    heading: string
    body: string
    highlights: string[]
  }
  benefits: IconItem[]
  workflow: { title: string; body: string }[]
  useCases: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
  related: string[]
  seo: { title: string; description: string; keywords?: string }
}

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */

export const features: FeatureContent[] = [
  /* ============================ SUITES ============================ */
  {
    slug: "ai-procurement",
    name: "AI Procurement",
    menuLabel: "AI Procurement",
    category: "Suites",
    icon: BrainCircuit,
    summary: "AI woven through every step — from request to payment — not bolted on as an add-on.",
    eyebrow: "AI procurement",
    hero: {
      titleLead: "Procurement that runs itself,",
      titleHighlight: "with AI at every step.",
      subtitle:
        "RiditStack embeds AI across the entire lifecycle — reading documents, routing approvals, matching invoices, and surfacing savings. Not a chatbot bolted onto old software, but intelligence built into the record every transaction runs on.",
    },
    metrics: [
      { value: "Every step", label: "touched by intelligence" },
      { value: "80%", label: "less manual work" },
      { value: "Built-in", label: "not bolted on" },
    ],
    problem: {
      heading: "AI that's a demo, not a workflow",
      body: "Every vendor claims AI now, but most of it is a chatbot in the corner or a feature you have to trigger by hand. The busywork — reading invoices, routing requests, catching duplicates — still lands on people, because the intelligence was never wired into the actual process.",
      pains: [
        { icon: Search, title: "Bolt-on AI", body: "The model sits beside the workflow instead of inside it, so the manual work remains." },
        { icon: Database, title: "Trapped in silos", body: "AI can't see the full record, so its suggestions stay shallow and generic." },
        { icon: Clock, title: "Still triggered by hand", body: "Teams invoke AI feature by feature instead of it simply running the process." },
      ],
    },
    solution: {
      heading: "Intelligence built into the record",
      body: "RiditStack applies AI where the work actually happens. Document AI reads every invoice and contract, models route requests and approvals by policy, matching runs touchlessly, and the copilot answers questions grounded in your data. Because it all shares one record, the AI has full context — and the process largely runs itself.",
      highlights: [
        "Document AI that reads any invoice or contract",
        "Policy-aware routing and approvals",
        "Touchless 3-way matching with exception handling",
        "A copilot grounded in your live procurement data",
      ],
    },
    benefits: [
      { icon: ScanText, title: "Reads your documents", body: "Extracts data from invoices, contracts, and quotes automatically — no templates." },
      { icon: GitBranch, title: "Routes intelligently", body: "Sends every request and approval down the right path by policy, on its own." },
      { icon: CheckCheck, title: "Matches touchlessly", body: "Clears clean invoices with automatic 3-way matching and flags only exceptions." },
      { icon: Sparkles, title: "Finds the savings", body: "Continuously surfaces consolidation, off-contract spend, and anomalies to act on." },
      { icon: ShieldCheck, title: "Catches risk early", body: "Screens documents and suppliers for duplicates, fraud, and compliance gaps." },
      { icon: MessageSquare, title: "Answers anything", body: "Ask procurement questions in plain language and get sourced, trustworthy answers." },
    ],
    workflow: [
      { title: "Capture", body: "AI ingests requests, documents, and data from across your procurement flow." },
      { title: "Understand", body: "Models read, classify, and enrich each item against your live record." },
      { title: "Act", body: "Routing, matching, and recommendations happen automatically within policy." },
      { title: "Improve", body: "The system learns from your decisions, getting sharper with every cycle." },
    ],
    useCases: [
      { title: "Procurement teams", body: "Offload the repetitive reading, routing, and matching to focus on strategy." },
      { title: "Finance leaders", body: "Get AI-surfaced savings and risk without commissioning a data project." },
      { title: "Lean operations", body: "Scale procurement volume without scaling procurement headcount." },
    ],
    faqs: [
      { q: "Is this just a chatbot?", a: "No. The copilot is one part of it. AI is embedded across the whole lifecycle — document extraction, approval routing, invoice matching, savings and risk detection — so intelligence runs the process, not just a chat window." },
      { q: "Will our data train external models?", a: "No. Your data stays private to your workspace and is never used to train shared models. The AI operates on your data under your security and permission controls." },
      { q: "How accurate is it?", a: "Document extraction exceeds 99% on clean documents, and every AI action is traceable to its source data with confidence scoring, so you can trust and verify results." },
      { q: "Do we need a data science team?", a: "No. The intelligence is built in and works out of the box. There are no models to train or pipelines to maintain — it runs on your live procurement data automatically." },
    ],
    related: ["ai-copilot", "document-intelligence", "invoice-automation", "analytics"],
    seo: {
      title: "AI Procurement Software | RiditStack",
      description: "AI woven through every step of procurement — document reading, approval routing, touchless matching, and savings detection — built into one record, not bolted on. Meet RiditStack.",
      keywords: "ai procurement, ai procurement software, autonomous procurement, ai spend management, intelligent procurement platform",
    },
  },

  {
    slug: "procure-to-pay",
    name: "Procure-to-Pay",
    menuLabel: "Procure-to-Pay",
    category: "Suites",
    icon: Workflow,
    summary: "One connected flow from request to payment — no re-keying, no blind spots.",
    eyebrow: "Procure-to-Pay suite",
    hero: {
      titleLead: "Every purchase, from first request to final payment, on",
      titleHighlight: "one intelligent flow.",
      subtitle:
        "RiditStack unifies intake, buying, receiving, and AP into a single record. Data is entered once and follows the transaction end to end — so finance closes faster and nothing falls between systems.",
    },
    metrics: [
      { value: "73%", label: "faster cycle time, request to PO" },
      { value: "3-way", label: "matching on every invoice" },
      { value: "1", label: "record from intake to payment" },
    ],
    problem: {
      heading: "Procurement breaks at the handoffs",
      body: "Most teams don't have a procurement problem — they have a handoff problem. A request starts in a spreadsheet, becomes an email to finance, turns into a PO in the ERP, then a PDF invoice in an inbox. Every jump is a chance to lose context, double-key data, or approve something that never should have shipped.",
      pains: [
        {
          icon: Layers,
          title: "Disconnected tools",
          body: "Intake, purchasing, and AP live in separate systems that never agree on the numbers.",
        },
        {
          icon: Clock,
          title: "Slow, opaque cycles",
          body: "Nobody can say where a request is or who's sitting on it — so buying stalls for weeks.",
        },
        {
          icon: AlertTriangle,
          title: "Leakage and errors",
          body: "Maverick spend and duplicate invoices slip through because no one sees the whole trail.",
        },
      ],
    },
    solution: {
      heading: "A single system of record for spend",
      body: "RiditStack connects the entire procure-to-pay lifecycle on one data model. A request captured at intake becomes the PO, the receipt, and the matched invoice — automatically. Approvers see full context, AP matches touchlessly, and finance gets a live, auditable trail from the first ask to the cleared payment.",
      highlights: [
        "Guided intake that routes itself to the right approver",
        "Budgets checked at the moment of commitment, not after",
        "Touchless 3-way matching with AI exception handling",
        "A complete, immutable audit trail on every transaction",
      ],
    },
    benefits: [
      { icon: Clock, title: "Close the loop in days", body: "Compress request-to-PO from weeks to hours with policy-aware automation at every step." },
      { icon: Eye, title: "See spend as it happens", body: "Live visibility into committed and actual spend across every team, entity, and category." },
      { icon: ShieldCheck, title: "Control without friction", body: "Policy is enforced automatically, so people move fast and finance stays in control." },
      { icon: RefreshCw, title: "Enter data once", body: "Information flows forward through the lifecycle — no re-keying between tools." },
      { icon: Gauge, title: "Cut processing cost", body: "Automate the manual matching and chasing that quietly consumes your AP team's week." },
      { icon: FileText, title: "Audit-ready by default", body: "Every approval, edit, and match is logged, so audits take hours instead of weeks." },
    ],
    workflow: [
      { title: "Request", body: "Anyone raises a guided intake request in plain language; RiditStack captures the details finance actually needs." },
      { title: "Approve", body: "The request routes automatically by amount, category, and budget, with one-click approvals in Slack or email." },
      { title: "Buy & receive", body: "An approved request becomes a PO instantly; receipts are logged against it as goods arrive." },
      { title: "Match & pay", body: "AI matches invoice, PO, and receipt, flags only true exceptions, and hands finance a clean payment run." },
    ],
    useCases: [
      { title: "Multi-entity finance teams", body: "Standardize buying across subsidiaries while keeping entity-level budgets and approvals distinct." },
      { title: "High-growth operations", body: "Onboard new departments to a consistent process without adding procurement headcount." },
      { title: "Audit and compliance", body: "Give auditors a self-serve, tamper-evident trail for every dollar committed and paid." },
    ],
    faqs: [
      { q: "How is this different from buying separate intake and AP tools?", a: "Point tools each own a slice of the process and hand off with integrations that drift. RiditStack keeps intake, purchasing, receiving, and AP on one record, so the data never disagrees and there's nothing to reconcile between systems." },
      { q: "Do we have to replace our ERP?", a: "No. RiditStack sits in front of your ERP as the system of engagement for procurement, syncing POs, receipts, and invoices bidirectionally. Your ledger stays the source of truth for accounting." },
      { q: "How long does implementation take?", a: "Most teams are live on their first workflow in under two weeks. We start with one high-volume category, prove the flow, then expand — you see value before the rollout is finished." },
      { q: "Can we keep our existing approval rules?", a: "Yes. Approval policies are configured without code and can mirror your current thresholds, delegations, and segregation-of-duties rules on day one." },
    ],
    related: ["intake", "purchase-orders", "invoice-automation", "analytics"],
    seo: {
      title: "Procure-to-Pay Software | RiditStack",
      description: "Unify intake, purchasing, receiving, and AP on one intelligent record. RiditStack's procure-to-pay platform cuts cycle time, stops leakage, and closes the loop from request to payment.",
      keywords: "procure to pay, p2p software, procurement automation, ap automation, purchase to pay platform",
    },
  },

  {
    slug: "source-to-pay",
    name: "Source-to-Pay",
    menuLabel: "Source-to-Pay",
    category: "Suites",
    icon: Route,
    summary: "Strategic sourcing, contracts, and payment — connected into one closed loop.",
    eyebrow: "Source-to-Pay suite",
    hero: {
      titleLead: "Turn sourcing decisions into savings you can",
      titleHighlight: "actually see and keep.",
      subtitle:
        "RiditStack extends procure-to-pay upstream into sourcing and contracts, so the rates you negotiate become the prices you pay. Run events, award suppliers, and enforce the contract automatically — with the numbers to prove the impact.",
    },
    metrics: [
      { value: "12%", label: "average sourced savings identified" },
      { value: "100%", label: "of awards enforced at buying" },
      { value: "1", label: "loop from sourcing to payment" },
    ],
    problem: {
      heading: "Negotiated savings quietly leak away",
      body: "Sourcing teams fight hard for better rates, then watch the value evaporate. Contracts sit in a shared drive, buyers keep using the old catalog, and no one notices the negotiated price never made it into a single PO. The savings looked real in the model and vanished in practice.",
      pains: [
        {
          icon: FileSignature,
          title: "Contracts go dark",
          body: "Signed terms live in folders no buyer ever opens, so agreed pricing never gets applied.",
        },
        {
          icon: Search,
          title: "Sourcing runs blind",
          body: "Events happen in spreadsheets and email, with no clean data on who bid what.",
        },
        {
          icon: TrendingUp,
          title: "Value can't be proven",
          body: "Finance discounts 'sourcing savings' because there's no line back to realized spend.",
        },
      ],
    },
    solution: {
      heading: "Close the loop from strategy to spend",
      body: "RiditStack connects sourcing events and contracts directly to the buying flow. Award a supplier and their pricing becomes the catalog buyers see. Contract terms become guardrails the platform enforces at the point of purchase. Every PO traces back to the deal that set its price — so savings are realized, not just projected.",
      highlights: [
        "Run RFQs, RFPs, and reverse auctions on structured data",
        "Contracts that enforce their own pricing and terms",
        "Awarded rates flow straight into guided buying",
        "Realized-savings reporting tied to real transactions",
      ],
    },
    benefits: [
      { icon: Target, title: "Realize the savings", body: "Negotiated rates become the only rates buyers can pick, so value lands on the P&L." },
      { icon: Handshake, title: "Source with structure", body: "Compare bids on apples-to-apples data instead of a tangle of email attachments." },
      { icon: FileSignature, title: "Contracts that work", body: "Terms, renewals, and pricing live where buying happens — not in a forgotten folder." },
      { icon: LineChart, title: "Prove the impact", body: "Tie every award to realized spend and show finance defensible, traceable savings." },
      { icon: ShieldCheck, title: "Reduce supplier risk", body: "Score and monitor suppliers through sourcing so risk is a decision input, not a surprise." },
      { icon: Eye, title: "One version of the truth", body: "Sourcing, contracts, and purchasing share one dataset, so decisions rest on the same facts." },
    ],
    workflow: [
      { title: "Source", body: "Launch an RFQ, RFP, or reverse auction; suppliers respond on structured line items you can compare instantly." },
      { title: "Award", body: "Score bids on price, risk, and terms, then award with a full record of why the winner won." },
      { title: "Contract", body: "Turn the award into a contract whose pricing and terms the platform enforces automatically." },
      { title: "Buy & realize", body: "Awarded rates flow into guided buying, and realized-savings reporting proves the value landed." },
    ],
    useCases: [
      { title: "Strategic sourcing teams", body: "Run competitive events on clean data and defend awards with a complete decision trail." },
      { title: "Category managers", body: "Keep negotiated catalogs current so buyers always transact on the latest agreed pricing." },
      { title: "Finance leadership", body: "Report realized savings tied to actual spend instead of unverifiable projections." },
    ],
    faqs: [
      { q: "What's the difference between source-to-pay and procure-to-pay?", a: "Procure-to-pay covers request through payment. Source-to-pay adds the strategic front end — sourcing events, supplier selection, and contracts — and connects it to buying so the value you negotiate is enforced downstream." },
      { q: "Can we run reverse auctions?", a: "Yes. RiditStack supports RFQs, RFPs, and live reverse auctions on structured line items, with side-by-side bid comparison and a complete award record." },
      { q: "How do contract terms get enforced?", a: "When an award becomes a contract, its pricing and terms are attached to the supplier and category. Buyers transact against those rates automatically, and off-contract attempts are flagged for review." },
      { q: "How do you measure realized savings?", a: "Because awards connect to the POs that use them, RiditStack compares awarded rates to actual spend and reports the delta as realized savings — auditable back to individual transactions." },
    ],
    related: ["contracts", "suppliers", "analytics", "procure-to-pay"],
    seo: {
      title: "Source-to-Pay Software | RiditStack",
      description: "Connect strategic sourcing, contracts, and payment in one loop. Run RFQs and reverse auctions, enforce negotiated pricing at buying, and prove realized savings with RiditStack.",
      keywords: "source to pay, s2p software, strategic sourcing, reverse auction, contract management procurement",
    },
  },

  /* ========================= CORE MODULES ========================= */
  {
    slug: "intake",
    name: "Intake Management",
    menuLabel: "Intake Management",
    category: "Core modules",
    icon: Inbox,
    summary: "One front door for every request, routed to the right approver automatically.",
    eyebrow: "Intake management",
    hero: {
      titleLead: "Give every purchase request",
      titleHighlight: "one intelligent front door.",
      subtitle:
        "Stop chasing requests across email, Slack, and spreadsheets. RiditStack captures every ask through a guided intake that gathers the right details up front and routes itself to the right approver — no forms nobody understands, no requests lost in a thread.",
    },
    metrics: [
      { value: "90%", label: "of requests complete on first submit" },
      { value: "0", label: "email threads to track a request" },
      { value: "4x", label: "faster approvals with auto-routing" },
    ],
    problem: {
      heading: "Requests arrive from everywhere and nowhere",
      body: "When there's no single way to ask for something, people invent their own. A Slack DM here, a forwarded quote there, a ticket in the wrong queue. Procurement spends its day playing detective — figuring out what's needed, who should approve, and whether budget even exists.",
      pains: [
        { icon: MessageSquare, title: "Scattered channels", body: "Requests land in inboxes and chats with no structure and no paper trail." },
        { icon: FileText, title: "Missing information", body: "Half-filled asks bounce back and forth for days before they're even actionable." },
        { icon: GitBranch, title: "Guesswork routing", body: "Nobody's sure who approves what, so requests stall on the wrong desk." },
      ],
    },
    solution: {
      heading: "Guided intake that thinks for the requester",
      body: "RiditStack gives everyone a single, friendly place to ask. The intake form adapts to what's being requested, asks only relevant questions, and collects the context finance needs the first time. The moment it's submitted, policy-aware routing sends it to the right approver with full context attached.",
      highlights: [
        "Dynamic forms that adapt to category and amount",
        "Plain-language requests, structured behind the scenes",
        "Automatic routing by policy, budget, and department",
        "Real-time status every requester can see for themselves",
      ],
    },
    benefits: [
      { icon: Inbox, title: "One place to ask", body: "Every request enters through the same guided door, no matter who's asking." },
      { icon: Sparkles, title: "Complete on first try", body: "Adaptive forms capture the right details up front, so requests don't bounce back." },
      { icon: GitBranch, title: "Routes itself", body: "Policy-aware logic sends each request to the correct approver automatically." },
      { icon: Eye, title: "Always visible", body: "Requesters track their own status live and stop pinging procurement for updates." },
      { icon: Clock, title: "Faster to yes", body: "Full context up front means approvers decide in seconds, not days." },
      { icon: ShieldCheck, title: "Compliant by design", body: "Every request follows policy from the first click, with a full audit trail." },
    ],
    workflow: [
      { title: "Ask", body: "The requester describes what they need; the form adapts and gathers only what's relevant." },
      { title: "Enrich", body: "RiditStack attaches budget, category, and supplier context automatically." },
      { title: "Route", body: "The request flows to the right approver by policy — no manual triage." },
      { title: "Track", body: "Everyone sees live status until the request converts to a PO." },
    ],
    useCases: [
      { title: "Employee purchasing", body: "Let any employee request software, services, or supplies without learning procurement." },
      { title: "Shared services", body: "Give IT, facilities, and marketing one consistent intake instead of separate inboxes." },
      { title: "Finance gatekeeping", body: "Ensure every request is budget-checked and policy-routed before it becomes spend." },
    ],
    faqs: [
      { q: "Do requesters need training?", a: "No. Intake is designed for people who don't know procurement. They describe what they need in plain language and the form handles the structure, questions, and routing behind the scenes." },
      { q: "Can we customize the intake forms?", a: "Yes. Forms are configured without code and adapt dynamically to category, amount, and department, so requesters only see fields relevant to their request." },
      { q: "Does intake connect to approvals and POs?", a: "Directly. An approved intake request becomes a purchase order on the same record — no re-entry — and carries its full context forward." },
      { q: "Can employees request from Slack?", a: "Yes. Requests can start in Slack or email and land in the same structured intake, so people use the tools they already live in." },
    ],
    related: ["approvals", "purchase-orders", "budgeting", "ai-copilot"],
    seo: {
      title: "Procurement Intake Management Software | RiditStack",
      description: "Give every purchase request one guided front door. RiditStack's intake management captures the right details, routes by policy automatically, and keeps requesters informed in real time.",
      keywords: "procurement intake, intake management, purchase request software, guided buying",
    },
  },

  {
    slug: "purchase-requisitions",
    name: "Purchase Requisition",
    menuLabel: "Purchase Requisition",
    category: "Core modules",
    icon: ClipboardList,
    summary: "Structured requisitions with line items and budget checks — approved before any PO.",
    eyebrow: "Purchase requisitions",
    hero: {
      titleLead: "Turn every 'we need this' into a",
      titleHighlight: "clean, approved requisition.",
      subtitle:
        "Capture what people need as structured requisitions — line items, quantities, cost centers, and budget — then route them for approval before a single PO is raised. RiditStack makes the requisition the disciplined first step, not an afterthought.",
    },
    metrics: [
      { value: "Line-level", label: "requisition detail" },
      { value: "Budget-checked", label: "before approval" },
      { value: "100%", label: "PR-to-PO traceability" },
    ],
    problem: {
      heading: "Requisitions that aren't really requisitions",
      body: "In many companies the 'requisition' is an email or a verbal ask, and the PO is where structure first appears — too late to control anything. Without a disciplined PR step, budget isn't checked up front, line items are vague, and there's no clean record of what was requested versus what was ordered.",
      pains: [
        { icon: MessageSquare, title: "Informal asks", body: "Requests arrive as email and chat, with no structure to approve or track." },
        { icon: Wallet, title: "No budget check", body: "Spend isn't validated against budget until it's already a purchase order." },
        { icon: Search, title: "No traceability", body: "Nobody can tie an order back to what was actually requested and approved." },
      ],
    },
    solution: {
      heading: "A disciplined first step for every purchase",
      body: "RiditStack captures requisitions with full line-item detail, cost-center coding, and budget validation up front. Each PR routes through the right approvals and, once approved, converts straight into a purchase order — so every PO traces back to an approved, budget-checked requisition.",
      highlights: [
        "Line-item requisitions with cost-center coding",
        "Budget validated before the PR is approved",
        "Policy-based approval routing on every request",
        "One-click conversion from approved PR to PO",
      ],
    },
    benefits: [
      { icon: ClipboardList, title: "Structured detail", body: "Line items, quantities, and coding captured cleanly on every requisition." },
      { icon: Wallet, title: "Budget at source", body: "Requisitions are checked against live budget before they can be approved." },
      { icon: CheckCheck, title: "Clean approvals", body: "Each PR routes through the right approvers by amount, category, and budget." },
      { icon: Route, title: "Full traceability", body: "Every purchase order links back to the approved requisition that spawned it." },
      { icon: Clock, title: "Faster to PO", body: "Approved requisitions convert to purchase orders in one click, with no re-keying." },
      { icon: ShieldCheck, title: "Fewer errors", body: "Structured, validated requests mean fewer disputes and rejected orders downstream." },
    ],
    workflow: [
      { title: "Raise", body: "A requester creates a line-item requisition with quantities and cost centers." },
      { title: "Check", body: "RiditStack validates the request against the relevant live budget." },
      { title: "Approve", body: "The PR routes through policy-based approvals with full context attached." },
      { title: "Convert", body: "Once approved, the requisition becomes a purchase order in one click." },
    ],
    useCases: [
      { title: "Requesting teams", body: "Give staff a structured way to request goods and services, not an email." },
      { title: "Finance controls", body: "Ensure every purchase is budget-checked and approved before it's committed." },
      { title: "Audit & compliance", body: "Maintain a clean, traceable line from requisition to order to payment." },
    ],
    faqs: [
      { q: "How is a requisition different from intake?", a: "Intake is the friendly front door — anyone describes what they need in plain language. A purchase requisition is the structured, line-item document that results: coded, budget-checked, and formally approved before it becomes a PO. Intake feeds requisitions." },
      { q: "Can requisitions be budget-checked automatically?", a: "Yes. Each requisition validates against the relevant live budget before approval, so overspend is caught at the request stage rather than after a PO is raised." },
      { q: "Do approved requisitions become POs automatically?", a: "An approved requisition converts to a purchase order in one click, carrying all its line items and coding forward with no re-entry." },
      { q: "Can we require requisitions for certain spend?", a: "Yes. You can mandate a requisition above thresholds or for specific categories, and RiditStack enforces the rule automatically." },
    ],
    related: ["intake", "purchase-orders", "approvals", "budgeting"],
    seo: {
      title: "Purchase Requisition Software | RiditStack",
      description: "Capture structured, line-item purchase requisitions with up-front budget checks and policy-based approvals — then convert to POs in one click. Full PR-to-PO traceability with RiditStack.",
      keywords: "purchase requisition software, requisition management, purchase request approval, pr to po",
    },
  },

  {
    slug: "purchase-orders",
    name: "Purchase Orders",
    menuLabel: "Purchase Orders",
    category: "Core modules",
    icon: ShoppingCart,
    summary: "Create, track, and reconcile POs against budgets the moment they're raised.",
    eyebrow: "Purchasing & POs",
    hero: {
      titleLead: "Purchase orders that check the budget",
      titleHighlight: "before the money's gone.",
      subtitle:
        "Turn approved requests into purchase orders in one click, track them against live budgets, and reconcile receipts automatically. RiditStack gives you real-time control over committed spend — not a monthly surprise after the invoices arrive.",
    },
    metrics: [
      { value: "1-click", label: "request to PO conversion" },
      { value: "Real-time", label: "budget checks at commitment" },
      { value: "98%", label: "auto receipt-match accuracy" },
    ],
    problem: {
      heading: "Commitments you only discover at month-end",
      body: "In too many companies, a PO is a formality typed up after the fact — or skipped entirely. Spend gets committed with a handshake, budgets are checked in hindsight, and receiving is a pile of packing slips no one matches. By the time finance sees the number, the money's already spent.",
      pains: [
        { icon: AlertTriangle, title: "Off-PO buying", body: "Purchases happen without a PO, so commitments are invisible until the invoice lands." },
        { icon: Wallet, title: "Budgets checked too late", body: "Overspend is caught after commitment, when nothing can be done about it." },
        { icon: Boxes, title: "Receiving black hole", body: "Goods arrive with no structured receipt, so matching later becomes a manual hunt." },
      ],
    },
    solution: {
      heading: "Control commitments in real time",
      body: "RiditStack turns every approved request into a structured PO that checks the budget at the moment of commitment. As goods and services arrive, receipts are logged against the PO automatically. You always know what's committed, what's received, and what's left to spend — before the invoice ever shows up.",
      highlights: [
        "One-click conversion from approved request to PO",
        "Live budget checks at the point of commitment",
        "Automatic receipt logging and reconciliation",
        "Full PO lifecycle status, from open to closed",
      ],
    },
    benefits: [
      { icon: ShoppingCart, title: "Instant PO creation", body: "Approved requests become clean, structured POs automatically — no re-typing." },
      { icon: Wallet, title: "Budget at commitment", body: "Spend is checked against live budgets before it's committed, not after." },
      { icon: Eye, title: "Live PO tracking", body: "See the status of every PO — open, received, matched, closed — at a glance." },
      { icon: RefreshCw, title: "Auto reconciliation", body: "Receipts match to POs automatically, ready for touchless invoice matching." },
      { icon: Gauge, title: "Fewer errors", body: "Structured data means fewer disputes, duplicate orders, and mismatched receipts." },
      { icon: ShieldCheck, title: "Enforced control", body: "Every PO respects approval and budget policy, with a complete audit trail." },
    ],
    workflow: [
      { title: "Convert", body: "An approved request becomes a purchase order in one click, with all context intact." },
      { title: "Commit", body: "The PO checks against live budget and reserves the committed amount instantly." },
      { title: "Receive", body: "Goods and services are logged against the PO as they arrive." },
      { title: "Reconcile", body: "Receipts and POs reconcile automatically, ready for 3-way matching in AP." },
    ],
    useCases: [
      { title: "Operations teams", body: "Raise and track POs for materials and services with real-time delivery status." },
      { title: "Finance controllers", body: "Keep committed spend visible and within budget before invoices arrive." },
      { title: "Multi-site buying", body: "Standardize PO creation and receiving across locations and business units." },
    ],
    faqs: [
      { q: "Can we require a PO for certain spend?", a: "Yes. You can set policies that require a purchase order above thresholds or for specific categories, and RiditStack enforces them automatically at intake." },
      { q: "How does budget checking work?", a: "When a PO commits spend, RiditStack checks it against the relevant live budget and reserves the amount, so remaining budget always reflects real commitments." },
      { q: "Does receiving have to be manual?", a: "No. Receipts can be logged in the app, via mobile, or synced from your ERP or warehouse system, then matched to the PO automatically." },
      { q: "Will POs sync to our ERP?", a: "Yes. Purchase orders, receipts, and closures sync bidirectionally with major ERPs so your ledger and procurement stay aligned." },
    ],
    related: ["purchase-requisitions", "invoice-automation", "inventory", "budgeting"],
    seo: {
      title: "Purchase Order Software | RiditStack",
      description: "Create purchase orders in one click, check budgets in real time, and reconcile receipts automatically. RiditStack gives finance live control over committed spend.",
      keywords: "purchase order software, po management, purchase order automation, budget control procurement",
    },
  },

  {
    slug: "approvals",
    name: "Approval Workflows",
    menuLabel: "Approval Workflows",
    category: "Core modules",
    icon: CheckCheck,
    summary: "No-code approval flows that route by policy and approve from anywhere.",
    eyebrow: "Approval workflows",
    hero: {
      titleLead: "Approvals that move at the speed of",
      titleHighlight: "your business, not your inbox.",
      subtitle:
        "Design approval workflows without code, route them by amount, category, and budget, and let approvers decide in one click from Slack, email, or mobile. Fast when it should be, strict when it must be — always with a clean audit trail.",
    },
    metrics: [
      { value: "No-code", label: "workflow builder" },
      { value: "1-click", label: "approvals from Slack or email" },
      { value: "100%", label: "of decisions logged for audit" },
    ],
    problem: {
      heading: "The approval is where everything stalls",
      body: "Every procurement process eventually waits on a human to say yes. When that yes lives in an overflowing inbox, requests rot for days. When the rules only exist in someone's head, the wrong things get approved. Speed and control feel like a trade-off — and both suffer.",
      pains: [
        { icon: Clock, title: "Bottlenecked approvers", body: "Decisions pile up in inboxes and requests wait on a single busy person." },
        { icon: GitBranch, title: "Rules in someone's head", body: "Undocumented approval logic means inconsistent, un-auditable decisions." },
        { icon: AlertTriangle, title: "No delegation", body: "When an approver is out, everything freezes until they're back." },
      ],
    },
    solution: {
      heading: "Policy as a workflow, not a memory",
      body: "RiditStack lets you build approval workflows visually — thresholds, parallel steps, conditional branches, delegations, and segregation-of-duties rules — with no code. Approvers act in one click wherever they work, escalations prevent stalls, and every decision is captured for audit. Control becomes automatic instead of manual.",
      highlights: [
        "Visual, no-code multi-step workflow builder",
        "Conditional routing by amount, category, and budget",
        "One-click approvals in Slack, email, and mobile",
        "Auto-escalation, delegation, and reminder logic",
      ],
    },
    benefits: [
      { icon: Workflow, title: "Build without code", body: "Design and change approval flows in a visual builder — no IT ticket required." },
      { icon: GitBranch, title: "Route intelligently", body: "Branch by amount, category, budget, or department, in parallel or in series." },
      { icon: Zap, title: "Approve anywhere", body: "Decisions happen in one click from Slack, email, or the mobile app." },
      { icon: Bell, title: "Never stall", body: "Reminders and auto-escalation keep requests moving when approvers are slow or away." },
      { icon: ShieldCheck, title: "Enforce controls", body: "Segregation-of-duties and delegation rules are enforced automatically." },
      { icon: FileText, title: "Audit in minutes", body: "Every approval, comment, and escalation is logged and instantly reviewable." },
    ],
    workflow: [
      { title: "Design", body: "Drag together steps, conditions, and thresholds in a visual builder — no code." },
      { title: "Route", body: "Each request flows through the right path based on its amount, category, and budget." },
      { title: "Decide", body: "Approvers act in one click from wherever they already work." },
      { title: "Escalate", body: "Reminders and escalations kick in automatically so nothing sits idle." },
    ],
    useCases: [
      { title: "Finance controls", body: "Encode spend thresholds and segregation-of-duties rules that enforce themselves." },
      { title: "Distributed teams", body: "Approve across time zones with delegation and mobile decisions." },
      { title: "Regulated industries", body: "Prove every decision followed policy with a complete, exportable audit trail." },
    ],
    faqs: [
      { q: "Can non-technical staff build workflows?", a: "Yes. The builder is fully visual and no-code. Finance and procurement admins create and adjust approval flows themselves, without engineering support." },
      { q: "What happens when an approver is on leave?", a: "Delegation rules reassign their approvals automatically, and escalation logic can reroute requests that wait too long, so nothing freezes." },
      { q: "Can we approve from Slack?", a: "Yes. Approvers get a message with full context and approve or reject in one click from Slack, email, or the mobile app." },
      { q: "Do you support segregation of duties?", a: "You can enforce that the requester, approver, and payer are different people, and layer additional conditional controls to satisfy audit and compliance requirements." },
    ],
    related: ["intake", "purchase-orders", "workflow-automation", "ai-copilot"],
    seo: {
      title: "Procurement Approval Workflow Software | RiditStack",
      description: "Build no-code approval workflows that route by policy and approve in one click from Slack, email, or mobile. RiditStack makes control automatic and audits effortless.",
      keywords: "approval workflow software, procurement approvals, no-code workflow, spend approval automation",
    },
  },

  {
    slug: "suppliers",
    name: "Supplier Management",
    menuLabel: "Supplier Management",
    category: "Core modules",
    icon: Users,
    summary: "Every vendor, contract, and risk signal on one living record.",
    eyebrow: "Supplier management",
    hero: {
      titleLead: "Every supplier relationship,",
      titleHighlight: "on a single living record.",
      subtitle:
        "Onboard vendors in minutes, keep contracts and performance in one place, and monitor risk continuously. RiditStack turns a scattered vendor list into a managed portfolio — so renewals never surprise you and risk never hides.",
    },
    metrics: [
      { value: "5 min", label: "self-serve supplier onboarding" },
      { value: "360°", label: "view of every vendor" },
      { value: "24/7", label: "risk and compliance monitoring" },
    ],
    problem: {
      heading: "Your vendor data is everywhere but together",
      body: "Supplier information scatters across spreadsheets, inboxes, and the memory of whoever onboarded them. Contracts auto-renew unnoticed, insurance certificates expire silently, and performance is a gut feeling. When a supplier becomes a risk, you find out from the disruption — not the data.",
      pains: [
        { icon: Database, title: "Fragmented records", body: "Vendor details live in a dozen places and none of them agree." },
        { icon: Clock, title: "Surprise renewals", body: "Contracts renew or lapse before anyone notices there was a decision to make." },
        { icon: AlertTriangle, title: "Invisible risk", body: "Compliance gaps and financial distress surface only when they cause damage." },
      ],
    },
    solution: {
      heading: "A managed portfolio, not a contact list",
      body: "RiditStack gives every supplier one record that holds onboarding, contracts, documents, performance, and risk. Vendors onboard themselves through a guided flow, certificates and renewals are tracked with proactive alerts, and continuous monitoring surfaces risk before it hits your operations.",
      highlights: [
        "Self-serve, compliant supplier onboarding",
        "Centralized contracts, documents, and certificates",
        "Performance scoring across quality and delivery",
        "Continuous financial and compliance risk monitoring",
      ],
    },
    benefits: [
      { icon: Users, title: "One vendor record", body: "Onboarding, contracts, contacts, and history unified in a single 360° profile." },
      { icon: Sparkles, title: "Self-serve onboarding", body: "Suppliers submit their own details and documents through a guided, compliant flow." },
      { icon: Bell, title: "No surprise renewals", body: "Proactive alerts on contract renewals, expirations, and certificate lapses." },
      { icon: BarChart3, title: "Performance you can see", body: "Score suppliers on delivery, quality, and responsiveness with real data." },
      { icon: ShieldCheck, title: "Risk in the open", body: "Continuous monitoring flags financial, compliance, and sanctions risk early." },
      { icon: Handshake, title: "Stronger relationships", body: "A shared record means fewer disputes and more strategic conversations." },
    ],
    workflow: [
      { title: "Onboard", body: "Invite a supplier to self-register; they submit details and documents through a guided flow." },
      { title: "Centralize", body: "Contracts, certificates, and contacts land on one record with expiry tracking." },
      { title: "Monitor", body: "Continuous risk and compliance checks run in the background and alert on change." },
      { title: "Optimize", body: "Performance scores inform renewals, awards, and consolidation decisions." },
    ],
    useCases: [
      { title: "Vendor onboarding", body: "Replace email-and-spreadsheet onboarding with a compliant, self-serve flow." },
      { title: "Risk & compliance", body: "Keep insurance, certifications, and sanctions screening current automatically." },
      { title: "Supplier performance", body: "Consolidate to your best vendors using objective, tracked performance data." },
    ],
    faqs: [
      { q: "How do suppliers get onboarded?", a: "You send an invite and the supplier self-registers through a guided flow, submitting their details, banking, and compliance documents — which route for internal review before approval." },
      { q: "What risk signals do you monitor?", a: "RiditStack tracks financial health, compliance and certification status, sanctions and watchlists, and document expirations, alerting you proactively when anything changes." },
      { q: "Can we score supplier performance?", a: "Yes. Suppliers are scored on delivery, quality, and responsiveness using real transaction data, so renewal and award decisions rest on evidence, not opinion." },
      { q: "Does this connect to sourcing and contracts?", a: "Directly. Supplier records link to sourcing events and contracts, so awards, terms, and pricing all live against the same vendor profile." },
    ],
    related: ["vendor-portal", "contracts", "source-to-pay", "analytics"],
    seo: {
      title: "Supplier Management Software | RiditStack",
      description: "Onboard vendors in minutes and manage every contract, document, and risk signal on one record. RiditStack turns a scattered vendor list into a monitored, high-performing portfolio.",
      keywords: "supplier management software, vendor management, supplier onboarding, supplier risk management",
    },
  },

  {
    slug: "vendor-portal",
    name: "Vendor Portal",
    menuLabel: "Vendor Portal",
    category: "Core modules",
    icon: KeyRound,
    summary: "A self-serve portal where suppliers update details, submit invoices, and track payment.",
    eyebrow: "Vendor portal",
    hero: {
      titleLead: "Let suppliers help themselves —",
      titleHighlight: "and stop the status emails.",
      subtitle:
        "Give every vendor a secure portal to manage their profile, submit invoices, confirm POs, and check payment status. Fewer 'where's my payment?' emails, cleaner data, and a supplier experience that reflects how good your company is to work with.",
    },
    metrics: [
      { value: "70%", label: "fewer supplier status emails" },
      { value: "Self-serve", label: "invoice and PO management" },
      { value: "Real-time", label: "payment status for vendors" },
    ],
    problem: {
      heading: "Your AP team is a call center",
      body: "Suppliers can't see what you see, so they ask. 'Did you get my invoice?' 'When will I be paid?' 'Is the PO approved?' Every question is an email your team stops to answer, and every stale bank detail is a payment that goes wrong. The relationship runs on interruption.",
      pains: [
        { icon: MessageSquare, title: "Endless status chasing", body: "AP spends its day answering the same payment and invoice questions." },
        { icon: Database, title: "Stale supplier data", body: "Outdated bank and contact details cause failed payments and rework." },
        { icon: ReceiptText, title: "Messy invoice submission", body: "Invoices arrive as email PDFs in every format, ready to be mis-keyed." },
      ],
    },
    solution: {
      heading: "Turn suppliers into self-serve partners",
      body: "The RiditStack vendor portal gives suppliers a secure, branded space to keep their own data current, submit invoices in a structured way, confirm purchase orders, and track payment status in real time. Your data stays clean, your AP team stops fielding status calls, and suppliers feel looked after.",
      highlights: [
        "Suppliers maintain their own profile and banking",
        "Structured invoice submission, ready for auto-matching",
        "PO acknowledgment and delivery confirmation",
        "Real-time, self-serve payment status",
      ],
    },
    benefits: [
      { icon: KeyRound, title: "Secure self-service", body: "Each supplier gets a controlled, auditable space to manage their own information." },
      { icon: Database, title: "Always-current data", body: "Vendors keep their contacts and banking updated, cutting failed payments." },
      { icon: ReceiptText, title: "Clean invoices in", body: "Structured submission means invoices arrive ready for touchless matching." },
      { icon: Bell, title: "Fewer interruptions", body: "Real-time status answers the questions before suppliers have to ask." },
      { icon: Handshake, title: "Better relationships", body: "A professional experience signals you're an easy, reliable company to sell to." },
      { icon: ShieldCheck, title: "Controlled access", body: "Granular permissions and full audit logs keep supplier access safe." },
    ],
    workflow: [
      { title: "Invite", body: "Give a supplier secure access to their own branded portal in minutes." },
      { title: "Maintain", body: "They keep profile, contacts, and banking details current themselves." },
      { title: "Transact", body: "Suppliers confirm POs and submit structured invoices directly." },
      { title: "Track", body: "They check invoice and payment status live — no email required." },
    ],
    useCases: [
      { title: "AP teams", body: "Eliminate status-chasing and receive clean, structured invoices ready to match." },
      { title: "Supplier enablement", body: "Give strategic vendors a professional, self-serve experience at scale." },
      { title: "Data quality", body: "Keep master vendor data accurate by letting suppliers own their own details." },
    ],
    faqs: [
      { q: "Is the portal secure?", a: "Yes. Access is controlled with granular permissions and multi-factor authentication, and every change a supplier makes is logged for audit." },
      { q: "Can suppliers submit invoices directly?", a: "Yes. Suppliers submit invoices in a structured format through the portal, so they arrive clean and ready for automatic 3-way matching." },
      { q: "Will suppliers see their payment status?", a: "Suppliers can see the real-time status of their invoices and payments themselves, which dramatically reduces status inquiries to your AP team." },
      { q: "Does it keep vendor master data current?", a: "Because suppliers maintain their own contact and banking details, your vendor master stays accurate, reducing failed and misdirected payments." },
    ],
    related: ["suppliers", "invoice-automation", "contracts", "procure-to-pay"],
    seo: {
      title: "Supplier & Vendor Portal Software | RiditStack",
      description: "Give suppliers a secure self-serve portal to manage details, submit invoices, and track payment. RiditStack cuts AP status emails and keeps vendor data clean.",
      keywords: "vendor portal, supplier portal, self-service supplier, invoice submission portal",
    },
  },

  {
    slug: "invoice-automation",
    name: "Invoice Automation",
    menuLabel: "Invoice Automation",
    category: "Core modules",
    icon: ReceiptText,
    summary: "AI captures, codes, and 3-way-matches every invoice — flagging only real exceptions.",
    eyebrow: "AP & invoice automation",
    hero: {
      titleLead: "Invoices that",
      titleHighlight: "approve themselves.",
      subtitle:
        "RiditStack captures every invoice, extracts and codes it with AI, and runs a 3-way match against the PO and receipt automatically. Your team stops keying line items and chasing approvals — and steps in only for the exceptions that genuinely need judgment.",
    },
    metrics: [
      { value: "80%", label: "less manual AP effort" },
      { value: "1.4s", label: "average AI match time" },
      { value: "99.5%", label: "extraction accuracy on clean docs" },
    ],
    problem: {
      heading: "AP is drowning in manual matching",
      body: "Invoices arrive as PDFs, scans, and email bodies in a hundred formats. Someone keys the line items, hunts down the matching PO and receipt, checks the math, and routes it for approval. Multiply by thousands a month and AP becomes a data-entry factory — slow, expensive, and prone to duplicate and fraudulent payments.",
      pains: [
        { icon: ReceiptText, title: "Manual data entry", body: "Every invoice is re-typed by hand from a different format." },
        { icon: Search, title: "Match hunting", body: "AP manually locates the right PO and receipt for each invoice." },
        { icon: AlertTriangle, title: "Duplicates & fraud", body: "Without automated checks, duplicate and fraudulent invoices slip through." },
      ],
    },
    solution: {
      heading: "Touchless AP, powered by document AI",
      body: "RiditStack's document intelligence reads any invoice — PDF, scan, or email — and extracts every line item with high accuracy. It codes the invoice to the right GL and cost center, runs an automatic 3-way match against the PO and receipt, and detects duplicates and anomalies. Clean invoices flow straight to payment; only true exceptions reach a human.",
      highlights: [
        "AI extraction from any invoice format",
        "Automatic GL and cost-center coding",
        "Touchless 3-way matching against PO and receipt",
        "Duplicate and fraud detection on every invoice",
      ],
    },
    benefits: [
      { icon: ScanText, title: "Read any format", body: "AI extracts line-level data from PDFs, scans, and email invoices accurately." },
      { icon: CheckCheck, title: "Touchless matching", body: "Automatic 3-way match against PO and receipt clears clean invoices instantly." },
      { icon: Sparkles, title: "Auto-coding", body: "Invoices are coded to the right GL and cost center without manual lookup." },
      { icon: ShieldCheck, title: "Fraud defense", body: "Duplicate detection and anomaly scoring catch bad invoices before payment." },
      { icon: Clock, title: "Pay on time", body: "Faster processing means captured early-payment discounts and no late fees." },
      { icon: AlertTriangle, title: "Exceptions only", body: "Your team reviews just the invoices that truly need human judgment." },
    ],
    workflow: [
      { title: "Capture", body: "Invoices arrive by email, upload, or portal and are ingested automatically." },
      { title: "Extract", body: "Document AI reads every line item and codes it to the right accounts." },
      { title: "Match", body: "RiditStack runs a 3-way match against the PO and receipt in seconds." },
      { title: "Pay", body: "Clean invoices flow to payment; only exceptions route to a human." },
    ],
    useCases: [
      { title: "High-volume AP", body: "Process thousands of invoices a month without adding headcount." },
      { title: "Shared service centers", body: "Standardize invoice processing across entities with consistent controls." },
      { title: "Fraud prevention", body: "Screen every invoice for duplicates and anomalies before a dollar moves." },
    ],
    faqs: [
      { q: "What invoice formats can you handle?", a: "RiditStack's document AI handles PDFs, scanned images, and email-body invoices in virtually any layout, extracting header and line-level data without templates." },
      { q: "How does touchless matching work?", a: "For invoices with a PO, RiditStack automatically matches invoice, PO, and receipt on quantity and price. Matches within tolerance flow straight to payment; only mismatches become exceptions." },
      { q: "How do you catch duplicate or fraudulent invoices?", a: "Every invoice is checked against historical data for duplicates and scored for anomalies in amount, vendor, and pattern, flagging suspicious documents before payment." },
      { q: "Does it work without a PO?", a: "Yes. Non-PO invoices are extracted, coded, and routed through your approval workflow automatically, so even unstructured spend is controlled." },
    ],
    related: ["document-intelligence", "purchase-orders", "approvals", "analytics"],
    seo: {
      title: "AP Invoice Automation Software | RiditStack",
      description: "Capture, code, and 3-way-match every invoice with AI. RiditStack automates accounts payable end to end, cuts manual effort by 80%, and stops duplicate and fraudulent payments.",
      keywords: "invoice automation, ap automation, accounts payable software, 3-way matching, invoice processing ai",
    },
  },

  {
    slug: "contracts",
    name: "Contract Management",
    menuLabel: "Contract Management",
    category: "Core modules",
    icon: FileSignature,
    summary: "A living contract repository that enforces its own terms and never misses a renewal.",
    eyebrow: "Contract management",
    hero: {
      titleLead: "Contracts that enforce themselves —",
      titleHighlight: "and never lapse unnoticed.",
      subtitle:
        "Store every agreement in one searchable repository, extract key terms with AI, and connect pricing to the buying flow so contracts are actually honored. RiditStack turns dormant PDFs into active guardrails — with renewal alerts that give you time to negotiate.",
    },
    metrics: [
      { value: "0", label: "renewals missed by surprise" },
      { value: "AI", label: "extraction of key terms & dates" },
      { value: "1", label: "searchable source of truth" },
    ],
    problem: {
      heading: "Signed and forgotten",
      body: "A contract gets signed, saved to a drive, and never opened again. Buyers don't know the negotiated price exists, nobody tracks the auto-renewal clause, and the obligations you agreed to go unmonitored. The document that was supposed to protect you becomes a liability you can't even find.",
      pains: [
        { icon: Search, title: "Unfindable agreements", body: "Contracts scatter across drives and inboxes with no way to search the terms." },
        { icon: Clock, title: "Auto-renewals sneak up", body: "Renewal windows pass unnoticed, locking you into another year at old rates." },
        { icon: AlertTriangle, title: "Unenforced terms", body: "Negotiated pricing and obligations are never applied to actual buying." },
      ],
    },
    solution: {
      heading: "A contract repository that does the work",
      body: "RiditStack centralizes every contract in a searchable repository and uses AI to extract key terms, pricing, and dates. Renewal and milestone alerts fire with enough lead time to act, and contract pricing connects directly to guided buying — so the terms you negotiated are the terms you transact on.",
      highlights: [
        "Central, searchable repository for every agreement",
        "AI extraction of terms, pricing, and key dates",
        "Proactive renewal and obligation alerts",
        "Contract pricing enforced at the point of purchase",
      ],
    },
    benefits: [
      { icon: FileSignature, title: "One repository", body: "Every contract stored, versioned, and searchable in a single place." },
      { icon: ScanText, title: "AI term extraction", body: "Key clauses, pricing, and dates are pulled out automatically — no manual abstracting." },
      { icon: Bell, title: "Never miss a renewal", body: "Alerts fire ahead of renewal and milestone dates so you have time to negotiate." },
      { icon: Target, title: "Terms that stick", body: "Negotiated pricing flows into buying, so contracts are honored, not ignored." },
      { icon: ShieldCheck, title: "Obligation tracking", body: "Monitor commitments and compliance so nothing agreed goes unmet." },
      { icon: Eye, title: "Full visibility", body: "See total contracted value, exposure, and upcoming renewals at a glance." },
    ],
    workflow: [
      { title: "Centralize", body: "Upload or generate contracts into one searchable, versioned repository." },
      { title: "Extract", body: "AI pulls key terms, pricing, and dates into structured, reportable fields." },
      { title: "Enforce", body: "Contract pricing connects to guided buying so agreed rates are applied." },
      { title: "Renew", body: "Proactive alerts give you lead time to renegotiate or exit before renewal." },
    ],
    useCases: [
      { title: "Legal & procurement", body: "Give both teams one searchable source of truth for every agreement." },
      { title: "Renewals management", body: "Turn blind auto-renewals into deliberate, well-timed decisions." },
      { title: "Savings realization", body: "Ensure negotiated contract pricing actually reaches the purchase order." },
    ],
    faqs: [
      { q: "Can AI read our existing contracts?", a: "Yes. Upload your current agreements and RiditStack extracts key terms, pricing, parties, and dates into structured fields you can search and report on — no manual abstracting." },
      { q: "How do renewal alerts work?", a: "RiditStack tracks renewal, expiration, and milestone dates on every contract and notifies the right owners with configurable lead time, so auto-renewals never catch you off guard." },
      { q: "How does contract pricing get enforced?", a: "Contract pricing links to the supplier and category, so guided buying transacts on agreed rates and off-contract purchases are flagged for review." },
      { q: "Does this connect to sourcing?", a: "Yes. Sourcing awards can convert directly into contracts, carrying the negotiated terms and pricing straight into the repository and the buying flow." },
    ],
    related: ["source-to-pay", "suppliers", "analytics", "document-intelligence"],
    seo: {
      title: "Contract Management Software | RiditStack",
      description: "Centralize every contract, extract key terms with AI, and enforce negotiated pricing at buying. RiditStack ends missed renewals and turns contracts into active guardrails.",
      keywords: "contract management software, contract lifecycle management, contract repository, renewal alerts",
    },
  },

  {
    slug: "inventory",
    name: "Inventory Management",
    menuLabel: "Inventory Management",
    category: "Core modules",
    icon: Warehouse,
    summary: "Track stock, reorder points, and consumption — and replenish automatically before you run out.",
    eyebrow: "Inventory management",
    hero: {
      titleLead: "Never run out,",
      titleHighlight: "never over-order again.",
      subtitle:
        "See stock levels across locations in real time, set reorder points, and let RiditStack raise requisitions automatically when inventory runs low. Purchasing and stock finally speak to each other — so you hold less and stock out less.",
    },
    metrics: [
      { value: "Real-time", label: "stock across locations" },
      { value: "Auto", label: "reorder at threshold" },
      { value: "Less", label: "working capital tied up" },
    ],
    problem: {
      heading: "Buying and stock live in different worlds",
      body: "Purchasing doesn't know what's on the shelf, and the shelf doesn't know what's on order. So you stock out of critical items while cash sits frozen in overstock of others. Counts happen on spreadsheets weeks apart, and by the time anyone notices a shortage, it's already a disruption.",
      pains: [
        { icon: Eye, title: "No live visibility", body: "Stock levels are a periodic spreadsheet, never a real-time number you can trust." },
        { icon: RefreshCw, title: "Manual reordering", body: "Someone has to notice a shortage and raise a request — usually too late." },
        { icon: AlertTriangle, title: "Overstock & stockouts", body: "Cash freezes in excess inventory while critical items run dry." },
      ],
    },
    solution: {
      heading: "Stock and purchasing on one system",
      body: "RiditStack tracks inventory across every location in real time, ties consumption to purchasing, and triggers requisitions automatically when items hit their reorder point. You see what you have, what's committed, and what's coming — and the system keeps the shelf stocked without manual watching.",
      highlights: [
        "Real-time stock levels across every location",
        "Reorder points that raise requisitions automatically",
        "Consumption and usage tracking",
        "Inventory tied directly to purchasing and receiving",
      ],
    },
    benefits: [
      { icon: Eye, title: "Real-time visibility", body: "Know exactly what's in stock, committed, and inbound across all locations." },
      { icon: RefreshCw, title: "Auto-replenishment", body: "Items at their reorder point raise a requisition automatically — no watching." },
      { icon: Wallet, title: "Less overstock", body: "Hold only what you need, freeing working capital trapped on the shelf." },
      { icon: ShieldCheck, title: "Fewer stockouts", body: "Critical items get reordered on time, before a shortage disrupts operations." },
      { icon: ShoppingCart, title: "Tied to purchasing", body: "Consumption drives buying directly, so orders match real demand." },
      { icon: Boxes, title: "Multi-location", body: "Manage stock across warehouses and sites from one connected view." },
    ],
    workflow: [
      { title: "Track", body: "Stock levels update in real time as goods are received and consumed." },
      { title: "Set thresholds", body: "Define reorder points and safety stock for every item and location." },
      { title: "Auto-replenish", body: "When stock hits its threshold, RiditStack raises a requisition automatically." },
      { title: "Receive", body: "Incoming goods are received against POs and stock updates instantly." },
    ],
    useCases: [
      { title: "Operations teams", body: "Keep essential supplies stocked without manual counts and reorder chases." },
      { title: "Manufacturing", body: "Tie raw-material inventory to production demand and purchasing in one flow." },
      { title: "Multi-site businesses", body: "See and manage stock across every location from a single system." },
    ],
    faqs: [
      { q: "Does inventory connect to purchasing?", a: "Directly. Consumption and reorder points drive requisitions and purchase orders automatically, so buying reflects real demand instead of guesswork." },
      { q: "Can we manage stock across multiple locations?", a: "Yes. RiditStack tracks inventory per location and gives you a consolidated, real-time view across all warehouses and sites." },
      { q: "How does auto-replenishment work?", a: "You set a reorder point and safety stock per item. When stock falls to the threshold, RiditStack raises a requisition automatically for approval, so critical items never run dry." },
      { q: "Does it update stock when goods are received?", a: "Yes. Receiving against a purchase order updates stock levels in real time, keeping on-hand quantities accurate without manual counts." },
    ],
    related: ["purchase-orders", "asset-management", "suppliers", "analytics"],
    seo: {
      title: "Inventory Management Software for Procurement | RiditStack",
      description: "Track stock across locations in real time, set reorder points, and auto-replenish before you run out. RiditStack ties inventory to purchasing so you hold less and stock out less.",
      keywords: "inventory management software, stock management, reorder point automation, procurement inventory",
    },
  },

  {
    slug: "asset-management",
    name: "Asset Management",
    menuLabel: "Asset Management",
    category: "Core modules",
    icon: Tag,
    summary: "Track every asset from purchase to disposal — assignments, maintenance, and depreciation in one place.",
    eyebrow: "Asset management",
    hero: {
      titleLead: "Every asset accounted for,",
      titleHighlight: "cradle to retirement.",
      subtitle:
        "Track the full lifecycle of every asset you buy — assignment, location, maintenance, warranty, and depreciation — connected to the purchase that created it. RiditStack turns a forgotten asset register into a live, accountable record.",
    },
    metrics: [
      { value: "Full lifecycle", label: "purchase to disposal" },
      { value: "1", label: "register for every asset" },
      { value: "Zero", label: "ghost or lost assets" },
    ],
    problem: {
      heading: "Assets vanish the moment they're bought",
      body: "You buy a laptop, a machine, a license — and then lose track of it. Who has it, where it is, whether it's under warranty, what it's worth now: nobody knows, because the asset register, if one exists, is a stale spreadsheet disconnected from procurement. Assets get lost, double-bought, and depreciated wrong.",
      pains: [
        { icon: Search, title: "No single register", body: "Asset records are scattered spreadsheets that no one trusts or maintains." },
        { icon: AlertTriangle, title: "Untracked lifecycle", body: "Custody, location, maintenance, and warranty go unrecorded after purchase." },
        { icon: TrendingDown, title: "Depreciation guesswork", body: "Without accurate records, book values and disposals are estimates at best." },
      ],
    },
    solution: {
      heading: "A living register, born at purchase",
      body: "In RiditStack, an asset is created automatically from the purchase that bought it, then tracked through its whole life — assigned to people or locations, scheduled for maintenance, monitored for warranty, and depreciated on schedule. When it's retired, the record closes cleanly. Nothing disappears.",
      highlights: [
        "Assets created automatically from purchases",
        "Assignment, location, and custody tracking",
        "Maintenance schedules and warranty alerts",
        "Depreciation and clean disposal tracking",
      ],
    },
    benefits: [
      { icon: Tag, title: "One asset register", body: "Every asset in a single, trusted record from the day it's purchased." },
      { icon: Users, title: "Know who has what", body: "Track custody and location so assets are never lost or unaccounted for." },
      { icon: Wrench, title: "Maintenance on schedule", body: "Plan and log servicing so assets stay reliable across their useful life." },
      { icon: Bell, title: "Warranty alerts", body: "Get notified before warranties lapse, so you never pay for covered repairs." },
      { icon: TrendingDown, title: "Accurate depreciation", body: "Depreciate on schedule with records finance can actually rely on." },
      { icon: RefreshCw, title: "Clean disposal", body: "Retire and dispose of assets with a complete, auditable end-of-life trail." },
    ],
    workflow: [
      { title: "Acquire", body: "An asset is created automatically from the purchase order that bought it." },
      { title: "Assign", body: "Assign it to a person, team, or location and track custody over time." },
      { title: "Maintain", body: "Schedule maintenance and monitor warranties throughout its useful life." },
      { title: "Retire", body: "Depreciate on schedule and close the record cleanly at disposal." },
    ],
    useCases: [
      { title: "IT asset management", body: "Track laptops, devices, and licenses from procurement to decommission." },
      { title: "Facilities & equipment", body: "Manage machinery and equipment with maintenance and warranty schedules." },
      { title: "Finance & accounting", body: "Keep depreciation and asset registers accurate and audit-ready." },
    ],
    faqs: [
      { q: "How do assets get into the register?", a: "Automatically. When a purchase order for a trackable item is received, RiditStack creates the asset record and links it to the purchase, so nothing has to be entered by hand." },
      { q: "Can we track who has each asset?", a: "Yes. Assets can be assigned to people, teams, or locations, with a full custody history, so you always know where every asset is and who's responsible for it." },
      { q: "Does it handle maintenance and warranties?", a: "You can schedule recurring maintenance and record service history, and RiditStack alerts you before warranties expire so covered repairs aren't missed." },
      { q: "How is depreciation handled?", a: "Each asset carries its acquisition cost and depreciation schedule, so book values stay accurate through its life and disposals are recorded cleanly for audit." },
    ],
    related: ["inventory", "purchase-orders", "contracts", "suppliers"],
    seo: {
      title: "Asset Management Software | RiditStack",
      description: "Track every asset from purchase to disposal — custody, maintenance, warranty, and depreciation — connected to procurement. RiditStack turns a stale asset register into a live record.",
      keywords: "asset management software, it asset management, fixed asset tracking, asset lifecycle, depreciation tracking",
    },
  },

  /* ========================= AI & CONTROL ========================= */
  {
    slug: "analytics",
    name: "Spend Analytics",
    menuLabel: "Spend Analytics",
    category: "AI & control",
    icon: BarChart3,
    summary: "Live, categorized spend across every team and vendor — with AI that finds the savings.",
    eyebrow: "Spend analytics",
    hero: {
      titleLead: "See every dollar clearly, and",
      titleHighlight: "the savings hiding inside it.",
      subtitle:
        "RiditStack classifies and unifies spend across teams, categories, and vendors in real time, then uses AI to surface consolidation, savings, and risk you'd never spot in a spreadsheet. Board-ready insight without waiting on a data team.",
    },
    metrics: [
      { value: "Real-time", label: "spend across every entity" },
      { value: "AI", label: "savings & anomaly detection" },
      { value: "100%", label: "of transactions classified" },
    ],
    problem: {
      heading: "You can't manage what you can't see",
      body: "Spend data lives in fragments across ERPs, cards, and departments, in categories no two people define the same way. By the time someone stitches it into a report, it's a month old and already wrong. Leaders make decisions on gut feel because the real picture is always out of reach.",
      pains: [
        { icon: Database, title: "Fragmented data", body: "Spend is split across systems that classify it differently, if at all." },
        { icon: Clock, title: "Stale reporting", body: "Manual reports lag reality by weeks, so decisions run on old numbers." },
        { icon: Search, title: "Hidden opportunities", body: "Duplicate vendors and off-contract spend stay buried in the noise." },
      ],
    },
    solution: {
      heading: "Live spend intelligence, not month-old reports",
      body: "RiditStack unifies and auto-classifies every transaction the moment it happens, giving you a live picture of spend by team, category, and supplier. AI continuously scans for consolidation opportunities, off-contract spend, and anomalies — turning raw data into specific, actionable savings you can take to the board.",
      highlights: [
        "Automatic classification of every transaction",
        "Live dashboards by team, category, and vendor",
        "AI-surfaced savings and consolidation opportunities",
        "Anomaly and maverick-spend detection",
      ],
    },
    benefits: [
      { icon: BarChart3, title: "Live dashboards", body: "Slice spend by team, category, or supplier in real time — no data team required." },
      { icon: Sparkles, title: "AI finds savings", body: "Surface duplicate vendors, off-contract spend, and consolidation wins automatically." },
      { icon: Eye, title: "Total visibility", body: "One classified view of every dollar across entities, cards, and systems." },
      { icon: AlertTriangle, title: "Catch anomalies", body: "Spot maverick spend and unusual patterns the moment they appear." },
      { icon: LineChart, title: "Board-ready", body: "Export clean, defensible reporting leadership can act on immediately." },
      { icon: TrendingUp, title: "Forecast forward", body: "Use trends to predict spend and plan budgets with confidence." },
    ],
    workflow: [
      { title: "Unify", body: "RiditStack pulls spend from every source into one model as it happens." },
      { title: "Classify", body: "AI categorizes every transaction consistently, with no manual tagging." },
      { title: "Analyze", body: "Live dashboards reveal spend by any dimension you care about." },
      { title: "Act", body: "AI recommendations turn insight into specific savings actions." },
    ],
    useCases: [
      { title: "CFOs & controllers", body: "Get a real-time, defensible view of spend across the whole organization." },
      { title: "Category managers", body: "Find consolidation and off-contract spend to target for savings." },
      { title: "Budget owners", body: "Track actuals against budget continuously instead of at month-end." },
    ],
    faqs: [
      { q: "Where does the spend data come from?", a: "RiditStack combines the transactions flowing through the platform with data synced from your ERP, cards, and other systems, unifying it all into one classified model." },
      { q: "How accurate is the categorization?", a: "AI classifies transactions consistently across sources and learns from your corrections, so categories stay clean without the manual tagging that plagues spreadsheet analysis." },
      { q: "What kind of savings can it find?", a: "It surfaces duplicate and fragmented vendors, off-contract and maverick spend, tail-spend consolidation, and unusual patterns worth investigating — each as a specific, actionable insight." },
      { q: "Can we build custom reports?", a: "Yes. Alongside prebuilt dashboards, you can slice spend by any dimension, save custom views, schedule reports, and export board-ready output." },
    ],
    related: ["budgeting", "ai-copilot", "contracts", "source-to-pay"],
    seo: {
      title: "Spend Analytics Software | RiditStack",
      description: "See categorized spend across every team and vendor in real time, and let AI surface the savings. RiditStack turns fragmented spend data into board-ready, actionable insight.",
      keywords: "spend analytics, spend analysis software, procurement analytics, spend visibility, savings identification",
    },
  },

  {
    slug: "budgeting",
    name: "Budget Control",
    menuLabel: "Budget Control",
    category: "AI & control",
    icon: Wallet,
    summary: "Live budgets checked at the point of commitment, so overspend can't happen.",
    eyebrow: "Budget control",
    hero: {
      titleLead: "Stop overspend before it happens —",
      titleHighlight: "not after the report.",
      subtitle:
        "RiditStack checks every request and PO against live budgets at the moment of commitment, alerts owners as thresholds approach, and keeps actuals current in real time. Budget control becomes a guardrail people can't accidentally cross — not a post-mortem.",
    },
    metrics: [
      { value: "Real-time", label: "budget vs. committed spend" },
      { value: "At source", label: "checks before commitment" },
      { value: "0", label: "month-end overspend surprises" },
    ],
    problem: {
      heading: "Budgets you only reconcile in hindsight",
      body: "Budgets live in a spreadsheet updated once a month, while spending happens every day. By the time actuals are reconciled, the overspend already happened and the conversation is about blame, not prevention. Budget owners fly blind between updates, and finance is always explaining the past.",
      pains: [
        { icon: Clock, title: "Lagging actuals", body: "Spreadsheet budgets are always weeks behind what's actually been committed." },
        { icon: AlertTriangle, title: "Overspend after the fact", body: "Thresholds are breached silently and only surface at reconciliation." },
        { icon: Eye, title: "No owner visibility", body: "Budget owners can't see their remaining balance until finance tells them." },
      ],
    },
    solution: {
      heading: "Budgets that enforce themselves",
      body: "RiditStack ties budgets directly to spend. Every request and PO checks against the live budget before it commits, owners get alerts as they approach thresholds, and actuals update in real time as money is committed and spent. Overspend stops being a surprise because the budget is a control, not a rear-view mirror.",
      highlights: [
        "Multi-level budgets by team, project, and category",
        "Budget checks at the point of commitment",
        "Proactive threshold alerts to budget owners",
        "Real-time actuals versus budget, always current",
      ],
    },
    benefits: [
      { icon: Wallet, title: "Check at source", body: "Spend is validated against live budget before it's ever committed." },
      { icon: Bell, title: "Early warnings", body: "Owners are alerted as they approach limits, with time to act." },
      { icon: Eye, title: "Owner self-service", body: "Every budget owner sees their remaining balance in real time." },
      { icon: Layers, title: "Budget any way", body: "Model budgets by department, project, category, or entity — or all at once." },
      { icon: RefreshCw, title: "Always current", body: "Actuals update as commitments happen, so the number is never stale." },
      { icon: ShieldCheck, title: "Enforced limits", body: "Hard and soft controls stop or flag spend that would breach budget." },
    ],
    workflow: [
      { title: "Set", body: "Build multi-level budgets by team, project, category, or entity." },
      { title: "Check", body: "Every request and PO validates against the live budget before committing." },
      { title: "Alert", body: "Owners get proactive warnings as spend approaches their thresholds." },
      { title: "Track", body: "Actuals update in real time, keeping budget-versus-spend always current." },
    ],
    useCases: [
      { title: "Department heads", body: "Give every owner a live, self-serve view of their remaining budget." },
      { title: "Project-based teams", body: "Track spend against project budgets in real time, not at close." },
      { title: "Finance planning", body: "Replace stale spreadsheets with budgets that enforce themselves at source." },
    ],
    faqs: [
      { q: "How is this different from budgets in our ERP?", a: "ERP budgets are typically checked after the fact at the accounting layer. RiditStack checks at the point of commitment — when a request or PO is raised — so overspend is prevented, not just recorded." },
      { q: "Can we set different levels of budget?", a: "Yes. Budgets can be modeled by department, project, category, cost center, or entity, and nested, so a single PO can validate against several budgets at once." },
      { q: "What happens when a budget is exceeded?", a: "You choose: a soft control warns and requires additional approval, while a hard control blocks the commitment. Owners are alerted well before the limit is reached." },
      { q: "Do actuals update automatically?", a: "Yes. As commitments and payments flow through the platform and sync from your ERP, budget actuals update in real time — no manual reconciliation." },
    ],
    related: ["purchase-orders", "analytics", "intake", "approvals"],
    seo: {
      title: "Budget Control Software for Procurement | RiditStack",
      description: "Check every request and PO against live budgets before commitment, alert owners early, and keep actuals real-time. RiditStack makes overspend impossible to miss — or make.",
      keywords: "budget control software, procurement budgeting, budget management, spend control, real-time budgets",
    },
  },

  {
    slug: "ai-copilot",
    name: "AI Copilot",
    menuLabel: "AI Copilot",
    category: "AI & control",
    icon: Bot,
    summary: "Ask procurement anything in plain language and act on the answer instantly.",
    eyebrow: "AI Copilot",
    hero: {
      titleLead: "Your procurement team's",
      titleHighlight: "always-on expert.",
      subtitle:
        "Ask RiditStack's AI Copilot anything — 'What did we spend with this vendor last quarter?', 'Draft an RFQ for laptops', 'Which contracts renew next month?' — and get an answer grounded in your real data, with the action ready to take. No dashboards to hunt through, no analysts to wait on.",
    },
    metrics: [
      { value: "Plain English", label: "ask anything, get answers" },
      { value: "Grounded", label: "in your real procurement data" },
      { value: "24/7", label: "instant expert on call" },
    ],
    problem: {
      heading: "The answers exist — buried and out of reach",
      body: "Your procurement data holds the answer to almost any question, but getting it means knowing which dashboard, which filter, or which analyst to ask. So people don't ask. Decisions get made without the data that was sitting right there, and the team's expertise stays locked in a few overloaded heads.",
      pains: [
        { icon: Search, title: "Answers are hard to reach", body: "Insight requires knowing exactly where to look and how to slice it." },
        { icon: Clock, title: "Analyst bottleneck", body: "Simple questions queue behind a handful of busy data-savvy people." },
        { icon: Layers, title: "Manual busywork", body: "Drafting RFQs, summaries, and reports eats hours that AI could hand back." },
      ],
    },
    solution: {
      heading: "Conversational procurement, grounded in your data",
      body: "The AI Copilot understands your spend, suppliers, contracts, and policies. Ask a question in plain language and it answers from your real data with sources. Ask it to do something — draft an RFQ, summarize a contract, find savings, start a request — and it prepares the action for your review. Expertise, on demand, for everyone.",
      highlights: [
        "Natural-language answers grounded in your data",
        "Drafts RFQs, summaries, and requests on command",
        "Surfaces savings, risks, and renewals proactively",
        "Respects your permissions and policies on every action",
      ],
    },
    benefits: [
      { icon: MessageSquare, title: "Just ask", body: "Get answers about spend, suppliers, and contracts in plain language." },
      { icon: Sparkles, title: "It takes action", body: "Draft an RFQ, start a request, or summarize a contract on command." },
      { icon: Eye, title: "Grounded & cited", body: "Every answer traces back to your real data, so you can trust and verify it." },
      { icon: Zap, title: "No bottleneck", body: "Everyone self-serves insight without waiting on an analyst." },
      { icon: TrendingUp, title: "Proactive nudges", body: "The Copilot flags savings, risks, and renewals before you think to ask." },
      { icon: ShieldCheck, title: "Safe by design", body: "It honors each user's permissions and your policies on every response." },
    ],
    workflow: [
      { title: "Ask", body: "Type a question or request in plain language, right where you work." },
      { title: "Understand", body: "The Copilot interprets intent against your live procurement data." },
      { title: "Answer", body: "It responds with grounded, cited insight — or a ready-to-run action." },
      { title: "Act", body: "Approve the drafted RFQ, request, or report and it's done." },
    ],
    useCases: [
      { title: "Procurement teams", body: "Draft sourcing docs and summaries in seconds instead of hours." },
      { title: "Finance leaders", body: "Ask ad-hoc spend questions and get instant, sourced answers." },
      { title: "Everyone else", body: "Let any employee self-serve procurement help without training." },
    ],
    faqs: [
      { q: "Is the Copilot just a chatbot?", a: "No. It's grounded in your live procurement data and can take real actions — drafting RFQs, starting requests, summarizing contracts — within your permissions and policies, not just answering trivia." },
      { q: "How do we know the answers are accurate?", a: "Every answer is grounded in your actual data and cites its sources, so you can verify it. The Copilot won't invent numbers it can't trace back to your records." },
      { q: "Is our data used to train external models?", a: "No. Your data stays private to your workspace and is not used to train shared models. The Copilot operates on your data under your security and permission controls." },
      { q: "Does it respect user permissions?", a: "Yes. The Copilot only surfaces data and actions each user is already allowed to access, and every action it takes follows your approval policies." },
    ],
    related: ["analytics", "document-intelligence", "workflow-automation", "intake"],
    seo: {
      title: "AI Procurement Copilot | RiditStack",
      description: "Ask procurement anything in plain language and act on the answer instantly. RiditStack's AI Copilot is grounded in your data, drafts RFQs and summaries, and respects your policies.",
      keywords: "ai procurement copilot, procurement ai assistant, conversational procurement, ai spend analysis",
    },
  },

  {
    slug: "document-intelligence",
    name: "Document Intelligence",
    menuLabel: "Document Intelligence",
    category: "AI & control",
    icon: ScanText,
    summary: "AI that reads invoices, contracts, and quotes — and turns them into structured data.",
    eyebrow: "Document intelligence (OCR)",
    hero: {
      titleLead: "Turn every document into",
      titleHighlight: "structured, usable data.",
      subtitle:
        "Invoices, contracts, quotes, and receipts arrive as unstructured files. RiditStack's document intelligence reads them the way a person would — extracting line items, terms, and totals into clean data your workflows can act on, without templates or manual keying.",
    },
    metrics: [
      { value: "99.5%", label: "extraction accuracy on clean docs" },
      { value: "Template-free", label: "reads any layout" },
      { value: "Seconds", label: "to structure a document" },
    ],
    problem: {
      heading: "Your data is trapped in documents",
      body: "Most procurement information arrives as a file, not a field. A quote is a PDF, a contract is a scan, an invoice is an email attachment. To use any of it, someone has to read it and re-type it — slowly, inconsistently, and with errors that ripple downstream into every match and report.",
      pains: [
        { icon: FileText, title: "Unstructured everywhere", body: "Critical data hides inside PDFs, scans, and images no system can read." },
        { icon: ScanText, title: "Template brittleness", body: "Old OCR breaks the moment a document's layout changes." },
        { icon: AlertTriangle, title: "Manual entry errors", body: "Re-keying introduces mistakes that corrupt matching and reporting." },
      ],
    },
    solution: {
      heading: "AI that reads like a human, at machine scale",
      body: "RiditStack's document intelligence uses modern AI to understand documents by meaning, not fixed templates. It extracts header and line-level data from any layout — invoices, contracts, quotes, receipts — validates it, and feeds it straight into matching, contracts, and analytics. The information trapped in your files becomes data your platform can use.",
      highlights: [
        "Template-free extraction from any document layout",
        "Line-level accuracy on invoices and quotes",
        "Clause and term extraction from contracts",
        "Validation and confidence scoring on every field",
      ],
    },
    benefits: [
      { icon: ScanText, title: "Any layout", body: "Reads documents by meaning, so new formats don't break extraction." },
      { icon: Sparkles, title: "Line-level detail", body: "Captures individual line items, not just totals, for true automation." },
      { icon: FileSignature, title: "Beyond invoices", body: "Extracts terms and clauses from contracts and quotes too." },
      { icon: ShieldCheck, title: "Validated output", body: "Confidence scoring flags low-certainty fields for a quick human check." },
      { icon: RefreshCw, title: "Flows downstream", body: "Structured data feeds matching, contracts, and analytics automatically." },
      { icon: Gauge, title: "Machine speed", body: "Structure thousands of documents in the time manual entry handles a few." },
    ],
    workflow: [
      { title: "Ingest", body: "Documents arrive by email, upload, or portal in any format." },
      { title: "Read", body: "AI interprets the document by meaning and locates every relevant field." },
      { title: "Extract", body: "Header and line-level data is captured, validated, and confidence-scored." },
      { title: "Use", body: "Clean, structured data flows into matching, contracts, and analytics." },
    ],
    useCases: [
      { title: "Invoice processing", body: "Feed touchless AP with accurate, line-level invoice data from any format." },
      { title: "Contract digitization", body: "Turn a backlog of contract PDFs into searchable, structured records." },
      { title: "Quote comparison", body: "Extract quote line items automatically for clean, side-by-side sourcing." },
    ],
    faqs: [
      { q: "Do we need to set up templates for each vendor?", a: "No. RiditStack's document intelligence reads documents by understanding their meaning, so it handles new layouts and vendors without per-template configuration." },
      { q: "What documents can it process?", a: "Invoices, contracts, quotes, purchase orders, and receipts, in PDF, scanned image, or email-body form, with both header and line-level extraction." },
      { q: "How do you handle low-quality scans?", a: "Every extracted field carries a confidence score. High-confidence data flows straight through, while low-confidence fields are flagged for a quick human review, so accuracy stays high." },
      { q: "Where does the extracted data go?", a: "Straight into the relevant workflow — invoice data into 3-way matching, contract terms into the repository, quote lines into sourcing — with no manual re-entry." },
    ],
    related: ["invoice-automation", "contracts", "ai-copilot", "source-to-pay"],
    seo: {
      title: "Document Intelligence & OCR for Procurement | RiditStack",
      description: "AI that reads invoices, contracts, and quotes and turns them into structured data — no templates, no manual keying. RiditStack unlocks the data trapped in your documents.",
      keywords: "document intelligence, procurement ocr, invoice ocr, contract data extraction, ai document processing",
    },
  },

  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    menuLabel: "Workflow Automation",
    category: "AI & control",
    icon: Zap,
    summary: "Automate the routing, reminders, and busywork across your entire procurement process.",
    eyebrow: "Workflow automation",
    hero: {
      titleLead: "Automate the busywork,",
      titleHighlight: "keep the judgment.",
      subtitle:
        "Build automations that route requests, trigger actions, sync systems, and chase the things that stall — without code. RiditStack handles the repetitive mechanics of procurement so your team spends its time on decisions, not data entry and follow-ups.",
    },
    metrics: [
      { value: "No-code", label: "automation builder" },
      { value: "Any trigger", label: "event-driven actions" },
      { value: "Hours", label: "of busywork removed weekly" },
    ],
    problem: {
      heading: "Your team is doing the software's job",
      body: "Copy this field into that system. Remind the approver again. Notify the requester. Update the tracker. These tiny tasks aren't hard, but there are hundreds of them, and they fall on people. The result is a skilled team spending its day on mechanical glue work instead of the decisions only they can make.",
      pains: [
        { icon: RefreshCw, title: "Manual handoffs", body: "People move data between steps and systems by hand, all day." },
        { icon: Bell, title: "Endless chasing", body: "Following up on stalled tasks becomes a full-time job in itself." },
        { icon: Clock, title: "Slow, inconsistent", body: "Manual glue work is slow, error-prone, and different every time." },
      ],
    },
    solution: {
      heading: "Event-driven automation across procurement",
      body: "RiditStack lets you build automations visually: when this happens, do that. Route requests, trigger notifications, update records, sync external systems, and escalate stalls — all without code. Because it's built into the platform, automations act on the same data your whole process runs on, consistently and instantly.",
      highlights: [
        "Visual, no-code automation builder",
        "Event-driven triggers across the procurement lifecycle",
        "Actions that update records and sync systems",
        "Automatic reminders, escalations, and notifications",
      ],
    },
    benefits: [
      { icon: Zap, title: "Automate anything", body: "Turn repetitive, rule-based steps into automations that just run." },
      { icon: Workflow, title: "No code needed", body: "Build and change automations visually — no engineering backlog." },
      { icon: Bell, title: "It chases for you", body: "Reminders and escalations keep work moving without human nagging." },
      { icon: RefreshCw, title: "Systems in sync", body: "Push and pull data to your ERP and tools automatically as events happen." },
      { icon: Gauge, title: "Consistent every time", body: "Automated steps run the same way, every time, with a full audit trail." },
      { icon: Clock, title: "Give time back", body: "Free your team from mechanical work to focus on real decisions." },
    ],
    workflow: [
      { title: "Trigger", body: "Choose an event — a request submitted, a threshold crossed, a date reached." },
      { title: "Condition", body: "Add rules so the automation only runs when it should." },
      { title: "Act", body: "Route, notify, update records, or sync systems automatically." },
      { title: "Monitor", body: "Track every automation run with a complete, auditable log." },
    ],
    useCases: [
      { title: "Process owners", body: "Encode your procurement playbook so it runs itself, consistently." },
      { title: "Systems integration", body: "Keep RiditStack and your ERP in sync without manual data movement." },
      { title: "SLA management", body: "Auto-escalate anything that breaches a service-level target." },
    ],
    faqs: [
      { q: "Do I need engineering to build automations?", a: "No. Automations are built in a visual, no-code editor, so procurement and finance admins create and adjust them without waiting on IT." },
      { q: "What can trigger an automation?", a: "Almost any event in the lifecycle — a request submitted, an approval granted, a budget threshold crossed, a contract date reached, or a scheduled time." },
      { q: "Can automations update external systems?", a: "Yes. Actions can update records inside RiditStack and push or pull data from your ERP and connected tools, keeping everything in sync automatically." },
      { q: "How is this different from generic automation tools?", a: "Because it's native to the platform, it acts directly on your procurement data with full context and audit logging — no brittle external integrations to maintain." },
    ],
    related: ["approvals", "integrations", "ai-copilot", "intake"],
    seo: {
      title: "Procurement Workflow Automation | RiditStack",
      description: "Automate routing, reminders, syncing, and busywork across procurement with a no-code builder. RiditStack removes hours of manual glue work so teams focus on decisions.",
      keywords: "workflow automation, procurement automation, no-code automation, process automation, business rules engine",
    },
  },

  {
    slug: "integrations",
    name: "Integrations",
    menuLabel: "Integrations",
    category: "AI & control",
    icon: Plug,
    summary: "Sync your ERP, finance stack, and identity in days — with prebuilt connectors and an open API.",
    eyebrow: "Integrations & API",
    hero: {
      titleLead: "Plugs into your stack in days,",
      titleHighlight: "not a rip-and-replace.",
      subtitle:
        "RiditStack connects to your ERP, accounting, identity, and communication tools through prebuilt connectors and a documented API. Your ledger stays the source of truth, your team keeps its tools, and procurement finally speaks to everything else.",
    },
    metrics: [
      { value: "Days", label: "to first integration live" },
      { value: "Bidirectional", label: "ERP & finance sync" },
      { value: "Open", label: "REST API & webhooks" },
    ],
    problem: {
      heading: "An island of procurement data",
      body: "A procurement tool that doesn't connect just becomes another silo. Data gets exported and re-imported, the ERP and the platform drift apart, and IT dreads a six-month integration project. The promise of automation dies at the boundary between systems.",
      pains: [
        { icon: Database, title: "Data silos", body: "Procurement data can't reach the ERP and finance tools that need it." },
        { icon: RefreshCw, title: "Manual syncing", body: "Teams export and re-import data to keep systems roughly aligned." },
        { icon: Clock, title: "Painful projects", body: "Custom integrations turn into long, expensive engineering efforts." },
      ],
    },
    solution: {
      heading: "Connected in days, not quarters",
      body: "RiditStack ships prebuilt connectors for major ERPs, accounting platforms, identity providers, and collaboration tools, plus a documented REST API and webhooks for anything custom. Sync is bidirectional and real-time, so POs, invoices, suppliers, and budgets stay aligned everywhere. Your ERP remains the system of record; RiditStack becomes the system of engagement.",
      highlights: [
        "Prebuilt connectors for major ERP and finance systems",
        "SSO and SCIM with your identity provider",
        "Bidirectional, real-time data sync",
        "Open REST API and webhooks for custom needs",
      ],
    },
    benefits: [
      { icon: Plug, title: "Prebuilt connectors", body: "Connect major ERPs, accounting, and identity tools out of the box." },
      { icon: RefreshCw, title: "Bidirectional sync", body: "POs, invoices, suppliers, and budgets stay aligned across systems in real time." },
      { icon: KeyRound, title: "SSO & SCIM", body: "Integrate with your identity provider for secure sign-on and provisioning." },
      { icon: Zap, title: "Open API", body: "Build anything custom on a documented REST API with webhooks." },
      { icon: Clock, title: "Live in days", body: "Standard integrations go live in days, not multi-quarter projects." },
      { icon: ShieldCheck, title: "Your ledger, intact", body: "Your ERP stays the source of truth; nothing gets ripped and replaced." },
    ],
    workflow: [
      { title: "Connect", body: "Choose a prebuilt connector or the API and authenticate your system." },
      { title: "Map", body: "Match fields and accounts once; RiditStack keeps them aligned thereafter." },
      { title: "Sync", body: "Data flows bidirectionally in real time as events happen on either side." },
      { title: "Extend", body: "Use the open API and webhooks to automate anything unique to you." },
    ],
    useCases: [
      { title: "IT & systems teams", body: "Integrate procurement without a long custom-build project." },
      { title: "Finance operations", body: "Keep the ERP and procurement in lockstep with real-time sync." },
      { title: "Platform builders", body: "Extend RiditStack with the open API to fit your unique processes." },
    ],
    faqs: [
      { q: "Which systems do you integrate with?", a: "RiditStack offers prebuilt connectors for major ERPs, accounting platforms, identity providers, and collaboration tools like Slack, plus an open REST API for anything not covered out of the box." },
      { q: "Do we have to replace our ERP?", a: "No. Your ERP stays the system of record. RiditStack syncs with it bidirectionally as the system of engagement for procurement, so nothing gets ripped out." },
      { q: "How long do integrations take?", a: "Standard connector integrations typically go live in days. Custom integrations via the API depend on scope, but the documented REST endpoints and webhooks keep them straightforward." },
      { q: "Is the sync real-time?", a: "Yes. Changes flow bidirectionally in near real time, so purchase orders, invoices, supplier records, and budgets stay consistent across every connected system." },
    ],
    related: ["api", "workflow-automation", "procure-to-pay", "invoice-automation"],
    seo: {
      title: "Procurement Integrations & API | RiditStack",
      description: "Connect your ERP, finance stack, and identity provider with prebuilt connectors and an open API. RiditStack syncs bidirectionally in real time — live in days, no rip-and-replace.",
      keywords: "procurement integrations, erp integration, procurement api, netsuite sap quickbooks integration, sso scim",
    },
  },

  {
    slug: "api",
    name: "API & Developer Platform",
    menuLabel: "API",
    category: "AI & control",
    icon: Code2,
    summary: "A documented REST API, webhooks, and sandbox to build anything on top of RiditStack.",
    eyebrow: "API & developer platform",
    hero: {
      titleLead: "Build anything on an",
      titleHighlight: "open procurement API.",
      subtitle:
        "Every object and action in RiditStack is available through a documented REST API with webhooks, granular scopes, and a full sandbox. When a prebuilt connector isn't enough, your developers can automate and extend procurement exactly the way you need.",
    },
    metrics: [
      { value: "REST", label: "fully documented API" },
      { value: "Webhooks", label: "real-time events" },
      { value: "Sandbox", label: "test before you ship" },
    ],
    problem: {
      heading: "When off-the-shelf isn't enough",
      body: "Prebuilt connectors cover the common cases, but every enterprise has a workflow, system, or data model that's uniquely theirs. Without programmatic access, those needs turn into manual workarounds or expensive custom projects — and your procurement platform becomes a ceiling instead of a foundation.",
      pains: [
        { icon: KeyRound, title: "Locked in", body: "No programmatic access means every custom need becomes a manual workaround." },
        { icon: Bell, title: "No real-time events", body: "Without webhooks, systems poll and drift out of sync between updates." },
        { icon: AlertTriangle, title: "Risky changes", body: "No sandbox means testing new integrations against live production data." },
      ],
    },
    solution: {
      heading: "A platform your developers can build on",
      body: "RiditStack exposes its full data model and actions through a documented REST API secured with granular scopes and API keys. Webhooks push real-time events to your systems, and a complete sandbox lets your team build and test safely before going live. Extend procurement without waiting on us.",
      highlights: [
        "Documented REST API for every object and action",
        "Webhooks for real-time, event-driven sync",
        "Granular scopes and secure API keys",
        "A full sandbox environment for safe testing",
      ],
    },
    benefits: [
      { icon: Code2, title: "Full REST API", body: "Read and write every procurement object and action programmatically." },
      { icon: Webhook, title: "Real-time webhooks", body: "Push events to your systems the moment they happen — no polling." },
      { icon: KeyRound, title: "Scoped & secure", body: "Granular scopes and API keys keep every integration least-privilege." },
      { icon: Terminal, title: "Sandbox to test", body: "Build and validate against a full sandbox before touching production." },
      { icon: BookOpen, title: "Clear documentation", body: "Comprehensive, versioned docs and examples get developers moving fast." },
      { icon: Zap, title: "Automate anything", body: "Extend and orchestrate procurement to fit processes uniquely yours." },
    ],
    workflow: [
      { title: "Get keys", body: "Generate scoped API keys and read the versioned developer documentation." },
      { title: "Build in sandbox", body: "Develop and test against a full sandbox with realistic data, risk-free." },
      { title: "Subscribe to events", body: "Register webhooks so your systems react to changes in real time." },
      { title: "Go live", body: "Promote to production with confidence and monitor every call." },
    ],
    useCases: [
      { title: "Platform teams", body: "Extend RiditStack to fit workflows and systems unique to your business." },
      { title: "Systems integration", body: "Build custom, event-driven sync where a prebuilt connector doesn't exist." },
      { title: "Custom automation", body: "Orchestrate bespoke procurement processes end to end via the API." },
    ],
    faqs: [
      { q: "What can the API access?", a: "The REST API exposes RiditStack's full data model and actions — requisitions, purchase orders, invoices, suppliers, contracts, budgets, and more — so you can read and automate virtually anything in the platform." },
      { q: "Do you support webhooks?", a: "Yes. You can subscribe to real-time events so your systems react the moment something changes, instead of polling for updates and drifting out of sync." },
      { q: "Is there a sandbox?", a: "Yes. A full sandbox environment lets your developers build and test integrations against realistic data before promoting anything to production." },
      { q: "How is the API secured?", a: "Access uses API keys with granular scopes, so each integration gets only the permissions it needs. All traffic is encrypted and every call is logged for audit." },
    ],
    related: ["integrations", "workflow-automation", "invoice-automation", "ai-copilot"],
    seo: {
      title: "Procurement API & Developer Platform | RiditStack",
      description: "Build on a documented REST API with webhooks, granular scopes, and a full sandbox. RiditStack's developer platform lets your team automate and extend procurement without limits.",
      keywords: "procurement api, rest api, webhooks, developer platform, procurement automation api, sandbox",
    },
  },
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export const featureSlugs = features.map((f) => f.slug)

export function getFeature(slug: string): FeatureContent | undefined {
  return features.find((f) => f.slug === slug)
}

export function getRelated(slug: string): FeatureContent[] {
  const feature = getFeature(slug)
  if (!feature) return []
  return feature.related
    .map((s) => getFeature(s))
    .filter((f): f is FeatureContent => Boolean(f))
}

export const featureCategories: FeatureCategory[] = [
  "Suites",
  "Core modules",
  "AI & control",
]

export function featuresByCategory(category: FeatureCategory): FeatureContent[] {
  return features.filter((f) => f.category === category)
}
