import {
  ShoppingCart,
  Landmark,
  Settings2,
  Truck,
  Target,
  Rocket,
  TrendingUp,
  Building2,
  RefreshCw,
  Search,
  AlertTriangle,
  Sparkles,
  Route,
  Users,
  BarChart3,
  CheckCheck,
  FileText,
  Clock,
  Eye,
  ShieldCheck,
  Wallet,
  Zap,
  Bot,
  GitBranch,
  Bell,
  Globe,
  Lock,
  LineChart,
  Boxes,
  Gauge,
  Plug,
  Database,
} from "lucide-react"
import type { MarketingPage } from "./marketing"

export const solutions: MarketingPage[] = [
  /* ===================== BY DEPARTMENT ===================== */
  {
    kind: "solution",
    slug: "procurement",
    name: "Procurement Teams",
    menuLabel: "Procurement",
    group: "By department",
    icon: ShoppingCart,
    summary: "Run procurement as a strategic function, not a purchase-order desk.",
    eyebrow: "For procurement teams",
    hero: {
      titleLead: "Elevate procurement from processing to",
      titleHighlight: "strategy.",
      subtitle:
        "Give your team one platform to run intake, sourcing, suppliers, and spend - with AI handling the manual work so your people focus on savings, risk, and relationships.",
    },
    metrics: [
      { value: "73%", label: "faster cycle times" },
      { value: "12%", label: "sourced savings identified" },
      { value: "1", label: "system for the whole team" },
    ],
    pains: {
      heading: "Buried in transactions, starved of strategy",
      body: "Procurement teams spend their days chasing approvals, re-keying POs, and fielding 'where's my order?' emails. The strategic work - sourcing, supplier development, savings - gets whatever time is left, which is never enough.",
      items: [
        { icon: RefreshCw, title: "Manual transaction load", body: "Every requisition, PO, and invoice is handled by hand." },
        { icon: Search, title: "No spend visibility", body: "Fragmented data hides savings and maverick spend." },
        { icon: AlertTriangle, title: "Reactive supplier risk", body: "Risk surfaces as disruption, not as a managed input." },
      ],
    },
    solution: {
      heading: "One platform to run - and elevate - procurement",
      body: "RiditStack automates the transactional core of procurement and gives your team the intelligence to be strategic. Intake routes itself, sourcing runs on structured data, suppliers live on one record, and AI surfaces the savings worth chasing.",
      highlights: [
        "Automated intake, approvals, and PO creation",
        "Sourcing events and contract enforcement",
        "One supplier record with risk monitoring",
        "AI-surfaced savings and spend analytics",
      ],
    },
    capabilities: {
      heading: "Everything a modern procurement team needs",
      subheading: "The modules that replace your patchwork of tools - all sharing one dataset.",
      items: [
        { icon: Sparkles, title: "AI Copilot", body: "Answer spend and supplier questions in plain language." },
        { icon: Route, title: "Guided sourcing", body: "Run RFQs and reverse auctions on structured bids." },
        { icon: Users, title: "Supplier management", body: "Onboard, score, and monitor every vendor." },
        { icon: BarChart3, title: "Spend analytics", body: "See categorized spend and act on AI-found savings." },
        { icon: CheckCheck, title: "Approval workflows", body: "Route requests by policy, approve in one click." },
        { icon: FileText, title: "Contract control", body: "Enforce negotiated pricing at the point of buying." },
      ],
    },
    workflow: [
      { title: "Centralize", body: "Bring every request, PO, and supplier onto one record." },
      { title: "Automate", body: "Let AI handle intake, approvals, and matching." },
      { title: "Source", body: "Run competitive events and lock in negotiated pricing." },
      { title: "Optimize", body: "Act on AI-surfaced savings and consolidation opportunities." },
    ],
    story: {
      quote:
        "RiditStack gave my team back two days a week. We finally run sourcing events instead of firefighting purchase orders.",
      author: "Priya Nair",
      role: "Head of Procurement",
      company: "Meridian Foods",
      metric: "2 days/wk",
      metricLabel: "returned to strategic work",
    },
    faqs: [
      { q: "Will this replace our current procurement tools?", a: "RiditStack unifies intake, sourcing, suppliers, contracts, and analytics on one platform, so it typically replaces a patchwork of point tools and spreadsheets rather than adding another." },
      { q: "How quickly can our team be productive?", a: "Most procurement teams are live on their first workflow within two weeks. We start with one high-volume category, prove it, then expand." },
      { q: "Does it work alongside our ERP?", a: "Yes. RiditStack sits in front of your ERP as the system of engagement for procurement and syncs bidirectionally, so your ledger stays the source of truth." },
      { q: "Can we keep our approval policies?", a: "Yes. Approval rules, thresholds, and delegations are configured without code and can mirror your current policies on day one." },
    ],
    related: {
      features: ["ai-copilot", "source-to-pay", "suppliers", "analytics"],
      solutions: ["finance", "operations"],
      industries: ["manufacturing"],
    },
    seo: {
      title: "Procurement Software for Procurement Teams | RiditStack",
      description: "Run procurement as a strategic function. RiditStack automates intake, sourcing, suppliers, and spend so your team focuses on savings, risk, and supplier relationships.",
      keywords: "procurement software, procurement team platform, strategic sourcing, procurement automation",
    },
  },

  {
    kind: "solution",
    slug: "finance",
    name: "Finance Teams",
    menuLabel: "Finance",
    group: "By department",
    icon: Landmark,
    summary: "Control spend before it happens and close the books faster.",
    eyebrow: "For finance teams",
    hero: {
      titleLead: "Control every dollar",
      titleHighlight: "before it's committed.",
      subtitle:
        "Give finance real-time visibility and control over spend - budgets checked at commitment, invoices matched touchlessly, and a clean audit trail from request to payment. Close faster, with fewer surprises.",
    },
    metrics: [
      { value: "80%", label: "less manual AP effort" },
      { value: "Real-time", label: "budget vs. committed spend" },
      { value: "Days", label: "cut from the close" },
    ],
    pains: {
      heading: "Finding out about spend after it's spent",
      body: "Finance is always explaining the past - reconciling budgets a month late, chasing invoices through inboxes, and discovering overspend when it's too late to prevent. Control feels like an audit, not a guardrail.",
      items: [
        { icon: Clock, title: "Month-end surprises", body: "Budgets are reconciled long after commitments are made." },
        { icon: RefreshCw, title: "Manual AP grind", body: "Invoices are keyed and matched by hand, slowly." },
        { icon: AlertTriangle, title: "Audit anxiety", body: "Assembling a clean trail for auditors takes weeks." },
      ],
    },
    solution: {
      heading: "Guardrails that work in real time",
      body: "RiditStack ties spend to budgets at the moment of commitment, automates invoice matching with AI, and logs every step for audit. Finance moves from explaining the past to controlling the present.",
      highlights: [
        "Budget checks at the point of commitment",
        "Touchless 3-way invoice matching",
        "Live spend visibility across entities",
        "Audit-ready trail on every transaction",
      ],
    },
    capabilities: {
      heading: "Built for financial control",
      subheading: "The controls and automation finance teams need to move fast and stay accurate.",
      items: [
        { icon: Wallet, title: "Budget control", body: "Validate spend against live budgets before commitment." },
        { icon: CheckCheck, title: "Invoice automation", body: "AI captures, codes, and matches every invoice." },
        { icon: BarChart3, title: "Spend analytics", body: "Real-time, categorized spend across the organization." },
        { icon: ShieldCheck, title: "Audit trail", body: "Every approval and edit logged and exportable." },
        { icon: LineChart, title: "Forecasting", body: "Predict spend from live commitment data." },
        { icon: Lock, title: "Segregation of duties", body: "Enforce requester, approver, and payer separation." },
      ],
    },
    workflow: [
      { title: "Set budgets", body: "Model budgets by team, project, category, and entity." },
      { title: "Control at source", body: "Every request checks budget before it commits." },
      { title: "Automate AP", body: "AI matches invoices and flags only exceptions." },
      { title: "Close faster", body: "Reconcile continuously with a clean, live ledger link." },
    ],
    story: {
      quote:
        "We shaved four days off our monthly close and stopped chasing invoices entirely. The control is real-time now, not retrospective.",
      author: "Bharath Agarwal",
      role: "Manager",
      company: "SCM Corp",
      metric: "4 days",
      metricLabel: "cut from monthly close",
    },
    faqs: [
      { q: "How does budget control prevent overspend?", a: "Every requisition and PO validates against the relevant live budget before it commits, so overspend is caught at the request stage - not discovered at reconciliation." },
      { q: "Will invoice automation work with non-PO spend?", a: "Yes. Non-PO invoices are extracted, coded, and routed through your approval workflow automatically, so even unstructured spend stays controlled." },
      { q: "How does this speed up the close?", a: "Touchless matching, real-time actuals, and a live ERP sync mean far less manual reconciliation at period end, cutting days off the close." },
      { q: "Is the audit trail sufficient for compliance?", a: "Every approval, edit, and match is logged immutably and is exportable, giving auditors a self-serve, tamper-evident trail for every transaction." },
    ],
    related: {
      features: ["budgeting", "invoice-automation", "analytics", "approvals"],
      solutions: ["procurement", "executive"],
      industries: ["healthcare"],
    },
    seo: {
      title: "Procurement & AP Software for Finance Teams | RiditStack",
      description: "Give finance real-time control over spend - budgets checked at commitment, touchless invoice matching, and an audit-ready trail. Close faster with RiditStack.",
      keywords: "finance procurement software, ap automation, budget control, spend management for finance, faster close",
    },
  },

  {
    kind: "solution",
    slug: "operations",
    name: "Operations Teams",
    menuLabel: "Operations",
    group: "By department",
    icon: Settings2,
    summary: "Keep buying moving across every team, site, and category.",
    eyebrow: "For operations teams",
    hero: {
      titleLead: "Keep the business buying",
      titleHighlight: "without the bottlenecks.",
      subtitle:
        "Operations keeps everything running - and everything needs buying. RiditStack gives ops a single, fast, controlled way to procure across teams and sites, so nothing stalls waiting on a form or an approval.",
    },
    metrics: [
      { value: "4x", label: "faster approvals" },
      { value: "90%", label: "requests complete on first submit" },
      { value: "Every", label: "site on one process" },
    ],
    pains: {
      heading: "Buying that stalls the business",
      body: "When procurement is slow or scattered, operations pays the price - projects wait on parts, teams route around the process, and consistency across sites is impossible. Ops becomes the expediter of everyone else's purchases.",
      items: [
        { icon: Clock, title: "Slow approvals", body: "Requests wait days in inboxes while work stops." },
        { icon: GitBranch, title: "Inconsistent process", body: "Every team and site buys a different way." },
        { icon: Search, title: "No status visibility", body: "Nobody can see where a request or order stands." },
      ],
    },
    solution: {
      heading: "One fast, consistent way to buy",
      body: "RiditStack gives operations a guided intake and automated approvals that work the same across every team and location. Requests move fast, status is always visible, and control is built in - so buying supports the business instead of blocking it.",
      highlights: [
        "Guided intake for anyone, anywhere",
        "Automated, policy-aware approvals",
        "Live status on every request and order",
        "Consistent process across teams and sites",
      ],
    },
    capabilities: {
      heading: "Operational buying, streamlined",
      subheading: "Everything ops needs to keep procurement fast, visible, and consistent.",
      items: [
        { icon: Zap, title: "Guided intake", body: "One front door for every purchase request." },
        { icon: CheckCheck, title: "Fast approvals", body: "Policy-aware routing with one-click decisions." },
        { icon: Boxes, title: "Inventory & assets", body: "Auto-replenish stock and track every asset." },
        { icon: Eye, title: "Live status", body: "Track requests and POs from raise to receipt." },
        { icon: Globe, title: "Multi-site", body: "Standardize buying across every location." },
        { icon: Bot, title: "AI Copilot", body: "Let anyone self-serve procurement help." },
      ],
    },
    workflow: [
      { title: "Request", body: "Anyone raises a guided request in seconds." },
      { title: "Approve", body: "Policy routes it to the right approver instantly." },
      { title: "Order", body: "Approved requests become POs automatically." },
      { title: "Receive", body: "Track delivery and receipt against every order." },
    ],
    story: {
      quote:
        "Every site now buys the same way. Approvals that took a week happen in a day, and I can see exactly where every order is.",
      author: "Marcus Lee",
      role: "Director of Operations",
      company: "Stratus Logistics",
      metric: "1 day",
      metricLabel: "average approval time",
    },
    faqs: [
      { q: "Can non-procurement staff use it easily?", a: "Yes. Intake is designed for people who don't know procurement - they describe what they need in plain language and the system handles the structure and routing." },
      { q: "Does it work across multiple locations?", a: "Yes. You can standardize one buying process across every site while keeping location-specific budgets, approvers, and rules distinct." },
      { q: "Can we track order and delivery status?", a: "Every request and PO shows live status from raise to receipt, so operations always knows where things stand without chasing." },
      { q: "How does it handle recurring stock needs?", a: "Inventory management tracks stock and raises requisitions automatically at reorder points, so critical items never run out." },
    ],
    related: {
      features: ["intake", "approvals", "inventory", "asset-management"],
      solutions: ["procurement", "supply-chain"],
      industries: ["manufacturing"],
    },
    seo: {
      title: "Procurement Software for Operations Teams | RiditStack",
      description: "Give operations one fast, consistent way to buy across every team and site. RiditStack speeds approvals, shows live status, and keeps buying from blocking the business.",
      keywords: "operations procurement, purchasing software, multi-site procurement, intake and approvals",
    },
  },

  {
    kind: "solution",
    slug: "supply-chain",
    name: "Supply Chain",
    menuLabel: "Supply Chain",
    group: "By department",
    icon: Truck,
    summary: "Resilient, visible sourcing from supplier to shelf.",
    eyebrow: "For supply chain teams",
    hero: {
      titleLead: "Build a supply chain that",
      titleHighlight: "sees around corners.",
      subtitle:
        "Connect sourcing, suppliers, inventory, and risk on one platform so your supply chain is visible end to end. Anticipate disruption, diversify suppliers, and keep goods flowing - with AI watching for risk in the background.",
    },
    metrics: [
      { value: "24/7", label: "supplier risk monitoring" },
      { value: "Real-time", label: "inventory visibility" },
      { value: "End-to-end", label: "sourcing to receipt" },
    ],
    pains: {
      heading: "Blind spots become disruptions",
      body: "Supply chain teams are only as strong as their visibility - and most is stitched from spreadsheets and phone calls. A single supplier's trouble, an unnoticed stockout, or a lapsed certification becomes a disruption you learn about too late.",
      items: [
        { icon: AlertTriangle, title: "Hidden supplier risk", body: "Financial and compliance risk surfaces as disruption." },
        { icon: Boxes, title: "Stockouts & overstock", body: "Inventory and buying don't talk to each other." },
        { icon: Search, title: "No end-to-end view", body: "Sourcing, suppliers, and stock live in separate silos." },
      ],
    },
    solution: {
      heading: "Visibility and resilience, built in",
      body: "RiditStack unifies sourcing, suppliers, contracts, and inventory on one record, with continuous AI risk monitoring. You see the whole chain, diversify before you're forced to, and keep the right stock in the right place.",
      highlights: [
        "Continuous supplier risk monitoring",
        "Real-time inventory tied to purchasing",
        "Sourcing and contracts on one record",
        "Early alerts before disruptions hit",
      ],
    },
    capabilities: {
      heading: "A connected, resilient supply chain",
      subheading: "The capabilities that turn a fragile chain into a visible, resilient one.",
      items: [
        { icon: ShieldCheck, title: "Supplier risk", body: "Monitor financial, compliance, and sanctions risk 24/7." },
        { icon: Route, title: "Strategic sourcing", body: "Run events and diversify your supplier base." },
        { icon: Boxes, title: "Inventory", body: "Real-time stock with automatic replenishment." },
        { icon: Users, title: "Supplier records", body: "Every vendor's performance and documents in one place." },
        { icon: Bell, title: "Early alerts", body: "Get warned before risk becomes disruption." },
        { icon: BarChart3, title: "Spend & performance", body: "Analyze supplier performance and spend together." },
      ],
    },
    workflow: [
      { title: "Map", body: "Bring suppliers, contracts, and inventory onto one record." },
      { title: "Monitor", body: "AI watches supplier risk and stock continuously." },
      { title: "Diversify", body: "Source alternatives before you're forced to." },
      { title: "Flow", body: "Keep goods moving with automatic replenishment." },
    ],
    story: {
      quote:
        "We caught a key supplier's financial trouble months early and had a second source ready. That visibility is worth everything.",
      author: "Elena Rossi",
      role: "Supply Chain Director",
      company: "Vertex Manufacturing",
      metric: "0",
      metricLabel: "unplanned line stoppages last year",
    },
    faqs: [
      { q: "What supplier risks do you monitor?", a: "RiditStack continuously tracks financial health, compliance and certification status, sanctions and watchlists, and document expirations, alerting you proactively to any change." },
      { q: "Does inventory connect to purchasing?", a: "Yes. Stock levels and reorder points drive requisitions automatically, so buying reflects real demand and critical items don't run dry." },
      { q: "Can we manage multiple sourcing events?", a: "Yes. Run RFQs, RFPs, and reverse auctions on structured data, compare bids side by side, and diversify your supplier base with a full decision trail." },
      { q: "How does this improve resilience?", a: "By unifying suppliers, risk, contracts, and inventory with early alerts, RiditStack lets you act on weak signals - diversifying and restocking before a disruption forces your hand." },
    ],
    related: {
      features: ["suppliers", "source-to-pay", "inventory", "contracts"],
      solutions: ["operations", "procurement"],
      industries: ["manufacturing"],
    },
    seo: {
      title: "Supply Chain Procurement Software | RiditStack",
      description: "Connect sourcing, suppliers, inventory, and risk on one platform for end-to-end supply chain visibility. Anticipate disruption and keep goods flowing with RiditStack.",
      keywords: "supply chain software, supplier risk management, procurement supply chain, inventory visibility",
    },
  },

  {
    kind: "solution",
    slug: "executive",
    name: "Executive Leadership",
    menuLabel: "Executive Leadership",
    group: "By department",
    icon: Target,
    summary: "Turn procurement into a measurable driver of margin and control.",
    eyebrow: "For executives",
    hero: {
      titleLead: "Make procurement a lever for",
      titleHighlight: "margin and control.",
      subtitle:
        "For CFOs, COOs, and founders, procurement is one of the largest controllable line items in the business. RiditStack turns it into a source of measurable savings, real-time control, and defensible compliance - visible from the top.",
    },
    metrics: [
      { value: "12%", label: "average savings identified" },
      { value: "100%", label: "spend under management" },
      { value: "Board-ready", label: "reporting on demand" },
    ],
    pains: {
      heading: "A major cost center you can't fully see",
      body: "Procurement touches a huge share of spend, yet leadership often gets only lagging, unreliable numbers. Savings are unverifiable, compliance is a hope, and the function is treated as overhead instead of a lever.",
      items: [
        { icon: Eye, title: "Limited visibility", body: "Leaders see stale, fragmented spend data." },
        { icon: TrendingUp, title: "Unverified savings", body: "Reported savings can't be traced to the P&L." },
        { icon: ShieldCheck, title: "Compliance risk", body: "Policy adherence is assumed, not enforced." },
      ],
    },
    solution: {
      heading: "Control, savings, and proof - from the top",
      body: "RiditStack puts every dollar under management, enforces policy automatically, and ties savings to real transactions. Leadership gets a live, defensible view of spend, risk, and impact - and procurement becomes a strategic function you can measure.",
      highlights: [
        "Every dollar under management and visible",
        "Policy enforced automatically at source",
        "Savings tied to real, auditable transactions",
        "Board-ready reporting whenever you need it",
      ],
    },
    capabilities: {
      heading: "The executive view of procurement",
      subheading: "Everything leadership needs to run procurement as a strategic function.",
      items: [
        { icon: LineChart, title: "Spend intelligence", body: "Live, categorized spend across the whole business." },
        { icon: Target, title: "Realized savings", body: "Savings traced from award to actual spend." },
        { icon: ShieldCheck, title: "Compliance", body: "Enforced policy and a complete audit trail." },
        { icon: Gauge, title: "Efficiency", body: "Automation that cuts cost per transaction." },
        { icon: Bot, title: "AI insight", body: "Ask the platform anything, get sourced answers." },
        { icon: Globe, title: "Multi-entity", body: "One view across subsidiaries and regions." },
      ],
    },
    workflow: [
      { title: "Unify", body: "Bring all spend under one managed platform." },
      { title: "Enforce", body: "Automate policy so control is built in." },
      { title: "Measure", body: "Tie savings and performance to real data." },
      { title: "Report", body: "Give the board defensible numbers on demand." },
    ],
    story: {
      quote:
        "For the first time I can see, control, and prove the impact of procurement. It went from a cost center to a margin lever.",
      author: "Sofia Almeida",
      role: "Chief Financial Officer",
      company: "Lumina Group",
      metric: "$4.2M",
      metricLabel: "realized savings in year one",
    },
    faqs: [
      { q: "How do you measure realized savings?", a: "Because sourcing awards connect to the POs that use them, RiditStack compares awarded rates to actual spend and reports the delta as realized savings - auditable to individual transactions." },
      { q: "Can we see spend across multiple entities?", a: "Yes. RiditStack gives a consolidated view across subsidiaries, regions, and business units while keeping entity-level budgets and controls distinct." },
      { q: "How does it reduce compliance risk?", a: "Policy is enforced automatically at the point of buying, and every decision is logged, so compliance is built into the process rather than assumed." },
      { q: "What reporting do executives get?", a: "Live dashboards plus board-ready exports covering spend, savings, compliance, and supplier performance - available on demand, not weeks later." },
    ],
    related: {
      features: ["analytics", "ai-copilot", "source-to-pay", "budgeting"],
      solutions: ["finance", "procurement"],
      industries: ["technology"],
    },
    seo: {
      title: "Procurement Software for Executives (CFO, COO) | RiditStack",
      description: "Turn procurement into a lever for margin and control. RiditStack puts every dollar under management, enforces policy, and proves savings with board-ready reporting.",
      keywords: "procurement for cfo, executive spend management, procurement savings, board reporting procurement",
    },
  },

  /* ===================== BY COMPANY SIZE ===================== */
  {
    kind: "solution",
    slug: "startups",
    name: "Startups",
    menuLabel: "Startups",
    group: "By company size",
    icon: Rocket,
    summary: "Build disciplined procurement from day one - without the overhead.",
    eyebrow: "For startups",
    hero: {
      titleLead: "Spend like you'll be audited",
      titleHighlight: "one day.",
      subtitle:
        "Set up clean, disciplined procurement before bad habits form. RiditStack gives startups enterprise-grade control and AI automation without the enterprise price or the implementation project - live in days, scaling as you grow.",
    },
    metrics: [
      { value: "< 1 week", label: "to go live" },
      { value: "No", label: "implementation project" },
      { value: "Scales", label: "as you grow" },
    ],
    pains: {
      heading: "Move fast, but don't lose control",
      body: "Early on, spend happens on personal cards, in Slack, and on trust. It works - until it doesn't. Without light-touch discipline, startups build habits that become expensive, un-auditable messes right when investors start looking closely.",
      items: [
        { icon: AlertTriangle, title: "Uncontrolled spend", body: "Purchases happen everywhere with no record." },
        { icon: Search, title: "No visibility", body: "Nobody knows total burn by vendor or category." },
        { icon: Clock, title: "No time for tools", body: "Heavy procurement software is a non-starter." },
      ],
    },
    solution: {
      heading: "Enterprise discipline, startup speed",
      body: "RiditStack gives you just enough process to stay in control - guided requests, simple approvals, and clean spend visibility - with AI doing the heavy lifting. It's live in days and grows into full source-to-pay as you scale.",
      highlights: [
        "Guided requests and lightweight approvals",
        "Clean spend visibility from day one",
        "AI automation without the headcount",
        "Scales into full source-to-pay as you grow",
      ],
    },
    capabilities: {
      heading: "Right-sized for a fast-moving team",
      subheading: "The essentials to stay disciplined without slowing down.",
      items: [
        { icon: Zap, title: "Guided intake", body: "One simple way for anyone to request a purchase." },
        { icon: CheckCheck, title: "Simple approvals", body: "Lightweight rules that grow with you." },
        { icon: BarChart3, title: "Spend visibility", body: "See burn by vendor and category in real time." },
        { icon: Bot, title: "AI Copilot", body: "Automate the busywork with a tiny team." },
        { icon: Wallet, title: "Budget control", body: "Keep runway in check with live budgets." },
        { icon: Plug, title: "Integrations", body: "Connect the finance tools you already use." },
      ],
    },
    workflow: [
      { title: "Start", body: "Set up guided requests and approvals in a day." },
      { title: "Control", body: "Route spend and track budgets automatically." },
      { title: "See", body: "Get real-time visibility into every dollar." },
      { title: "Scale", body: "Turn on sourcing and AP as you grow." },
    ],
    story: {
      quote:
        "We set up RiditStack in an afternoon. Now every purchase has a record and I can see burn by category instantly - investors love it.",
      author: "Jordan Kim",
      role: "Co-founder & COO",
      company: "Quanta AI",
      metric: "1 afternoon",
      metricLabel: "to full setup",
    },
    faqs: [
      { q: "Isn't procurement software overkill for a startup?", a: "Traditional suites are. RiditStack is right-sized: it gives you light-touch control and AI automation you can set up in days, then scales into full source-to-pay only as you need it." },
      { q: "How long does setup take?", a: "Most startups are live within a week - often the same day for basic intake and approvals. There's no implementation project required." },
      { q: "Will it grow with us?", a: "Yes. The same platform expands from simple requests to full sourcing, contracts, and AP automation, so you never have to re-platform as you scale." },
      { q: "Does it connect to our accounting tools?", a: "Yes. RiditStack integrates with common finance and accounting platforms so spend data stays in sync from the start." },
    ],
    related: {
      features: ["intake", "budgeting", "analytics", "ai-copilot"],
      solutions: ["mid-market", "finance"],
      industries: ["technology"],
    },
    seo: {
      title: "Procurement Software for Startups | RiditStack",
      description: "Build disciplined procurement from day one without the overhead. RiditStack gives startups enterprise-grade control and AI automation, live in days and scaling as you grow.",
      keywords: "procurement software for startups, startup spend management, lightweight procurement, budget control startup",
    },
  },

  {
    kind: "solution",
    slug: "mid-market",
    name: "Mid-Market",
    menuLabel: "Mid-Market",
    group: "By company size",
    icon: TrendingUp,
    summary: "Standardize and automate procurement as complexity grows.",
    eyebrow: "For mid-market companies",
    hero: {
      titleLead: "Outgrow the spreadsheets,",
      titleHighlight: "not your control.",
      subtitle:
        "Growth adds sites, teams, and vendors faster than your process can handle. RiditStack standardizes and automates procurement across the whole company - enterprise capability without enterprise cost or complexity.",
    },
    metrics: [
      { value: "73%", label: "faster cycle times" },
      { value: "2 weeks", label: "to first workflow live" },
      { value: "1", label: "process across the company" },
    ],
    pains: {
      heading: "Growth outpacing your process",
      body: "What worked at 50 people breaks at 500. New teams and sites each invent their own way to buy, spend visibility fragments, and the manual work multiplies. You need enterprise discipline - without an enterprise-sized project to get there.",
      items: [
        { icon: GitBranch, title: "Fragmented process", body: "Every team and site buys differently." },
        { icon: RefreshCw, title: "Manual overload", body: "Volume grows faster than your team can key it." },
        { icon: Search, title: "Lost visibility", body: "Spend data scatters as you scale." },
      ],
    },
    solution: {
      heading: "Enterprise capability, right-sized",
      body: "RiditStack standardizes procurement across every team and site, automates the transactional work with AI, and gives you one clear view of spend - without the cost, complexity, or timeline of a legacy enterprise suite.",
      highlights: [
        "One standard process across the company",
        "AI automation for approvals and AP",
        "Unified spend visibility and analytics",
        "Fast rollout, no multi-quarter project",
      ],
    },
    capabilities: {
      heading: "Everything you need to scale procurement",
      subheading: "Full procurement capability that deploys in weeks, not quarters.",
      items: [
        { icon: Zap, title: "Guided intake", body: "One front door across every team and site." },
        { icon: CheckCheck, title: "Approval workflows", body: "Standardized, policy-aware routing." },
        { icon: CheckCheck, title: "Invoice automation", body: "Touchless AP that scales with volume." },
        { icon: BarChart3, title: "Spend analytics", body: "One view of spend across the company." },
        { icon: Users, title: "Supplier management", body: "Consolidate and manage every vendor." },
        { icon: Plug, title: "ERP integration", body: "Sync with your finance stack in days." },
      ],
    },
    workflow: [
      { title: "Standardize", body: "Roll out one buying process everywhere." },
      { title: "Automate", body: "Let AI handle approvals and invoices." },
      { title: "Consolidate", body: "Unify suppliers and spend data." },
      { title: "Optimize", body: "Act on analytics to drive savings." },
    ],
    story: {
      quote:
        "We went from twelve ways of buying to one, across six sites, in a month. The manual work just evaporated.",
      author: "Rachel Turner",
      role: "Director of Procurement",
      company: "Apex Foods",
      metric: "6 sites",
      metricLabel: "unified in one month",
    },
    faqs: [
      { q: "How does mid-market pricing compare to enterprise suites?", a: "RiditStack delivers enterprise-grade capability at a fraction of the cost and complexity of legacy suites, with no six-month implementation - you see value in weeks." },
      { q: "Can we roll out across multiple sites?", a: "Yes. You standardize one process across every team and location while keeping site-specific budgets, approvers, and rules distinct." },
      { q: "How long does implementation take?", a: "Most mid-market companies are live on their first workflow in about two weeks and expand from there, category by category." },
      { q: "Does it integrate with our ERP?", a: "Yes. Prebuilt connectors and an open API sync POs, invoices, suppliers, and budgets with your ERP bidirectionally, typically live in days." },
    ],
    related: {
      features: ["procure-to-pay", "invoice-automation", "analytics", "integrations"],
      solutions: ["enterprise", "operations"],
      industries: ["retail"],
    },
    seo: {
      title: "Procurement Software for Mid-Market Companies | RiditStack",
      description: "Standardize and automate procurement as you scale. RiditStack gives mid-market companies enterprise capability without the cost, complexity, or multi-quarter rollout.",
      keywords: "mid-market procurement software, scaling procurement, procurement automation, multi-site purchasing",
    },
  },

  {
    kind: "solution",
    slug: "enterprise",
    name: "Enterprise",
    menuLabel: "Enterprise",
    group: "By company size",
    icon: Building2,
    summary: "Global scale, deep control, and AI - without legacy suite complexity.",
    eyebrow: "For enterprise",
    hero: {
      titleLead: "Global procurement control,",
      titleHighlight: "finally without the bloat.",
      subtitle:
        "RiditStack delivers the scale, security, and control global enterprises demand - multi-entity, multi-currency, deeply configurable - with modern AI and a rollout measured in weeks, not the years legacy suites take.",
    },
    metrics: [
      { value: "Multi-entity", label: "global by design" },
      { value: "SOC 2 · ISO", label: "enterprise security" },
      { value: "100%", label: "spend under management" },
    ],
    pains: {
      heading: "Legacy suites that cost years and millions",
      body: "Enterprise procurement suites promise control and deliver complexity - multi-year implementations, rigid workflows, and interfaces nobody wants to use. Adoption suffers, maverick spend returns, and the AI is a bolted-on afterthought.",
      items: [
        { icon: Clock, title: "Endless implementation", body: "Legacy rollouts take years and armies of consultants." },
        { icon: AlertTriangle, title: "Poor adoption", body: "Clunky tools drive users back to email and cards." },
        { icon: Search, title: "Bolt-on AI", body: "Intelligence is an add-on, not the foundation." },
      ],
    },
    solution: {
      heading: "Enterprise power, modern experience",
      body: "RiditStack combines the depth global enterprises need - multi-entity, multi-currency, granular permissions, deep configurability - with an experience people actually use and AI built into the core. The result: real control, real adoption, in a fraction of the time.",
      highlights: [
        "Multi-entity, multi-currency, multi-language",
        "Granular permissions and configurable workflows",
        "Enterprise security, SSO, and audit controls",
        "AI built into the core, not bolted on",
      ],
    },
    capabilities: {
      heading: "Built for global scale and control",
      subheading: "The depth, security, and intelligence enterprise procurement demands.",
      items: [
        { icon: Globe, title: "Multi-entity", body: "Consolidated global view with local control." },
        { icon: Lock, title: "Enterprise security", body: "SSO, SCIM, granular roles, and audit logs." },
        { icon: Route, title: "Source-to-pay", body: "The full lifecycle from sourcing to payment." },
        { icon: ShieldCheck, title: "Compliance", body: "Enforced policy and complete auditability." },
        { icon: Bot, title: "AI throughout", body: "Document AI, copilot, and matching built in." },
        { icon: Database, title: "Open API", body: "Integrate deeply with your enterprise systems." },
      ],
    },
    workflow: [
      { title: "Design", body: "Configure entities, policies, and workflows to fit." },
      { title: "Integrate", body: "Connect ERP, identity, and finance systems." },
      { title: "Roll out", body: "Deploy region by region in weeks, not years." },
      { title: "Govern", body: "Run global procurement with real-time control." },
    ],
    story: {
      quote:
        "We replaced a legacy suite that took three years to implement. RiditStack was live across four regions in a quarter - and people actually use it.",
      author: "Thomas Wright",
      role: "Global Head of Procurement",
      company: "Northwind Industries",
      metric: "4 regions",
      metricLabel: "live in one quarter",
    },
    faqs: [
      { q: "Does RiditStack support multi-entity, multi-currency operations?", a: "Yes. RiditStack is built for global operations with multi-entity, multi-currency, and multi-language support, giving you a consolidated view with local control." },
      { q: "What security and compliance standards do you meet?", a: "RiditStack provides enterprise-grade security including SSO, SCIM provisioning, granular role-based access, encryption, and complete audit logging, aligned to SOC 2 and ISO 27001 practices." },
      { q: "How does implementation compare to legacy suites?", a: "Rather than multi-year rollouts, RiditStack deploys region by region in weeks. Its modern, usable experience drives the adoption legacy suites struggle to achieve." },
      { q: "Can it integrate with our enterprise systems?", a: "Yes. Prebuilt connectors plus an open REST API and webhooks let you integrate deeply and bidirectionally with your ERP, identity, and finance systems." },
    ],
    related: {
      features: ["source-to-pay", "integrations", "ai-procurement", "analytics"],
      solutions: ["executive", "mid-market"],
      industries: ["manufacturing"],
    },
    seo: {
      title: "Enterprise Procurement Software | RiditStack",
      description: "Global scale, deep control, and built-in AI - without legacy suite complexity. RiditStack delivers multi-entity, secure, configurable procurement live in weeks, not years.",
      keywords: "enterprise procurement software, global procurement, source to pay enterprise, multi-entity procurement",
    },
  },
]

export const solutionSlugs = solutions.map((s) => s.slug)

export function getSolution(slug: string): MarketingPage | undefined {
  return solutions.find((s) => s.slug === slug)
}

export const solutionGroups = ["By department", "By company size"] as const

export function solutionsByGroup(group: string): MarketingPage[] {
  return solutions.filter((s) => s.group === group)
}
