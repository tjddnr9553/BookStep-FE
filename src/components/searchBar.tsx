'use client'

import styles from '@/components/searchBar.module.css'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export default function SearchBar({ placeholder, action }: {
  placeholder: string,
  action: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <div className={styles.searchBar}>
      {isFocused ? null : <Image src={'/svgs/search.svg'} alt={'Search'} width={22} height={22} />}
      {isFocused && <label className={styles.placeholder}>{placeholder}</label>}
      <input type="search" placeholder={placeholder} className={styles.searchInput} onChange={action}
             onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    </div>
  )
}
