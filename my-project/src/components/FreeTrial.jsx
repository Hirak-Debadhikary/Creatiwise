import rectangle from "../assets/Rectangle.png";
export default function FreeTrial() {
  return (
    <div className="relative min-h-[350px] bg-[#c1c5f4] overflow-hidden mb-20 w-[86%] m-auto rounded-xl">
      {/* Purple decorative shapes */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#4338CA] rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#4338CA] rounded-tl-full" />
      
      <div className="relative w-[90%] max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Image section */}
          <div className="relative z-10">
            <img
              src={rectangle}
              alt="Healthcare Professional"
              width={400}
              height={600}
              className="object-contain"
              // priority
            />
          </div>

          {/* Content section */}
          <div className="space-y-6 text-center">
            <h1 className="text-3xl font-bold leading-tight">
              We work on a month-to-month basis, try for free with no commitments
            </h1>
            <p className="text-gray-600 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="bg-[#4B84D9] hover:bg-[#3A6BB3] text-white px-8 py-2 text-lg rounded-full"
            >
              14 Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

