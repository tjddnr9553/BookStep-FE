import styles from '@/components/bookDetail/bookmark.module.css'
import Image from 'next/image'
import BookmarkItem from '@/components/bookDetail/bookmarkItem'
import { Right } from '@/components/icons/customIcons'

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
            <Image src={'/svgs/plus.svg'} alt={'Add Bookmark'} width={16} height={16} />
            <Right width={5} height={10} color={'#505050'} />
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
