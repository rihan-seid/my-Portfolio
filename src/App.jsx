import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import { Hero, Navbar, Works, StarsCanvas } from "./components";
import Blogs from "./components/Blogs";
import Register from "./components/user/Register";
import Login from "./components/login";
import BlogForm from "./components/user/BlogForm";
import BlogDisplay from "./components/user/BlogDisplay";
import BlogEdit from "./components/user/BlogEdit";
import UserDisplay from "./components/user/UserDisplay";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gray-100'>
        <Navbar />
                <Toaster position="top-right" />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Hero />
                </div>
                <Works />
                <Blogs />
                <div className='relative z-0'>
                  <StarsCanvas />
                </div>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs/form" element={<BlogForm />} />
          <Route path="/blogs" element={<BlogDisplay />} />
          <Route path="/blogs/edit/:id" element={<BlogEdit  />} />
          <Route path="/user" element={<UserDisplay  />} />

          {/* Add more routes as  needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
