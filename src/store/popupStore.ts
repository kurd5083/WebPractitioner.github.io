import { create } from 'zustand'

type Order = {
    id: number,
    name: string,
    size: number,
    price: number,
    img: string,
    category: string[],
    quantity: number
}
type PopupStore = {
    popup: {
        isOpen: boolean
        orders: Order[]
    },
    addOrder: (order: Order) => void,
    updateOrder: (id: number,size: number,  actions: string) => void,
    delOrder: (id: number, size: number) => void,
    openPopup: () => void,
    closePopup: () => void,
    sumOrder: () => number,
    quantityOrder: () => number,
    clearOrders: () => void,
}

export const usePopupStore = create<PopupStore>((set, get) => ({
    popup: {
        isOpen: false,
        orders: []
    },
    addOrder: (order) => {
        const { orders } = get().popup;

        const existingOrderNSize = orders.find((o) => o.size === order.size && o.id === order.id);

        if (existingOrderNSize) {
            set((state) => ({
                popup: {
                    ...state.popup,
                    orders: state.popup.orders.map((o) =>
                        o.id === order.id ? { ...o, quantity: o.quantity + 1 } : o
                    ),
                }
            }))
        } else {
            set((state) => ({
                popup: {
                    ...state.popup,
                    orders: [...state.popup.orders, { ...order, quantity: 1 }]
                }
            }))
        }
    },
    updateOrder: (id, size, actions) => {
        set((state) => ({
            popup: {
                ...state.popup,
                orders: state.popup.orders.map((o) =>
                    o.id === id && o.size === size ? { ...o, quantity: actions === "plus" ? o.quantity + 1 : Math.max(o.quantity - 1, 1) } : o
                ),
            }
        }))
    },
    delOrder: (id, size) => {
        console.log(size)

        set((state) => ({
            popup: {
                ...state.popup,
                orders: state.popup.orders.filter(
                    (order) => !(order.id === id && order.size === size)
                ),
            }
        }))
    },
    openPopup: () => {
        document.body.style.overflow = "hidden"
        set((state) => ({
            popup: {
                ...state.popup,
                isOpen: true
            }
        }))
    },

    closePopup: () => {
        document.body.style.overflow = "auto"
        set((state) => ({
            popup: {
                ...state.popup,
                isOpen: false
            }
        }))
    },
    sumOrder: () => {
        const { orders } = get().popup;
        return orders.reduce((sum, o) => sum + (o.price * o.quantity), 0)
    },
    quantityOrder: () => {
        const { orders } = get().popup
        return orders.reduce((sum, o) => sum + o.quantity, 0)
    },
    clearOrders: () => {
        set(() => ({
            popup: {
                isOpen: false,
                orders: []
            }
        }));
        document.body.style.overflow = "auto";
    }
}))