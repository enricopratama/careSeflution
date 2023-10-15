/* eslint-disable react/prop-types */
// import React from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"

//progress bar

//step 1 options radio button
const productOptions = [
  { name: "Curly", inStock: true },
  { name: "Straight", inStock: true },
  { name: "Wavy", inStock: true },
  { name: "Afro", inStock: true },
]

// step 2 options radio button
const categoryOptions = [
  { name: "Dry", inStock: true },
  { name: "Oily", inStock: true },
  { name: "Damaged", inStock: true },
  { name: "Sensitive", inStock: true },
  { name: "Normal", inStock: true },
]

// step 3 options radio button
const levelOptions = [
  { name: "Bleached", inStock: true },
  { name: "Natural", inStock: true },
  { name: "Lightly Colored", inStock: true },
  { name: "Heavily Bleached", inStock: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

// const steps = [
//   { name: "Step 1", href: "#", status: "upcoming" },
//   { name: "Step 3", href: "#", status: "upcoming" },
//   { name: "Step 3", href: "#", status: "upcoming" },
// ]

const MultistepButton = ({ currentStep, buttonStep, setStep, label }) => {
  return (
    <li
      key={buttonStep}
      className={classNames(
        buttonStep !== 3 ? "pr-16 sm:pr-24" : "",
        "relative",
      )}
      onClick={() => {
        setStep(buttonStep)
      }}
    >
      {currentStep > buttonStep ? (
        <>
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            href="#"
            className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-800 bg-white"
            aria-current="step"
          >
            <span
              className="h-2.5 w-2.5 rounded-full bg-blue-800"
              aria-hidden="true"
            />
            <span className="sr-only">step {buttonStep}</span>
          </a>
        </>
      ) : currentStep === buttonStep ? (
        <>
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            href="#"
            className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-800 bg-white"
            aria-current="step"
          >
            <span
              className="h-2.5 w-2.5 rounded-full bg-blue-800"
              aria-hidden="true"
            />
            <span className="sr-only">step {buttonStep}</span>
          </a>
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            href="#"
            className="group relative flex h-full w-full items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
          >
            <span
              className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
              aria-hidden="true"
            />
            <span className="sr-only">step {buttonStep} </span>
          </a>
        </>
      )}
      {/* <p className="text-center mt-2">{label}</p> */}
    </li>
  )
}
const Filter = () => {
  const [step, setStep] = useState(1)
  const [prod, setProd] = useState(productOptions[2])
  const [cat, setCat] = useState(categoryOptions[2])
  const [level, setLevel] = useState(levelOptions[2])

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  return (
    <div className="w-full max-h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-white">
        <div className="bg-cerulean-700 col-span-1">
          {/* <div className="bg-blue-800 h-full w-full relative">
            <img
              src="https://images.pexels.com/photos/5676738/pexels-photo-5676738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full absolute object-cover mix-blend-overlay opacity-30"
            />
            <div className="p-12">
              <div className="my-48">
                <div className="text-xl text-white tracking-wide mb-2">
                  Metrodata Training
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  Learning Path
                </div>
                <div className="text-2xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, ducimus!
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-span-2 h-full w-full">
          <div className="items-center justify-center w-full">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <ol role="list" className="flex items-center mt-16 ml-14">
                <MultistepButton
                  currentStep={step}
                  buttonStep={1}
                  setStep={setStep}
                  label="Produk"
                />
                <MultistepButton
                  currentStep={step}
                  buttonStep={2}
                  setStep={setStep}
                  label="Kategori"
                />
                <MultistepButton
                  currentStep={step}
                  buttonStep={3}
                  setStep={setStep}
                  label="Level"
                />
              </ol>

              {step === 1 && <Step1 prod={prod} setProd={setProd} />}
              {step === 2 && <Step2 cat={cat} setCat={setCat} />}
              {step === 3 && <Step3 level={level} setLevel={setLevel} />}
              <div className="flex justify-center sm:justify-end sm:mr-16 pb-32 gap-4">
                {step > 1 && (
                  <button
                    className="text-base bg-white border-2 border-blue-800 px-6 py-1.5 rounded-lg text-blue-800 hover:bg-gray-400"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                {step < 3 && (
                  <button
                    className="text-base bg-blue-800 px-10 py-3 rounded-lg text-white hover:bg-blue-800"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    className="text-base bg-blue-800 px-6 py-3 rounded-lg text-white hover:bg-blue-800"
                    onClick={handleNext}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Step1 = ({ prod, setProd }) => {
  return (
    <div className="col-span-2 md:px-16 md:py-4 p-12 bg-white w-full h-full">
      {/* progress bar */}

      <div className="text-2xl text-black font-bold mb-6">
        Select the options that apply to your hair type
      </div>
      <div className="">
        <RadioGroup value={prod} onChange={setProd} className="mt-2">
          <RadioGroup.Label className="sr-only">
            Choose a memory option
          </RadioGroup.Label>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {productOptions.map((option) => (
              <RadioGroup.Option
                key={option.name}
                value={option}
                className={({ active, checked }) =>
                  classNames(
                    option.inStock
                      ? "cursor-pointer focus:outline-none"
                      : "cursor-not-allowed opacity-20 bg-grey-200 hover:bg-gray-200 hover:text-gray-100 focus:text-gray-500 focus:bg-gray-200",
                    active ? "ring-2 ring-blue-800 ring-offset-2" : "",
                    checked
                      ? "bg-blue-800 text-white hover:bg-cerulean-500"
                      : "ring-1 ring-inset ring-gray-200 bg-gray-200 text-gray-900 hover:bg-cerulean-400 hover:text-white",
                    "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1",
                  )
                }
                disabled={!option.inStock}
              >
                <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Step2 = ({ cat, setCat }) => {
  return (
    <div className="col-span-2 md:px-16 md:py-4 p-12 bg-white w-full h-full">
      {/* progress bar */}

      <div className="text-2xl text-black font-bold mb-6">
        Select the options that apply to your hair type
      </div>
      <div className="">
        <RadioGroup value={cat} onChange={setCat} className="mt-2">
          <RadioGroup.Label className="sr-only">
            Choose a memory option
          </RadioGroup.Label>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {categoryOptions.map((option) => (
              <RadioGroup.Option
                key={option.name}
                value={option}
                className={({ active, checked }) =>
                  classNames(
                    option.inStock
                      ? "cursor-pointer focus:outline-none"
                      : "cursor-not-allowed opacity-25",
                    active ? "ring-2 ring-blue-800 ring-offset-2" : "",
                    checked
                      ? "bg-blue-800 text-white hover:bg-cerulean-500"
                      : "ring-1 ring-inset ring-gray-200 bg-gray-200 text-gray-900 hover:bg-cerulean-400 hover:text-white",
                    "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1",
                  )
                }
                disabled={!option.inStock}
              >
                <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Step3 = ({ level, setLevel }) => {
  return (
    <div className="col-span-2 md:px-16 md:py-4 p-12 bg-white w-full h-full">
      {/* progress bar */}

      <div className="text-2xl text-black font-bold mb-6">
        Select the options that apply to your hair type
      </div>
      <div className="">
        <RadioGroup value={level} onChange={setLevel} className="mt-2">
          <RadioGroup.Label className="sr-only">
            Choose a memory option
          </RadioGroup.Label>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {levelOptions.map((option) => (
              <RadioGroup.Option
                key={option.name}
                value={option}
                className={({ active, checked }) =>
                  classNames(
                    option.inStock
                      ? "cursor-pointer focus:outline-none"
                      : "cursor-not-allowed opacity-25",
                    active ? "ring-2 ring-blue-800 ring-offset-2" : "",
                    checked
                      ? "bg-blue-800 text-white hover:bg-cerulean-500"
                      : "ring-1 ring-inset ring-gray-200 bg-gray-200 text-gray-900 hover:bg-cerulean-400 hover:text-white",
                    "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1",
                  )
                }
                disabled={!option.inStock}
              >
                <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default Filter
