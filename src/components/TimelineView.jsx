import { useTimeline } from './TimelineContext'
import Timestamp from './Timestamp'

function TimelineView({ className }) {
  const timeline = useTimeline()
  const points = timeline?.map((point, index) => {
    return (
      <TimelinePoint
        key={index}
        {...point}
      />
    )
  })

  return (
    <TimelineContainer className={className}>
      {points}
    </TimelineContainer>
  )
}

function TimelineContainer({ className, children }) {
  return (
    <section className={`shadow-inner flex flex-col-reverse bg-gray-100 relative w-full gap-6 p-6 ${className}`}>
      {children}
      <div className="mx-4 md:-ml-1 absolute md:left-[50%] inset-0 w-2 bg-gray-300"></div>
    </section>
  )
}

function TimelinePoint({ description, title, time, position }) {
  const flexDirection = position === 'right' ? 'flex-row' : 'md:flex-row-reverse'
  const justifyDirection = position === 'right' ? 'justify-end' : 'justify-start'

  return (
    <article className={`flex ${justifyDirection} z-10 w-full`}>
      <span className="absolute mt-4 md:-ml-3 left-2 md:left-[50%] h-6 w-6 rounded-full border-4 shadow-md border-white bg-brand" />

      <div className={`flex ${flexDirection} items-start justify-start border bg-white w-full md:w-72 p-4 gap-4 shadow-sm ml-4 md:ml-0`}>
        <Timestamp
          className="px-2 py-1 text-xs rounded-sm bg-gray-200 whitespace-no-wrap"
          dateTime={time}
          format="HH:mmaaa"
        />

        <div className="flex-1 break-words text-sm">
          <h2 className="mb-1">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </article>
  )
}

export default TimelineView
