import { useState } from 'react'
import { Button } from './components/button/Button.jsx'
import { Header } from './components/header/Header.jsx'

function App() {
  return (

    <div>
      <Header
        heading="Your score is:"
        score="0" />

      <div className="button-grid">

        <Button
          function="Increment" />
        <Button
          function="Decrement" />
      </div>

    </div>

  )
}

export default App
