import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

const steps = [
  "Reading your work...",
  "Understanding your steps...",
  "Checking your reasoning...",
  "Looking for mistakes..."
];

export default function AnalysisScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let step = 0;
    // Total 4 steps, max 2.5 seconds total -> ~600ms per step
    const interval = setInterval(() => {
      step += 1;
      if (step < steps.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          router.replace("/mistake");
        }, 300);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex-1 bg-primary justify-center items-center px-6">
      <View className="w-32 h-32 bg-white/10 rounded-full items-center justify-center mb-10 border-4 border-white/20">
        <ActivityIndicator size="large" color="white" />
      </View>
      
      <Text className="text-white text-2xl font-bold mb-6 text-center">
        StudyLens is analyzing...
      </Text>
      
      <View className="bg-white/20 px-6 py-3 rounded-full">
        <Text className="text-white text-lg font-medium">{steps[currentStep]}</Text>
      </View>
    </View>
  );
}
