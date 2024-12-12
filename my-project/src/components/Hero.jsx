import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-r from-blue-200 via-blue-300 to-purple-300 transform skew-y-3" /> */}

      <div className="max-w-7xl w-[65%] mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 max-w-5xl mx-auto leading-loose">
          Medical Software To Attract And{" "}
          <span className="font-bold"> Retain Patients</span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
          Patientgrid&apos;s communication platform helps improve patient
          experience while staff hours.
        </p>
        <div className="mt-10">
          <div
            href="/start"
            className="inline-flex items-center gap-2  text-black px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            Start For Free
            <ChevronRight className="w-6 h-6 bg-[#4B0082] text-white rounded-full p-1 shadow-lg hover:shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
