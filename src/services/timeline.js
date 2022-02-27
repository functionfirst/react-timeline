import events from '../events'

const initialData = [
  {
    time: new Date('February 25, 2022 16:16').toISOString(),
    title: 'Initial event',
    description: 'Some new development is taking place'
  },
  {
    time: new Date('February 25, 2022 16:52').toISOString(),
    title: 'Second event',
    description: 'Some more stuff is going on'
  },
  {
    time: new Date('February 25, 2022 17:11').toISOString(),
    title: 'Yet another',
    description: 'Chronologically, the third in the timeline'
  },
  {
    time: new Date('February 25, 2022 17:37').toISOString(),
    title: 'Most Immediate',
    description: 'Description about what just happened'
  }
]

export class TimelineService {
  getRandomEvent() {
    const event = events[Math.floor(Math.random() * events.length)]
    event.time = new Date().toISOString()
    return event
  }

  init() {
    return initialData
  }
}
