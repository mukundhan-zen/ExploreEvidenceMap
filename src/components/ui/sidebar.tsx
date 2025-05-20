
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, BarChart3, Folder, Shield, FileText, LayoutDashboard } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const navLinks = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      label: "Instruments",
      href: "/instruments",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      label: "Protected",
      href: "/protected",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      label: "Evidence Mapping",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
  ]

  return (
    <aside className="fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-zinc-900 border-r border-slate-100 dark:border-zinc-800 flex flex-col py-4 px-3">
      <nav className="flex-1 flex flex-col gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium",
              pathname === link.href
                ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-200 shadow"
                : "hover:bg-indigo-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-200"
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
