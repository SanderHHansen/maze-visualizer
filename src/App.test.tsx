import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the heading, controls and legend', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /maze visualizer/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/størrelse/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/metode/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/hastighet/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /generer/i })).toBeInTheDocument()
    expect(screen.getByText('Start', { exact: true })).toBeInTheDocument()
    expect(screen.getByText('Slutt', { exact: true })).toBeInTheDocument()
  })
})
