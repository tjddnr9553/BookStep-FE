'use client'

import styles from '@/app/(withoutLayout)/book/[...isbn13]/page.module.scss'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { throttle } from 'lodash'

import { Books } from '@/mock'

import Bookmark from '@/components/bookDetail/bookmark'
import FloatCard from '@/components/bookDetail/floatCard'

import { ProgressBar } from '@/components/common/progressBar'
import StarRating from '@/components/common/starRating'
import BasicButton from '@/components/common/basicButton'

export default function BookDetailPage() {
  const params = useParams()

  const [scrollX, setScrollX] = useState<number>(0)
  const [scrollView, setScrollView] = useState<number>(0)
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)
  const [isOwn, setIsOwn] = useState<boolean>(false)

  const focusFirst = useRef<HTMLDivElement>(null)
  const focusSecond = useRef<HTMLDivElement>(null)
  const cardWidthVW = 22.29167

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault()

    const { deltaY } = e
    if (!focusFirst.current || !focusSecond.current) return

    const focusSecondTop = focusSecond.current.getBoundingClientRect().top

    console.log(scrollView)
    // 아래로 스크롤 할 때
    if (deltaY > 0 && scrollView !== 1) {
      setScrollView(1)
      focusSecond.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // 위로 스크롤 할 때
    else if (deltaY < 0 && scrollView !== 0 && focusSecondTop > 0) {
      setScrollView(0)
      focusFirst.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const throttleWheelEvent = throttle(handleWheel, 500)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.addEventListener('wheel', throttleWheelEvent, { passive: false })

    return () => {
      window.removeEventListener('wheel', throttleWheelEvent)
    }
  })

  // url에서 고유한 책 아이디인 isbn13을 추출함
  const { isbn13 } = params
  if (!isbn13) return

  // mock 데이터에서 찾음
  const bookData = Books.find((book) => book.isbn13 === isbn13[0])
  if (!bookData) return

  const handleCardScroll = (idx: number) => {
    setCurrentCardIndex(idx)
    setScrollX(idx * -cardWidthVW)
  }

  const renderBookMeta = (color?: string, subColor?: string, isTop?: boolean) => (
    <>
      <div className={styles.bookDetail__titleWrapper}>
        <div className={styles.bookDetail__title} style={{ color: color }}>{bookData.title}</div>
        {isTop && <div
          className={`${styles.bookDetail__own} ${isOwn ? `${styles.bookDetail__own__active}` : `${styles.bookDetail__own__unactive}`}`}
          onClick={() => setIsOwn(!isOwn)}>{isOwn ? '보유중' : '미보유'}</div>
        }
      </div>
      <div className={styles.bookDetail__infoText} style={{ color: subColor }}>
        {bookData.author && <div className={styles.bookDetail__author}>{bookData.author}</div>}|
        {bookData.publisher && <div className={styles.bookDetail__publisher}>{bookData.publisher}</div>}|
        {bookData.pubDate && <div className={styles.bookDetail__pubDate}>{bookData.pubDate}</div>}
      </div>
    </>
  )

  // 상단에 보여줄 첫 데이터베이스
  const focusFirstDatabase = () => (
    <>
      <div className={styles.bookDetail__content}>
        {['Archive', 'Action Plan', 'Quotes', 'Question'].map((category, idx) => (
          <Bookmark key={`Bookmark - ${idx}`} category={category} index={idx} itemsLength={1} />
        ))}
      </div>
    </>
  )

  // 하단에 보여줄 전체 데이터베이스
  const focusAllDatabase = () => (
    <>
      <div className={styles.bookDetail__content}>
        {['Archive', 'Action Plan', 'Quotes', 'Question'].map((category, idx) => (
          <Bookmark key={`Bookmark - ${idx}`} category={category} index={idx} />
        ))}
      </div>
    </>
  )

  return (
    <div className={styles.bookDetail} ref={focusFirst}>
      <div className={styles.bookDetail__coverSection}>
        <div className={styles.bookDetail__coverBackground} style={{ background: '#262932' }}>
          <div className={styles.bookDetail__infoContainer}>
            <div className={styles.bookDetail__infoWrapper}>
              {renderBookMeta('', '', true)}
              <div className={styles.bookDetail__progressContainer}>
                <ProgressBar propProgress={bookData.progress} />
                <span style={{ marginLeft: '10px' }}>{bookData.progress}%</span>
              </div>
              <div className={styles.bookDetail__rating}>
                <StarRating size={1.5} rating={2} color={'#F6F6F8'} />
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
                 onClick={() => handleCardScroll(idx)} />
          ))}
        </div>
      </div>
      <div className={styles.bookDetail__contentSection}>
        <div className={styles.bookDetail__noteSection}>
          <div className={styles.bookDetail__noteHeader}>한줄평 / 메모
            <Image src={'/svgs/memo.svg'} alt={'Memo'} width={16} height={16}
                   className={styles.bookDetail__noteIcon} />
          </div>
          <div className={styles.bookDetail__actions}>
            <BasicButton content={'글쓰기'} isActive={true} color={'#FFFFFF'} />
            <BasicButton content={'메모하기'} isActive={false} color={'#FFFFFF'} />
          </div>
        </div>
        {focusFirstDatabase()}

        <div ref={focusSecond}>
          <div className={styles.bookDetail__databaseWrapper}>
            {renderBookMeta('#000000', '#505050')}
          </div>
        </div>
        {focusAllDatabase()}
      </div>
    </div>
  )
}
