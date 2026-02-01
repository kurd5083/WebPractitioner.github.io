import { create } from 'zustand'

type MenuStore = {
    isOpen: boolean,
    openMenu: () => void,
    closeMenu: () => void
}

export const useMenuStore = create<MenuStore>((set) => ({
    isOpen: false,

    openMenu: () => {
        document.body.style.overflow = "hidden"
        set({ isOpen: true })
    },
    closeMenu: () => {
        document.body.style.overflow = "auto"
        set({ isOpen: false })
    }
}))