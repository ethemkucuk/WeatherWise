/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import '../index.css'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import rain from '../assets/icons/rain.png'
import fog from '../assets/icons/fog.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/wind.png'

const MiniCard = ({time,temp,iconString}) => {

  console.log("iconString"+iconString);
  const [icon,setIcon] = useState()

  useEffect(()=>{
    if(iconString){
      if(iconString.toLowerCase().includes('cloud')){
        setIcon(cloud)
      }else if(iconString.toLowerCase().includes('rain')){
        setIcon(rain)
      }else if(iconString.toLowerCase().includes('clear')){
        setIcon(sun)
      }else if(iconString.toLowerCase().includes('thunder')){
        setIcon(storm)
      }else if(iconString.toLowerCase().includes('fog')){
        setIcon(fog)
      }else if(iconString.toLowerCase().includes('snow') || iconString.toLowerCase().includes('overcast')){
        setIcon(snow)
      }else if(iconString.toLowerCase().includes('wind')){
        setIcon(wind)
      }
    }

  },[iconString])

  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center text-black ' style={{fontWeight:'bolder'}}>
        {
          new Date(time).toLocaleTimeString('en',{weekday:'long'}).split(" ")[0]
        }
      </p>
      <hr/>
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="weather" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold' style={{color:'#3F2305'}}>{temp}&deg;C</p>
    </div>

  )
}

export default MiniCard