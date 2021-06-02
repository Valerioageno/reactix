import React, { useState } from 'react'

function Counter(): JSX.Element {
   const [count, setCount] = useState<number>(0)

   return (
      <button
         onClick={() => setCount(count + 1)}
         className='counter'
         data-testid='counter'
      >
         {count} Click{count > 1 ? 's' : ''}
      </button>
   )
}

export default Counter
