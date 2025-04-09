import styles from '@/app/(withLayout)/library/page.module.css'
import ContentHeader from '@/components/common/contentHeader'
import BookItem from '@/components/library/bookItem'
import { Books } from '@/mock'
import { BookData } from '@/types/types'

export default function Page() {
  return (
    <div className={styles.container}>
      <ContentHeader title={'My Library'} categories={['전체보기', '소장함 보기', '폴더 보기']}
                     options={{ add: true, settings: true, filter: false, sort: true }} placeholder={'Search your book'}/>
      <div className={styles.content}>
        {Books.map((book: BookData, i: number) =>
          <BookItem key={`BookItem - ${i}`} book={book} />,
        )}
      </div>
    </div>
  )
}
