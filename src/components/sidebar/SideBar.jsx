import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaBloggerB, FaEye, FaUsers, FaUserPlus, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { authService } from '../../service/auth';

const SideBar = ({ sidebarData }) => {
  const [open, setOpen] = useState(true);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768);
    };

    // Get user name from token when component mounts
    const fetchUserName = () => {
      const userData = authService.getUserALL();
      console.log('User Data:', userData);
      if (userData) {
        // Try to get firstname, fallback to email if not available
        const name = userData.firstname || userData.email || 'User';
        setUserName(name);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    fetchUserName();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    authService.logOut();
    navigate('/login');
    window.location.reload();
  };

  return (
    <section className="flex gap-6 m-0">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? 'w-72' : 'w-16'
        } duration-500 text-gray-100 px-4 flex flex-col justify-between`}
      >
        <div>
          <div className="py-3 flex justify-between items-center">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            {open && userName && (
              <div className="flex items-center gap-2">
                <FaUserCircle size={20} />
                <span className="text-sm">Welcome, {userName}</span>
              </div>
            )}
          </div>
          
          <div className="mt-4 flex flex-col gap-4 relative">
            {sidebarData?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && 'mt-5'
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && 'hidden'
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>

        {/* User info and Logout Button */}
        <div className="mb-4">
          {open && userName && (
            <div className="flex items-center gap-2 mb-4 p-2 bg-gray-800 rounded-md">
              <FaUserCircle size={20} />
              <div>
                <p className="text-sm font-medium">Welcome back, {userName}!</p>
              </div>
            </div>
          )}
          
          <button
            onClick={handleLogout}
            className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md w-full"
          >
            <div>
              <FaSignOutAlt size={20} />
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && 'opacity-0 translate-x-28 overflow-hidden'
              }`}
            >
              Logout
            </h2>
            <h2
              className={`${
                open && 'hidden'
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              Logout
            </h2>
          </button>
        </div>
      </div>
    </section>
  );
};

SideBar.propTypes = {
  sidebarData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      margin: PropTypes.bool,
    })
  ).isRequired,
};

export default SideBar;