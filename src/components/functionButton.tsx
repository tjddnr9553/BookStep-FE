import styles from '@/components/functionButton.module.css'
import { FunctionButtonProps } from '@/types/types'
import { Plus, Settings, Sort } from '@/components/icons/customIcons'

const menuItems = [
  { name: 'plus', Icon: Plus },
  { name: 'sort', Icon: Sort },
  { name: 'settings', Icon: Settings },
]

export default function FunctionButton(props: FunctionButtonProps) {
  const { content, onClick, cover, bgColor, color, borderColor } = props
  const matchedItem = menuItems.find(item => item.name === cover)

  return (
    <button
      onClick={onClick}
      className={styles.functionButton}
      style={{
        backgroundColor: bgColor,
        color: color,
        border: borderColor ? `1px solid ${borderColor}` : 'none',
      }}
    >
      {matchedItem && <matchedItem.Icon width={1.25} height={1.25} color={color} />} {content}
    </button>
  )
}
