import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import '@testing-library/jest-dom'
import App from './App'


test('hello world is rendered', () => {
    render(<App />)
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
})


