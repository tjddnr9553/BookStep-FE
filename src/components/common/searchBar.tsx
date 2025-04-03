'use client'

import styles from '@/components/common/searchBar.module.css'
import { ChangeEvent, useState } from 'react'
import { Search } from '@/components/icons/customIcons'

export default function SearchBar({ placeholder, action }: {
  placeholder: string,
  action: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <div className={styles.searchBar}>
      {isFocused ? null : <Search width={1.5} height={1.5} color={'#D2d2d2'} />}
      {isFocused && <label className={styles.placeholder}>{placeholder}</label>}
      <input type="search" placeholder={placeholder} className={styles.searchInput} onChange={action}
             onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    </div>
  )
}
