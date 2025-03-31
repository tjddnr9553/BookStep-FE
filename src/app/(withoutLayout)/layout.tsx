import '../globals.css'
import styles from '@/app/(withoutLayout)/layout.module.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <div className={styles.contentWrapper}>
      {children}
    </div>
    </body>
    </html>
  )
}
