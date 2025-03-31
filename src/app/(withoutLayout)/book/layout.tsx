import { ReactNode } from 'react'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header isDetailed={true} />
      <div style={{ zIndex: 3, position: 'sticky' }}>
        <Sidebar />
      </div>
      {children}
    </>
  )
}
