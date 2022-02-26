import { createContext, useContext, useEffect, useState } from 'react'
import { useInterval } from '../hooks'

const TIMELINE_INTERVAL_IN_SECONDS = 5

export const TimelineContext = createContext()

export const TimelineContextProvider = ({ children, service }) => {
  if (service === undefined) {
    throw new Error('TimelineContextProvider expects a service to be provided.')
  }

  const [points, setPoints] = useState([])

  const [polling, setPolling] = useState(new Date())

  useInterval(() => setPolling(new Date()), TIMELINE_INTERVAL_IN_SECONDS)

  useEffect(() => {
    async function fetchData() {
      const data = await service.findAll({ limit: 5 })
      setPoints(data)
    }

    fetchData()
  }, [polling, service])

  return <TimelineContext.Provider value={points}>{children}</TimelineContext.Provider>
}

export const useTimeline = () => {
  const context = useContext(TimelineContext)

  if (context === undefined) {
    throw new Error('useTimeline to be used within a TimelineContextProvider')
  }

  return context
}
