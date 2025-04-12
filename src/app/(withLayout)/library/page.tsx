'use client'

import styles from '@/app/(withLayout)/library/page.module.css'
import { useMemo, useState } from 'react'
import ContentHeader from '@/components/common/contentHeader'
import BookItem from '@/components/library/bookItem'
import { Books } from '@/mock'
import { BookData } from '@/types/types'
import BookFolder from '@/components/library/bookFolder'

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const mockFolder = ['소설 및 문학', '소설', '추리', '공포', '만화', '컴퓨터 공학','토목 공학']
  const filteredBooks = useMemo(() => {
    if (activeCategory === 0) return Books
    if (activeCategory === 1) return Books.filter((item) => item.isOwn)
    return []
  }, [activeCategory])

  return (
    <div className={styles.container}>
      <ContentHeader title={'My Library'} categories={['전체보기', '소장함 보기', '폴더 보기']} activeCategory={activeCategory}
                     onCategoryChange={setActiveCategory}
                     options={{ add: true, settings: true, filter: false, sort: true }}
                     placeholder={'Search your book'} />
      <div className={`${styles.content} ${activeCategory === 2 ? styles.gridSix : styles.gridFive}`}>
        {filteredBooks && filteredBooks.map((book: BookData) =>
          <BookItem key={`BookItem - ${book.isbn13}`} book={book} />,
        )}
        {activeCategory === 2 && mockFolder.map((item) =>
          <BookFolder key={`BookFolder - ${item}`} title={item}>

          </BookFolder>,
        )}
      </div>
    </div>
  )
}
