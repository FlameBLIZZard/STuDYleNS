import "../global.css";
import { Stack, ThemeProvider, DefaultTheme } from "expo-router";

import { ProgressProvider } from "../context/ProgressContext";

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F8F9FA',
    primary: '#2B5B84',
  },
};

export default function RootLayout() {
  return (
    <ProgressProvider>
      <ThemeProvider value={LightTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerTintColor: '#2B5B84',
          headerTitleStyle: { fontWeight: '600' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: '#F8F9FA' }
        }}
      >
        <Stack.Screen name="index" options={{ title: 'StudyLens', headerShown: false }} />
        <Stack.Screen name="scan" options={{ title: 'Scan Homework', presentation: 'modal' }} />
        <Stack.Screen name="analysis" options={{ title: 'Analysis', headerShown: false }} />
        <Stack.Screen name="mistake" options={{ title: 'Result' }} />
        <Stack.Screen name="explanation" options={{ title: 'Explanation' }} />
        <Stack.Screen name="practice" options={{ title: 'Practice' }} />
        <Stack.Screen name="verification" options={{ title: 'Verification', headerShown: false }} />
        <Stack.Screen name="progress" options={{ title: 'Your Progress' }} />
      </Stack>
    </ThemeProvider>
    </ProgressProvider>
  );
}
