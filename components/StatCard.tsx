'use client'

interface StatCardProps {
  label: string
  value: string | number
  icon?: string
  color?: 'primary' | 'green' | 'red' | 'orange' | 'blue'
}

const colorClasses = {
  primary: 'text-primary',
  green: 'text-green-600',
  red: 'text-red-600',
  orange: 'text-orange-600',
  blue: 'text-blue-600'
}

export default function StatCard({ label, value, icon, color = 'primary' }: StatCardProps) {
  return (
    <div className="card text-center">
      {icon && <div className="text-4xl mb-2">{icon}</div>}
      <p className="text-gray-600 text-sm mb-1">{label}</p>
      <p className={`text-4xl font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  )
}
