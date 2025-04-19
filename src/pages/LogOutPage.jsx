import { useState } from 'react';
import { FaArrowLeft, FaPen, FaUser, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function ProfilePage() {
  const [username, setUsername] = useState('bambi');
  const [email, setEmail] = useState('xxx@gmail.com');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  function handleLogout() {
    navigate('/');
  }
  function handle_show() {
    setShowLogoutModal(true);
  }

  return (
    <div className='min-h-screen bg-[var(--logout-bg-color)] text-[var(--logout-text-color)] flex flex-col items-center justify-center px-4'>
      <div className='w-full max-w-sm'>
        {/* Back arrow */}
        <button className='mb-4 cursor-pointer' onClick={() => navigate(-1)}>
          <FaArrowLeft size={20} />
        </button>

        {/* Profile picture with edit icon */}
        <div className='relative w-28 h-28 mx-auto mb-4'>
          <img
            src='/dummy_pf.jpg'
            alt='Profile'
            className='w-full h-full object-cover rounded-full border-2 border-white'
          />
          <div className='absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full'>
            <button onClick={(e) => e.preventDefault()}>
              <FaPen size={12} />
            </button>
          </div>
        </div>

        <h2 className='text-center text-lg font-medium mb-6'>{username}</h2>

        {/* Username Field */}
        <div className='mb-4'>
          <label className='text-sm font-semibold mb-1 block'>Username</label>
          <div className='flex items-center bg-[var(--logout-input-bg-color)] rounded-lg border px-3 py-2'>
            <FaUser className='mr-2 text-gray-400' />
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='bg-transparent outline-none w-full'
            />
          </div>
        </div>

        {/* Email Field */}
        <div className='mb-6'>
          <label className='text-sm font-semibold mb-1 block'>Your Email</label>
          <div className='flex items-center bg-[var(--logout-input-bg-color)] rounded-lg border px-3 py-2'>
            <FaEnvelope className='mr-2 text-gray-400' />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-transparent outline-none  w-full'
            />
          </div>
        </div>

        {/* Logout Button */}
        <button
          className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200'
          onClick={handle_show}
        >
          Log out
        </button>

        {showLogoutModal && (
          <div className='fixed inset-0 bg-[var(--logout-bg-color)] text-[var(--logout-text-color)] bg-opacity-60 flex items-center justify-center z-50'>
            <div className='rounded-xl p-6 w-80 text-center shadow-lg bg-[var(--logout-secondary-bg-color)]'>
              <h2 className='text-lg font-semibold mb-4'>Are you sure?</h2>
              <p className='mb-6'>Do you really want to log out?</p>
              <div className='flex justify-between gap-4'>
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className='flex-1 py-2 rounded-lg border hover:bg-gray-400'
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className='flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white'
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
