import Image from 'next/image'
import styles from '@/components/startRating.module.css'

export default function StarRating({ rating }: { rating: number }) {
  const colorStars = Math.min(Math.max(0, rating), 3)
  const nonColorStars = 3 - colorStars

  return (
    <div className={styles.grade}>
      {[...Array(colorStars)].map((_, index) => (
        <Image
          key={`colored-${index}`}
          src={'/svgs/colorStar.svg'}
          alt={'Colored Star'}
          width={15}
          height={15}
        />
      ))}

      {[...Array(nonColorStars)].map((_, index) => (
        <Image
          key={`non-colored-${index}`}
          src={'/svgs/nonColorStar.svg'}
          alt={'Non-Colored Star'}
          width={15}
          height={15}
        />
      ))}
    </div>
  )
}
