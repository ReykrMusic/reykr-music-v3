import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  test('renders correctly', async () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByText('Built by')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toHaveAttribute(
      'href',
      'https://lucassilbernagel.com/'
    )
  })
})
