import styles from '@/components/bookDetail/bookmark.module.css'
import Image from 'next/image'
import BookmarkItem from '@/components/bookDetail/bookmarkItem'
import { Plus, Right } from '@/components/icons/customIcons'

export default function Bookmark({ category, index }: { category: string, index: number }) {
  const colors = ['#FF295F', '#F6A329', '#3DAA34', '#357BEC']

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.colorDot} style={{ background: colors[index] }}></div>
            {category}
            <div className={styles.contentCount}>4</div>
          </div>
          <div className={styles.utilityTools}>
            <Plus width={1.04} height={1.04} />
            <Right width={0.73} height={0.73} color={'#505050'} />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bookmarkItemWrapper}>
          <BookmarkItem />
          <BookmarkItem />
        </div>
      </div>
    </div>
  )
}
