import { useState, createContext } from 'react'
import Header from './components/Header'
export type GlobalContent = {
  thema: boolean
  setThema: (c: boolean) => void
}
export const AppContext = createContext<GlobalContent>({
  thema: false,
  setThema: () => {},
})
function App() {
  const [thema, setThema] = useState(false)
 
  return (
    <div className={thema ? 'App dark' : 'App'}>
      <AppContext.Provider value={{ thema, setThema }}>
        <Header />
      </AppContext.Provider>
    </div>
  )
}

export default App
