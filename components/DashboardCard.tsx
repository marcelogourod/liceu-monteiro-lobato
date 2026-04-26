'use client'

import { LucideIcon } from 'lucide-react'

interface DashboardCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  gradient: string
  description?: string
}

export default function DashboardCard({ 
  title, 
  value, 
  icon: Icon, 
  gradient,
  description 
}: DashboardCardProps) {
  return (
    <div className={`card hover:scale-105 transform transition-all ${gradient} text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {description && (
            <p className="text-white/70 text-xs mt-1">{description}</p>
          )}
        </div>
        <Icon size={40} className="opacity-80" />
      </div>
    </div>
  )
}
