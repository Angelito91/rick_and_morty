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
            className='transition opacity-60 hover:opacity-100 hover:scale-105'
            key={person.id}
            onClick={() => setDetails(person)}
          >
            <img
              className='object-cover w-full'
              src={person.image}
              alt={person.name}
            />
            <p className='p-4 text-xl font-bold text-center text-white bg-gray-700'>
              {person.name}
            </p>
          </button>
        )
      })}
    </div>
  )
}
