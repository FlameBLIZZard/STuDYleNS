import React, { createContext, useContext, useState } from 'react';

type ProgressState = {
  mastery: number;
  recentActivity: Array<{ id: string; label: string; completed: boolean }>;
  completePractice: () => void;
  resetProgress: () => void;
};

const defaultActivity = [
  { id: '1', label: 'Mistake identified', completed: false },
  { id: '2', label: 'Concept explained', completed: false },
  { id: '3', label: 'Practice completed', completed: false },
  { id: '4', label: 'Skill reinforced', completed: false },
];

const ProgressContext = createContext<ProgressState>({
  mastery: 50,
  recentActivity: defaultActivity,
  completePractice: () => {},
  resetProgress: () => {},
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [mastery, setMastery] = useState(50);
  const [recentActivity, setRecentActivity] = useState(defaultActivity);

  const completePractice = () => {
    setMastery(75);
    setRecentActivity(defaultActivity.map(item => ({ ...item, completed: true })));
  };

  const resetProgress = () => {
    setMastery(50);
    setRecentActivity(defaultActivity);
  };

  return (
    <ProgressContext.Provider value={{ mastery, recentActivity, completePractice, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
