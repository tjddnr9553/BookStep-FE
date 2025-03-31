import styles from '@/components/startRating.module.css'
import { ColorStar, NonColorStar } from '@/components/icons/customIcons'


export default function StarRating({ size, color, rating }: { size: number, color: string, rating: number }) {
  const colorStars = Math.min(Math.max(0, rating), 3)
  const nonColorStars = 3 - colorStars

  return (
    <div className={color !== '#B6B6B6' ? styles.customContainer : styles.container}>
      {[...Array(colorStars)].map((_, index) => (
        <ColorStar key={index} width={size} height={size} color={'#EF5C7C'} />
      ))}
      {[...Array(nonColorStars)].map((_, index) => (
        <NonColorStar key={index} width={size} height={size} color={color} />
      ))}
    </div>
  )
}
