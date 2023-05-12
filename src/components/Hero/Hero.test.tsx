import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  const links = [
    { id: 'instagram-link', url: 'https://www.instagram.com/reykr.official/' },
    { id: 'facebook-link', url: 'https://www.facebook.com/reykr.music' },
    {
      id: 'spotify-link',
      url: 'https://open.spotify.com/artist/4i5oaaegWPdDi8p3Dm23rJ',
    },
    { id: 'soundcloud-link', url: 'https://soundcloud.com/reykr' },
    { id: 'bandcamp-link', url: 'https://reykr.bandcamp.com/' },
  ]
  test('renders correctly', async () => {
    render(<Hero />)
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByText('Reykr')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
    links.forEach((link) => {
      expect(screen.getByTestId(link.id)).toBeInTheDocument()
      expect(screen.getByTestId(link.id)).toHaveAttribute('href', link.url)
    })
  })
})
