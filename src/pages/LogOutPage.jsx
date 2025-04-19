import { useState } from "react";
import { FaArrowLeft, FaPen, FaUser, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function ProfilePage() {
  const [username, setUsername] = useState("Master");
  const [email, setEmail] = useState("xxx@gmail.com");
  const navigate = useNavigate();
  function handleLogout() {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Back arrow */}
        <button className="text-white mb-4 cursor-pointer" onClick={() => navigate(-1)} >
          <FaArrowLeft size={20} />
        </button>

        {/* Profile picture with edit icon */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <img
            src="/your-monster-image.png" // Replace with actual image path
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-2 border-white"
          />
          <div className="absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full">
            <button><FaPen size={12}/></button>
          </div>
        </div>

        <h2 className="text-center text-lg font-medium mb-6">{username}</h2>

        {/* Username Field */}
        <div className="mb-4">
          <label className="text-sm font-semibold mb-1 block">Username</label>
          <div className="flex items-center bg-neutral-900 rounded-lg px-3 py-2">
            <FaUser className="mr-2 text-gray-400" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="text-sm font-semibold mb-1 block">Your Email</label>
          <div className="flex items-center bg-neutral-900 rounded-lg px-3 py-2">
            <FaEnvelope className="mr-2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
