import styles from '@/components/bookDetail/bookmark.module.css'
import BookmarkItem from '@/components/bookDetail/bookmarkItem'
import { Plus, Right } from '@/components/icons/customIcons'

export default function Bookmark({ category, index, itemsLength, onClick }: {
  category: string,
  index: number,
  itemsLength?: number
  onClick?: () => void
}) {
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
            <Plus width={1.04} height={1.04} onClick={onClick} />
            <Right width={0.73} height={0.73} color={'#505050'} />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bookmarkItemWrapper}>
          {/* 북마크 임시 개수 지정 */}
          {Array.from({ length: itemsLength ? itemsLength : 4 }).map((_, index) => (
            <BookmarkItem key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
