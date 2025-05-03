import styles from '@/components/library/bookFolder.module.css'
import { Edit, Folder, More, Trash } from '@/components/icons/customIcons'
import { useClickAway } from 'react-use'
import { useRef, useState } from 'react'

export default function BookFolder({ title }: { title: string }) {
  const moreButtonRef = useRef<HTMLDivElement>(null)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  useClickAway(moreButtonRef, () => {
    setShowDropdown(false)
  })


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Folder width={4.59} height={3.79} />
        <div className={styles.moreWrapper} ref={moreButtonRef}>
          <div onClick={() => setShowDropdown(true)}>
            <More width={0.21} height={1.15} color={'#4C4C4C'} />
          </div>
          {showDropdown &&
            <div className={styles.dropdown}>
              <div className={styles.dropdownItem}>
                <Trash width={1} height={1} />삭제하기
              </div>
              <hr className={styles.divider}/>
              <div className={styles.dropdownItem}>
                <Edit width={1} height={1} />수정하기
              </div>
            </div>
          }
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.count}>
        104개
      </div>
    </div>
  )
}
