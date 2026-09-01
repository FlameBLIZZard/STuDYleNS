import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { NotebookPaper } from "../components/NotebookPaper";

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
      <View className="mb-8 w-40 relative">
        {/* Document Thumbnail */}
        <Animated.View entering={FadeIn.duration(500)} exiting={FadeOut}>
          <NotebookPaper scale={1} />
        </Animated.View>
        
        {/* Scanning Overlay Line */}
        <Animated.View 
          className="absolute inset-x-0 h-1 bg-[#48A07A] shadow-[0_0_10px_#48A07A]"
          style={{ top: '50%' }}
        />
      </View>
      
      <Text className="text-white text-2xl font-bold mb-6 text-center">
        StudyLens is analyzing...
      </Text>
      
      <View className="bg-white/20 px-6 py-3 rounded-full flex-row items-center">
        <ActivityIndicator size="small" color="white" className="mr-3" />
        <Text className="text-white text-lg font-medium">{steps[currentStep]}</Text>
      </View>
    </View>
  );
}
