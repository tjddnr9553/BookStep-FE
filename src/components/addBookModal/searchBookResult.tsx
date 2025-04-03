'use client'

import styles from '@/components/addBookModal/addBookModal.module.css'
import Image from 'next/image'
import { format } from 'date-fns'
import { BookData } from '@/types/types'
import { useState } from 'react'

export default function SearchBookResult({ book }: { book: BookData }) {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <div className={styles.searchBookItem} onClick={() => setIsSelected(!isSelected)}>
      <Image src={book.cover} width={74} height={74} alt={book.title} />
      <div className={styles.searchBookInfo}>
        <div className={styles.searchBookTitle}>{book.title}</div>
        <div className={styles.searchBookDetails}>{book.author} | {book.publisher} |</div>
        <div className={styles.searchBookDetails}>{format(new Date(book.pubDate), 'yyyy년 MM월 dd일')}</div>
      </div>
      <div className={styles.checkBookItem}>
        {isSelected &&
          <Image src={'/svgs/checkedRadioButton.svg'} alt={'Checked Radio Button'} width={33} height={33} />}
      </div>
    </div>
  )
}
