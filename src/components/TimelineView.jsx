import { useTimeline } from './TimelineContext'
import Timestamp from './Timestamp'

function TimelineView({ className }) {
  const points = useTimeline()
  const timelinePoints = points?.map((point, index) => <TimelinePoint key={index} {...point} index={index} />)

  return (
    <TimelineContainer className={className}>
      {timelinePoints}
    </TimelineContainer>
  )
}

function TimelineContainer({ className, children }) {
  return (
    <div className={`bg-gray-100 relative grid gap-6 p-6 md:p-12 ${className}`}>
      {children}

      <div className="mx-4 absolute inset-x-0 inset-0 w-2 bg-gray-300"></div>
    </div>
  )
}

function TimelinePoint({ description, title, time, index }) {
  const flexDirection = index % 2 ? 'md:flex-row-reverse' : ''

  return (
    <section className={`flex flex-row ${flexDirection} z-10 w-full`}>
      <span className="absolute mt-4 left-2 h-6 w-6 rounded-full border-4 shadow-md border-white bg-brand" />

      <header className="flex items-start ml-4 border bg-white md:w-1/2 w-full p-4 gap-4 text-sm shadow-sm break-all">
        <Timestamp
          className="px-2 py-1 text-xs rounded-sm bg-gray-200 whitespace-no-wrap"
          dateTime={time}
          format="HH:mmaaa"
        />

        <div className="flex-1">
          <h2 className="mb-1">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </header>
    </section>
  )
}

export default TimelineView
