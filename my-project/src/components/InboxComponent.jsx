import { useState } from "react";
import { Phone } from "lucide-react";
import { contacts } from "../data/contacts";
import { Inbox } from "lucide-react";

export function InboxComponent() {
  const [filter, setFilter] = useState("All");
  const [order, setOrder] = useState("Newest");

  return (
    <div className="flex-1 p-6 relative overflow-hidden">
      <div className="flex items-center gap-4 mb-8">
        <Inbox className="text-blue-500" />
        <h1 className="text-2xl text-blue-500">Inbox</h1>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Order:</span>
          <div className="flex gap-2">
            {["Newest", "Oldest"].map((option) => (
              <button
                key={option}
                onClick={() => setOrder(option)}
                className={`px-4 py-2 rounded-lg ${
                  order === option ? "bg-gray-200" : "bg-blue-500 text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600">Filter:</span>
          <div className="flex gap-2">
            {["All", "Calls", "SMS", "Voicemails"].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-lg ${
                  filter === option
                    ? "bg-gray-200"
                    : option === "All"
                    ? "bg-gray-200"
                    : "bg-blue-500 text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg">
        <div className="grid grid-cols-2 p-4 rounded-md mb-4">
          <span className="font-medium">Name</span>
          <span className="font-medium text-right">Last Contact</span>
        </div>
        <div className="divide-y divide-gray-100 px-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="grid grid-cols-2 p-2 px-2 transition-all duration-300 ease-in-out mb-4 rounded-md bg-white shadow-md hover:scale-[1.06] transform cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={contact.avatar}
                  alt="Contact"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-gray-600">{contact.phone}</span>
                <div className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full ml-20">
                  <Phone className="w-4 h-4" />
                  <span>{contact.callCount}</span>
                </div>
              </div>
              <div className="flex items-center justify-end text-gray-500">
                {contact.lastContact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
