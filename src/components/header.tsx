import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/header.module.css'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>Logo</div>
      <div className={styles.iconButton}>
        <Link href={'/'}>
          <Image src="/svgs/search.svg" alt={'Search'} width={22.5} height={22.5} />
        </Link>
      </div>
      <div className={styles.iconButton}>
        <Link href={'/'}>
          <Image src="/svgs/notification.svg" alt={'Notification'} width={18} height={22} />
        </Link>
      </div>
      <hr className={styles.divider} />
      <div className={styles.iconButton}>
        <Link href={'/'}>
          <Image src="/svgs/avatar.svg" alt={'Avatar'} width={22.5} height={22.5} />
        </Link>
      </div>
      <div className={styles.userName}>
        Sarah
      </div>
      <div className={styles.userDropdownButton}>
        <Image src="/svgs/dropdown.svg" alt={'Dropdown'} width={22.5} height={22.5} />
      </div>
    </div>
  )
}
