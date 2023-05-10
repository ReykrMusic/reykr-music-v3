import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Music from './Music'
import '../../../_mocks_/intersectionObserverMock'
import content from '../../../public/content'

describe('Music', () => {
  const { bio } = content
  test('renders correctly', async () => {
    render(<Music />)
    // expect(screen.getByTestId('about-section')).toBeInTheDocument()
    // expect(screen.getByText('Music')).toBeInTheDocument()
    // expect(screen.getByAltText('Reykr')).toBeInTheDocument()
    // expect(screen.getByText(bio)).toBeInTheDocument()
    console.log(screen.debug())
  })
})
