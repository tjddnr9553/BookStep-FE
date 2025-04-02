import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/header.module.css'
import { Avatar, Dropdown, Notification, Search } from '@/components/icons/customIcons'

export default function Header({ isDetailed }: { isDetailed?: boolean }) {
  return (
    <div className={styles.headerContainer}
         style={{ background: isDetailed ? 'none' : '#FFFFFF', border: isDetailed ? 'none' : '#F6F6F8' }}>
      <div className={styles.headerLogo}>
        <Link href={'/'}>
          <Image src={'/images/logo.png'} alt={'Logo'} width={138} height={46} />
        </Link>
      </div>
      <div className={styles.iconButton} style={{ background: isDetailed ? 'rgba(255, 255, 255, 0.2)' : '#F6F6F8' }}>
        <Link href={'/'}>
          <Search width={1.75} height={1.75} color={isDetailed ? '#FFFFFF' : '#262932'} />
        </Link>
      </div>
      <div className={styles.iconButton} style={{ background: isDetailed ? 'rgba(255, 255, 255, 0.2)' : '#F6F6F8' }}>
        <Link href={'/'}>
          <Notification width={1.75} height={1.75} color={isDetailed ? '#FFFFFF' : '#262932'} />
        </Link>
      </div>
      <hr className={styles.divider} style={{ background: isDetailed ? 'rgba(255, 255, 255,   0.2)' : '#F6F6F8' }} />
      <div className={styles.iconButton} style={{ background: isDetailed ? 'rgba(255, 255, 255, 0.2)' : '#F6F6F8' }}>
        <Link href={'/'}>
          <Avatar width={1.75} height={1.75} color={isDetailed ? '#FFFFFF' : '#262932'} />
        </Link>
      </div>
      <div className={styles.userName} style={{ color: isDetailed ? '#FFFFFF' : '#535353' }}>
        Sarah
      </div>
      <div className={styles.userDropdownButton}>
        <Dropdown width={1.04} height={0.34} color={isDetailed ? '#FFFFFF' : '#535353'} />
      </div>
    </div>
  )
}
