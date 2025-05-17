/**
 * Authentication utility functions
 */

/**
 * Check if the user is authenticated
 * @returns boolean indicating if the user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

/**
 * Set authentication data in localStorage
 * @param token JWT token
 * @param name User name
 * @param id User ID
 */
export const setAuthData = (token: string, name: string, id: string | number): void => {
  localStorage.setItem('token', token);
  localStorage.setItem('name', name);
  localStorage.setItem('id', id.toString());
  
  // Dispatch a custom event to notify other components about the auth change
  window.dispatchEvent(new Event('auth-change'));
};

/**
 * Clear authentication data from localStorage
 */
export const clearAuthData = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('id');
  
  // Dispatch a custom event to notify other components about the auth change
  window.dispatchEvent(new Event('auth-change'));
};

/**
 * Get user data from localStorage
 * @returns Object containing user data or null if not authenticated
 */
export const getUserData = () => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const id = localStorage.getItem('id');
  
  if (!token || !name || !id) {
    return null;
  }
  
  return {
    token,
    name,
    id
  };
};
