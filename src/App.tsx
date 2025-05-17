import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Blogs from './pages/Blogs'
import Dashboard from './pages/Dasboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import TestEnv from './pages/TestEnv'
import Update from './pages/Update'
import Write from './pages/Write'

function App() {
  // State is set but used only for event handling
  const [, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for authentication token
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setIsLoading(false);

    // Log authentication status for debugging
    if (token) {
      console.log("App: User is authenticated");
    } else {
      console.log("App: User is not authenticated");
    }

    // Listen for storage events (when localStorage changes)
    const handleStorageChange = () => {
      const currentToken = localStorage.getItem('token');
      setIsAuthenticated(!!currentToken);
      console.log("Storage changed, authentication updated:", !!currentToken);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-slate-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-900"></div>
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          {/* Protected routes */}
          <Route
            path="/blogs"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/write"
            element={
              <ProtectedRoute>
                <Write />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update/:id"
            element={
              <ProtectedRoute>
                <Update />
              </ProtectedRoute>
            }
          />




          {/* Test route */}
          <Route path="/test-env" element={<TestEnv />} />

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
