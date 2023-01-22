import { useState, createContext } from 'react'
import Header from './components/Header'
import Input from './components/Input'
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
  const [word, setWord] = useState('');
  const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
 
 
  return (
    <div className={thema ? 'App dark' : 'App'}>
      <AppContext.Provider value={{ thema, setThema }}>
        <Header />
        <Input
         onChange={(e)=>setWord(e.target.value)}
         value={word}
        />
      </AppContext.Provider>
    </div>
  )
}

export default App
