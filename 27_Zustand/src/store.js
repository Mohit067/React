import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useMyStore = create(devtools((set, get) => ({
    count: 0,
    name: "mohit",

    setCount: () => {
        set((state) => ({
            count: state.count+1
        }))
    },
    capitalName: () => {
        const {name} = get();
        set({
            name: name.charAt(0).toUpperCase()+name.slice(1)
        })
    }
})))

export {useMyStore}