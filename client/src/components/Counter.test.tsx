import React from 'react'
import { expect, test } from '@jest/globals'
import '@testing-library/jest-dom/extend-expect'
import Counter from './Counter'
import { fireEvent, render, screen } from '@testing-library/react'

test('render and update counter', () => {
   render(<Counter />)

   expect(screen.getByTestId('counter')).toHaveTextContent('0 Click')

   for (let i = 0; i < 10; i++) {
      fireEvent.click(screen.getByTestId('counter'))
      expect(screen.getByTestId('counter')).toHaveTextContent(
         `${i + 1} Click${i > 1 ? 's' : ''}`
      )
   }
})
