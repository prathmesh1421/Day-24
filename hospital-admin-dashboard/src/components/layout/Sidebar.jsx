import {
  FaHome,
  FaUserInjured,
  FaCalendarCheck,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h1 className="text-3xl font-bold mb-10 text-center">
        MediCare
      </h1>

      <ul className="space-y-6">
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaHome />
          Dashboard
        </li>

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaUserInjured />
          Patients
        </li>

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaCalendarCheck />
          Appointments
        </li>

        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaCog />
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
