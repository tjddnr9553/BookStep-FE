'use client'

import styles from '@/app/(withoutLayout)/book/page.module.scss'
import { Books } from '@/mock'
import { useParams } from 'next/navigation'
import { ProgressBar } from '@/components/progressBar'
import StarRating from '@/components/starRating'
import Image from 'next/image'
import BasicButton from '@/components/basicButton'
import Bookmark from '@/components/bookDetail/bookmark'
import FloatCard from '@/components/bookDetail/floatCard'
import { useState } from 'react'


export default function BookDetailPage() {
  const params = useParams()
  const [scrollX, setScrollX] = useState<number>(0)
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)
  const cardWidthVW = 22.29167

  const { isbn13 } = params
  if (!isbn13) return
  const bookData = Books.find((book) => book.isbn13 === isbn13[0])
  if (!bookData) return

  const handleScroll = (idx: number) => {
    setCurrentCardIndex(idx)
    setScrollX(idx * -cardWidthVW)
  }

  return (
    <div className={styles.bookDetail}>
      <div className={styles.bookDetail__coverSection}>
        <div className={styles.bookDetail__coverBackground} style={{ backgroundImage: `url(${bookData.cover})` }}>
          <div className={styles.bookDetail__infoContainer}>
            <div className={styles.bookDetail__infoWrapper}>
              <div className={styles.bookDetail__title}>{bookData.title}</div>
              <div className={styles.bookDetail__infoText}>
                {bookData.author && <div className={styles.bookDetail__author}>{bookData.author}</div>}|
                {bookData.publisher && <div className={styles.bookDetail__publisher}>{bookData.publisher}</div>}|
                {bookData.pubDate && <div className={styles.bookDetail__pubDate}>{bookData.pubDate}</div>}
              </div>
              <div className={styles.bookDetail__progressContainer}>
                <ProgressBar propProgress={bookData.progress} />
                <span style={{ marginLeft: '10px' }}>{bookData.progress}%</span>
              </div>
              <div className={styles.bookDetail__rating}>
                <StarRating size={18} rating={2} color={'#F6F6F8'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bookDetail__coverImage} style={{ backgroundImage: `url(${bookData.cover})` }}></div>
      <div className={styles.bookDetail__floatCardSection}>
        <div className={styles.bookDetail__floatCard} style={{ transform: `translateX(${scrollX}vw)` }}>
          {['오늘의 질문', '오늘의 명언', '오늘의 계획'].map((content, idx) => (
            <FloatCard key={idx} content={content} />
          ))}
        </div>
        <div className={styles.bookDetail__indicator}>
          {new Array(3).fill(0).map((_, idx) => (
            <div key={idx} className={styles.bookDetail__indicatorDot}
                 style={{ backgroundColor: currentCardIndex === idx ? '#212121' : '#DBDBDB' }}
                 onClick={() => handleScroll(idx)} />
          ))}
        </div>
      </div>
      <div className={styles.bookDetail__contentSection}>
        <div className={styles.bookDetail__noteSection}>
          <div className={styles.bookDetail__noteHeader}>한줄평 / 메모
            <Image src={'/svgs/memo.svg'} alt={'Memo'} width={16} height={16} className={styles.bookDetail__noteIcon} />
          </div>
          <div className={styles.bookDetail__actions}>
            <BasicButton content={'글쓰기'} isActive={true} />
            <BasicButton content={'메모하기'} isActive={false} />
          </div>
        </div>
        <div className={styles.bookDetail__content}>
          {['Archive', 'Action Plan', 'Quotes', 'Question'].map((category, idx) => (
            <Bookmark key={`Bookmark - ${idx}`} category={category} index={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
