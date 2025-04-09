'use client'

import styles from '@/components/common/contentHeader.module.css'

import { useState } from 'react'

import PageTitle from '@/components/common/pageTitle'
import SearchBar from '@/components/common/searchBar'
import FunctionButton from '@/components/common/functionButton'
import BasicButton from '@/components/common/basicButton'
import AddBookModal from '@/components/addBookModal/addBookModal'
import CustomDatePicker from '@/components/common/customDatePicker'

interface ContentHeaderProps {
  title: string;
  categories: string[];
  placeholder: string;
  options: {
    add: boolean;
    settings: boolean;
    filter: boolean;
    sort: boolean;
  }
}

export default function ContentHeader({ title, categories, placeholder, options }: ContentHeaderProps) {
  const [isActiveCategory, setIsActiveCategory] = useState<boolean[]>([true, false, false])
  const [isAddBook, setIsAddBook] = useState<boolean>(false)
  // const [keyword, setKeyword] = useState('')
  // const [searchResult, setSearchResult] = useState<BookData[] | null>(null)

  // DB에서 책 조회 로직으로 수정
  // const { data, isLoading, error } = GetSearchBook(keyword)

  // const debouncedSearch = debounce((value: string) => {
  //   setKeyword(value)
  // }, 300)

  return (
    <>
      {isAddBook && <AddBookModal onClose={() => setIsAddBook(false)} />}
        <div className={styles.header}>
          <PageTitle title={title} />
          <div className={styles.searchTools}>
            <SearchBar placeholder={placeholder} action={(e) => console.log(e.target.value)} />
            {options.add && <FunctionButton cover={'plus'} bgColor={'#262932'} content={'추가하기'} color={'#FFFFFF'} onClick={() => setIsAddBook(true)} />}
            {options.settings && <FunctionButton cover={'settings'} bgColor={'#FFFFFF'} color={'#000000'} borderColor={'#63697E'} />}
          </div>
        </div>
        <div className={styles.toolbar}>
          <div className={styles.categoryButtons}>
            {categories.map((item, idx) =>
              <BasicButton key={`${idx}.${item}`} content={item} isActive={isActiveCategory[idx]} onClick={() => setIsActiveCategory(isActiveCategory.map((_, i) => i === idx))} />,
            )}
          </div>
          <div className={styles.filterTools}>
            <CustomDatePicker />
            {options.filter && <FunctionButton cover={'filter'} bgColor={'#FFFFFF'} color={'#000000'} circle={true} />}
            {options.sort && <FunctionButton cover={'sort'} bgColor={'#FFFFFF'} color={'#000000'} circle={true}/>}
          </div>
        </div>
    </>
  )
}
