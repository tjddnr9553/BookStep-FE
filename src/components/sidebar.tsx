import styles from '@/components/sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.iconButton}>
        <Image src="/svgs/back.svg" alt={'Back'} width={13.8} height={9.2} />
      </div>
      <div className={styles.iconButton}>
        <Link href="/">
          <Image src="/svgs/home.svg" alt={'Home'} width={21} height={25} />
        </Link>
      </div>
      <div className={styles.iconButton}>
        <Link href="/library">
          <Image src="/svgs/library.svg" alt={'Library'} width={21} height={23.33} />
        </Link>
      </div>
      <div className={styles.iconButton}>
        <Link href="/post">
          <Image src="/svgs/post.svg" alt={'Post'} width={20.76} height={25} />
        </Link>
      </div>
      <div className={styles.iconButton}>
        <Link href="/group">
          <Image src="/svgs/group.svg" alt={'Group'} width={28} height={23} />
        </Link>
      </div>
      <Link href={'/login'} className={styles.iconButton}>
        <Image src="/svgs/logout.svg" alt={'Logout'} width={17} height={20} />
      </Link>
    </div>
  )
}
