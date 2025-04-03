import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarState {
  selectedMenuIndex: number
  setSelectedMenuIndex: (index: number) => void
  initializeMenuIndex: (path: string) => void
}

const menuPaths = ['/', '/library', '/memo', '/group']

const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      selectedMenuIndex: 0,
      setSelectedMenuIndex: (index) => set({ selectedMenuIndex: index }),
      initializeMenuIndex: (path) => {
        const index = menuPaths.indexOf(path)
        if (index !== -1) set({ selectedMenuIndex: index })
      },
    }),
    {
      name: 'useSidebarStore',
    }
  )
)

export default useSidebarStore
