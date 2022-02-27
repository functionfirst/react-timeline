import { TimelineService } from '../services'
import { TimelineContextProvider } from './TimelineContext'
import TimelineView from './TimelineView'

function Timeline({ className = ''}) {
  const service = new TimelineService()

  return (
    <TimelineContextProvider service={service} limit={5}>
      <TimelineView className={className} />
    </TimelineContextProvider>
  )
}

export default Timeline
