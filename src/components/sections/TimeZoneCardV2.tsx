import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

const Timezone = ({ timezone }: any) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setDateTime(moment().tz(timezone).format('dddd, DD MMMM YYYY [at] h:mm:ss A'))
    tick()
    const interval = setInterval(tick, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">College Park, MD, US</p>
    </div>
  )
}

export default Timezone
