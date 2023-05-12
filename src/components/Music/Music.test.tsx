import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Music from './Music'
import '../../../_mocks_/intersectionObserverMock'
import content from '../../../public/content'

jest.mock('react-spotify-embed', () => ({
  Spotify: jest.fn().mockReturnValue(<div>Mocked Spotify component</div>),
}))

describe('Music', () => {
  const { spotifySongs } = content
  test('renders correctly', async () => {
    render(<Music />)
    expect(screen.getByText('Music')).toBeInTheDocument()
    const spotifyElements = await screen.findAllByText(
      'Mocked Spotify component'
    )
    expect(spotifyElements).toHaveLength(spotifySongs.length)
  })
})
