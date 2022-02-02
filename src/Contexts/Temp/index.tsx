import React, { createContext, useState } from 'react';

interface TempContextData {
  tempData: string;
  setTemp(temp_data:string): Promise<void>;
}

const TempContext = createContext<TempContextData>({} as TempContextData);

export const TempProvider: React.FC = ({ children }) => {
  const [tempData, setTempData] = useState('');

  async function setTemp(temp_data: string) {
    setTempData(temp_data);
  }

  return (
    <TempContext.Provider value={{ tempData, setTemp }}>
      {children}
    </TempContext.Provider>
  )
}

export default TempContext;
