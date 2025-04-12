import styles from '@/components/common/functionButton.module.css'
import { FunctionButtonProps } from '@/types/types'
import { Plus, Settings, Sort, Filter } from '@/components/icons/customIcons'

const menuItems = [
  { name: 'plus', Icon: Plus },
  { name: 'sort', Icon: Sort },
  { name: 'settings', Icon: Settings },
  { name: 'filter', Icon: Filter },
]

export default function FunctionButton(props: FunctionButtonProps) {
  const { content, onClick, cover, bgColor, color, borderColor, circle, fontWeight } = props
  const matchedItem = menuItems.find(item => item.name === cover)

  return (
    <button
      onClick={onClick}
      className={styles.functionButton}
      style={{
        fontWeight: fontWeight,
        backgroundColor: bgColor,
        color: color,
        border: borderColor ? `1px solid ${borderColor}` : 'none',
        borderRadius: circle ? '50%' : '12px',
        padding: content ? '0 18px' : '0',
      }}
    >
      {matchedItem && <matchedItem.Icon width={1.25} height={1.25} color={color} />} {content}
    </button>
  )
}
