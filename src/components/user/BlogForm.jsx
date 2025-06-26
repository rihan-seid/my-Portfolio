import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FiUpload, FiX, FiPlus } from 'react-icons/fi';
import SideBar from '../sidebar/SideBar';
import { sidebarData } from '../sidebar/sidebardata';
import { blogService } from '../../service/blogService'; // Adjust the import path as necessary 
const BlogForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + blogData.images.length > 5) {
      toast.error('You can upload a maximum of 5 images');
      return;
    }

    const validImages = files.filter(file => 
      file.type.match('image.*') && file.size <= 5 * 1024 * 1024
    );

    if (validImages.length !== files.length) {
      toast.error('Only images under 5MB are allowed');
    }

    setBlogData(prev => ({
      ...prev,
      images: [...prev.images, ...validImages]
    }));
  };

  const removeImage = (index) => {
    setBlogData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!blogData.title.trim() || !blogData.description.trim()) {
      toast.error('Title and description are required');
      setIsSubmitting(false);
      return;
    }

    try {
      await blogService.createBlog(blogData);
      toast.success('Blog created successfully!');
      navigate('/blogs');
    } catch (error) {
      console.error('Blog creation error:', error);
      toast.error(error.message || 'Failed to create blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex">
          {/* Sidebar */}
          <SideBar sidebarData={sidebarData} />
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Blog Post</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title*
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description*
          </label>
          <textarea
            id="description"
            name="description"
            value={blogData.description}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your blog content here..."
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Images (Max 5)
          </label>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
            {blogData.images.map((image, index) => (
              <div key={index} className="relative group">
                {typeof image === 'string' ? (
                  <img 
                    src={image} 
                    alt={`Preview ${index}`}
                    className="h-32 w-full object-cover rounded-md"
                  />
                ) : (
                  <img 
                    src={URL.createObjectURL(image)} 
                    alt={`Preview ${index}`}
                    className="h-32 w-full object-cover rounded-md"
                  />
                )}
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FiX size={14} />
                </button>
              </div>
            ))}
            
            {blogData.images.length < 5 && (
              <div 
                className="border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer h-32"
                onClick={() => fileInputRef.current.click()}
              >
                <FiPlus size={24} className="text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Add Image</span>
              </div>
            )}
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            multiple
            className="hidden"
          />
          <p className="text-xs text-gray-500">Supported formats: JPEG, PNG. Max size: 5MB per image</p>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/blogs')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Publishing...' : 'Publish Blog'}
          </button>
        </div>
      </form>
    </div></div>
  );
};

export default BlogForm;