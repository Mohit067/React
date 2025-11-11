import './App.css'
import { Cart } from './InlineCss/Cart'
import { Card } from './ModuleCss/Card'
import First from './RegularCSS/first'

function App() {

  return (
    <>
      <First title="Regular Css"/>
      <Card title="Module Css"/>
      <Cart title="Inline Css"/>
    </>
  )
}

export default App
