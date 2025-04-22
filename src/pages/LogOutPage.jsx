import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { FaArrowLeft, FaPen, FaUser, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function ProfilePage() {
  const [username, setUsername] = useState("bambi");
  const [email, setEmail] = useState("xxx@gmail.com");
  const [showLogoutModal,setShowLogoutModal] = useState(false);
  const [edit,setEdit] = useState(false);
  const [profileImage, setProfileImage] = useState("/dummy_pf.jpg");
  const [tempImage, setTempImage] = useState(null); 
  const navigate = useNavigate();
  function handleLogout() {
    navigate('/')
  }
  function handleImageChange(e){
    const file = e.target.files[0];
    if(file){
      const imageURL = URL.createObjectURL(file);
      setTempImage(imageURL);
    }
  }
  function handleSave(e){
    if(tempImage){
      setProfileImage(tempImage);
      setTempImage(null);
    }
    setEdit(false);
  }
  const handle_show = () => setShowLogoutModal(!showLogoutModal);
  const handle_edit = () => setEdit(!edit);
 
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Back arrow */}
        <button className="text-white mb-4 cursor-pointer" onClick={() => navigate(-1)} >
          <FaArrowLeft size={12} />
        </button>

        {/* Profile picture with edit icon */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <img
            src={tempImage || profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-2 border-white"
          />
          <div className="absolute bottom-2 right-2 bg-gray-100 p-1 rounded-full shadow-sm">
        <button
        onClick={handle_edit}
        className="w-4 h-4 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition cursor-pointer"
        >
       <FaPen size={12} className="text-gray-600" />
       </button>
      </div>

            <div>
              {edit && (<input type="file" accept="image/*" onChange={handleImageChange} className="absolute bottom-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              )}
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
        <div>
            {edit && (
            <button
            className="w-full bg-[var(--save-btn-color)] hover:bg-[var(--hover-save-btn-color))] text-white font-semibold py-2 rounded-lg transition duration-200 mb-4 cursor-pointer"
            onClick={handleSave}
              >
            Save
            </button>
            )}
      </div>
        {/* Logout Button */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer" onClick={handle_show}>
          Log out
        </button>

        {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
            <p className="mb-6">Do you really want to log out?</p>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
              >
                Yes, Log out
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
