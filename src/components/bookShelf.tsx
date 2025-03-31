import { useState } from 'react'
import { BookData } from '@/types/types'
import styles from '@/components/bookShelf.module.css'
import Image from 'next/image'

export default function BookShelf({ category, books }: { category: string, books: BookData[] }) {
  const totalBooks = 10
  const remainingBooks = totalBooks - books.length
  const filledBooks = [...books, ...Array(remainingBooks).fill({ cover: '/svgs/add.svg', title: '빈 책' })]
  const bookWidthVW = 9.18281

  const [scrollX, setScrollX] = useState<number>(0)
  const [currentBookIndex, setCurrentBookIndex] = useState<number>(0)
  // const [isGridView, setIsGridView] = useState<boolean>(false)

  const handleScroll = (direction: 'left' | 'right') => {
    setCurrentBookIndex((prev) => direction === 'left' ? prev - 1 : prev + 1)

    setScrollX((prev) => {
      const newX = direction === 'left' ? prev + bookWidthVW : prev - bookWidthVW
      return Math.min(0, Math.min(newX, bookWidthVW * 10))
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.category}>{category}</div>
        <div className={styles.moreButton}>
          {/*<div className={styles.moreButton} onClick={() => setIsGridView(!isGridView)}>*/}
          {/*{isGridView ? '돌아가기' : '더보기'}*/}
          더보기
          <Image src={'/svgs/moreButton.svg'} alt={'More Button'} width={10} height={10} />
        </div>
      </div>

      {/*{isGridView ? (*/}
      {/*  <div>*/}
      {/*    <div className={styles.gridContainer}>*/}
      {/*      {filledBooks.map((book: BookData, idx: number) => (*/}
      {/*        <div key={`${book.title} - ${idx}`} className={styles.bookCover}>*/}
      {/*          <Image src={book.cover} alt={book.title} width={134.31} height={199.68} />*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <div className={styles.shelfContainer}>*/}
      {/*      <div className={styles.shelf}></div>*/}
      {/*      <div className={styles.shelfShadow}></div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*) : (*/}
      <div className={styles.contentWrapper}>
        {currentBookIndex > 0 && (
          <button className={styles.arrowLeft} onClick={() => handleScroll('left')}>
            <Image src={'/svgs/left.svg'} alt={'Left'} width={8} height={16} />
          </button>
        )}
        <div className={styles.bookScrollContainer}>
          <div className={styles.bookContainer} style={{ transform: `translateX(${scrollX}vw)` }}>
            {filledBooks.map((book: BookData, idx: number) => (
              <div key={`${book.title} - ${idx}`} className={styles.bookCover}>
                <Image src={book.cover} alt={book.title} width={134.31} height={199.68} />
              </div>
            ))}
          </div>
          <div className={styles.shelfContainer}>
            <div className={styles.shelf}></div>
            <div className={styles.shelfShadow}></div>
          </div>
        </div>
        {currentBookIndex <= 5 && (
          <button className={styles.arrowRight} onClick={() => handleScroll('right')}>
            <Image src={'/svgs/right.svg'} alt={'Left'} width={8} height={16} />
          </button>
        )}
      </div>
      {/*)}*/}
    </div>
  )
}
