import React from "react"
import Carousel from "./Carousel"
import Promo from "./Promo"
import { BiCut } from "react-icons/bi"
import { PiPaintBrush } from "react-icons/pi"
import { IoIosBody } from "react-icons/io"
import { MdFaceRetouchingNatural } from "react-icons/md"
import { RiMentalHealthLine } from "react-icons/ri"
import { MdOutlineCleanHands } from "react-icons/md"

const Hero = () => {
  return (
    <div className="max-w-7xl">
      <div className="flex justify-evenly items-center pt-6">
        <div className="flex flex-col pl-4 pt-8 text-left">
          <div className="text-3xl font-extrabold text-slate-700">
            Hello Steven,
          </div>
          <div className="text-lg font-thin text-slate-700 mt-1">
            Let's do some self care!
          </div>
        </div>
        <span className="inline-block h-12 w-12 mt-8 overflow-hidden rounded-full bg-gray-100">
          <svg
            className="h-full w-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
      </div>
      {/* .<Carousel /> */}

      <div className="bg-blue-500 rounded-3xl p-4 mt-8">
        <div className="grid grid-rows-2 grid-flow-col gap-2 mt-4 p-2 mx-auto">
          <button className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <BiCut className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800">
              Haircut
            </div>
          </button>

          <button className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <PiPaintBrush className="fill-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800">
              ManiPedi
            </div>
          </button>

          <button className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <IoIosBody className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800">
              Massage
            </div>
          </button>
          <button className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <MdFaceRetouchingNatural className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800">
              MUA
            </div>
          </button>
          <button className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <RiMentalHealthLine className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800">
              Facial
            </div>
          </button>

          <button className="flex flex-col items-center m-2 shadow-lg bg-white rounded-lg hover:bg-beige-500 hover:border-blue-500 hover:text-white">
            <div className="m-4 flex-grow flex items-center justify-center">
              <MdOutlineCleanHands className="text-blue-800" size="3em" />
            </div>
            <div className="bg-beige-500 rounded-b-lg p-2 w-full text-slate-800">
              Waxing
            </div>
          </button>
        </div>
        <Promo className="bg-white shadow-lg">BUAT PROMO</Promo>
      </div>
    </div>
  )
}

export default Hero
