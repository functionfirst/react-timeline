import { createContext, useContext, useEffect, useState } from 'react'
import { usePolling } from '../hooks'

export const TimelineContext = createContext()

export const TimelineContextProvider = ({ children, service, limit = 10 }) => {
  if (service === undefined) {
    throw new Error('TimelineContextProvider expects a service to be provided.')
  }

  const polling = usePolling()
  const [points, setPoints] = useState([])

  useEffect(() => {
    async function init() {
      const data = await service.init()
      setPoints(data)
    }

    init()
  }, [service])

  useEffect(() => {
    async function getRandomEvent() {
      const data = await service.getRandomEvent()
      setPoints((prevState) => {
        const state = [...prevState]
        if (state.length >= limit) {
          state.shift()
        }
        return [...state, data]
      })
    }

    polling && getRandomEvent()
  }, [polling, service, limit])

  return <TimelineContext.Provider value={points}>{children}</TimelineContext.Provider>
}

export const useTimeline = () => {
  const context = useContext(TimelineContext)

  if (context === undefined) {
    throw new Error('useTimeline to be used within a TimelineContextProvider')
  }

  return context
}
