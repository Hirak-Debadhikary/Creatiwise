import { Inbox } from 'lucide-react'
import logo from '../assets/logo.png'

export function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-200 h-auto p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 relative">
          <img
            src={logo}
            alt="PatientGrid Logo"
            className="object-contain"
          />
        </div>
        <span className="text-3xl ">patientgrid</span>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Amanda Charles</h2>
      
      <div className="flex items-center gap-2 text-blue-500 p-2 hover:bg-blue-50 rounded-lg cursor-pointer">
        <Inbox className="w-5 h-5" />
        <span>Inbox</span>
      </div>
    </div>
  )
}

