
import React, { createContext, useContext, useState } from 'react';

type CameraState = {
  targetPosition: [number, number, number];
  targetZoom: number;
};

type CameraContextType = {
  cameraState: CameraState;
  setCameraState: (state: CameraState) => void;
};

const defaultState: CameraState = {
  targetPosition: [0, 0, 200],
  targetZoom: 10,
};

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cameraState, setCameraState] = useState<CameraState>(defaultState);

  return (
    <CameraContext.Provider value={{ cameraState, setCameraState }}>
      {children}
    </CameraContext.Provider>
  );
};

export const useCamera = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error('useCamera must be used within a CameraProvider');
  }
  return context;
};