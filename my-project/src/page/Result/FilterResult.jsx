import React from "react"
import { AiFillStar } from "react-icons/ai"
import { FaHeart } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"

const people = [
  {
    name: "Lindsay Walton",
    role: "I am a professional hair stylist with 10 years of experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Stephanny Kusmana",
    role: "I am a professional hair stylist with 10 years of experience.",
    imageUrl:
      "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Mellvin Chia",
    role: "I am a professional hair stylist with 10 years of experience.",
    imageUrl:
      "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // More people...
]

const FilterResult = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pick your hairstylist!
          </h2>
        </div>
        <ul
          role="list"
          className="rounded-xl mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => {
            const [isFavorite, setIsFavorite] = useState(false)

            return (
              <li
                key={person.name}
                className="bg-beige-500 shadow-lg rounded-xl relative text-md"
              >
                <Link to = "/profile">
                  <img
                    className="aspect-[3/2] w-full rounded-t-2xl object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                </Link>
                

                {/* Heart icon overlay */}
                <div className="absolute top-2 right-2 mx-4 my-4">
                  <FaHeart
                    size={24}
                    className={isFavorite ? "text-pink-600" : "text-white"}
                    onClick={() => setIsFavorite(!isFavorite)}
                    style={{ cursor: "pointer" }}
                  />
                </div>

                <Link to = "/profile">
                  <h3 className="mt-6 text-lg text-left ml-4 font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <div className="flex flex-row ml-4 my-2">
                    <AiFillStar className="fill-yellow-500" />
                    <AiFillStar className="fill-yellow-500" />
                    <AiFillStar className="fill-yellow-500" />
                    <AiFillStar className="fill-yellow-500" />
                    <AiFillStar className="fill-yellow-500" />
                  </div>

                  <p className="text-base leading-7 text-gray-600 text-left mx-4 mb-4">
                    {person.role}
                  </p>
                </Link>

                
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default FilterResult
