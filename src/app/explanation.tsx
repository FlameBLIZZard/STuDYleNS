import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function ExplanationScreen() {
  const router = useRouter();

  // We will use react-native-reanimated for progressive disclosure
  // React Native Reanimated FadeInUp handles entering animations nicely.

  return (
    <ScrollView className="flex-1 bg-background pt-6 px-4 pb-12">
      <Animated.View entering={FadeInUp.delay(100).duration(500)}>
        <Text className="text-3xl font-bold text-text mb-6 px-2">Let's understand what happened</Text>
      </Animated.View>

      {/* SECTION 1 - WHAT YOU DID RIGHT */}
      <Animated.View 
        entering={FadeInUp.delay(500).duration(500)}
        className="bg-card rounded-3xl p-5 shadow-sm border border-gray-100 mb-5"
      >
        <Text className="text-secondary font-bold text-sm uppercase tracking-wider mb-4">You got this part right</Text>
        
        <View className="items-center mb-4 bg-gray-50 p-4 rounded-2xl">
          <Text className="text-text text-lg font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x + 3 = 11</Text>
          <Text className="text-gray-400 my-1">↓</Text>
          <Text className="text-text text-lg font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 11 - 3</Text>
          <Text className="text-gray-400 my-1">↓</Text>
          <View className="flex-row items-center">
            <Text className="text-text text-lg font-bold font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
            <Text className="text-secondary ml-2 text-lg">✓</Text>
          </View>
        </View>

        <Text className="text-textSecondary text-center leading-relaxed font-medium">
          You correctly simplified the equation and reached 2x = 8.
        </Text>
      </Animated.View>

      {/* SECTION 2 - WHERE IT WENT WRONG */}
      <Animated.View 
        entering={FadeInUp.delay(1500).duration(500)}
        className="bg-red-50 rounded-3xl p-5 shadow-sm border border-red-100 mb-5"
      >
        <Text className="text-red-700 font-bold text-sm uppercase tracking-wider mb-4">Here's where things changed</Text>
        
        <View className="items-center mb-4 bg-white/60 p-4 rounded-2xl">
          <Text className="text-text text-lg font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
          <Text className="text-gray-400 my-1">↓</Text>
          <View className="flex-row items-center bg-red-100 px-4 py-2 rounded-xl">
            <Text className="text-red-900 text-lg font-bold font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>x = 3</Text>
            <Text className="text-red-500 ml-2 text-lg">✕</Text>
          </View>
        </View>

        <Text className="text-red-800 text-center leading-relaxed font-medium">
          The mistake occurred while isolating x.
        </Text>
      </Animated.View>

      {/* SECTION 3 - WHY */}
      <Animated.View 
        entering={FadeInUp.delay(2500).duration(500)}
        className="bg-[#E8F4F1] rounded-3xl p-5 shadow-sm border border-[#CDE5DF] mb-5"
      >
        <Text className="text-secondary font-bold text-sm uppercase tracking-wider mb-4">Let's fix this step</Text>
        
        <Text className="text-text text-center font-medium mb-4">
          Since <Text className="font-bold">x is multiplied by 2</Text>, divide BOTH sides by 2.
        </Text>

        <View className="items-center bg-white p-5 rounded-2xl mb-4">
          <Text className="text-text text-lg font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
          <Text className="text-secondary text-base font-mono tracking-widest my-1" style={{ fontFamily: 'monospace' }}>÷2   ÷2</Text>
          <View className="h-px bg-secondary w-32 my-2 opacity-50" />
          <Text className="text-text text-xl font-bold font-mono tracking-widest mt-1" style={{ fontFamily: 'monospace' }}>x = 4</Text>
        </View>

        <Text className="text-textSecondary text-center font-medium">
          8 ÷ 2 = 4, so x = 4.
        </Text>
      </Animated.View>

      {/* SECTION 4 - TEACHER TAKEAWAY */}
      <Animated.View 
        entering={FadeInUp.delay(3500).duration(500)}
        className="bg-primary/5 rounded-2xl p-4 border border-primary/20 mb-8"
      >
        <View className="flex-row items-center mb-2">
          <Text className="text-primary mr-2 text-lg">💡</Text>
          <Text className="text-primary font-bold">Remember</Text>
        </View>
        <Text className="text-text font-medium ml-7">
          Whatever you do to one side of an equation, do to the other.
        </Text>
      </Animated.View>

      {/* ACTIONS */}
      <Animated.View entering={FadeInUp.delay(4000).duration(500)} className="mb-10 gap-4">
        <TouchableOpacity 
          className="bg-primary rounded-full p-4 items-center shadow-sm"
          onPress={() => router.push("/practice")}
        >
          <Text className="text-white text-lg font-bold">Try a similar problem</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-white border border-gray-200 rounded-full p-4 items-center shadow-sm"
          onPress={() => router.back()}
        >
          <Text className="text-text text-lg font-medium">Back to my work</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}
