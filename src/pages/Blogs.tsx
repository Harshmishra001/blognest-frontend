import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Footer from './Footer';
const url=import.meta.env.VITE_BACKEND_URL

interface Blog {
  id: number;
  author: {
    name: string;
  };
  title: string;
  content: string;
  createdAt: string;
  authorId:number
}

const THEMES = {
  light: {
    bg: "bg-gradient-to-b from-indigo-50 via-slate-50 to-slate-100",
    card: "bg-white",
    text: "text-indigo-900",
    nav: "bg-gradient-to-r from-indigo-950 to-purple-900",
    navText: "text-slate-100",
    select: "bg-white text-indigo-900 border-indigo-200"
  },
  dark: {
    bg: "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900",
    card: "bg-gray-800",
    text: "text-gray-100",
    nav: "bg-gradient-to-r from-gray-900 to-gray-800",
    navText: "text-gray-100",
    select: "bg-gray-700 text-gray-100 border-gray-600"
  },
  custom: {
    bg: "bg-gradient-to-b from-yellow-50 via-pink-50 to-pink-100",
    card: "bg-pink-50",
    text: "text-pink-900",
    nav: "bg-gradient-to-r from-pink-400 to-yellow-300",
    navText: "text-pink-900",
    select: "bg-pink-100 text-pink-900 border-pink-300"
  }
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") || "light");
  const name = localStorage.getItem("name");
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${url}/api/v1/all-blog`, {
          headers: {
            'Authorization': token,
          },
        });
        const sortedBlogs = response.data.sort((a: Blog, b: Blog) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [token]);

  // Save theme to localStorage and update on change
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeObj = THEMES[theme as keyof typeof THEMES];

  return (
    <div className={`${themeObj.bg} min-h-screen transition-colors duration-300`}>
      <nav className={`${themeObj.nav} py-4 shadow-xl sticky top-0 z-10 border-b border-white/10`}>
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className={`text-4xl font-bold font-serif ${themeObj.navText}`}>
            <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-200 text-transparent bg-clip-text animate-gradient-text">BlogNest</span>
          </div>
          <div className="flex items-center space-x-6">
            {/* Theme Switcher - visually attractive */}
            <div className="flex items-center">
              <select
                value={theme}
                onChange={e => setTheme(e.target.value)}
                className={`rounded-xl px-3 py-2 border focus:outline-none shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${themeObj.select}`}
                aria-label="Select theme"
                style={{
                  fontWeight: 600,
                  minWidth: 110,
                  boxShadow: theme === "dark" ? "0 0 0 2px #222" : undefined
                }}
              >
                <option value="light">🌞 Light</option>
                <option value="dark">🌙 Dark</option>
                <option value="custom">🎨 Custom</option>
              </select>
            </div>
            <a
              href="/write"
              className={`font-serif text-lg px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center transform hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-700 to-indigo-800 text-white hover:from-purple-600 hover:to-indigo-700 border border-indigo-700/30"
                  : theme === "custom"
                  ? "bg-gradient-to-r from-pink-400 to-rose-300 text-white hover:from-pink-300 hover:to-rose-200 border border-pink-300/30"
                  : "bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:from-indigo-500 hover:to-purple-600 border border-white/10"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Create Blog
            </a>




            <button
              onClick={() => {
                // Clear authentication data
                localStorage.removeItem('token');
                localStorage.removeItem('name');
                localStorage.removeItem('id');

                // Dispatch auth change event
                window.dispatchEvent(new Event('auth-change'));

                // Navigate to home page
                window.location.href = '/';
              }}
              className={`font-serif text-lg px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center transform hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-gray-700/80 backdrop-blur-md text-gray-100 hover:bg-gray-600/80 border border-gray-600/50"
                  : theme === "custom"
                  ? "bg-pink-200/90 backdrop-blur-md text-pink-900 hover:bg-pink-300/90 border border-pink-300/50"
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
              Logout
            </button>
            <div className={`relative inline-flex items-center justify-center w-12 h-12 overflow-hidden rounded-xl shadow-lg ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-600 to-gray-800 border border-gray-500/30"
                : theme === "custom"
                ? "bg-gradient-to-br from-pink-300 to-pink-400 border border-pink-200/30"
                : "bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/20"
            }`}>
              <span className={`font-bold text-xl font-serif ${
                theme === "dark" ? "text-gray-100" : "text-white"
              }`}>{name?.slice(0, 1).toUpperCase()}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4">
        <div className={`text-center mb-16 ${themeObj.text}`}>
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100/90 text-indigo-900 rounded-full text-sm font-bold mb-6 shadow-sm">
            <svg className="w-4 h-4 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            YOUR PERSONAL SPACE
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-950 to-purple-900 text-transparent bg-clip-text animate-gradient-text">Your Creative Feed</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-2 mb-6"></div>
          <p className="text-indigo-900 text-xl max-w-3xl mx-auto font-serif leading-relaxed">
            Discover and manage your collection of thoughtful blog posts in one beautiful space
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className={`${themeObj.card} text-center py-16 rounded-3xl shadow-xl p-12 max-w-2xl mx-auto border border-indigo-100 hover-shine`}>
            <div className="w-28 h-28 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-indigo-200 transform transition-all duration-500 hover:rotate-3 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-indigo-950 mb-4">Your Feed is Empty</h2>
            <p className="text-xl font-serif text-indigo-800 mb-10 max-w-lg mx-auto">Start your writing journey by creating your first blog post and share your unique perspective with the world!</p>
            <a href="/write" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-serif py-4 px-10 rounded-xl hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-bold">
              Create Your First Blog
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                author={blog.author.name}
                authorId={blog.authorId}
                title={blog.title}
                content={blog.content}
                date={blog.createdAt}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

