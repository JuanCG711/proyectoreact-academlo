
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import { useRef, useState } from 'react'
import MainContent from './components/mainContent'



const App = () => {

  const [inputValue, setInputValue] = useState(getRandomLocation())
 
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, hasError] = useFetch(url)

  const inputLocation = useRef()
  const handleSubmit = event => {
      event.preventDefault()
     setInputValue(inputLocation.current.value) //event.target.firstChild.value
  }
  
 return (
    <div className="App">
      <img src='src\utils\image.png' alt=''/>
      <h1 className='app_title'>Rick and Morty</h1>
      <form className='app_form' onSubmit={handleSubmit}>
          <input className='app_input' ref={inputLocation}  type="text" />
          <button className='app_btn'>Search</button>
      </form>
        {
          hasError
          ? <h2 className='app_error'>❌ Hey! you must provide an id from 1 to 126🥺</h2>
          : <MainContent location={location}/>
        }
    
    </div>
  )
}

export default App
