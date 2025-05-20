
import * as React from 'react'

type ReportSummaryProps = {
  summary: string
  gapNotes?: string
}

export function ReportSummary({ summary, gapNotes }: ReportSummaryProps) {
  return (
    <section className="rounded-lg border shadow-sm bg-white dark:bg-zinc-900 px-5 py-4 mb-8">
      <h3 className="font-semibold text-lg md:text-xl text-gray-900 dark:text-gray-100 mb-2">
        Synthesis Report
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-200">{summary}</p>
      {gapNotes && (
        <div className="mt-3 flex items-center gap-2 text-yellow-800 dark:text-yellow-200 text-sm font-medium">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-yellow-300 dark:bg-yellow-600 mr-1">
            <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
              <rect x="9" y="5" width="2" height="6" rx="1" fill="currentColor"/>
              <rect x="9" y="13" width="2" height="2" rx="1" fill="currentColor"/>
            </svg>
          </span>
          {gapNotes}
        </div>
      )}
    </section>
  )
}
