
'use client'

import * as React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

type TrendChartProps = {
  data: { year: number; studies: number }[]
  domainName: string
}

export function TrendChart({ data, domainName }: TrendChartProps) {
  return (
    <section aria-labelledby={domainName.replace(/\s/g, '') + '-trend'}>
      <h3
        id={domainName.replace(/\s/g, '') + '-trend'}
        className="font-semibold text-lg md:text-xl mb-2 text-gray-900 dark:text-gray-100"
      >
        Research Trends ({domainName})
      </h3>
      <div className="rounded-lg border shadow-sm bg-white dark:bg-zinc-900 p-4 min-w-[320px]">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="year"
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                fontSize: '13px',
              }}
              labelStyle={{ color: '#64748b', fontWeight: 600 }}
            />
            <Line
              type="monotone"
              dataKey="studies"
              stroke="#6366f1"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#6366f1' }}
              activeDot={{ r: 6, fill: '#6366f1' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
