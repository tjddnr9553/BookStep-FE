'use client'

import { Books } from '@/mock'
import { BookData } from '@/types/types'
import styles from '@/components/bookItem.module.css'
import StarRating from '@/components/starRating'
import Image from 'next/image'
import { ProgressBar } from '@/components/progressBar'
import { useRouter } from 'next/navigation'

export default function BookItem({ rating }: { rating: number }) {
  const router = useRouter()

  return (
    <>
      {Books.map((book: BookData, i: number) => (
        <div key={i} className={styles.bookItem} onClick={() => router.push(`/book/${book.isbn13}`)}>
          <StarRating size={18} rating={rating} color={'#B6B6B6'} />
          <Image src={book.cover} alt={book.title} width={220} height={330} className={styles.bookImage} />
          <div className={styles.bookInfo}>
            <div className={styles.bookHeader}>
              <div className={styles.bookTitle}>{book.title}</div>
              <div className={styles.bookAuthor}>{book.author}</div>
            </div>
            <div className={styles.bookBody}>
              <div className={styles.bookProgress}>{book.progress}%</div>
              <div className={styles.bookProgressPage}>105<span>/276</span></div>
            </div>
            <ProgressBar propProgress={book.progress} />
          </div>
        </div>
      ))}
    </>
  )
}
