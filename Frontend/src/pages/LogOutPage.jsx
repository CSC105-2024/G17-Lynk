import { ModeToggle } from '@/components/mode-toggle';
import { useState } from 'react';
import { FaArrowLeft, FaPen, FaUser, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import axios from 'axios';

export default function ProfilePage() {
  const [username, setUsername] = useState('bambi');
  const [email, setEmail] = useState('xxx@gmail.com');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [profileImage, setProfileImage] = useState('/dummy_pf.jpg');
  const [tempImage, setTempImage] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/logout',
        {},
        { withCredentials: true }
      );

      if (response.data?.success) {
        alert('Successfully logged out!');
        setShowLogoutModal(false);
        navigate('/', { replace: true });
      } else {
        alert('Logout failed: ' + (response.data?.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error logging out: ' + (error.response?.data?.message || 'Unknown error'));
    }
    finally{
      setShowLogoutModal(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setTempImage(imageURL);
    }
  };

  const handleSave = () => {
    if (tempImage) {
      setProfileImage(tempImage);
      setTempImage(null);
    }
    setEdit(false);
  };
  const handle_edit = () => setEdit(!edit);

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='min-h-screen bg-[var(--logout-bg-color)] text-[var(--logout-text-color)] flex flex-col items-center justify-center px-4'>
        <div className='w-full max-w-sm rounded-lg shadow-xl p-8'>
          <div className='flex justify-between items-center mb-4'>
            <button className='mb-4 cursor-pointer' onClick={() => navigate(-1)}>
              <FaArrowLeft size={12} />
            </button>
            <ModeToggle className='fixed top-5 right-5 z-50' />
          </div>

          <div className='relative w-28 h-28 mx-auto mb-4'>
            <img
              src={tempImage || profileImage}
              alt='Profile'
              className='w-full h-full object-cover rounded-full border-2 border-white'
            />
            <div className='absolute bottom-2 right-2 bg-gray-100 p-1 rounded-full shadow-sm'>
              <button
                onClick={handle_edit}
                className='w-4 h-4 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition cursor-pointer'
              >
                <FaPen size={12} className='text-gray-600' />
              </button>
            </div>

            {edit && (
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='absolute bottom-0 left-0 w-full h-full opacity-0 cursor-pointer'
              />
            )}
          </div>

          <h2 className='text-center text-lg font-medium mb-6'>{username}</h2>

          <div className='mb-4'>
            <label className='text-sm font-semibold mb-1 block'>Username</label>
            <div className='flex items-center bg-[var(--logout-input-bg-color)] text-[var(--logout-input-text-color)] rounded-lg px-3 py-2'>
              <FaUser className='mr-2 text-gray-400' />
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='bg-transparent outline-none w-full'
              />
            </div>
          </div>

          <div className='mb-6'>
            <label className='text-sm font-semibold mb-1 block'>Your Email</label>
            <div className='flex items-center bg-[var(--logout-input-bg-color)] text-[var(--logout-input-text-color)] rounded-lg px-3 py-2'>
              <FaEnvelope className='mr-2 text-gray-400' />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-transparent outline-none w-full'
              />
            </div>
          </div>

          {edit && (
            <button
              className='w-full bg-[var(--save-btn-color)] hover:bg-[var(--hover-save-btn-color)] text-white font-semibold py-2 rounded-lg transition duration-200 mb-4 cursor-pointer'
              onClick={handleSave}
            >
              Save
            </button>
          )}

          <button
            className='w-full bg-[var(--logout-btn-color)] hover:bg-[var(--logout-btn-hover-color)] text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer'
            onClick={() => setShowLogoutModal(true)}
          >
            Log out
          </button>

          {showLogoutModal && (
            <div className='fixed inset-0 bg-[var(--logout-bg-color)] text-[var(--logout-text-color)] bg-opacity-60 flex items-center justify-center z-50'>
              <div className='rounded-xl shadow-xl p-6 w-80 text-center'>
                <h2 className='text-lg font-semibold mb-4'>Are you sure?</h2>
                <p className='mb-6'>Do you really want to log out?</p>
                <div className='flex justify-between gap-4'>
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className='flex-1 py-2 rounded-lg bg-[var(--cancel-btn-color)] hover:bg-[var(--cancel-btn-hover-color)] cursor-pointer'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className='flex-1 py-2 rounded-lg bg-[var(--logout-btn-color)] hover:bg-[var(--logout-btn-hover-color)] text-white cursor-pointer'
                  >
                    Yes, Log out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
