// types
import { Person } from '../types'

interface Props {
  details: Person
}

// consts 
const NULL = 'unknown'

// limpia y organiza los datos para facilitar su uso
export function cleanData ({ details }: Props) {
  const { image, url, name } = details
  const status = details.status === NULL ? 'desconocido' : details.status

  const gender =
    details.gender === 'unknown'
      ? 'desconocido'
      : details.gender
      ? '♂️ Male'
      : '♀️ Female'

  const location =
    details.location.name === NULL ? 'desconocido' : details.location.name

  const origin =
    details.origin.name === NULL ? 'desconocido' : details.origin.name

  const species = details.species === 'Alien' ? '👽 Alien' : '👨 Human'

  return { status, gender, location, origin, species, image, url, name }
}
