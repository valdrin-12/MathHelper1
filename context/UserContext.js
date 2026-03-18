// Context për menaxhimin e gjendjes së autentifikimit
import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../services/authService';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser duhet të përdoret brenda UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Kontrollo nëse ka përdorues të kyçur kur aplikacioni hapet
  useEffect(() => {
    checkCurrentUser();
  }, []);

  const checkCurrentUser = async () => {
    try {
      setLoading(true);
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error('Gabim gjatë kontrollimit të përdoruesit:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Kyçu me email dhe fjalëkalim
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{ success: boolean, error: string|null }>}
   */
  const login = async (email, password) => {
    try {
      const result = await authService.loginUser({ email, password });
      if (result.success) {
        setUser(result.user);
      }
      return { success: result.success, error: result.error };
    } catch (error) {
      console.error('Gabim gjatë kyçjes:', error);
      return { success: false, error: 'Gabim i papritur. Provoni përsëri.' };
    }
  };

  /**
   * Regjistro përdorues të ri
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{ success: boolean, error: string|null }>}
   */
  const register = async (name, email, password, language) => {
    try {
      const result = await authService.registerUser({ name, email, password, language });
      if (result.success) {
        setUser(result.user);
      }
      return { success: result.success, error: result.error };
    } catch (error) {
      console.error('Gabim gjatë regjistrimit:', error);
      return { success: false, error: 'Gabim i papritur. Provoni përsëri.' };
    }
  };

  /**
   * Çkyçu nga llogaria
   */
  const logout = async () => {
    try {
      console.log('[UserContext] Logout thirret...');
      await authService.logoutUser();
      console.log('[UserContext] authService.logoutUser() u krye');
      setUser(null);
      console.log('[UserContext] setUser(null) u thirr - user duhet të jetë null tani');
    } catch (error) {
      console.error('[UserContext] Gabim gjatë çkyçjes:', error);
    }
  };

  /**
   * Përditëso të dhënat e profilit
   * @param {Object} updates
   * @returns {Promise<{ success: boolean, error: string|null }>}
   */
  const updateProfile = async (updates) => {
    try {
      const result = await authService.updateUser(updates);
      if (result.success) {
        setUser(result.user);
      }
      return { success: result.success, error: result.error };
    } catch (error) {
      console.error('Gabim gjatë përditësimit:', error);
      return { success: false, error: 'Gabim i papritur. Provoni përsëri.' };
    }
  };

  const socialLogin = async (provider, accessToken, language) => {
    try {
      const result = await authService.socialLoginUser({ provider, accessToken, language });
      if (result.success) {
        setUser(result.user);
      }
      return { success: result.success, error: result.error };
    } catch (error) {
      console.error('Gabim gjatë social login:', error);
      return { success: false, error: 'Gabim i papritur. Provoni përsëri.' };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    socialLogin,
    refresh: checkCurrentUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
