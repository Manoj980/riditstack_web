import {
  LayoutDashboard,
  FileText,
  ShoppingCart,
  Receipt,
  Users,
  BarChart3,
  Search,
  Bell,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Check,
} from "lucide-react"

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileText, label: "Requests" },
  { icon: ShoppingCart, label: "Purchase orders" },
  { icon: Receipt, label: "Invoices" },
  { icon: Users, label: "Suppliers" },
  { icon: BarChart3, label: "Analytics" },
]

const kpis = [
  { label: "Spend under management", value: "$8.42M", delta: "+12.4%", up: true },
  { label: "Avg. approval time", value: "3.1h", delta: "−68%", up: false, good: true },
  { label: "Savings captured", value: "$1.27M", delta: "+24.9%", up: true },
]

// Monthly spend (relative bar heights, %) with the current month highlighted
const bars = [
  { m: "Jan", h: 46 },
  { m: "Feb", h: 58 },
  { m: "Mar", h: 41 },
  { m: "Apr", h: 67 },
  { m: "May", h: 72 },
  { m: "Jun", h: 88, active: true },
]

const approvals = [
  { vendor: "Figma", who: "Design", amount: "$1,440", ai: true },
  { vendor: "AWS", who: "Engineering", amount: "$28,900", ai: true },
  { vendor: "WeWork", who: "Operations", amount: "$12,500", ai: false },
]

export function DashboardShowcase() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl glow-soft ring-1 ring-black/5">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.17_30)]/70" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.82_0.13_90)]/70" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.72_0.15_150)]/70" />
        </div>
        <div className="mx-auto hidden items-center gap-2 rounded-md border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.15_150)]" />
          app.riditstack.com/dashboard
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 flex-col border-r border-border/70 bg-muted/20 p-3 md:flex">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[var(--brand-2)] text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight">RiditStack</span>
          </div>
          <nav className="mt-4 space-y-1">
            {nav.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                  item.active
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
            ))}
          </nav>
          <div className="mt-auto rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI Copilot
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
              Flagged 3 duplicate invoices worth $4,210 this week.
            </p>
          </div>
        </aside>

        {/* Main panel */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">Spend overview</h3>
              <p className="text-xs text-muted-foreground">Fiscal year 2026 · Updated just now</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground sm:flex">
                <Search className="h-3.5 w-3.5" /> Search
              </div>
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border/70 bg-background/60 text-muted-foreground">
                <Bell className="h-3.5 w-3.5" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[oklch(0.7_0.17_30)] ring-2 ring-card" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-2)] to-primary text-xs font-semibold text-primary-foreground">
                AR
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {kpis.map((kpi, i) => (
              <div
                key={kpi.label}
                className={`rounded-xl border border-border/70 bg-background/60 p-3 ${
                  i === 2 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="text-[11px] text-muted-foreground">{kpi.label}</div>
                <div className="mt-1 flex items-end justify-between gap-2">
                  <span className="text-lg font-semibold tracking-tight sm:text-xl">{kpi.value}</span>
                  <span
                    className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                      kpi.up || kpi.good
                        ? "bg-[oklch(0.72_0.15_150)]/12 text-[oklch(0.5_0.13_150)]"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {kpi.up ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-5">
            {/* Chart */}
            <div className="rounded-xl border border-border/70 bg-background/60 p-4 lg:col-span-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Monthly spend</span>
                <span className="text-[11px] text-muted-foreground">vs. budget</span>
              </div>
              <div className="mt-4 flex h-32 items-end gap-2 sm:gap-3">
                {bars.map((b, i) => (
                  <div key={b.m} className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="flex w-full flex-1 items-end">
                      <div
                        data-bar
                        style={{
                          height: `${b.h}%`,
                          transformOrigin: "bottom",
                          animation: `grow-up 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms both`,
                        }}
                        className={`w-full rounded-md ${
                          b.active
                            ? "bg-gradient-to-t from-primary to-[var(--brand-2)]"
                            : "bg-primary/15"
                        }`}
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground">{b.m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approvals queue */}
            <div className="rounded-xl border border-border/70 bg-background/60 p-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Approvals queue</span>
                <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                  3 new
                </span>
              </div>
              <div className="mt-3 space-y-2.5">
                {approvals.map((a) => (
                  <div key={a.vendor} className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted text-[10px] font-semibold text-muted-foreground">
                      {a.vendor.slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-xs font-medium">{a.vendor}</div>
                      <div className="truncate text-[10px] text-muted-foreground">{a.who}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold">{a.amount}</div>
                      {a.ai ? (
                        <div className="inline-flex items-center gap-0.5 text-[9px] font-medium text-primary">
                          <Sparkles className="h-2.5 w-2.5" /> Auto
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-0.5 text-[9px] text-muted-foreground">
                          <Check className="h-2.5 w-2.5" /> Review
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
