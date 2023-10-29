/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import '../index.css'
import AirIcon from '@mui/icons-material/Air';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { useDate } from '../Utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import rain from '../assets/icons/rain.png'
import fog from '../assets/icons/fog.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/wind.png'

const WeatherCard = ({
  temperature,
  windSpeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const[icon,setIcon]= useState(sun)
  const {time} = useDate()

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
    <div className='w-[24rem] min-w-[22rem] h-[35rem] glassCard p-4'> 
      <div className='flex w-full justify-center items-center gap-4 mt-6 mb-4'>
        <img src={icon} alt='weather_icon' width={'120px'} />
        <p className='font-bold text-5xl flex justify-center items-center text-black'>{temperature} &deg;C</p>
        
      </div>
      <div className='font-bold text-center text-xl' style={{color:'#192655'}}>
            {place}
        </div>
        <div className='w-full flex justify-between items-center mt-4'>
          <p className='flex-1 text-center p-2 text-black'>{new Date().toDateString()}</p>
          <p className='flex-1 text-center p-2 text-black' style={{fontSize:'14px'}}>{time}</p>
        </div>
        <div className='w-full flex justify-between items-center mt-4 gap-4'>
            <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'><AirIcon/>  Wind Speed <p className='font-normal' >{windSpeed}</p> </p>
            <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'> <DeviceThermostatIcon/> Humidity <p className='font-normal'>{humidity}</p></p>

        </div>
        <div className='w-full p-3 mt-4 flex justify-between items-center'  style={{color:'#192655', fontWeight:'600'}} >
          <p className='font-semibold text-lg'>Heat Index</p>
          <p className=' text-lg'>{
              heatIndex ? heatIndex:'N/A'
          }</p>

        </div>
        <hr className='bg-slate-600'/>
        <div className='w-full p-4 flex justify-center items-center text-2xl font-semibold' style={{color:'#3F2305', fontWeight:'600'}}>
          {
            conditions
          }

        </div>
    </div>
  )
}

export default WeatherCard