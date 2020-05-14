import * as React from 'react'
import Button from './Button'

const App = () => {
  return (
    <>
      <Button loading>Button One</Button>
      <Button inverse>Button Two</Button>
      <Button size="small">Button Three</Button>
      <Button size="big">Button Four</Button>
      <Button width size="small" inverse loading>
        Button Five
      </Button>
      <Button width inverse size="big">
        Button Six
      </Button>
    </>
  )
}

export default App
