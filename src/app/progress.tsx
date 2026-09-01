import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function ProgressScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background pt-6 px-6">
      <View className="mb-8 items-center">
        <View className="relative w-32 h-32 items-center justify-center mb-4">
          <View className="absolute w-full h-full rounded-full border-8 border-gray-100" />
          <View className="absolute w-full h-full rounded-full border-8 border-secondary border-t-transparent border-l-transparent" style={{ transform: [{ rotate: '45deg' }] }} />
          <Text className="text-3xl font-bold text-text">72%</Text>
        </View>
        <Text className="text-xl font-bold text-text">Overall Progress</Text>
        <Text className="text-textSecondary">Algebra I</Text>
      </View>

      <View className="bg-card rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
        <Text className="text-lg font-bold text-text mb-4">Topic Progress</Text>
        
        <View className="gap-4">
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-medium text-text">Linear Equations</Text>
              <Text className="text-textSecondary font-bold">72%</Text>
            </View>
            <View className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
              <View className="h-full bg-secondary w-[72%] rounded-full" />
            </View>
          </View>

          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-medium text-text">Fractions</Text>
              <Text className="text-textSecondary font-bold">95%</Text>
            </View>
            <View className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
              <View className="h-full bg-success w-[95%] rounded-full" />
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row gap-4 mb-6">
        <View className="flex-1 bg-red-50 p-5 rounded-3xl items-center shadow-sm border border-red-100">
          <Text className="text-3xl mb-2">4</Text>
          <Text className="text-red-700 font-medium text-center">Recent Mistakes</Text>
        </View>
        <View className="flex-1 bg-yellow-50 p-5 rounded-3xl items-center shadow-sm border border-yellow-100">
          <Text className="text-3xl mb-2">⚠️</Text>
          <Text className="text-yellow-700 font-medium text-center">Weak Area: Division</Text>
        </View>
      </View>

      <View className="bg-[#E8F4F1] rounded-3xl p-6 mb-10">
        <Text className="text-sm font-bold text-secondary mb-1">RECOMMENDED NEXT STEP</Text>
        <Text className="text-lg font-bold text-text mb-2">Practice dividing both sides</Text>
        <TouchableOpacity 
          className="bg-primary self-start px-6 py-3 rounded-full mt-2 shadow-sm"
          onPress={() => router.navigate("/")}
        >
          <Text className="text-white font-bold text-sm">Start Practice</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
