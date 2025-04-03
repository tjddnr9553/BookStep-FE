import styles from '@/components/layout/header.module.scss'

import Link from 'next/link'
import Image from 'next/image'

import IconButton from '@/components/layout/IconButton'
import { Avatar, Dropdown, Notification, Search } from '@/components/icons/customIcons'

export default function Header({ isDetailed = false }: { isDetailed?: boolean }) {
  return (
    <div className={`${styles.header__container} ${isDetailed ? styles.detailed : styles.default}`}>
      <div className={styles.header__logo}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={138} height={46} />
        </Link>
      </div>
      <div className={styles.header__iconContainer}>
        <IconButton href="/" Icon={Search} color={isDetailed ? '#FFFFFF' : '#262932'} />
        <IconButton href="/" Icon={Notification} color={isDetailed ? '#FFFFFF' : '#262932'} />
        <hr className={styles.header__divider} />
        <IconButton href="/" Icon={Avatar} color={isDetailed ? '#FFFFFF' : '#262932'} />
        <div className={styles.header__userName}>Sarah</div>
        <div className={styles.header__dropdown}>
          <Dropdown width={1.04} height={0.34} color={isDetailed ? '#FFFFFF' : '#262932'} />
        </div>
      </div>
    </div>
  )
}
