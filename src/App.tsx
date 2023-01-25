import { useState, createContext } from 'react'
import { useFetch } from './api/useFetch'
import Header from './components/Header'
import Input from './components/Input'
import { BsPlayFill } from 'react-icons/bs'
export type GlobalContent = {
  thema: boolean
  setThema: (c: boolean) => void
  font: string
  setFont: (c: string) => void
}
export const AppContext = createContext<GlobalContent>({
  thema: false,
  setThema: () => {},
  font: 'Serif',
  setFont: () => {},
})

function App() {
  const [thema, setThema] = useState(false)
  const [playText, SetPlayText] = useState(false)
  const [font, setFont] = useState('Serif')
  const [word, setWord] = useState('keyboard')
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  const { response, error, isLoading } = useFetch(url)

  if (response) {
    var { meanings, phonetic, sourceUrls, phonetics } =
      Object.values(response)[0]
  }
  const audioPlay =
    response && phonetics.filter((p: { audio: string }) => p.audio != '')

  return (
    <div
      className={thema ? 'App dark' : 'App'}
      style={
        font === 'Serif' ? { fontFamily: 'Poppins' } : { fontFamily: 'Georgia' }
      }
    >
      <AppContext.Provider value={{ thema, setThema, font, setFont }}>
        <Header />
        <Input
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <div className='wrapper-play'>
          <div className='word'>
            <h2>{word}</h2>
          </div>
          <div
            className='btn-play'
            onClick={() => SetPlayText(!playText)}
          >
            <BsPlayFill />
          </div>
        </div>
        <div>
          {playText && (
            <audio controls>
              <source
                src={audioPlay && audioPlay[0].audio}
                type='audio/mpeg'
              ></source>
            </audio>
          )}
        </div>
        <div className='phonetic'>{phonetic}</div>
        <div className='partOfSpeech'>
          {response && meanings[0].partOfSpeech}
          <div>
            <hr />
          </div>
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
          Synonyms
          <span>
            {response &&
              meanings[0].synonyms.map((el: string, index: number) => {
                return <p key={index}>: {el}</p>
              })}
          </span>
        </div>
        <div className='partOfSpeech'>
          {response && meanings[1].partOfSpeech}
          <div>
            <hr />
          </div>
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
          Source:
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
