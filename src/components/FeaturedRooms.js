import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'


const FeaturedRooms = () => {
  const {featuredRooms, loading} = useGlobalContext();

  return (
    <section className='featured-rooms'>
      <Title title="featured rooms"/>
      <div className="featured-rooms-center">
        {loading? <Loading />: featuredRooms.map(room => {
          return <Room key={room.id} room={room}/>
        })}
      </div>
    </section>
  )
}

export default FeaturedRooms