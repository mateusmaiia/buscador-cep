import { api } from './services/api'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './App.css'

export function App() {
  
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch(){
    //01310930/json/

    if(input === ''){
      alert('preencha algum CEP')
    }{
      console.log('')
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    }catch{
      alert('Ops! Error algo buscar.')
      setInput('')
    }

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
      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}
      
    </div>
  )
}


