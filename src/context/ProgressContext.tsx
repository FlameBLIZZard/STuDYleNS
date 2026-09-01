import React, { createContext, useContext, useState, useEffect } from 'react';

// Global Singleton Store to survive all navigation unmounts
const defaultActivity = [
  { id: '1', label: 'Mistake identified', completed: false },
  { id: '2', label: 'Concept explained', completed: false },
  { id: '3', label: 'Practice completed', completed: false },
  { id: '4', label: 'Skill reinforced', completed: false },
];

let globalMastery = 50;
let globalActivity = [...defaultActivity];
let listeners: Array<() => void> = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

type ProgressState = {
  mastery: number;
  recentActivity: Array<{ id: string; label: string; completed: boolean }>;
  completePractice: () => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressState>({
  mastery: 50,
  recentActivity: defaultActivity,
  completePractice: () => {},
  resetProgress: () => {},
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [mastery, setMastery] = useState(globalMastery);
  const [recentActivity, setRecentActivity] = useState(globalActivity);

  useEffect(() => {
    const handleUpdate = () => {
      setMastery(globalMastery);
      setRecentActivity(globalActivity);
    };
    listeners.push(handleUpdate);
    return () => {
      listeners = listeners.filter(l => l !== handleUpdate);
    };
  }, []);

  const completePractice = () => {
    globalMastery = 75;
    globalActivity = globalActivity.map(item => ({ ...item, completed: true }));
    notifyListeners();
  };

  const resetProgress = () => {
    globalMastery = 50;
    globalActivity = [...defaultActivity];
    notifyListeners();
  };

  return (
    <ProgressContext.Provider value={{ mastery, recentActivity, completePractice, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
