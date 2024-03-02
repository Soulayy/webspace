import React from 'react'
import Navbar from './../Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import "./Destination.css"

import Data from "./../../Json/data.json"



export default function Destination() {

  const planet = Data.destinations;
  
  const {id} = useParams();
  const choixplanet = planet[id]
  
  const imagePath = new URL(
    `../../assets/destination/${choixplanet.images.png}`,
    import.meta.url
  ).href; 


  return (
    <div className='myhome h-screen w-screen pt-6'>
        <Navbar></Navbar>
        <div className='h-[10%] flex justify-start items-end ps-60 text-white text-3xl'>
          <h1><span> 01 </span>PICK YOUR DESTINATION</h1>
        </div>
      <div className='h-[75%] w-full flex justify-center items-center'>

          <div className='h-[100%] w-[90%]  text-white flex'>
            <div className='h-[100%] w-1/2 flex justify-center items-center'>
              <img className='h-[70%]' src={imagePath} />
            </div>
            <div className='h-[100%] w-1/2 '>
              <div className='h-[15%] flex justify-around items-center text-2xl'>
               {
                planet.map((element, key) => {
                  return(
                    <Link className='selectP' key={key} to={`/destination/${key}`}>
                      {element.name}
                    </Link>
                  )
                })
               }
              </div>
              <div className='h-[85%]  flex flex-col p-8'>
                <div className='flex h-[30%]  justify-start items-center'>
                  <h1 className='text-9xl h-fit'>{choixplanet.name}</h1>
                </div>
                <div className='h-[40%] w-[90%] p-3 flex justify-center items-center'>
                  <p className='text-white text-[100%]'>{choixplanet.description}</p>
                </div>
                <hr />
                <div className='h-[20%] flex justify-center items-end flex-col pe-28 pt-10'>
                  <p>{choixplanet.distance}</p>
                  <h1 className='text-3xl'>{choixplanet.travel}</h1>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>          
      
        
  )
}
