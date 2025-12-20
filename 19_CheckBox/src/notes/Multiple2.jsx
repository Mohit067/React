import { useState } from 'react'
import './App.css'

function App() {

    const [check, setCheck] = useState({
        html: false,
        css: false,
        js: false
    });

    function handleCheck(e) {
        const { name } = e.target;
        setCheck(prev => ({
            ...prev,
            [name]: e.target.checked
        }))
        console.log(e.target.name);
    }
    // here we use still multiple input fields this is not necessery
    return (
        <>
            <div>
                <input name='html' type="checkbox" checked={check.html} onChange={handleCheck} />
                <input name='css' type="checkbox" checked={check.css} onChange={handleCheck} />
                <input name='js' type="checkbox" checked={check.js} onChange={handleCheck} />
            </div>

            {check.html && 'Html checked'} <br />
            {check.css && 'Css checked'} <br />
            {check.js && 'Js checked'} <br />

        </>
    )
}

export default App
