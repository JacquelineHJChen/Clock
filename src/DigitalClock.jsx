import React, {useState} from 'react'
import { useEffect } from 'react'

export default function DigitalClock(){
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date())
    }, 1000)
    
    return () => {
      clearInterval(intervalId)
    }
  },[])

  function formatClock(){
    let hours = clock.getHours()
    const minutes = clock.getMinutes()
    const seconds = clock.getSeconds()
    const meridiem = hours >= 12 ? "PM" : "AM"

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
  }

  function padZero(number){
    return (number < 10 ? "0" : "") + number
  }
  
  return(
    <div className="clock-container">
      <div className="clock">
        <span>{formatClock()}</span>
      </div>
    </div>
  )
}