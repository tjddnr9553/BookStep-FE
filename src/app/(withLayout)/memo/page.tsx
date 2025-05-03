'use client'

import styles from '@/app/(withLayout)/library/page.module.css'
import ContentHeader from '@/components/common/contentHeader'
import { useState } from 'react'

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<number>(0)

  return (
    <div className={styles.container}>
      <ContentHeader title={'Memo'} categories={['전체보기', '북마크']} activeCategory={activeCategory}
                     onCategoryChange={setActiveCategory}
                     options={{ add: false, settings: false, filter: true, sort: true }}
                     placeholder={'Search your memo'} />
      <div className={styles.content}>
      </div>
    </div>
  )
}
