import React from "react"
import Carousel from "./Carousel"
import Promo from "./Promo"
import { BiCut } from "react-icons/bi"
import { PiPaintBrush } from "react-icons/pi"
import { IoIosBody } from "react-icons/io"
import { MdFaceRetouchingNatural } from "react-icons/md"
import { RiMentalHealthLine } from "react-icons/ri"
import { MdOutlineCleanHands } from "react-icons/md"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="max-w-7xl">
      <div className="flex justify-evenly items-center pt-6">
        <div className="flex flex-col pl-4 pt-8 text-center">
          <div className="text-3xl font-extrabold text-slate-700">
            Hello Steven,
          </div>
          <div className="text-lg font-thin text-slate-700 mt-1">
            Let's do some self care!
          </div>
        </div>
      </div>
      {/* .<Carousel /> */}

      <div className="bg-blue-500 rounded-3xl mb-8 p-4 mt-8">
        <div className="grid grid-rows-2 grid-flow-col gap-2 mt-4 p-2 mx-auto">
          <Link to="/haircut" className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <BiCut className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800 hover:bg-beige-800">
              Haircut
            </div>
          </Link>

          <Link to="/mani" className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <PiPaintBrush className="fill-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800 hover:bg-beige-800">
              ManiPedi
            </div>
          </Link>

          <Link to="/massage" className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <IoIosBody className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800 hover:bg-beige-800">
              Massage
            </div>
          </Link>

          <Link to="mua" className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <MdFaceRetouchingNatural className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800 hover:bg-beige-800">
              MUA
            </div>
          </Link>

          <Link to="/facial" className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <RiMentalHealthLine className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800 hover:bg-beige-800">
              Facial
            </div>
          </Link>

          <Link to="/waxing" className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <MdOutlineCleanHands className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800 hover:bg-beige-800">
              Waxing
            </div>
          </Link>
          
        </div>
        <Promo className="bg-white shadow-lg mb-8">BUAT PROMO</Promo>
      </div>
    </div>
  )
}

export default Hero
