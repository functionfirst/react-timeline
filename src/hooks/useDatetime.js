import { format, parseISO } from 'date-fns'

export const useDateFormat = (datetime, f = 'dd-MM-yyyy HH:mm:ss') => {
  if (datetime === undefined) {
    throw new Error('Date is undefined')
  }

  const date = parseISO(datetime)
  return format(date, f)
}
