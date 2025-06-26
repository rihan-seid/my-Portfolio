import { useState } from 'react';
import { authService } from '../service/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

const loginUser = async (e) => {
  e.preventDefault();
  const { email, password } = data;

  if (!email || !password) {
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    const response = await authService.login({ email, password });
    const { token, error } = response.data; // Changed from accessToken to token

    if (error) {
      toast.error(error);
    } else if (token) {
      authService.setToken(token); // Set the token in localStorage
      toast.success("Login successful!");
      navigate('/blogs'); // Change this to your desired post-login route
    } else {
      toast.error('Unexpected response from server.');
    }
  } catch (err) {
    console.error('Login error:', err);
    toast.error(err.response?.data?.message || 'Login failed. Please try again.');
  }
};

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex">
        {/* Left image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=500&auto=format&fit=crop&q=60"
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
          <form onSubmit={loginUser} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter email..."
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password..."
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>

          {/* Optional: add forgot password or register link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Don’t have an account? <span className="text-black font-medium cursor-pointer">Register</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
