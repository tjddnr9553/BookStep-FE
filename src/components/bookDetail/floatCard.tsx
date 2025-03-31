import styles from '@/components/bookDetail/floatCard.module.css'
import BasicButton from '@/components/basicButton'
import Image from 'next/image'

export default function FloatCard({ content }: { content: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.category}>{content}</div>
        <Image src={'/svgs/more.svg'} alt={'More Button'} width={4} height={22} className={styles.moreButton} />
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.answerButton}>
        <BasicButton content={'답변하기'} isActive={true} />
      </div>
    </div>
  )
}
