import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { authService } from '../../service/auth';
import SideBar from '../sidebar/SideBar';
import { sidebarData } from '../sidebar/sidebardata'; // Adjust the import path as necessary  
const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.register(data);
      if (res.data && res.data.message) {
        toast.success(res.data.message || 'Registration successful!');
        navigate('/user');
      }
    } catch (err) {
      console.error('Registration error:', err);
      toast.error(err?.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar sidebarData={sidebarData} />

      {/* Register Form */}
      <div className="flex-1 flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          {['firstname', 'lastname', 'email', 'phoneNumber', 'password'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field}
              </label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                value={data[field]}
                onChange={(e) => setData({ ...data, [field]: e.target.value })}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
