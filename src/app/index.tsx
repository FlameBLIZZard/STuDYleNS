import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background pt-16 px-6">
      <View className="mb-8">
        <Text className="text-3xl font-bold text-text mb-2">Good morning</Text>
        <Text className="text-xl text-textSecondary">Ready to learn?</Text>
      </View>

      <TouchableOpacity
        className="bg-primary rounded-3xl p-6 mb-6 items-center shadow-sm"
        onPress={() => router.push("/scan")}
      >
        <View className="bg-white/20 p-4 rounded-full mb-3">
          <Text className="text-4xl">📸</Text>
        </View>
        <Text className="text-white text-xl font-bold mb-1">Scan Homework</Text>
        <Text className="text-white/80 text-center">Take a photo and StudyLens will find where you went wrong.</Text>
      </TouchableOpacity>

      <View className="flex-row gap-4 mb-8">
        <TouchableOpacity className="flex-1 bg-card p-4 rounded-2xl items-center shadow-sm border border-gray-100">
          <Text className="text-2xl mb-2">💬</Text>
          <Text className="text-text font-semibold">Ask StudyLens</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-card p-4 rounded-2xl items-center shadow-sm border border-gray-100">
          <Text className="text-2xl mb-2">✏️</Text>
          <Text className="text-text font-semibold">Practice</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-card rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold text-text">Your Progress</Text>
          <TouchableOpacity onPress={() => router.push("/progress")}>
            <Text className="text-primary font-semibold">View All</Text>
          </TouchableOpacity>
        </View>
        <View className="gap-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-textSecondary">Linear Equations</Text>
            <Text className="font-bold text-secondary">72%</Text>
          </View>
          <View className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
            <View className="h-full bg-secondary w-[72%] rounded-full" />
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-sm text-textSecondary">Recent mistakes: 4</Text>
            <Text className="text-sm text-textSecondary">Focus: Solving</Text>
          </View>
        </View>
      </View>

      <View className="bg-[#E8F4F1] rounded-3xl p-6 mb-8">
        <Text className="text-sm font-bold text-secondary mb-1">RECOMMENDED FOR YOU</Text>
        <Text className="text-lg font-bold text-text mb-2">Review: Isolating Variables</Text>
        <TouchableOpacity className="bg-white self-start px-4 py-2 rounded-full mt-2">
          <Text className="text-secondary font-bold text-sm">Start Quick Lesson</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
