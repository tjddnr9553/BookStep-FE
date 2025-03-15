import styles from '@/components/basicButton.module.css'
import { BasicButtonProps } from '@/types/types'

export default function BasicButton(props: BasicButtonProps) {
  const { content, isActive } = props

  return (
    <button className={styles.basicButton}
            style={{ backgroundColor: isActive ? '#EF5C7C' : '#FFFFFF', color: isActive ? '#FFFFFF' : '#262932' }}>
      {content}
    </button>
  )
}
