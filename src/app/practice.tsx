import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function PracticeScreen() {
  const router = useRouter();
  const [answer, setAnswer] = useState("");

  const checkAnswer = () => {
    if (answer.trim() === "5") {
      router.push("/verification?status=success");
    } else {
      router.push("/verification?status=error");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-background"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6 pt-6 pb-10">
        <View className="mb-6">
          <Text className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">Personalized for you</Text>
          <Text className="text-2xl font-bold text-text">Practice this concept</Text>
        </View>

        <View className="bg-card rounded-3xl p-8 shadow-sm border border-gray-100 items-center mb-8">
          <Text className="text-textSecondary mb-6 text-center text-lg">Solve for x:</Text>
          <Text className="text-4xl font-bold text-text font-mono mb-8">3x + 4 = 19</Text>
          
          <View className="flex-row items-center">
            <Text className="text-3xl font-mono mr-4 text-textSecondary">x =</Text>
            <TextInput 
              className="bg-gray-50 border border-gray-200 rounded-2xl w-24 h-16 text-center text-2xl font-bold font-mono"
              keyboardType="number-pad"
              value={answer}
              onChangeText={setAnswer}
              maxLength={4}
            />
          </View>
        </View>

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
