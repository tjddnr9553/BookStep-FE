import styles from '@/app/not-found.module.css'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={styles.container}>
      해당 페이지가 없습니다.
      <Link href={'/'}>메인화면으로 이동하기</Link>
    </div>
  )
}
