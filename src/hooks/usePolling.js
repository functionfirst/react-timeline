import { useState } from 'react'
import { useInterval } from '../hooks'

const TIMELINE_INTERVAL_IN_SECONDS = 5

export const usePolling = () => {
  const [polling, setPolling] = useState(new Date())

  useInterval(() => setPolling(new Date()), TIMELINE_INTERVAL_IN_SECONDS)

  return polling
}
