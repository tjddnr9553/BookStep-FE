import { useState } from 'react'
import { debounce } from 'lodash'
import SearchBar from '@/components/common/searchBar'
import FunctionButton from '@/components/common/functionButton'
import SearchBookResult from '@/components/addBookModal/searchBookResult'
import styles from '@/components/addBookModal/addBookModal.module.css'
import { BookData } from '@/types/types'
import { GetSearchBook } from '@/hooks/useQuery'

export default function AddBookModal({ onClose }: { onClose: () => void }) {
  const [keyword, setKeyword] = useState('')
  const { data, isLoading, error } = GetSearchBook(keyword)

  const debouncedSearch = debounce((value: string) => {
    setKeyword(value)
  }, 300)

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>책 등록하기</div>
        <div className={styles.searchBar}>
          <SearchBar placeholder="도서명 또는 저자 검색" action={(e) => debouncedSearch(e.target.value)} />
        </div>
        <div className={styles.searchResultNumber}>총 {data ? data.length : 0}건</div>
        <div className={styles.searchBookResultContainer}>
          {isLoading && <p>검색 중...</p>}
          {error && <p>에러 발생</p>}
          {data?.map((book: BookData, i: number) => (
            <SearchBookResult key={`Book Result - ${i}`} book={book} />
          ))}
        </div>
        <div className={styles.handleButtonContainer}>
          <FunctionButton bgColor="#FFFFFF" color="#262932" content="취소" borderColor="#262932" onClick={onClose} />
          <FunctionButton bgColor="#262932" color="#FFFFFF" content="확인" borderColor="#262932" />
        </div>
      </div>
    </div>
  )
}
