import { Phone, Monitor } from "lucide-react";
import Ellipse from "../assets/Ellipse 36.png";
export default function HealthcareInbox() {
  const contacts = [
    {
      id: 1,
      phone: "(305) 440-0858",
      calls: 1,
      time: "20 Hours Ago",
      image: Ellipse,
    },
    {
      id: 2,
      phone: "(304) 450-0258",
      calls: 7,
      time: "10 Hours Ago",
      image: Ellipse,
    },
    {
      id: 3,
      phone: "(325) 240-0998",
      calls: 2,
      time: "01 Hours Ago",
      image: Ellipse,
    },
    {
      id: 4,
      phone: "(225) 440-0458",
      calls: 3,
      time: "10 Hours Ago",
      image: Ellipse,
    },
  ];

  return (
    <div className="min-h-[20vh] p-8">
      <div className="max-w-7xl w-[90%] bg-[#EEF3FF] mx-auto grid lg:grid-cols-2 gap-12 items-center p-6 rounded-xl mb-20">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Seamless collaboration for healthcare teams
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed">
            With shared inboxes, any team member can resolve the team&apos;s
            pending tasks. Individual staff member don&apos;t get overwhelmed
            and patients are always take care of.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Inbox</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
                <span className="text-sm">patientgrid</span>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Order:</span>
                <button className="bg-gray-100 px-3 py-1 rounded-md">
                  Newest
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  Oldest
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Filter:</span>
                <button className="bg-gray-100 px-3 py-1 rounded-md">
                  All
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  Calls
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  SMS
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  Voicemails
                </button>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-2 text-sm text-gray-500 pb-2">
              <span>Name</span>
              <span className="text-right">Last Contact</span>
            </div>

            {/* Contact List */}
            <div className="space-y-3">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="grid grid-cols-2 p-2 px-2 transition-all duration-300 ease-in-out mb-4 rounded-md bg-white shadow-md hover:scale-[1.15] transform cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={contact.image}
                      alt="Contact"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-gray-600">{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full">
                      <Phone className="w-4 h-4" />
                      <span>{contact.calls}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-20">
                      {contact.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
