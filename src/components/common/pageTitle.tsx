import styles from '@/components/common/pageTitle.module.css'

export default function PageTitle({ title }: { title: string }) {
  return (
    <div className={styles.title}>
      {title}
    </div>
  )
}
