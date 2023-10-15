import React from "react"
import { AiOutlinePhone } from "react-icons/ai"

const product = {
  name: "Stephanny",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",

  sizes: [
    { name: "18L", description: "Perfect for a reasonable amount of snacks." },
    { name: "20L", description: "Enough room for a serious amount of snacks." },
  ],
}

const ServiceProfile = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="flex">
          {/* Product details */}
          <div className="flex-1">
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-lef mt-10">
                {product.name}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-2">
              <div className="flex items-left">
                <p className="text-lg text-gray-900 sm:text-xl">
                  {product.price}
                </p>
                <h2 id="information-heading" className="sr-only text-left">
                  Product information
                </h2>

                <div className="ml-4  pl-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <p className="text-base text-gray-500 mt-2">
                  {product.description}
                </p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="ml-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center rounded-xl ml-2 mt-10"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-evenly mt-4">
          <button className="bg-blue-500 text-slate-800 rounded-md p-2 hover:bg-blue-800 ">
            Book Now!
          </button>
          <button className="flex hover:bg-pink-300 border-pink-500 border-2 rounded-md bg-pink-100 py-2 justify-center">
            Consult
            <AiOutlinePhone className="fill-pink-500 ml-2" size={22} />
          </button>
        </div>
        <div className="mt-8">
          <div className="mt-2 text-xl font-bold tracking-tight text-slate-800 sm:text-4xl text-left">
            About Stephanny
          </div>
          <div className="text-base text-gray-500 text-left mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            magni!
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceProfile