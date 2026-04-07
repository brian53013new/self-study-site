'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  toggleAdmin: (password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  // 初始化時檢查本地儲存
  useEffect(() => {
    const savedAdmin = localStorage.getItem('is_dev_mode');
    if (savedAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const toggleAdmin = (password: string) => {
    // 這裡設定你的初始密碼，之後可以改成從環境變數讀取
    if (password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('is_dev_mode', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('is_dev_mode');
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdmin, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
