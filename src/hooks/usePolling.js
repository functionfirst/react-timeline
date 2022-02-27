import { useState } from 'react'
import { useInterval } from '../hooks'

const TIMELINE_INTERVAL_IN_SECONDS = 5

export const usePolling = () => {
  const [polling, setPolling] = useState(null)

  useInterval(() => setPolling(new Date()), TIMELINE_INTERVAL_IN_SECONDS)

  return polling
}
