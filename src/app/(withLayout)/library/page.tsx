import styles from '@/app/(withLayout)/library/page.module.css'
import ContentHeader from '@/components/contentHeader'
import BookItem from '@/components/bookItem'

export default function Page() {
  return (
    <div className={styles.container}>
      <ContentHeader />
      <div className={styles.content}>
        <BookItem rating={2} />
      </div>
    </div>
  )
}
