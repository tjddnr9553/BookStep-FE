import styles from '@/components/searchBar.module.css'
import Image from 'next/image'

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className={styles.searchBar}>
      <Image src={'./svgs/search.svg'} alt={'Search'} width={22} height={22} />
      <input placeholder={placeholder} className={styles.searchInput} />
    </div>
  )
}
