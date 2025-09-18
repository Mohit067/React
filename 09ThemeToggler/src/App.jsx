import { useEffect, useState } from 'react'
import './App.css'
import { ThemePorvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemePorvider value={{lightTheme, darkTheme, themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />
          </div>
      </div>
    </div>
    </ThemePorvider>
  )
}

export default App
