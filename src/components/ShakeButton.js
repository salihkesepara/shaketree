import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const ShakeButton = ({ onClick }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState()

  useEffect(() => {
    // componentDidMount(), componentDidUpdate()
    setIsButtonDisabled(false)

    return function cleanUp () {
      // componentWillUnmount()
    }
    // effect dependency array
  }, [])

  function handleOnClick () {
    const apples = [
      { key: 1, className: 'apple1 drop-apple1' },
      { key: 2, className: 'apple2 drop-apple2' },
      { key: 3, className: 'apple3 drop-apple3' },
      { key: 4, className: 'apple4 drop-apple4' },
      { key: 5, className: 'apple5 drop-apple5' },
      { key: 6, className: 'apple6 drop-apple6' },
      { key: 7, className: 'apple7 drop-apple7' },
      { key: 8, className: 'apple8 drop-apple8' },
      { key: 9, className: 'apple9 drop-apple9' },
      { key: 10, className: 'apple10 drop-apple10' },
      { key: 11, className: 'apple11 drop-apple11' },
      { key: 12, className: 'apple12 drop-apple12' }
    ]

    onClick(apples)
    setIsButtonDisabled(true)
  }

  return (
    <div id="shakeButton">
      <Button id="shake-button"
        onClick={handleOnClick}
        disabled={isButtonDisabled}
        size="lg">
        Shake Now!
      </Button>
    </div>
  )
}

export default ShakeButton
