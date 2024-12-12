import { Star, Settings } from "lucide-react";
import Ellipse from "../assets/Ellipse 36.png";

export default function FeatureSections() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-32">
        {/* Review Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md">
              <div className="flex gap-1 mb-4">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-[#FFD700] text-[#FFD700]"
                    />
                  ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <img
                    src={Ellipse}
                    alt="Profile"
                    width={64}
                    height={64}
                    className="rounded-full bg-[#D85B77]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr.James L.</h3>
                  <p className="text-muted-foreground text-sm">
                    Psychologist, Canada
                  </p>
                </div>
              </div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Bring new business in by getting more online reviews.
            </h2>
            <p className="text-xl text-gray-600">
              94% Use review to choose new doctor.
            </p>
          </div>
        </div>

        {/* Automation Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:order-1">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Save time with collaborative tools and automations.
            </h2>
            <p className="text-xl text-gray-600">
              15+ Staff hours saved per week.
            </p>
          </div>
          <div className="relative md:order-2">
            <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md">
              <div className="space-y-6 ">
                <div className="h-2 bg-[#4338CA] w-24 rounded-full" />
                <div className="relative h-40">
                  <div className="absolute inset-0 flex items-end justify-between  w-[70%]">
                    {[0.6, 0.4, 0.8, 1, 0.7].map((height, i) => (
                      <div
                        key={i}
                        className="w-8 bg-[#4338CA] rounded-t-lg"
                        style={{ height: `${height * 100}%` }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-10 right-4 ">
                    <div className="relative w-20 h-20">
                      {/* First Icon */}
                      <Settings className="absolute bottom-2 left-2 w-10 h-10 text-[#4338CA]" />
                      {/* Second Icon */}
                      <Settings className="absolute top-2 right-2 w-10 h-10 text-[#4338CA]" />
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Patient Experience Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100" />
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full w-3/4" />
                    <div className="h-2 bg-gray-200 rounded-full w-1/2 mt-2" />
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full w-3/4 ml-auto" />
                    <div className="h-2 bg-gray-200 rounded-full w-1/2 ml-auto mt-2" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100" />
                </div>
                <div className="h-2 bg-gray-100 rounded-full mt-4" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Improve patient experience engaging the way they want.
            </h2>
            <p className="text-xl text-gray-600">
              90% People prefer texts to phone calls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
