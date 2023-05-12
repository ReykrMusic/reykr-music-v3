import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UpButton from './UpButton'

describe('UpButton', () => {
  test('renders correctly', async () => {
    render(<UpButton />)
    expect(screen.getByTestId('up-button')).toBeInTheDocument()
  })
})
