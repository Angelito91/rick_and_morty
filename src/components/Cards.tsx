import LazyLoad from 'react-lazy-load'
// types
import { Person, Persons } from '../types'

interface Props {
  persons: Persons
  setDetails: React.Dispatch<React.SetStateAction<Person | undefined>>
}

export function Cards ({ persons, setDetails }: Props) {
  // creando cada card con los datos obtenidos
  return (
    <div className='grid grid-cols-1 gap-10 p-5 sm:grid-cols-3'>
      {persons.map(person => {
        return (
          <button
            className='transition opacity-80 hover:opacity-100 hover:scale-105'
            key={person.id}
            onClick={() => setDetails(person)}
          >
            <LazyLoad>
              <img
                className='w-full h-full'
                src={person.image}
                alt={person.name}
              />
            </LazyLoad>
            <p className='p-4 text-xl font-bold text-center text-white bg-sky-900'>
              {person.name}
            </p>
          </button>
        )
      })}
    </div>
  )
}
