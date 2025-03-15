import './globals.css'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import styles from '@/app/layout.module.css'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body>
    <div className={styles.layoutContainer}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={styles.contentWrapper}>
        <Header />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
    </body>
    </html>
  )
}
