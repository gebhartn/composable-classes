import * as React from 'react'
import Button from './Button'

const App = () => {
  return (
    <>
      <Button loading>Button One</Button>
      <Button inverse>Button Two</Button>
      <Button size="small">Button Three</Button>
      <Button size="big">Button Four</Button>
      <Button width={true} size="small" inverse loading>
        Button Five
      </Button>
    </>
  )
}

export default App
