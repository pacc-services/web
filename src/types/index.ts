export interface NavItem {
  label: string
  href: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  linkedin: string
}

export interface RevenueStream {
  title: string
  description: string
}

export interface Milestone {
  quarter: string
  title: string
  items: string[]
}

export interface FinancialData {
  year: string
  netIncome: string
}

export interface ContactInfo {
  name: string
  role: string
  phone: string
}
