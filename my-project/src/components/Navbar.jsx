import { ChevronDown } from "lucide-react";
import { navigationItems } from "../data/navigation";
import logo from "../assets/logo.png";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center gap-2 p-4 cursor-pointer"
          >
            <img
              src={logo}
              alt="Patientgrid Logo"
              width={24}
              height={24}
              className="text-blue-300"
            />
            <span className="text-3xl">patientgrid</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <div
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-1 cursor-pointer"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div
              href="/login"
              className="text-gray-600 hover:text-gray-900 hidden md:block cursor-pointer"
            >
              Login
            </div>
            <div
              href="/demo"
              className="bg-[#4B0082] text-white px-6 py-2 rounded-full hover:bg-[#3B0062] transition-colors cursor-pointer"
            >
              Request a demo
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
