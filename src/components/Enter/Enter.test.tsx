import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Enter from './Enter'

describe('Enter', () => {
  const enterSite = jest.fn()
  test('renders correctly', async () => {
    render(<Enter enterSite={enterSite} />)
    expect(screen.getByTestId('enter-button')).toBeInTheDocument()
    expect(screen.getByText('enter')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('enter-button'))
    expect(enterSite).toHaveBeenCalled()
  })
})
