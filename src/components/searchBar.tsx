import styles from '@/components/searchBar.module.css'
import Image from 'next/image'
import { ChangeEvent } from 'react'

export default function SearchBar({ placeholder, onChange }: {
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className={styles.searchBar}>
      <Image src={'/svgs/search.svg'} alt={'Search'} width={22} height={22} />
      <input type="search" placeholder={placeholder} className={styles.searchInput} onChange={onChange} />
    </div>
  )
}
