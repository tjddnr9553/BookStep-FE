'use client'

import styles from '@/components/layout/sidebar.module.scss'

import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import useSidebarStore from '@/stores/useSidebarStore'

import { Back, Group, Home, Library, Logout, Memo } from '@/components/icons/customIcons'

const menuItems = [
  { href: '/', Icon: Home },
  { href: '/library', Icon: Library },
  { href: '/memo', Icon: Memo },
  { href: '/group', Icon: Group },
]

export default function Sidebar() {
  const { selectedMenuIndex, setSelectedMenuIndex, initializeMenuIndex } = useSidebarStore()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    initializeMenuIndex(pathname)
  }, [initializeMenuIndex, pathname])

  return (
    <div className={styles.sidebar__container}>
      <div className={styles.sidebar__icon} onClick={() => router.back()}>
        <Back width={1.5} height={1.5} color={'#262932'} />
      </div>
      <div className={styles.sidebar__menuItems}>
        {menuItems.map(({ href, Icon }, index) => (
          <Link href={href} key={`Sidebar Menu - ${index}`}>
            <div
              className={`${styles.sidebar__icon} ${selectedMenuIndex === index ? styles.activeMenu : styles.unactiveMenu}`}
              onClick={() => setSelectedMenuIndex(index)}>
              <Icon width={1.75} height={1.75} color={selectedMenuIndex === index ? '#FFFFFF' : '#8F8F8F'} />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebar__icon}>
        <Link href="/login">
          <Logout width={1.5} height={1.5} color={'#262932'} />
        </Link>
      </div>
    </div>
  )
}
