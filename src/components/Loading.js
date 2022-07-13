import React from 'react'
import gearGif from './../images/gif/loading-gear.gif'

const Loading = () => {
  return (
    <div className='loading'>
      <h4>rooms data loading</h4>
      <img src={gearGif} alt="loading gif" />
    </div>
  )
}

export default Loading