import '../globals.css'
import styles from '@/app/(withoutLayout)/layout.module.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.contentWrapper}>
      {children}
    </div>
  )
}
