import styles from '@/app/(withoutLayout)/layout.module.css'

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.contentWrapper}>
      {children}
    </div>
  )
}
