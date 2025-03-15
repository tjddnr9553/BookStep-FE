import styles from '@/components/functionButton.module.css'
import Image from 'next/image'
import { FunctionButtonProps } from '@/types/types'

export default function FunctionButton(props: FunctionButtonProps) {
  const { content, onClickFn, svgUrl, bgColor, color, borderColor } = props

  return (
    <button onClick={onClickFn} className={styles.functionButton}
            style={{
              backgroundColor: bgColor,
              color: color,
              border: borderColor ? `1px solid ${borderColor}` : 'none',
            }}>
      <Image src={`./svgs/${svgUrl}.svg`} alt={'Function Button'} width={12} height={12} /> {content}
    </button>
  )
}
