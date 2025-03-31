'use client'

import styles from '@/components/contentHeader.module.css'
import PageTitle from '@/components/pageTitle'
import SearchBar from '@/components/searchBar'
import FunctionButton from '@/components/functionButton'
import BasicButton from '@/components/basicButton'
import { DatePicker } from '@/components/datePicker'
import { ChangeEvent, useState } from 'react'
import AddBookModal from '@/components/addBookModal'
import { BookData } from '@/types/types'
import { debounce } from 'lodash'
import axios from 'axios'
import { parseStringPromise } from 'xml2js'

export default function ContentHeader() {
  const [isActiveCategory, setIsActiveCategory] = useState<boolean[]>([true, false, false])
  const [isAddBook, setIsAddBook] = useState<boolean>(false)
  const [searchResult, setSearchResult] = useState<BookData[] | null>(null)
  const categories = ['전체보기', '소장함 보기', '폴더 보기']


  const debouncedSearch = debounce(async (keyword: string) => {
    if (!keyword) keyword = ' '

    try {
      const response = await axios.get('/api/getSearchBook', {
        params: { query: keyword },
      })
      const xmlData = response.data
      const jsonData = await parseStringPromise(xmlData, { explicitArray: false })

      const books = jsonData.object?.item ?? []

      const filteredBooks = books?.map((book: BookData) => ({
        title: book.title,
        author: book.author,
        cover: book.cover,
        description: '',
        progress: 0,
        publisher: '',
      }))

      setSearchResult(filteredBooks)
    } catch (error) {
      console.error('Error fetching book data:', error)
    }
  }, 300)

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value)
  }

  return (
    <>
      {isAddBook && <AddBookModal onClose={() => setIsAddBook(false)} />}
      <div className={styles.header}>
        <PageTitle title={'My Library'} />
        <div className={styles.searchTools}>
          <SearchBar placeholder={'Search Your Book'} onChange={handleQueryChange} />
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
