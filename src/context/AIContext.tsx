import React, { createContext, useContext, useEffect, useState } from 'react';
import { StudyLensAI, createStudyLensAI } from '../ai/StudyLensAI';
import { DemoFallbackProvider } from '../ai/DemoFallbackProvider';

type AIState = {
  ai: StudyLensAI;
  isReady: boolean;
};

const defaultAI = new DemoFallbackProvider();

const AIContext = createContext<AIState>({
  ai: defaultAI,
  isReady: false,
});

export const useAI = () => useContext(AIContext);

export const AIProvider = ({ children }: { children: React.ReactNode }) => {
  const [ai, setAi] = useState<StudyLensAI>(defaultAI);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function init() {
      const provider = await createStudyLensAI();
      setAi(provider);
      setIsReady(true);
    }
    init();
  }, []);

  return (
    <AIContext.Provider value={{ ai, isReady }}>
      {children}
    </AIContext.Provider>
  );
};
