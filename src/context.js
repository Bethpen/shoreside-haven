
import React, { useContext, useEffect, useState } from 'react'
import items from './data'

const RoomContext = React.createContext();


const RoomProvider = ({children}) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);


  // fetch room data
  //  useEffect(()=>{
  //   fetchRooms();
  //  })


  // format room data
  const formatRoom = (items)=>{
    let temp = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image =>  image.fields.file.url)
      let room = {...item.fields, id, images}
      return room;
    })
    return temp
    
  }

  useEffect(()=>{
    let rooms = formatRoom(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false)
  }, [])


  return (
    <RoomContext.Provider  value={{rooms, loading, sortedRooms, featuredRooms,setSortedRooms}}>{children}</RoomContext.Provider >
  )
}

export const useGlobalContext = ()=> {
 return useContext(RoomContext)
}

export { RoomContext, RoomProvider};