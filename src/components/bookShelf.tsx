import { useState } from 'react'
import { BookData } from '@/types/types'
import styles from '@/components/bookShelf.module.css'
import Image from 'next/image'

export default function BookShelf({ books, isGridView }: { books: BookData[], isGridView: boolean }) {
  const bookWidthVW = 9.18281
  const [scrollX, setScrollX] = useState<number>(0)
  const [currentBookIndex, setCurrentBookIndex] = useState<number>(0)
  const halfIndex = Number((books.length / 2).toFixed(0))
  const gridRow = Number((books.length / 4).toFixed(0))

  const handleScroll = (direction: 'left' | 'right') => {
    setCurrentBookIndex((prev) => direction === 'left' ? prev - 1 : prev + 1)

    setScrollX((prev) => {
      const newX = direction === 'left' ? prev + bookWidthVW : prev - bookWidthVW
      return Math.min(0, Math.min(newX, bookWidthVW))
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {isGridView ? (
          <div className={styles.rowContainer}>
            {Array.from({ length: gridRow }).map((_, row) => (
              <div key={row}>
                <div className={styles.gridContainer}>
                  {books.slice(row * 4, row * 4 + 4).map((book: BookData, idx: number) => (
                    <Image key={`${book.title} - ${row}-${idx}`} src={book.cover} alt={book.title} width={134.31}
                           height={199.68} className={styles.bookCover} />
                  ))}
                </div>
                <div className={`${styles.shelfContainer} ${styles.shelf}`}>
                  <div className={styles.shelfShadow}></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {currentBookIndex > 0 && (
              <button className={styles.arrowLeft} onClick={() => handleScroll('left')}>
                <Image src={'/svgs/left.svg'} alt={'Left'} width={8} height={16} />
              </button>
            )}
            <div className={styles.bookScrollContainer}>
              <div className={styles.bookContainer} style={{ transform: `translateX(${scrollX}vw)` }}>
                {books.map((book: BookData, idx: number) => (
                  <Image key={`${book.title} - ${idx}`} src={book.cover} alt={book.title} width={134.31}
                         height={199.68}
                         className={styles.bookCover} />
                ))}
              </div>
              <div className={`${styles.shelfContainer} ${styles.shelf}`}>
                <div className={styles.shelfShadow}></div>
              </div>
            </div>
            {currentBookIndex < halfIndex && (
              <button className={styles.arrowRight} onClick={() => handleScroll('right')}>
                <Image src={'/svgs/right.svg'} alt={'Left'} width={8} height={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
