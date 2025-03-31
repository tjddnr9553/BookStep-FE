import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/sidebar.module.scss'

export default function Sidebar() {
  return (
    <div className={styles.sidebar__container}>
      <div className={styles.backIcon}>
        <Image src="/svgs/back.svg" alt={'Back'} width={13.8} height={9.2} />
      </div>
      <div className={styles.icons}>
        {['/home', '/library', '/post', '/group'].map((path, index) =>
          <div className={styles.icon} key={`Icon - ${index}`}>
            <Link href={`${path}`}>
              <Image src={`/svgs${path}.svg`} alt={`${path}`} width={22} height={22} />
            </Link>
          </div>,
        )}
      </div>
      <div className={styles.logoutIcon}>
        <Link href="/login">
          <Image src="/svgs/logout.svg" alt={'Logout'} width={17} height={20} />
        </Link>
      </div>
    </div>
  )
}
