'use client'

import styles from '@/components/toggleSidebar.module.css'
import Image from 'next/image'
import FunctionButton from '@/components/functionButton'
import BookShelf from '@/components/bookShelf'
import { Books } from '@/mock'
import { useState, useEffect } from 'react'

export default function ToggleSidebar() {
  const mockData = ['전체보기', '3월에 읽고 싶은 책', '봄에 읽고 싶은 책', '꼭 읽어야 하는 책']
  const [toggleOpen, setToggleOpen] = useState<boolean>(false)
  const [sidebarWidth, setSidebarWidth] = useState(833)

  useEffect(() => {
    const updateWidth = () => {
      const sidebarElement = document.querySelector(`.${styles.contentContainer}`)
      if (sidebarElement) {
        setSidebarWidth(sidebarElement.getBoundingClientRect().width)
      }
    }

    if (toggleOpen) {
      updateWidth()
      window.addEventListener('resize', updateWidth)
    }

    return () => window.removeEventListener('resize', updateWidth)
  }, [toggleOpen])

  return (
    <div className={styles.container}>
      <div
        className={styles.toggleButton}
        onClick={() => setToggleOpen(!toggleOpen)}
        style={{
          transform: toggleOpen ? `translateX(-${sidebarWidth}px)` : 'translateX(0)',
        }}>
        <Image src={'/svgs/toggleSidebarButton.svg'} alt={'Toggle Sidebar Button'} width={30} height={112} />
      </div>
      <div
        className={styles.contentContainer}
        style={{
          transform: toggleOpen ? `translateX(-${sidebarWidth}px)` : 'translateX(0)',
        }}>
        <div className={styles.utilityHeader}>
          <div className={styles.headerCategory}>
            {mockData.map((item, i) =>
              <div className={styles.category} key={`Header Category - ${i}`}>{item}</div>,
            )}
          </div>
          <FunctionButton cover={'settings'} bgColor={'#FFFFFF'} color={'#000000'} borderColor={'#959FAC'} />
        </div>
        <div className={styles.content}>
          {mockData.filter((_, idx) => idx !== 0).map((item, i) =>
            <BookShelf key={`BookShelf - ${i}`} category={item} books={Books.filter((_, idx) => idx !== 1)} />,
          )}
        </div>
      </div>
    </div>
  )
}
