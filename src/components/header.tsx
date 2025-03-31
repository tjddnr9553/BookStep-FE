import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/header.module.css'
import { Dropdown, Notification, Search } from '@/components/icons/customIcons'

export default function Header({ isDetailed }: { isDetailed?: boolean }) {
  return (
    <div className={styles.headerContainer}
         style={{ background: isDetailed ? 'none' : '#FFFFFF', border: isDetailed ? 'none' : '#FFFFFF' }}>
      <div className={styles.headerLogo}>Logo</div>
      <div className={styles.iconButton} style={{ background: isDetailed ? 'rgba(255, 255, 255, 0.2)' : '#FFFFFF' }}>
        <Link href={'/'}>
          <Search width={22.5} height={22.5} color={isDetailed ? '#FFFFFF' : '#262932'} />
        </Link>
      </div>
      <div className={styles.iconButton} style={{ background: isDetailed ? 'rgba(255, 255, 255, 0.2)' : '#FFFFFF' }}>
        <Link href={'/'}>
          <Notification width={22.5} height={22.5} color={isDetailed ? '#FFFFFF' : '#262932'} />
        </Link>
      </div>
      <hr className={styles.divider} style={{ background: isDetailed ? 'rgba(255, 255, 255, 0.2)' : '#FFFFFF' }} />
      <div className={styles.iconButton}>
        <Link href={'/'}>
          <Image src="/svgs/avatar.svg" alt={'Avatar'} width={22.5} height={22.5} />
        </Link>
      </div>
      <div className={styles.userName} style={{ color: isDetailed ? '#FFFFFF' : '#535353' }}>
        Sarah
      </div>
      <div className={styles.userDropdownButton}>
        <Dropdown width={13} height={6.5} color={isDetailed ? '#FFFFFF' : '#535353'} />
      </div>
    </div>
  )
}
