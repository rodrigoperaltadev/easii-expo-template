export type CharacterStatus = 'Alive' | 'Dead' | 'unknown'
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown'
export type CharacterOrigin = {
  name: string
  url: string
}
export type CharacterLocation = {
  name: string
  url: string
}

export type Character = {
  id: number
  name: string
  status: CharacterStatus
  species: string
  type: string
  gender: CharacterGender
  origin: CharacterOrigin
  location: CharacterLocation
  image: string
}
