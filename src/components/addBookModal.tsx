import styles from '@/components/addBookModal.module.css'
import SearchBar from '@/components/searchBar'
import Image from 'next/image'
import { BookData } from '@/types/types'
import FunctionButton from '@/components/functionButton'
import axios from 'axios'
import { debounce } from 'lodash'
import { parseStringPromise } from 'xml2js'
import { ChangeEvent, useState } from 'react'
import { format } from 'date-fns'

export default function AddBookModal({ onClose }: { onClose: () => void }) {
  const [searchResult, setSearchResult] = useState<BookData[] | null>(null)

  const debouncedSearch = debounce(async (keyword: string) => {
    if (!keyword.trim()) keyword = ' '

    try {
      const response = await axios.get('/api/getSearchBook', {
        params: { query: keyword },
      })
      const xmlData = response.data
      const jsonData = await parseStringPromise(xmlData, { explicitArray: false })

      const books = jsonData.object?.item ?? []

      const filteredBooks = books?.map((book: BookData) => ({
        title: book.title,
        author: book.author || '저자 정보 없음',
        cover: book.cover,
        description: book.description,
        progress: 0,
        publisher: book.publisher || '출판사 정보 없음',
        pubDate: format(new Date(book.pubDate), 'yyyy년 MM월 dd일') || '출판일 정보 없음',
      }))

      setSearchResult(filteredBooks)
    } catch (error) {
      console.error('Error fetching book data:', error)
    }
  }, 100)

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value)
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>책 등록하기</div>
        <div className={styles.searchBar}>
          <SearchBar placeholder={'도서명 또는 저자 검색'} onChange={handleQueryChange} />
        </div>
        <div className={styles.searchResultNumber}>총 {searchResult ? searchResult.length : 0}건</div>
        <div className={styles.searchBookResultContainer}>
          {searchResult?.map((book: BookData, i: number) =>
            <div key={`Search Book Item - ${i}`} className={styles.searchBookItem}>
              <Image src={book.cover} width={74} height={74} alt={book.title} />
              <div className={styles.searchBookInfo}>
                <div className={styles.searchBookTitle}>{book.title}</div>
                <div className={styles.searchBookDetails}>{book.author} | {book.publisher} |</div>
                <div className={styles.searchBookDetails}>{book.pubDate}</div>
              </div>
              <div className={styles.checkBookItem}>
                <Image src={'/svgs/checkedRadioButton.svg'} alt={'Checked Radio Button'} width={33} height={33} />
              </div>
            </div>,
          )}
        </div>
        <div className={styles.handleButtonContainer}>
          <FunctionButton bgColor={'#FFFFFF'} color={'#262932'} content={'취소'} borderColor={'#262932'}
                          onClick={onClose} />
          <FunctionButton bgColor={'#262932'} color={'#FFFFFF'} content={'확인'} borderColor={'#262932'} />
        </div>
      </div>
    </div>
  )
}
