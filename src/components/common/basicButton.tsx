import styles from '@/components/common/basicButton.module.css'
import { BasicButtonProps } from '@/types/types'
import { Right } from '@/components/icons/customIcons'

const iconList = [
  { name: 'right', Icon: Right },
]

export default function BasicButton(props: BasicButtonProps) {
  const { content, isActive, onClick, color, icon, fontWeight } = props
  const matchedIcon = iconList.find(item => item.name === icon)

  return (
    <button className={styles.basicButton}
            style={{
              backgroundColor: isActive ? '#EF5C7C' : '#FFFFFF',
              color: isActive ? '#FFFFFF' : '#262932',
              fontWeight: fontWeight,
            }}
            onClick={onClick}>
      {content}
      {matchedIcon && <matchedIcon.Icon width={0.73} height={0.73} color={color} />}
    </button>
  )
}
