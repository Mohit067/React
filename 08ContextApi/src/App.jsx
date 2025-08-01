import './App.css'
import { UserContextProvider } from './context/userContextProvider'
import { Login } from './components/Login/Login'
import { Profile } from './components/Profile/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Fill Detail's Here</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
