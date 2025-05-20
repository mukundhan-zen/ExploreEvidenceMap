
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type MatrixProps = {
  title: string
  rowLabels: string[]
  colLabels: string[]
  data: number[][]
  highlightZeroes?: boolean
}

export function Matrix({
  title,
  rowLabels,
  colLabels,
  data,
  highlightZeroes = true,
}: MatrixProps) {
  return (
    <section aria-labelledby={title.replace(/\s/g, '') + '-matrix'} className="mb-8">
      <h3
        id={title.replace(/\s/g, '') + '-matrix'}
        className="font-semibold text-lg md:text-xl mb-2 text-gray-900 dark:text-gray-100"
      >
        {title}
      </h3>
      <div className="overflow-x-auto rounded-lg border shadow-sm bg-white dark:bg-zinc-900">
        <table className="min-w-[420px] border-collapse w-full">
          <thead>
            <tr>
              <th className="bg-slate-50 dark:bg-zinc-800 sticky left-0 z-10 px-4 py-2 text-left text-sm font-semibold text-slate-700 dark:text-zinc-100">
                Method / Target
              </th>
              {colLabels.map(col => (
                <th
                  key={col}
                  className="bg-slate-50 dark:bg-zinc-800 px-4 py-2 text-center text-sm font-semibold text-slate-700 dark:text-zinc-100"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={rowLabels[i]}>
                <th
                  className={cn(
                    "bg-slate-50 dark:bg-zinc-800 sticky left-0 z-10 px-4 py-2 text-sm font-medium text-slate-700 dark:text-zinc-100",
                    i % 2 === 0 ? 'bg-opacity-90' : 'bg-opacity-80'
                  )}
                  scope="row"
                >
                  {rowLabels[i]}
                </th>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      "px-4 py-2 text-center text-sm transition-colors",
                      i % 2 === 0
                        ? "bg-white dark:bg-zinc-900"
                        : "bg-slate-50 dark:bg-zinc-800",
                      highlightZeroes && cell === 0
                        ? "bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 font-semibold animate-pulse"
                        : ""
                    )}
                    aria-label={`Studies: ${cell} for ${rowLabels[i]} x ${colLabels[j]}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        <span className="inline-block h-2 w-2 rounded-full bg-yellow-300 dark:bg-yellow-400 mr-1 align-middle" />
        Gaps highlighted in yellow
      </p>
    </section>
  )
}
