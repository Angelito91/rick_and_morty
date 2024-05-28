// types
import { Persons } from '../types'

// hooks
import { useEffect, useState } from 'react'

// consts
const URL = 'https://rickandmortyapi.com/api/character'

// haciendo el fetch a la URL para obtener los datos,manejar errores y la carga
export function useFetch () {
  const [persons, setPersons] = useState<Persons>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(res => setPersons(res.results))
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { persons, loading, error }
}
