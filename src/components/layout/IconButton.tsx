import Link from 'next/link'
import styles from '@/components/layout/header.module.scss'

interface IconButtonProps {
  href: string
  Icon: React.FC<{ width: number; height: number; color: string }>
  color: string
}

export default function IconButton({ href, Icon, color }: IconButtonProps) {
  return (
    <div className={styles.iconButton}>
      <Link href={href}>
        <Icon width={1.75} height={1.75} color={color} />
      </Link>
    </div>
  )
}
