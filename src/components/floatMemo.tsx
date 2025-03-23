'use client'

import MemoItem from '@/components/memoItem'
import useMemoStore from '@/stores/useMemoStore'
import { MemoData } from '@/types/types'

export default function FloatMemo() {
  const { isOpen, memos } = useMemoStore()

  return (
    <div>
      {isOpen && memos.map((memo: MemoData, i: number) => (
        <MemoItem memo={memo} key={`Memo - ${i}`} />
      ))}
    </div>
  )
}
