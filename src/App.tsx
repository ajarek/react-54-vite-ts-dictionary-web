import { useState, createContext, useEffect } from 'react'
import { useFetch } from './api/useFetch'
import Header from './components/Header'
import Input from './components/Input'
import { BsPlayFill } from 'react-icons/bs'
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
  const [newData, SetNewData] = useState([])

  const [word, setWord] = useState('keyboard')
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  const { response, error, isLoading } = useFetch(url)
  if (response) {
    var { meanings, phonetic, sourceUrls } = Object.values(response)[0]
  }

  return (
    <div className={thema ? 'App dark' : 'App'}>
      <AppContext.Provider value={{ thema, setThema }}>
        <Header />
        <Input
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <div className='wrapper-play'>
          <div className='word'>{word}</div>
          <div className='btn-play'>
            <BsPlayFill />
          </div>
        </div>
        <div className='phonetic'>{phonetic}</div>
        <div className='partOfSpeech'>
          {response? meanings[0].partOfSpeech:null}
          <hr />
        </div>
        <ul>
          Meaning
          {response &&
            meanings[0].definitions.map(
              (el: { definition: string }, index: number) => {
                return <li key={index}>{el.definition}</li>
              }
            )}
        </ul>
        <div className='synonyms'>
          Synonyms{' '}
          <span>
            {response &&
              meanings[0].synonyms.map((el: string, index: number) => {
                return <p key={index}>{el}</p>
              })}
          </span>
        </div>
        <div className='partOfSpeech'>
          {response? meanings[1].partOfSpeech:null}
          <hr />
        </div>
        <ul>
          Meaning
          {response &&
            meanings[1].definitions.map(
              (el: { definition: string; example: string }, index: number) => {
                return (
                  <li key={index}>
                    {el.definition}
                    <br />"{el.example}"
                  </li>
                )
              }
            )}
        </ul>
        <ul>
          Source
          {response &&
            sourceUrls.map((el: string, index: number) => {
              return <li key={index}>{el}</li>
            })}
        </ul>
      </AppContext.Provider>
    </div>
  )
}

export default App
