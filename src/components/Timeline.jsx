import { TimelineService } from '../services'
import { TimelineContextProvider } from './TimelineContext'
import TimelineView from './TimelineView'

function Timeline() {
  const service = new TimelineService()

  return (
    <TimelineContextProvider service={service}>
      <TimelineView className="max-w-2xl mx-auto my-12" />
    </TimelineContextProvider>
  )
}

export default Timeline
