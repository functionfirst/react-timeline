import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { usePolling, usePositionDecorator } from '../hooks'

export const TimelineContext = createContext()

export const TimelineContextProvider = ({ children, service, limit = 10 }) => {
  if (service === undefined) {
    throw new Error('TimelineContextProvider expects a service to be provided.')
  }

  const { positionDecorator } = usePositionDecorator()
  const polling = usePolling()
  const [points, setPoints] = useState([])

  const getRandomEvent = useCallback(async () => {
    const data = await service.getRandomEvent()
    const point = positionDecorator(data)
    setPoints((prevState) => {
      const state = [...prevState]

      if (state.length >= limit) {
        state.shift()
      }

      return [...state, point]
    })
  }, [limit, service, positionDecorator])

  useEffect(() => {
    async function init() {
      console.log('init')
      const data = await service.init()
      const points = data.map(item => positionDecorator(item))
      setPoints(points)
    }
    init()
  }, [service, positionDecorator])

  useEffect(() => {
    polling && getRandomEvent()
  }, [polling, getRandomEvent])

  return <TimelineContext.Provider value={points}>{children}</TimelineContext.Provider>
}

export const useTimeline = () => {
  const context = useContext(TimelineContext)

  if (context === undefined) {
    throw new Error('useTimeline to be used within a TimelineContextProvider')
  }

  return context
}
