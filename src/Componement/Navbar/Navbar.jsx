import React from 'react'
import Logo from "./../../assets/shared/logo.svg"
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='h-[15%] flex justify-center items-center'>
        <div className='h-[90%] w-[10%] flex justify-center items-center'>
            <img src={Logo} />
        </div>
        <div className='h-[90%] w-[30%] flex justify-center items-center'>
            <div className='w-[90%] h-1 bg-white'>

            </div>
        </div>
        <div className='h-[90%] w-[60%] flex justify-center items-center bg-white/20 gap-9 pe-11 text-white font-semibold'>
            <Link to={"/"} className='NavC w-[15%] h-full flex justify-center items-center'>
                <p to={"/"}>00 HOME</p>
            </Link>
            <Link to={"/destination/0"} className='NavC w-[15%] h-full flex justify-center items-center'>
                <p to={"/destination"}>01 DESTINATION</p>
            </Link>
            <Link to={"/crew/0"} className='NavC w-[15%] h-full flex justify-center items-center'>
                <p>03 CREW</p>
            </Link>
            <Link className='NavC w-[15%] h-full flex justify-center items-center'>
                <p>04 TECHNOLOGY</p>
            </Link>
        </div>
    </div>
  )
}
