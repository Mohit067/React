import React from 'react'
import { useMyStore } from '../store'

const Navbar = () => {
    // const {count, name} = useMyStore();
    const count = useMyStore(state => state.count)
    const name = useMyStore(state => state.name)
  return (
    <div className="flex gap-8 text-4xl">
        <p>{count}</p>
        <p>{name}</p>
    </div>
  )
}

export default Navbar