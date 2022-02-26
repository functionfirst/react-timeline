import { useDateFormat } from '../hooks'

function Timestamp({ className, dateTime, format }) {
  const dateFormat = format ?? 'hh:mm:ss'
  const time = useDateFormat(dateTime, dateFormat)
  const title = useDateFormat(dateTime, 'do MMMM yyyy HH:mmaaa')

  return (
    <time
      className={className}
      dateTime={dateTime}
      title={title}
    >
      {time}
    </time>
  )
}

export default Timestamp
