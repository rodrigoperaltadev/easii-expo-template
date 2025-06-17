import { render } from '@testing-library/react-native'
import { CharactersScreen } from '../characters-screen'
import { useCharacters } from '@app/feature/characters/hooks/use-characters'
import { NavigationContainer } from '@react-navigation/native'

// 👇 mock del hook
jest.mock('@app/feature/characters/hooks/use-characters')

const mockedUseCharacters = useCharacters as jest.Mock

describe('CharactersScreen', () => {
  it('muestra la lista cuando no hay error', () => {
    mockedUseCharacters.mockReturnValue({
      characters: [
        {
          id: '1',
          name: 'Rick',
          image: '',
          status: '',
          species: '',
          origin: { name: '' }
        }
      ],
      isLoading: false,
      error: null,
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn()
    })

    const { getByTestId } = render(
      <NavigationContainer>
        <CharactersScreen />
      </NavigationContainer>
    )

    expect(getByTestId('character-list')).toBeTruthy()
  })

  it('muestra el ErrorLayout si hay error', () => {
    mockedUseCharacters.mockReturnValue({
      characters: [],
      isLoading: false,
      error: new Error('Network Error'),
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn()
    })

    const { getByText } = render(
      <NavigationContainer>
        <CharactersScreen />
      </NavigationContainer>
    )

    expect(getByText('An error occurred')).toBeTruthy()
  })
})
