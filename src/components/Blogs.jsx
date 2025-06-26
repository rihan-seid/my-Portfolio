"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { blogService } from "../service/blogService"; // Adjust the import path as necessary 
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4500';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogService.getBlogs();
        const data = Array.isArray(response) ? response : response?.ads || [];
        
        if (Array.isArray(data)) {
          const processedBlogs = data.map(blog => ({
            ...blog,
            images: blog.images?.map(image => {
              const cleanedImage = image.replace(/^undefined/, '');
              return image.startsWith('http') ? image : `${API_BASE_URL}${cleanedImage}`;
            }) || []
          }));
          setBlogs(processedBlogs);
        } else {
          console.error('Expected array but got:', response);
          setBlogs([]);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getFirstImage = (images) => {
    return images?.[0] || 'https://via.placeholder.com/400x200?text=Blog+Image';
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-8 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-4">
            Victor Insights & Updates
          </h2>
          <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
            Latest news, tutorials and industry perspectives from our team
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        )}

        {/* Swiper Container */}
        {!loading && (
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              speed={600} // Increased swiping speed
              autoplay={{
                delay: 500, // Faster autoplay
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              pagination={{
                clickable: true,
                el: '.blog-pagination',
                bulletClass: 'blog-bullet',
                bulletActiveClass: 'blog-bullet-active',
                renderBullet: function (index, className) {
                  return `<span class="${className}"></span>`;
                },
              }}
              navigation={{
                nextEl: '.blog-button-next',
                prevEl: '.blog-button-prev',
              }}
              className="swiper-container"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog._id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }} // Faster animation
                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transform transition-all duration-200" // Faster transition
                  >
                    <div className="relative">
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-yellow-600 bg-yellow-50 rounded-full">
                          Blog
                        </span>
                      </div>
                      <img 
                        src={getFirstImage(blog.images)} 
                        alt={blog.title}
                        className="h-48 w-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/400x200?text=Blog+Image';
                        }}
                      />
                    </div>
                    
                    <div className="p-8 flex-1">
                      <div className="flex items-center text-sm text-yellow-500 mb-4">
                        <span>3 min read</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(blog.createdAt)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">{blog.title}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">{blog.description}</p>
                    </div>
                    <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                      <button 
                        className="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors flex items-center group"
                        onClick={() => window.location.href = `/blogs/${blog._id}`}
                      >
                        Read Full Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex items-center justify-center mt-10">
              <button 
                className="blog-button-prev w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-yellow-50 transition-colors mr-6"
                aria-label="Previous blog"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="blog-pagination flex space-x-2 mx-4" />
              
              <button 
                className="blog-button-next w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-yellow-50 transition-colors ml-6"
                aria-label="Next blog"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .swiper-container {
          padding: 30px 10px 60px;
        }
        
        .blog-pagination {
          position: relative;
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        
        .blog-bullet {
          width: 10px;
          height: 10px;
          background: rgba(234, 179, 8, 0.3);
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .blog-bullet-active {
          width: 30px;
          background: #eab308;
          border-radius: 10px;
        }
        
        .swiper-slide {
          transition: all 0.3s ease;
          transform-origin: center bottom;
        }
        
        .swiper-slide-active {
          transform: scale(1.05);
          z-index: 10;
        }
        
        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.8;
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default Blogs;