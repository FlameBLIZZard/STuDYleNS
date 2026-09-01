import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useProgress } from "../context/ProgressContext";

export default function PracticeScreen() {
  const router = useRouter();
  const { completePractice } = useProgress();
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    // Accept variations like '5', 'x=5', 'x = 5'
    const normalized = answer.toLowerCase().replace(/\s/g, '');
    if (normalized === "5" || normalized === "x=5") {
      completePractice();
      router.push("/verification?status=success");
    } else {
      setShowHint(true);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-background"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-4 pt-6 pb-12">
        <Animated.View entering={FadeInUp.delay(100).duration(500)}>
          <Text className="text-3xl font-bold text-text mb-6 px-2">Let's reinforce this</Text>
        </Animated.View>

        {/* CONTEXT CARD */}
        <Animated.View 
          entering={FadeInUp.delay(300).duration(500)}
          className="bg-card rounded-3xl p-5 shadow-sm border border-gray-100 mb-6"
        >
          <View className="flex-row justify-between items-center mb-3">
            <View className="bg-[#E8F4F1] px-3 py-1 rounded-full">
              <Text className="text-secondary font-bold text-xs uppercase tracking-wider">Personalized for you</Text>
            </View>
            <Text className="text-textSecondary text-xs font-medium">Focus: Solving linear equations</Text>
          </View>
          <Text className="text-text font-medium leading-relaxed">
            You made a small mistake when isolating x. Here's a similar problem to practice that step.
          </Text>
        </Animated.View>

        {/* PROBLEM CARD */}
        <Animated.View 
          entering={FadeInUp.delay(500).duration(500)}
          className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 items-center mb-6"
        >
          <Text className="text-textSecondary mb-4 text-center text-lg font-medium">Find x</Text>
          <Text className="text-4xl font-bold text-text font-mono mb-8 tracking-widest" style={{ fontFamily: 'monospace' }}>3x + 5 = 20</Text>
          
          <View className="flex-row items-center bg-gray-50 p-2 rounded-2xl border border-gray-100">
            <Text className="text-3xl font-mono mx-4 text-textSecondary" style={{ fontFamily: 'monospace' }}>x =</Text>
            <TextInput 
              className="bg-white border border-gray-200 rounded-xl w-32 h-16 text-center text-2xl font-bold font-mono"
              style={{ fontFamily: 'monospace' }}
              keyboardType="default" // Allow typing "x = 5"
              autoCapitalize="none"
              autoCorrect={false}
              value={answer}
              onChangeText={(text) => {
                setAnswer(text);
                if (showHint) setShowHint(false); // Hide hint when typing again
              }}
              placeholder="?"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </Animated.View>

        {/* HINT SECTION */}
        {showHint && (
          <Animated.View 
            entering={FadeInUp.duration(400)}
            className="bg-red-50 rounded-2xl p-5 border border-red-100 mb-6"
          >
            <View className="flex-row items-center mb-2">
              <Text className="text-xl mr-2">🤔</Text>
              <Text className="text-red-800 font-bold">Not quite — let's look at the step where you isolate x.</Text>
            </View>
            <Text className="text-red-700 ml-8 font-medium">
              First subtract 5 from both sides.
            </Text>
          </Animated.View>
        )}

        <View className="flex-1 justify-end">
          <TouchableOpacity 
            className={`rounded-full p-4 items-center shadow-sm ${answer.length > 0 ? 'bg-primary' : 'bg-gray-300'}`}
            onPress={checkAnswer}
            disabled={answer.length === 0}
          >
            <Text className="text-white text-lg font-bold">Check Answer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
