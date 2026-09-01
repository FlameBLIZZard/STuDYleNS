import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function ExplanationScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background pt-6 px-6">
      
      <View className="bg-card rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
        <View className="flex-row items-center mb-2">
          <Text className="text-xl mr-2">✅</Text>
          <Text className="text-lg font-bold text-text">What you did right</Text>
        </View>
        <Text className="text-textSecondary leading-relaxed ml-7">
          You correctly set up the equation and subtracted 3 from both sides. You also correctly identified that 2x = 8.
        </Text>
      </View>

      <View className="bg-red-50 rounded-3xl p-6 shadow-sm border border-red-100 mb-6">
        <View className="flex-row items-center mb-2">
          <Text className="text-xl mr-2">❌</Text>
          <Text className="text-lg font-bold text-red-800">Where you went wrong</Text>
        </View>
        <Text className="text-red-700 leading-relaxed ml-7">
          In the final step, you divided 8 by 2, but wrote the answer as 3 instead of 4.
        </Text>
      </View>

      <View className="bg-[#E8F4F1] rounded-3xl p-6 shadow-sm border border-[#CDE5DF] mb-8">
        <View className="flex-row items-center mb-3">
          <Text className="text-xl mr-2">💡</Text>
          <Text className="text-lg font-bold text-secondary">Correct reasoning</Text>
        </View>
        <View className="bg-white p-4 rounded-xl mb-3">
          <Text className="text-text font-mono text-center text-lg">8 ÷ 2 = 4</Text>
        </View>
        <Text className="text-textSecondary text-center">
          So the final answer should be <Text className="font-bold text-text">x = 4</Text>.
        </Text>
      </View>

      <TouchableOpacity 
        className="bg-primary rounded-full p-4 items-center shadow-sm mb-10"
        onPress={() => router.push("/practice")}
      >
        <Text className="text-white text-lg font-bold">Try a similar problem</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
