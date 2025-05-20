
import { researchDomains } from '@/lib/mock-data'
import { Matrix } from '@/components/ui/matrix'
import { TrendChart } from '@/components/ui/trend-chart'
import { ReportSummary } from '@/components/ui/report-summary'

export const metadata = {
  title: 'Evidence Mapping Dashboard',
  description: 'Visualize research evidence across domains: methods, targets, trends, and synthesis reports.'
}

export default async function DashboardPage() {
  // In real implementation, fetch from database. Here, we use mock data.
  // Optionally: limit to top 4 for demo brevity; show "all" for full dashboard.
  const domainsToShow = researchDomains.slice(0, 4)

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">
          Evidence Mapping Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          Explore research activity, trends, and evidence gaps across key domains. Hover matrix cells for study counts. Trends and synthesis reports help identify opportunities and underexplored areas.
        </p>
      </header>
      <div className="grid gap-12">
        {domainsToShow.map(domain => (
          <section
            key={domain.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white/90 dark:from-indigo-950/60 dark:via-zinc-900/80 shadow-xl border border-indigo-100 dark:border-indigo-900/40"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 md:gap-6">
              <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-1 md:mb-0">
                {domain.name}
              </h2>
              <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full shadow-sm tracking-wide uppercase">{domain.methods.length} Methods × {domain.targets.length} Targets</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Matrix
                  title={domain.name + " Evidence Matrix"}
                  rowLabels={domain.methods}
                  colLabels={domain.targets}
                  data={domain.matrix}
                />
              </div>
              <div className="flex flex-col gap-4">
                <TrendChart data={domain.trend} domainName={domain.name} />
                <ReportSummary summary={domain.summary} gapNotes={domain.gapNotes} />
              </div>
            </div>
          </section>
        ))}
      </div>
      <footer className="mt-16 text-xs text-gray-400 text-center">
        Data shown is for demonstration purposes only. For further details, contact the research team.
      </footer>
    </main>
  )
}
