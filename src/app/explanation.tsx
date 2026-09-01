import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function ExplanationScreen() {
  const router = useRouter();

  // We will use react-native-reanimated for progressive disclosure
  // React Native Reanimated FadeInUp handles entering animations nicely.

  return (
    <ScrollView className="flex-1 bg-background pt-4 px-4 pb-8">
      <Animated.View entering={FadeInUp.delay(100).duration(500)}>
        <Text className="text-2xl font-bold text-text mb-4 px-2">Let's understand what happened</Text>
      </Animated.View>

      {/* SECTION 1 - WHAT YOU DID RIGHT */}
      <Animated.View 
        entering={FadeInUp.delay(500).duration(500)}
        className="bg-card rounded-2xl p-4 shadow-sm border border-gray-100 mb-3"
      >
        <Text className="text-secondary font-bold text-xs uppercase tracking-wider mb-2">You got this part right</Text>
        
        <View className="items-center mb-2 bg-gray-50 py-2 rounded-xl">
          <Text className="text-text text-base font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x + 3 = 11</Text>
          <Text className="text-gray-400 text-xs">↓</Text>
          <Text className="text-text text-base font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 11 - 3</Text>
          <Text className="text-gray-400 text-xs">↓</Text>
          <View className="flex-row items-center">
            <Text className="text-text text-base font-bold font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
            <Text className="text-secondary ml-2 text-base">✓</Text>
          </View>
        </View>

        <Text className="text-textSecondary text-center text-sm font-medium">
          You correctly simplified the equation and reached 2x = 8.
        </Text>
      </Animated.View>

      {/* SECTION 2 - WHERE IT WENT WRONG */}
      <Animated.View 
        entering={FadeInUp.delay(1500).duration(500)}
        className="bg-red-50 rounded-2xl p-4 shadow-sm border border-red-100 mb-3"
      >
        <Text className="text-red-700 font-bold text-xs uppercase tracking-wider mb-2">Here's where things changed</Text>
        
        <View className="items-center mb-2 bg-white/60 py-2 rounded-xl">
          <Text className="text-text text-base font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
          <Text className="text-gray-400 text-xs">↓</Text>
          <View className="flex-row items-center bg-red-100 px-3 py-1 rounded-lg mt-1">
            <Text className="text-red-900 text-base font-bold font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>x = 3</Text>
            <Text className="text-red-500 ml-2 text-base">✕</Text>
          </View>
        </View>

        <Text className="text-red-800 text-center text-sm font-medium">
          The mistake occurred while isolating x.
        </Text>
      </Animated.View>

      {/* SECTION 3 - WHY */}
      <Animated.View 
        entering={FadeInUp.delay(2500).duration(500)}
        className="bg-[#E8F4F1] rounded-2xl p-4 shadow-sm border border-[#CDE5DF] mb-3"
      >
        <Text className="text-secondary font-bold text-xs uppercase tracking-wider mb-2">Let's fix this step</Text>
        
        <Text className="text-text text-center text-sm font-medium mb-3">
          Since <Text className="font-bold">x is multiplied by 2</Text>, divide BOTH sides by 2.
        </Text>

        <View className="items-center bg-white py-3 rounded-xl mb-3">
          <Text className="text-text text-base font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
          <Text className="text-secondary text-sm font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>÷2   ÷2</Text>
          <View className="h-px bg-secondary w-24 my-1 opacity-50" />
          <Text className="text-text text-lg font-bold font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>x = 4</Text>
        </View>

        <Text className="text-textSecondary text-center text-sm font-medium">
          8 ÷ 2 = 4, so x = 4.
        </Text>
      </Animated.View>

      {/* SECTION 4 - TEACHER TAKEAWAY */}
      <Animated.View 
        entering={FadeInUp.delay(3500).duration(500)}
        className="bg-primary/5 rounded-xl p-3 border border-primary/20 mb-6"
      >
        <View className="flex-row items-center mb-1">
          <Text className="text-primary mr-2 text-base">💡</Text>
          <Text className="text-primary font-bold text-sm">Remember</Text>
        </View>
        <Text className="text-text text-sm font-medium ml-6">
          Whatever you do to one side of an equation, do to the other.
        </Text>
      </Animated.View>

      {/* ACTIONS */}
      <Animated.View entering={FadeInUp.delay(4000).duration(500)} className="mb-8 gap-3">
        <TouchableOpacity 
          className="bg-primary rounded-full p-4 items-center shadow-sm"
          onPress={() => router.push("/practice")}
        >
          <Text className="text-white text-base font-bold">Try a similar problem</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-white border border-gray-200 rounded-full p-4 items-center shadow-sm"
          onPress={() => router.back()}
        >
          <Text className="text-text text-base font-medium">Back to my work</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}
