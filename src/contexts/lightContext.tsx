import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface LightContextType {
  isLight: boolean,
  setIsLight: Dispatch<SetStateAction<boolean>>
}

interface LightContextProviderProps {
  children: ReactNode
}

export const LightContext = createContext({} as LightContextType)


export const LightContextProvider = ({ children }: LightContextProviderProps) => {

  const [isLight, setIsLight] = useState<boolean>(false)



  return (
    <LightContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </LightContext.Provider>
  )
}