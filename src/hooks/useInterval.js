import { useEffect } from 'react'

export const useInterval = (callback, intervalPeriod = 1) => {
  if (typeof callback !== 'function') {
    throw new Error('Callback function expected')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      callback()
    }, intervalPeriod * 1000)

    return () => clearInterval(interval)
  }, [callback, intervalPeriod])
}
