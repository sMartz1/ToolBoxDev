import React, { useContext } from 'react'
import { useIPC } from './Ipc';
const ProfileContext = React.createContext()

export const ProfileProvider = ({ children }) => {
  const { profile } = useIPC();

  const valuesProvider = { 
    profile,
     }
  return (
    <ProfileContext.Provider value={valuesProvider}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const { profile } = useContext(ProfileContext)
  return { profile }
}