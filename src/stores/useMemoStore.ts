import { create } from 'zustand'
import { MemoData } from '@/types/types'

interface MemoStore {
  isOpen: boolean
  setIsOpen: () => void
  memos: MemoData[]
  addMemo: (memos: MemoData) => void
  updateMemoPosition: ($id: number, position: { x: number, y: number }) => void
  updateMemoBody: (id: number, body: string) => void
  removeMemo: (id: number) => void
}

const useMemoStore = create<MemoStore>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  memos: [],
  addMemo: (memo) => set((state) => ({ memos: [...state.memos, memo] })),
  updateMemoPosition: (id: number, position: { x: number, y: number }) =>
    set((state) => ({
      memos: state.memos.map((memo) =>
        memo.$id === id ? { ...memo, position: JSON.stringify(position) } : memo,
      ),
    })),
  updateMemoBody: (id: number, body: string) =>
    set((state) => ({
      memos: state.memos.map((memo) =>
        memo.$id === id ? { ...memo, body: JSON.stringify(body) } : memo,
      ),
    })),
  removeMemo: (id: number) => set((state) => ({ memos: state.memos.filter((memo) => memo.$id !== id) })),
}))
export default useMemoStore
