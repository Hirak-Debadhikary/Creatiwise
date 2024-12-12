import { Facebook, Twitter, Instagram, Phone, Mail, ChevronRight } from "lucide-react";
import group from "../assets/Group.png";
export default function Footer() {
  return (
    <footer className="bg-[#2D1B69] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                {/* <span className="text-[#2D1B69] font-bold text-xl">p</span> */}
                <img src={group} alt="image" />
              </div>
              <span className="text-2xl font-normal">patientgrid</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="flex gap-4">
              <div
                href="#"
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#2D1B69]" />
              </div>
              <div
                href="#"
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Twitter className="w-5 h-5 text-[#2D1B69]" />
              </div>
              <div
                href="#"
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#2D1B69]" />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+91-885392455</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+91-456789478</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>patientgrid@gmail.com</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Subscribe Newsletter</h3>
            <div className="flex relative">
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-black rounded-full p-2 w-[70%]"
              />
              <button className="bg-[#4B84D9] hover:bg-[#3A6BB3] rounded-full p-2 text-white absolute right-28">
                <span className="sr-only">Subscribe</span>
                <ChevronRight/>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-b border-gray-700 py-4 my-8">
          <nav className="flex justify-center gap-8">
            <div href="#" className="hover:text-gray-300 transition-colors">
              Products
            </div>
            <div href="#" className="hover:text-gray-300 transition-colors">
              Plans
            </div>
            <div href="#" className="hover:text-gray-300 transition-colors">
              More
            </div>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          © Copyright 2023.All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
