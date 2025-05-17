import { useEffect, useState } from "react";

const Middle = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Premium, stunning high-quality images for a professional look
  const images = [
    "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=100",
    "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100"
  ];

  // Testimonials for social proof
  const testimonials = [
    {
      quote: "BlogNest transformed how I share my stories with the world. The platform is intuitive and beautiful.",
      author: "Sarah Johnson",
      role: "Travel Blogger"
    },
    {
      quote: "As a professional writer, I needed a platform that showcases my work elegantly. BlogNest delivers exactly that.",
      author: "Michael Chen",
      role: "Content Creator"
    },
    {
      quote: "The community I've built through BlogNest has been incredible. My readership has grown exponentially.",
      author: "Priya Sharma",
      role: "Fiction Writer"
    }
  ];

  useEffect(() => {
    // Image carousel effect
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    // Fade-in animation on load
    // Animation handled by CSS now

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections that should animate on scroll
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [images.length]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Completely redesigned with premium aesthetics */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 min-h-screen">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -left-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center">
          {/* Left content - Text and CTA */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white text-sm font-medium mb-8 border border-white/20 shadow-xl">
              <span className="flex items-center animate-pulse">
                <svg className="w-4 h-4 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                PREMIUM BLOGGING EXPERIENCE
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none mb-6">
              Elevate Your <br/>
              <span className="relative inline-block mt-2">
                Writing Journey
                <span className="absolute -bottom-3 left-0 w-full h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-indigo-100 font-serif leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Craft stunning narratives, build your audience, and join a community of passionate writers on the web's most elegant blogging platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={toggleDropdown}
                className="relative group px-8 py-4 bg-white rounded-xl text-indigo-900 font-serif font-bold text-lg shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Begin Your Journey
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>

              <a href="/blogs" className="px-8 py-4 bg-transparent border border-white/30 backdrop-blur-sm rounded-xl text-white font-serif font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                Explore Blogs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>

              {isDropdownVisible && (
                <div className="absolute top-full left-0 mt-4 rounded-2xl shadow-2xl w-80 bg-white overflow-hidden border border-indigo-100 animate-fadeIn z-20">
                  <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-indigo-100">
                    <h3 className="font-serif font-bold text-indigo-950 text-xl">Join BlogNest</h3>
                    <p className="text-indigo-700 font-medium">Premium blogging platform for writers</p>
                  </div>
                  <div className="p-3">
                    <a href="/signup" className="flex items-center p-4 hover:bg-indigo-50 transition-all duration-200 rounded-xl group">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg transition-all duration-200 border border-indigo-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-indigo-950 text-lg group-hover:text-indigo-700 transition-colors duration-200">Sign up</h4>
                        <p className="text-indigo-600">Create your literary account</p>
                      </div>
                    </a>
                    <a href="/signin" className="flex items-center p-4 hover:bg-indigo-50 transition-all duration-200 rounded-xl group">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg transition-all duration-200 border border-indigo-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-indigo-950 text-lg group-hover:text-indigo-700 transition-colors duration-200">Sign in</h4>
                        <p className="text-indigo-600">Access your literary account</p>
                      </div>
                    </a>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-indigo-100 to-purple-100 border-t border-indigo-200 text-center">
                    <p className="text-indigo-700 font-medium font-serif">Join our literary community today</p>
                  </div>
                </div>
              )}
            </div>

            {/* Stats for social proof */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">10K+</p>
                <p className="text-indigo-200 font-serif">Writers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">50K+</p>
                <p className="text-indigo-200 font-serif">Articles</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">120K+</p>
                <p className="text-indigo-200 font-serif">Readers</p>
              </div>
            </div>
          </div>

          {/* Right content - Image showcase */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent opacity-50 z-10"></div>
                  <img
                    src={image}
                    alt={`Premium writing experience ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}

              {/* Image overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Craft Your Narrative</h3>
                  <p className="text-indigo-100 font-serif">Express your unique voice with our elegant writing tools and beautiful typography.</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 flex space-x-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-5 -right-5 bg-gradient-to-br from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-xl transform rotate-3 font-bold">
              Premium Design
            </div>
            <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-xl transform -rotate-3 font-bold">
              Stunning Typography
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
          <p className="text-sm font-medium mb-2">Scroll to explore</p>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Features Section - Redesigned with premium aesthetics */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-bold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              PREMIUM FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-indigo-950 via-purple-800 to-indigo-900 text-transparent bg-clip-text animate-gradient-text">Why Choose BlogNest?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-2 mb-6"></div>
            <p className="text-indigo-800 text-xl max-w-3xl mx-auto font-serif">
              A sophisticated platform designed for creative writers and engaged readers to connect through inspiring content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {/* Create Stories */}
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl p-10 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-indigo-100 relative overflow-hidden group hover-shine">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl shadow-lg mb-6 transform transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                <svg className="w-12 h-12 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-indigo-950 text-center relative z-10">Create Stories</h3>
              <p className="text-indigo-800 font-serif leading-relaxed text-center text-lg relative z-10">
                Express yourself through elegant prose and share your unique perspective with readers worldwide
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full"></div>
            </div>

            {/* Read Blogs */}
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl p-10 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-indigo-100 relative overflow-hidden group hover-shine">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-2xl shadow-lg mb-6 transform transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                <svg className="w-12 h-12 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-indigo-950 text-center relative z-10">Read Blogs</h3>
              <p className="text-indigo-800 font-serif leading-relaxed text-center text-lg relative z-10">
                Discover thought-provoking content from talented writers across genres and cultures
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full"></div>
            </div>

            {/* Connect */}
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl p-10 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-indigo-100 relative overflow-hidden group hover-shine">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-700 rounded-2xl shadow-lg mb-6 transform transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                <svg className="w-12 h-12 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-indigo-950 text-center relative z-10">Connect</h3>
              <p className="text-indigo-800 font-serif leading-relaxed text-center text-lg relative z-10">
                Build meaningful relationships with like-minded writers and readers in our literary community
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-fuchsia-300 to-purple-300 rounded-full"></div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-20 text-center">
            <a href="/signup" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-900 to-purple-800 text-white font-serif font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1">
              Start Your Writing Journey
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white text-sm font-bold mb-6 border border-white/20">
              WHAT WRITERS SAY
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-white">
              Loved by Writers Worldwide
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-2 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl scroll-animate">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-lg font-serif italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-serif">{testimonial.author}</h4>
                    <p className="text-indigo-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;

