const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-950 to-purple-900 py-4 shadow-xl border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="/" className="flex items-center group">
          <div className="flex items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl shadow-lg flex items-center justify-center mr-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-900" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
            <div className="text-4xl font-bold font-serif">
              <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-200 text-transparent bg-clip-text animate-gradient-text">BlogNest</span>
            </div>
          </div>
        </a>

        <div className="flex items-center space-x-6">
          <a
            href="/blogs"
            className="text-slate-100 font-serif text-lg hover:text-white transition-colors duration-200 flex items-center border-b-2 border-transparent hover:border-purple-300 pb-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            Explore Blogs
          </a>

          <a
            href="/signup"
            className="text-slate-100 font-serif text-lg hover:text-white transition-colors duration-200 flex items-center border-b-2 border-transparent hover:border-purple-300 pb-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Sign up
          </a>

          <a
            href="/signin"
            className="bg-white/10 backdrop-blur-md text-white font-serif text-lg px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center transform hover:-translate-y-1 border border-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar