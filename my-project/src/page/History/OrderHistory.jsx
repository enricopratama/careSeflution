import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid"
import { FaHeart } from "react-icons/fa"

const people = [
  {
    name: "Jane Cooper",
    title: "Haircut",
    date: "14 October 2023",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Steven Wilbert",
    title: "Mani-pedi",
    date: "13 October 2023",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.pexels.com/photos/7440138/pexels-photo-7440138.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Eugene Wongso",
    title: "Facial",
    date: "12 October 2023",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.pexels.com/photos/4952625/pexels-photo-4952625.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Enrico Pratama",
    title: "Waxing",
    date: "11 October 2023",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.pexels.com/photos/16594561/pexels-photo-16594561/free-photo-of-a-hairdresser-styling-womans-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // More people...
]

export default function Example() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-4 mb-12 bg-white"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 divide-y divide-gray-200 rounded-lg  bg-beige-500 shadow-lg"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-lg font-medium text-gray-900">
                  {person.name}
                </h3>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500 text-left">
                {person.title}
              </p>
              <p className="mt-1 truncate text-sm text-gray-500 text-left">
                {person.date}
              </p>
            </div>
            <img
              className="h-14 w-14 
               flex-shrink-0 rounded-full bg-gray-300"
              src={person.imageUrl}
              alt=""
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Review
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon
                    className="h-5 w-5 text-gray-400 fill-pink-500"
                    aria-hidden="true"
                  />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
