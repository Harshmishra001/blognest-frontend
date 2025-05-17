import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [authState, setAuthState] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');

  useEffect(() => {
    // Check for authentication token
    const checkAuth = () => {
      const token = localStorage.getItem('token');

      if (token) {
        console.log("ProtectedRoute: User is authenticated, token found");
        setAuthState('authenticated');
      } else {
        console.log("ProtectedRoute: No authentication token found, redirecting to signin");
        setAuthState('unauthenticated');
      }
    };

    // Check auth immediately
    checkAuth();

    // Set up event listeners for auth changes
    const handleAuthChange = () => {
      console.log("Auth change detected, rechecking authentication");
      checkAuth();
    };

    // Listen for both storage events and our custom auth-change event
    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('auth-change', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('auth-change', handleAuthChange);
    };
  }, []);

  // Show loading spinner while checking authentication
  if (authState === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-slate-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-900"></div>
      </div>
    );
  }

  // Redirect to signin if not authenticated
  if (authState === 'unauthenticated') {
    return <Navigate to="/signin" replace />;
  }

  // Render children if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
