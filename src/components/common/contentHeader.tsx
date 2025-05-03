'use client'

import styles from '@/components/common/contentHeader.module.css'

import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import PageTitle from '@/components/common/pageTitle'
import SearchBar from '@/components/common/searchBar'
import FunctionButton from '@/components/common/functionButton'
import BasicButton from '@/components/common/basicButton'
import AddBookModal from '@/components/addBookModal/addBookModal'
import CustomDatePicker from '@/components/common/customDatePicker'
import { SelectedDot } from '@/components/icons/customIcons'

interface ContentHeaderProps {
  title: string;
  categories: string[];
  activeCategory: number;
  placeholder: string;
  options: {
    add: boolean;
    settings: boolean;
    filter: boolean;
    sort: boolean;
  }
  onCategoryChange: (idx: number) => void
}

export default function ContentHeader({
                                        title,
                                        categories,
                                        activeCategory,
                                        placeholder,
                                        options,
                                        onCategoryChange,
                                      }: ContentHeaderProps) {
  const [activeSortItem, setActiveSortItem] = useState<boolean[]>([true, false, false, false])
  const [activeOrder, setActiveOrder] = useState<boolean[]>([true, false])
  const [showAddBookModal, setShowAddBookModal] = useState<boolean>(false)
  const [showSortDropdown, setShowSortDropdown] = useState<boolean>(false)
  const sortDropdownRef = useRef<HTMLDivElement>(null)

  const sortItems = ['등록순', '책제목', '작가이름', '선호도']
  const orders = ['오름차순', '내림차순']
  // const [keyword, setKeyword] = useState('')
  // const [searchResult, setSearchResult] = useState<BookData[] | null>(null)

  // DB에서 책 조회 로직으로 수정
  // const { data, isLoading, error } = GetSearchBook(keyword)

  // const debouncedSearch = debounce((value: string) => {
  //   setKeyword(value)
  // }, 300)

  // 해당 엘리먼트 바깥을 클릭시 콜백함수 호출
  useClickAway(sortDropdownRef, () => {
    setShowSortDropdown(false)
  })

  const handleSelectDropdown = (idx: number, type: string) => {
    if (type === 'sortItem') {
      setActiveSortItem(activeSortItem.map((_, i) => i === idx))
    } else if (type === 'order') {
      setActiveOrder(activeOrder.map((_, i) => i === idx))
    }
    setShowSortDropdown(false)
  }

  return (
    <>
      {showAddBookModal && <AddBookModal onClose={() => setShowAddBookModal(false)} />}
      <div className={styles.header}>
        <PageTitle title={title} />
        <div className={styles.searchTools}>
          <SearchBar placeholder={placeholder} action={(e) => console.log(e.target.value)} />
          {options.add && <FunctionButton cover={'plus'} bgColor={'#262932'} content={'책 등록하기'} color={'#FFFFFF'}
                                          onClick={() => setShowAddBookModal(true)} fontWeight={500}/>}
          {options.settings &&
            <FunctionButton cover={'settings'} bgColor={'#FFFFFF'} color={'#000000'} borderColor={'#63697E'} />}
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.categoryButtons}>
          {categories.map((item, idx) =>
            <BasicButton key={`${idx}.${item}`} content={item} isActive={activeCategory === idx}
                         onClick={() => onCategoryChange(idx)}
                         color={'#FFFFFF'} />,
          )}
        </div>
        <div className={styles.filterTools}>
          <CustomDatePicker />
          {options.filter && <FunctionButton cover={'filter'} bgColor={'#FFFFFF'} color={'#000000'} circle={true} />}
          {options.sort && <FunctionButton cover={'sort'} bgColor={'#FFFFFF'} color={'#000000'} circle={true}
                                           borderColor={showSortDropdown ? '#262932' : undefined}
                                           onClick={() => setShowSortDropdown(!showSortDropdown)} />}
          {showSortDropdown &&
            <div className={styles.sortDropdown} ref={sortDropdownRef}>
              {sortItems.map((item, idx) =>
                <div key={`${item}`} className={styles.sortItems} onClick={() => handleSelectDropdown(idx, 'sortItem')}
                     style={{
                       background: activeSortItem[idx] ? '#F6F6F8' : '#FFFFFF',
                       color: activeSortItem[idx] ? '#EF5C7C' : '#111111',
                     }}>
                  <div className={styles.selectedDotWrapper}>
                    {activeSortItem[idx] && <SelectedDot width={0.3} height={0.3} />}
                  </div>
                  {item}
                </div>,
              )}
              <hr />
              {orders.map((item, idx) =>
                <div key={`${item}`} className={styles.orders}
                     style={{
                       background: activeOrder[idx] ? '#F6F6F8' : '#FFFFFF',
                       color: activeOrder[idx] ? '#EF5C7C' : '#111111',
                     }}
                     onClick={() => handleSelectDropdown(idx, 'order')}>
                  <div className={styles.selectedDotWrapper}>
                    {activeOrder[idx] && <SelectedDot width={0.3} height={0.3} />}
                  </div>
                  {item}
                </div>,
              )}
            </div>
          }
        </div>
      </div>
    </>
  )
}
