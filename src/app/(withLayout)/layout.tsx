import '../globals.css'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import styles from '@/app/(withLayout)/layout.module.css'
import FloatAddMemo from '@/components/floatAddMemo'
import FloatMemo from '@/components/floatMemo'
import ToggleSidebar from '@/components/toggleSidebar'
import QueryProvider from '@/utils/queryProvider'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body>
    <QueryProvider>
      <div className={styles.layoutContainer}>
        <FloatMemo />
        <FloatAddMemo />
        <ToggleSidebar />
        <div className={styles.sidebarWrapper}>
          <Sidebar />
        </div>
        <div className={styles.contentWrapper}>
          <Header />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
    </QueryProvider>
    </body>
    </html>
  )
}
