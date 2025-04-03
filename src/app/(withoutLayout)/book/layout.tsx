import { ReactNode } from 'react'

import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header isDetailed={true} />
      <Sidebar />
      {children}
    </>
  )
}
