import { useState } from 'react'
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="counter">
      <button className='btn' onClick={() => setCount((count) => count - 1)}>-</button>
      <p>{count}</p>
      <button className='btn' onClick={() => setCount((count) => count + 1)}>+</button>
      </div>

    </>
  )
}

export default Counter