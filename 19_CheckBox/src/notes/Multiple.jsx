import { useState } from 'react'
import './App.css'

function App() {
  // here we use multiple functions or useState
  const [isHtml, setIsHtml] = useState(false)
  const [isCss, setIsCss] = useState(false)
  const [isJs, setIsJs] = useState(false)

  function handleHtml(e) {
    console.log(e.target.checked);// it means toggle the current status
    setIsHtml(e.target.checked)
  }
  function handleJs(e) {
    console.log(e.target.checked);// it means toggle the current status
    setIsCss(e.target.checked)
  }
  function handleCss(e) {
    console.log(e.target.checked);// it means toggle the current status
    setIsJs(e.target.checked)
  }

  return (
    <>
      <div className='select-none'>
        {/* this is for html */}
        <label htmlFor="cd">
          <input type="checkbox" id='cd' checked={isHtml} onChange={handleHtml} />
          This is only for single checkbox
        </label>
      </div>
      <div className='select-none'>
        {/* this is for css */}
        <label htmlFor="cd">
          <input type="checkbox" id='cd' checked={isCss} onChange={handleJs} />
          This is only for single checkbox
        </label>
      </div>
      <div className='select-none'>
        {/* this is for js */}
        <label htmlFor="cd">
          <input type="checkbox" id='cd' checked={isJs} onChange={handleCss} />
          This is only for single checkbox
        </label>
      </div>
    </>
  )
}

export default App
