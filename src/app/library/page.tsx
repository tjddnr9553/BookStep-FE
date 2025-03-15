import styles from '@/app/library/page.module.css'
import Image from 'next/image'
import PageTitle from '@/components/pageTitle'
import SearchBar from '@/components/searchBar'
import FunctionButton from '@/components/functionButton'
import { DatePicker } from '@/components/datePicker'
import BasicButton from '@/components/basicButton'
import { Books } from '@/mock'
import { BookData } from '@/types/types'
import { ProgressBar } from '@/components/progressBar'

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PageTitle title={'My Library'} />
        <div className={styles.searchTools}>
          <SearchBar placeholder={'Search Your Book'} />
          <FunctionButton svgUrl={'add'} bgColor={'#262932'} content={'추가하기'} color={'#FFFFFF'} />
          <FunctionButton svgUrl={'settings'} bgColor={'#FFFFFF'} color={'#000000'} borderColor={'#63697E'} />
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.categoryButtons}>
          <BasicButton content={'전체보기'} isActive={true} />
          <BasicButton content={'소장함 보기'} isActive={false} />
          <BasicButton content={'폴더 보기'} isActive={false} />
        </div>
        <div className={styles.filterTools}>
          <DatePicker />
          <FunctionButton svgUrl={'sort'} bgColor={'#FFFFFF'} color={'#000000'} borderColor={'#63697E'} />
        </div>
      </div>
      <div className={styles.content}>
        {Books.map((book: BookData, i: number) => (
          <div key={i} className={styles.bookItem}>
            <Image src={book.svgUrl} alt={book.title} width={220} height={330} className={styles.bookImage} />
            <div className={styles.bookInfo}>
              <div className={styles.bookHeader}>
                <div className={styles.bookTitle}>{book.title}</div>
                <div className={styles.bookAuthor}>{book.author}</div>
              </div>
              <div className={styles.bookBody}>
                <div className={styles.bookProgress}>{book.progress}%</div>
                <div className={styles.bookProgressPage}>105/276</div>
              </div>
              <ProgressBar propProgress={book.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
