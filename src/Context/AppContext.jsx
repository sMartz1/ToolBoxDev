import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import { getProfileData } from '../utils/IPC/ProfileIpc';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  const getProfile = useCallback(async()=>{
    const result = await getProfileData();
    setProfile(result);
 
  },[])

  useEffect(() => {
      getProfile();
  }, []);

  return (
    <AppContext.Provider value={{ profile }}>
      {children}
    </AppContext.Provider>
  );
};