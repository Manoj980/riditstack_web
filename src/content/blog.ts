export type BlogBlock =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  author: string
  /** Optional author role/affiliation shown under the byline on the article page */
  authorTitle?: string
  date: string
  readTime: string
  category: string
  featured?: boolean
  body: BlogBlock[]
}

export const posts: BlogPost[] = [
  {
    slug: "future-of-ai-procurement-india-2026",
    title: "The Future of AI in Procurement: 5 Trends Shaping Indian Enterprises",
    excerpt:
      "From GST-aware invoice automation to GeM and ONDC, artificial intelligence is rewriting how Indian organisations buy. Here are the five trends procurement and finance leaders should track this year.",
    author: "Suman Kumar",
    authorTitle: "Director, RiditStack, Bangalore, India",
    date: "June 18, 2026",
    readTime: "9 min read",
    category: "AI & Automation",
    featured: true,
    body: [
      {
        kind: "p",
        text: "For a long time, procurement in most Indian companies was treated as a back-office function, a place where purchase orders were raised, invoices were chased, and vendors were paid a little later than promised. That picture is changing quickly. Rising input costs, tighter compliance under GST, the growth of digital public infrastructure like the Government e-Marketplace (GeM) and ONDC, and the arrival of genuinely useful AI have together turned procurement into one of the highest-leverage functions a business can invest in.",
      },
      {
        kind: "p",
        text: "At RiditStack, we work with procurement and finance teams across manufacturing, healthcare, retail, and services, and we see the same shifts repeating. Here are the five trends we believe will define AI in Indian procurement over the next few years, and what they mean for the way you buy.",
      },
      { kind: "h2", text: "1. AI copilots move from novelty to daily habit" },
      {
        kind: "p",
        text: "The first wave of AI in procurement was about dashboards and predictions. The current wave is conversational. A procurement copilot now sits inside the buying workflow and answers questions in plain language: which suppliers can deliver this grade of steel to our Pune plant within two weeks, what did we pay for the same item last quarter, and which pending approvals are blocking month-end. For teams that operate across multiple plants and states, this collapses hours of spreadsheet work into a single question.",
      },
      {
        kind: "p",
        text: "The important shift is trust. Indian buyers are pragmatic; they adopt a tool only when it saves real time without creating new risk. The copilots that win are the ones grounded in the company's own contracts, price history, and policies, so the answer is specific to your business rather than a generic suggestion.",
      },
      { kind: "h2", text: "2. GST-aware invoice automation becomes the norm" },
      {
        kind: "p",
        text: "Nowhere is the Indian context more visible than in accounts payable. With mandatory e-invoicing now covering a large share of B2B transactions, the invoice is no longer a PDF to be typed in by hand. AI reads the invoice, validates the GSTIN, checks the Invoice Reference Number, matches it three ways against the purchase order and goods receipt, and flags mismatches before payment.",
      },
      {
        kind: "p",
        text: "The payoff is not only speed. Every rupee of input tax credit that goes unclaimed because of a mismatch between your books and the supplier's GSTR filings is money left on the table. AI-driven matching protects that credit, reduces the reconciliation burden at month-end, and gives finance a clean audit trail.",
      },
      { kind: "h2", text: "3. Digital public infrastructure reshapes how India buys" },
      {
        kind: "p",
        text: "GeM has already transformed public procurement, and its influence is spreading into the private sector's expectations of transparency and speed. ONDC is doing something similar for commerce more broadly, unbundling buyers and sellers from closed platforms. For enterprise procurement, this means richer catalogues, more discoverable suppliers, and price signals that were previously invisible.",
      },
      {
        kind: "p",
        text: "AI sits on top of this abundance. When a buyer has access to thousands of catalogue items and hundreds of sellers, the hard part is no longer finding options but choosing well. Recommendation models that weigh price, lead time, past performance, and compliance status help teams make defensible decisions at scale.",
      },
      { kind: "h2", text: "4. Supplier risk intelligence for MSME-heavy supply chains" },
      {
        kind: "p",
        text: "Indian supply chains lean heavily on micro, small, and medium enterprises. That is a strength in flexibility and cost, but it also concentrates risk, because a small supplier is more exposed to cash-flow shocks, a single lost customer, or a compliance lapse. The MSME payment rules, which require dues to registered small enterprises to be cleared within a defined window, add a legal dimension that finance teams cannot ignore.",
      },
      {
        kind: "p",
        text: "AI-based supplier risk models pull together financial signals, GST filing regularity, delivery history, and public information to give an early warning when a vendor's health is deteriorating. Instead of discovering a problem when a critical part fails to arrive, procurement gets a nudge weeks earlier, with enough time to line up an alternative.",
      },
      { kind: "h2", text: "5. Vernacular, mobile-first, and built for how India works" },
      {
        kind: "p",
        text: "A plant supervisor in Coimbatore, a store manager in Indore, and a site engineer in Guwahati all raise purchase requests, but they do not all work at a desk with a laptop in English. The next generation of procurement tools is mobile-first and increasingly multilingual, so a request can be raised from a phone, approved on the move, and tracked without friction.",
      },
      {
        kind: "p",
        text: "This is not a cosmetic feature. Adoption is the single biggest reason procurement software succeeds or fails. When the tool meets people where they are, spend that used to happen off-system, through informal WhatsApp messages and local cash purchases, comes back under control, and that visibility is where savings begin.",
      },
      { kind: "h2", text: "What this means for Indian enterprises" },
      {
        kind: "p",
        text: "None of these trends require a company to rip out its ERP or bet on unproven technology. The practical path is incremental: start with the process that hurts most, usually invoice matching or approval delays, prove the value in rupees, and expand from there. The organisations that treat AI in procurement as a capability to build rather than a product to buy will compound the advantage year after year.",
      },
      {
        kind: "p",
        text: "Procurement in India is finally getting the attention it deserves, and AI is the reason. The teams that move now, with a clear focus on compliance, cost, and adoption, will be the ones setting the benchmark that everyone else measures against.",
      },
    ],
  },
  {
    slug: "reduce-procurement-costs-india",
    title: "How Indian Enterprises Can Cut Procurement Costs by 30% in Six Months",
    excerpt:
      "A practical, India-specific playbook for taking cost out of procurement, from reclaiming GST input credit to consolidating vendors and taming tail spend, without disrupting operations.",
    author: "Manish Mishra",
    authorTitle: "Director, RiditStack, Bangalore, India",
    date: "June 12, 2026",
    readTime: "8 min read",
    category: "Procurement Best Practices",
    body: [
      {
        kind: "p",
        text: "A thirty percent cost reduction sounds like a headline number that only works in a slide deck. In practice, most Indian enterprises are carrying exactly that much avoidable cost in their procurement, spread across leaked GST credit, fragmented vendor bases, uncontrolled tail spend, and prices that never get renegotiated. You do not need a transformation programme to recover it. You need visibility, discipline, and a six-month plan. Here is how the best teams do it.",
      },
      { kind: "h2", text: "Start with spend visibility, because you cannot cut what you cannot see" },
      {
        kind: "p",
        text: "The first month is not about negotiation; it is about seeing clearly. Pull twelve months of purchase and payment data into one place and classify it: what you bought, from whom, in which state, under which GST rate, and through which cost centre. Most organisations are surprised by what surfaces. The same item is bought from five suppliers at three different prices. A category everyone assumed was small turns out to be a major line. Off-contract buying is far higher than anyone admitted.",
      },
      {
        kind: "p",
        text: "This classified view is the foundation. Every saving that follows comes from a decision you can now make with evidence rather than instinct.",
      },
      { kind: "h2", text: "Consolidate the vendor base" },
      {
        kind: "p",
        text: "Indian companies often accumulate suppliers the way a desk accumulates paper, one at a time, without ever clearing out. A mid-sized manufacturer might have eight hundred active vendors when a hundred and fifty would serve better. Every extra vendor carries hidden cost: onboarding, compliance checks, split volumes that kill your negotiating leverage, and more invoices to process.",
      },
      {
        kind: "p",
        text: "Rank vendors by spend and performance, then consolidate volume with the strongest in each category. Fewer, deeper relationships give you better prices, more reliable delivery, and a supplier who takes your business seriously because it matters to them.",
      },
      { kind: "h2", text: "Attack tail spend deliberately" },
      {
        kind: "p",
        text: "Tail spend, the long list of small, one-off purchases that individually look trivial, often accounts for a fifth of total spend and almost none of the attention. It is where maverick buying hides, where prices are never checked, and where GeM and catalogue buying can make an immediate difference. Routing tail spend through approved catalogues with pre-negotiated rates removes both the price leakage and the administrative drag of processing hundreds of tiny purchase orders.",
      },
      { kind: "h2", text: "Reclaim every rupee of GST input credit" },
      {
        kind: "p",
        text: "This is the uniquely Indian lever, and it is often the fastest. Input tax credit is only as good as the match between your records and your suppliers' GST filings. When a supplier files late, files incorrectly, or you fail to match the invoice to a purchase order and goods receipt, the credit is delayed or lost. Across a year, in a business of any size, this quietly runs into serious money.",
      },
      {
        kind: "p",
        text: "Tightening invoice matching and monitoring supplier filing behaviour turns a leak into recovered cash. It also improves working capital, because credit you actually claim reduces the tax you pay out.",
      },
      { kind: "h2", text: "Negotiate with data, not gut" },
      {
        kind: "p",
        text: "Once you can see price history across suppliers and time, renegotiation stops being a matter of who argues better. You walk into the conversation knowing what the market pays, what you paid last year, and what volume you can commit. Suppliers respect a buyer who negotiates from facts, and the outcomes are both larger and more durable.",
      },
      { kind: "h2", text: "A realistic six-month roadmap" },
      {
        kind: "ul",
        items: [
          "Month 1: Consolidate and classify spend data; identify the top categories and biggest leaks.",
          "Month 2: Rationalise the vendor base and set up approved catalogues for tail spend.",
          "Month 3: Fix invoice matching and start recovering GST input credit systematically.",
          "Months 4 to 5: Renegotiate the largest categories using price and volume data.",
          "Month 6: Lock in savings with contracts, approval controls, and monthly tracking so gains do not erode.",
        ],
      },
      {
        kind: "p",
        text: "Thirty percent is not a promise you make on day one; it is the sum of many disciplined moves. But the moves are known, the data exists inside your own systems, and the tools to act on it are mature. The organisations that treat cost reduction as an ongoing operating habit, rather than a one-time drive, are the ones that keep the savings long after the project is over.",
      },
    ],
  },
  {
    slug: "case-study-pune-auto-components-savings",
    title: "Case Study: How a Pune Auto-Components Maker Saved ₹15 Crore a Year",
    excerpt:
      "A mid-sized manufacturer supplying India's auto industry cut costs, sped up approvals, and protected its GST credit after moving procurement onto a single intelligent platform. Here is how.",
    author: "Dr. Purushottam Arya",
    authorTitle: "Assistant Professor, Delhi School of Economics",
    date: "June 6, 2026",
    readTime: "6 min read",
    category: "Case Studies",
    body: [
      {
        kind: "p",
        text: "The company in this study is a Pune-based auto-components manufacturer with three plants across Maharashtra, roughly two thousand employees, and annual procurement spend in the range of two hundred crore rupees. It supplies several of India's largest vehicle makers, which means quality and on-time delivery are not negotiable. Names and exact figures have been adjusted, but the story is representative of what we see across mid-sized Indian manufacturing.",
      },
      { kind: "h2", text: "The problem: growth had outrun the process" },
      {
        kind: "p",
        text: "As the business grew, procurement stayed manual. Purchase requests moved by email and paper. Approvals waited on people who were travelling between plants. Each site bought independently, so the same fasteners, lubricants, and packaging were sourced from different vendors at different prices. Invoices were entered by hand, and reconciliation at month-end was a scramble that regularly delayed the GST return.",
      },
      {
        kind: "p",
        text: "The consequences were familiar. Prices drifted upward because nobody could see that a sister plant was paying less. Urgent purchases bypassed process entirely. And input tax credit slipped through the cracks whenever an invoice did not match cleanly to a purchase order.",
      },
      { kind: "h2", text: "The rollout" },
      {
        kind: "p",
        text: "The company moved procurement onto a single platform over four months, deliberately choosing a phased approach rather than a big-bang switch. The sequence mattered.",
      },
      {
        kind: "ul",
        items: [
          "First, all three plants' spend was consolidated and classified, exposing duplicate vendors and price gaps.",
          "Next, digital purchase requisitions and mobile approvals replaced email, so a manager could clear a request from a phone between plant visits.",
          "Then, AI-based invoice matching was switched on, validating GSTIN and matching every invoice three ways before payment.",
          "Finally, spend analytics gave the leadership a live view of cost by plant, category, and vendor.",
        ],
      },
      { kind: "h2", text: "The results" },
      {
        kind: "p",
        text: "Within a year, the company recorded annual savings of about fifteen crore rupees, a little over seven percent of total spend. The savings came from several sources rather than one dramatic cut.",
      },
      {
        kind: "ul",
        items: [
          "Vendor consolidation and cross-plant price alignment delivered the largest share, as volume moved to the best-priced suppliers.",
          "Tighter invoice matching recovered GST input credit that had previously been lost to mismatches and late filings.",
          "Approval cycle time fell from an average of five days to under one, which reduced expedited-freight charges and production stoppages.",
          "Off-contract, maverick buying dropped sharply once catalogues and controls were in place.",
        ],
      },
      { kind: "h2", text: "The lessons" },
      {
        kind: "p",
        text: "Three lessons stand out. First, the biggest early win was visibility, not technology; simply seeing all three plants' spend together changed decisions immediately. Second, mobile approvals mattered more than expected, because the real bottleneck was people on the move, not the software. Third, the GST credit recovery paid for the platform on its own, which made the business case easy for the CFO to approve.",
      },
      {
        kind: "p",
        text: "The company's procurement head summed it up simply: the team stopped spending its days chasing paper and started spending it on decisions that saved money. That shift, from administration to strategy, is the real return, and it compounds every year.",
      },
    ],
  },
  {
    slug: "supplier-risk-management-india",
    title: "A Complete Guide to Supplier Risk Management for Indian Businesses",
    excerpt:
      "Supplier risk looks different in an MSME-heavy, GST-governed economy. A practical framework for identifying, assessing, and mitigating vendor risk without slowing your business down.",
    author: "Dr. Vishal Sinha",
    authorTitle: "Senior Data Scientist, Epassi, Finland",
    date: "May 29, 2026",
    readTime: "10 min read",
    category: "Industry Insights",
    body: [
      {
        kind: "p",
        text: "Every business depends on its suppliers, but few manage the risk that dependence creates until something breaks. In India, supplier risk carries a particular shape: supply chains lean heavily on micro, small, and medium enterprises, compliance is governed by GST and the MSME payment rules, and a single disruption can ripple through a tightly linked network. This guide lays out a practical framework built for that reality.",
      },
      { kind: "h2", text: "Why supplier risk is different in India" },
      {
        kind: "p",
        text: "A large share of Indian vendors are small firms with thin cash buffers. That flexibility keeps costs low, but it also means a supplier can be one delayed payment or one lost customer away from trouble. Layer on the regulatory dimension, where dues to registered small enterprises must be cleared within a legally defined window, and supplier risk becomes a finance and compliance issue as much as an operational one.",
      },
      { kind: "h2", text: "Financial and compliance risk" },
      {
        kind: "p",
        text: "The clearest early-warning signals in India are financial and regulatory. A supplier who begins filing GST returns late or irregularly is often signalling cash-flow stress, and that stress threatens both their delivery to you and your input tax credit. Monitoring filing regularity, alongside basic financial health indicators, gives you a leading rather than lagging view.",
      },
      {
        kind: "ul",
        items: [
          "Track GST filing regularity and flag suppliers who slip.",
          "Watch for your own overdue payments to MSME-registered vendors, which carry legal and interest consequences.",
          "Keep vendor master data clean: verified GSTIN, PAN, bank details, and MSME registration status.",
        ],
      },
      { kind: "h2", text: "Operational and delivery risk" },
      {
        kind: "p",
        text: "Beyond finances, the day-to-day question is whether the supplier can deliver the right quality, in the right quantity, on time, repeatedly. Delivery history is the best predictor. A vendor whose on-time performance is quietly slipping, or whose reject rate is creeping up, is telling you something before a major failure occurs. Concentration is its own risk: if a critical component has a single source, one problem there stops your line.",
      },
      { kind: "h2", text: "ESG and regulatory exposure" },
      {
        kind: "p",
        text: "As Indian enterprises supply global customers and larger domestic buyers, expectations around environmental and social compliance are rising. A supplier's labour practices, environmental clearances, and safety record are increasingly your concern too, because your customers will ask. Building basic ESG questions into onboarding and periodic review keeps you ahead of both regulation and reputational risk.",
      },
      { kind: "h2", text: "Building a supplier risk framework" },
      {
        kind: "p",
        text: "A workable framework does not need to be complex. It needs to be consistent and to run continuously rather than once a year. The steps below scale from a small business to a large enterprise.",
      },
      {
        kind: "ul",
        items: [
          "Segment suppliers by criticality, so you spend the most attention where a failure would hurt most.",
          "Score each supplier on financial, compliance, delivery, and ESG dimensions.",
          "Automate monitoring so scores update from live signals like GST filings and delivery performance, not manual surveys.",
          "Define clear actions for each risk level, from closer watch to qualifying an alternative source.",
          "Review critical suppliers regularly and keep the framework itself under review.",
        ],
      },
      { kind: "h2", text: "From reactive to proactive" },
      {
        kind: "p",
        text: "The difference between a business that manages supplier risk well and one that does not is timing. The unprepared discover a problem when the part fails to arrive or the credit is denied. The prepared get an early signal, weeks ahead, and use the time to act calmly. Modern procurement platforms make this practical by turning scattered signals into a single, continuously updated view of every vendor.",
      },
      {
        kind: "p",
        text: "Supplier risk management is not about avoiding small suppliers or wrapping every purchase in bureaucracy. It is about knowing your supply base well enough to trust it, and having a plan for the day a link weakens. In an economy built on interlinked MSMEs, that knowledge is a genuine competitive advantage.",
      },
    ],
  },
  {
    slug: "procleo-spend-analytics-india",
    title: "New in ProcLeo: Spend Analytics Built for Indian Finance Teams",
    excerpt:
      "Our redesigned analytics gives Indian finance and procurement teams a GST-aware, entity-wise view of spend, with AI that surfaces savings and leakage automatically.",
    author: "Manish Mishra",
    authorTitle: "Director, RiditStack, Bangalore, India",
    date: "May 22, 2026",
    readTime: "5 min read",
    category: "Product Updates",
    body: [
      {
        kind: "p",
        text: "Analytics is only useful when it answers the questions people actually ask. For Indian finance teams, those questions are specific: how much of our spend is claimable input credit, how does cost compare across our state entities, and where is money leaking. The new ProcLeo spend analytics is built around exactly these questions, not a generic global template.",
      },
      { kind: "h2", text: "A GST-aware breakdown of every rupee" },
      {
        kind: "p",
        text: "Every view in the new analytics understands GST. Spend is broken down by tax rate, by claimable and non-claimable credit, and by supplier filing status, so finance can see at a glance how much input tax credit is at stake and how much is at risk because of supplier mismatches. This turns a month-end reconciliation headache into a live, always-current picture.",
      },
      { kind: "h2", text: "State-wise and entity-wise views" },
      {
        kind: "p",
        text: "Indian enterprises rarely operate as a single legal entity. They run multiple GST registrations across states and often several companies under one group. The redesigned dashboard lets you slice spend by state, by entity, and by cost centre, then roll it back up to a group view. Leaders can finally compare what different plants and regions pay for the same categories, which is where cross-entity savings hide.",
      },
      { kind: "h2", text: "AI that points to savings and leakage" },
      {
        kind: "p",
        text: "The analytics does not just display numbers; it interprets them. AI flags duplicate vendors, price variances for the same item across locations, tail-spend concentrations, and invoices that failed to match. Instead of hunting for problems, your team is handed a ranked list of opportunities with the rupee value attached.",
      },
      {
        kind: "ul",
        items: [
          "Claimable versus at-risk input tax credit, updated continuously.",
          "Price variance alerts when the same item costs more in one entity than another.",
          "Tail-spend and maverick-buying detection with suggested catalogue alternatives.",
          "Supplier filing-status monitoring tied directly to your payable invoices.",
        ],
      },
      { kind: "h2", text: "Built for how Indian teams work" },
      {
        kind: "p",
        text: "The dashboards are fast, mobile-friendly, and exportable in the formats auditors and management actually use. A CFO can check group spend from a phone, a plant head can see their own numbers without wading through everyone else's, and a compliance manager can pull an audit-ready trail in a couple of clicks.",
      },
      { kind: "h2", text: "Getting started" },
      {
        kind: "p",
        text: "Existing ProcLeo customers will find the new analytics available now, with no migration required. For teams evaluating a move, the analytics alone often makes the business case, because the leakage it surfaces in the first month tends to more than cover the cost of the platform. The most valuable report is usually the one you did not know you needed until you saw it.",
      },
    ],
  },
  {
    slug: "business-case-procurement-automation-india",
    title: "Building a Business Case for Procurement Automation in India",
    excerpt:
      "How to calculate ROI in rupees and win over the CFO, IT, and operations, with a practical model tailored to Indian cost structures and compliance realities.",
    author: "Dr. Purushottam Arya",
    authorTitle: "Assistant Professor, Delhi School of Economics",
    date: "May 15, 2026",
    readTime: "7 min read",
    category: "Procurement Best Practices",
    body: [
      {
        kind: "p",
        text: "A good idea does not get funded on enthusiasm; it gets funded on numbers. If you want your organisation to invest in procurement automation, you need a business case that speaks the language of the people who sign the cheque. In India, that means rupee savings, GST and compliance benefits, and a clear answer to the objections that finance, IT, and operations will raise. Here is how to build one that holds up.",
      },
      { kind: "h2", text: "Quantify the current cost of doing nothing" },
      {
        kind: "p",
        text: "Start by making the status quo visible. Add up the fully loaded cost of manual procurement: the hours spent raising and chasing purchase orders, the people entering invoices by hand, the delays that force expedited freight, and the errors that trigger rework. Most teams have never totalled these, and the number is usually larger than expected. This is the baseline your case improves on.",
      },
      { kind: "h2", text: "Count the hard-rupee savings" },
      {
        kind: "p",
        text: "The credible business case leads with savings you can defend. In the Indian context, four sources tend to dominate.",
      },
      {
        kind: "ul",
        items: [
          "Price savings from vendor consolidation and data-driven negotiation, typically the largest line.",
          "Recovered GST input tax credit that was previously lost to invoice mismatches and late supplier filings.",
          "Lower processing cost as automation removes manual data entry and reconciliation.",
          "Reduced maverick and off-contract spend once catalogues and approval controls are in place.",
        ],
      },
      { kind: "h2", text: "Do not ignore the soft benefits" },
      {
        kind: "p",
        text: "Faster approvals, fewer production stoppages, cleaner audits, and a procurement team freed from paperwork to focus on strategy are real, even if they are harder to put a single number on. Present them as supporting evidence rather than the headline, so the case rests on hard numbers but is strengthened by the qualitative gains.",
      },
      { kind: "h2", text: "Answer the objections before they are raised" },
      {
        kind: "p",
        text: "Every stakeholder has a predictable concern. The CFO worries about payback period and whether savings are real. IT worries about integration with the existing ERP and data security. Operations worries about disruption during rollout. Address each directly: show a payback measured in months not years, confirm that the platform integrates with your systems, and lay out a phased rollout that keeps the business running.",
      },
      { kind: "h2", text: "A sample ROI in rupees" },
      {
        kind: "p",
        text: "Consider a company with a hundred crore rupees of annual procurement spend. A conservative five percent price and process saving is five crore rupees a year. Recovered input tax credit and reduced maverick spend might add another one to two crore. Against a platform and implementation cost that is a fraction of that, the payback lands well inside a year. When the numbers are laid out this plainly, the decision tends to make itself.",
      },
      {
        kind: "p",
        text: "The strongest business cases are honest ones: conservative on savings, clear about costs, and specific about how the value will be tracked after go-live. Commit to measuring the results monthly and reporting them, and you turn a one-time approval into lasting credibility for the next investment you propose.",
      },
    ],
  },
  {
    slug: "state-of-procurement-technology-india-2026",
    title: "The State of Procurement Technology in India, 2026",
    excerpt:
      "Our annual read on how Indian organisations are adopting procurement technology, the role of digital public infrastructure, and the barriers still holding many teams back.",
    author: "Dr. Vishal Sinha",
    authorTitle: "Senior Data Scientist, Epassi, Finland",
    date: "May 8, 2026",
    readTime: "11 min read",
    category: "Industry Insights",
    body: [
      {
        kind: "p",
        text: "Procurement technology in India has crossed an inflection point. What was once the preserve of large enterprises with deep budgets is now within reach of mid-sized and even smaller firms, driven down in cost by cloud delivery and pulled forward by compliance requirements that make manual processes untenable. This is our annual view of where the market stands, based on our work with organisations across sectors.",
      },
      { kind: "h2", text: "Digital public infrastructure is the quiet catalyst" },
      {
        kind: "p",
        text: "No account of Indian procurement is complete without GeM and ONDC. GeM has reshaped how the public sector buys, setting a benchmark for transparency and speed that private buyers increasingly expect of themselves. ONDC is unbundling commerce more broadly, making sellers discoverable outside closed platforms. Together they are expanding the universe of suppliers and price signals available to any buyer, and technology is what turns that abundance into better decisions.",
      },
      { kind: "h2", text: "AI adoption is real but uneven" },
      {
        kind: "p",
        text: "Interest in AI is universal; deployment is not. The leaders have moved past pilots into daily use, with invoice automation and conversational copilots doing real work. A larger group is experimenting. And a long tail is still running procurement on spreadsheets and email. The gap between these groups is widening, because the benefits of automation compound: the more you digitise, the more data you have, and the more useful AI becomes.",
      },
      { kind: "h2", text: "Compliance is forcing the pace" },
      {
        kind: "p",
        text: "For many Indian organisations, the trigger to modernise is not ambition but obligation. Mandatory e-invoicing, GST reconciliation, and the MSME payment rules have raised the cost of manual processes to the point where automation becomes the cheaper option. Compliance, in other words, has become procurement technology's most effective salesperson.",
      },
      {
        kind: "ul",
        items: [
          "E-invoicing has made structured, machine-readable invoices the norm rather than the exception.",
          "GST reconciliation pressure is driving demand for automated three-way matching.",
          "MSME payment timelines are pushing finance to get visibility into payables far earlier.",
        ],
      },
      { kind: "h2", text: "The barriers that remain" },
      {
        kind: "p",
        text: "Adoption is not frictionless. The most common barriers we see are not technical but human and organisational: change resistance from teams comfortable with old habits, concern about integrating new tools with legacy ERP systems, and a shortage of people who understand both procurement and technology. Cost is less of a barrier than it was, but the fear of a disruptive implementation still holds many teams back.",
      },
      {
        kind: "p",
        text: "The organisations that overcome these barriers share a pattern. They start small and prove value quickly, they choose tools that integrate rather than replace, and they invest in adoption as seriously as they invest in the software itself. A tool nobody uses saves nothing, however capable it is.",
      },
      { kind: "h2", text: "What comes next" },
      {
        kind: "p",
        text: "Looking ahead, we expect three things. AI copilots will become a standard part of the buying workflow rather than a differentiator. Mobile-first and multilingual interfaces will pull more of India's dispersed, on-the-ground spend back onto system. And the line between procurement, finance, and compliance will continue to blur, because in the Indian context they are really one connected problem.",
      },
      {
        kind: "p",
        text: "The direction of travel is clear. Procurement in India is becoming faster, more transparent, and more intelligent, and the technology to get there is mature and affordable. The only real question left for most organisations is not whether to modernise, but how quickly they can.",
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export const featuredPost: BlogPost = posts.find((p) => p.featured) ?? posts[0]
export const otherPosts: BlogPost[] = posts.filter((p) => p !== featuredPost)
