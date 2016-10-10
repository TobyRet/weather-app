import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data) {
  const dataLength =  data.length
  const total = data.reduce((prev, cur) => { return prev + cur })
  return Math.round(total / dataLength)
}

export default (props) => {
   return (
     <div className="chart">
       <Sparklines height={120} data={props.data}>
         <SparklinesLine color={props.color} />
         <SparklinesReferenceLine type='avg'/>
       </Sparklines>
       <p>{ average(props.data)} {props.units}</p>
     </div>
   )
}
