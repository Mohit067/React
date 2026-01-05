import { useMyContext } from '../context/MyContext'

const F = () => {
  
  const {count} = useMyContext();

  return (
    <div className='bg-cyan-500 p-10'>
      F {count}
    </div>
  )
}

export default F