import { useState } from 'react'
import { Button } from './components/button/Button.jsx'
import { Header } from './components/header/Header.jsx'

function App() {

  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(count - 1)
  }

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (

    <div>
      <div className="container">
        <Header
          heading="Your score is:"
          score={count} />

        <div className="button-grid">
          <Button
            onclick={decrementCount}
            action="Decrement" />

          <Button
            onclick={incrementCount}
            action="Increment" />
        </div>
      </div>
    </div>

  )

  // return (
  //   <div>
  //     <span>{count}</span>
  //     <button onClick={incrementCount}>Add</button>
  //     <button onClick={decreaseCount}>Minus</button>
  //     <Button trigger={incrementCount} action="Increase" />
  //   </div>
  // )
}

export default App
