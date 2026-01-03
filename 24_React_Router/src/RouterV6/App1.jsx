import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Help from './components/Help'
import Contact from './components/Contact'
import DefaultItem from './components/DefaultItem'
import About1 from './components/About1'
import About2 from './components/About2'
function Routerv6() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='a1' element={<About1 />}/>
          <Route path='a2' element={<About2 />}/>
        </Route>



        {/* help par ham Navigate laga rhe h ok, iska matlab /help par ayenge to ham direct kahi aur navigate kara denga jaha ka address diya h url mai waha  */}
        {/* <Route path='/help' element={<Help />} /> */}
        <Route path='/help' element={<Navigate to={'/'} replace />} />


        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/:id' element={<DefaultItem />} /> 
      </Routes>
    </>
  )
}

export default Routerv6