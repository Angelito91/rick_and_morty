// utils
import { cleanData } from '../services/utils'

// types
import { Person } from '../types'

interface Props {
  details: Person
  setDetails: React.Dispatch<React.SetStateAction<Person | undefined>>
}

export function Modal ({ details, setDetails }: Props) {
  // limpiando y oraganizando los datos
  const { status, gender, species, origin, location, image, url, name } =
    cleanData({ details })

  return (
    <div className='fixed top-0 left-0 flex flex-col items-center justify-start w-full h-full gap-10 p-0 sm:p-20 sm:justify-between sm:flex-row bg-slate-900'>
      <button
        className='absolute text-white top-3 sm:right-1/2'
        onClick={() => setDetails(undefined)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='70'
          height='70'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>
      </button>
      <div className='mt-24 sm:w-1/2'>
        <img className='sm:w-3/4' src={image} alt={name} />
      </div>
      <div className='grid grid-cols-2 gap-20 sm:w-1/2'>
        <h1 className='col-span-2 text-5xl font-bold text-center text-orange-500'>
          {name}
        </h1>
        <div className='text-center text-white'>
          <h3 className='text-3xl font-bold'>URL</h3>
          <a
            href={url}
            target='_blank'
            className='w-1/2 mt-3 text-xl text-sky-400'
          >
            Api/{name}
          </a>
        </div>
        <div className='text-center text-white'>
          <h3 className='text-3xl font-bold'>Estatus</h3>
          <p
            className={`mt-3 text-xl ${
              status === 'Alive' ? 'text-emerald-500' : 'text-red-500'
            }`}
          >
            {status}
          </p>
        </div>
        <div className='text-center text-white'>
          <h3 className='text-3xl font-bold'>Género</h3>
          <p className='mt-3 text-xl'>{gender}</p>
        </div>
        <div className='text-center text-white'>
          <h3 className='text-3xl font-bold'>Especie</h3>
          <p className='mt-3 text-xl'>{species}</p>
        </div>
        <div className='text-center text-white'>
          <h3 className='text-3xl font-bold'>Origen</h3>
          <p className='mt-3 text-xl'>{origin}</p>
        </div>
        <div className='text-center text-white'>
          <h3 className='text-3xl font-bold'>Localidad</h3>
          <p className='mt-3 text-xl'>{location}</p>
        </div>
      </div>
    </div>
  )
}
