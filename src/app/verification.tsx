import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Animated, { FadeInUp, FadeIn } from "react-native-reanimated";
import { useProgress } from "../context/ProgressContext";

export default function VerificationScreen() {
  const router = useRouter();
  const { status } = useLocalSearchParams();
  const isSuccess = status === 'success';
  const { mastery } = useProgress();

  if (!isSuccess) {
    // Fallback if accessed without success (though we handle errors on practice screen now)
    return (
      <View className="flex-1 justify-center px-6 bg-background">
        <TouchableOpacity onPress={() => router.back()} className="bg-primary p-4 rounded-full">
          <Text className="text-white text-center font-bold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-background pt-8 px-4 pb-12">
      {/* HEADER */}
      <Animated.View entering={FadeInUp.delay(100).duration(500)} className="items-center mb-8">
        <View className="w-24 h-24 rounded-full items-center justify-center mb-4 bg-[#E8F4F1] border-4 border-[#CDE5DF]">
          <Text className="text-5xl">🏆</Text>
        </View>
        <Text className="text-3xl font-bold mb-2 text-secondary">
          Correct!
        </Text>
        <Text className="text-center text-textSecondary text-base px-4 font-medium">
          You fixed the mistake from your previous attempt.
        </Text>
      </Animated.View>

      {/* COMPARISON CARD */}
      <Animated.View 
        entering={FadeInUp.delay(400).duration(500)}
        className="bg-card rounded-3xl p-6 shadow-sm border border-gray-100 mb-6"
      >
        <Text className="text-textSecondary font-bold text-xs uppercase tracking-wider mb-4">Growth</Text>
        
        <View className="mb-4 opacity-60">
          <Text className="text-xs text-textSecondary mb-1 font-medium">Original Mistake</Text>
          <View className="flex-row items-center">
            <Text className="text-text text-lg font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8 → x = 3</Text>
            <Text className="text-red-500 ml-2 text-base">✕</Text>
          </View>
        </View>

        <View className="h-px bg-gray-100 w-full mb-4" />

        <View>
          <Text className="text-xs text-secondary mb-1 font-bold">Now</Text>
          <View className="flex-row items-center bg-[#E8F4F1] p-3 rounded-xl border border-[#CDE5DF]">
            <Text className="text-text text-lg font-mono font-bold tracking-widest" style={{ fontFamily: 'monospace' }}>3x + 5 = 20 → x = 5</Text>
            <Text className="text-secondary ml-2 text-lg">✓</Text>
          </View>
        </View>
      </Animated.View>

      {/* SKILL REINFORCED */}
      <Animated.View 
        entering={FadeInUp.delay(700).duration(500)}
        className="bg-primary/5 rounded-3xl p-6 border border-primary/10 mb-10"
      >
        <View className="flex-row justify-between items-center mb-4">
          <View>
            <Text className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Skill reinforced</Text>
            <Text className="text-text font-bold text-lg">Solving linear equations</Text>
          </View>
          <Text className="text-2xl">🧠</Text>
        </View>

        {/* Small progress indicator */}
        <View className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
          <Animated.View 
            entering={FadeIn.delay(1000).duration(800)}
            className="h-full bg-secondary rounded-full" 
            style={{ width: `${mastery}%` }}
          />
        </View>
        <Text className="text-right text-xs text-secondary font-bold mt-2">{mastery}% Mastery</Text>
      </Animated.View>

      {/* ACTIONS */}
      <Animated.View entering={FadeInUp.delay(1000).duration(500)} className="gap-4">
        <TouchableOpacity 
          className="bg-primary rounded-full p-4 items-center shadow-sm"
          onPress={() => router.push("/progress")}
        >
          <Text className="text-white text-lg font-bold">See my progress</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-white border border-gray-200 rounded-full p-4 items-center shadow-sm"
          onPress={() => router.push("/practice")}
        >
          <Text className="text-text text-lg font-medium">Practice again</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}
