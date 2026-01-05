import { useMyContext } from '../context/MyContext'

const C = () => {

  const {count} = useMyContext();
  
  return (
    <div className='bg-gray-700 p-10'>
      C {count}
    </div>
  )
}

export default C