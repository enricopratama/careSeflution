import React from "react"

const Promo = () => {
  return (
    <section
      aria-labelledby="sale-heading"
      className="relative mx-auto flex max-w-7xl flex-col items-center m-2 rounded-lg text-center "
    >
      <div className="mx-auto max-w-2xl lg:max-w-none bg-white m-8 rounded-lg p-8">
        <h2
          id="sale-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Get 25% off during our one-time sale
        </h2>

        <a
          href="#"
          className="mt-6 inline-block w-full rounded-md border border-transparent bg-beige-500 px-8 py-3 font-medium text-gray-800 shadow-lg hover:bg-beige-800 sm:w-auto"
        >
          Get access to our one-time sale
        </a>
      </div>
    </section>
  )
}

export default Promo
