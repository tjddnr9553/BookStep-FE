import styles from '@/app/(withLayout)/layout.module.css'

import QueryProvider from '@/utils/queryProvider'

import Sidebar from '@/components/layout/sidebar'
import Header from '@/components/layout/header'
import ToggleSidebar from '@/components/toggleSidebar'

import FloatMemo from '@/components/floatMemo'
import FloatAddMemo from '@/components/floatAddMemo'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryProvider>
      <div className={styles.layout}>
        <FloatMemo />
        <FloatAddMemo />
        <ToggleSidebar />
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.mainContainer}>
          <Header />
          <main className={styles.mainContent}>{children}</main>
        </div>
      </div>
    </QueryProvider>
  )
}
