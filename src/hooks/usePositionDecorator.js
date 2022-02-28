import { useCallback, useRef } from 'react'

export const usePositionDecorator = () => {
  let count = useRef(0)

  const position = () => count.current % 2 === 0 ? 'left' : 'right'

  const positionDecorator = useCallback((item) => {
    Reflect.set(item, 'position', position())
    count.current++
    return item
  }, [count])

  return {
    positionDecorator
  }
}
