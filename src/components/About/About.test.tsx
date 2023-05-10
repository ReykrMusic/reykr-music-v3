import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from './About'
import '../../../_mocks_/intersectionObserverMock'
import content from '../../../public/content'

describe('About', () => {
  const { bio } = content
  test('renders correctly', async () => {
    render(<About />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByAltText('Reykr')).toBeInTheDocument()
    expect(screen.getByText(bio)).toBeInTheDocument()
  })
})
