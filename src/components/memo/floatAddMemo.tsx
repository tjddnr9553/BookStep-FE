'use client'

import useMemoStore from '@/stores/useMemoStore'
import styles from '@/components/memo/floatAddMemo.module.css'

export default function FloatAddMemo() {
  const { isOpen, setIsOpen, memos, addMemo } = useMemoStore()

  function handleClickPlusButton() {
    setIsOpen()
    const id = memos.length > 0 ? memos[memos.length - 1].$id + 1 : 0
    const basePostion = 10

    if (memos.length <= 0) {
      addMemo({
        $id: id,
        body: JSON.stringify(''),
        colors: JSON.stringify({
          id: 'color-purple',
          colorHeader: '#FED0FD',
          colorBody: '#FEE5FD',
          colorText: '#18181A',
        }),
        position: JSON.stringify({ x: basePostion, y: basePostion }),
      })
    }
  }

  return (
    <div className={styles.controls}>
      <div className={styles.plusButton} onClick={handleClickPlusButton}>
        {isOpen ? '열기' : '닫기'}
      </div>
    </div>
  )
}
