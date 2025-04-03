import styles from '@/components/bookDetail/floatCard.module.css'
import BasicButton from '@/components/common/basicButton'
import { More } from '@/components/icons/customIcons'

export default function FloatCard({ content }: { content: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.category}>{content}</div>
        <More width={1.04} height={1.04} color={'#D9D9D9'} />
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.answerButton}>
        <BasicButton content={'답변하기'} isActive={true} />
      </div>
    </div>
  )
}
