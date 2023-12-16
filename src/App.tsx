import { useState } from 'react'

// components
import { Cards } from './components/Cards'
import { Modal } from './components/Modal'

// hooks
import { useFetch } from './hooks/useFetch'

// types
import { Person } from './types'

function App () {
  const { persons, loading, error } = useFetch()
  const [details, setDetails] = useState<Person | undefined>(undefined)

  return (
    <main
      className={`flex flex-col items-center min-h-screen bg-slate-950 ${
        details !== undefined ? 'overflow-hidden' : ''
      }`}
    >
      <header className='p-5'>
        <h1 className='font-mono text-4xl text-center text-orange-600 animate-pulse sm:text-6xl'>
          Rick and Morty
        </h1>
      </header>
      <section>
        {error ? (
          // Si hay un error
          <h3 className='text-2xl font-bold text-red-400 animate-pulse'>
            💥 Hubo un error al cargar los datos
          </h3>
        ) : loading ? (
          // Si esta cargando
          <h3 className='text-2xl font-bold text-yellow-400 animate-pulse'>
            ✋ Cargando los datos...
          </h3>
        ) : details === undefined ? (
          // Si no hay datos en details para no desplegar el modal
          <Cards persons={persons} setDetails={setDetails} />
        ) : (
          // Si hay datos en details para desplegar el modal
          <>
            <Cards persons={persons} setDetails={setDetails} />
            <Modal details={details} setDetails={setDetails} />
          </>
        )}
      </section>
    </main>
  )
}

export default App
