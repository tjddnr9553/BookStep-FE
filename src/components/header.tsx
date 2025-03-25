import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/header.module.scss'

export default function Header() {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__logo}>Logo</div>
      <div className={styles.header__icons}>
        <div className={styles.icon}>
          <Link href={'/'}>
            <Image src="/svgs/search.svg" alt={'Search'} width={22.5} height={22.5} />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href={'/notification'}>
            <Image src="/svgs/notification.svg" alt={'Notification'} width={18} height={22} />
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.icon}>
          <Link href={'/mypage'}>
            <Image src="/svgs/avatar.svg" alt={'Avatar'} width={22.5} height={22.5} />
          </Link>
        </div>
        <div className={styles.userName}>
          UserName
        </div>
        <div className={styles.userDropdownButton}>
          <Image src="/svgs/dropdown.svg" alt={'Dropdown'} width={22.5} height={22.5} />
        </div>
      </div>
    </div>
  )
}
