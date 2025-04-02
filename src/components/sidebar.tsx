import Link from 'next/link'
import styles from '@/components/sidebar.module.scss'
import { Back, Group, Home, Library, Logout, Post } from '@/components/icons/customIcons'

const menuItems = [
  { href: '/home', Icon: Home },
  { href: '/library', Icon: Library },
  { href: '/post', Icon: Post },
  { href: '/group', Icon: Group },
]

export default function Sidebar() {
  return (
    <div className={styles.sidebar__container}>
      <div className={styles.backIcon}>
        <Back width={1.5} height={1.5} color={'#262932'} />
      </div>
      <div className={styles.icons}>
        {menuItems.map(({ href, Icon }, index) => (
          <div className={styles.icon} key={index}>
            <Link href={href}>
              <Icon width={1.75} height={1.75} color="#8F8F8F" />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.logoutIcon}>
        <Link href="/login">
          <Logout width={1.5} height={1.5} color={'#262932'} />
        </Link>
      </div>
    </div>
  )
}
