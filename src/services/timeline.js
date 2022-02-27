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

const getRandomEvent = () => {
  const event = events[Math.floor(Math.random() * events.length)]
  event.time = new Date().toISOString()
  return event
}

// class Observer {
//   subscribers = []

//   subscribe(fn) {
//     console.log('subscribe: ', this.subscribers.length)
//     this.subscribers.push(fn)
//     console.log('subscribe after: ', this.subscribers.length)
//   }

//   unsubscribe(fn) {
//     console.log('unsubscribe: ', this.subscribers.length)
//     this.subscribers = this.subscribers.filter(item => item !== fn)
//   }

//   notify(scope) {
//     console.log('notify subscribers:', this.subscribers.length)
//     this.subscribers.forEach(fn => fn.call(scope))
//   }
// }

// const intervalObserver = new Observer()

const getRange = (arr, limit) => {
  const start = arr.length - limit
  const end = arr.length
  return arr.slice(start, end)
}

export class TimelineService {
  constructor() {
    this.data = initialData
    // intervalObserver.subscribe(this.fetch)
  }

  fetch() {
    // Replace with API call
    const event = getRandomEvent()
    this.data.push(event)
  }

  findAll({ limit = 10 }) {
    // intervalObserver.notify(this)
    this.fetch()
    return getRange(this.data, limit)
  }
}
