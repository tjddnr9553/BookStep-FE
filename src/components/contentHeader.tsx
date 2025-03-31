'use client'

import styles from '@/components/contentHeader.module.css'
import PageTitle from '@/components/pageTitle'
import SearchBar from '@/components/searchBar'
import FunctionButton from '@/components/functionButton'
import BasicButton from '@/components/basicButton'
import { DatePicker } from '@/components/datePicker'
import { useState } from 'react'
import AddBookModal from '@/components/searchModal/addBookModal'

export default function ContentHeader() {
  const [isActiveCategory, setIsActiveCategory] = useState<boolean[]>([true, false, false])
  const [isAddBook, setIsAddBook] = useState<boolean>(false)
  // const [keyword, setKeyword] = useState('')
  // const [searchResult, setSearchResult] = useState<BookData[] | null>(null)
  const categories = ['전체보기', '소장함 보기', '폴더 보기']

  // DB에서 책 조회 로직으로 수정
  // const { data, isLoading, error } = GetSearchBook(keyword)

  // const debouncedSearch = debounce((value: string) => {
  //   setKeyword(value)
  // }, 300)

  return (
    <>
      {isAddBook && <AddBookModal onClose={() => setIsAddBook(false)} />}
      <div className={styles.header}>
        <PageTitle title={'My Library'} />
        <div className={styles.searchTools}>
          <SearchBar placeholder={'Search Your Book'} action={(e) => console.log(e.target.value)} />
          <FunctionButton cover={'add'} bgColor={'#262932'} content={'추가하기'} color={'#FFFFFF'}
                          onClick={() => setIsAddBook(true)} />
          <FunctionButton cover={'settings'} bgColor={'#FFFFFF'} color={'#000000'} borderColor={'#63697E'} />
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.categoryButtons}>
          {categories.map((item, idx) =>
            <BasicButton key={`${idx}.${item}`} content={item} isActive={isActiveCategory[idx]}
                         onClick={() => setIsActiveCategory(isActiveCategory.map((_, i) => i === idx))} />,
          )}
        </div>
        <div className={styles.filterTools}>
          <DatePicker />
          <FunctionButton cover={'sort'} bgColor={'#FFFFFF'} color={'#000000'} borderColor={'#63697E'} />
        </div>
      </div>
    </>
  )
}
