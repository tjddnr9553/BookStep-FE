'use client'

import { MemoData } from '@/types/types'
import styles from '@/components/memo/memoItem.module.css'
import { useEffect, useRef } from 'react'
import { autoGrow, setNewOffset, setZIndex } from '@/utils/util'
import useMemoStore from '@/stores/useMemoStore'
import { Plus, Trash } from '@/components/icons/customIcons'

export default function MemoItem({ memo }: { memo: MemoData }) {
  const { addMemo, updateMemoPosition, updateMemoBody, removeMemo } = useMemoStore()
  const body = JSON.parse(memo.body)
  const position = JSON.parse(memo.position)
  const colors = JSON.parse(memo.colors)
  const mousePosition = { x: 0, y: 0 }
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const memoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textAreaRef.current) return
    autoGrow(textAreaRef.current)
  }, [])

  function mouseDown(e: React.MouseEvent) {
    if (!memoRef.current) return
    setZIndex(memoRef.current)

    mousePosition.x = e.clientX
    mousePosition.y = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }

  function mouseMove(e: MouseEvent) {
    if (!memoRef.current) return

    const mouseMoveDirection = { x: mousePosition.x - e.clientX, y: mousePosition.y - e.clientY }

    mousePosition.x = e.clientX
    mousePosition.y = e.clientY

    const newPosition = setNewOffset(memoRef.current, mouseMoveDirection)
    updateMemoPosition(memo.$id, newPosition)
  }

  function mouseUp() {
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
  }

  function handleAddMemo() {
    const basePostion = 10 // 메모 생성 기준지점

    addMemo({
      $id: memo.$id + 1,
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

  function handleRemoveMemo() {
    removeMemo(memo.$id)
  }

  function handleInput() {
    if (!textAreaRef.current || !textAreaRef.current.textContent) return
    autoGrow(textAreaRef.current)
    updateMemoBody(memo.$id, textAreaRef.current.textContent)
  }

  return (
    <div className={styles.memo} style={{ backgroundColor: colors.colorBody, left: position.x, top: position.y }}
         ref={memoRef} onMouseDown={mouseDown}>
      <div className={styles.memoHeader} style={{ backgroundColor: colors.colorHeader }}>
        <Trash width={2} height={2} onClick={handleRemoveMemo} />
        <Plus width={2} height={2} onClick={handleAddMemo} />
      </div>
      <div className={styles.memoContent}>
        <textarea className={styles.memoTextarea} style={{ color: colors.colorText }} value={body}
                  ref={textAreaRef} onChange={(e) => updateMemoBody(memo.$id, e.target.value)} onInput={handleInput}
                  onFocus={() => {
                    if (!memoRef.current) return
                    setZIndex(memoRef.current)
                  }} />
      </div>
    </div>
  )
}
