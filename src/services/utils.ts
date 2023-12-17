// types
import { Person } from '../types'

interface Props {
  details: Person
}

// consts 
const NULL = 'unknown'
const EMPTY = 'desconocido'

// limpia y organiza los datos para facilitar su uso
export function cleanData ({ details }: Props) {
  const { image, url, name } = details
  const status = details.status === NULL ? EMPTY : details.status

  const gender =
    details.gender === 'unknown'
      ? EMPTY
      : details.gender
      ? '♂️ Male'
      : '♀️ Female'

  const location =
    details.location.name === NULL ? EMPTY : details.location.name

  const origin =
    details.origin.name === NULL ? EMPTY : details.origin.name

  const species = details.species === 'Alien' ? '👽 Alien' : '👨 Human'

  return { status, gender, location, origin, species, image, url, name }
}
