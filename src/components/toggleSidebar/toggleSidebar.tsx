'use client'

import styles from '@/components/toggleSidebar/toggleSidebar.module.css'
import Image from 'next/image'
import FunctionButton from '@/components/common/functionButton'
import BookShelf from '@/components/toggleSidebar/bookShelf'
import { Books } from '@/mock'
import { useState, useRef, useCallback, useMemo } from 'react'
import { throttle } from 'lodash'
import { Right } from '@/components/icons/customIcons'

const mockData = ['전체보기', '3월에 읽고 싶은 책', '봄에 읽고 싶은 책', '꼭 읽어야 하는 책']

export default function ToggleSidebar() {
  const [toggleOpen, setToggleOpen] = useState<boolean>(false)
  const [sidebarWidth, setSidebarWidth] = useState<number>(800)
  const [isGridView, setIsGridView] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<number>(0)

  const sidebarRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isResizing = useRef<boolean>(false)

  const resize = useMemo(() =>
    throttle((e: MouseEvent) => {
      if (!isResizing.current || !sidebarRef.current) return

      requestAnimationFrame(() => {
        const newWidth = window.innerWidth - e.clientX
        if (newWidth >= 800 && newWidth <= 1200) {
          setSidebarWidth(newWidth)
        }
      })
    }, 16), [],
  )

  function startResize(e: React.MouseEvent) {
    e.preventDefault()
    isResizing.current = true
    document.addEventListener('mousemove', resize)
    document.addEventListener('mouseup', stopResize)
  }

  function stopResize() {
    isResizing.current = false
    document.removeEventListener('mousemove', resize)
    document.removeEventListener('mouseup', stopResize)
  }

  function handleMoreButton(categoryNumber: number) {
    if (selectedCategory === categoryNumber) {
      setIsGridView(false)
      setSelectedCategory(null)
      setActiveCategory(0) // 전체보기 활성화
    } else {
      setIsGridView(true)
      setSelectedCategory(categoryNumber)
      setActiveCategory(categoryNumber + 1)
    }
  }

  function handleCategoryClick(categoryIndex: number) {
    if (categoryIndex === 0) {
      setIsGridView(false)
      setSelectedCategory(null)
      setActiveCategory(0)
    } else {
      setIsGridView(true)
      setSelectedCategory(categoryIndex - 1)
      setActiveCategory(categoryIndex)
    }
  }

  return (
    <div ref={sidebarRef} className={styles.container}
         style={{ width: `${sidebarWidth}px`, right: toggleOpen ? '0' : `-${sidebarWidth}px` }}>
      <div className={styles.toggleButton} onClick={() => setToggleOpen(!toggleOpen)}>
        <Image src={'/svgs/toggleSidebarButton.svg'} alt={'Toggle Sidebar Button'} width={30} height={112} />
      </div>
      <div className={styles.contentContainer} style={{ transform: toggleOpen ? '0' : `-${sidebarWidth}px` }}>
        <div className={styles.utilityHeader}>
          <div className={styles.headerCategory}>
            {mockData.map((item, i) => (
              <div
                className={activeCategory === i ? styles.activeCategory : styles.inactiveCategory}
                key={`Header Category - ${i}`}
                onClick={() => handleCategoryClick(i)}
              >
                {item}
              </div>
            ))}
          </div>
          <FunctionButton cover={'settings'} bgColor={'#FFFFFF'} color={'#000000'} borderColor={'#959FAC'} />
        </div>
        <div className={styles.content} ref={contentRef}>
          {mockData.filter((_, idx) => idx !== 0).map((item, i) => (
            (selectedCategory === null || selectedCategory === i) && (
              <div key={`BookShelf - ${i}`}>
                <div className={styles.contentHeader}>
                  <div className={styles.contentCategory}>{item}</div>
                  <div className={styles.moreButton} onClick={() => handleMoreButton(i)}>
                    {selectedCategory === i ? '돌아가기' : '더보기'}
                    <Right width={0.5} height={0.5} color={'#767676'} />
                  </div>
                </div>
                <BookShelf books={Books} isGridView={isGridView} />
              </div>
            )
          ))}
        </div>
      </div>
      <div className={styles.resizeHandle} onMouseDown={startResize} />
    </div>
  )
}
