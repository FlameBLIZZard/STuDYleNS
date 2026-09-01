import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeInUp, FadeInRight, ZoomIn } from "react-native-reanimated";

export default function MistakeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background pt-4 px-4 pb-12">
      
      {/* Alert Header */}
      <Animated.View entering={FadeInUp.delay(300).duration(500)} className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex-row items-center shadow-sm">
        <View className="bg-red-100 w-12 h-12 rounded-full items-center justify-center mr-4">
          <Text className="text-xl">🚨</Text>
        </View>
        <View className="flex-1">
          <Text className="text-lg font-bold text-red-800">Mistake detected</Text>
          <Text className="text-red-600 font-medium text-sm mt-0.5">StudyLens found an error in Step 4</Text>
        </View>
      </Animated.View>

      {/* Notebook UI */}
      <Animated.View entering={FadeIn.delay(100).duration(400)} className="bg-[#FAFAFA] rounded-3xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
        {/* Notebook Header */}
        <View className="bg-gray-100 px-6 py-3 border-b border-gray-200 flex-row justify-between items-center">
          <Text className="text-textSecondary font-bold text-xs uppercase tracking-wider">Your Work</Text>
          <Text className="text-textSecondary text-xs">Solve for x</Text>
        </View>

        {/* Notebook Content - Lines styling */}
        <View className="p-6 relative">
          <View className="absolute inset-0 top-6 left-6 right-6 opacity-30">
            {[...Array(6)].map((_, i) => (
              <View key={i} className="h-12 border-b border-blue-200" />
            ))}
          </View>

          <View className="gap-5">
            {/* Step 1 */}
            <Animated.View entering={FadeInRight.delay(400).duration(400)}>
              <Text className="text-gray-400 text-xs font-bold mb-1">Step 1</Text>
              <Text className="text-text text-xl font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x + 3 = 11</Text>
            </Animated.View>

            {/* Step 2 */}
            <Animated.View entering={FadeInRight.delay(700).duration(400)}>
              <Text className="text-gray-400 text-xs font-bold mb-1">Step 2</Text>
              <Text className="text-text text-xl font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 11 - 3</Text>
            </Animated.View>

            {/* Step 3 */}
            <Animated.View entering={FadeInRight.delay(1000).duration(400)}>
              <Text className="text-gray-400 text-xs font-bold mb-1">Step 3</Text>
              <Text className="text-text text-xl font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
            </Animated.View>

            {/* Step 4 (Mistake) */}
            <Animated.View entering={ZoomIn.delay(1400).duration(500)} className="bg-red-50 border-2 border-red-400 rounded-xl p-3 relative shadow-md">
              <Text className="text-red-800 text-xs font-bold mb-1">Step 4 (Mistake)</Text>
              <Text className="text-red-900 text-2xl font-mono tracking-widest font-bold" style={{ fontFamily: 'monospace' }}>x = 3</Text>
              <View className="absolute right-3 top-1/2 -translate-y-3">
                <Text className="text-red-500 text-2xl font-bold">✕</Text>
              </View>
            </Animated.View>
          </View>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(2000).duration(500)}>
        <TouchableOpacity 
          className="bg-primary rounded-full p-4 items-center shadow-sm mb-10"
          onPress={() => router.push("/explanation")}
        >
          <Text className="text-white text-lg font-bold">Explain my mistake</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}
