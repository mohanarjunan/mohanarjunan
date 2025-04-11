
import React from 'react'

interface V3LayoutProps {
  children: React.ReactNode
}



export default function V3Layout ({ children }: V3LayoutProps) {
  return (
    <div className="w-full h-auto overflow-y-scroll">
      { children }
    </div>
  )
}




