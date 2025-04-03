import styles from '@/app/(withLayout)/library/page.module.css'
import ContentHeader from '@/components/common/contentHeader'

export default function Page() {
  return (
    <div className={styles.container}>
      <ContentHeader title={'Memo'} categories={['전체보기', '북마크']}
                     options={{ add: false, settings: false, filter: true, sort: true }} placeholder={'Search your memo'}/>
      <div className={styles.content}>
      </div>
    </div>
  )
}
