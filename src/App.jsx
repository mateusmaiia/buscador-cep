
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './App.css'

export function App() {
  
  const [input, setInput] = useState('')

  function handleSearch(){
    alert('certo')
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="container-input">
        <input 
          type="text" 
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
         />

         <button className="button-search" onClick={handleSearch}>
            <FiSearch size={25} color='#fff'/>
         </button>
      </div>

      <main className="main">
        <h2>CEP: 890320093</h2>

        <span>Rua Teste Algum</span>
        <span>Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande/MS</span>
      </main>
    </div>
  )
}


